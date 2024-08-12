## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Configuring in Insomnia](#configuring-in-insomnia)
    - [Setting Environment Variables](#setting-environment-variables-in-insomnia)
    - [Creating the Plugin](#creating-the-plugin-in-insomnia)
4. [Using the Generic NodeJS Plugin to Sign/Encrypt Payloads](#using-the-generic-nodejs-plugin-to-signencrypt-payloads)
    - [Set Up Your Environment](#set-up-your-environment)
    - [Preparing Your Keys](#prepare-your-keys)
    - [Create a Payload File](#create-a-payload-file)
    - [Run the Script](#run-the-script)
5. [Testing the Configuration](#testing-the-configuration)

---

## Introduction
This guide explains two methods for signing and encrypting payloads for use in API requests when trying out our APIs:
1. Configuring an encryption plugin directly in Insomnia.
2. Using a Generic NodeJS Plugin to sign and encrypt payloads that can then be used in tools like Insomnia or Postman.

**Important:** Before you can try our APIs, please contact your Relationship Manager to be onboarded. Proper onboarding is required to access the APIs and proceed with testing.
This guide is intended for testing our APIs in a trial environment. If you choose to proceed with full onboarding and move to production, the signing and encryption processes will need to be implemented in your own codebase.

## Prerequisites
- Insomnia installed (for the first method).
- Node.js and npm installed (for both methods).
- Appropriate keys for signing and encryption.

## Configuring in Insomnia

### Setting Environment Variables in Insomnia
1. Open Insomnia.
2. Click on the **Manage Environments** icon (a gear icon) in the top right corner.
3. In the **Manage Environments** dialog, click on **New Environment** to create a new environment, or select an existing environment to edit.
4. Add the following environment variables:

    ```json
    {
      "plugin_gcis_test_sign_encrypt": {
        "jwt": {
          "sign_key": "<your_jwt_sign_key>",
          "encrypt_key": "<your_jwt_encrypt_key>"
        }
      }
    }
    ```

5. Save the environment.

### Creating the Plugin in Insomnia
1. Open Insomnia.
2. Go to **Application** > **Preferences** > **Plugins**.
3. Click on **Create Plugin** or **Generate New Plugin**.
4. Name your plugin, for example, `test-sign-encrypt`.
5. Insomnia will create the necessary folders for the plugin.
6. Navigate to the plugin directory created by Insomnia. The default location is typically within the Insomnia application data folder:
    - Linux: `~/.config/Insomnia/plugins`
    - Windows: `%APPDATA%/Insomnia/plugins`
    - macOS: `~/Library/Application Support/Insomnia/plugins`
7. Open the plugin folder `insomnia-plugin-test-sign-encrypt` and edit files named `main.js` and `package.json`.
8. **Copy the following code into `main.js`**:

    ```javascript
    const jose = require('node-jose');
    const fs = require('fs');

    class JwtService {
        _getBufferOf(obj) {
            if (obj instanceof Buffer) {
                return obj;
            } else if (typeof obj === 'string' || obj instanceof String) {
                return Buffer.from(obj);
            } else {
                return Buffer.from(JSON.stringify(obj));
            }
        }

        _getValueOf(value) {
            if (!value) {
                console.log('The provided value is null or empty.');
            }

            if (fs.existsSync(value)) {
                return fs.readFileSync(value);
            } else {
                return value;
            }
        }

        async sign(content, key) {
            let keyValue = this._getValueOf(key);
            console.log(`The provided key value is\n${keyValue}`);
            let contentBuffer = this._getBufferOf(this._getValueOf(content));
            console.log(`The provided content value is\n${contentBuffer}`);

            let keyStore = jose.JWK.createKeyStore();
            let signKey = await keyStore.add(keyValue, 'pem', { kid: 'signKey' });
            let recipient = {
                key: signKey,
                header: {
                    alg: 'RS256',
                    typ: 'JWT'
                },
                reference: false
            };
            let signedContent = await jose.JWS.createSign({ format: 'compact' }, recipient)
                .update(contentBuffer)
                .final();
            console.log('The provided content is signed successfully.');
            console.log(`The signed content is\n${signedContent}`);
            return signedContent;
        }

        async encrypt(content, key) {
            let keyValue = this._getValueOf(key);
            console.log(`The provided key value is\n${keyValue}`);
            let contentBuffer = this._getBufferOf(this._getValueOf(content));
            console.log(`The provided content value is\n${contentBuffer}`);

            let keyStore = jose.JWK.createKeyStore();
            let encKey = await keyStore.add(keyValue, 'pem', { kid: 'encKey' });
            let recipient = {
                key: encKey,
                header: {
                    alg: 'RSA-OAEP'
                },
                reference: false
            };
            let opts = {
                zip: true,
                format: 'compact',
                contentAlg: 'A256CBC-HS512'
            };
            let encryptedContent = await jose.JWE.createEncrypt(opts, recipient)
                .update(contentBuffer)
                .final();
            console.log('The provided content is encrypted successfully.');
            console.log(`Encrypted content:\n${encryptedContent}`);
            return encryptedContent;
        }

        async signThenEncrypt(content, signKey, encryptKey) {
            let signedContent = await this.sign(content, signKey);
            return this.encrypt(signedContent, encryptKey);
        }
    }

    let jwtHelper = new JwtService();

    module.exports.requestHooks = [
        async context => {
            let url = context.request.getUrl().toLowerCase();
            if (url.endsWith('/auth') || url.endsWith('/connect/token')) {
                let requestBody = context.request.getBody();
                if (requestBody.mimeType === 'application/x-www-form-urlencoded') {
                    let params = requestBody.params;
                    for (const element of params) {
                        if (element.name === 'client_assertion') {
                            let signKey = context.request.getEnvironmentVariable('plugin_gcis_test_sign_encrypt').jwt.sign_key;
                            let content = element.value;
                            let signedContent = await jwtHelper.sign(content, signKey);
                            element.value = signedContent;
                            break;
                        }
                    }
                }
            } else if (url.endsWith('/graphql')) {
                let requestBody = context.request.getBody();
                let payload = null;
                try {
                    payload = JSON.parse(requestBody.text);
                } catch (e) {
                    console.log(e);
                }
                if (payload != null && payload.variables != null && payload.variables.input != null && payload.variables.input.encryptedPayload != null) {
                    let signKey = context.request.getEnvironmentVariable('plugin_gcis_test_sign_encrypt').jwt.sign_key;
                    let encryptKey = context.request.getEnvironmentVariable('plugin_gcis_test_sign_encrypt').jwt.encrypt_key;
                    let content = JSON.stringify(payload.variables.input.encryptedPayload);
                    let encryptedSignedContent = await jwtHelper.signThenEncrypt(content, signKey, encryptKey);
                    payload.variables.input.encryptedPayload = encryptedSignedContent;
                    requestBody.text = JSON.stringify(payload);
                }
            } else if (url.endsWith('/payment/submit') || url.match('\/payto\/.*') || url.match(/payment\/[a-z]{2}\/v.*\/(npp|de|rtgs|ach|fast|paynow|cbft)$/)) {
            let requestBody = context.request.getBody();
            const regex = /((?:secured_pain001)|(?:secured_payload))(?:\"|\:|\s|\n)+((?:.|\n)+(?=\}))/gm;
            let matches = regex.exec(requestBody.text);
            if (matches) {
                let key = matches[1];
                let content = matches[2];
                if (content != null && typeof content == 'string') {
                    let signKey = context.request.getEnvironmentVariable('plugin_gcis_test_sign_encrypt')['jwt']['sign_key'];
                    let encryptKey = context.request.getEnvironmentVariable('plugin_gcis_test_sign_encrypt')['jwt']['encrypt_key'];
                    let encryptedSignedContent = await jwtHelper.signThenEncrypt(content, signKey, encryptKey);
                    let payload = {};
                    payload[key] = encryptedSignedContent;
                    requestBody.text = JSON.stringify(payload);
                    }
                }
            }
        }
    ];
    ```

9. **Copy the following code into `package.json`**:

    ```json
    {
      "name": "insomnia-plugin-test-sign-encrypt",
      "version": "1.0.0",
      "description": "The plugin provides JWT/PGP signing and encrypting for specific API endpoints.",
      "insomnia": {
        "name": "test-sign-encrypt",
        "description": "sign and encryption"
      },
      "main": "main.js",
      "dependencies": {
        "node-jose": "^1.1.4"
      }
    }
    ```

10. Save the files.
11. Navigate to the `plugins/insomnia-plugin-test-sign-encrypt` directory and install the necessary dependencies by running:
    ```bash
    npm install
    ```
12. Go to **Application** > **Preferences** > **Plugins**.
13. Click on **Reload Plugins**.

## Using the Generic NodeJS Plugin to Sign/Encrypt Payloads

### Set Up Your Environment

1. **Create a Project Directory:**

    Open your terminal and run the following commands to create a new directory for your project and navigate into it:

    ```bash
    mkdir jwt-encryption
    cd jwt-encryption
    ```

2. **Initialize a Node.js Project:**

    Run `npm init` to initialize a Node.js project and follow the prompts to create a `package.json` file. Use the `-y` flag to automatically accept the default settings:

    ```bash
    npm init -y
    ```

3. **Install Required Library:**

    Install the `node-jose` library, which will be used for signing and encryption:

    ```bash
    npm install node-jose
    ```

4. **Create the Script File:**

    Create a new file named `signEncrypt.js` in your project directory:

    ```bash
    touch signEncrypt.js
    ```

5. **Add the Signing and Encryption Code:**

    Open `signEncrypt.js` in your preferred code editor and add the following code:

    ```javascript
    const jose = require('node-jose');
    const fs = require('fs');

    class JwtService {
        _getBufferOf(obj) {
            if (obj instanceof Buffer) {
                return obj;
            } else if (typeof obj === 'string' || obj instanceof String) {
                return Buffer.from(obj);
            } else {
                return Buffer.from(JSON.stringify(obj));
            }
        }

        _getValueOf(value) {
            if (!value) {
                console.log('The provided value is null or empty.');
                return null;
            }

            if (fs.existsSync(value)) {
                let fileContent = fs.readFileSync(value, 'utf8');
                console.log('Key File Content:', fileContent);
                return fileContent;
            } else {
                return value;
            }
        }

        async sign(content, key) {
            let keyValue = this._getValueOf(key);
            console.log('Signing Key Value:', keyValue);
            let contentBuffer = this._getBufferOf(this._getValueOf(content));
            console.log('Content Buffer:', contentBuffer);

            try {
                let keyStore = jose.JWK.createKeyStore();
                let signKey = await keyStore.add(keyValue, 'pem', { kid: 'signKey' });
                let recipient = {
                    key: signKey,
                    header: {
                        alg: 'RS256',
                        typ: 'JWT'
                    },
                    reference: false
                };
                let signedContent = await jose.JWS.createSign({ format: 'compact' }, recipient)
                    .update(contentBuffer)
                    .final();
                return signedContent;
            } catch (error) {
                console.error('Error during signing:', error);
            }
        }

        async encrypt(content, key) {
            let keyValue = this._getValueOf(key);
            let contentBuffer = this._getBufferOf(this._getValueOf(content));

            console.log('Encryption Key Value:', keyValue);

            try {
                let keyStore = jose.JWK.createKeyStore();
                let encKey = await keyStore.add(keyValue, 'pem', { kid: 'encKey' });
                let recipient = {
                    key: encKey,
                    header: {
                        alg: 'RSA-OAEP'
                    },
                    reference: false
                };
                let opts = {
                    zip: true,
                    format: 'compact',
                    contentAlg: 'A256CBC-HS512'
                };
                let encryptedContent = await jose.JWE.createEncrypt(opts, recipient)
                    .update(contentBuffer)
                    .final();
                return encryptedContent;
            } catch (error) {
                console.error('Error during encryption:', error);
            }
        }

        async signThenEncrypt(content, signKey, encryptKey) {
            try {
                let signedContent = await this.sign(content, signKey);
                if (!signedContent) {
                    throw new Error('Failed to sign content.');
                }
                console.log('Signed Content:', signedContent);
                return this.encrypt(signedContent, encryptKey);
            } catch (error) {
                console.error('Error during signThenEncrypt:', error);
            }
        }
    }

    let jwtHelper = new JwtService();

    const operation = process.argv[2];
    const payloadFile = process.argv[3];
    const signKey = process.argv[4];
    const encryptKey = process.argv[5];

    if (!fs.existsSync(payloadFile)) {
        console.error(`Payload file does not exist: ${payloadFile}`);
        process.exit(1);
    }

    const content = fs.readFileSync(payloadFile, 'utf8');

    if (operation === 'sign') {
        jwtHelper.sign(content, signKey).then(signedContent => {
            console.log(signedContent);
        }).catch(err => {
            console.error(err);
        });
    } else if (operation === 'encrypt') {
        jwtHelper.encrypt(content, encryptKey).then(encryptedContent => {
            console.log(encryptedContent);
        }).catch(err => {
            console.error(err);
        });
    } else if (operation === 'signThenEncrypt') {
        jwtHelper.signThenEncrypt(content, signKey, encryptKey).then(encryptedSignedContent => {
            console.log(encryptedSignedContent);
        }).catch(err => {
            console.error(err);
        });
    } else {
        console.error('Invalid operation. Please use "sign", "encrypt", or "signThenEncrypt".');
    }
    ```

### Prepare Your Keys

Make sure you have the necessary keys for signing and encryption:
- `jwtRS256.key` (Customer Private Key used for signing)
- `jwtRS256.key.pub` (Public Key used for encryption)

### Create a Payload File

Save your JSON payload to a file (e.g., `payload.json`).

### Run the Script

Use the following commands to sign or encrypt your payload:

- To sign a payload:

    ```bash
    node signEncrypt.js sign ./path/to/payload.json ./path/to/jwtRS256.key
    ```

- To sign and then encrypt the payload:

    ```bash
    node signEncrypt.js signThenEncrypt ./path/to/payload.json ./path/to/jwtRS256.key ./path/to/jwtRS256.key.pub
    ```

The processed payload will be output once the script runs successfully. You can then use this payload in your requests in tools like Insomnia or Postman.

## Testing the Configuration
1. Create or select a request that matches one of the URL patterns in the script.
2. Ensure the request body and headers are properly set.
3. Add the payload generated by the script.
4. Send the request.
5. Verify that the payload has been signed and encrypted as expected.

---

This guide should help you configure and test the encryption plugin in Insomnia or use the Generic NodeJS Plugin to sign and encrypt payloads for your API requests. If you encounter any issues or need further assistance, please refer to the respective documentation for Insomnia or Node.js.
