---
title: Client and Party Management
layout: default
navigation: acmc
toc: true
---

## Client and Party Management
Clients (Beneficiaries) are created as a unique Party with their own ID, which are linked to a Client Trust Account when it is opened. One beneficiary can be linked to multiple Client Trust Accounts simply by adding the ID at opening.

ACMC has implemented data validation rules for different beneficiary types (e.g. individual/trust/company) so that data integrity is upheld for reporting and other downstream processing. This assists with enforcing correct data provision at entry and reducing required remediation after the fact.

Where a beneficiary is linked to multiple Client Trust Accounts, any updates to the beneficiary detail is done to the unique Party profile only. The updated detail will be applicable to all linked account related reporting and other downstream processing.

### Create Individual Party Request

The sample can be used to create a Individual Party on the platform.

### Sample GraphQL Request

Refer to: [createPartyIndividual]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#mutation-createPartyIndividual) for mutation details

```graphql
    mutation  {
    createPartyIndividual(i:
    {
            customerId: "Q3VzdG9tZXI6NWQ4MzVmMzFjYzQzYWY3NGM3ZDU4MDMxMTg0MTZlYTMzNWFmMDQ0OGE2ODQxMTZkNmQwZTNkODQ4Njg0YjQ1Yw==",
            reference: "",
            dateOfBirth: "2000-01-01",
            gender: "M"
            familyName: "Dickens",
            givenName: "Charles",
            title: "Mr",
            residentialAddress: {
                line1: "1 Avenue Road",
                line2: "New Town",
                city: "Sydney",
                countryCode: "AU",
                postCode: "2000",
                state: "NSW"
            },
            roles: [
                BENEFICIARY
            ],
            selfCertified:{certificationDate:"2021-10-19"},
            taxResidencies: [
                {
                    tin: "123456782",
                    countryCode: "AU"
                }
            ]
    })
    {
        commandId
    }
    }
```

Refer to: createpartyindividualinput for schema definition.

### Response

All mutations to the platform will return a commandID value that can be used to enquire on the status and outcome of messages sent to ACMC

Sample GraphQL Response

```json
{
  "data": {
    "node": {
      "__typename": "CreatePartyCommand",
      "action": "PARTY-INDIVIDUAL-CREATE",
      "party": {         
        "__typename": "PartyIndividual",
        "PartyID": "UGFydHlJbmRpdmlkdWFsOjRmOTJmMWM5N2M3OWIxMjBjOGI0ZTk0MGFiZWFmMjVhYzRkMzhkNTE4ODc1NGU0ZGM0YjNjNWIxNTFkYzZkNTU=",
        "reference": "CMPINX102",
        "roles": [
          "BENEFICIARY"
        ],
        "givenName": "Charles",
        "familyName": "Dickens",
      },
      "invalid": [],
      "state": "SUCCESSFUL",
      "step": "END"
    }
  }
}
```

## Create Trust Party

### Request

Refer to: [createPartyTrust]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#mutation-createPartyTrust) for mutation details

```graphql
mutation  {
  createPartyTrust(i: {
        customerId: "Q3VzdG9tZXI6NWQ4MzVmMzFjYzQzYWY3NGM3ZDU4MDMxMTg0MTZlYTMzNWFmMDQ0OGE2ODQxMTZkNmQwZTNkODQ4Njg0YjQ1Yw==",
        fullName: "Zorro Family Trust",
        reference: "JG-ZFT-001",
        trustType: UNREGULATED_DOMESTIC_FAMILY,
        clientClassification: TRUST,
        countryOfEstablishment: "AU",
        businessNumber: "83 914 571 673",
        registeredOfficeAddress: {
            line1: "107 Collins St",
            line2: "Fishin Solicitors"
            city: "Melbourne",
            countryCode: "AU",
            postCode: "3000",
            state: "VIC"
        },
        taxResidencies: [
            {
                tin: "123456782",
                countryCode: "AU"
            }         
        ],
        roles: [BENEFICIARY]
  })
  {
    commandId
  }
}
```

