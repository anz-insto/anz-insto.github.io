---
title: Payments and transactions
layout: default
navigation: acmc
toc: true
---

## Payments and transactions
- Customers can request (via API) the payment of funds from a Client Trust Account to a destination account using either NPP, DE or RTGS. Once the payment is successfully processed, the Client Trust Account Balance is updated. The available balance is updated after acceptance of the payment. The ‘current balance’ will be updated on successful completion of the payment.
- If a Customer initiates a payment after the ANZ payment channel cut off time, the transaction will be automatically ‘warehoused’. The transaction amount will be deducted from the ‘available funds’ but remains as part of the ‘current balance’, from which the interest accrual is calculated. The payment will be completed on the next available business day.
- Where EFT or BPAY is not feasible (e.g. high value transactions, international funds), Customers can instruct their client to deposit the funds into an appropriate CLA instead. Once the funds are received, Customers can transfer the funds from the CLA to the appropriate Client Money Trust Account using a specific API function.
- Customers can request (via API) for a transfer of funds between 2 Client Trust Accounts, as long as both Trust Accounts are linked to the same Source Account.

### Aggregated Transactions
- Customers can specify (via API) an aggregated payment instruction consisting of:
    - Multiple Clizent Accounts, the respective payment amounts and narratives.
    - An aggregated total payment amount and a reference for the total.
    - Destination account (BSB and account number). Note: this can also be the account details of a CLA.
    - Based on a Customer’s instruction, ACMC will apply the specified payment transactions to the Client Accounts, aggregate them into a lump sum amount and pay it to the specified destination account. Once the lump sum payment is made, the client account balances will reflect the applicable debit amount.
- Customers can query on aggregated transactions, including transaction history of completed aggregated payment as well as the granular client account transactions.
- If there are any debit client account failures, the specific client account(s) will not be debited the requested amount. All other transactions will still be aggregated and paid to the specified destination.
    - ACMC will respond with the appropriate status, highlighting exception(s).
    - ACMC will capture exception account and transaction details which can be queried via API.
- A maximum of 1,000 client account transactions can be included in a single aggregation request. Transactions beyond the limit will need to be created as a separate request.
- This aggregated transaction functionality will form part of the settlement process. It will also simplify the processing and reconciliation of payments such as brokerage fees, advisor group fees and premium membership subscription fees, all processed as distinct aggregated payments.

### Disaggregated Transactions
- A disaggregated transaction is simply an aggregated transaction in reverse.
- Customers can specify a disaggregated transaction instruction consisting of:
a CLA, as the funding account.
a lump sum amount (and reference) to be transferred from CLA to source account for disaggregation.
multiple Client Accounts, the respective receipt amounts and narratives.
- Based on a Customer’s instruction, ACMC will transfer the lump sum amount from CLA to source account, before it’s disaggregated to the specific Client Accounts. Once complete, the client account balance is updated.
- Customers can query on disaggregated transactions, including transaction history of completed Client Account transactions as well as the original lump sum before it was disaggregated.
- If there are any credit client account failures, the specific client account(s) will not receive the requested amount. All other transactions will still be disaggregated.
    - ACMC will automatically aggregate unprocessed transaction/s and return a single amount back to CLA.
    - ACMC will respond with the appropriate status, highlighting exception/s.
    - ACMC will capture exception account & transaction details which can be queried via API.
- A maximum of 1,000 client account transactions can be included in a single disaggregation request. Transactions beyond the limit will need to be created as a separate request.
-De-aggregated transactions will likely form part of the settlement process.

## Encrypted Payment

### Request

```graphql
mutation {
  doEncrypted(i: {
    encryptedPayload: "ewogICJhY3Rpb24iIDogInBheW1lbnQtcmVxdWVzdCIsCiAgImN1c3RvbWVyLWxpbmtlZC1hY2NvdW50IiA6IHsKICAgICJpZCIgOiAiUTNWemRHOXRaWEpNYVc1clpXUkJZMk52ZFc1ME9qSmpZems0WkdSbE5qSmpOemN5TVRoallUQXdPV0l3TVRNM1lqaGpPRGs0TWpsaVpXUmtaamN3WXpBNU1qZzFNRGhsWlRNelptVTNabU01TnpZMVl6TT0iCiAgfSwKICAicmVxdWVzdGVyIiA6IHsKICAgICJhY2NvdW50IiA6IHsKICAgICAgImlkIiA6ICJRV05qYjNWdWREb3lNMk5rWTJJM04ySXhNelF3Tm1Kak0yUXhZbUZrTnpkaU9HSXlZVFEyTUdaa09UTXdOMlJrTjJFeFpUWTROR0l3TWpFNU1ETXlZV1F6TVRrMU5qVmsiCiAgICB9CiAgfSwKICAidmFsdWUtZGF0ZSIgOiAiMjAyMC0wNS0yNyIsCiAgImFtb3VudCIgOiB7CiAgICAidmFsdWUiIDogIjEwMC4wMCIsCiAgICAiY3VycmVuY3kiIDogIkFVRCIKICB9LAogICJyZWZlcmVuY2UiIDogIkNvbGluIE9uZSIKfQ=="
  })
  {commandId}
}
```
## NPP Payload

### Payload

```graphql
{
 "action": "abc123",
 "createdTimestamp": "2007-12-03T10:15:30Z",
 "id": "4",
 "inputJson": "xyz789",
 "invalid": [CommandError],
 "payment": Payment,
 "state": "SUBMITTED",
 "step": "xyz789",
 "user": "abc123",
 "userInfo": UserInfo,
 "userInput": MakeNppPaymentDetails
}
```

## RTGS Payload

### Payload

```graphql
{
  "action": "payment",
   "payment-method":"RTGS",
   "recipient":{
      "account-number":"987654322",
      "bank-code":"874502",
      "name":"Gresh UK"
   },
   "sender":{
      "account": {"id":"QWNjb3VudDpmNjQ1OGY5MmZlYzQ3MGI0YWU5NmZmZWZmZGIzMzdmMjcyYzhkNWNmY2I4YTBhNzg2NzRiYTRjMTUyYTEzMTYz"}
   },
   "amount":{
      "value":"11.00",
      "currency":"AUD"
   },
   "value-date":"2021-08-09",
   "narrative": "encrypted narrative",
   "reference":"RTGS One"
}
```

## Move to CLA Payload

### Payload

```graphql
{
  "action": "payment",
  "payment-method": "DE",
  "recipient": {
    "customer-linked-account": {
      "id": "Q3VzdG9tZXJMaW5rZWRBY2NvdW50OjlhZTM0MmU5ZDZiOWVkZTk0OTQ1ZDAxNWJlOWYwMTIyY2ZmMTViODA2ZTI5YTQ5MDIzNTUwODUwMWQwZTBiMDU="
    }
  },
  "sender": {
    "account": {
      "id": "QWNjb3VudDpmNjQ1OGY5MmZlYzQ3MGI0YWU5NmZmZWZmZGIzMzdmMjcyYzhkNWNmY2I4YTBhNzg2NzRiYTRjMTUyYTEzMTYz"
    }
  },
  "amount": {
    "value": "11.00",
    "currency": "AUD"
  },
  "value-date": "2021-08-09",
  "narrative": "encrypted narrative",
  "reference": "DE One"
}
```

## CLA Payment Payload

### Payload

