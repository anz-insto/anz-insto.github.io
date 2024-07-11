---
title: Allocations processing
layout: default
navigation: acmc
toc: true
---

ACMC Customers can carry out several actions in relation to the management of allocations and unallocated transactions via API.

## Unallocated and Incorrect Transactions

- Customers query for any unallocated transactions.
- Customers can request (via API) for an unallocated transaction to be manually allocated to the correct Client Trust Account. Where the transaction is manually allocated within 10 business days, the transaction will retain the original ‘value date’ and any associated interest accrual will be automatically adjusted based on the original ‘value date’. After 10 business days, the original ‘value date’ and associated interest adjustments are no longer applicable. In addition, the unallocated transaction will be transferred to/from the Customer CLA for assessment and processing.
- Where a transaction has been incorrectly allocated (automatically or manually), the Customer can request via API to move it back into ‘Unallocated’. Once done, the transaction can be reallocated. The unallocation can only be done on the day of the original allocation. For transactions that were allocated within the last 10 business days, Customers can request (via ANZ CSC) for the transaction to be moved back into ‘Unallocated’. The unallocated transaction can then be reallocated, retaining the original ‘value date’ and any associated interest accrual will be automatically adjusted based on the original ‘value date’.
- Unallocated transactions can be returned via ANZ Transaction Processing Centre (TPC). Customers will fill out the ‘TPC Returns Form’ and email it to ANZ TPC team, who then returns the listed transactions directly from the source account. A returned transaction is recognised and processed by ACMC as such. It will be an equal but opposite amount (e.g. DR) to the original unallocated transaction (e.g. CR). Customers can then request (via API), for the pair to be matched off and cleared from the unallocated transactions list. The entire sequence of events listed above can be managed automatically by Customers with the appropriate code calling the APIs.
- If the transaction needs to be managed outside of the TPC returns process, Customers also have the option to transfer funds between Unallocated and an appropriate CLA.
- Customers can query for a list of transactions transferred from Unallocated to a CLA.
This section contains information on processing of allocated and unallocated messages

## Query, List Unallocated
_Enquire on unallocated mesasges for customer_

_Required Inputs_

This query use filters to retrieve information specific to the Customers node. One of the following fields are available for use

| Name              | Description                                                                     |
|-------------------|---------------------------------------------------------------------------------|
| `fullNameContains`  | Provide part of a customer name as filter criteria to the query                 |
| `name`              | As referenced in the sample: fullNameContains: "$name: String!", value used to filter the query output |

### Request

