---
title: NPP Payment Submit
description: |-
    Fileactive NPP Payment API Submit Stub Specification. This page details the different test scenarios of Fileactive NPP Payment API Submit requests and the corresponding initial response.
---

<a name="top"></a>

###### Environment: UAT

## Contents

- [Successful Submit Payment to BSB Account number](#success-paytoaccount)
- [Successful Submit Payment to PayID](#success-paytopayid)
- [Successful Submit Payment to BSB Account number with Emojis](#success-paytoaccount-emojis)
- [Submit Payment with Empty Debit Account number fails ](#payment-empty-debitaccount)
- [Submit Payment fails with error Limit Arrangement exceeded ](#payment-limit-exceeded)
- [Submit Payment fails for PayID Validation failure ](#payid-invalid)
- [Sample JSON pain.a09.001 payloads](#all-sample-payloads)

For fetching the further/final state of the submitted payment, please refer: [NPP Payment Status]({{ site.baseurl }}{% link fileactive/stub/npp-payment-status.md %})

---

<a name="success-paytoaccount"></a>
## 1. Successful Submit-Payment to BSB|Account number

To simulate a successful response, please use the values below in the API request:

Reference:
[Sample JSON Input message with BSB|Account number (pain.a09.001)](#sample-json-BSBAccount)

| Field             | Path                            | Value                                      |
|:------------------|:--------------------------------|:-------------------------------------------|
| Amount            | instructed_amount.amount        | any amount between 0.01 and 400.00         |

#### **HTTP Method : __POST__**

#### **Sample Request Details :**

*Headers:*

{% highlight yaml linenos %}
Content-Type: application/json
X-Message-Id: 4b635dc0-efa2-11e9-961c-0b8918670b2c
Authorization: Bearer <Access Token>
apikey: <apikey>
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
   "secured_pain001": "<signed and encrypted pain.a09.001>"
}
{% endhighlight %}
#### **Sample Response details:**

Status Code: 201

*Headers:*

###### Note: 'Location' from this response is used as the URL for the payment status enquiry
{% highlight yaml linenos %}
Location: 'https://api.fileactive.uat.anzgcis.com/npp/v1.0/payment/4b645dc0-efa2-11e9-961c-0b8918670b2c/status'
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
  "transaction_status": "RCVD"
}
{% endhighlight %}

[back to top](#top)

---
<br/><br/>

<a name="success-paytopayid"></a>
## 2. Successful Submit-Payment to PayID

To simulate a successful response , please use the 'Test values' from the below table into pain.a09.001 (JSON):

Reference:
[Sample JSON Input message with PayID (pain.a09.001)](#sample-json-payID)

| Field             | Path                            | Value                                  |
|:------------------|:--------------------------------|:---------------------------------------|
| Amount            | instructed_amount.amount        | any amount between 0.01 and 400.00     |

#### **HTTP Method : __POST__**

#### **Sample Request Details :**

*Headers:*

{% highlight yaml linenos %}
  Content-Type: application/json
   X-Message-Id: 4b635dc0-efa2-11e9-961c-0b8918670b2c
   Authorization: Bearer <Access Token>
   apikey: <apikey>
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
   "secured_pain001": "<signed and encrypted pain.a09.001>"
}
{% endhighlight %}
#### **Sample Response details:**

Status Code: 201

*Headers:*

###### Note: 'Location' from this response is used as the URL for the payment status enquiry
{% highlight json linenos %}
Location: 'https://api.fileactive.uat.anzgcis.com/npp/v1.0/payment/4b645dc0-efa2-11e9-961c-0b8918670b2c/status'
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
  "transaction_status": "RCVD"
}
{% endhighlight %}

[back to top](#top)

---
<br/><br/>

<a name="success-paytoaccount-emojis"></a>

## 3. Successful Submit-Payment to BSB|Account number with Emojis

To simulate a successful response , please use the 'Test values' from the below table into pain.a09.001 (JSON):

Reference:
[Sample JSON Input message with BSB|Account number (pain.a09.001)](#sample-json-BSBAccount)

| Field                   | Path                                | Value                                |
|:------------------------|:------------------------------------|:-------------------------------------|
| Amount                  | instructed_amount.amount            | any amount between 0.01 and 400.00   |
| ExtendedRemittanceInfo  | remittance_information_unstructured | sample "👍👨‍👩‍👧‍👦😃"                       |

#### **HTTP Method : __POST__**

#### **Sample Request Details :**

*Headers:*

{% highlight yaml linenos %}
  Content-Type: application/json
   X-Message-Id: 4b635dc0-efa2-11e9-961c-0b8918670b2c
   Authorization: Bearer <Access Token>
   apikey: <apikey>
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
   "secured_pain001": "<signed and encrypted pain.a09.001>"
}
{% endhighlight %}

#### **Sample Response details:**

Status Code: 201

*Headers:*

###### Note: 'Location' from this response is used as the URL for the payment status enquiry
{% highlight yaml linenos %}
Location: 'https://api.fileactive.uat.anzgcis.com/npp/v1.0/payment/4b645dc0-efa2-11e9-961c-0b8918670b2c/status'
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
  "transaction_status": "RCVD"
}
{% endhighlight %}

[back to top](#top)

---
<br/><br/>

<a name="payment-empty-debitaccount"></a>
## 4. Submit payment with Empty Debit Account number fails (Negative scenario)

To simulate a successful response , please use the 'Test values' from the below table into pain.a09.001 (JSON):

Reference:
[Sample JSON Input message with BSB|Account number (pain.a09.001)](#sample-json-BSBAccount)

| Field             | Path                            | Value                                |
|:------------------|:--------------------------------|:-------------------------------------|
| Amount            | instructed_amount.amount        | any amount between 0.01 and 400.00   |
| DebtorAccountId   | debtor_account_identification   | "  "                                 |

###### Note: Leave the Debtor account ID Value empty in the JSON ""

#### **HTTP Method : __POST__**

#### **Sample Request Details :**

*Headers:*

{% highlight yaml linenos %}
  Content-Type: application/json
   X-Message-Id: 4b635dc0-efa2-11e9-961c-0b8918670b2c
   Authorization: Bearer <Access Token>
   apikey: <apikey>
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
   "secured_pain001": "<signed and encrypted pain.a09.001>"
}
{% endhighlight %}

#### **Sample Response details:**

Status Code: 201

*Headers:*

###### Note: 'Location' from this response is used as the URL for the payment status enquiry
{% highlight yaml linenos %}
Location: 'https://api.fileactive.uat.anzgcis.com/npp/v1.0/payment/4b645dc0-efa2-11e9-961c-0b8918670b2c/status'
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
  "transaction_status": "RCVD"
}
{% endhighlight %}

###### Note:  Make a Payment Status Enquiry to fetch the current state of this payment (Rejection response in this case). [NPP Payment Status]({{ site.baseurl }}{% link fileactive/stub/npp-payment-status.md %})

<br/>

[back to top](#top)

---
<br/><br/>

<a name="payment-limit-exceeded"></a>
## 5. Submit Payment fails with error Limit Arrangement exceeded (Negative scenario)

To simulate a successful response , please use the 'Test values' from the below table into pain.a09.001 (JSON):

Reference:
[Sample JSON Input message with BSB|Account number (pain.a09.001)](#sample-json-BSBAccount)

| Field             | Path                            | Value      |
|:------------------|:--------------------------------|:-----------|
| Amount            | instructed_amount.amount        | 450.08     |


#### **HTTP Method : __POST__**

#### **Sample Request Details :**

*Headers:*

{% highlight yaml linenos %}
  Content-Type: application/json
   X-Message-Id: 4b635dc0-efa2-11e9-961c-0b8918670b2c
   Authorization: Bearer <Access Token>
   apikey: <apikey>
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
   "secured_pain001": "<signed and encrypted pain.a09.001>"
}
{% endhighlight %}

#### **Sample Response details:**

Status Code: 201

*Headers:*

###### Note: 'Location' from this response is used as the URL for the payment status enquiry
{% highlight yaml linenos %}
Location: 'https://api.fileactive.uat.anzgcis.com/npp/v1.0/payment/4b645dc0-efa2-11e9-961c-0b8918670b2c/status'
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
  "transaction_status": "RCVD"
}
{% endhighlight %}

###### Note:  Make a Payment Status Enquiry to fetch the current state of this payment (Rejection response in this case). [NPP Payment Status]({{ site.baseurl }}{% link fileactive/stub/npp-payment-status.md %})

<br/>

[back to top](#top)

---
<br/><br/>

<a name="payid-invalid"></a>
## 6. Submit Payment fails for PayID Validation failure  (Negative scenario)

To simulate a successful response , please use the 'Test values' from the below table into pain.a09.001 (JSON):

Reference:
[Sample JSON Input message with PayID - pain.a09.001](#sample-json-payID)

| Field             | Path                            | Value      |
|:------------------|:--------------------------------|:-----------|
| Amount            | instructed_amount.amount        | 450.09     |


#### **HTTP Method : __POST__**

#### **Sample Request Details :**

*Headers:*

{% highlight yaml linenos %}
  Content-Type: application/json
   X-Message-Id: 4b635dc0-efa2-11e9-961c-0b8918670b2c
   Authorization: Bearer <Access Token>
   apikey: <apikey>
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
   "secured_pain001": "<signed and encrypted pain.a09.001>"
}
{% endhighlight %}

#### **Sample Response details:**

Status Code: 201

*Headers:*

###### Note: 'Location' from this response is used as the URL for the payment status enquiry
{% highlight yaml linenos %}
Location: 'https://api.fileactive.uat.anzgcis.com/npp/v1.0/payment/4b645dc0-efa2-11e9-961c-0b8918670b2c/status'
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
  "transaction_status": "RCVD"
}
{% endhighlight %}

###### Note:  Make a Payment Status Enquiry to fetch the current state of this payment (Rejection response in this case). [NPP Payment Status]({{ site.baseurl }}{% link fileactive/stub/npp-payment-status.md %})

<br/>

[back to top](#top)


---
<br/><br/>

<a name="all-sample-payloads"></a>
<a name="sample-json-BSBAccount"></a>
## Sample JSON Input message with BSB|Account number - pain.a09.001

{% highlight json linenos %}
{
  "instruction_identification": "TC121/1471873823",
  "end_to_end_identification": "7760e5d0f9fa11e9a7d0a180e88ecf79",
  "creation_date_time":  "2019-10-29T14:16:14Z",
  "initiating_party_name":  "ANZ Customer 1",
  "service_level": "npp.clear.01-x2p1",
  "requested_execution_date":  "2019-10-29",
  "debtor_name": "BILBO BAGGINS",
  "debtor_account_identification": "014002837101671",
  "debtor_account_type": "BBAN",
  "instructed_amount": {
    "currency": "AUD",
    "amount": "850.10"
  },
  "creditor_name": "James Smith",
  "creditor_account_identification": "017141909999670",
  "creditor_account_type": "BBAN",
  "creditor_agent_bic": "ANZBAU3LXXX",
  "remittance_information_unstructured": [
        "FIRST LINE ",
        "SECOND LINE "
    ]
}
{% endhighlight %}

<br/>

<a name="sample-json-payID"></a>
## Sample JSON Input message with PayID - pain.a09.001

{% highlight json linenos %}
 {
    "instruction_identification": "TC121/1471873844",
    "end_to_end_identification": "b1f35b30373d11ea89fabd599dda3bf2",
    "creation_date_time":  "2020-01-15T13:21:08Z",
    "initiating_party_name":  "ANZ Customer 2",
    "service_level": "npp.clear.01-x2p1",
    "requested_execution_date":  "2020-01-15",
    "debtor_name": "BILBO BAGGINS",
    "debtor_account_identification": "013328101002003",
    "debtor_account_type": "BBAN",
    "instructed_amount": {
        "currency": "AUD",
        "amount": "851.10"
    },
    "creditor_name": "Sarah Jones",
    "creditor_alias_type": "TELI",
    "creditor_alias_value": "+61-4123456789",
    "creditor_account_type": "BBAN",
    "creditor_agent_bic": "QBANAU4BXXX",
    "remittance_information_unstructured": [
        "FIRST LINE ",
        "SECOND LINE "
    ]
 }
{% endhighlight %}

<br/><br/>

---
[back to top](#top)