```graphql
{
  "action" : "payment-request",
  "customer-linked-account" : {
    "id" : "Q3VzdG9tZXJMaW5rZWRBY2NvdW50OjJjYzk4ZGRlNjJjNzcyMThjYTAwOWIwMTM3YjhjODk4MjliZWRkZjcwYzA5Mjg1MDhlZTMzZmU3ZmM5NzY1YzM="
  },
  "requester" : {
    "account" : {
      "id" : "QWNjb3VudDoyM2NkY2I3N2IxMzQwNmJjM2QxYmFkNzdiOGIyYTQ2MGZkOTMwN2RkN2ExZTY4NGIwMjE5MDMyYWQzMTk1NjVk"
    }
  },
  "value-date" : "2020-05-27",
  "amount" : {
    "value" : "100.00",
    "currency" : "AUD"
  },
  "reference" : "Enc CLA Payment Request"
}
```

## Transfer Payload

### Payload

```graphql
{
    "action": "internal-transfer",
    "from-account-number": "506912473",
    "to-account-number": "992671109",
    "pool": {
      "id": "UG9vbDo3MTliODg2MDcxODczYThmZGJhMDY4NmYwOTY1ZTg0MWVkZmY1MjY4Y2FiZDYyMjNhYTg5NDFhOTg0OTIzZTUx"
    },
    "amount": {
        "value": "100.00",
        "currency": "AUD"
    },
    "value-date": "2021-08-06",
    "payer-reference": "Reference for account being paid from",
    "payee-reference": "Reference for account being paid to",
    "customer-transaction-reference": "Reference One"
}
```

## Aggregate Payment to CLA Encrypted Payload

### Payload

```graphql
[{
    "action": "aggregate-payment",
    "reference": "Ref One",
    "customer-transaction-reference": "Cust Ref One",
    "destination": {
        "customer-linked-account": {
            "id": "Q3VzdG9tZXJMaW5rZWRBY2NvdW50OjVkODg3NjFmYzk3NzMxMWJlM2YzNDcxYmNkNzZmNzU5YmUxNGMzNzU4OGRjMTgzMTIwYjI4OWU3NzQ1N2Y1NmY="
        }
    },
    "count": 2,
    "total": {
        "value": "20.00",
        "currency": "AUD"
    },
    "debit-instructions": \[
        {
            "tracing-id": "Trace Id 1",
            "account": {
                "id": "QWNjb3VudDo1ZGEzYzJhZjMwZDQ0YjhlOGUxNGE3NWE4OTg4NTc2ZTc1NzRhYjNkMGY2Mjc3MmUzNmNmNDQ1ZTExZDE5N2Fi"
            },
            "narrative": "Narrative Text",
            "amount": {
                "value": "10.00",
                "currency": "AUD"
            }
        },
        {
            "tracing-id": "Trace Id 2",
            "account": {
                "id": "QWNjb3VudDo0ZWZkNTgxZmNhZjBlYjNkNzE4NGRjZGRkYjFkNjhmM2ZmMDVmMmE0MGIwNDRmM2RiNDM0ZTdlYjE1YjJkZjQw"
            },
            "narrative": "Narrative Text",
            "amount": {
                "value": "10.00",
                "currency": "AUD"
            }
        }
    \]
}](_arrow.aggregate_payment_to_CLA_encrypted_payload.md)
```

## Aggregate Payment to DE Encrypted Payload

### Payload

```graphql
{
  "action": "aggregate-payment",
  "reference": "Ref One",
  "customer-transaction-reference": "Cust Ref One",
  "external-account": {
    "account-number": "43634364",
    "bank-code": "104030",
    "name": "Test Account",
    "payment-type": "DE"
  },
  "count": 2,
  "total-amount": {
    "credit-debit": "DEBIT",
    "value": "20.00",
    "currency": "AUD"
  },
  "instructions": [
    {
      "tracing-id": "Trace Id 1",
      "account": {
        "id": "QWNjb3VudDo1ZGEzYzJhZjMwZDQ0YjhlOGUxNGE3NWE4OTg4NTc2ZTc1NzRhYjNkMGY2Mjc3MmUzNmNmNDQ1ZTExZDE5N2Fi"
      },
      "narrative": "Narrative Text",
      "amount": {
        "credit-debit": "DEBIT",
        "value": "10.00",
        "currency": "AUD"
      }
    },
    {
      "tracing-id": "Trace Id 2",
      "account": {
        "id": "QWNjb3VudDo0ZWZkNTgxZmNhZjBlYjNkNzE4NGRjZGRkYjFkNjhmM2ZmMDVmMmE0MGIwNDRmM2RiNDM0ZTdlYjE1YjJkZjQw"
      },
      "narrative": "Narrative Text",
      "amount": {
        "credit-debit": "DEBIT",
        "value": "10.00",
        "currency": "AUD"
      }
    }
  ]
}
```

## Aggregate Payment to RTGS Encrypted Payload

### Payload

```graphql
{
  "action": "aggregate-payment",
  "reference": "Ref One",
  "customer-transaction-reference": "Cust Ref One",
  "external-account": {
    "account-number": "43634364",
    "bank-code": "104030",
    "name": "Test Account",
    "payment-type": "RTGS"
  },
  "count": 2,
  "total-amount": {
    "credit-debit": "DEBIT",
    "value": "20.00",
    "currency": "AUD"
  },
  "instructions": [
    {
      "tracing-id": "Trace Id 1",
      "account": {
        "id": "QWNjb3VudDo1ZGEzYzJhZjMwZDQ0YjhlOGUxNGE3NWE4OTg4NTc2ZTc1NzRhYjNkMGY2Mjc3MmUzNmNmNDQ1ZTExZDE5N2Fi"
      },
      "narrative": "Narrative Text",
      "amount": {
        "credit-debit": "DEBIT",
        "value": "10.00",
        "currency": "AUD"
      }
    },
    {
      "tracing-id": "Trace Id 2",
      "account": {
        "id": "QWNjb3VudDo0ZWZkNTgxZmNhZjBlYjNkNzE4NGRjZGRkYjFkNjhmM2ZmMDVmMmE0MGIwNDRmM2RiNDM0ZTdlYjE1YjJkZjQw"
      },
      "narrative": "Narrative Text",
      "amount": {      
        "credit-debit": "DEBIT",
        "value": "10.00",
        "currency": "AUD"
      }
    }
  ]
}
```

## Aggregate Payment from CLA Encrypted Payload

### Request

```graphql
{
  "action": "aggregate-payment-request",
  "reference": "Ref One",
  "customer-transaction-reference": "Cust Ref One",
  "external-account": {
    "customer-linked-account": {
      "id": "Q3VzdG9tZXJMaW5rZWRBY2NvdW50OjlhZTM0MmU5ZDZiOWVkZTk0OTQ1ZDAxNWJlOWYwMTIyY2ZmMTViODA2ZTI5YTQ5MDIzNTUwODUwMWQwZTBiMDU="
    }
  },
  "count": 2,
  "total-amount": {
    "credit-debit": "CREDIT",
    "value": "3.00",
    "currency": "AUD"
  },
  "instructions": [
    {
      "tracing-id": "Trace Id 1",
      "account": {
        "id": "QWNjb3VudDpmNjQ1OGY5MmZlYzQ3MGI0YWU5NmZmZWZmZGIzMzdmMjcyYzhkNWNmY2I4YTBhNzg2NzRiYTRjMTUyYTEzMTYz"
      },
      "narrative": "Narrative Text",
      "amount": {
        "credit-debit": "CREDIT",
        "value": "2.00",
        "currency": "AUD"
      }
    },
    {
      "tracing-id": "Trace Id 2",
      "account": {
        "id": "QWNjb3VudDo3NTZhY2NlYWI4Y2Q4OTU2NWE2OTQyMGJhMmM5ZmYyOWU3YjJmYWRlYmZiOTk3MzkxMGYwYTI5MTI4YWE5MDNl"
      },
      "narrative": "Narrative Text",
      "amount": {
        "credit-debit": "CREDIT",
        "value": "1.00",
        "currency": "AUD"
      }
    }
  ]
}
```