```graphql
{
  bank {
    customers(filter: {fullNameContains: "$name: String!"}) {
      edges {
        node {
          pools {
            edges {
              node {
                name
                unallocated {
                  edges {
                    node {
                      ... on Payment {
                        pool {
                          name
                        }
                        unallocid: id
                        entryReference
                        narrative
                        transactions {
                          edges {
                            node {
                              currency
                              initiatedTimestamp
                              valueDate
                              transactionType                              
                            }
                          }
                        }
                      }
                      ... on Receipt {
                        pool {
                          name
                        }
                        unallocid: id
                        entryReference
                        narrative
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

Query Variables :

  {
    "name": "Barry"
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
                                            "name": "Jane Smith",
                                            "unallocated": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "pool": {
                                                                "name": "Name"
                                                            },
                                                            "unallocid": "ZDAxNjg0MzItMWUzMi00MGRkLWJjNWYtODBlYWRlZjIyMTNh",
                                                            "entryReference": "Entry Reference",
                                                            "narrative": "Sample Text",
                                                            "transactions": {
                                                                "edges": [
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-19T13:27:36.261Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2023-10-28"
                                                                        }
                                                                    },
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-19T14:11:06.785Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2023-12-15"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "pool": {
                                                                "name": "Name"
                                                            },
                                                            "unallocid": "MzViMDhkZmYtNzliMi00NjJkLTk1ODMtZjc2MDNmMmNlNDlk",
                                                            "entryReference": "Entry Reference",
                                                            "narrative": "Sample Text",
                                                            "transactions": {
                                                                "edges": [
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-19T19:40:35.707Z",
                                                                            "valueDate": "2024-05-19",
                                                                            "transactionType": "Transaction"
                                                                        }
                                                                    },
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-19T15:15:26.787Z",
                                                                            "valueDate": "2024-04-20",
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
                                            "name": "Name",
                                            "unallocated": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "pool": {
                                                                "name": "Name"
                                                            },
                                                            "unallocid": "ZjU0MjlkNTgtNTMzNS00MDVjLWJlZjMtYmNkNDc5MmVmY2M0",
                                                            "entryReference": "Entry Reference",
                                                            "narrative": "Sample Text",
                                                            "transactions": {
                                                                "edges": [
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-19T14:32:57.235Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2024-04-05"
                                                                        }
                                                                    },
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-19T06:35:04.499Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2024-06-14"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "pool": {
                                                                "name": "Name"
                                                            },
                                                            "unallocid": "YTE0YzA2MWItNGRkMi00NWY4LTg0MmEtODQ5ODhmNzliNzU2",
                                                            "entryReference": "Entry Reference",
                                                            "narrative": "Narrative",
                                                            "transactions": {
                                                                "edges": [
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-19T01:33:41.889Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2024-04-13"
                                                                        }
                                                                    },
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-19T11:20:19.302Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2023-09-13"
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
                                            "name": "Name",
                                            "unallocated": {
                                                "edges": [
                                                    {
                                                        "node": {}
                                                    },
                                                    {
                                                        "node": {}
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "name": "Name",
                                            "unallocated": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "pool": {
                                                                "name": "Name"
                                                            },
                                                            "unallocid": "MzcxMjJmYzgtYWU0My00NDRhLTkxODAtNGVjOGExODUwNDlh",
                                                            "entryReference": "Entry Reference",
                                                            "narrative": "Sample Text",
                                                            "transactions": {
                                                                "edges": [
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-19T09:02:21.045Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2024-04-15"
                                                                        }
                                                                    },
                                                                    {
                                                                        "node": {
                                                                            "currency": "AUD",
                                                                            "initiatedTimestamp": "2024-06-19T22:54:35.584Z",
                                                                            "transactionType": "Transaction",
                                                                            "valueDate": "2023-08-24"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "node": {}
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


## Mutation, Allocate an unallocated transaction

Using information from query to retrieve `unallocaed transactions`, take an action to allocate a transaction

### Request

Required Inputs

| Name              | Description                                                                                              | Cardinality | Type   |
|-------------------|----------------------------------------------------------------------------------------------------------|-------------|--------|
| `accountId`         | A unique identifier allocated to each account that exist on the platform, in this context is used to make an allocation TO a specified account | 1..1        | id     |
| `allocationComment` | A unique identifier allocated to each product that exist on the platform, this can be obtained via a query to the system Product               | 0..1        | string |
| `unallocatedId`     | A unique identifier allocated to each party that exist on the platform, this can be retrieved via a query to the system Parties                 | 1..1        | id     |


```graphql
mutation {
  allocate(i: {accountId: "QWNjb3VudDpjZjkyNGJhMWRkNjUyYmUzYzcxNmQ4MmNhZDgzNjg0YzhhY2FmOWUwZWZjZDc1ODYwMmY1OWQyNmU3Nzc0N2Iw", allocationComment: "API allocation", unallocatedId: "UmVjZWlwdDo4Mjg3ODJmNjg4YWQ0ZjU2YjJiZGRiOTI0YjBiNjI2MjM1YjNiZTMxZjE1MTMwMWM1ZDYwZTNiYTk1MzI5MGM0"}) {
    commandId
  }
}
```

### Response

Only `commandId` is returned as a response to any mutation, an enquiry must be made on the `commandId` to retrieve information pertaining to the mutation submission *

```json
    {
        "commandId": "Q29tbWFuZDo1MWVmYTE1OC01ZDIwLTRlNTYtOWE5Ni03MzFlOGRlMjA1ZDI="
    }
```

Enquire on mutation based on `commandId` returned

```json
    {
    node(id: "Q29tbWFuZDo1MWVmYTE1OC01ZDIwLTRlNTYtOWE5Ni03MzFlOGRlMjA1ZDI=" ){
        __typename
        id
        ... on Command{action,state,step,invalid{field,reason}}
        ... on GenericCommand{
        action
        state
        step
        invalid{field,reason,__typename}
        }
    }
    }
    {
        "data": {
            "node": {
                "__typename": "GenericCommand",
                "id": "Q29tbWFuZDo1MWVmYTE1OC01ZDIwLTRlNTYtOWE5Ni03MzFlOGRlMjA1ZDI=",
                "action": "ALLOCATE",
                "state": "SUCCESSFUL",
                "step": "END",
                "invalid": []
            }
        }
    }