## Response

```json
{
  "data": {
    "node": {
      "__typename": "CreatePartyCommand",
      "action": "PARTY-TRUST-CREATE",
      "party": {         
        "__typename": "PartyTrust",
        "PartyID": "UGFydHlUcnVzdDplYTgzNjQzYmZhMjk1MDUwMGMwMjhmMDA2YzBiNzdlNjljNjk1OTlkY2NlOGRhODAyNDVmZDljMTQ5ZmQ4N2Yx",
        "reference": "JG-ZFT-001",
        "roles": [
          "BENEFICIARY"
        ],
        "fullName": "Zorro Family Trust"
      },
      "invalid": [],
      "state": "SUCCESSFUL",
      "step": "END"
    }
  }
}
```

## Create Company Party Request

Refer to: [createPartyCompany]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#mutation-createPartyCompany) for mutation details

### Request

```graphql
mutation  {
  createPartyCompany(i: {
        customerId: "Q3VzdG9tZXI6NWQ4MzVmMzFjYzQzYWY3NGM3ZDU4MDMxMTg0MTZlYTMzNWFmMDQ0OGE2ODQxMTZkNmQwZTNkODQ4Njg0YjQ1Yw==",
        fullName: "Copernicus Pty Ltd",
        tradingName: "Copernicus",
        companyType: PUBLIC,
        reference: "COP123461",
        clientClassification: COMPANY,
        incorporationDate: "2000-01-01",
        incorporationCountry: "AU",
        companyNumber: "010 499 966",
        registeredOfficeAddress: {
            line1: "104 Collins St",
            city: "Melbourne",
            countryCode: "AU",
            postCode: "3000",
            state: "VIC"
        },
        alternateAddress:{
            line1: "PO Box 777",
            city: "Melbourne",
            countryCode: "AU",
            postCode: "3000",
            state: "VIC"
        },
        email: "info@copernicus.com.au"
        workPhone: "80088080",
        taxResidencies: [
            {
                tin: "123456782",
                countryCode: "AU"
            }
        ],
        roles: [BENEFICIARY]
  })
  {
    commandId
  }
}
```

Refer to: createpartycompanyinput for schema definition.

### Response

Refer to: [node]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-node) for query operations

```graphql
{
  "data": {
    "node": {
      "__typename": "CreatePartyCommand",
      "action": "PARTY-COMPANY-CREATE",
      "party": {
        "__typename": "PartyCompany",
        "PartyID": "UGFydHlDb21wYW55OjM5NzdhYjdlMzk3MGFkZjIyMjkzZTIyNDJlZTIzNDBhYjA0MjE5OGE3MWFmMzA2MjAzNGQ1OTlkZTUwNzdmNTc=",
        "reference": "COP123461",
        "roles": [
          "BENEFICIARY"
        ],
        "fullName": "Copernicus Pty Ltd"
      },
      "invalid": [],
      "state": "SUCCESSFUL",
      "step": "END"
    }
  }
}
```

## Query - Interrogate Party Create commandid

### Request

Refer to: [node]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-node) for query operations

```graphql
query QueryCommand($commandId: ID!) {
  node(id: $commandId ){
    __typename
    ... on PartyCompanyCreateCommand {
      action
      party{
         __typename,
        PartyID: id,
        reference,
        roles,
        ... on PartyIndividual{givenName,familyName}
        ... on PartyCompany{fullName}
        ... on PartyTrust{fullName}
      },
      invalid{field,reason},
      state,
      step
    }
  }
}

Query variables :

{
      "commandId": "Q29tbWFuZDoyZWZmNjQxOS1mNGFlLTQ1OGItOWQwMC04OWQwMWFkOWE1NzQ="
}
```

### Individual Result

