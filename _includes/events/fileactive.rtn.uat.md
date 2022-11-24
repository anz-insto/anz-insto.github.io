## RTN User Acceptance Testing Scenarios

**Question**

What UAT scenarios does ANZ recommend a customer complete prior to activating the Real Time Notification service? 

**Answer**

Using the Fileactive Self Service Testing API it is recommended a customer complete the following testing scenarios. <br><br>

<table>
    <thead>
  <tr>
    <th>#</th>
    <th>Scenario</th>
    <th>Description</th>
    <th>RTN Self-Service Request</th>
    <th>NPP Payment Notification Response Snipet</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>ARM customer receipt</td>
    <td>The Corporate Customer is configured with an ARM account and receives a payment to their virtual account</td>
    <td>
    <pre>
  {
    <strong>"account_identification": "014814800000010",</strong>
    "entry_reference": "Trading transfer",
    "amount": "100.50",
    "debtor_name": "Andras Arato",
    "creditor_name": "Holden Holdings",
    <strong>"arm_creditor_account_identification": "063678965323010",</strong>
    "remittance_information": {
      "unstructured": [
        "Testing ARM Customer"
      ]
    }
  }
    </pre>
    </td>
    <td>
    <pre>
  {
    "identification": "D942DD0B23674C3FBDC2702ECB0C837F",
    "creation_date_time": "2022-07-27T23:44:01.9842888+00:00",
    <strong>"account_identification": "014814800000010",</strong>
    <strong>"account_issuer": "014814"</strong>,
    "entry": [
      {
        "related_parties": {
          <strong>"creditor_account_identification": "965323010",</strong>
          <strong>"creditor_account_issuer": "063678"</strong>
        }
      }
    ]
  }
    </pre>
    </td>
  </tr>

  <tr>
    <td>2</td>
    <td>Non-ARM customer receipt</td>
    <td>The Corporate Customer receives a payment to their settlement account.</td>
    <td>
    <pre>
  {
    <strong>"account_identification": "014814800000010",</strong>
    "entry_reference": "Bill payment",
    "amount": "200.25",
    "debtor_name": "Andras Arato",
    "creditor_name": "Holden Holdings",
    "remittance_information": {
      "unstructured": [
        "Testing Non-ARM Customer"
      ]
    }
  }
    </pre>
    </td>
    <td>
    <pre>
  {
    "identification": "D942DD0B23674C3FBDC2702ECB0C837F",
    "creation_date_time": "2022-07-27T23:44:01.9842888+00:00",
    <strong>"account_identification": "014814800000010",</strong>
    <strong>"account_issuer": "014814",</strong>
    "entry": [
      {
        "related_parties": {
          <strong>"creditor_account_identification": "800000010",</strong>
          <strong>"creditor_account_issuer": "014814"</strong>
        }
      }
    ]
  }
    </pre>
    </td>
  </tr>

  <tr>
    <td>3</td>
    <td>Remittance information with emojis - binary</td>
    <td>Include any emoji in the remittance information</td>
    <td>
    <pre>
  {
    "account_identification": "014814800000010",
    "entry_reference": "Bill payment",
    "amount": "10.50",
    "debtor_name": "Andras Arato",
    "creditor_name": "Holden Holdings",
    "remittance_information": {
      <strong>"unstructured": [
        " 😀🚀 Testing with emojis"
      ]</strong>
    }
  }
    </pre>
    </td>
    <td>
    <pre>
  {
    "identification": "D942DD0B23674C3FBDC2702ECB0C837F",
    "creation_date_time": "2022-07-27T23:44:01.9842888+00:00",
    "account_identification": "014814800000010",
    "account_issuer": "014814",
    "entry": [
      {
        "remittance_information": {
          <strong>"unstructured": [
            "&amp;#x1F600;&amp;#x1F680; Testing with emojis"
          ]</strong>
        }
      }
    ]
  }
    </pre>
    </td>
  </tr>
  
  <tr>
    <td>4</td>
    <td>Remittance information with emojis - NCR HEX code points</td>
    <td>Include any emoji in the remittance information</td>
    <td>
    <pre>
  {
    "account_identification": "014814800000010",
    "entry_reference": "Bill payment",
    "amount": "10.50",
    "debtor_name": "Andras Arato",
    "creditor_name": "Holden Holdings",
    "remittance_information": {
      <strong>"unstructured": [
        "&amp;#x1f6f8; TC-04 testing emoji"
      ]</strong>
    }
  }
    </pre>
    </td>
    <td>
    <pre>
  {
    "identification": "D942DD0B23674C3FBDC2702ECB0C837F",
    "creation_date_time": "2022-07-27T23:44:01.9842888+00:00",
    "account_identification": "014814800000010",
    "account_issuer": "014814",
    "entry": [
      {
        "remittance_information": {
          <strong>"unstructured": [
            "&amp;#x1f6f8; TC-04 testing emoji"
          ]</strong>
        }
      }
    ]
  }
    </pre>
    </td>
  </tr>
  
  <tr>
    <td>5</td>
    <td>Pay ID - Mobile</td>
    <td>The payer/debtor has used a Pay ID when making the payment to the Corporate Customer's account.</td>
    <td>
    <pre>
  {
    "account_identification": "014814800000010",
    "entry_reference": "Bill payment",
    "amount": "150.00",
    "debtor_name": "Andras Arato",
    "creditor_name": "Holden Holdings",
    <strong>"creditor_alias": {
      "type": "TELI",
      "identification": "+61403736550"
    },</strong>
    "remittance_information": {
      "unstructured": [
        "Testing with PayId"
      ]
    }
  }
    </pre>
    </td>
    <td>
    <pre>
  {
    "identification": "D942DD0B23674C3FBDC2702ECB0C837F",
    "creation_date_time": "2022-07-27T23:44:01.9842888+00:00",
    "account_identification": "014814800000010",
    "account_issuer": "014814",
    "entry": [
      {
        "related_parties": {
          <strong>"creditor_account_proxy": {
            "proxy_type": "TELI",
            "proxy_identification": "+61403736550"
          }</strong>
        }
      }
    ]
  }
    </pre>
    </td>
  </tr>
    
  <tr>
    <td>6</td>
    <td>Pay ID - eMail</td>
    <td>The payer/debtor has used a Pay ID when making the payment to the Corporate Customer's account.</td>
    <td>
    <pre>
  {
    "account_identification": "014814800000010",
    "entry_reference": "Bill payment",
    "amount": "150.00",
    "debtor_name": "Andras Arato",
    "creditor_name": "Holden Holdings",
    <strong>"creditor_alias": {
      "type": "EMAL",
      "identification": "npp@mail.com"
    },</strong>
    "remittance_information": {
      "unstructured": [
        "Testing with PayId"
      ]
    }
  }
    </pre>
    </td>
    <td>
    <pre>
  {
    "identification": "D942DD0B23674C3FBDC2702ECB0C837F",
    "creation_date_time": "2022-07-27T23:44:01.9842888+00:00",
    "account_identification": "014814800000010",
    "account_issuer": "014814",
    "entry": [
      {
        "related_parties": {
          <strong>"creditor_account_proxy": {
            "proxy_type": "EMAL",
            "proxy_identification": "npp@mail.com"
          }</strong>
        }
      }
    ]
  }
    </pre>
    </td>
  </tr>
    
  <tr>
    <td>7</td>
    <td>Return of Funds (PACS.004)</td>
    <td>The Corporate Customer is receiving a credit to their settlement account.</td>
    <td>
    <pre>
  {
    "account_identification": "014814800000010",
    "entry_reference": "Bill payment",
    "amount": "500.00",
    "debtor_name": "Andras Arato",
    "creditor_name": "Holden Holdings",
    "remittance_information": {
      "unstructured": [
        "Testing Return of Funds"
      ]
    },
    <strong>"return_information": {
      "reason_code": "NARR",
      "additional_information": [
        "Beneficiary is",
        "unknown"
      ]
    }</strong>
  }
    </pre>
    </td>
    <td>
    <pre>
  {
      "identification": "D942DD0B23674C3FBDC2702ECB0C837F",
      "creation_date_time": "2022-07-27T23:44:01.9842888+00:00",
      "account_identification": "014814800000010",
      "account_issuer": "014814",
      "entry": [
        {
          <strong>"return_information": {
              "reason": {
                "code": "NARR"
              },
              "additional_information": [
                "Beneficiary is",
                "unknown"
              ]
            }
          }</strong>
        }
      ]
    }
    </pre>
    </td>
  </tr>
      
  <tr>
    <td>8</td>
    <td>Duplicate Check</td>
    <td>ANZ to reposcess a previously sent Notification which the customer should not process.</td>
    <td>n/a</td>
    <td>ANZ will send a previously sent Notification which has the same account_servicer_reference.</td>
  </tr>

        
  <tr>
    <td>9</td>
    <td>Invalid API Key</td>
    <td>ANZ to update customer Notificaiton profile with incorrect API Key. Customer to reject  Notifications with invalid API key.</td>
    <td>Send a valid RTN request</td>
    <td>ANZ will send a well formed Notification which customer should reject with HTTP 401</td>
  </tr>
</tbody>
</table>

