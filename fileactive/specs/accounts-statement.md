---
layout: default
title: Fileactive - Intraday Statement Report | CAMT.052
description: Intraday Statement Report - camt.052.001.06
navigation: fileactive
---

# Intraday Statement Report

<a name="top"></a>
## Contents
- [Message specification](#spec)
- [Message sample](#sample)

---

<a name="xsd"></a>
### Intraday Statement Report - Bank To Customer Account Report
<a href="{{ site.baseurl }}{% link fileactive/file/xsd/camt.052.001.06.xsd %}" download>camt.052.001.06.xsd</a>

---
<a name="spec"></a>
## Intraday Statement Report
_Use case: Fileactive customer requests intraday statement_

| Name                                        | Path                                     | Description                                                                                                                                                                                                                                                                                                                                                   | Type      | Length     | Cardinality |
|:--------------------------------------------|:-----------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|:-----------|:-----------:|
| **Group Header**                            | BkToCstmrAcctRpt/GrpHdr                  | Aggregate                                                                                                                                                                                                                                                                                                                                                     | n/a       | n/a        |    1..1     |
| Message Id                                  | GrpHdr/MsgId                             | Point to point reference, as assigned by the account servicing institution to unambiguously identify the message.                                                                                                                                                                                                                                             | String    | 35         |    1..1     |
| Creation Date Time                          | GrpHdr/CreDtTm                           | Creation date time of the message in ISODateTime format. e.g. 2017-03-15T10:39:37                                                                                                                                                                                                                                                                             | DateTime  | n/a        |    1..1     |
| **Report**                                  | BkToCstmrAcctRpt/Rpt                     | Reports on a cash account.                                                                                                                                                                                                                                                                                                                                    | Aggregate | n/a        |    1..*     |
| Identification                              | Rpt/Id                                   | Unique identification, as assigned by the account servicer, to unambiguously identify the account report.                                                                                                                                                                                                                                                     | String    | 35         |    1..1     |
| Creation Date Time                          | Rpt/CreDtTm                              | Creation date time of the message in ISODateTime format. e.g. 2017-03-15T10:39:37                                                                                                                                                                                                                                                                             | DateTime  | n/a        |    1..1     |
| Reporting Source                            | Rpt/RptgSrc/Prtry                        | Specifies the application used to generate the reporting.                                                                                                                                                                                                                                                                                                     | String    | 35         |    0..1     |
| Account Identification                      | Rpt/Acct/Id/Othr/Id                      | Unambiguous identification of the account to which credit and debit entries are made.                                                                                                                                                                                                                                                                         | String    | 34         |    1..1     |
| Account Currency                            | Rpt/Acct/Ccy                             | Identification of the currency in which the account is held.                                                                                                                                                                                                                                                                                                  | String    | 3          |    0..1     |
| Account Name                                | Rpt/Acct/Nm                              | Name of the account, as assigned by the account servicing institution, in agreement with the account owner in order to provide an additional means of identification of the account.                                                                                                                                                                          | String    | 70         |    0..1     |
| **Balance**                                 | Rpt/Bal                                  | Aggregate.                                                                                                                                                                                                                                                                                                                                                    | n/a       | n/a        |    0..*     |
| Balance Type                                | Bal/Tp/CdOrPrtry                         | Specifies the nature of a balance: "ITAV" - InterimAvailable, available balance calculated in the course of the account servicer's business day, at the time specified, and subject to further changes during the business day. The interim balance is calculated on the basis of booked credit and debit items during the calculation time/period specified. | String    | 4          |    1..1     |
| Balance Sub Type                            | Bal/Tp/SubTp/Prtry                       | Balance type, in a proprietary form, "Current".                                                                                                                                                                                                                                                                                                               | String    | 35         |    0..1     |
| Amount Currency                             | Bal/Amt Ccy                              | Identification of the currency in which the account is held.                                                                                                                                                                                                                                                                                                  | String    | [A-Z][3,3] |    1..1     |
| Amount                                      | Bal/Amt                                  | Balance amount.                                                                                                                                                                                                                                                                                                                                               | Decimal   | [18,5]     |    1..1     |
| Credit Debit Indicator                      | Bal/CdtDbtInd                            | Indicates whether the balance is a credit or a debit balance: DBIT, CRDT.                                                                                                                                                                                                                                                                                     | String    | 4          |    1..1     |
| Balance Date                                | Bal/Dt                                   | Date and time at which the message was created.                                                                                                                                                                                                                                                                                                               | Date      | n/a        |    1..1     |
| **Transaction Summary**                     | Rpt/TxsSummry                            | Aggregate                                                                                                                                                                                                                                                                                                                                                     | n/a       | n/a        |    0..1     |
| Number of Entries                           | TxsSummry/TtlNtries/NbOfNtries           | Number of individual entries included in the report.                                                                                                                                                                                                                                                                                                          | Numeric   | 15         |    0..1     |
| Sum of Entries                              | TxsSummry/TtlNtries/Sum                  | Total of all individual entries included in the report.                                                                                                                                                                                                                                                                                                       | Decimal   | [18,17]    |    0..1     |
| Total Net Entries Amount                    | TxsSummry/TtlNtries/TtlNetNtry/Amt       | Resulting debit or credit amount of the netted amounts for all debit and credit entries.                                                                                                                                                                                                                                                                      | Decimal   | [18,17]    |    0..1     |
| Credit Debit Indicator                      | TxsSummry/TtlNtries/TtlNetNtry/CdtDbtInd | Indicates whether the amount is a credit or a debit amount.                                                                                                                                                                                                                                                                                                   | String    | 4          |    1..1     |
| Number of Credit Entries                    | TxsSummry/TtlCdtNtries/NbOfNtries        | Specifies the total number of credit entries.                                                                                                                                                                                                                                                                                                                 | Numeric   | 15         |    0..1     |
| Sum of Credit Entries                       | TxsSummry/TtlCdtNtries/Sum               | Specifies the sum of credit entries.                                                                                                                                                                                                                                                                                                                          | Decimal   | [18,17]    |    0..1     |
| Number of Debit Entries                     | TxsSummry/TtlDbtNtries/NbOfNtries        | Specifies the total number debit entries.                                                                                                                                                                                                                                                                                                                     | Numeric   | 15         |    0..1     |
| Sum of Debit Entries                        | TxsSummry/TtlDbtNtries/Sum               | Specifies the sum of debit entries.                                                                                                                                                                                                                                                                                                                           | Decimal   | [18,17]    |    0..1     |
| **Entry**                                   | Rpt/Ntry                                 | Aggregate                                                                                                                                                                                                                                                                                                                                                     | n/a       | n/a        |    0..*     |
| Entry Reference                             | Ntry/NtryRef                             | Unique reference for the entry                                                                                                                                                                                                                                                                                                                                | String    | 35         |    0..1     |
| Amount Currency                             | Ntry/Amt Ccy                             | Identification of the currency in which the account is held                                                                                                                                                                                                                                                                                                   | String    | [A-Z][3,3] |    1..1     |
| Amount                                      | Ntry/Amt                                 | Amount of money in the cash entry                                                                                                                                                                                                                                                                                                                             | Decimal   | [18,5]     |    1..1     |
| Credit Debit Indicator                      | Ntry/CdtDbtInd                           | Indicates whether the amount is a credit or a debit amount                                                                                                                                                                                                                                                                                                    | String    | 4          |    1..1     |
| Status                                      | Ntry/Sts                                 | Status of an entry on the books of the account servicer: 'BOOK'                                                                                                                                                                                                                                                                                               | String    | 4          |    1..1     |
| Booking Date                                | Ntry/BookgDt/Dt                          | Date and when an entry is posted to an account on the account servicer's books                                                                                                                                                                                                                                                                                | Date      | n/a        |    1..1     |
| Value Date                                  | Ntry/ValDt/Dt                            | Date at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit entry                                                                                                                                                                                                  | Date      | n/a        |    0..1     |
| Account Servicer Reference                  | Ntry/AcctSvcrRef                         | Unique reference as assigned by the account servicing institution to unambiguously identify the entry                                                                                                                                                                                                                                                         | String    | 35         |    0..1     |
| **Availability**                            | Ntry/Avlbty                              | Aggregate                                                                                                                                                                                                                                                                                                                                                     | n/a       | n/a        |    0..*     |
| Availability Date                           | Avlbty/Dt/ActlDt                         | Indicates when the booked amount of money will become available                                                                                                                                                                                                                                                                                               | Date      | n/a        |    0..1     |
| Availability Currency                       | Avlbty/Amt Ccy                           | Identification of the currency in which the account is held                                                                                                                                                                                                                                                                                                   | String    | [A-Z][3,3] |    1..1     |
| Availability                                | Avlbty/Amt                               | Identifies the available amount                                                                                                                                                                                                                                                                                                                               | Decimal   | [18,5]     |    1..1     |
| Credit Debit Indicator                      | Avlbty/CdtDbtInd                         | Indicates whether the amount is a credit or a debit amount                                                                                                                                                                                                                                                                                                    | String    | 4          |    1..1     |
| Bank Transaction Code Domain Code           | Ntry/BkTxCd/Domn/Cd                      | Specifies the business area of the underlying transaction: 'PMNT'                                                                                                                                                                                                                                                                                             | String    | 4          |    1..1     |
| Bank Transaction Code Domain Family Code    | Ntry/BkTxCd/Domn/Fmly/Cd                 | Specifies the family and the sub-family of the bank transaction code: 'RCDT', 'ICDT'                                                                                                                                                                                                                                                                          | String    | 4          |    1..1     |
| Bank Transaction Code Domain Family Subcode | Ntry/BkTxCd/Domn/Fmly/SubFmlyCd          | Specifies the sub-product family within a specific family: 'DMCT', 'ADBT'                                                                                                                                                                                                                                                                                     | String    | 4          |    1..1     |
| **Entry Details**                           | Ntry/NtryDtls                            | Aggregate                                                                                                                                                                                                                                                                                                                                                     | n/a       | n/a        |    1..*     |
| Account Servicer Reference                  | NtryDtls/TxDtls/Refs/AcctSvcrRef         | Returned only if includeNarrative=true. Unique reference, as assigned by the account servicing institution, to unambiguously identify the instruction                                                                                                                                                                                                         | String    | 35         |    0..1     |
| End To End Id                               | NtryDtls/TxDtls/Refs/EndToEndId          | Returned only if includeNarrative=true. Unique identification, as assigned by the initiating party, to unambiguously identify the transaction: EndToEndId                                                                                                                                                                                                     | String    | 35         |    0..1     |
| Proprietary Type                            | NtryDtls/TxDtls/Refs/Prtry/Tp            | Returned only if includeNarrative=true. For NPP entries type: 'ServiceLevel'                                                                                                                                                                                                                                                                                  | String    | 35         |    0..1     |
| Proprietary Reference                       | NtryDtls/TxDtls/Refs/Prtry/Ref           | Returned only if includeNarrative=true. For NPP entries SCT value: 'npp.clear.V01', OSKO value: 'ics1.clear.V01'                                                                                                                                                                                                                                              | String    | 35         |    0..1     |
| Amount Currency                             | NtryDtls/TxDtls/Amt Ccy                  | Identification of the currency in which the account is held                                                                                                                                                                                                                                                                                                   | String    | [A-Z][3,3] |    1..1     |
| Amount                                      | NtryDtls/TxDtls/Amt                      | Amount of money in the cash transaction                                                                                                                                                                                                                                                                                                                       | Decimal   | [18,5]     |    1..1     |
| Credit Debit Indicator                      | NtryDtls/TxDtls/CdtDbtInd                | Indicates whether the amount is a credit or a debit amount                                                                                                                                                                                                                                                                                                    | String    | 4          |    1..1     |
| **Related Parties**                         | NtryDtls/TxDtls/RltdPties                | Aggregate                                                                                                                                                                                                                                                                                                                                                     | n/a       | n/a        |    0..1     |
| Debtor Name                                 | RltdPties/Dbtr/Nm                        | Returned only if includeNarrative=true. Debtor (payer) account name                                                                                                                                                                                                                                                                                           | String    | 140        |    0..1     |
| Debtor Account Identification              | RltdPties/DbtrAcct/Id/Othr/Id            | Debtor account identification. Payer account number (NZ Systematics account)                                                                                                                                                                                                                                           | String    | 34         |    0..1     |
| Creditor Name                               | RltdPties/Cdtr/Nm                        | Returned only if includeNarrative=true. Creditor (payer) account name                                                                                                                                                                                                                                                                                         | String    | 140        |    0..1     |
| Creditor Alias Name                         | RltdPties/Cdtr/CtctDtls/Nm               | Returned only if includeNarrative=true. Creditor alias name                                                                                                                                                                                                                                                                                                   | String    | 140        |    0..1     |
| Creditor Alias Value                        | RltdPties/Cdtr/CtctDtls/EmailAdr         | Returned only if includeNarrative=true. Creditor alias value, e.g. "email@npp.com"                                                                                                                                                                                                                                                                            | String    | 2048       |    0..1     |
| Creditor Account Identification             | RltdPties/CdtrAcct/Id/Othr/Id            | Returned only if includeNarrative=true. Creditor account identification. Payee account number (ARM virtual account)<br /> Creditor account identification. Payee account number (NZ Systematics)                                                                                                                                                                                                                                          | String    | 34         |    0..1     |
| Creditor Account Issuer                     | RltdPties/CdtrAcct/Id/Othr/Issr          | Returned only if includeNarrative=true. Creditor account issuer. Payee account issuer - BSB (ARM Off System BSB)                                                                                                                                                                                                                                              | String    | 35         |    0..1     |
| Remittance Information Unstructured         | NtryDtls/TxDtls/RmtInf/Ustrd             | Remittance information of the transaction                                                                                                                                                                                                                                                                                                                     | String    | 140        |    0..*     |


---

<a name="sample 1"></a>
### Sample

```
<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:iso:std:iso:20022:tech:xsd:camt.052.001.06">
  <BkToCstmrAcctRpt>
    <GrpHdr>
      <MsgId>6c1c21ac0781458e9db328e4fbc10c8a</MsgId>
      <CreDtTm>2017-12-14T16:24:23.5977875+11:00</CreDtTm>
    </GrpHdr>
    <Rpt>
      <Id>0da5827bee6e406aa7152c120a3e705b</Id>
      <CreDtTm>2017-12-14T16:24:23.5977875+11:00</CreDtTm>
      <RptgSrc>
        <Prtry>CMM</Prtry>
      </RptgSrc>
      <Acct>
        <Id>
          <Othr>
            <Id>010071000289801</Id>
          </Othr>
        </Id>
        <Ccy>AUD</Ccy>
        <Nm>BLOGGS,JOE</Nm>
      </Acct>
      <Bal>
        <Tp>
          <CdOrPrtry>
            <Cd>ITAV</Cd>
          </CdOrPrtry>
          <SubTp>
            <Prtry>Current</Prtry>
          </SubTp>
        </Tp>
        <Amt Ccy="AUD">10.0000</Amt>
        <CdtDbtInd>CRDT</CdtDbtInd>
        <Dt>
          <Dt>2017-12-14</Dt>
        </Dt>
      </Bal>
      <TxsSummry>
        <TtlNtries>
          <NbOfNtries>2</NbOfNtries>
          <Sum>2.5000</Sum>
          <TtlNetNtry>
            <Amt>0.0000</Amt>
            <CdtDbtInd>CRDT</CdtDbtInd>
          </TtlNetNtry>
        </TtlNtries>
        <TtlCdtNtries>
          <NbOfNtries>1</NbOfNtries>
          <Sum>5.0000</Sum>
        </TtlCdtNtries>
        <TtlDbtNtries>
          <NbOfNtries>1</NbOfNtries>
          <Sum>2.5000</Sum>
        </TtlDbtNtries>
      </TxsSummry>
      <Ntry>
        <NtryRef>Ref 1234</NtryRef>
        <Amt Ccy="AUD">213.12</Amt>
        <CdtDbtInd>CRDT</CdtDbtInd>
        <Sts>BOOK</Sts>
        <BookgDt>
          <Dt>2017-05-30</Dt>
        </BookgDt>
        <ValDt>
          <Dt>2017-05-30</Dt>
        </ValDt>
        <AcctSvcrRef>Ref 567</AcctSvcrRef>
        <Avlbty>
          <Dt>
            <ActlDt>2017-05-30</ActlDt>
          </Dt>
          <Amt Ccy="AUD">246340.00</Amt>
          <CdtDbtInd>CRDT</CdtDbtInd>
        </Avlbty>
        <BkTxCd>
          <Domn>
            <Cd>PMNT</Cd>
            <Fmly>
              <Cd>RCDT</Cd>
              <SubFmlyCd>DMCT</SubFmlyCd>
            </Fmly>
          </Domn>
        </BkTxCd>
        <NtryDtls>
          <TxDtls>
            <Refs>
              <AcctSvcrRef>1234567890123456789</AcctSvcrRef>
              <EndToEndId>my_e2e_id_1234_1</EndToEndId>
              <Prtry>
                <Tp>ServiceLevel</Tp>
                <Ref>ics1.clear.V01</Ref>
              </Prtry>
            </Refs>
            <Amt Ccy="AUD">213.12</Amt>
            <CdtDbtInd>CRDT</CdtDbtInd>
            <RltdPties>
              <Dbtr>
                <Nm>Adam Atawneh</Nm>
              </Dbtr>
              <Cdtr>
                <Nm>Daniel Holden</Nm>
              </Cdtr>
              <CdtrAcct>
                <Id>
                  <Othr>
                    <Id>123456789</Id>
                    <Issr>018765</Issr>
                  </Othr>
                </Id>
              </CdtrAcct>
            </RltdPties>
            <RmtInf>
              <Ustrd>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc</Ustrd>
              <Ustrd>e the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent</Ustrd>
            </RmtInf>
          </TxDtls>
        </NtryDtls>
      </Ntry>
    </Rpt>
  </BkToCstmrAcctRpt>
</Document>
```

---
<a name="sample 2"></a>
### Sample

```
<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:iso:std:iso:20022:tech:xsd:camt.052.001.06">
  <BkToCstmrAcctRpt>
    <GrpHdr>
      <MsgId>6c1c21ac0781458e9db328e4fbc10c8a</MsgId>
      <CreDtTm>2017-12-14T16:24:23.5977875+11:00</CreDtTm>
    </GrpHdr>
    <Rpt>
      <Id>0da5827bee6e406aa7152c120a3e705b</Id>
      <CreDtTm>2017-12-14T16:24:23.5977875+11:00</CreDtTm>
      <RptgSrc>
        <Prtry>CMM</Prtry>
      </RptgSrc>
      <Acct>
        <Id>
          <Othr>
            <Id>010071000289801</Id>
          </Othr>
        </Id>
        <Ccy>AUD</Ccy>
        <Nm>BLOGGS,JOE</Nm>
      </Acct>
      <Bal>
        <Tp>
          <CdOrPrtry>
            <Cd>ITAV</Cd>
          </CdOrPrtry>
          <SubTp>
            <Prtry>Current</Prtry>
          </SubTp>
        </Tp>
        <Amt Ccy="AUD">10.0000</Amt>
        <CdtDbtInd>DBIT</CdtDbtInd>
        <Dt>
          <Dt>2017-12-14</Dt>
        </Dt>
      </Bal>
      <TxsSummry>
        <TtlNtries>
          <NbOfNtries>2</NbOfNtries>
          <Sum>2.5000</Sum>
          <TtlNetNtry>
            <Amt>0.0000</Amt>
            <CdtDbtInd>DBIT</CdtDbtInd>
          </TtlNetNtry>
        </TtlNtries>
        <TtlCdtNtries>
          <NbOfNtries>1</NbOfNtries>
          <Sum>5.0000</Sum>
        </TtlCdtNtries>
        <TtlDbtNtries>
          <NbOfNtries>1</NbOfNtries>
          <Sum>2.5000</Sum>
        </TtlDbtNtries>
      </TxsSummry>
      <Ntry>
        <NtryRef>Ref 1234</NtryRef>
        <Amt Ccy="AUD">213.12</Amt>
        <CdtDbtInd>DBIT</CdtDbtInd>
        <Sts>BOOK</Sts>
        <BookgDt>
          <Dt>2017-05-30</Dt>
        </BookgDt>
        <ValDt>
          <Dt>2017-05-30</Dt>
        </ValDt>
        <AcctSvcrRef>Ref 567</AcctSvcrRef>
        <Avlbty>
          <Dt>
            <ActlDt>2017-05-30</ActlDt>
          </Dt>
          <Amt Ccy="AUD">246340.00</Amt>
          <CdtDbtInd>DBIT</CdtDbtInd>
        </Avlbty>
        <BkTxCd>
          <Domn>
            <Cd>PMNT</Cd>
            <Fmly>
              <Cd>RCDT</Cd>
              <SubFmlyCd>DMCT</SubFmlyCd>
            </Fmly>
          </Domn>
        </BkTxCd>
        <NtryDtls>
          <TxDtls>
            <Refs>
              <AcctSvcrRef>1234567890123456789</AcctSvcrRef>
              <EndToEndId>my_e2e_id_1234_1</EndToEndId>
              <Prtry>
                <Tp>ServiceLevel</Tp>
                <Ref>ics1.clear.V01</Ref>
              </Prtry>
            </Refs>
            <Amt Ccy="AUD">213.12</Amt>
            <CdtDbtInd>DBIT</CdtDbtInd>
            <RltdPties>
              <Dbtr>
                <Nm>Adam Atawneh</Nm>
              </Dbtr>
              <DbtrAcct>
                <Id>
                  <Othr>
                    <Id>123456789</Id>
                  </Othr>
                </Id>
              </DbtrAcct>
              <Cdtr>
                <Nm>Daniel Holden</Nm>
              </Cdtr>
            </RltdPties>
            <RmtInf>
              <Ustrd>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc</Ustrd>
              <Ustrd>e the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent</Ustrd>
            </RmtInf>
          </TxDtls>
        </NtryDtls>
      </Ntry>
    </Rpt>
  </BkToCstmrAcctRpt>
</Document>
```

---