```


## Query, Transaction History and unallocatable ids
_Query is used to retreive ids of transactions that can be unallocated_

### Request

Required Inputs

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

| Name                        | Description                                              | Cardinality | Type     |
|-----------------------------|----------------------------------------------------------|-------------|----------|
| AccountNumber               | AccountNumber from which to retrieve Transaction History | 1..1        | id       |
| accountReferenceContains    | Unique Account Reference associated with account         | 0..1        | string   |
| From Date                   | Date in ISODate format YYYY-MM-DD, example: 2021-03-16    | 1..1        | DateTime |
| To Date                     | Date in ISODate format YYYY-MM-DD, example: 2021-03-16    | 1..1        | DateTime |
| Request messages to ANZ Cash Management Central use GraphQL |


```graphql
query getTransHistoryByDate($accno: AccountNumber, $accref: String, $when: DateTime, $from: DateTime) {
  bank {
    accounts(filter: {accountNumberExact: $accno, accountReferenceContains: $accref}) {
      edges {
        node {
          name
          openState
          id
          now: balances {
            current {
              creditDebit
              value
            }
            currency
            available {
              creditDebit
              value
            }
          }
          transactionEntries(filter: {from: $from, until: $when}, orderBy: [{sort: APPLIED, direction: ASC}]) {
            edges {
              node {
                initiatedTimestamp
                state
                transaction {
                  businessProcess {
                    ... on Receipt {
                      TranType: __typename
                      narrative
                      entryReference
                      accountServicerReference
                      status
                      unallocatable
                      UnallocateID: id
                    }
                    ... on Payment {
                      TranType: __typename
                      narrative
                      entryReference
                      accountServicerReference
                      reference
                      status
                      unallocatable
                    }
                  }
                  valueDate                  
                }
                balance {
                  currency
                  value
                }
              }
            }
          }
        }
      }
    }
  }
}



