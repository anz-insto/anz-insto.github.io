---
title: Transaction Queries
layout: default
navigation: acmc
toc: true
---

## Aggregate Payment Summary by Reference

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

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
                                                "value": "9739.97"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "1378.27"
                                            },
                                            "payment": {
                                                "status": "COMPLETE"
                                            },
                                            "paymentState": "REJECTED",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "8101.60",
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
                                                "value": "7840.56"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "1864.80"
                                            },
                                            "payment": {
                                                "status": "COMPLETE"
                                            },
                                            "paymentState": "COMPLETED_WITH_ERRORS",
                                            "totalAmount": {
                                                "creditDebit": "DEBIT",
                                                "value": "1983.99",
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
                                                "value": "3647.91"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "5069.40"
                                            },
                                            "payment": {
                                                "status": "COMPLETE"
                                            },
                                            "paymentState": "COMPLETED_WITH_ERRORS",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "5924.35",
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
                                                "value": "4127.61"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "9043.57"
                                            },
                                            "payment": {
                                                "status": "Complete"
                                            },
                                            "paymentState": "RECEIVED",
                                            "totalAmount": {
                                                "creditDebit": "DEBIT",
                                                "value": "4509.69",
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

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

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
                                            "id": "ZGVkNjUxNmUtOTc0OC00NWI2LWI1NWQtNTAyOTAzYTdlZDI0",
                                            "count": -2,
                                            "reference": "Sample Text",
                                            "successfulCount": 21,
                                            "failedCount": -89,
                                            "totalAmountFailed": {
                                                "value": "3008.03"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "684.60"
                                            },
                                            "payment": {
                                                "status": "COMPLETE"
                                            },
                                            "paymentState": "COMPLETED_WITH_ERRORS",
                                            "totalAmount": {
                                                "creditDebit": "DEBIT",
                                                "value": "2369.76",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "7121.24"
                                                            },
                                                            "account": {
                                                                "accountNumber": "37312268"
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
                                                                "value": "1065.52"
                                                            },
                                                            "account": {
                                                                "accountNumber": "83292918"
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
                                            "reference": "Sample Text",
                                            "successfulCount": -42,
                                            "failedCount": 76,
                                            "totalAmountFailed": {
                                                "value": "5065.26"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "9276.13"
                                            },
                                            "payment": {
                                                "status": "COMPLETED"
                                            },
                                            "paymentState": "COMPLETED_WITH_ERRORS",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "1215.50",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "9941.60"
                                                            },
                                                            "account": {
                                                                "accountNumber": "96953551"
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
                                                                "value": "2496.59"
                                                            },
                                                            "account": {
                                                                "accountNumber": "34740849"
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
                                            "reference": "Sample Text",
                                            "successfulCount": 14,
                                            "failedCount": 84,
                                            "totalAmountFailed": {
                                                "value": "3351.43"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "4735.77"
                                            },
                                            "payment": {
                                                "status": "COMPLETED"
                                            },
                                            "paymentState": "COMPLETED",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "8659.21",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "2947.02"
                                                            },
                                                            "account": {
                                                                "accountNumber": "23291956"
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
                                                                "value": "357.83"
                                                            },
                                                            "account": {
                                                                "accountNumber": "86500175"
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
                                            "reference": "Sample Text",
                                            "successfulCount": -12,
                                            "failedCount": -88,
                                            "totalAmountFailed": {
                                                "value": "5682.57"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "1490.29"
                                            },
                                            "payment": {
                                                "status": "COMPLETE"
                                            },
                                            "paymentState": "SUBMITTED",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "81.22",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "4995.16"
                                                            },
                                                            "account": {
                                                                "accountNumber": "02976513"
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
                                                                "value": "538.23"
                                                            },
                                                            "account": {
                                                                "accountNumber": "66547221"
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

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

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
                                            "id": "ZGVkNjUxNmUtOTc0OC00NWI2LWI1NWQtNTAyOTAzYTdlZDI0",
                                            "count": -2,
                                            "reference": "Sample Text",
                                            "successfulCount": 21,
                                            "failedCount": -89,
                                            "totalAmountFailed": {
                                                "value": "4916.22"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "6164.61"
                                            },
                                            "payment": {
                                                "status": "COMPLETE",
                                                "bookingDate": "2024-02-04",
                                                "valueDate": "2023-07-27",
                                                "createdTimestamp": "2024-06-19T13:33:35.062Z"
                                            },
                                            "paymentState": "COMPLETED_WITH_ERRORS",
                                            "totalAmount": {
                                                "creditDebit": "DEBIT",
                                                "value": "4810.02",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "9831.81"
                                                            },
                                                            "account": {
                                                                "accountNumber": "46453140"
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
                                                                "value": "2455.91"
                                                            },
                                                            "account": {
                                                                "accountNumber": "84448158"
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
                                                "value": "5875.25"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "5878.07"
                                            },
                                            "payment": {
                                                "status": "COMPLETE",
                                                "bookingDate": "2023-10-01",
                                                "valueDate": "2023-10-19",
                                                "createdTimestamp": "2024-06-19T19:02:57.851Z"
                                            },
                                            "paymentState": "COMPLETED_WITH_ERRORS",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "987.98",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "9079.64"
                                                            },
                                                            "account": {
                                                                "accountNumber": "95774621"
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
                                                                "value": "6683.18"
                                                            },
                                                            "account": {
                                                                "accountNumber": "38204681"
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
                                                "value": "4971.39"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "1489.43"
                                            },
                                            "payment": {
                                                "status": "COMPLETE",
                                                "bookingDate": "2024-04-12",
                                                "valueDate": "2024-02-14",
                                                "createdTimestamp": "2024-06-19T13:16:48.995Z"
                                            },
                                            "paymentState": "COMPLETED",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "2728.61",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "1382.37"
                                                            },
                                                            "account": {
                                                                "accountNumber": "97290542"
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
                                                                "value": "7946.92"
                                                            },
                                                            "account": {
                                                                "accountNumber": "87030439"
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
                                            "reference": "Reference",
                                            "successfulCount": -12,
                                            "failedCount": -88,
                                            "totalAmountFailed": {
                                                "value": "4079.58"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "1780.42"
                                            },
                                            "payment": {
                                                "status": "COMPLETE",
                                                "bookingDate": "2023-09-01",
                                                "valueDate": "2023-12-30",
                                                "createdTimestamp": "2024-06-20T09:09:50.988Z"
                                            },
                                            "paymentState": "SUBMITTED",
                                            "totalAmount": {
                                                "creditDebit": "CREDIT",
                                                "value": "1735.10",
                                                "currency": "AUD"
                                            },
                                            "instructions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "narrative": "Sample Text",
                                                            "amount": {
                                                                "value": "812.47"
                                                            },
                                                            "account": {
                                                                "accountNumber": "54333055"
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
                                                                "value": "5466.28"
                                                            },
                                                            "account": {
                                                                "accountNumber": "46715743"
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

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

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

## Response

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
                                            "id": "YjNhNDY0OTQtYzFiMy00YmM0LWJmOGUtMGZiZDgzZWNkOGYw",
                                            "count": -65,
                                            "paymentRequestState": "SUBMITTED",
                                            "reference": "Sample Text",
                                            "successfulCount": 8,
                                            "failedCount": 46,
                                            "paymentRequest": {
                                                "reference": "Sample Text",
                                                "status": "PENDING",
                                                "reason": "Awaited",
                                                "id": "MjViZjNiZmYtMTM5Zi00MTY5LWJhZDEtY2U3NzQxZGY2Yjcw"
                                            },
                                            "totalAmount": {
                                                "value": "4757.60"
                                            },
                                            "totalAmountFailed": {
                                                "value": "5117.48"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "3039.23"
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "id": "ZGFiOGQ5YjQtZWI0Mi00NDVkLThhNzYtMzVhYThlNGVhZTAw",
                                            "count": 78,
                                            "paymentRequestState": "PENDING",
                                            "reference": "Awaited",
                                            "successfulCount": 63,
                                            "failedCount": -14,
                                            "paymentRequest": {
                                                "reference": "Sample Text",
                                                "status": "COMPLETED_WITH_ERRORS",
                                                "reason": "Sample Reason",
                                                "id": "MzI1MmNjMzUtN2I4My00NTdlLWE5N2ItNDZmNDhkNTI4NzA1"
                                            },
                                            "totalAmount": {
                                                "value": "1988.99"
                                            },
                                            "totalAmountFailed": {
                                                "value": "5874.16"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "7741.30"
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
                                            "id": "Y2Q0YTc0ZjktZTk1OC00YmNlLTg2YTYtNWYzMGRjNjVhMWMw",
                                            "count": 1,
                                            "paymentRequestState": "PROCESSING",
                                            "reference": "Sample Text",
                                            "successfulCount": -99,
                                            "failedCount": -1,
                                            "paymentRequest": {
                                                "reference": "Sample Text",
                                                "status": "PENDING",
                                                "reason": "Awaited",
                                                "id": "NThmNzk4MTQtMTQ4NC00OWUxLWE5YjktYzI5MjYxZGU3NzVi"
                                            },
                                            "totalAmount": {
                                                "value": "6455.24"
                                            },
                                            "totalAmountFailed": {
                                                "value": "4473.64"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "2810.04"
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "id": "NDNiM2Y4ZmItNzdlYS00YzIzLTlkOTctNDYyZGU2ZmFhOTA5",
                                            "count": -48,
                                            "paymentRequestState": "PENDING",
                                            "reference": "Sample Text",
                                            "successfulCount": -36,
                                            "failedCount": -26,
                                            "paymentRequest": {
                                                "reference": "Sample Text",
                                                "status": "COMPLETED",
                                                "reason": "Sample Text",
                                                "id": "YTc1NGZkMGItZmFlMi00Nzg0LWJiMWEtYTViOWQ3YWE2ODJj"
                                            },
                                            "totalAmount": {
                                                "value": "6495.32"
                                            },
                                            "totalAmountFailed": {
                                                "value": "9057.12"
                                            },
                                            "totalAmountSuccessful": {
                                                "value": "9874.71"
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

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations


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

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

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