## General Command Status Query for Encrypted Payments

### Request

```graphql
QueryCommand($commandId: ID!) 
{
  __typename
  node(id: $commandId) {
    ... on Command {
      __typename
      CMDID: id
      action
      createdTimestamp
      invalid {field, reason}
      state
      step
    }
    ... on EncryptedCommand {
      __typename
      CMDID: id
      action
      createdTimestamp
      invalid {field, reason}
      state
      step
      unencryptedCommand {
        __typename
      }
    }
  }
}
fragment paymentCommand on MakePaymentCommand {
  action
  createdTimestamp
  invalid {field, reason}
  state
  step
  user
  payment {
    __typename
    BPID: id
    status
    reason
    paymentMethod
    createdTimestamp
    amount {
      creditDebit
      currency
      value
    }
    customerTransactionReference
    transactions {
      edges {
        node {
          state
          valueDate
          transactionType
          entries {
            edges {
              node {
                TxnEnId: id
                account {
                  ACCID: id
                  accountNumber
                  name
                  internal
                }
              }
            }
          }
        }
      }
    }
  }
}
fragment paymentRequestCommand on PaymentRequestCommand {
  action
  createdTimestamp
  invalid {field, reason}
  state
  step
  user
  payment: paymentRequest {
    __typename
    BPID: id
    status
    reason
    paymentMethod
    amount {
      creditDebit
      currency
      value
    }
    customerTransactionReference
    transactions {
      edges {
        node {
          state
          valueDate
          transactionType
          entries {
            edges {
              node {
                TxnEnId: id
                account {
                  ACCID: id
                  accountNumber
                  name
                  internal
                }
              }
            }
          }
        }
      }
    }
  }
}
fragment aggregatePaymentCommand on AggregatePaymentCommand {
  action
  createdTimestamp
  state
  step
  invalid {field, reason}
  aggregatePayment {
    BPID: id
    state
    createdTimestamp
    totalCount: count
    successfulCount
    failedCount
    paymentState
    paymentRequestState
    reference
    totalAmount {value, creditDebit}
    totalAmountSuccessful {value}
    totalAmountFailed {value}
    customerTransactionReference
    instructions {
      edges {
        node {
          INSID: id
          state
          failure
          tracingId
          account {
            ACCID: id
            accountNumber
          }
          amount {
            creditDebit
            currency
            value
          }
          transactionEntry {
            TxnEnId: id
            creditDebit
          }
        }
      }
    }
  }
}
fragment transferCommand on InternalTransferCommand {
  action
  createdTimestamp
  invalid {field, reason}
  state
  step
  user
  internalTransfer {
    __typename
    BPID: id
    createdTimestamp
    amount {
      creditDebit
      currency
      value
    }
    customerTransactionReference
    transactions {
      edges {
        node {
          state
          valueDate
          transactionType
          entries {
            edges {
              node {
                TxnEnId: id
                account {
                  ACCID: id
                  accountNumber
                  name
                  internal
                }
                creditDebit
              }
            }
          }
        }
      }
    }
  }
}
```

### Query Variables

```graphql
Query Variables :
{
    "commandId": "Q29tbWFuZDo3MzFjMDE1Ny02MDYzLTQwYjAtOWY0MC1hMThiNjg5YWIxNDE="
}
```

### Response

```json
{
    "data": {
        "node": {
            "__typename": "EncryptedCommand",
            "CMDID": "Q29tbWFuZDo3MzFjMDE1Ny02MDYzLTQwYjAtOWY0MC1hMThiNjg5YWIxNDE=",
            "action": "DO-ENCRYPTED-COMMAND",
            "createdTimestamp": "2022-07-13T00:57:44.485Z",
            "invalid": [],
            "state": "SUCCESSFUL",
            "step": "END",
            "unencryptedCommand": {
                "__typename": "AggregatePaymentCommand",
                "action": "AGGREGATE-PAYMENT-EXECUTE",
                "createdTimestamp": "2022-07-13T00:57:47.523Z",
                "state": "SUCCESSFUL",
                "step": "END",
                "invalid": [],
                "aggregatePayment": {
                    "BPID": "QWdncmVnYXRlUGF5bWVudDo2MjJiNjdiNTU2ZGIwZjZjODdjZGNkMGVlYjEyNDI0ODFkMzc1NWIwMmFiNTY3ZjZmYTNlOGQzZWUzZmFkYThk",
                    "state": "COMPLETE",
                    "createdTimestamp": "2022-07-13T00:57:49.952Z",
                    "totalCount": 2,
                    "successfulCount": 1,
                    "failedCount": 0,
                    "paymentState": "COMPLETED",
                    "paymentRequestState": null,
                    "reference": "AggDERefExtAcc01",
                    "totalAmount": {
                        "value": "22.03",
                        "creditDebit": "DEBIT"
                    },
                    "totalAmountSuccessful": {
                        "value": "0.00"
                    },
                    "totalAmountFailed": {
                        "value": "22.03"
                    },
                    "customerTransactionReference": "PADEAggCustTxnRef01",
                    "instructions": {
                        "edges": [
                            {
                                "node": {
                                    "INSID": "SW5zdHJ1Y3Rpb246Yjk2N2E4ZmNhY2YyN2VmZTVhYjYxMmY1MDYyOGVmNmI4NGU1NWNiYjkzZTFmMzdjNzk1ODI4ODFjZGQ1ODRlOQ==",
                                    "state": "PROCESSING",
                                    "failure": null,
                                    "tracingId": "CustTraceIdForClientInd01Txn01",
                                    "account": {
                                        "ACCID": "QWNjb3VudDo5YjQyNjIyM2M0YjNjNDFkMTAzZDAwZjVjYTkyNTEwYTFmMzRiYTk4NzI4NzU1NGQzOWRmOWFiNDQ5OWNkNDMz",
                                        "accountNumber": "173350203"
                                    },
                                    "amount": {
                                        "creditDebit": "DEBIT",
                                        "currency": "AUD",
                                        "value": "11.01"
                                    },
                                    "transactionEntry": {
                                        "TxnEnId": "U3VibGVkZ2VyVHJhbnNhY3Rpb246Yzk3Y2JkOTg3OWNlZmIxODM4NDFkZmUwNmQzOGRjMjYyMTc3YWQzZjdiZGYzODI3MjcxMDJmM2I0MTAyMWE5MA==",
                                        "creditDebit": "DEBIT"
                                    }
                                }
                            },
                            {
                                "node": {
                                    "INSID": "SW5zdHJ1Y3Rpb246NmVmZGYwNmRlNzRjMmRlMWIxMzNjYzA3MDljZTM0OTg2ZGIzNGViMjM3ZTk5ODAyZDAwOWJmZmMyNjlmZWI2Mg==",
                                    "state": "SUCCEEDED",
                                    "failure": null,
                                    "tracingId": "CustTraceIdForClientSlushTxn01",
                                    "account": {
                                        "ACCID": "QWNjb3VudDpjMjRmY2E2N2Y4Y2M2Y2E4NjdmZTRkZDk3OGExZTIwNmJjNmZhNzk0NzJiNzMwYjU4MGE0NTVhNmNiYjFhODQx",
                                        "accountNumber": "173350205"
                                    },
                                    "amount": {
                                        "creditDebit": "DEBIT",
                                        "currency": "AUD",
                                        "value": "11.02"
                                    },
                                    "transactionEntry": {
                                        "TxnEnId": "U3VibGVkZ2VyVHJhbnNhY3Rpb246N2NmMTc1MWU4N2RhNTFlOWU0MDVlNDM5MzQ1ZGMyOTM4NWM0ZTUzMTdmZWE3ZGE5YjRjNGI3ZDY1ODc3N2U5Mg==",
                                        "creditDebit": "DEBIT"
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        }
    }
}
```

