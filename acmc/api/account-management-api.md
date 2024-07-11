---
layout: default
title: Account Management
navigation: acmc
toc: true
---

Per Corporations Act 2001 legislation framework, accounts will operate as Client Trust Accounts, held by the Customer, in trust for clients.


## Client Trust Accounts

- The Account Open request (via API) must include the desired Client Product, from which all attributes are inherited (including any applicable interest).
- All Client Trust Accounts created will inherit the attributes from the Client Product specified at the time of account creation, which will itself have inherited the attributes from the Customer Product provided by ANZ.
- Client Trust Accounts can have 1 or more beneficiaries, and up to a maximum of 5 beneficiaries. Each beneficiary can be either an individual or a non-individual.
- All beneficiaries must be linked at the time of account open via API. Once linked, beneficiaries cannot be added to or removed from an account.
- Each Client Trust Account opened will have a unique, 9-digit account number. The 9-digit account number will be unique across ANZ Australia, removing the risk of mistaken accounts e.g., a client of The Customer inadvertently engages with ANZ via a branch. The 9-digit account number can have leading zeroes.
- It is optional for ACMC Customers to include an internal client account reference as part of the account opening request (via API). If included, the internal client account reference will be included in the allocation decision.

## Interest Cycle and Capitalisation

- The Client Trust Account can accrue interest. Interest (if applicable) is accrued daily based on the balance of the Client Trust Account.
- Interest Cycle is Monthly. Interest is capitalised on the last day of the month, effective 1st day of next month. Applicable WHT will be deducted as part of the capitalisation process.

## Account Closure

- A Customer can request (via API) for the closure of a Client Trust Account, only when the Client Trust Account has a balance of zero.

## Account Management

- Accounts will be domiciled in Australia and denominated in AUD only.
- Account names must be the informal trust name and adopt an appropriate naming convention. For example,
    - “Example Company Ltd on behalf of Thor Odinson and John Citizen”
    - “Example Company Ltd on behalf of Odinson Family Trust”
- Accounts are enabled for DE and RTGS outbound payments.
- Accounts must have a minimum of 1 Trustee (i.e. the Customer), and a minimum of 1 and maximum of 5 beneficiaries.
- Accounts cannot be overdrawn i.e. the balance cannot go below zero.
- Accounts are subject to CRS & FATCA obligations per ANZ T&Cs.
- Accounts are subject to Financial Claims Scheme Guarantee.

## Open Account

### Requirements

To open an account on the platform, a customer must have several other items in place and information available:

| Name                    | Description                                                                                               | Type |
|-------------------------|-----------------------------------------------------------------------------------------------------------|------|
| `productId`             | A unique identifier allocated to each product that exists on the platform, obtainable via a system query. |      |
| `partyID - BENEFICIARY` | A unique identifier allocated to each party that exist on the platform, retrievable via a system query.   |      |
| `partyID - TRUSTEE`     | A unique identifier allocated to each party that exist on the platform, retrievable via a system query.   |      |
| `customerId`            | A unique identifier allocated to each customer instance that exist on the platform, supplied by ANZ.      | id   |

### Request

Refer to: [openAccount]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#mutation-openAccount) for mutation details

| Name        | Description                                                                                                     | Cardinality | Type   |
|-------------|-----------------------------------------------------------------------------------------------------------------|-------------|--------|
| `name`        | The operating name of the account                                                                               | 1..1        | String |
| `customerID`  | The customer that manages the account on behalf of a client                                                     | 1..1        | String |
| `product`     | The `Id` product that controls the capabilities and restrictions the account follows                              | 1..1        | String |
| `roles`       | Specify the role the party linked to the id plays in the account relationship                                   | 1..1        | String |