```json
{
  "data": {
    "node": {
      "__typename": "CreatePartyCommand",
      "action": "PARTY-INDIVIDUAL-CREATE",
      "party": {
        "id": "UGFydHlJbmRpdmlkdWFsOjRmOTJmMWM5N2M3OWIxMjBjOGI0ZTk0MGFiZWFmMjVhYzRkMzhkNTE4ODc1NGU0ZGM0YjNjNWIxNTFkYzZkNTU=",
        "reference": "",
        "roles": [
          "BENEFICIARY"
        ],
        "givenName": "Charles",
        "familyName": "Dickens",
        "__typename": "PartyIndividual"
      },
      "invalid": [],
      "state": "SUCCESSFUL",
      "step": "END"
    }
  }
}
```

### Trust Result

```graphql
{
  "data": {
    "node": {
      "__typename": "CreatePartyCommand",
      "action": "PARTY-TRUST-CREATE",
      "party": {
        "id": "UGFydHlUcnVzdDplYTgzNjQzYmZhMjk1MDUwMGMwMjhmMDA2YzBiNzdlNjljNjk1OTlkY2NlOGRhODAyNDVmZDljMTQ5ZmQ4N2Yx",
        "reference": "JG-ZFT-001",
        "roles": [
          "BENEFICIARY"
        ],
        "fullName": "Zorro Family Trust",
        "__typename": "PartyTrust"
      },
      "invalid": [],
      "state": "SUCCESSFUL",
      "step": "END"
    }
  }
}
```

### Company Result

```json
{
  "data": {
    "node": {
      "__typename": "CreatePartyCommand",
      "action": "PARTY-COMPANY-CREATE",
      "party": {
        "id": "UGFydHlDb21wYW55OjM5NzdhYjdlMzk3MGFkZjIyMjkzZTIyNDJlZTIzNDBhYjA0MjE5OGE3MWFmMzA2MjAzNGQ1OTlkZTUwNzdmNTc=",
        "reference": "COP123461",
        "roles": [
          "BENEFICIARY"
        ],
        "fullName": "Copernicus Pty Ltd",
        "__typename": "PartyCompany"
      },
      "invalid": [],
      "state": "SUCCESSFUL",
      "step": "END"
    }
  }
}
```