## Aggregate Payment Summary by Reference

### Request

Refer to: bank for schema definition.

```graphql
{
  bank {
    customers {
      edges {
        node {
          aggregateTransactions (filter: {referenceContains: "query build"}) {
            edges {
              node {
                ... on AggregatePayment{
                id
                count

                reference
                successfulCount
                failedCount
                totalAmountFailed{value}
                totalAmountSuccessful{value}
                payment{status}
                paymentState
                totalAmount {
                  creditDebit
                  value
                  currency
                }
              }
            }
          }
        }
      }
    }
  }
  }}
```


### Response

```json
{
    "data": {
        "bank": {
            "customers": {
                "edges": [
                    {
                        "node": {
                            "aggregateTransactions": {
                                "edges": [
                                    {
                                        "node": {
                                            "id": "NmEwY2FlZTctMmQ2My00Y2EyLWIwMTQtYjU2NzUyYjMxNmVk",
                                            "count": -99,
                                            "reference": "Sample Text",
                                            "successfulCount": 80,
                                            "failedCount": -33,
                                            "totalAmountFailed": {
                                                "value": "4919.04"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "1171.97"
                                            },
                                            "payment": {
                                                "status": "ACCEPTED"
                                            },
                                            "paymentState": "REJECTED",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "7565.05",
                                                "currency": "AUD"
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "id": "MjJjNzIxY2ItZWIxMC00MWNhLWJiZGQtY2UzMTFmNzFiN2E1",
                                            "count": -13,
                                            "reference": "Sample Text",
                                            "successfulCount": -66,
                                            "failedCount": -66,
                                            "totalAmountFailed": {
                                                "value": "3955.61"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "1290.77"
                                            },
                                            "payment": {
                                                "status": "ACCEPTED"
                                            },
                                            "paymentState": "COMPLETED_WITH_ERRORS",
                                            "totalAmount": {
                                                "creditDebit": "DEBIT",
                                                "value": "1624.16",
                                                "currency": "AUD"
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "node": {
                            "aggregateTransactions": {
                                "edges": [
                                    {
                                        "node": {
                                            "id": "MDgyYzE2NDItN2RmNS00ZjE1LWFjYmQtZTEwYzlhODg0NWY5",
                                            "count": -52,
                                            "reference": "Sample Text",
                                            "successfulCount": -3,
                                            "failedCount": -1,
                                            "totalAmountFailed": {
                                                "value": "1002.19"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "5275.67"
                                            },
                                            "payment": {
                                                "status": "COMPLETE"
                                            },
                                            "paymentState": "COMPLETED_WITH_ERRORS",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "1155.39",
                                                "currency": "AUD"
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "id": "MmJmYWMxNTktOGY3YS00ZDk0LWFjYTEtZjFmOTUxMmI2YWYy",
                                            "count": 5,
                                            "reference": "Sample Text",
                                            "successfulCount": 29,
                                            "failedCount": -16,
                                            "totalAmountFailed": {
                                                "value": "5771.46"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "9046.32"
                                            },
                                            "payment": {
                                                "status": "COMPLETE"
                                            },
                                            "paymentState": "RECEIVED",
                                            "totalAmount": {
                                                "creditDebit": "DEBIT",
                                                "value": "3462.76",
                                                "currency": "AUD"
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
}
```

## Aggregate Payment Details by Reference

### Request

Refer to: bank for schema definition.

```graphql
{
  bank {
    customers {
      edges {
        node {
          aggregateTransactions (filter: {referenceContains: "query build"}) {
            edges {
              node {
                ... on AggregatePayment{
                id
                count

                reference
                successfulCount
                failedCount
                totalAmountFailed{value}
                totalAmountSuccessful{value}
                payment{status}
                paymentState
                totalAmount {
                  creditDebit
                  value
                  currency
                }
               instructions(filter: {state: SUCCEEDED} )  {
                  edges {
                    node {
              #id
                    narrative
                    amount{value}
                    account {
                      accountNumber
                    }
                    state
                    failure
                    tracingId
                  }
                 }
                }

              }
            }
          }
        }
      }
    }
  }
  }}
```

### Response

```graphql
{
    "data": {
        "bank": {
            "customers": {
                "edges": [
                    {
                        "node": {
                            "aggregateTransactions": {
                                "edges": [
                                    {
                                        "node": {
                                            "id": "ZGVkNjUxNmUtOTc0OC00NWI2LWI1NWQtNTAyOTAzYTdlZDI0",
                                            "count": -2,
                                            "reference": "Reference Text",
                                            "successfulCount": 21,
                                            "failedCount": -89,
                                            "totalAmountFailed": {
                                                "value": "5657.84"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "6308.06"
                                            },
                                            "payment": {
                                                "status": "COMPLETE"
                                            },
                                            "paymentState": "COMPLETED_WITH_ERRORS",
                                            "totalAmount": {
                                                "creditDebit": "DEBIT",
                                                "value": "89.25",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "606.14"
                                                            },
                                                            "account": {
                                                                "accountNumber": "96188384"
                                                            },
                                                            "state": "PROCESSING",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "15.07"
                                                            },
                                                            "account": {
                                                                "accountNumber": "12871932"
                                                            },
                                                            "state": "SUCCEEDED",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "id": "MmQxMWI2MjAtZmY3Yy00YmRjLWFiMDktNmJhOGM5N2JjMDlj",
                                            "count": -43,
                                            "reference": "Reference Text",
                                            "successfulCount": -42,
                                            "failedCount": 76,
                                            "totalAmountFailed": {
                                                "value": "3762.09"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "4374.93"
                                            },
                                            "payment": {
                                                "status": "PAYMENT STATUS MESSAGE"
                                            },
                                            "paymentState": "COMPLETED_WITH_ERRORS",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "630.79",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "5732.92"
                                                            },
                                                            "account": {
                                                                "accountNumber": "68126965"
                                                            },
                                                            "state": "FAILED",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "5159.44"
                                                            },
                                                            "account": {
                                                                "accountNumber": "22755843"
                                                            },
                                                            "state": "PROCESSING",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "node": {
                            "aggregateTransactions": {
                                "edges": [
                                    {
                                        "node": {
                                            "id": "NmYzMTNmYjItZGQ3ZC00M2FkLTliMTctZTk3MGJkMGNhZDM5",
                                            "count": 50,
                                            "reference": "Reference Text",
                                            "successfulCount": 14,
                                            "failedCount": 84,
                                            "totalAmountFailed": {
                                                "value": "9562.53"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "3993.63"
                                            },
                                            "payment": {
                                                "status": "COMPLETE"
                                            },
                                            "paymentState": "COMPLETED",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "6016.65",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "8796.31"
                                                            },
                                                            "account": {
                                                                "accountNumber": "13523935"
                                                            },
                                                            "state": "FAILED",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "6341.69"
                                                            },
                                                            "account": {
                                                                "accountNumber": "41261060"
                                                            },
                                                            "state": "SUCCEEDED",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "id": "MjllMzQzZmItMWY5Ny00NGQ4LWE3ODUtYzI4NDBlNzBhMDMx",
                                            "count": -81,
                                            "reference": "Hello World",
                                            "successfulCount": -12,
                                            "failedCount": -88,
                                            "totalAmountFailed": {
                                                "value": "992.68"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "2738.98"
                                            },
                                            "payment": {
                                                "status": "COMPLETE"
                                            },
                                            "paymentState": "SUBMITTED",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "6169.53",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "7044.71"
                                                            },
                                                            "account": {
                                                                "accountNumber": "47260015"
                                                            },
                                                            "state": "SUCCEEDED",
                                                            "failure": [
                                                                "Hello World",
                                                                "Hello World"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "6454.57"
                                                            },
                                                            "account": {
                                                                "accountNumber": "24570958"
                                                            },
                                                            "state": "FAILED",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
}
```

