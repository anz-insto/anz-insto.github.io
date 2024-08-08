---
layout: default
title: Lump Sum Settlement Report
navigation: fileactive
toc: true
---

<a name="top"></a>
## Contents

- [Description](#description)
- [Specification](#spec)
- [Sample](#sample1)
- [Schema](#xsd)

<a name="desc"></a>
### Description

Mandate Payment Initiation Requests (MPIR) may be processed as either an ‘itemised’ or ‘lump sum’ settlement.

When Lump Sum Settlement (LSS) is selected, all PayTo payments received will be aggregated and credited to the nominated account as a lump sum credit transaction. The frequency of a LSS can occur up to three times daily, every calendar day. Only one settlement method can be selected and will apply to all PayTo payments credited to the nominated account.

| Frequency of LSS per day | Time of LSS Aggregation |
|:------------------------:|-------------------------|
|            1             | 00:00 (midnight)        |
|            2             | 00:00 & 11:00           |
|            3             | 00:00, 10:00 & 14:00    |

- All timings are in AEST/AEDT
- Payments will be credited to nominated account once aggregation process has completed
- ANZ may need to change the time of LSS aggregation, you will be notified if this occurs

The balance and transaction report (BTR) will display the lump sum credit transactions with one of the following **narratives**; 
- PayTo *MPS User ID* LSS1*YYYYMMDD* 
- PayTo *MPS User ID* LSS2*YYYYMMDD* 
- PayTo *MPS User ID* LSS3*YYYYMMDD*

Where *YYYYMMDD* is the processing date the lump sum settlement cycle was run; e.g. **PayTo 10002005 LSS120240716**.

<a name="spec"></a>
### Specification

The Lump Sum Settlement (LSS) report will be provided in the ISO20022 format CAMT.054.001.11, this is a XML format. Refer to the separately published ISO20022 Message Implementation Guides applicable to the relevant message for the full message schema, which should be used in conjunction with this document. For further details regarding ISO20022, please visit [ISO20022 Website](https://www.iso20022.org/)


| Index | Name                           | Path & Element                                                                    | Format         | Multiplicity | Description                                                                                                                                                                     |
|:-----:|:-------------------------------|:----------------------------------------------------------------------------------|:---------------|:------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  1.0  | **Group Header**               | /Document/BkToCstmrDbtCdtNtfctn/GrpHdr                                            | Aggregate      |    [1..1]    | Common information for the message                                                                                                                                              |
|  1.1  | Message Identification         | /Document/BkToCstmrDbtCdtNtfctn/GrpHdr/MsgId                                      | String(35)     |    [1..1]    | Unique reference to identify the message                                                                                                                                        |
|  1.2  | Creation Date Time             | /Document/BkToCstmrDbtCdtNtfctn/GrpHdr/CreDtTm                                    | ISODateTime    |    [1..1]    | Local time with UTC offset format YYYY-MM-DDThh:mm:ss.sss+/-hh:mm                                                                                                               |
|  1.3  | Message Recipient              | /Document/BkToCstmrDbtCdtNtfctn/GrpHdr/MsgRcpt/Id/OrgId/Othr/Id                   | String(35)     |    [1..1]    | MPS User ID                                                                                                                                                                     |
|  2.0  | **Notification**               | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn                                            | Aggregate      |    [1..*]    | Notifies debit and credit entries for the account                                                                                                                               |
|  2.1  | Notification Identification    | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Id                                         | String(35)     |    [1..1]    | Unique identification as assigned by the account servicer, to unambiguously identify the account notification                                                                   |
|  2.2  | Account Identification         | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Acct/Id/Othr/Id                            | String(34)     |    [1..1]    | Identification of the account to which credit entries are made, prefixed with BSB (Bank-State-Branch)                                                                           |
|  2.3  | Scheme Code                    | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Acct/Id/Othr/SchmeNm/Cd                    | CodeSet        |    [1..1]    | Type of account identification<br><br> BBAN - Basic Bank Account Number, account number with BSB (Bank-State-Branch) prefix.                                                    |
|  2.4  | Servicer                       | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Acct/Svcr/FinInstnId/BICFI                 | String(11)     |    [1..1]    | Party that manages the account on behalf of the account owner, represented as a Business Identifier Code (BIC)                                                                  |
|  3.0  | **Transaction Summary**        | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/TxsSummry                                  | Aggregate      |    [1..1]    | Provides summary information on entries                                                                                                                                         |
|  3.1  | Total Number of Entries        | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/TxsSummry/TtlNtries/NbOfNtries             | Numeric(15)    |    [1..1]    | Total number of entries being reported                                                                                                                                          |
|  3.2  | Total Sum of Entries           | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/TxsSummry/TtlNtries/Sum                    | Decimal(18,17) |    [1..1]    | Total value of entries being reported                                                                                                                                           |
|  3.3  | Total Number of Credit Entries | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/TxsSummry/TtlCdtNtries/NbOfNtries          | Numeric(15)    |    [1..1]    | Total number of credit entries being reported                                                                                                                                   |
|  3.4  | Total Sum of Credit Entries    | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/TxsSummry/TtlCdtNtries/Sum                 | Decimal(18,17) |    [1..1]    | Total value of credit entries being reported                                                                                                                                    |
|  3.5  | Total Number of Debit Entries  | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/TxsSummry/TtlDbtNtries/NbOfNtries          | Numeric(15)    |    [1..1]    | Total number of debit entries being reported                                                                                                                                    |
|  3.6  | Total Sum of Debit Entries     | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/TxsSummry/TtlDbtNtries/Sum                 | Decimal(18,17) |    [1..1]    | Total value of debit entries being reported                                                                                                                                     |
|  4.0  | **Entry**                      | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry                                       | Aggregate      |    [1..*]    | Specifies an entry in the debit credit notification                                                                                                                             |
|  4.1  | Entry Reference                | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryRef                               | String(35)     |    [0..1]    | Unique reference for the entry. Will be the Creditor Reference from the mandate, where available                                                                                |
|  4.2  | Amount                         | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/Amt                                   | Decimal(18,5)  |    [1..1]    | Amount of money in the cash entry. Currency Code will be AUD                                                                                                                    |
|  4.3  | CreditDebitIndicator           | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/CdtDbtInd                             | CodeSet        |    [1..1]    | Indicates whether the entry is a credit or a debit entry<br><br> CRDT - Credit                                                                                                  |
|  4.4  | Status                         | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/Sts/Cd                                | CodeSet        |    [1..1]    | Status of an entry on the books of the account servicer<br><br> BOOK - Booked                                                                                                   |
|  4.5  | BookingDate                    | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/BookgDt/Dt                            | ISODate        |    [1..1]    | Date when an entry is posted to an account on the account servicer’s books. Format YYYY-MM-DD                                                                                   |
|  4.6  | ValueDate                      | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/ValDt/Dt                              | ISODate        |    [1..1]    | Date at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit entry. Format YYYY-MM-DD |
|  5.0  | **Bank Transaction Code**      | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/BkTxCd                                | Aggregate      |    [1..1]    | Set of elements used to fully identify the type of underlying transaction resulting in an entry                                                                                 |
|  5.1  | Domain Code                    | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/BkTxCd/Domn/Cd                        | CodeSet        |    [1..1]    | Specifies the business area of the underlying transaction<br><br> PMNT - Payment                                                                                                |
|  5.2  | Family Code                    | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/BkTxCd/Domn/Fmly/Cd                   | CodeSet        |    [1..1]    | Specifies the family and the sub-family of the bank transaction code, within a specific domain<br><br> RCDT - Received Credit Transfer                                          |
|  5.3  | Sub Family Code                | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/BkTxCd/Domn/Fmly/SubFmlyCd            | CodeSet        |    [1..1]    | Specifies the sub-product family within a specific family<br><br> DMCT - Domestic Credit Transfer                                                                               |
|  6.0  | **Transaction Details**        | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls                       | Aggregate      |    [1..1]    | Provides information on the underlying transaction(s)                                                                                                                           |
|  6.1  | EndToEnd Identification        | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls/Refs/EndToEndId       | String(35)     |    [1..1]    | Unique identification as assigned by the initiating party, to unambiguously identify the transaction                                                                            |
|  6.2  | Instruction Identification     | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls/Refs/InstrId          | String(35)     |    [1..1]    | Unique identification as assigned by ANZ for an instructed party to unambiguously identify the instruction                                                                      |
|  6.3  | Transaction Identification     | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls/Refs/TxId             | String(35)     |    [1..1]    | Unique reference, as assigned by a clearing system, to unambiguously identify the instruction                                                                                   |
|  6.4  | Mandate Identification         | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls/Refs/MndtId           | String(35)     |    [1..1]    | Unique identification as assigned by the MMS, to unambiguously identify the mandate.                                                                                            |
|  6.5  | Debtor Name                    | /Document/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls/RltdPties/Dbtr/Pty/Nm | String(140)    |    [0..1]    | Party that owes an amount of money to the (ultimate) creditor                                                                                                                   |

<a name="sample1"></a>
### Sample

```xml
<?xml version="1.0"?>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:camt.054.001.11" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <BkToCstmrDbtCdtNtfctn>
    <GrpHdr>
      <MsgId>10002005 LSS120240716</MsgId>
      <CreDtTm>2024-07-16T04:05:00.000+10:00</CreDtTm>
      <MsgRcpt>
        <Id>
          <OrgId>
            <Othr>
              <Id>10002005</Id>
            </Othr>
          </OrgId>
        </Id>
      </MsgRcpt>
    </GrpHdr>
    <Ntfctn>
      <Id>10002005 LSS120240716</Id>
      <Acct>
        <Id>
          <Othr>
            <Id>014650108109622</Id>
            <SchmeNm>
              <Cd>BBAN</Cd>
            </SchmeNm>
          </Othr>
        </Id>
        <Svcr>
          <FinInstnId>
            <BICFI>ANZBAU3LXXX</BICFI>
          </FinInstnId>
        </Svcr>
      </Acct>
      <TxsSummry>
        <TtlNtries>
          <NbOfNtries>2</NbOfNtries>
          <Sum>100.02</Sum>
        </TtlNtries>
        <TtlCdtNtries>
          <NbOfNtries>2</NbOfNtries>
          <Sum>100.02</Sum>
        </TtlCdtNtries>
        <TtlDbtNtries>
          <NbOfNtries>0</NbOfNtries>
          <Sum>0</Sum>
        </TtlDbtNtries>
      </TxsSummry>
      <Ntry>
        <NtryRef>Credit Ref1</NtryRef>
        <Amt Ccy="AUD">100.01</Amt>
        <CdtDbtInd>CRDT</CdtDbtInd>
        <Sts>
          <Cd>BOOK</Cd>
        </Sts>
        <BookgDt>
          <Dt>2024-07-16</Dt>
        </BookgDt>
        <ValDt>
          <Dt>2024-07-16</Dt>
        </ValDt>
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
              <InstrId>ANZBAU3LXXXI20240716MP0000000448380</InstrId>
              <EndToEndId>4u9eML38Fd167UGyDNC1xkD3z690HHDcLbr</EndToEndId>
              <TxId>NATAAU33XXXN20240716000516437854710</TxId>
              <MndtId>1f61cd30f00511ee959ddeac42859dea</MndtId>
            </Refs>
            <RltdPties>
              <Dbtr>
                <Pty>
                  <Nm>Rocky</Nm>
                </Pty>
              </Dbtr>
            </RltdPties>
          </TxDtls>
        </NtryDtls>
      </Ntry>
      <Ntry>
        <Amt Ccy="AUD">0.01</Amt>
        <CdtDbtInd>CRDT</CdtDbtInd>
        <Sts>
          <Cd>BOOK</Cd>
        </Sts>
        <BookgDt>
          <Dt>2024-07-16</Dt>
        </BookgDt>
        <ValDt>
          <Dt>2024-07-16</Dt>
        </ValDt>
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
              <InstrId>ANZBAU3LXXXI20240716MP0000000448390</InstrId>
              <EndToEndId>oPz39lQdK8jU4pOOL32oSkZM0V5nuOqnIb3</EndToEndId>
              <TxId>NATAAU33XXXN20240716000517216850870</TxId>
              <MndtId>1f61cd30f00511ee959ddeac42859dea</MndtId>
            </Refs>
            <RltdPties>
              <Dbtr>
                <Pty>
                  <Nm>Rocky</Nm>
                </Pty>
              </Dbtr>
            </RltdPties>
          </TxDtls>
        </NtryDtls>
      </Ntry>
    </Ntfctn>
  </BkToCstmrDbtCdtNtfctn>
</Document>
```

<a name="xsd"></a>
### Schema

ISO20022 schema can be downloaded here <a href="{{ site.baseurl }}{% link fileactive/file/xsd/camt.054.001.11.xsd %}" download>camt.054.001.11.xsd</a>