```graphql
    mutation {
    openAccount (input: {
        name: "AccountName",
        reference: "AccountReference",
        customerId: "Q3VzdG9tZXI6MDM0YjFjNzRhYmM3ZmIxZjJjZWEzNDkzNDIzZGI1NDdkNDZiZWFiMzFlZGJmZTc5ZDMwYjBmM2RjMGRiZWU0ZA==",
        product: "UHJvZHVjdDo1MTc3MmI1NDdjOGEwMGE1N2VlYWJhMmRlMzI3ZjYwZjQ5YWZkMWZmZjk1ZjE1NzExNDA1MjIxNTZmNWJlOTk2",
        parties: [
        {
            partyId: "UGFydHlDb21wYW55OmFkYjhjOTNjZmI4NjNmMjA5M2ZjOTA2NGY2NWQxMGNiNDY1YTllODdjZDg5MTY1M2VkMDcwMWZjNmRiNDI3Mzc=",
            roles: [TRUSTEE]
        },
        {
            partyId: "UGFydHlJbmRpdmlkdWFsOmZkZjUxNDQzMGM0MTdmYzFmMGMwMzc3N2I2MGFiYTk5N2Y1Zjk3MWZlOTFlMWEzYTA3ZDFmOTA2YzU2ZWM5N2E=",
            roles: [BENEFICIARY]
        }
        ]
    }) {
        commandId # This command ID can be used to check the status of the account opening process
    }
    }
```
          
### Response

All mutations to the platform will return a commandID value that can be used to enquire on the status and outcome of messages sent to ACMC Refer to commandID Query for more information

| Name      | Description                                                                                                      |
|-----------|------------------------------------------------------------------------------------------------------------------|
| `commandId` | A unique Command ID is returned for every interaction to the platform. The id is used as part of QueryCommand to determine the outcome of mutations |

This response contains the `commandId` that can be used to track the status of the account opening request.

```json
    {
    "data": {
        "openAccount": {
        "commandId": "Q29tbWFuZDoxMmRkYTEyMi1hNzFkLTRlYWQtODZhZC05NGY3NjVjN2FlY2Q="
        }
    }
    }
```

## Query Account Balance by Number

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#definition-bank) for query operations

```graphql
{
  bank {
    accounts(filter: {accountNumberExact: "886058274"}) {
      edges {
        node {
          name
          reference
          accountNumber
          openState
          now: balances {
            current {creditDebit, value}
            currency
            available {creditDebit, value}
          }
          accountID: id
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
            "accounts": {
                "edges": [
                    {
                        "node": {
                            "name": "Trust Account",
                            "reference": "351364370236041",
                            "accountNumber": "38210593",
                            "openState": "CLOSED",
                            "now": [
                                {
                                    "current": {
                                        "creditDebit": "CREDIT",
                                        "value": "2289.21"
                                    },
                                    "currency": "AUD",
                                    "available": {
                                        "creditDebit": "DEBIT",
                                        "value": "178.32"
                                    }
                                }
                            ],
                            "accountID": "NTM0YTg2YWMtZGRmNS00NjIzLTgzZTAtZmFlZjZjYTg4NWY0"
                        }
                    },
                    {
                        "node": {
                            "name": "Trust Account",
                            "reference": "931440635208710",
                            "accountNumber": "61222015",
                            "openState": "OPEN",
                            "now": [
                                {
                                    "current": {
                                        "creditDebit": "CREDIT",
                                        "value": "7002.44"
                                    },
                                    "currency": "AUD",
                                    "available": {
                                        "creditDebit": "DEBIT",
                                        "value": "7073.38"
                                    }
                                }
                            ],
                            "accountID": "YTBlODIyNWQtOTk3ZC00MGI1LTlhM2ItNGM2MjNjMzk1YzA3"
                        }
                    }
                ]
            }
        }
    }
}
```