## Aggregate Payment Details by Reference and instruction traceid

### Request

Refer to: bank for schema definition.

```graphql
{
  bank {
    customers {
      edges {
        node {
          aggregateTransactions (filter: {referenceContains: "query build"}) {
            edges {
              node {
                ... on AggregatePayment{
                id
                count

                reference
                successfulCount
                failedCount
                totalAmountFailed{value}
                totalAmountSuccessful{value}
                payment{status,bookingDate,valueDate,createdTimestamp}
                paymentState
                totalAmount {
                  creditDebit
                  value
                  currency
                }
               instructions(filter: {tracingIdContains:"trace 3", state: SUCCEEDED} )  {
                  edges {
                    node {
              #id
                    narrative
                    amount{value}
                    account {
                      accountNumber
                    }
                    state
                    failure
                    tracingId
                  }
                 }
                }

              }
            }
          }
        }
      }
    }
  }
  }}
```

### Response

```graphql
{
    "data": {
        "bank": {
            "customers": {
                "edges": [
                    {
                        "node": {
                            "aggregateTransactions": {
                                "edges": [
                                    {
                                        "node": {
                                            "id": "ZGVkNjUxNmUtOTc0OC00NWI2LWI1NWQtNTAyOTAzYTdlZDI0",
                                            "count": -2,
                                            "reference": "Reference Text",
                                            "successfulCount": 21,
                                            "failedCount": -89,
                                            "totalAmountFailed": {
                                                "value": "9493.34"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "2266.55"
                                            },
                                            "payment": {
                                                "status": "COMPLETE",
                                                "bookingDate": "2023-07-22",
                                                "valueDate": "2023-09-17",
                                                "createdTimestamp": "2024-06-19T18:42:24.199Z"
                                            },
                                            "paymentState": "COMPLETED_WITH_ERRORS",
                                            "totalAmount": {
                                                "creditDebit": "DEBIT",
                                                "value": "8999.89",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "590.85"
                                                            },
                                                            "account": {
                                                                "accountNumber": "66987361"
                                                            },
                                                            "state": "PROCESSING",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "6737.80"
                                                            },
                                                            "account": {
                                                                "accountNumber": "16673146"
                                                            },
                                                            "state": "PROCESSING",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "id": "MmQxMWI2MjAtZmY3Yy00YmRjLWFiMDktNmJhOGM5N2JjMDlj",
                                            "count": -43,
                                            "reference": "Sample Text",
                                            "successfulCount": -42,
                                            "failedCount": 76,
                                            "totalAmountFailed": {
                                                "value": "5196.84"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "4744.58"
                                            },
                                            "payment": {
                                                "status": "COMPLETE",
                                                "bookingDate": "2024-06-02",
                                                "valueDate": "2024-05-20",
                                                "createdTimestamp": "2024-06-19T19:10:55.482Z"
                                            },
                                            "paymentState": "COMPLETED_WITH_ERRORS",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "644.56",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "2782.20"
                                                            },
                                                            "account": {
                                                                "accountNumber": "85733224"
                                                            },
                                                            "state": "SUCCEEDED",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "8498.92"
                                                            },
                                                            "account": {
                                                                "accountNumber": "03671825"
                                                            },
                                                            "state": "SUCCEEDED",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "node": {
                            "aggregateTransactions": {
                                "edges": [
                                    {
                                        "node": {
                                            "id": "NmYzMTNmYjItZGQ3ZC00M2FkLTliMTctZTk3MGJkMGNhZDM5",
                                            "count": 50,
                                            "reference": "Sample Text",
                                            "successfulCount": 14,
                                            "failedCount": 84,
                                            "totalAmountFailed": {
                                                "value": "5476.47"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "9007.17"
                                            },
                                            "payment": {
                                                "status": "COMPLETE",
                                                "bookingDate": "2023-08-12",
                                                "valueDate": "2024-02-01",
                                                "createdTimestamp": "2024-06-19T16:23:14.896Z"
                                            },
                                            "paymentState": "COMPLETED",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "2292.61",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "3306.24"
                                                            },
                                                            "account": {
                                                                "accountNumber": "04328297"
                                                            },
                                                            "state": "FAILED",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "8204.77"
                                                            },
                                                            "account": {
                                                                "accountNumber": "80578425"
                                                            },
                                                            "state": "FAILED",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "id": "MjllMzQzZmItMWY5Ny00NGQ4LWE3ODUtYzI4NDBlNzBhMDMx",
                                            "count": -81,
                                            "reference": "Reference Text",
                                            "successfulCount": -12,
                                            "failedCount": -88,
                                            "totalAmountFailed": {
                                                "value": "7057.05"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "7033.72"
                                            },
                                            "payment": {
                                                "status": "COMPLETE",
                                                "bookingDate": "2023-12-20",
                                                "valueDate": "2023-08-20",
                                                "createdTimestamp": "2024-06-19T13:16:47.944Z"
                                            },
                                            "paymentState": "SUBMITTED",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "3637.13",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "7466.66"
                                                            },
                                                            "account": {
                                                                "accountNumber": "62501154"
                                                            },
                                                            "state": "SUCCEEDED",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "6522.12"
                                                            },
                                                            "account": {
                                                                "accountNumber": "83332890"
                                                            },
                                                            "state": "PROCESSING",
                                                            "failure": [
                                                                "Failure Text 1",
                                                                "Failure Text 2"
                                                            ],
                                                            "tracingId": "Tracing ID"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
}
```

## Aggregate Receipts by Reference

### Request

Refer to: bank for schema definition.