Query Variables :

  {
    "accno": "173350315",
    "accref": "reference",
    "when": "2023-06-20T23:59:59.000Z",
    "from": "2023-01-20T23:59:59.000Z"
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
                            "openState": "CLOSING",
                            "id": "ZDIyOGUyNmEtMjIyNy00Y2Q3LWJhZWItYWM0MzNmYWQwOTY3",
                            "now": [
                                {
                                    "current": {
                                        "creditDebit": "DEBIT",
                                        "value": "6416.21"
                                    },
                                    "currency": "AUD",
                                    "available": {
                                        "creditDebit": "CREDIT",
                                        "value": "4216.76"
                                    }
                                }
                            ],
                            "transactionEntries": {
                                "edges": [
                                    {
                                        "node": {
                                            "initiatedTimestamp": "2024-06-19T20:57:53.294Z",
                                            "state": "SUCCESSFUL",
                                            "transaction": {
                                                "businessProcess": {},
                                                "valueDate": "2024-04-14"
                                            },
                                            "balance": {
                                                "currency": "AUD",
                                                "value": "8142.06"
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "initiatedTimestamp": "2024-06-19T16:22:32.259Z",
                                            "state": "SUCCESSFUL",
                                            "transaction": {
                                                "businessProcess": {},
                                                "valueDate": "2023-12-23"
                                            },
                                            "balance": {
                                                "currency": "AUD",
                                                "value": "2160.29"
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "node": {
                            "name": "Trust Account",
                            "openState": "OPEN",
                            "id": "ZWFkNzc4ZGItZDFiMy00MzkxLWFlM2ItYzRjYzdmOGU4MDBh",
                            "now": [
                                {
                                    "current": {
                                        "creditDebit": "DEBIT",
                                        "value": "2971.77"
                                    },
                                    "currency": "AUD",
                                    "available": {
                                        "creditDebit": "DEBIT",
                                        "value": "3802.20"
                                    }
                                }
                            ],
                            "transactionEntries": {
                                "edges": [
                                    {
                                        "node": {
                                            "initiatedTimestamp": "2024-06-19T12:33:18.548Z",
                                            "state": "SUCCESSFUL",
                                            "transaction": {
                                                "businessProcess": {},
                                                "valueDate": "2024-04-28"
                                            },
                                            "balance": {
                                                "currency": "AUD",
                                                "value": "4148.59"
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "initiatedTimestamp": "2024-06-19T05:36:52.626Z",
                                            "state": "SUCCESSFUL",
                                            "transaction": {
                                                "businessProcess": {
                                                    "TranType": "Payment",
                                                    "narrative": "Sample Text",
                                                    "entryReference": "Reference",
                                                    "accountServicerReference": "Reference",
                                                    "reference": "Reference",
                                                    "status": "Reference",
                                                    "unallocatable": true
                                                },
                                                "valueDate": "2023-10-02"
                                            },
                                            "balance": {
                                                "currency": "AUD",
                                                "value": "491.02"
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

## Mutation, Undo Allocation

### Request

Refer to: [unallocate]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#mutation-unallocate) for mutation details

```graphql
    mutation {
    unallocate(i: {unallocatableId: "UmVjZWlwdDo4Mjg3ODJmNjg4YWQ0ZjU2YjJiZGRiOTI0YjBiNjI2MjM1YjNiZTMxZjE1MTMwMWM1ZDYwZTNiYTk1MzI5MGM0"}) {
        commandId
    }
    }
```

### Response

-   Only commandId is returned as a response to any mutation, an enquiry must be made on the commandId to retrieve information pertaining to the mutation submission *


```json
{
    "commandId": "Q29tbWFuZDoyNzczOTVjYi1iOTAxLTRlYTYtOGU1NC0xNjhjMDc5NzA3YWQ="
}
```

Enquire on mutation based on commandId returned

```json
{
  node(id: "Q29tbWFuZDoyNzczOTVjYi1iOTAxLTRlYTYtOGU1NC0xNjhjMDc5NzA3YWQ=" ){
    __typename
    id
    ... on Command{action,state,step,invalid{field,reason}}
    ... on GenericCommand{
      action
      state
      step
      invalid{field,reason,__typename}
    }
  }
}
```

Enquiry response

```json
{
    "data": {
        "node": {
            "__typename": "GenericCommand",
            "id": "Q29tbWFuZDoyNzczOTVjYi1iOTAxLTRlYTYtOGU1NC0xNjhjMDc5NzA3YWQ=",
            "action": "ALLOCATE",
            "state": "SUCCESSFUL",
            "step": "END",
            "invalid": []
        }
    }
}
```

## Query Allocation Result

### Request

Refer to: [node]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-node) for query operations

```graphql
query QueryCommand($commandId: ID!) {
  node(id: $commandId) {
    __typename
    ... on GenericCommand {
      createdTimestamp
      id
      action
      state
      step
      invalid {field, reason}
    }
  }
}
```

Sample GraphQL Request variables

```graphQL
Query Variables :
{
    "commandId": "Q29tbWFuZDo2NWM1ZTlkMC1hMzFmLTQ5ODQtYmJmYi0wMWY0NzgxOTM2ZTI="
}
```

### Response

```json
{
    "data": {
        "node": {
            "__typename": "GenericCommand",
            "createdTimestamp": "2022-08-31T03:25:15.425Z",
            "id": "Q29tbWFuZDo2NWM1ZTlkMC1hMzFmLTQ5ODQtYmJmYi0wMWY0NzgxOTM2ZTI=",
            "action": "ALLOCATABLE-ALLOCATE",
            "state": "SUCCESSFUL",
            "step": "END",
            "invalid": []
        }
    }
}
```

## Query Undo Allocation Result
### Request

Refer to: [node]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-node) for query operations

```graphql
    query QueryCommand($commandId: ID!) {
    node(id: $commandId) {
        __typename
        ... on GenericCommand {
        createdTimestamp
        id
        action
        state
        step
        invalid {field, reason}
        }
    }
    }
```

Sample GraphQL Request variables

```graphql
Query Variables :
    {
        "commandId": "Q29tbWFuZDoyNjczYWFmOC04MzJhLTQ2MzEtYWRiMS1hZGJmOGQyNWU5Y2E="
    }
```

### Response

```json
{
    "data": {
        "node": {
            "__typename": "GenericCommand",
            "createdTimestamp": "2022-07-29T03:58:17.406Z",
            "id": "Q29tbWFuZDoyNjczYWFmOC04MzJhLTQ2MzEtYWRiMS1hZGJmOGQyNWU5Y2E=",
            "action": "UNALLOCATE",
            "state": "SUCCESSFUL",
            "step": "END",
            "invalid": []
        }
    }
}
```

## Query by CommandId

### Query Create Party

### Request

Refer to: [node]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-node) for query operations

Sample create party commandId based query

```graphql
query QueryCommand($commandId: ID!) {
  node(id: $commandId ){
    __typename
    id
    ... on PartyIndividualCreateCommand {
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



Query variables :

{
      "commandId": "Q29tbWFuZDoyZWZmNjQxOS1mNGFlLTQ1OGItOWQwMC04OWQwMWFkOWE1NzQ="
}
```

### Response

To determine the outcome of a GraphQL mutation an enquiry needs to be submitted to the platform. The query should be modified to return the fields and values that make sense to the requesting entity From the provided sample the following fields are returned

| Name     | Description                                                                                                 |
|----------|-------------------------------------------------------------------------------------------------------------|
| id       | Echo the commandId used for the query                                                                        |
| action   | The type of operation that initiated the command.                                                            |
| party    | Group containing information pertaining to the party                                                         |
| PartyID  | The identifier allocated to each party created on the platform. The ID must be used for any future actions that involve the party |
| reference| Unique customer side reference, if provided else null                                                        |
| roles    | Information on role(s)                                                                                       |
| invalid  | Information on failures or issues with object processing                                                     |
| state    | The outcome of the mutation, possible values: SUBMITTED, SUCCESSFUL, FAILED                                  |


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