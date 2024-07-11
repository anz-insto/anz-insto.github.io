## NPP Emoji Handling

**Question**

How are emoji's represented in NPP ?<br>
NPP has a 280 character requirement for payment description (narrative), does this mean 280 emoji's?

**Answer**

An emoji character is represented by one or more code points, when the encoding is UTF-8<br>
A character in UTF-8 is a "code point", therefore in NPP payments you must allow 280 code points.

### What does a code point look like?

Taking the example of the "Family: Man, Woman, Girl, Boy" emoji: 👨‍👩‍👧‍👦 [https://emojipedia.org/family-man-woman-girl-boy/](https://emojipedia.org/family-man-woman-girl-boy/)

The emoji consists of 7 code points:

| **#** 	| **Code Point** 	|
|-------	|----------------	|
|   1   	| 👨 U+1F468      	|
|   2   	| U+200D         	|
|   3   	| 👩 U+1F469      	|
|   4   	| U+200D         	|
|   5   	| 👧 U+1F467      	|
|   6   	| U+200D         	|
|   7   	| 👦 U+1F466      	|


### Representing emoji's in JSON

A code point can be represented in binary or using Numerical Character Reference (NCR), for the example the "Family: Man, Woman, Girl, Boy" emoji:

```
- binary:         👨‍👩‍👧‍👦
- NCR (hex):      &#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;
- NCR (decimal):  &#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;
```

Note, the recommended representation is NCR (hex), however some NPP participants have used binary and NCR (decimal).  The recommendation is to send NCR (hex) and accept NCR (hex), NCR (decimal) and binary

Using the example of the NPP Real Time Notification schema, the unstructured array within the remittance_information object is:

```yaml
          remittance_information:
            type: object
            properties:
              unstructured:
                type: array
                description: >-
                  Information supplied to enable the matching/reconciliation of an entry 
                  with the items that the payment is intended to settle, such as commercial 
                  invoices in an accounts' receivable system, in an unstructured form.
                items:
                  type: string
                  minLength: 1
                  maxLength: 140
                minItems: 1
                maxItems: 2
```

When aligned to the NPP limit of 280 characters this corresponds to two unstructured fields each being a maximum of 140 characters. This means a maximum of 280 code points can be supported. For example:

```json
{
  "remittance_information": {
    "unstructured": [
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij",
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"
    ]
  }
}
```

When using emoji's the string length is calculated using code points, therefore the unstructured array element is restricted to 140 code points.

##### Sample JSON Emoji's (NCR hex)

```json
{
  "remittance_information": {
    "unstructured": [
      "&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;",
      "&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;"
    ]
  }
}
```

##### Sample JSON Emoji's (NCR decimal)

```json
{
  "remittance_information": {
    "unstructured": [
      "&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;",
      "&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;"
    ]
  }
}
```

##### Sample JSON Emoji's (binary)

```json
{
  "remittance_information": {
    "unstructured": [
      "👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦",
      "👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦"
    ]
  }
}
```

### Mixing characters

Note the 280 character limit allows for any combination of UTF-8 characters, for example the following are all valid 280 code point narratives:

##### Mixed Narrative

```
你好👨👨‍👩‍👧‍👦Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 你好👨👨‍👩‍👧‍👦Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
```

##### Mixed Narrative in NPP Real Time Notification 

_Note: Chinese characters also converted to NCR (hex)_

```json
{
  "remittance_information": {
    "unstructured": [
      "&#x4F60;&#x597D;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      "&#x4F60;&#x597D;&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
    ]
  }
}
```

---