## Query Account Balance by Account Reference

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
  bank {
    accounts(filter: {accountReferenceContains: "900000001"}) {
      edges {
        node {
          name
          reference
          accountNumber
          openState
          now: balances {
            current {creditDebit, value}
            currency
            available {creditDebit, value}
          }
          accountID: id
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
            "accounts": {
                "edges": [
                    {
                        "node": {
                            "name": "Investment Account",
                            "reference": "343451932856563",
                            "accountNumber": "93671876",
                            "openState": "OPEN",
                            "now": [
                                {
                                    "current": {
                                        "creditDebit": "DEBIT",
                                        "value": "6109.38"
                                    },
                                    "currency": "AUD",
                                    "available": {
                                        "creditDebit": "DEBIT",
                                        "value": "82.39"
                                    }
                                }
                            ],
                            "accountID": "NDU0ZWJmMmUtYjE5NC00NDIzLWE5M2UtNjViZTI3YTQzZDM0"
                        }
                    },
                    {
                        "node": {
                            "name": "SFAccount1",
                            "reference": "566304115349560",
                            "accountNumber": "93835262",
                            "openState": "CLOSING",
                            "now": [
                                {
                                    "current": {
                                        "creditDebit": "CREDIT",
                                        "value": "2225.71"
                                    },
                                    "currency": "AUD",
                                    "available": {
                                        "creditDebit": "DEBIT",
                                        "value": "753.37"
                                    }
                                }
                            ],
                            "accountID": "NjI1OTk5YmUtMGFjZi00ZTA0LTk5MzUtOTdlZWYxN2IzZjVm"
                        }
                    }
                ]
            }
        }
    }
}

```
## Query Account Balance and Details

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
  bank {
    accounts(filter: {accountNumberExact: "886058274"}) {
      edges {
        node {
          name
          reference
          accountNumber
          openState
          now: balances {
            current {creditDebit, value}
            currency
            available {creditDebit, value}
          }
          interest {
            edges {
              node {
                accrualClient {
                  creditDebit
                  value
                  currency
                }
                accrualMargin {
                  creditDebit
                  value
                  currency
                }
                accrualCustomer {
                  creditDebit
                  value
                  currency
                }
                latestRealisation {
                  client {
                    creditDebit
                    value
                    currency
                  }
                  customer {
                    creditDebit
                    value
                    currency
                  }
                }
              }
            }
          }
          accountID: id
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
            "accounts": {
                "edges": [
                    {
                        "node": {
                            "name": "SFAccount1",
                            "reference": "351364370236041",
                            "accountNumber": "79529385",
                            "openState": "CLOSED",
                            "now": [
                                {
                                    "current": {
                                        "creditDebit": "CREDIT",
                                        "value": "7091.24"
                                    },
                                    "currency": "AUD",
                                    "available": {
                                        "creditDebit": "DEBIT",
                                        "value": "9169.72"
                                    }
                                }
                            ],
                            "interest": {
                                "edges": [
                                    {
                                        "node": {
                                            "accrualClient": {
                                                "creditDebit": "DEBIT",
                                                "value": "5570.35",
                                                "currency": "AUD"
                                            },
                                            "accrualMargin": {
                                                "creditDebit": "DEBIT",
                                                "value": "1690.63",
                                                "currency": "AUD"
                                            },
                                            "accrualCustomer": {
                                                "creditDebit": "CREDIT",
                                                "value": "9479.65",
                                                "currency": "AUD"
                                            },
                                            "latestRealisation": {
                                                "client": {
                                                    "creditDebit": "DEBIT",
                                                    "value": "2094.84",
                                                    "currency": "AUD"
                                                },
                                                "customer": {
                                                    "creditDebit": "DEBIT",
                                                    "value": "9690.14",
                                                    "currency": "AUD"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "accrualClient": {
                                                "creditDebit": "CREDIT",
                                                "value": "9886.84",
                                                "currency": "AUD"
                                            },
                                            "accrualMargin": {
                                                "creditDebit": "DEBIT",
                                                "value": "3087.53",
                                                "currency": "AUD"
                                            },
                                            "accrualCustomer": {
                                                "creditDebit": "CREDIT",
                                                "value": "596.70",
                                                "currency": "AUD"
                                            },
                                            "latestRealisation": {
                                                "client": {
                                                    "creditDebit": "CREDIT",
                                                    "value": "6236.86",
                                                    "currency": "AUD"
                                                },
                                                "customer": {
                                                    "creditDebit": "DEBIT",
                                                    "value": "596.44",
                                                    "currency": "AUD"
                                                }
                                            }
                                        }
                                    }
                                ]
                            },
                            "accountID": "NTM0YTg2YWMtZGRmNS00NjIzLTgzZTAtZmFlZjZjYTg4NWY0"
                        }
                    },
                    {
                        "node": {
                            "name": "SFAccount1",
                            "reference": "931440635208710",
                            "accountNumber": "98112394",
                            "openState": "OPEN",
                            "now": [
                                {
                                    "current": {
                                        "creditDebit": "CREDIT",
                                        "value": "643.88"
                                    },
                                    "currency": "AUD",
                                    "available": {
                                        "creditDebit": "DEBIT",
                                        "value": "4973.32"
                                    }
                                }
                            ],
                            "interest": {
                                "edges": [
                                    {
                                        "node": {
                                            "accrualClient": {
                                                "creditDebit": "CREDIT",
                                                "value": "1393.64",
                                                "currency": "AUD"
                                            },
                                            "accrualMargin": {
                                                "creditDebit": "DEBIT",
                                                "value": "2529.36",
                                                "currency": "AUD"
                                            },
                                            "accrualCustomer": {
                                                "creditDebit": "CREDIT",
                                                "value": "6909.26",
                                                "currency": "AUD"
                                            },
                                            "latestRealisation": {
                                                "client": {
                                                    "creditDebit": "CREDIT",
                                                    "value": "14.48",
                                                    "currency": "AUD"
                                                },
                                                "customer": {
                                                    "creditDebit": "CREDIT",
                                                    "value": "312.48",
                                                    "currency": "AUD"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "accrualClient": {
                                                "creditDebit": "DEBIT",
                                                "value": "7974.10",
                                                "currency": "AUD"
                                            },
                                            "accrualMargin": {
                                                "creditDebit": "CREDIT",
                                                "value": "8637.68",
                                                "currency": "AUD"
                                            },
                                            "accrualCustomer": {
                                                "creditDebit": "CREDIT",
                                                "value": "1372.69",
                                                "currency": "AUD"
                                            },
                                            "latestRealisation": {
                                                "client": {
                                                    "creditDebit": "CREDIT",
                                                    "value": "8276.74",
                                                    "currency": "AUD"
                                                },
                                                "customer": {
                                                    "creditDebit": "CREDIT",
                                                    "value": "3983.63",
                                                    "currency": "AUD"
                                                }
                                            }
                                        }
                                    }
                                ]
                            },
                            "accountID": "YTBlODIyNWQtOTk3ZC00MGI1LTlhM2ItNGM2MjNjMzk1YzA3"
                        }
                    }
                ]
            }
        }
    }
}
``

```

## Query account transaction history

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
query getTransHistoryByDate($accno: AccountNumber,$accref: String,$when: DateTime,$from: DateTime){
  bank {
    accounts(filter: {accountNumberExact: $accno, accountReferenceContains: $accref}) {
      edges {
        node {
          name
          openState
          id
          customer {
            fullName
          }
          now: balances{
            current{creditDebit,currency,value}
            available{creditDebit,currency,value}
          },
          transactionEntries(filter: {from: $from until: $when})  {
            edges {
              node {
                transactionType
                initiatedTimestamp
                transaction {
                  valueDate

                  businessProcess {
                    ... on AggregatePayment {
                      count
                      createdTimestamp
                      customerTransactionReference
                      reference
                      failedCount
                      successfulCount
                      state
                      paymentState
                      totalAmountFailed{value}
                      totalAmountSuccessful{value}
                      totalAmount {creditDebit value currency }
                      payment {status,reason}
                    }
                    ... on Receipt {
                      __typename
                      narrative
                      entryReference
                      accountServicerReference
                      unallocatedReason
                      unallocatedReasonCode
                      bookingDate
                      createdTimestamp
                    }
                    ... on Payment {
                      __typename
                      narrative
                      entryReference
                      accountServicerReference
                      reference
                      createdTimestamp
                      bookingDate
                      amount{creditDebit,currency,value}
                      recipient{bankCode,accountNumber,name,__typename}
                    }
                    ... on PaymentRequest {
                      __typename
                      reference
                      status
                      createdTimestamp
                      amount{creditDebit,currency,value}
                      customerLinkedAccount{accountName,accountNumber}
                      requesterName
                      requesterAccount{name,accountNumber}
                    }
                    ... on InternalTransfer {
                      __typename
                      payeeReference
                      payerReference
                      creditingAccount{accountNumber,name,reference}
                      debitingAccount{accountNumber,name,reference}
                      createdTimestamp
                      valueDate
                    }
                    ...on Interest {
                      acknowledged
                      createdTimestamp
                      customerAmount {creditDebit,currency,value}
                      customerUnpaidAmount {creditDebit,currency,value}
                      customerMarginPayment {amount{creditDebit,currency,value}}
                      customerMarginPaymentRequest {amount{creditDebit,currency,value}}
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

  Query Variables:
  {
    "accno": "173350315",
    "from": "2022-01-01T00:00:21.000Z",
    "when": "2023-06-20T23:59:59.000Z"
  }
}

```

### Response

```json
{
    "data": {
        "bank": {
            "accounts": {
                "edges": [
                    {
                        "node": {
                            "name": "Alex Taylor",
                            "openState": "OPEN",
                            "id": "YjkzYjgzMzItOWEyNy00ZjZkLTk1NjYtYzIyMzEyNWIyZjhm",
                            "customer": {
                                "fullName": "James"
                            },
                            "now": [
                                {
                                    "current": {
                                        "creditDebit": "DEBIT",
                                        "currency": "AUD",
                                        "value": "5618.16"
                                    },
                                    "available": {
                                        "creditDebit": "CREDIT",
                                        "currency": "AUD",
                                        "value": "1554.69"
                                    }
                                }
                            ],
                            "transactionEntries": {
                                "edges": [
                                    {
                                        "node": {
                                            "transactionType": "Transaction",
                                            "initiatedTimestamp": "2024-06-14T05:05:33.939Z",
                                            "transaction": {
                                                "valueDate": "2024-01-18",
                                                "businessProcess": {}
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "transactionType": "Transaction",
                                            "initiatedTimestamp": "2024-06-13T17:12:40.584Z",
                                            "transaction": {
                                                "valueDate": "2023-07-22",
                                                "businessProcess": {
                                                    "__typename": "Receipt",
                                                    "narrative": "Narrative",
                                                    "entryReference": "Reference",
                                                    "accountServicerReference": "Account Servicer Reference",
                                                    "unallocatedReason": "Sample Text",
                                                    "unallocatedReasonCode": "PAYMENT_REQUEST_REJECTED",
                                                    "bookingDate": "2023-12-01",
                                                    "createdTimestamp": "2024-06-13T15:29:16.659Z"
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "node": {
                            "name": "Alex Taylor",
                            "openState": "CLOSED",
                            "id": "ODA4OTY0NzktY2Q4NS00YjkxLWE4MWQtNjU0MTIwNmM0ODc2",
                            "customer": {
                                "fullName": "Jane Smith"
                            },
                            "now": [
                                {
                                    "current": {
                                        "creditDebit": "DEBIT",
                                        "currency": "AUD",
                                        "value": "4335.07"
                                    },
                                    "available": {
                                        "creditDebit": "DEBIT",
                                        "currency": "AUD",
                                        "value": "8401.90"
                                    }
                                }
                            ],
                            "transactionEntries": {
                                "edges": [
                                    {
                                        "node": {
                                            "transactionType": "Transaction",
                                            "initiatedTimestamp": "2024-06-13T09:20:34.913Z",
                                            "transaction": {
                                                "valueDate": "2023-12-18",
                                                "businessProcess": {}
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "transactionType": "Transaction",
                                            "initiatedTimestamp": "2024-06-14T00:07:22.741Z",
                                            "transaction": {
                                                "valueDate": "2024-05-20",
                                                "businessProcess": {
                                                    "__typename": "InternalTransfer",
                                                    "payeeReference": "Payee Reference",
                                                    "payerReference": "Payer Reference",
                                                    "creditingAccount": {
                                                        "accountNumber": "78909163",
                                                        "name": "SFAccount1",
                                                        "reference": "972786798869708"
                                                    },
                                                    "debitingAccount": {
                                                        "accountNumber": "69802737",
                                                        "name": "Money Market Account",
                                                        "reference": "822632101351916"
                                                    },
                                                    "createdTimestamp": "2024-06-14T06:01:07.295Z",
                                                    "valueDate": "2024-02-11"
                                                }
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

## Close client account with zero balance

### Request

Refer to: [closeAccount]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#mutation-closeAccount) for mutation details


```graphql
    mutation ($acct: CloseAccountInput!) {
    closeAccount (i: $acct) {
        commandId
    }
    }

    Query Variables:
    {
    "acct": {
        "accountId": "QWNjb3VudDo3NmU1YzE3MjQwYTg0ODI3NmUyYzIyYzgyNjg1ODgyMzI3OTZjNDEzMDc4Mjg0MjAxZTZjOTBiNDlhN2NlMDVh",
        "fundsDestination": {
        "accountNumber": "841703632",
        "bankCode": "013056",
        "name": "Arrow Multi Test Corp Ltd"
        }
    }
    }
```

### Response

```json
{
  "data": {
    "closeAccount": {
      "commandId": "Q29tbWFuZDoyMjIwZWM1ZC04NjEyLTRkYzUtYWJlNi04MzMwY2MwMWQxOTQ="
    }
  }
}

```

## Query by CommandId

### Query Create Party

Refer to: [node]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-node) for query operations

```graphql
  query QueryCommand($commandId: ID!) {
    node(id: $commandId ){
      __typename
      id
      ... on CreatePartyCommand {
        action
        party{
          PartyID: id
          reference
          roles
          ... on PartyIndividual{givenName,familyName,__typename}
          ... on PartyCompany{fullName,__typename}     
        }
        id
        invalid{field,reason}
        state
        step
      }
    }
  }
```

### Sample commandID variables

```graphql
  {
      "commandId": "Q29tbWFuZDoyZWZmNjQxOS1mNGFlLTQ1OGItOWQwMC04OWQwMWFkOWE1NzQ="
  }
```

### Response

To determine the outcome of a GraphQL mutation, an enquiry needs to be submitted to the platform. The query should be modified to return the fields and values that make sense to the requesting entity. From the provided sample, the following fields are returned:

| Name      | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| `id`        | Echo the commandId used for the query                                       |
| `action`    | The type of operation that initiated the command.                           |
| `party`     | Group containing information pertaining to the party                        |
| `PartyID`   | The identifier allocated to each party created on the platform. The ID must be used for any future actions that involve the party |
| `reference` | Unique customer side reference, if provided, else null                      |
| `roles`     | Information on role(s)                                                      |
| `invalid`   | Information on failures or issues with object processing                    |
| `state`     | The outcome of the mutation, possible values: SUBMITTED, SUCCESSFUL, FAILED |

```json
  {
    "data": {
      "node": {
        "__typename": "CreatePartyCommand",
        "id": "Q29tbWFuZDoxYWEyZTk4Yy1mMmI0LTQ1OGItOGRkMi0zNGIzZGIxNTU5MmY=",
        "action": "PARTY-INDIVIDUAL-CREATE",
        "party": {
          "PartyID": "UGFydHlJbmRpdmlkdWFsOjhjNjA4Mzk4ZDMxNTA3MjRjNzQ3NjY2MGI1Mzc3NDJhNWM3Yjg0NjI1ZWQ4NjAxODkyZTE5MjgzMDc3ZjBkMTc=",
          "reference": null,
          "roles": [
            "BENEFICIARY"
          ],
          "givenName": "Carissa",
          "familyName": "Green",
          "__typename": "PartyIndividual"
        },
        "invalid": [],
        "state": "SUCCESSFUL",
        "step": "END"
      }
    }
  }
```

## Query Open Account

### Request

Refer to: [node]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-node) for query operations

```graphql
query QueryCommand($commandId: ID!) {
  node(id: $commandId ){
    __typename
    ... on OpenAccountCommand{
      action
      account
      {
        accountNumber,
        bankCode,
        id
      }
      state
      invalid
      {
        field,
        reason
      }
      action
      state
      id
    }
  }
}
```

### Response

To determine the outcome of a GraphQL mutation an enquiry needs to be submitted to the platform. The query should be modified to return the fields and values that make sense to the requesting entity From the provided sample the following fields are returned

| Name    | Description                                                                |
|---------|----------------------------------------------------------------------------|
| `action`  | The type of operation that initiated the command.                          |
| `account` | Group that contains information on an account                              |
| `invalid` | Information on failures or issues with object processing                   |
| `state`   | The outcome of the mutation, possible values: SUBMITTED, SUCCESSFUL, FAILED |

```json
{
    "commandId": "Q29tbWFuZDoyZWZmNjQxOS1mNGFlLTQ1OGItOWQwMC04OWQwMWFkOWE1NzQ="
}
```

```json
{
  "data": {
    "node": {
      "__typename": "OpenAccountCommand",
      "action": "OPEN-ACCOUNT",
      "account": {
        "accountNumber": "735107114",
        "bankCode": null,
        "id": "QWNjb3VudDoxZDc4ZThlZWEyYTRiZGIxYTVmNDIzM2IzZjU4YzMxNDY1NmI2MGE2NTZjZmE4NmQwYzQxMWFkMGJjZTU1NmNj"
      },
      "state": "SUCCESSFUL",
      "invalid": [],
      "id": "Q29tbWFuZDoyZWZmNjQxOS1mNGFlLTQ1OGItOWQwMC04OWQwMWFkOWE1NzQ=",
      "step": "END"
    }
  }
}
```