## Query - Client detail Individual

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
  bank {
    customers {
      edges {
        node {
          parties(
            filter: {
              or: [
                {
                  familyNameContains: ""
                  givenNameContains: "Eric"
                  partyReferenceExact: null
                }
              ]
            }
          ) {
            edges {
              node {
                ... on PartyIndividual {
                  title
                  givenName
                  otherGivenNames
                  familyName
                  reference
                  dateOfBirth
                  gender
                  linkedAccounts {
                    aggregates {
                      count
                    }
                  }
                  residentialAddress {line1, line2, city, state, postCode, countryCode}
                  alternateAddress {line1, line2, city, state, postCode, countryCode}
                  taxResidencies {countryCode, tin, tinMissingReason}
                  PartyId: id
                }
                roles
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
                            "parties": {
                                "edges": [
                                    {
                                        "node": {
                                            "title": "Ms.",
                                            "givenName": "Zac",
                                            "otherGivenNames": [
                                                "Noel",
                                                "Martin"
                                            ],
                                            "familyName": "Mitchell",
                                            "reference": "Sample Text",
                                            "dateOfBirth": "2023-07-06",
                                            "gender": "F",
                                            "linkedAccounts": {
                                                "aggregates": {
                                                    "count": -96
                                                }
                                            },
                                            "residentialAddress": {
                                                "line1": "5023 Matilda Crest",
                                                "line2": "Apt. 873",
                                                "city": "East Finncester",
                                                "state": "TAS",
                                                "postCode": "8139",
                                                "countryCode": "AU"
                                            },
                                            "alternateAddress": {
                                                "line1": "81 Hamish Circle",
                                                "line2": "Suite 843",
                                                "city": "New Hugo",
                                                "state": "QLD",
                                                "postCode": "1155",
                                                "countryCode": "AU"
                                            },
                                            "taxResidencies": [
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "123 456 782",
                                                    "tinMissingReason": "PENSIONER"
                                                },
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "123 456 782",
                                                    "tinMissingReason": "NOT_PROVIDED"
                                                }
                                            ],
                                            "PartyId": "NWExNmM5ZWMtNDJkZS00YTk5LTg4ZjktOWVhZGY1Mzk3MTMz",
                                            "roles": [
                                                "CONTROLLING_PERSON"
                                            ]
                                        }
                                    },
                                    {
                                        "node": {
                                            "title": "Miss",
                                            "givenName": "Tyler",
                                            "otherGivenNames": [
                                                "Paul",
                                                "Ringo"
                                            ],
                                            "familyName": "Mcdermott",
                                            "reference": "Sample Text",
                                            "dateOfBirth": "2023-06-22",
                                            "gender": "F",
                                            "linkedAccounts": {
                                                "aggregates": {
                                                    "count": 38
                                                }
                                            },
                                            "residentialAddress": {
                                                "line1": "81 Wilkinson Street",
                                                "line2": "Apt. 302",
                                                "city": "Lakinton",
                                                "state": "VIC",
                                                "postCode": "6967",
                                                "countryCode": "AU"
                                            },
                                            "alternateAddress": {
                                                "line1": "2003 Callum Grove",
                                                "line2": "Apt. 523",
                                                "city": "South Codycester",
                                                "state": "NSW",
                                                "postCode": "4665",
                                                "countryCode": "AU"
                                            },
                                            "taxResidencies": [
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "123 456 782",
                                                    "tinMissingReason": "NO_TAX_RETURN_REQUIRED"
                                                },
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "TIN xxxxx",
                                                    "tinMissingReason": "PENSION_OR_BENEFITS"
                                                }
                                            ],
                                            "PartyId": "ZThmMTM0OWQtMzA1ZS00MTUxLWFhZjktYzdlMDIyZTcyNWFm",
                                            "roles": [
                                                "CONTROLLING_PERSON"
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "node": {
                            "parties": {
                                "edges": [
                                    {
                                        "node": {
                                            "title": "Dr.",
                                            "givenName": "Alex",
                                            "otherGivenNames": [
                                                "John",
                                                "George"
                                            ],
                                            "familyName": "Cronin",
                                            "reference": "Sample Text",
                                            "dateOfBirth": "2024-05-21",
                                            "gender": "F",
                                            "linkedAccounts": {
                                                "aggregates": {
                                                    "count": -99
                                                }
                                            },
                                            "residentialAddress": {
                                                "line1": "279 Lachlan Parkway",
                                                "line2": "Apt. 959",
                                                "city": "North Hayden",
                                                "state": "ACT",
                                                "postCode": "9737",
                                                "countryCode": "AU"
                                            },
                                            "alternateAddress": {
                                                "line1": "9572 Leo Circuit",
                                                "line2": "Apt. 850",
                                                "city": "Lake Tahliashire",
                                                "state": "TAS",
                                                "postCode": "6160",
                                                "countryCode": "AU"
                                            },
                                            "taxResidencies": [
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "123 456 782",
                                                    "tinMissingReason": "PENSIONER"
                                                },
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "123 456 782",
                                                    "tinMissingReason": "PENSIONER"
                                                }
                                            ],
                                            "PartyId": "NDMzM2IzNDgtYzRmYy00ZjIyLWI1NTEtMGVlYmFhYzdhOTg2",
                                            "roles": [
                                                "CONTROLLING_PERSON"
                                            ]
                                        }
                                    },
                                    {
                                        "node": {
                                            "title": "Ms.",
                                            "givenName": "Dylan",
                                            "otherGivenNames": [
                                                "Etta",
                                                "Tina"
                                            ],
                                            "familyName": "Collins",
                                            "reference": "Sample Text",
                                            "dateOfBirth": "2024-02-17",
                                            "gender": "F",
                                            "linkedAccounts": {
                                                "aggregates": {
                                                    "count": 47
                                                }
                                            },
                                            "residentialAddress": {
                                                "line1": "195 Greenfelder Circle",
                                                "line2": "Suite 876",
                                                "city": "West Oliviahaven",
                                                "state": "TAS",
                                                "postCode": "4086",
                                                "countryCode": "AU"
                                            },
                                            "alternateAddress": {
                                                "line1": "973 Zachary Court",
                                                "line2": "Apt. 685",
                                                "city": "Port Aliceside",
                                                "state": "SA",
                                                "postCode": "6096",
                                                "countryCode": "AU"
                                            },
                                            "taxResidencies": [
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "123 456 782",
                                                    "tinMissingReason": "PENSIONER"
                                                },
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "123 456 782",
                                                    "tinMissingReason": "NON_RESIDENT"
                                                }
                                            ],
                                            "PartyId": "ZTA4NGVmYjEtYzc1NC00ZDVhLTk5MGEtYjJjOWYxY2IyYTc1",
                                            "roles": [
                                                "BENEFICIARY"
                                            ]
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

### Update Individual Party

## Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
  bank {
    customers {
      edges {
        node {
          parties(
            filter: {
              or: [
                {
                  familyNameContains: ""
                  givenNameContains: "Eric"
                  partyReferenceExact: null
                }
              ]
            }
          ) {
            edges {
              node {
                ... on PartyIndividual {
                  title
                  givenName
                  otherGivenNames
                  familyName
                  reference
                  dateOfBirth
                  gender
                  linkedAccounts {
                    aggregates {
                      count
                    }
                  }
                  residentialAddress {line1, line2, city, state, postCode, countryCode}
                  alternateAddress {line1, line2, city, state, postCode, countryCode}
                  taxResidencies {countryCode, tin, tinMissingReason}
                  PartyId: id
                }
                roles
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
              "parties": {
                "edges": [
                  {
                    "node": {
                      "fullName": "Steve's Trustworthy Stockbrokers",
                      "companyType": "PUBLIC",
                      "businessNumber": null,
                      "clientClassification": "COMPANY",
                      "companyNumber": "004749982",
                      "incorporationDate": "2017-01-19",
                      "incorporationCountry": "AU",
                      "stockExchange": null,
                      "email": null,
                      "linkedAccounts": {
                        "aggregates": {
                          "count": 0
                        }
                      },
                      "registeredOfficeAddress": {
                        "line1": "1 High Road",
                        "line2": null,
                        "city": "Melbourne",
                        "state": "VIC",
                        "postCode": "3000",
                        "countryCode": "AU"
                      },
                      "alternateAddress": null,
                      "taxResidencies": [
                        {
                          "countryCode": "AU",
                          "tin": "*********",
                          "tinMissingReason": null
                        }
                      ],
                      "PartyId": "UGFydHlDb21wYW55OjllZjAzM2RmZDMwNTZiYjMxYmYyOTM2OTFmOTBkMjAwNWQyMzJkMjg3NDY4YTZjN2Q1NWM0OGNkN2RmMGI1YzQ=",
                      "roles": [
                        "TRUSTEE"
                      ],
                      "reference": "TrustySteve"
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

## Query - Any Client by variable

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
query QueryCustomerPartyId($name: String!) {
  bank {
    customers {
      edges {
        node {
          parties(
            filter: {
              or: [
                { givenNameContains: $name }
                { familyNameContains: $name }
                { companyFullNameContains: $name }
                { trustFullNameContains: $name }
              ]
            }
          ) {
            edges {
              node {
                __typename
                id
                ... on PartyIndividual {
                  gender
                  givenName
                  otherGivenNames
                  familyName
                  dateOfBirth
                }
                ... on PartyCompany {CompanyName: fullName}
                ... on PartyTrust {TrustName: fullName}
              }
            }
          }
        }
      }
    }
  }
}
```

```graphql
Query Variable :

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
                            "parties": {
                                "edges": [
                                    {
                                        "node": {
                                            "__typename": "PartyIndividual",
                                            "id": "Y2RlODY3NmYtN2IxNS00ZmM4LWJiYWEtNWJjY2JmMTQxZWY1",
                                            "gender": "F",
                                            "givenName": "Jesse",
                                            "otherGivenNames": [
                                                "Sonia",
                                                "Sinead"
                                            ],
                                            "familyName": "O'Conner",
                                            "dateOfBirth": "2023-10-06"
                                        }
                                    },
                                    {
                                        "node": {
                                            "__typename": "PartyIndividual",
                                            "id": "MmU2YmU0N2MtNDNhZS00NzI3LWEwNTctNDdiNmI1OThkNzJk",
                                            "gender": "F",
                                            "givenName": "Sophia",
                                            "otherGivenNames": [
                                                "Caitlin",
                                                "Alexandra"
                                            ],
                                            "familyName": "Farrell",
                                            "dateOfBirth": "2023-12-20"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "node": {
                            "parties": {
                                "edges": [
                                    {
                                        "node": {
                                            "__typename": "PartyIndividual",
                                            "id": "MjhhN2Y1YmEtN2UzNi00ZGEyLWI2ZDYtMzliM2NiNDU4ZjVh",
                                            "gender": "F",
                                            "givenName": "Jake",
                                            "otherGivenNames": [
                                                "Shane",
                                                "Mark"
                                            ],
                                            "familyName": "Walter",
                                            "dateOfBirth": "2023-12-17"
                                        }
                                    },
                                    {
                                        "node": {
                                            "__typename": "PartyIndividual",
                                            "id": "NjUzODJmNWUtZTU4ZC00MmVkLWFiMDktYmQ1NjJjYjJlMDE4",
                                            "gender": "F",
                                            "givenName": "Connor",
                                            "otherGivenNames": [
                                                "Jane",
                                                "Sarah"
                                            ],
                                            "familyName": "Nguyen",
                                            "dateOfBirth": "2023-10-15"
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

## Query - Client detail trust

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
  bank {
    customers {
      edges {
        node {
          parties(
            filter: { trustFullNameContains: "", partyReferenceContains: "" }
          ) {
            edges {
              node {
                ... on PartyTrust {
                  fullName
                  trustType
                  businessNumber
                  clientClassification
                  countryOfEstablishment
                  email
                  linkedAccounts {
                    aggregates {
                      count
                    }
                  }
                  registeredOfficeAddress {line1, line2, city, state, postCode, countryCode}
                  alternateAddress {line1, line2, city, state, postCode, countryCode}
                  taxResidencies {countryCode, tin, tinMissingReason}
                  workPhone
                  PartyId: id
                }
                roles
                reference
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
                            "parties": {
                                "edges": [
                                    {
                                        "node": {
                                            "roles": [
                                                "CONTROLLING_PERSON"
                                            ],
                                            "reference": "Sample Text"
                                        }
                                    },
                                    {
                                        "node": {
                                            "roles": [
                                                "BENEFICIARY"
                                            ],
                                            "reference": "Sample Text"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "node": {
                            "parties": {
                                "edges": [
                                    {
                                        "node": {
                                            "roles": [
                                                "TRUSTEE"
                                            ],
                                            "reference": "Sample Text"
                                        }
                                    },
                                    {
                                        "node": {
                                            "roles": [
                                                "CONTROLLING_PERSON"
                                            ],
                                            "reference": "Sample Text"
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

## Query - Any Client by variable

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
query QueryCustomerPartyId($name: String!) {
  bank {
    customers {
      edges {
        node {
          parties(
            filter: {
              or: [
                { givenNameContains: $name }
                { familyNameContains: $name }
                { companyFullNameContains: $name }
                { trustFullNameContains: $name }
              ]
            }
          ) {
            edges {
              node {
                __typename
                id
                ... on PartyIndividual {
                  gender
                  givenName
                  otherGivenNames
                  familyName
                  dateOfBirth
                }
                ... on PartyCompany {CompanyName: fullName}
                ... on PartyTrust {TrustName: fullName}
              }
            }
          }
        }
      }
    }
  }
}
Query Variable :

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
              "parties": {
                "edges": [
                  {
                    "node": {                       
                        "__typename": "PartyIndividual"
                        "id": "UGFydHlJbmRpdmlkdWFsOjZjMGYxODhiZjcwZjJkNDVkZDNiMWQ3OGMxYzRhZDUwZmVlODQ1NjJhMzJkZGZiMWE0NjY3MGJjNmQ3Y2M3YzE=",
                        "gender": null, 
                        "givenName": "Barry",
                        "otherGivenNames": [],
                        "familyName": "Crocker",
                        "dateOfBirth": null
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

## Update of client detail Individual

### Request

Refer to: [editPartyIndividual]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#mutation-editPartyIndividual) for mutation details

```graphql
mutation ($editindividual: EditPartyIndividualInput!) {
  editPartyIndividual (i: $editindividual) {
    commandId
  }
}
``` 

```graphql
Query Variables :
{
    "editindividual": {
        "id": "UGFydHlJbmRpdmlkdWFsOjQ4ODdmOGNjY2NlZjY1YTVlNzI3ODI0MzYzOTNjMmZkYjRmN2MzYTE0YTcxMzI5OWFkZWIwNDY5ZWUxMjgzODc=",
        "givenName": "Marcus"
    }
}
```

### Response

```json
{
    "data": {
        "editPartyIndividual": {
            "commandId": "Q29tbWFuZDo3YTRhOWMwYi03MGYzLTQ2OTctYWY0My0zOWYyZmQzNDA3Y2E="
        }
    }
}
```

## Open Account

### Request

Refer to: [openAccount]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#mutation-openAccount) for mutation details

```graphql
mutation {
  openAccount (i: {
    name: "Customer ITF J Smith"
    reference: "JSmith12"
    customerId: "Q3VzdG9tZXI6NWQ4MzVmMzFjYzQzYWY3NGM3ZDU4MDMxMTg0MTZlYTMzNWFmMDQ0OGE2ODQxMTZkNmQwZTNkODQ4Njg0YjQ1Yw=="
    product: "UHJvZHVjdDowZjEwMjVjOTY4ZWUwMWMyMDU5ZWQ0MTgwZTMwNjNjMThhNmQ1ZWE5ZGMyMTk3YmViNDEwZTMzNTAwMTI4M2M4"
    parties:[
      {
        partyId: "UGFydHlJbmRpdmlkdWFsOjRmOTJmMWM5N2M3OWIxMjBjOGI0ZTk0MGFiZWFmMjVhYzRkMzhkNTE4ODc1NGU0ZGM0YjNjNWIxNTFkYzZkNTU=",
        roles: [BENEFICIARY]
      }
      ]
  })
  {
    commandId
  }
}
```

## Response

```json
{
  "data": {
    "openAccount": {
      "commandId": "Q29tbWFuZDo0OTkxNTVlYS1mM2QzLTQ2MjktOTYyZS01MWE0MzMwZDc0NGQ="
    }
  }
}
```

## Interrogate CommandID

###Request

The sample can be used to to enquire on the status and outcome of messages sent to ACMC.

Refer to: [node]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-node) for query operations

```graphql
query QueryCommand($comId: ID!) {
  node(id: $comId ){
    __typename
    ... on OpenAccountCommand{
      action,
      account{
        id,
        accountNumber,
        bankCode,
        reference
      },
         createdTimestamp,
      invalid{field, reason},
      state,
      step
    }
  }
}
```

### Response

This sample shows the response to Account number UPDATE

```json
{
  "data": {
    "node": {
      "__typename": "OpenAccountCommand",
      "action": "OPEN-ACCOUNT",
      "account": {
        "accountNumber": "000001035",
        "bankCode": null,
        "reference": "JSmith12",
        "id": "QWNjb3VudDo4MjI1MjY0YzRkZDNkNjExZjA5NGIyZjk0MDljY2U1NmFiOTU2NDJlYjBjMDk5OTAyYWIwMzY1ZTYyODA1YmE2"
      },
      "state": "SUCCESSFUL",
      "invalid": [],
      "step": "END"
    }
  }
}
```