```graphql
{
  bank {
    customers {
      edges {
        node {
          aggregateTransactions (filter: {referenceContains: "OPY Div"}) {
            edges {
              node {
      ... on AggregatePayment{
        id
        count
        paymentRequestState
        reference
        successfulCount
        failedCount
        paymentRequest {
          reference
          status
          reason
          id

        }
        totalAmount  {
                value
              }
        totalAmountFailed  {
                value
              }
        totalAmountSuccessful {
          value
        }
              }
            }
          }
        }
      }
    }
  }
  }}
```


### Result
```json
{
  "data": {
    "bank": {
      "customers": {
        "edges": [
          {
            "node": {
              "aggregateTransactions": {
                "edges": [
                  {
                    "node": {
                      "id": "QWdncmVnYXRlUGF5bWVudFJlcXVlc3Q6MWE3NTNlNzE3ODMzMzNlN2FlNmUwYzczZjk3MjA3YmI0NjcxNTZiZjE5MGQ0MzJhYzZmYWVkNjdmNTBmNTA0Nw==",
                      "count": 2,
                      "paymentRequestState": "PAYMENT_RECEIVED",
                      "reference": "OPY Div Dist - H1",
                      "successfulCount": 2,
                      "failedCount": 0,
                      "paymentRequest": {
                        "reference": null,
                        "status": "COMPLETED",
                        "reason": "Completed",
                        "id": "UGF5bWVudFJlcXVlc3Q6ZTA4MjY2NDEzNjY3NjRkYWZjYWQ2MWY3YzRmZWRjODcwZmY4YWY5MGNmYmEwNjI5YTRlMzY3OTk1ZWM4NDE5Mg=="
                      },
                      "totalAmount": {
                        "value": "100.00"
                      },
                      "totalAmountFailed": {
                        "value": "0.00"
                      },
                      "totalAmountSuccessful": {
                        "value": "100.00"
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
}
```

## Aggregate Receipts by Reference with Details

### Request

Refer to: bank for schema definition.

```graphql
{
  bank {
    customers {
      edges {
        node {
          aggregateTransactions (filter: {referenceContains: "OPY Div"}) {
            edges {
              node {
      ... on AggregatePaymentRequest{
        id
        count
        paymentRequestState
        reference
        successfulCount
        failedCount
        paymentRequest {
          reference
          status
          reason
          id

        }
        totalAmount  {value}
        totalAmountFailed  {value}
        totalAmountSuccessful {value}
        instructions(filter: {state: SUCCEEDED}){
                  edges {
                    node {
                    narrative
                    amount{value}
                    account {accountNumber}
                    state
                    failure
                    tracingId
                  }
                 }
                }
              }
            }
          }
        }
      }
    }
  }
  }}
```

### Reponse

```json
{
  "data": {
    "bank": {
      "customers": {
        "edges": [
          {
            "node": {
              "aggregateTransactions": {
                "edges": [
                  {
                    "node": {
                      "id": "QWdncmVnYXRlUGF5bWVudFJlcXVlc3Q6MWE3NTNlNzE3ODMzMzNlN2FlNmUwYzczZjk3MjA3YmI0NjcxNTZiZjE5MGQ0MzJhYzZmYWVkNjdmNTBmNTA0Nw==",
                      "count": 2,
                      "paymentRequestState": "PAYMENT_RECEIVED",
                      "reference": "OPY Div Dist - H1",
                      "successfulCount": 2,
                      "failedCount": 0,
                      "paymentRequest": {
                        "reference": null,
                        "status": "COMPLETED",
                        "reason": "Completed",
                        "id": "UGF5bWVudFJlcXVlc3Q6ZTA4MjY2NDEzNjY3NjRkYWZjYWQ2MWY3YzRmZWRjODcwZmY4YWY5MGNmYmEwNjI5YTRlMzY3OTk1ZWM4NDE5Mg=="
                      },
                      "totalAmount": {
                        "value": "100.00"
                      },
                      "totalAmountFailed": {
                        "value": "0.00"
                      },
                      "totalAmountSuccessful": {
                        "value": "100.00"
                      },
                      "instructions": {
                        "edges": [
                          {
                            "node": {
                              "narrative": " No WHT OPY Dividend H1",
                              "amount": {
                                "value": "60.00"
                              },
                              "account": {
                                "accountNumber": "000001007"
                              },
                              "state": "SUCCEEDED",
                              "failure": null,
                              "tracingId": "No WHT OPY TRACE ID"
                            }
                          },
                          {
                            "node": {
                              "narrative": "WHT OPY Dividend H1",
                              "amount": {
                                "value": "40.00"
                              },
                              "account": {
                                "accountNumber": "000001008"
                              },
                              "state": "SUCCEEDED",
                              "failure": null,
                              "tracingId": "WHT OPY TRACE ID"
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
}
```

## Aggregate Receipts by Reference with traceid with Details

### Request

Refer to: bank for schema definition.

```graphql
{
  bank {
    customers {
      edges {
        node {
          aggregateTransactions (filter: {referenceContains: "OPY Div"}) {
            edges {
              node {
      ... on AggregatePayment{
        id
        count
        paymentRequestState
        reference
        successfulCount
        failedCount
        paymentRequest {
          reference
          status
          reason
          id
 
        }
        totalAmount  {value}
        totalAmountFailed  {value}
        totalAmountSuccessful {value}
        instructions(filter: {tracingIdContains:"No"}){
                  edges {
                    node {
                    narrative
                    amount{value}
                    account {accountNumber}
                    state
                    failure
                    tracingId
                  }
                 }
                }
              }
            }
          }
        }
      }
    }
  }
  }}
```

### Result

```graphql
{
  "data": {
    "bank": {
      "customers": {
        "edges": [
          {
            "node": {
              "aggregateTransactions": {
                "edges": [
                  {
                    "node": {
                      "id": "QWdncmVnYXRlUGF5bWVudFJlcXVlc3Q6MWE3NTNlNzE3ODMzMzNlN2FlNmUwYzczZjk3MjA3YmI0NjcxNTZiZjE5MGQ0MzJhYzZmYWVkNjdmNTBmNTA0Nw==",
                      "count": 2,
                      "paymentRequestState": "PAYMENT_RECEIVED",
                      "reference": "OPY Div Dist - H1",
                      "successfulCount": 2,
                      "failedCount": 0,
                      "paymentRequest": {
                        "reference": null,
                        "status": "COMPLETED",
                        "reason": "Completed",
                        "id": "UGF5bWVudFJlcXVlc3Q6ZTA4MjY2NDEzNjY3NjRkYWZjYWQ2MWY3YzRmZWRjODcwZmY4YWY5MGNmYmEwNjI5YTRlMzY3OTk1ZWM4NDE5Mg=="
                      },
                      "totalAmount": {
                        "value": "100.00"
                      },
                      "totalAmountFailed": {
                        "value": "0.00"
                      },
                      "totalAmountSuccessful": {
                        "value": "100.00"
                      },
                      "instructions": {
                        "edges": [
                          {
                            "node": {
                              "narrative": " No WHT OPY Dividend H1",
                              "amount": {
                                "value": "60.00"
                              },
                              "account": {
                                "accountNumber": "000001007"
                              },
                              "state": "SUCCEEDED",
                              "failure": null,
                              "tracingId": "No WHT OPY TRACE ID"
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
}
```

## General Command Status Query for Encrypted Payments

### Request

