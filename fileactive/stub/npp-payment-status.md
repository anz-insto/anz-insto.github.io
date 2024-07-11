---
title: NPP Payment Status
description: |-
    Fileactive NPP Payment API Enquire Stub Specification. This page details the Fileactive NPP Payment API Status enquiry request and the relevant responses.
    **NOTE:** `transaction_identification` used in the request URL's are to be retrieved from the "Submit-Payment" response 'Location' header.
navigation: fileactive
---

<!--page content-->

<a name="top"></a>

## Contents
- [Successful Enquire Payment Status](#success-paymentstatus)
- [Enquire Payment Status for Unsuccesful Payment](#RJCT-paymentstatus)
- [Enquire Payment Status for payment failed limit arrangement](#RJCT-paymentstatus-limitexceeded) 
- [Enquire Payment Status for payment failed for Invalid PayID](#RJCT-paymentstatus-invalidpayid) 

<br/>
<br/>


<a name="success-paymentstatus"></a>
## 1. Successful Enquire Payment Status

To simulate a successful response , use the latest "transaction_identification" returned in the "Submit-Payment" request

Pre-Requisite: To get the "transaction_identification" , Please run the scenario **"Successful Submit Payment to BSB Account number"** from [NPP Payment Submit]({{ site.baseurl }}{% link fileactive/stub/npp-payment-submit.md %})


| Element | Test Value                                                                                  |
|:--------|:--------------------------------------------------------------------------------------------|
| URL     | https://api.fileactive.uat.anzgcis.com/npp/v1.0/payment/{transaction_identification}/status |

#### **HTTP Method : __GET__**

#### **Sample Request Details :**

*URL*

https://api.fileactive.uat.anzgcis.com/npp/v1.0/payment/4b645dc0-efa2-11e9-961c-0b8918670b2c/status

*Headers:*

{% highlight yaml linenos %}
Authorization: Bearer <Access Token>
apikey: <apikey>
{% endhighlight %}

*Body:*
{% highlight json linenos %}

{% endhighlight %}

#### **Sample Response details:**

Status Code: 200

*Body:*
{% highlight json linenos %}
 {
   "transaction_identification": "32d292f1-ee65-11ea-84ce-3d837763b9eb",
   "transaction_status": "ACSC",
   "transaction_status_description": "Completed",
   "acceptance_date_time": "2020-09-04T04:15:04.631Z"
 }
{% endhighlight %}

###### Note: "acceptance_date_time" holds the time when payment is accepted and started processing by Bank

[back to top](#top)

---
<br/>
<br/>

<a name="RJCT-paymentstatus"></a>
## 2. Enquire Payment Status for Unsuccesful Payment


To simulate a successful response , use the latest "transaction_identification" returned in the "Submit-Payment" request

Pre-Requisite: To get the "transaction_identification" , Please run the scenario **"Submit Payment with Empty Debit Account number"** from [NPP Payment Submit]({{ site.baseurl }}{% link fileactive/stub/npp-payment-submit.md %})


| Element | Test Value                                                                                  |
|:--------|:--------------------------------------------------------------------------------------------|
| URL     | https://api.fileactive.uat.anzgcis.com/npp/v1.0/payment/{transaction_identification}/status |

#### **HTTP Method : __GET__**

#### **Sample Request Details :**

*URL*

https://api.fileactive.uat.anzgcis.com/npp/v1.0/payment/4b645dc0-efa2-11e9-961c-0b8918670b2c/status

*Headers:*

{% highlight yaml linenos %}
  Authorization: Bearer <Access Token>
  apikey: <apikey>
{% endhighlight %}

*Body:*
{% highlight json linenos %}

{% endhighlight %}

#### **Sample Response details:**

Status Code: 200

*Body:*
{% highlight json linenos %}
  {
   "transaction_identification": "526df080-d071-11ea-ab7c-252d6a4e313c",
   "transaction_status": "RJCT",
   "transaction_status_reason_code": "TD03",
   "transaction_status_description": "EC004_005-SchemaValidation",
   "acceptance_date_time": "2020-09-04T07:14:42.543Z"
 }
{% endhighlight %}

<br/>

[back to top](#top)

---
<br/>
<br/>

<a name="RJCT-paymentstatus-limitexceeded"></a>
## 3. Enquire Payment Status for payment failed limit arrangement


To simulate a successful response , use the latest "transaction_identification" returned in the "Submit-Payment" request

Pre-Requisite: To get the "transaction_identification" , Please run the scenario **"Submit Payment fails with error Limit Arrangement exceeded"** from [NPP Payment Submit]({{ site.baseurl }}{% link fileactive/stub/npp-payment-submit.md %})


| Element | Test Value                                                                                  |
|:--------|:--------------------------------------------------------------------------------------------|
| URL     | https://api.fileactive.uat.anzgcis.com/npp/v1.0/payment/{transaction_identification}/status |

#### **HTTP Method : __GET__**

#### **Sample Request Details :**

*URL*

https://api.fileactive.uat.anzgcis.com/npp/v1.0/payment/4b645dc0-efa2-11e9-961c-0b8918670b2c/status

*Headers:*

{% highlight yaml linenos %}
  Authorization: Bearer <Access Token>
  apikey: <apikey>
{% endhighlight %}

*Body:*
{% highlight json linenos %}

{% endhighlight %}

#### **Sample Response details:**

Status Code: 200

*Body:*
{% highlight json linenos %}
     {
      "transaction_identification": "96f5f781-d1fb-11ea-b01a-2bdcf9570091",
      "transaction_status": "RJCT",
      "transaction_status_reason_code": "3580",
      "transaction_status_description": "Payment failed as it has exceeded your Limit arrangement.",
      "acceptance_date_time": "2020-09-04T07:14:42.543Z"
     }
{% endhighlight %}

<br/>

[back to top](#top)

---
<br/>
<br/>

<a name="RJCT-paymentstatus-invalidpayid"></a>
## 3. Enquire Payment Status for payment failed for Invalid PayId


To simulate a successful response , use the latest "transaction_identification" returned in the "Submit-Payment" request

Pre-Requisite: To get the "transaction_identification" , Please run the scenario **"Submit Payment fails for PayID Validation failure"** from [NPP Payment Submit]({{ site.baseurl }}{% link fileactive/stub/npp-payment-submit.md %})


| Element | Test Value                                                                                  |
|:--------|:--------------------------------------------------------------------------------------------|
| URL     | https://api.fileactive.uat.anzgcis.com/npp/v1.0/payment/{transaction_identification}/status |

#### **HTTP Method : __GET__**

#### **Sample Request Details :**

*URL*

https://api.fileactive.uat.anzgcis.com/npp/v1.0/payment/4b645dc0-efa2-11e9-961c-0b8918670b2c/status

*Headers:*

{% highlight yaml linenos %}
  Authorization: Bearer <Access Token>
  apikey: <apikey>
{% endhighlight %}

*Body:*
{% highlight json linenos %}

{% endhighlight %}

#### **Sample Response details:**

Status Code: 200

*Body:*
{% highlight json linenos %}
     {
      "transaction_identification": "96f5f781-d1fb-11ea-b01a-2bdcf9570091",
      "transaction_status": "RJCT",
      "transaction_status_reason_code": "2954",
      "transaction_status_description": "The PayID provided is no longer valid.",
      "acceptance_date_time": "2020-09-04T07:14:42.543Z"
     }
{% endhighlight %}

<br/>

[back to top](#top)

---
