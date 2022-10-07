---
title: Fileactive Accounts Statement API
description: |-
    This page details the Accounts Statement request and the relevant response.   
    **Pre-Requisite:** All the account intended to be used for fetching account statement, must be requested to be registered prior.
---

<!--page content-->

<a name="top"></a>

## Contents

- [Successful Intraday call](#sample-success)
- [Successful Intraday call with NPP Extended Narrative Information](#sample-success-narrative)
- [Successful Intraday ARM call with NPP Extended Narrative Information](#sample-arm-success-narrative)
- [Account Statement request with Incorrect/Invalid accountId](#sample-invalid-accountId)
- [Reserved accounts list to not use](#reserved-accounts)

---

<a name="sample-success"></a>
## Successful Intraday Accounts Statement

To simulate a successful response, use the following test values:

| Field     | Path      | Value                                               |
|:----------|:----------|:----------------------------------------------------|
| AccountId | accountId | any account id [exception list](#reserved-accounts) |


#### **HTTP Method : __POST__**

#### **Sample Request Details :**

*Headers:*

{% highlight yaml linenos %}
   Content-Type: application/json
   Authorization: Bearer <Access Token>
   apikey : <apikey>
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
	"accountId": "011222814766535"
}
{% endhighlight %}

#### **Sample Response details:**

*HTTP: 200*

{% highlight json linenos %}
{
	"accountId": "011222814766535",
	"extract": "intraday",
	"payload": "<?xml version="1.0" encoding="UTF-8"?> <Document xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns=\"urn:iso:std:iso:20022:tech:xsd:camt.052.001.06\"> <BkToCstmrAcctRpt> <GrpHdr> <MsgId>80010d0c0003ce00b63f84710c7967bb</MsgId> <CreDtTm>2019-10-17T11:28:12.1814057+11:00</CreDtTm> </GrpHdr> <Rpt> <Id>d0e4d3a12fd4494aba691fc6c6cbf194</Id> <CreDtTm>2019-10-17T11:28:12.1814057+11:00</CreDtTm> <RptgSrc> <Prtry>V2P</Prtry> </RptgSrc> <Acct> <Id> <Othr> <Id>011222814766535</Id> </Othr> </Id> <Ccy>AUD</Ccy> </Acct> <Bal> <Tp> <CdOrPrtry> <Cd>ITAV</Cd> </CdOrPrtry> <SubTp> <Prtry>Current</Prtry> </SubTp> </Tp> <Amt Ccy=\"AUD\">14242340.28</Amt> <CdtDbtInd>CRDT</CdtDbtInd> <Dt> <Dt>2019-07-31</Dt> </Dt> </Bal> <TxsSummry> <TtlNtries> <NbOfNtries>0</NbOfNtries> <Sum>0</Sum> <TtlNetNtry> <Amt>0</Amt> <CdtDbtInd>CRDT</CdtDbtI nd> </TtlNetNtry> </TtlNtries> <TtlCdtNtries> <NbOfNtries>0</NbOfNtries> <Sum>0</Sum> </TtlCdtNtries> <TtlDbtNtries> <NbOfNtries>0</NbOfNtries> <Sum>0</Sum> </TtlDbtNtries> </TxsSummry> </Rpt> </BkToCstmrAcctRpt> </Document>",
	"requestKey": "80010d0c-0003-ce00-b63f-84710c7967bb",
	"cursor": "MjAxOTEwMTc6NQ==",
	"moreTransactionsAvailable": true
}
{% endhighlight %}

<br/>

[back to top](#top)

---

<a name="sample-success-narrative"></a>
## Successful Intraday Accounts Statement with NPP Extended Narrative Information

To simulate a successful response, use the following test values:

| Field             | Path             | Value           |
|:------------------|:-----------------|:----------------|
| AccountId         | accountId        | 011222814766535 |
| Include Narrative | includeNarrative | true            |

#### **HTTP Method : __POST__**

#### **Sample Request Details :**

*Headers:*

{% highlight yaml linenos %}
   Content-Type: application/json
   Authorization: Bearer <Access Token>
   apikey : <apikey>
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
	"accountId": "011222814766535",
	"includeNarrative": true
}
{% endhighlight %}

#### **Sample Response details:**

*HTTP: 200*

{% highlight json linenos %}
{
  "accountId": "011222814766535",
  "extract": "intraday",
  "payload": "<?xml version=\"1.0\" encoding=\"utf-8\"?><Document xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns=\"urn:iso:std:iso:20022:tech:xsd:camt.052.001.06\"><BkToCstmrAcctRpt><GrpHdr><MsgId>b420c09b8dc64694b41613fce40e3022</MsgId><CreDtTm>2020-01-20T16:42:06.2313279+11:00</CreDtTm></GrpHdr><Rpt><Id>768b9226504f41a9955501f6b3c5ba8d</Id><CreDtTm>2020-01-20T16:42:06.2313279+11:00</CreDtTm><RptgSrc><Prtry>V2P</Prtry></RptgSrc><Acct><Id><Othr><Id>011222814766535</Id></Othr></Id><Ccy>AUD</Ccy></Acct><Bal><Tp><CdOrPrtry><Cd>ITAV</Cd></CdOrPrtry><SubTp><Prtry>Current</Prtry></SubTp></Tp><Amt Ccy=\"AUD\">14242340.28</Amt><CdtDbtInd>CRDT</CdtDbtInd><Dt><Dt>2019-07-31</Dt></Dt></Bal><TxsSummry><TtlNtries><NbOfNtries>5</NbOfNtries><Sum>135.00</Sum><TtlNetNtry><Amt>135.00</Amt><CdtDbtInd>CRDT</CdtDbtInd></TtlNetNtry></TtlNtries><TtlCdtNtries><NbOfNtries>5</NbOfNtries><Sum>135.00</Sum></TtlCdtNtries><TtlDbtNtries><NbOfNtries>0</NbOfNtries><Sum>0</Sum></TtlDbtNtries></TxsSummry><Ntry><Amt Ccy=\"AUD\">42.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><Sts>BOOK</Sts><BookgDt><Dt>2020-01-20</Dt></BookgDt><ValDt><Dt>2020-01-20</Dt></ValDt><BkTxCd><Domn><Cd>PMNT</Cd><Fmly><Cd>RCDT</Cd><SubFmlyCd>DMCT</SubFmlyCd></Fmly></Domn></BkTxCd><NtryDtls><TxDtls><Amt Ccy=\"AUD\">42.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><RmtInf><Ustrd>Memo for transaction 20200120:4</Ustrd></RmtInf></TxDtls></NtryDtls></Ntry><Ntry><Amt Ccy=\"AUD\">17.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><Sts>BOOK</Sts><BookgDt><Dt>2020-01-20</Dt></BookgDt><ValDt><Dt>2020-01-20</Dt></ValDt><BkTxCd><Domn><Cd>PMNT</Cd><Fmly><Cd>RCDT</Cd><SubFmlyCd>DMCT</SubFmlyCd></Fmly></Domn></BkTxCd><NtryDtls><TxDtls><Amt Ccy=\"AUD\">17.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><RmtInf><Ustrd>Memo for transaction 20200120:3</Ustrd></RmtInf></TxDtls></NtryDtls></Ntry><Ntry><Amt Ccy=\"AUD\">51.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><Sts>BOOK</Sts><BookgDt><Dt>2020-01-20</Dt></BookgDt><ValDt><Dt>2020-01-20</Dt></ValDt><BkTxCd><Domn><Cd>PMNT</Cd><Fmly><Cd>RCDT</Cd><SubFmlyCd>DMCT</SubFmlyCd></Fmly></Domn></BkTxCd><NtryDtls><TxDtls><Amt Ccy=\"AUD\">51.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><RmtInf><Ustrd>Memo for transaction 20200120:2</Ustrd></RmtInf></TxDtls></NtryDtls></Ntry><Ntry><Amt Ccy=\"AUD\">25.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><Sts>BOOK</Sts><BookgDt><Dt>2020-01-20</Dt></BookgDt><ValDt><Dt>2020-01-20</Dt></ValDt><BkTxCd><Domn><Cd>PMNT</Cd><Fmly><Cd>RCDT</Cd><SubFmlyCd>DMCT</SubFmlyCd></Fmly></Domn></BkTxCd><NtryDtls><TxDtls><Refs><AcctSvcrRef>1234567890123456789</AcctSvcrRef><EndToEndId>Tx0000163773</EndToEndId><Prtry><Tp>ServiceLevel</Tp><Ref>ics1.clear.V01</Ref></Prtry></Refs><Amt Ccy=\"AUD\">25.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><RltdPties><Dbtr><Nm>HITACHI INTERNATIONAL</Nm></Dbtr><Cdtr><Nm>BILBO BAGGINS</Nm></Cdtr></RltdPties><RmtInf><Ustrd>Hey 😁! this is a Fast payment Extended Narrative Information 👍👨‍👩‍👧‍👦</Ustrd></RmtInf></TxDtls></NtryDtls></Ntry><Ntry><Amt Ccy=\"AUD\">0.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><Sts>BOOK</Sts><BookgDt><Dt>2020-01-20</Dt></BookgDt><ValDt><Dt>2020-01-20</Dt></ValDt><BkTxCd><Domn><Cd>PMNT</Cd><Fmly><Cd>RCDT</Cd><SubFmlyCd>DMCT</SubFmlyCd></Fmly></Domn></BkTxCd><NtryDtls><TxDtls><Amt Ccy=\"AUD\">0.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><RmtInf><Ustrd>Memo for transaction 20200120:0</Ustrd></RmtInf></TxDtls></NtryDtls></Ntry></Rpt></BkToCstmrAcctRpt></Document>",
  "requestKey": "b420c09b-8dc6-4694-b416-13fce40e3022",
  "moreTransactionsAvailable": false
}
{% endhighlight %}

###### Note:  Payload will contain a transaction with 'RltdPties' and 'Ustrd' field values with NPP Transaction and NARRATIVE Information.


<br/>

---

<a name="sample-arm-success-narrative"></a>
## Successful Intraday ARM Accounts Statement with NPP Extended Narrative Information

To simulate a successful response, use the following test values:

| Field             | Path             | Value                              |
|:------------------|:-----------------|:-----------------------------------|
| AccountId         | accountId        | 011222814766538 or 011222814766539 |
| Include Narrative | includeNarrative | true                               |

#### **HTTP Method : __POST__**

#### **Sample Request Details :**

*Headers:*

{% highlight yaml linenos %}
   Content-Type: application/json
   Authorization: Bearer <Access Token>
   apikey : <apikey>
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
	"accountId": "011222814766538",
	"includeNarrative": true
}
{% endhighlight %}

#### **Sample Response details:**

*HTTP: 200*

{% highlight json linenos %}
{
  "accountId": "011222814766538",
  "extract": "intraday",
  "sortOrder": "forward",
  "payload": "<?xml version=\"1.0\" encoding=\"utf-8\"?><Document xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns=\"urn:iso:std:iso:20022:tech:xsd:camt.052.001.06\"><BkToCstmrAcctRpt><GrpHdr><MsgId>44b756ed60c8496391a768af90073f3f</MsgId><CreDtTm>2021-07-29T17:10:05.1750344+10:00</CreDtTm></GrpHdr><Rpt><Id>2a49546e4627493c9ba9645df24c9271</Id><CreDtTm>2021-07-29T17:10:05.1750344+10:00</CreDtTm><RptgSrc><Prtry>CMM</Prtry></RptgSrc><Acct><Id><Othr><Id>011222814766538</Id></Othr></Id><Ccy>AUD</Ccy></Acct><Bal><Tp><CdOrPrtry><Cd>ITAV</Cd></CdOrPrtry><SubTp><Prtry>Current</Prtry></SubTp></Tp><Amt Ccy=\"AUD\">1245500.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><Dt><Dt>2021-07-29</Dt></Dt></Bal><TxsSummry><TtlNtries><NbOfNtries>6</NbOfNtries><Sum>143.00</Sum><TtlNetNtry><Amt>143.00</Amt><CdtDbtInd>CRDT</CdtDbtInd></TtlNetNtry></TtlNtries><TtlCdtNtries><NbOfNtries>6</NbOfNtries><Sum>143.00</Sum></TtlCdtNtries><TtlDbtNtries><NbOfNtries>0</NbOfNtries><Sum>0</Sum></TtlDbtNtries></TxsSummry><Ntry><Amt Ccy=\"AUD\">8.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><Sts>BOOK</Sts><BookgDt><Dt>2021-07-29</Dt></BookgDt><ValDt><Dt>2021-07-29</Dt></ValDt><BkTxCd><Domn><Cd>PMNT</Cd><Fmly><Cd>RCDT</Cd><SubFmlyCd>DMCT</SubFmlyCd></Fmly></Domn></BkTxCd><NtryDtls><TxDtls><Amt Ccy=\"AUD\">8.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><RmtInf><Ustrd>Memo for transaction 20210729:5</Ustrd></RmtInf></TxDtls></NtryDtls></Ntry><Ntry><Amt Ccy=\"AUD\">42.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><Sts>BOOK</Sts><BookgDt><Dt>2021-07-29</Dt></BookgDt><ValDt><Dt>2021-07-29</Dt></ValDt><BkTxCd><Domn><Cd>PMNT</Cd><Fmly><Cd>RCDT</Cd><SubFmlyCd>DMCT</SubFmlyCd></Fmly></Domn></BkTxCd><NtryDtls><TxDtls><Amt Ccy=\"AUD\">42.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><RmtInf><Ustrd>Memo for transaction 20210729:4</Ustrd></RmtInf></TxDtls></NtryDtls></Ntry><Ntry><Amt Ccy=\"AUD\">17.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><Sts>BOOK</Sts><BookgDt><Dt>2021-07-29</Dt></BookgDt><ValDt><Dt>2021-07-29</Dt></ValDt><BkTxCd><Domn><Cd>PMNT</Cd><Fmly><Cd>RCDT</Cd><SubFmlyCd>DMCT</SubFmlyCd></Fmly></Domn></BkTxCd><NtryDtls><TxDtls><Amt Ccy=\"AUD\">17.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><RmtInf><Ustrd>Memo for transaction 20210729:3</Ustrd></RmtInf></TxDtls></NtryDtls></Ntry><Ntry><Amt Ccy=\"AUD\">51.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><Sts>BOOK</Sts><BookgDt><Dt>2021-07-29</Dt></BookgDt><ValDt><Dt>2021-07-29</Dt></ValDt><BkTxCd><Domn><Cd>PMNT</Cd><Fmly><Cd>RCDT</Cd><SubFmlyCd>DMCT</SubFmlyCd></Fmly></Domn></BkTxCd><NtryDtls><TxDtls><Amt Ccy=\"AUD\">51.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><RmtInf><Ustrd>Memo for transaction 20210729:2</Ustrd></RmtInf></TxDtls></NtryDtls></Ntry><Ntry><Amt Ccy=\"AUD\">25.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><Sts>BOOK</Sts><BookgDt><Dt>2021-07-29</Dt></BookgDt><ValDt><Dt>2021-07-29</Dt></ValDt><BkTxCd><Domn><Cd>PMNT</Cd><Fmly><Cd>RCDT</Cd><SubFmlyCd>DMCT</SubFmlyCd></Fmly></Domn></BkTxCd><NtryDtls><TxDtls><Refs><AcctSvcrRef>1234567890123456789</AcctSvcrRef><EndToEndId>Tx0000163773</EndToEndId><Prtry><Tp>ServiceLevel</Tp><Ref>ics1.clear.V01</Ref></Prtry></Refs><Amt Ccy=\"AUD\">25.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><RltdPties><Dbtr><Nm>HITACHI INTERNATIONAL</Nm></Dbtr><Cdtr><Nm>BILBO BAGGINS</Nm></Cdtr><CdtrAcct><Id><Othr><Id>006430991</Id><Issr>010201</Issr></Othr></Id></CdtrAcct></RltdPties><RmtInf><Ustrd>payment 12345 - sample emoji 👍</Ustrd></RmtInf></TxDtls></NtryDtls></Ntry><Ntry><Amt Ccy=\"AUD\">0.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><Sts>BOOK</Sts><BookgDt><Dt>2021-07-29</Dt></BookgDt><ValDt><Dt>2021-07-29</Dt></ValDt><BkTxCd><Domn><Cd>PMNT</Cd><Fmly><Cd>RCDT</Cd><SubFmlyCd>DMCT</SubFmlyCd></Fmly></Domn></BkTxCd><NtryDtls><TxDtls><Amt Ccy=\"AUD\">0.00</Amt><CdtDbtInd>CRDT</CdtDbtInd><RmtInf><Ustrd>Memo for transaction 20210729:0</Ustrd></RmtInf></TxDtls></NtryDtls></Ntry></Rpt></BkToCstmrAcctRpt></Document>",
  "requestKey": "44b756ed-60c8-4963-91a7-68af90073f3f",
  "moreTransactionsAvailable": false
}
{% endhighlight %}

###### Note:  Payload will contain a transaction with 'RltdPties' and 'Ustrd' field values with NPP Transaction and narrative information, along with the ARM virtual account details as follows:
- Creditor account identification. Payee account number (ARM virtual account)
- Creditor account issuer. Payee account issuer - BSB (ARM Off System BSB)

[back to top](#top)

---

<br/>
<br/>

<a name="sample-invalid-accountId"></a>
## 	Account Statement request with Incorrect/Invalid accountId fails

To simulate a successful response, use the following test values:

| Field     | Path      | Value           |
|:----------|:----------|:----------------|
| AccountId | accountId | 000000000000000 |

#### **HTTP Method : __POST__**

#### **Sample Request Details :**

*Headers:*

{% highlight yaml linenos %}
   Content-Type: application/json
   Authorization: Bearer <Access Token>
   apikey : <apikey>
{% endhighlight %}

*Body:*

{% highlight json linenos %}
{
	"accountId": "000000000000000",
}
{% endhighlight %}

#### **Sample Response details:**

*HTTP: 200*

{% highlight json linenos %}
{
         "requestKey": "531ba7c0-47dc-11ea-a20e-b9c0078e2e9a",
         "error":{
           "statusCode": "EC20001",
           "title": "Account Id: '000000000000000' not found"
         }
} 
{% endhighlight %}


<br/>

---

<br/>

[back to top](#top)
---

<br/>
<br/>

<a name="reserved-accounts"></a>
## Accounts Reserved for Internal error cases 

###### Note:  These below listed accounts (with any BSB) are used for INTERNAL negative testing only and not be used.
<br/>

| Account numbers |
|:----------------|
| 111111111       |
| 222222222       |
| 333333333       |
| 444444444       |
| 555555555       |
| 666666666       |
| 777777777       |
| 888888888       |
| 999999999       |