```graphql
query QueryCommand($commandId: ID!) {
  node(id: $commandId) {
    ... on Command {
      __typename
      CMDID: id
      action
      createdTimestamp
      invalid {field, reason}
      state
      step
    }
    ... on EncryptedCommand {
      __typename
      CMDID: id
      action
      createdTimestamp
      invalid {field, reason}
      state
      step
      unencryptedCommand {
        __typename
      }
    }
  }
}
fragment paymentCommand on MakePaymentCommand {
  action
  createdTimestamp
  invalid {field, reason}
  state
  step
  user
  payment {
    __typename
    BPID: id
    status
    reason
    paymentMethod
    createdTimestamp
    amount {
      creditDebit
      currency
      value
    }
    customerTransactionReference
    transactions {
      edges {
        node {
          state
          valueDate
          transactionType
          entries {
            edges {
              node {
                TxnEnId: id
                account {
                  ACCID: id
                  accountNumber
                  name
                  internal
                }
              }
            }
          }
        }
      }
    }
  }
}
fragment paymentRequestCommand on PaymentRequestCommand {
  action
  createdTimestamp
  invalid {field, reason}
  state
  step
  user
  payment: paymentRequest {
    __typename
    BPID: id
    status
    reason
    paymentMethod
    amount {
      creditDebit
      currency
      value
    }
    customerTransactionReference
    transactions {
      edges {
        node {
          state
          valueDate
          transactionType
          entries {
            edges {
              node {
                TxnEnId: id
                account {
                  ACCID: id
                  accountNumber
                  name
                  internal
                }
              }
            }
          }
        }
      }
    }
  }
}
fragment aggregatePaymentCommand on AggregatePaymentCommand {
  action
  createdTimestamp
  state
  step
  invalid {field, reason}
  aggregatePayment {
    BPID: id
    state
    createdTimestamp
    totalCount: count
    successfulCount
    failedCount
    paymentState
    paymentRequestState
    reference
    totalAmount {value, creditDebit}
    totalAmountSuccessful {value}
    totalAmountFailed {value}
    customerTransactionReference
    instructions {
      edges {
        node {
          INSID: id
          state
          failure
          tracingId
          account {
            ACCID: id
            accountNumber
          }
          amount {
            creditDebit
            currency
            value
          }
          transactionEntry {
            TxnEnId: id
            creditDebit
          }
        }
      }
    }
  }
}
fragment transferCommand on InternalTransferCommand {
  action
  createdTimestamp
  invalid {field, reason}
  state
  step
  user
  internalTransfer {
    __typename
    BPID: id
    createdTimestamp
    amount {
      creditDebit
      currency
      value
    }
    customerTransactionReference
    transactions {
      edges {
        node {
          state
          valueDate
          transactionType
          entries {
            edges {
              node {
                TxnEnId: id
                account {
                  ACCID: id
                  accountNumber
                  name
                  internal
                }
                creditDebit
              }
            }
          }
        }
      }
    }
  }
}
```

### Query Variables

```graphql
Query Variables :
{
    "commandId": "Q29tbWFuZDo3MzFjMDE1Ny02MDYzLTQwYjAtOWY0MC1hMThiNjg5YWIxNDE="
}
```

### Response

```json
{
    "data": {
        "node": {
            "__typename": "EncryptedCommand",
            "CMDID": "Q29tbWFuZDo3MzFjMDE1Ny02MDYzLTQwYjAtOWY0MC1hMThiNjg5YWIxNDE=",
            "action": "DO-ENCRYPTED-COMMAND",
            "createdTimestamp": "2022-07-13T00:57:44.485Z",
            "invalid": [],
            "state": "SUCCESSFUL",
            "step": "END",
            "unencryptedCommand": {
                "__typename": "AggregatePaymentCommand",
                "action": "AGGREGATE-PAYMENT-EXECUTE",
                "createdTimestamp": "2022-07-13T00:57:47.523Z",
                "state": "SUCCESSFUL",
                "step": "END",
                "invalid": [],
                "aggregatePayment": {
                    "BPID": "QWdncmVnYXRlUGF5bWVudDo2MjJiNjdiNTU2ZGIwZjZjODdjZGNkMGVlYjEyNDI0ODFkMzc1NWIwMmFiNTY3ZjZmYTNlOGQzZWUzZmFkYThk",
                    "state": "COMPLETE",
                    "createdTimestamp": "2022-07-13T00:57:49.952Z",
                    "totalCount": 2,
                    "successfulCount": 1,
                    "failedCount": 0,
                    "paymentState": "COMPLETED",
                    "paymentRequestState": null,
                    "reference": "AggDERefExtAcc01",
                    "totalAmount": {
                        "value": "22.03",
                        "creditDebit": "DEBIT"
                    },
                    "totalAmountSuccessful": {
                        "value": "0.00"
                    },
                    "totalAmountFailed": {
                        "value": "22.03"
                    },
                    "customerTransactionReference": "PADEAggCustTxnRef01",
                    "instructions": {
                        "edges": [
                            {
                                "node": {
                                    "INSID": "SW5zdHJ1Y3Rpb246Yjk2N2E4ZmNhY2YyN2VmZTVhYjYxMmY1MDYyOGVmNmI4NGU1NWNiYjkzZTFmMzdjNzk1ODI4ODFjZGQ1ODRlOQ==",
                                    "state": "PROCESSING",
                                    "failure": null,
                                    "tracingId": "CustTraceIdForClientInd01Txn01",
                                    "account": {
                                        "ACCID": "QWNjb3VudDo5YjQyNjIyM2M0YjNjNDFkMTAzZDAwZjVjYTkyNTEwYTFmMzRiYTk4NzI4NzU1NGQzOWRmOWFiNDQ5OWNkNDMz",
                                        "accountNumber": "173350203"
                                    },
                                    "amount": {
                                        "creditDebit": "DEBIT",
                                        "currency": "AUD",
                                        "value": "11.01"
                                    },
                                    "transactionEntry": {
                                        "TxnEnId": "U3VibGVkZ2VyVHJhbnNhY3Rpb246Yzk3Y2JkOTg3OWNlZmIxODM4NDFkZmUwNmQzOGRjMjYyMTc3YWQzZjdiZGYzODI3MjcxMDJmM2I0MTAyMWE5MA==",
                                        "creditDebit": "DEBIT"
                                    }
                                }
                            },
                            {
                                "node": {
                                    "INSID": "SW5zdHJ1Y3Rpb246NmVmZGYwNmRlNzRjMmRlMWIxMzNjYzA3MDljZTM0OTg2ZGIzNGViMjM3ZTk5ODAyZDAwOWJmZmMyNjlmZWI2Mg==",
                                    "state": "SUCCEEDED",
                                    "failure": null,
                                    "tracingId": "CustTraceIdForClientSlushTxn01",
                                    "account": {
                                        "ACCID": "QWNjb3VudDpjMjRmY2E2N2Y4Y2M2Y2E4NjdmZTRkZDk3OGExZTIwNmJjNmZhNzk0NzJiNzMwYjU4MGE0NTVhNmNiYjFhODQx",
                                        "accountNumber": "173350205"
                                    },
                                    "amount": {
                                        "creditDebit": "DEBIT",
                                        "currency": "AUD",
                                        "value": "11.02"
                                    },
                                    "transactionEntry": {
                                        "TxnEnId": "U3VibGVkZ2VyVHJhbnNhY3Rpb246N2NmMTc1MWU4N2RhNTFlOWU0MDVlNDM5MzQ1ZGMyOTM4NWM0ZTUzMTdmZWE3ZGE5YjRjNGI3ZDY1ODc3N2U5Mg==",
                                        "creditDebit": "DEBIT"
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        }
    }
}
```

