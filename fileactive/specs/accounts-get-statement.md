---
layout: default
title: Fileactive - Priorday Statement | CAMT.053
description: Priorday Statement - camt.053.001.06
---

# Priorday Statement

<a name="top"></a>
## Contents
- [Message specification](#spec)
- [Message sample](#sample)

---

<a name="xsd"></a>
### Priorday Statement - Bank To Customer Account Report
<a href="{{ site.baseurl }}{% link fileactive/file/xsd/camt.053.001.06.xsd %}" download>camt.053.001.06.xsd</a>

---
<a name="spec"></a>
## Priorday Statement
_Use case: Fileactive customer requests priorday statement_

| Name                                        | Path                                     | Description                                                                                                                                                                                                                                                                                                                                                   | Type      | Length     | Cardinality |
|:--------------------------------------------|:-----------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|:-----------|:-----------:|
| **Group Header**                            | BkToCstmrStmt/GrpHdr                  | Aggregate                                                                                                                                                                                                                                                                                                                                                     | n/a       | n/a        |    1..1     |
| Message Id                                  | GrpHdr/MsgId                             | Point to point reference, as assigned by the account servicing institution to unambiguously identify the message.                                                                                                                                                                                                                                             | String    | 35         |    1..1     |
| Creation Date Time                          | GrpHdr/CreDtTm                           | Date and time at which the message was created                                                                                                                                                                                                                                                                             | DateTime  | n/a        |    1..1     |
| **Statement**                                  | BkToCstmrStmt/Stmt                     | Aggregate                                                                                                                                                                                                                                                                                                                                    | n/a | n/a        |    1..*     |
| Id                              | Stmt/Id                                   | Unique identification, as assigned by the account servicer, to unambiguously identify the account report.                                                                                                                                                                                                                                                     | String    | 35         |    1..1     |
| Creation Date Time                          | Stmt/CreDtTm                              | Date and time at which the message was created                                                                                                                                                                                                                                                                             | DateTime  | n/a        |    1..1     |
| **Account**                                  | Stmt/Acct                     | Aggregate                                                                                                                                                                                                                                                                                                                                    | n/a | n/a        |    1..1     |
| Id                            | Acct/Id/Othr/Id                        | Specifies the unique identification of an account as assigned by the account servicer                                                                                                                                                                                                                                                                                                     | String    | 34         |    1..1     |
| Currency                      | Acct/Ccy                      | Identification of the currency in which the account is held                                                                                                                                                                                                                                                                         | String    | [A-Z][3,3]         |    0..1     |
| Name                            | Acct/Nm                             | Name of the account                                                                                                                                                                                                                                                                                                  | String    | 70          |    0..1     |
| Servicer BIC                                | Acct/Svcr/FinInstnId/BICFI                              | Party that manages the account on behalf of the account owner                                                                                                                                                                          | String    | [A-Z][6,6][A-Z2-9][A-NP-Z0-9]([A-Z0-9][3,3])[0,1]         |    0..1     |
| Source Of Account                                | Stmt/RptgSrc/Prtry                              | ANZ's host system. CMM (Corporate Customer Account), MDZXXN (Foregin Currency Account where XX is the 2 digit ISO Currency Code and N is the 1 digit Ledger Instance), DATABANK (NZ Account), HFR (Retail Customer Account), NZXBANK (ANZ National Bank Account), V2 (V2 PLUS Wholesale Account)                                                                                                                                                                          | String    |          |    1..1     |
| **Interest**                                 | Stmt/Intrst                                  | Aggregate                                                                                                                                                                                                                                                                                                                                                    | n/a       | n/a        |    0..*     |
| Interest Code                            | Intrst/Tp/Prtry                        | Specifies the type of interest: DBITACRD, CRDTACRD, DBIT, CRDT                                                                                                                                                                                                                                                                                                     | String    | 35         |    1..1     |
| Interest Rate                            | Intrst/Rate/Tp/Othr                        | Interest Rate                                                                                                                                                                                                                                                                                                     | Decimal    | [18,5]         |    1..1     |
| **Balance**                                 | Stmt/Bal                                  | Aggregate                                                                                                                                                                                                                                                                                                                                                    | n/a       | n/a        |    1..*     |
| Balance Type                                | Bal/Tp/CdOrPrtry                         | Specifies the nature of a balance: INFO,OPBD,OPAV,CLBD,CLAV | String    | 4          |    1..1     |
| Balance Sub Type                            | Bal/Tp/SubTp/Prtry                       | Specifies the balance sub-type: LIEN, TAMT, FLT1, FLT2, FLT3, FLT4, FLT5, FLT6, FLT7, FLT8, FLT9, FLT10                                                                                                                                                                                                                                                                                                               | String    | 35         |    1..1     |
| Amount Currency                             | Bal/Amt Ccy                              | Identification of the currency in which the account is held.                                                                                                                                                                                                                                                                                                  | String    | [A-Z][3,3] |    1..1     |
| Amount                                      | Bal/Amt                                  | Balance amount.                                                                                                                                                                                                                                                                                                                                               | Decimal   | [18,5]     |    1..1     |
| Credit Debit Indicator                      | Bal/CdtDbtInd                            | Indicates whether the balance is a credit or a debit balance: DBIT, CRDT.                                                                                                                                                                                                                                                                                     | String    | 4          |    1..1     |
| Balance Date                                | Bal/Dt                                   | Date and time at which the message was created.                                                                                                                                                                                                                                                                                                               | Date      | n/a        |    1..1     |
| **Transaction Summary**                     | Stmt/TxsSummry                            | Aggregate                                                                                                                                                                                                                                                                                                                                                     | n/a       | n/a        |    0..1     |
| Number of Entries                           | TxsSummry/TtlNtries/NbOfNtries           | Number of individual entries included in the report.                                                                                                                                                                                                                                                                                                          | Numeric   | 15         |    0..1     |
| Sum of Entries                              | TxsSummry/TtlNtries/Sum                  | Total of all individual entries included in the report.                                                                                                                                                                                                                                                                                                       | Decimal   | [18,17]    |    0..1     |
| Total Net Entries Amount                    | TxsSummry/TtlNtries/TtlNetNtry/Amt       | Resulting debit or credit amount of the netted amounts for all debit and credit entries.                                                                                                                                                                                                                                                                      | Decimal   | [18,17]    |    1..1     |
| Credit Debit Indicator                      | TxsSummry/TtlNtries/TtlNetNtry/CdtDbtInd | Indicates whether the amount is a credit or a debit amount.                                                                                                                                                                                                                                                                                                   | String    | 4          |    1..1     |
| Number of Credit Entries                    | TxsSummry/TtlCdtNtries/NbOfNtries        | Specifies the total number of credit entries.                                                                                                                                                                                                                                                                                                                 | Numeric   | 15         |    0..1     |
| Sum of Credit Entries                       | TxsSummry/TtlCdtNtries/Sum               | Specifies the sum of credit entries.                                                                                                                                                                                                                                                                                                                          | Decimal   | [18,17]    |    0..1     |
| Number of Debit Entries                     | TxsSummry/TtlDbtNtries/NbOfNtries        | Specifies the total number debit entries.                                                                                                                                                                                                                                                                                                                     | Numeric   | 15         |    0..1     |
| Sum of Debit Entries                        | TxsSummry/TtlDbtNtries/Sum               | Specifies the sum of debit entries.                                                                                                                                                                                                                                                                                                                           | Decimal   | [18,17]    |    0..1     |
| **Entry**                                   | Stmt/Ntry                                 | Aggregate                                                                                                                                                                                                                                                                                                                                                     | n/a       | n/a        |    0..*     |
| Entry Reference                             | Ntry/NtryRef                             | Unique reference for the entry                                                                                                                                                                                                                                                                                                                                | String    | 35         |    0..1     |
| Amount Currency                             | Ntry/Amt Ccy                             | Identification of the currency in which the account is held                                                                                                                                                                                                                                                                                                   | String    | [A-Z][3,3] |    1..1     |
| Amount                                      | Ntry/Amt                                 | Amount of money in the cash entry                                                                                                                                                                                                                                                                                                                             | Decimal   | [18,5]     |    1..1     |
| Credit Debit Indicator                      | Ntry/CdtDbtInd                           | Indicates whether the amount is a credit or a debit amount                                                                                                                                                                                                                                                                                                    | String    | 4          |    1..1     |
| Status                                      | Ntry/Sts                                 | Status of an entry on the books of the account servicer: 'BOOK'                                                                                                                                                                                                                                                                                               | String    | 4          |    1..1     |
| Booking Date                                | Ntry/BookgDt/Dt                          | Date and when an entry is posted to an account on the account servicer's books                                                                                                                                                                                                                                                                                | Date      | n/a        |    1..1     |
| Value Date                                  | Ntry/ValDt/Dt                            | Date at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit entry                                                                                                                                                                                                  | Date      | n/a        |    1..1     |
| Account Servicer Reference                  | Ntry/AcctSvcrRef                         | Unique reference as assigned by the account servicing institution to unambiguously identify the entry                                                                                                                                                                                                                                                         | String    | 35         |    0..1     |
| Additional Entry Information                  | Ntry/AddtlNtryInf                         | Narrative                                                                                                                                                                                                                                                         | String    | 500         |    0..1     |
| Availability Date                  | Avlbty/Dt/ActIDt                         | Indicates when the booked amount of money will become available                                                                                                                                                                                                                                                         | Date    | n/a         |    1..1     |
| Availability Currency                  | Avlbty/Amt Ccy                         | Indication of the currency in which the account is held                                                                                                                                                                                                                                                         | String    | [A-Z][3,3]]         |    1..1     |
| Availability                                | Avlbty/Amt                               | Identifies the available amount                                                                                                                                                                                                                                                                                                                               | Decimal   | [18,5]     |    1..1     |
| Credit Debit Indicator                      | Availability/CdtDbtInd                         | Indicates whether the amount is a credit or a debit amount                                                                                                                                                                                                                                                                                                    | String    | 4          |    1..1     |
| Bank Transaction Code Domain Code           | Ntry/BkTxCd/Domn/Cd                      | Specifies the business area of the underlying transaction: 'PMNT'                                                                                                                                                                                                                                                                                             | String    | 4          |    1..1     |
| Bank Transaction Code Domain Family Code    | Ntry/BkTxCd/Domn/Fmly/Cd                 | Specifies the family and the sub-family of the bank transaction code: 'RCDT', 'ICDT'                                                                                                                                                                                                                                                                          | String    | 4          |    1..1     |
| Bank Transaction Code Domain Family Subcode | Ntry/BkTxCd/Domn/Fmly/SubFmlyCd          | Specifies the sub-product family within a specific family: 'DMCT', 'ADBT'                                                                                                                                                                                                                                                                                     | String    | 4          |    1..1     |
| Bank Transaction Proprietary Code | Ntry/BkTxCd/Prtry/Cd          | Proprietary bank transaction code to identify the underlying transaction: 'npp.msg.01-none','npp.msg.01-x2p1'                                                                                                                                                                                                                                                                                     | String    | 35          |    1..1     |
| Technical Input Channel Proprietary Code | Ntry/TechInptChanl/Prtry          | Channel used to technically input the instruction related to the entry                                                                                                                                                                                                                                                                                     | String    | 35          |    1..1     |
| **Entry Details**                           | Ntry/NtryDtls                            | Aggregate                                                                                                                                                                                                                                                                                                                                                     | n/a       | n/a        |    0..*     |
| **Entry Details Transaction Details Reference**                           | NtryDtls/TxDtls/Refs                            | Aggregate                                                                                                                                                                                                                                                                                                                                                     | n/a       | n/a        |    0..1     |
| Account Servicer Reference                  | Refs/AcctSvcrRef         | Unique reference, as assigned by the account servicing institution, to unambiguously identify the instruction. This field will be populated with a unique Id (guid) generated by GCIS to mark the unique transaction for the account.                                                                                                                                                                                                         | String    | 35         |    0..1     |
| Remittance Information Unstructured         | NtryDtls/TxDtls/RmtInf/Ustrd             | Remittance information of the transaction. Extended Narrative (Only for NPP Payments)                                                                                                                                                                                                                                                                                                                     | String    | 280        |    0..*     |


---

<a name="sample 1"></a>
### Sample

```
<?xml version="1.0" encoding="utf-8"?>
<Document
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns="urn:iso:std:iso:20022:tech:xsd:camt.053.001.06">
    <BkToCstmrStmt>
        <GrpHdr>
            <MsgId>6528c5aadd9d48cc981e5e4103f40144</MsgId>
            <CreDtTm>2023-12-15T10:00:54.5801227+11:00</CreDtTm>
        </GrpHdr>
        <Stmt>
            <Id>24730639e3c245ce945f37b326b05a2b</Id>
            <CreDtTm>2023-12-15T10:00:54.5801227+11:00</CreDtTm>
            <RptgSrc>
                <Prtry>V2P</Prtry>
            </RptgSrc>
            <Acct>
                <Id>
                    <Othr>
                        <Id>814766535</Id>
                    </Othr>
                </Id>
                <Ccy>AUD</Ccy>
                <Svcr>
                    <FinInstnId>
                        <BICFI>ANZBAU3MXXX</BICFI>
                    </FinInstnId>
                </Svcr>
            </Acct>
            <Intrst>
                <Tp>
                    <Prtry>INTBAL</Prtry>
                </Tp>
                <Rate>
                    <Tp>
                        <Othr>119913.09</Othr>
                    </Tp>
                </Rate>
            </Intrst>
            <Intrst>
                <Tp>
                    <Prtry>DBITACRD</Prtry>
                </Tp>
                <Rate>
                    <Tp>
                        <Othr>0</Othr>
                    </Tp>
                </Rate>
            </Intrst>
            <Intrst>
                <Tp>
                    <Prtry>CRDTACRD</Prtry>
                </Tp>
                <Rate>
                    <Tp>
                        <Othr>11.8</Othr>
                    </Tp>
                </Rate>
            </Intrst>
            <Intrst>
                <Tp>
                    <Prtry>DBIT</Prtry>
                </Tp>
                <Rate>
                    <Tp>
                        <Othr>0.25</Othr>
                    </Tp>
                </Rate>
            </Intrst>
            <Intrst>
                <Tp>
                    <Prtry>INTBAL</Prtry>
                </Tp>
                <Rate>
                    <Tp>
                        <Othr>126734.79</Othr>
                    </Tp>
                </Rate>
            </Intrst>
            <Intrst>
                <Tp>
                    <Prtry>DBITACRD</Prtry>
                </Tp>
                <Rate>
                    <Tp>
                        <Othr>0</Othr>
                    </Tp>
                </Rate>
            </Intrst>
            <Intrst>
                <Tp>
                    <Prtry>CRDTACRD</Prtry>
                </Tp>
                <Rate>
                    <Tp>
                        <Othr>10.38</Othr>
                    </Tp>
                </Rate>
            </Intrst>
            <Intrst>
                <Tp>
                    <Prtry>DBIT</Prtry>
                </Tp>
                <Rate>
                    <Tp>
                        <Othr>0</Othr>
                    </Tp>
                </Rate>
            </Intrst>
            <Intrst>
                <Tp>
                    <Prtry>CRDT</Prtry>
                </Tp>
                <Rate>
                    <Tp>
                        <Othr>0.5</Othr>
                    </Tp>
                </Rate>
            </Intrst>
            <Bal>
                <Tp>
                    <CdOrPrtry>
                        <Cd>CLBD</Cd>
                    </CdOrPrtry>
                </Tp>
                <Amt Ccy="AUD">119913.09</Amt>
                <CdtDbtInd>CRDT</CdtDbtInd>
                <Dt>
                    <Dt>2017-01-13</Dt>
                </Dt>
            </Bal>
            <Bal>
                <Tp>
                    <CdOrPrtry>
                        <Cd>INFO</Cd>
                    </CdOrPrtry>
                    <SubTp>
                        <Prtry>ODFT</Prtry>
                    </SubTp>
                </Tp>
                <Amt Ccy="AUD">0</Amt>
                <CdtDbtInd>CRDT</CdtDbtInd>
                <Dt>
                    <Dt>2017-01-13</Dt>
                </Dt>
            </Bal>
            <Bal>
                <Tp>
                    <CdOrPrtry>
                        <Cd>OPAV</Cd>
                    </CdOrPrtry>
                </Tp>
                <Amt Ccy="AUD">1.00</Amt>
                <CdtDbtInd>CRDT</CdtDbtInd>
                <Dt>
                    <Dt>2017-01-13</Dt>
                </Dt>
            </Bal>
            <Bal>
                <Tp>
                    <CdOrPrtry>
                        <Cd>OPBD</Cd>
                    </CdOrPrtry>
                </Tp>
                <Amt Ccy="AUD">127234.79</Amt>
                <CdtDbtInd>CRDT</CdtDbtInd>
                <Dt>
                    <Dt>2017-01-12</Dt>
                </Dt>
            </Bal>
            <Bal>
                <Tp>
                    <CdOrPrtry>
                        <Cd>CLBD</Cd>
                    </CdOrPrtry>
                </Tp>
                <Amt Ccy="AUD">126734.79</Amt>
                <CdtDbtInd>CRDT</CdtDbtInd>
                <Dt>
                    <Dt>2017-01-12</Dt>
                </Dt>
            </Bal>
            <Bal>
                <Tp>
                    <CdOrPrtry>
                        <Cd>INFO</Cd>
                    </CdOrPrtry>
                    <SubTp>
                        <Prtry>ODFT</Prtry>
                    </SubTp>
                </Tp>
                <Amt Ccy="AUD">0</Amt>
                <CdtDbtInd>CRDT</CdtDbtInd>
                <Dt>
                    <Dt>2017-01-12</Dt>
                </Dt>
            </Bal>
            <Bal>
                <Tp>
                    <CdOrPrtry>
                        <Cd>CLAV</Cd>
                    </CdOrPrtry>
                </Tp>
                <Amt Ccy="AUD">10075335.55</Amt>
                <CdtDbtInd>CRDT</CdtDbtInd>
                <Dt>
                    <Dt>2017-01-12</Dt>
                </Dt>
            </Bal>
            <TxsSummry>
                <TtlNtries>
                    <NbOfNtries>3</NbOfNtries>
                    <Sum>76.00</Sum>
                    <TtlNetNtry>
                        <Amt>76.00</Amt>
                        <CdtDbtInd>CRDT</CdtDbtInd>
                    </TtlNetNtry>
                </TtlNtries>
                <TtlCdtNtries>
                    <NbOfNtries>3</NbOfNtries>
                    <Sum>76.00</Sum>
                </TtlCdtNtries>
                <TtlDbtNtries>
                    <NbOfNtries>0</NbOfNtries>
                    <Sum>0</Sum>
                </TtlDbtNtries>
            </TxsSummry>
            <Ntry>
                <Amt Ccy="AUD">51.00</Amt>
                <CdtDbtInd>CRDT</CdtDbtInd>
                <Sts>BOOK</Sts>
                <BookgDt>
                    <Dt>2023-12-15</Dt>
                </BookgDt>
                <ValDt>
                    <Dt>2023-12-15</Dt>
                </ValDt>
                <BkTxCd>
                    <Domn>
                        <Cd>PMNT</Cd>
                        <Fmly>
                            <Cd>RCDT</Cd>
                            <SubFmlyCd>DMCT</SubFmlyCd>
                        </Fmly>
                    </Domn>
                    <Prtry>
                        <Cd>{"trancode":"714"}</Cd>
                    </Prtry>
                </BkTxCd>
                <NtryDtls>
                    <TxDtls>
                        <Amt Ccy="AUD">51.00</Amt>
                        <CdtDbtInd>CRDT</CdtDbtInd>
                        <RmtInf>
                            <Ustrd>Memo for transaction 20231215:2</Ustrd>
                        </RmtInf>
                    </TxDtls>
                </NtryDtls>
                <AddtlNtryInf>{"shortdesc":"","auxdom":"0000000000","trantype":"","swiftcd":"","exauxdom":"","bai":"714","rmt":"","fundscode":"F","narrative":"Memo for transaction 20231215:2","sourcecd":"","analyscode":"","subaccountname":"","ldgref":"","col":0}</AddtlNtryInf>
            </Ntry>
            <Ntry>
                <Amt Ccy="AUD">25.00</Amt>
                <CdtDbtInd>CRDT</CdtDbtInd>
                <Sts>BOOK</Sts>
                <BookgDt>
                    <Dt>2023-12-15</Dt>
                </BookgDt>
                <ValDt>
                    <Dt>2023-12-15</Dt>
                </ValDt>
                <BkTxCd>
                    <Domn>
                        <Cd>PMNT</Cd>
                        <Fmly>
                            <Cd>RCDT</Cd>
                            <SubFmlyCd>DMCT</SubFmlyCd>
                        </Fmly>
                    </Domn>
                    <Prtry>
                        <Cd>{"trancode":"857"}</Cd>
                    </Prtry>
                </BkTxCd>
                <NtryDtls>
                    <TxDtls>
                        <Amt Ccy="AUD">25.00</Amt>
                        <CdtDbtInd>CRDT</CdtDbtInd>
                        <RmtInf>
                            <Ustrd>Memo for transaction 20231215:1</Ustrd>
                        </RmtInf>
                    </TxDtls>
                </NtryDtls>
                <AddtlNtryInf>{"shortdesc":"","auxdom":"0000000000","trantype":"","swiftcd":"","exauxdom":"","bai":"857","rmt":"","fundscode":"F","narrative":"Memo for transaction 20231215:1","sourcecd":"","analyscode":"","subaccountname":"","ldgref":"","col":0}</AddtlNtryInf>
            </Ntry>
            <Ntry>
                <Amt Ccy="AUD">0.00</Amt>
                <CdtDbtInd>CRDT</CdtDbtInd>
                <Sts>BOOK</Sts>
                <BookgDt>
                    <Dt>2023-12-15</Dt>
                </BookgDt>
                <ValDt>
                    <Dt>2023-12-15</Dt>
                </ValDt>
                <BkTxCd>
                    <Domn>
                        <Cd>PMNT</Cd>
                        <Fmly>
                            <Cd>RCDT</Cd>
                            <SubFmlyCd>DMCT</SubFmlyCd>
                        </Fmly>
                    </Domn>
                    <Prtry>
                        <Cd>{"trancode":"000"}</Cd>
                    </Prtry>
                </BkTxCd>
                <NtryDtls>
                    <TxDtls>
                        <Amt Ccy="AUD">0.00</Amt>
                        <CdtDbtInd>CRDT</CdtDbtInd>
                        <RmtInf>
                            <Ustrd>Memo for transaction 20231215:0</Ustrd>
                        </RmtInf>
                    </TxDtls>
                </NtryDtls>
                <AddtlNtryInf>{"shortdesc":"","auxdom":"0000000000","trantype":"","swiftcd":"","exauxdom":"","bai":"000","rmt":"","fundscode":"F","narrative":"Memo for transaction 20231215:0","sourcecd":"","analyscode":"","subaccountname":"","ldgref":"","col":0}</AddtlNtryInf>
            </Ntry>
        </Stmt>
    </BkToCstmrStmt>
</Document>
```

---
