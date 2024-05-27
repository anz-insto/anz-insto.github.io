---
title: Change Log
description: All notable changes to the ANZ Fileactive solution will be documented here.
permalink: /change-log
layout: default
toc: true
---

## Contents

- [2024-05-24 - Updates to PayTo APIs](#2024-05-24)
- [2024-05-13 - Updates to PayTo APIs](#2024-05-13)
- [2024-04-18 - Added PayTo Amend Mandate API](#2024-04-18)
- [2024-04-09 - Minor update to PayTo API](#2024-04-09)
- [2024-04-04 - Standardise security requirements](#2024-04-04)
- [2024-03-21 - Minor update to PayTo API Webhook](#2024-03-21)
- [2024-02-28 - Moved NPP Payment API docs to Payments API section](#2024-02-28)
- [2024-02-19 - Addressed feedback for cardinality updates and date formats](#2024-02-19)
- [2024-02-01 - AU DE API removal and other minor fixes](#2024-02-01)
- [2024-01-25 - Added PayTo Payee Get Mandate Details API](#2024-01-25)
- [2024-01-31 - Added Prior Day to Statement API](#2024-01-31)
- [2024-01-15 - Added PayTo Payee API Event Codes](#2024-01-15)
- [2023-12-19 - VN ACH payload sample update](#2023-12-19)
- [2023-12-14 - PayTo Payee APIs now live](#2023-12-14)
- [2023-10-25 - Real Time Notification updates for SG FAST](#2023-10-25)
- [2023-10-27 - Updated Testing API specification](#2023-10-27)
- [2023-08-29 - Singapore & Hong Kong Cross Border Fund Transfer API specifications](#2023-08-29)
- [2023-08-03 - Australia Cross Border Fund Transfer API specifications](#2023-08-03)
- [2023-05-16 - Statement API changes for NZ Systematics](#2023-05-16)
- [2023-05-02 - Coming Soon PayTo Payee APIs](#2023-05-02)
- [2023-04-11 - Singapore PAYNOW API specifications](#2023-04-11)
- [2023-03-28 - Incorrect tag fixes](#2023-03-28)
- [2023-03-20 - Statement API specifications](#2023-03-20)
- [2023-02-09 - Hong Kong RTGS API specifications](#2023-02-09)
- [2022-11-25 - Statement API stub specifications](#2022-11-25)
- [2022-11-22 - Payment, NPP and RTN updates](#2022-11-22)
- [2022-08-19 - Site creation](#2022-08-19)

---
<a name="2024-05-13"></a>

### [2024-05-24]

#### Changes

- Updated PayTo API v1.0.4
    - Updated Amend Mandate examples  
    - Removed **payment_initiator_information** from Create Mandate request
- Updated Testing API v1.0.3
    - Updated **RequestMandateNotification** schema to include new **trigger** codes **MAMC, MAMD** & **MAMX**
    - Updated **RequestMandateNotification** schema to include the amend mandate bilateral request, refer to **details** object. Applies when **trigger** code = **MAMC, MAMD** & **MAMX**  
    - Updated **MandateNotification** schema to include the reason why a bilateral request was declined by the Payer, refer to **resolution_event** object. Applies when **trigger** code = **MAMD & MCRD**  
    - Updated **RequestQueryNotification** to support migrated DDRs


### [2024-05-13]

#### Changes

- Updated PayTo API v1.0.3
  - Updated Amend Mandate examples
  - Updated REGEX for uetr must be UUID v4
  - Updated REGEX for request_id must be 36 characters
- Updated PayTo API Webhook v1.0.3
  - Updated MandateNotification schema to include new trigger codes MAMC, MAMD & MAMX
  - Updated MandateNotification schema to include the amend mandate bilateral request, refer to details object. Applies when trigger code = MAMC, MAMD & MAMX
  - Updated MandateNotification schema to include the reason why a bilateral request was declined by the Payer, refer to resolution_event object. Applies when trigger code = MAMD & MCRD
  - Updated MandateNotification schema, mandate_status is now optional
  - Updated REGEX for uetr must be UUID v4
  - Updated REGEX for request_id must be 36 characters

<a name="2024-04-18"></a>

### [2024-04-18]

#### Changes

- Updated PayTo API v1.0.2
  - Added Amend Mandate operation

<a name="2024-04-09"></a>

### [2024-04-09]

#### Changes

- Updated PayTo API v1.0.1 
  - Updated the conditional rules which apply to the creation of mandates specifically new DDRs and migrated DDRs
  - Added Create Mandate example payloads
  - Added link to PayID information page
  - Updated descriptions from "Payee" to "Biller"
  - Added required scope for each API operation
  - Document applicable scopes against each API operation
- Updated PayTo Mandate Event Codes
  - Addtional codes for Create Mandate - Migrated DDR
- Updated PayTo API Webhook v1.0.2  
  - Updated descriptions from "Payee" to "Biller"
- Updated Fileactive Testing API v1.0.2  
  - Updated descriptions from "Payee" to "Biller"

<a name="2024-04-04"></a>

### [2024-04-04]

#### Changes

- Document applicable scopes against each API
  - Payment
  - FX RFQ
  - Statement
- Update security schemes to use client credentials as OAuth2 flow
- Remove duplicated scope documentation
- Simplify change log structure

<a name="2024-03-21"></a>

### [2024-03-21]

#### Changes

- Updated PayTo API Webhook v1.0.1 
- Updated Fileactive Self-Service Testing API v1.0.1

<a name="2024-02-28"></a>

### [2024-02-28]

#### Changes

- Moved NPP Payment API docs to Payments API section

<a name="2024-02-19"></a>

### [2024-02-19]

#### Changes

- Updated Cardinality to few fields, date formats from UTC to AEST
- AU DE API references have been removed
- Update Dev Portal with right payment terminology for Hong Kong
- NPP scope update for payment status
- Fix spelling error in url
- Fix incorrect payload value for SG RTN

<a name="2024-02-01"></a>

### [2024-02-01]

#### Changes

- Alias Processing information page added
- AU DE API references have been removed
- Update Dev Portal with right payment terminology for Hong Kong
- NPP scope update for payment status
- Fix spelling error in url
- Fix incorrect payload value for SG RTN

<a name="2024-01-25"></a>

### [2024-01-25]

#### Changes

- [PayTo API]({{ site.baseurl }}/fileactive/api/payto-api) - Get Mandate Details

<a name="2024-01-31"></a>

### [2024-01-31]

#### Changes

- Prior Day option to Statement API
- Removed coming Soon Section.

<a name="2024-01-15"></a>

### [2024-01-15]

#### Changes

- PayTo Payee API Event Codes

<a name="2023-12-19"></a>

### [2023-12-19]

#### Changes

- Added new sample payload for Vietnam ACH payment

<a name="2023-12-14"></a>

### [2023-12-14]

#### Changes

- PayTo Payee APIs to live section
- Testing and Development Resources section

<a name="2023-10-25"></a>

### [2023-10-25]

#### Changes

- Real Time Notification updates for G3

<a name="2023-10-27"></a>

### [2023-10-27]

#### Changes

- [Testing API]({{ site.baseurl }}/fileactive/api/testing-api) add /payto/notifications
- [Testing API]({{ site.baseurl }}/fileactive/api/testing-api) add /payto/queries

<a name="2023-08-29"></a>

### [2023-08-29]

#### Changes

- [Payment API]({{ site.baseurl }}/fileactive/api/payment-api) add SG CBFT
- [Payment API]({{ site.baseurl }}/fileactive/api/payment-api) add HK CBFT

<a name="2023-08-03"></a>

### [2023-08-03]

#### Changes

- [Payment API]({{ site.baseurl }}/fileactive/api/payment-api) add AU CBFT

<a name="2023-05-16"></a>

### [2023-05-16]

#### Changes

- Added new field "Debtor Account Identification" for NZ Systematics account

<a name="2023-05-02"></a>

### [2023-05-02]

#### Changes

- [PayTo API]({{ site.baseurl }}/fileactive/api/payto-api) 
- [PayTo API Webhook]({{ site.baseurl }}/fileactive/api/payto-api-webhook)

<a name="2023-04-11"></a>

### [2023-04-11]

#### Changes

- [Payment API]({{ site.baseurl }}/fileactive/api/payment-api) add SG PAYNOW

<a name="2023-03-28"></a>

### [2023-03-28]

#### Changes

- Fixed the incorrect response tag/schema names

<a name="2023-03-20"></a>

### [2023-03-20]

#### Changes

- Fix [Statement API]({{ site.baseurl }}/fileactive/api/statement-api) broken link in statement response

<a name="2023-02-09"></a>

### [2023-02-09]

#### Changes

- [Payment API]({{ site.baseurl }}/fileactive/api/payment-api) add HK RTGS

<a name="2022-11-25"></a>

### [2022-11-25]

#### Changes

- Add test account list to [statement api stub specification](https://anz-insto.github.io/fileactive/fileactive/stub/accounts-statement.html)
- Fix broken link on [statement api](https://anz-insto.github.io/fileactive/fileactive/api/statement-api)

<a name="2022-11-22"></a>

### [2022-11-22]

#### Changes

- [Payment API]({{ site.baseurl }}/fileactive/api/payment-api) add SG RTGS
- [Payment API]({{ site.baseurl }}/fileactive/api/payment-api) add VN ACH
- [RTN Additional Information]({{ site.baseurl }}/rtn-info). Emoji handling and return code information for RTN and NPP.
- Minor changes to site content
- [Real Time Notification API]({{ site.baseurl }}/fileactive/api/rtn-api) fix path display

<a name="2022-08-19"></a>

### [2022-08-19]

#### Changes

- Site creation