## List Reversals (as Customer)

### Request

```graphql
{
  bank {
    customers {
      edges {
        node {
          pools {
            edges {
              node {
                name
                unallocated(filter: { reversal: true }) {
                  edges {
                    node {
                      ... on Payment {
                        reversalId: id
                        reversal
                        entryReference
                        narrative
                        accountServicerReference
                        unallocatedReason
                        Payment: amount {value, creditDebit}
                        transactions {
                          edges {
                            node {
                              currency
                              valueDate
                              transactionType
                            }
                          }
                        }
                      }
                      ... on Receipt {
                        reversalid: id
                        reversal
                        entryReference
                        narrative
                        unallocatedReason
                        Receipt: amount {value, creditDebit}
                        createdTimestamp
                        transactions {
                          edges {
                            node {
                              currency
                              initiatedTimestamp
                              transactionType
                              valueDate
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

### Response

```json
{
    "data": {
        "bank": {
            "customers": {
                "edges": [
                    {
                        "node": {
                            "pools": {
                                "edges": [
                                    {
                                        "node": {
                                            "name": "Sample Name",
                                            "unallocated": {
                                                "edges": [
                                                    {
                                                        "node": {}
                                                    },
                                                    {
                                                        "node": {
                                                            "reversalid": "YzViNmQwZDktYzExZC00YTUyLTk0NTEtMTZmZmM4MzFhMGZm",
                                                            "reversal": true,
                                                            "entryReference": "Sample Text",
                                                            "narrative": "Sample Text",
                                                            "unallocatedReason": "Sample Text",
                                                            "Receipt": {
                                                                "value": "3531.25",
                                                                "creditDebit": "DEBIT"
                                                            },
                                                            "createdTimestamp": "2024-06-18T02:25:38.397Z",
                                                            "transactions": {
                                                                "edges": [
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-17T22:28:41.981Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2024-01-03"
                                                                        }
                                                                    },
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-18T10:36:23.209Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2023-08-30"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "name": "Sample Name",
                                            "unallocated": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "reversalid": "YmQzM2U5ZWMtMzYyZC00MzhkLTgzZWEtYWNlMTNiMWQ4YTNj",
                                                            "reversal": false,
                                                            "entryReference": "Sample Text",
                                                            "narrative": "Sample Text",
                                                            "unallocatedReason": "Sample Text",
                                                            "Receipt": {
                                                                "value": "6036.25",
                                                                "creditDebit": "CREDIT"
                                                            },
                                                            "createdTimestamp": "2024-06-18T04:07:34.868Z",
                                                            "transactions": {
                                                                "edges": [
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-17T18:34:54.832Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2024-03-19"
                                                                        }
                                                                    },
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-18T00:46:01.314Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2024-03-06"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "reversalid": "Y2E5ZGU4MTAtZjc4ZS00MDNiLTliODUtNzhjYWFmZTBlYWIy",
                                                            "reversal": true,
                                                            "entryReference": "Sample Text",
                                                            "narrative": "Sample Text",
                                                            "unallocatedReason": "Sample Text",
                                                            "Receipt": {
                                                                "value": "5822.25",
                                                                "creditDebit": "CREDIT"
                                                            },
                                                            "createdTimestamp": "2024-06-18T11:11:38.448Z",
                                                            "transactions": {
                                                                "edges": [
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-18T00:57:02.709Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2024-02-22"
                                                                        }
                                                                    },
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-17T19:52:46.061Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2024-01-08"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "node": {
                            "pools": {
                                "edges": [
                                    {
                                        "node": {
                                            "name": "Sample Name",
                                            "unallocated": {
                                                "edges": [
                                                    {
                                                        "node": {}
                                                    },
                                                    {
                                                        "node": {
                                                            "reversalId": "Zjg0YmQwMTgtODIyYS00NGM2LWI4ZWYtOTYxZGNlM2Q5NGJl",
                                                            "reversal": true,
                                                            "entryReference": "Sample Text",
                                                            "narrative": "Sample Text",
                                                            "accountServicerReference": "Sample Text",
                                                            "unallocatedReason": "Sample Text",
                                                            "Payment": {
                                                                "value": "2242.87",
                                                                "creditDebit": "CREDIT"
                                                            },
                                                            "transactions": {
                                                                "edges": [
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "valueDate": "2023-10-25",
                                                                            "transactionType": "Transaction"
                                                                        }
                                                                    },
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "valueDate": "2024-04-22",
                                                                            "transactionType": "Transaction"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "name": "Sample Name",
                                            "unallocated": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "reversalid": "MWVhYWMwMmMtMzJlZS00MzRkLTkwMGItMzc0MTk3MTJkZDcy",
                                                            "reversal": true,
                                                            "entryReference": "Sample Text",
                                                            "narrative": "Sample Text",
                                                            "unallocatedReason": "Sample Text",
                                                            "Receipt": {
                                                                "value": "4670.44",
                                                                "creditDebit": "CREDIT"
                                                            },
                                                            "createdTimestamp": "2024-06-18T04:43:37.559Z",
                                                            "transactions": {
                                                                "edges": [
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-17T15:27:39.434Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2023-12-19"
                                                                        }
                                                                    },
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-17T22:31:53.147Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2024-01-05"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "reversalid": "MDU1Zjk5NTEtODk3ZC00OTQ2LTlhMWItNTNlNjc0NjVhZGQ0",
                                                            "reversal": true,
                                                            "entryReference": "Sample Text",
                                                            "narrative": "Sample Text",
                                                            "unallocatedReason": "Sample Text",
                                                            "Receipt": {
                                                                "value": "9770.65",
                                                                "creditDebit": "CREDIT"
                                                            },
                                                            "createdTimestamp": "2024-06-17T13:59:37.789Z",
                                                            "transactions": {
                                                                "edges": [
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-18T09:56:02.209Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2024-02-01"
                                                                        }
                                                                    },
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-18T03:18:56.187Z",
                                                                            "transactionType": "DEBIT",
                                                                            "valueDate": "2023-11-15"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
}
```

## Match Reversals (as Customer)

### Request

```graphql
mutation {
  createMatchedReversal(
    i: {
      # ID of the reverse transaction from the reversals list to match to an unallocated item - look for reversalId
      reversalId: "UGF5bWVudDpmZDdmOTBiNzQ2YTIxODlkNGM4ZWRlNzllMTgxY2ZhZWNjOGI2NzRlYmViODgwZWE0NmM4ODBkMTU3MjdiNmE0"
      # Free format comment text
      comment: "Reversal of Misc Credit 09"
      # ID of the unallocated transaction from the unallocated list - look for unallocid
      unallocatedId: "UmVjZWlwdDo3NmY2MDBkYWJiYzNiNDJlZjNjZjdlMzZiZjVhNTNlNDcwOTUzNmQ0MzcyY2VmOGM0NTNhNDFkYzJhYWYxMmQx"
    }
  ) {
    commandId
  }
}
```

### Response

```graphql
{
    "data": {
        "createMatchedReversal": {
            "commandId": "Q29tbWFuZDo4ZjJkNWIwZC0wZjM4LTRiMTctYjM1ZS0xODQ5NmUxNGMxN2Y="
        }
    }
}