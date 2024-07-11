---
layout: default
title: General Queries
navigation: acmc
toc: true
---

# Sample Queries

## Query Parties by Role (Beneficiary)

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
bank
  { customers {    
     edges {
      node {
        parties (filter: {hasRoles: [BENEFICIARY]})
        {
        edges{
        node{
            ... on PartyIndividual {
      title,
      givenName,
      familyName,
      PartyId: id},
    ... on PartyCompany {
      fullName
      PartyId: id
    } 

        roles}
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
                                            "title": "Mrs.",
                                            "givenName": "Lola",
                                            "familyName": "O'Hara",
                                            "PartyId": "N2FkYjUzMzUtYzNjMy00ZjY0LTgwYjItMjc5Y2E1NDg1NjVj",
                                            "roles": [
                                                "CONTROLLING_PERSON"
                                            ]
                                        }
                                    },
                                    {
                                        "node": {
                                            "title": "Dr.",
                                            "givenName": "Xavier",
                                            "familyName": "Kulas",
                                            "PartyId": "YWMxOWYyMjEtNjgzZi00MTNjLTg1YjUtMTlhOWJhM2JmNmEw",
                                            "roles": [
                                                "TRUSTEE"
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
                                            "title": "Ms.",
                                            "givenName": "Zoe",
                                            "familyName": "Dickinson",
                                            "PartyId": "Yzk5Zjg3NmEtODZhZS00MTEwLWIzZDktYTEzMjQ3MmU3NDNk",
                                            "roles": [
                                                "TRUSTEE"
                                            ]
                                        }
                                    },
                                    {
                                        "node": {
                                            "title": "Miss",
                                            "givenName": "Nate",
                                            "familyName": "Ross",
                                            "PartyId": "NTJjZmE2MDItZGU2Yi00M2ExLTg1ZjgtMDM4NWIxZTY0MWNl",
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

## Query Parties - page 1

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
bank
  { customers {    
     edges {
      node {
    id
    fullName
        parties (first: 3 orderBy: {sort: FAMILY_NAME direction: ASC} )
        {pageInfo
            {startCursor
            hasNextPage
            hasPreviousPage
            endCursor}
        edges{
        node{
    ... on PartyIndividual {givenName,familyName}
    ... on PartyCompany{fullName}
         roles,id}
        }
        }          
    }
    }
    }
  }
}
```

### Response for page 1
The value for "first:" can go up to 1000

```json
{
    "data": {
        "bank": {
            "customers": {
                "edges": [
                    {
                        "node": {
                            "id": "OWFhMDAzNDgtNTMzYi00NTczLWIzYzctMTM5OWQzM2UyODg3",
                            "fullName": "Jane Doe",
                            "parties": {
                                "pageInfo": {
                                    "startCursor": "OWFhMDAzNDgtNTMzYi00NTczLWIzYzctMTM5OWQzM2UyODg3AABB",
                                    "hasNextPage": false,
                                    "hasPreviousPage": false,
                                    "endCursor": "OWFhMDAzNDgtNTMzYi00NTczLWIzYzctMTM5OWQzM2UyODg3CCDD"
                                },
                                "edges": [
                                    {
                                        "node": {
                                            "givenName": "Lucy",
                                            "familyName": "Cole",
                                            "roles": [
                                                "BENEFICIARY"
                                            ],
                                            "id": "MGFjZDdiNzMtNDAyMi00YWM0LTg3ZGEtNDA0M2IxMzUwOTdi"
                                        }
                                    },
                                    {
                                        "node": {
                                            "givenName": "Jackson",
                                            "familyName": "Weber",
                                            "roles": [
                                                "TRUSTEE"
                                            ],
                                            "id": "ODM3YzU1YjItNTUzNC00YzA4LWEwNjMtYTlkNmNmNTNmNGE2"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "node": {
                            "id": "ZjYzNTZlZDMtMGIyYS00YTllLThmOTEtNmQwYjRjNjJjODky",
                            "fullName": "Jane Doe",
                            "parties": {
                                "pageInfo": {
                                    "startCursor": "ZjYzNTZlZDMtMGIyYS00YTllLThmOTEtNmQwYjRjNjJjODkyAABB",
                                    "hasNextPage": true,
                                    "hasPreviousPage": true,
                                    "endCursor": "ZjYzNTZlZDMtMGIyYS00YTllLThmOTEtNmQwYjRjNjJjODkyCCDD"
                                },
                                "edges": [
                                    {
                                        "node": {
                                            "givenName": "Lincoln",
                                            "familyName": "Mccullough",
                                            "roles": [
                                                "BENEFICIARY"
                                            ],
                                            "id": "ZDg4ODhhMTYtNTI1Mi00NzE3LTg2NTktMTVmNjg1M2RlZWVl"
                                        }
                                    },
                                    {
                                        "node": {
                                            "givenName": "Audrey",
                                            "familyName": "Owen",
                                            "roles": [
                                                "CONTROLLING_PERSON"
                                            ],
                                            "id": "Y2MzOTA2M2UtMjJmNS00N2MwLTk3ODktMWNiYmU5ZTMzNTYx"
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

## Query Parties - page 2

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

Use the "endCursor" value from the results for Page 1 as the parameter for "after:" if the "hasNextPage" value = true.

```graphql
{
bank
  { customers {    
     edges {
      node {
        parties (first: 3 orderBy: {sort: FAMILY_NAME direction: ASC}
        after: "ezpHXzE2OCAiVUdGeWRIbEpibVJwZG1sa2RXRnNPamMxTnpneFlqWm1ZekF3TldNeU5tUTJNV0kzTkdRd1pHUmhZMlF4TjJRNE5UbG1aVFF4T0dKaE1UVTRaRFF5T0RKaE4yWTRNV1V3WVRsa09UWXhOak09IiwgOkdJVkVOX05BTUUgIkJyaWFuIiwgOkZBTUlMWV9OQU1FICJEZWF0aCIsIDpDT01QQU5ZX0ZVTExfTkFNRSBuaWwsIDpUUlVTVF9GVUxMX05BTUUgbmlsLCA6VFJBRElOR19OQU1FIG5pbH0=")
        {pageInfo
            {startCursor
            hasNextPage
            hasPreviousPage
            endCursor}
        edges{
        node{
            ... on PartyIndividual {givenName,familyName}
    ... on PartyCompany{fullName}
        roles,id}
        }
        }          
    }
    }
    }
  }
}
```

### Response for page 2

```json
{
    "data": {
        "bank": {
            "customers": {
                "edges": [
                    {
                        "node": {
                            "parties": {
                                "pageInfo": {
                                    "startCursor": "NGM5MzcyYTEtMWZhNy00ZThjLWEzZjctNzQ1Y2ZiMmIwN2U2AABB",
                                    "hasNextPage": false,
                                    "hasPreviousPage": true,
                                    "endCursor": "NGM5MzcyYTEtMWZhNy00ZThjLWEzZjctNzQ1Y2ZiMmIwN2U2CCDD"
                                },
                                "edges": [
                                    {
                                        "node": {
                                            "givenName": "Archie",
                                            "familyName": "Davis",
                                            "roles": [
                                                "CONTROLLING_PERSON"
                                            ],
                                            "id": "NGM5MzcyYTEtMWZhNy00ZThjLWEzZjctNzQ1Y2ZiMmIwN2U2"
                                        }
                                    },
                                    {
                                        "node": {
                                            "givenName": "Bailey",
                                            "familyName": "Monahan",
                                            "roles": [
                                                "BENEFICIARY"
                                            ],
                                            "id": "YTBhZTVhZDMtNjcyOS00YzI3LWE3ZGEtNDIyMzRhMTEzZDJm"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "node": {
                            "parties": {
                                "pageInfo": {
                                    "startCursor": "YzM2N2ZiNjctZDJlNS00MGUyLTgwMDEtN2NlYTIyMjAwOGU1AABB",
                                    "hasNextPage": false,
                                    "hasPreviousPage": true,
                                    "endCursor": "YzM2N2ZiNjctZDJlNS00MGUyLTgwMDEtN2NlYTIyMjAwOGU1CCDD"
                                },
                                "edges": [
                                    {
                                        "node": {
                                            "givenName": "Patrick",
                                            "familyName": "Alexander",
                                            "roles": [
                                                "BENEFICIARY"
                                            ],
                                            "id": "YzM2N2ZiNjctZDJlNS00MGUyLTgwMDEtN2NlYTIyMjAwOGU1"
                                        }
                                    },
                                    {
                                        "node": {
                                            "givenName": "Callum",
                                            "familyName": "Rice-Barton",
                                            "roles": [
                                                "CONTROLLING_PERSON"
                                            ],
                                            "id": "ODAwMzI5NjktNmMwMC00ODUwLWExZDctZjc3YTYzNWI5ZmZj"
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

## Query Party Details - Individual

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
bank
  { customers {    
     edges {
      node {
  parties(filter:  {or:[{familyNameContains:"",givenNameContains: "Eric",partyReferenceExact:null}]} )
        {
        edges{
        node{

            ... on PartyIndividual {
      title,
      givenName,
      otherGivenNames
      familyName,
      reference,
      dateOfBirth
      gender
      linkedAccounts{aggregates{count}}
      residentialAddress{line1,line2,city,state,postCode,countryCode}
      alternateAddress{line1,line2,city,state,postCode,countryCode}
      taxReportingType
      taxResidencies{countryCode,tin,tinMissingReason}
      PartyId: id}

    roles
    selfCertified{certificationDate}
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
                                            "title": "Miss",
                                            "givenName": "Scarlett",
                                            "otherGivenNames": [
                                                "Anne",
                                                "Katherine"
                                            ],
                                            "familyName": "Hansen",
                                            "reference": "Reference",
                                            "dateOfBirth": "2024-04-02",
                                            "gender": "F",
                                            "linkedAccounts": {
                                                "aggregates": {
                                                    "count": -68
                                                }
                                            },
                                            "residentialAddress": {
                                                "line1": "5884 Abbey Crescent",
                                                "line2": "Suite 173",
                                                "city": "Kirlinfort",
                                                "state": "QLD",
                                                "postCode": "3089",
                                                "countryCode": "AU"
                                            },
                                            "alternateAddress": {
                                                "line1": "38 Alice Pass",
                                                "line2": "Suite 119",
                                                "city": "Lake Sebastianworth",
                                                "state": "SA",
                                                "postCode": "9857",
                                                "countryCode": "AU"
                                            },
                                            "taxReportingType": "INDIVIDUAL",
                                            "taxResidencies": [
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "TIN",
                                                    "tinMissingReason": "NON_RESIDENT"
                                                },
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "TIN",
                                                    "tinMissingReason": "PENSIONER"
                                                }
                                            ],
                                            "PartyId": "NThhYWUyOTQtOGVkOS00ODYwLWJmYTYtYWY1OTA0YzA5NWUw",
                                            "roles": [
                                                "TRUSTEE"
                                            ],
                                            "selfCertified": {
                                                "certificationDate": "2023-09-13"
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "title": "Mr.",
                                            "givenName": "Blake",
                                            "otherGivenNames": [
                                                "John",
                                                "Shane"
                                            ],
                                            "familyName": "Mills",
                                            "reference": "Reference",
                                            "dateOfBirth": "2023-12-02",
                                            "gender": "F",
                                            "linkedAccounts": {
                                                "aggregates": {
                                                    "count": 45
                                                }
                                            },
                                            "residentialAddress": {
                                                "line1": "6278 Eve Pass",
                                                "line2": "Suite 562",
                                                "city": "East Samuel",
                                                "state": "WA",
                                                "postCode": "7600",
                                                "countryCode": "AU"
                                            },
                                            "alternateAddress": {
                                                "line1": "8229 Jones Square",
                                                "line2": "Suite 469",
                                                "city": "Bogancester",
                                                "state": "WA",
                                                "postCode": "2388",
                                                "countryCode": "AU"
                                            },
                                            "taxReportingType": "INDIVIDUAL",
                                            "taxResidencies": [
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "TIN",
                                                    "tinMissingReason": "PENSION_OR_BENEFITS"
                                                },
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "TIN",
                                                    "tinMissingReason": "NO_TAX_RETURN_REQUIRED"
                                                }
                                            ],
                                            "PartyId": "MWYyZjVhMzUtMmUxMC00OWViLWEyYjAtZDM3ZjQ3ZTcxOGNi",
                                            "roles": [
                                                "CONTROLLING_PERSON"
                                            ],
                                            "selfCertified": {
                                                "certificationDate": "2023-12-15"
                                            }
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
                                            "title": "Mr.",
                                            "givenName": "Abby",
                                            "otherGivenNames": [
                                                "Alex",
                                                "J"
                                            ],
                                            "familyName": "Grimes",
                                            "reference": "Sample Text",
                                            "dateOfBirth": "2024-01-02",
                                            "gender": "F",
                                            "linkedAccounts": {
                                                "aggregates": {
                                                    "count": 87
                                                }
                                            },
                                            "residentialAddress": {
                                                "line1": "873 Gleason Grove",
                                                "line2": "Apt. 270",
                                                "city": "East Annabellestead",
                                                "state": "NT",
                                                "postCode": "8234",
                                                "countryCode": "AU"
                                            },
                                            "alternateAddress": {
                                                "line1": "37 Kohler Station St",
                                                "line2": "Suite 527",
                                                "city": "O'Connerview",
                                                "state": "VIC",
                                                "postCode": "9641",
                                                "countryCode": "AU"
                                            },
                                            "taxReportingType": "INDIVIDUAL",
                                            "taxResidencies": [
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "TIN",
                                                    "tinMissingReason": "APPLIED_FOR"
                                                },
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "TIN",
                                                    "tinMissingReason": "UNOBTAINABLE"
                                                }
                                            ],
                                            "PartyId": "ZjcwNzRlODItNDJlMi00ZDQwLTk0YWItYTMyZDJiMmQ3Nzgz",
                                            "roles": [
                                                "BENEFICIARY"
                                            ],
                                            "selfCertified": {
                                                "certificationDate": "2023-12-26"
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "title": "Dr.",
                                            "givenName": "Alexander",
                                            "otherGivenNames": [
                                                "James",
                                                "Antony"
                                            ],
                                            "familyName": "Bruen",
                                            "reference": "Reference",
                                            "dateOfBirth": "2024-02-01",
                                            "gender": "F",
                                            "linkedAccounts": {
                                                "aggregates": {
                                                    "count": -63
                                                }
                                            },
                                            "residentialAddress": {
                                                "line1": "66 Piper Crescent",
                                                "line2": "Suite 137",
                                                "city": "Miafurt",
                                                "state": "NSW",
                                                "postCode": "1137",
                                                "countryCode": "AU"
                                            },
                                            "alternateAddress": {
                                                "line1": "969 Patrick Crescent",
                                                "line2": "Suite 716",
                                                "city": "West Mikaylaside",
                                                "state": "VIC",
                                                "postCode": "6041",
                                                "countryCode": "AU"
                                            },
                                            "taxReportingType": "INDIVIDUAL",
                                            "taxResidencies": [
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "TIN",
                                                    "tinMissingReason": "NOT_ISSUED"
                                                },
                                                {
                                                    "countryCode": "AU",
                                                    "tin": "TIN",
                                                    "tinMissingReason": "PENSIONER"
                                                }
                                            ],
                                            "PartyId": "NjA5NDVlNjAtOWU5ZS00ZTJkLWEzOTEtNzllODA1MjA2OTFi",
                                            "roles": [
                                                "CONTROLLING_PERSON"
                                            ],
                                            "selfCertified": {
                                                "certificationDate": "2023-10-23"
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

## Query Party Details - Individual

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
bank
  { customers {    
     edges {
      node {
  parties(filter:  {or:[{familyNameContains:"Death",givenNameContains: "",partyReferenceExact:null}]} )
        {
        edges{
        node{

            ... on PartyIndividual {
      title,
      givenName,
      otherGivenNames
      familyName,
      reference,
      dateOfBirth
      gender
      linkedAccounts{aggregates{count}}
      residentialAddress{line1,line2,city,state,postCode,countryCode}
      alternateAddress{line1,line2,city,state,postCode,countryCode}
      primaryCountryOfTaxResidency
      taxReportingType
      taxResidencies{countryCode,tin,tinMissingReason}
      PartyId: id}

    roles
    selfCertified{certificationDate}
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

### Results

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
                      "title": "DR",
                      "givenName": "Brian",
                      "otherGivenNames": [],
                      "familyName": "Death",
                      "reference": "Ref7",
                      "dateOfBirth": "1970-01-01",
                      "gender": "M",
                      "linkedAccounts": {
                        "aggregates": {
                          "count": 0
                        }
                      },
                      "residentialAddress": {
                        "line1": "1 bad Feeling Cres",
                        "line2": null,
                        "city": "Behingyouton",
                        "state": "VIC",
                        "postCode": "7777",
                        "countryCode": "AU"
                      },
                      "alternateAddress": null,
                      "primaryCountryOfTaxResidency": "AU",
                      "taxReportingType": null,
                      "taxResidencies": [
                        {
                          "countryCode": "AU",
                          "tin": null,
                          "tinMissingReason": "NOT_PROVIDED"
                        }
                      ],
                      "PartyId": "UGFydHlJbmRpdmlkdWFsOjc1NzgxYjZmYzAwNWMyNmQ2MWI3NGQwZGRhY2QxN2Q4NTlmZTQxOGJhMTU4ZDQyODJhN2Y4MWUwYTlkOTYxNjM=",
                      "roles": [
                        "BENEFICIARY"
                      ],
                      "selfCertified": null
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

## Query Party Details - Company

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
bank
  { customers {    
     edges {
      node {
  parties(filter:  {companyFullNameContains: "",partyReferenceContains: ""})

        {
        edges{
        node{

            ... on PartyCompany {
      fullName,
      companyType
      businessNumber
      clientClassification
      companyNumber
      incorporationDate
      incorporationCountry
      stockExchange
      giin
      email
      linkedAccounts{aggregates{count}}
      registeredOfficeAddress{line1,line2,city,state,postCode,countryCode}
      alternateAddress{line1,line2,city,state,postCode,countryCode}
      noTaxResidency
      taxReportingType
      taxResidencies{countryCode,tin,tinMissingReason}
      PartyId: id}

    roles
    selfCertified{certificationDate}
    reference

  },

        }

        }          
    }
    }
    }
  }
}
```

### Results

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
                                                "TRUSTEE"
                                            ],
                                            "selfCertified": {
                                                "certificationDate": "2024-06-08"
                                            },
                                            "reference": "Sample Text"
                                        }
                                    },
                                    {
                                        "node": {
                                            "roles": [
                                                "BENEFICIARY"
                                            ],
                                            "selfCertified": {
                                                "certificationDate": "2024-01-24"
                                            },
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
                                                "BENEFICIARY"
                                            ],
                                            "selfCertified": {
                                                "certificationDate": "2023-11-25"
                                            },
                                            "reference": "Sample Text"
                                        }
                                    },
                                    {
                                        "node": {
                                            "roles": [
                                                "BENEFICIARY"
                                            ],
                                            "selfCertified": {
                                                "certificationDate": "2024-03-24"
                                            },
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

## Query Party Details - Trust

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
bank
  { customers {    
     edges {
      node {
  parties(filter:  {trustFullNameContains: "",partyReferenceContains: ""})

        {
        edges{
        node{

   ... on PartyTrust{
      fullName,
      trustType
      businessNumber
      clientClassification

      countryOfEffectiveManagement
      countryOfEstablishment
      controllingPersons{aggregates{count}}
      giin
      email
      linkedAccounts{aggregates{count}}
      registeredOfficeAddress{line1,line2,city,state,postCode,countryCode}
      alternateAddress{line1,line2,city,state,postCode,countryCode}
      noTaxResidency
      taxReportingType
      taxResidencies{countryCode,tin,tinMissingReason}
      workPhone
      PartyId: id
    }
    roles
    selfCertified{certificationDate}
    reference


  },

        }

        }          
    }
    }
    }
  }
}
```

### Results

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
                                            "selfCertified": {
                                                "certificationDate": "2024-01-01"
                                            },
                                            "reference": "Sample Text"
                                        }
                                    },
                                    {
                                        "node": {
                                            "roles": [
                                                "BENEFICIARY"
                                            ],
                                            "selfCertified": {
                                                "certificationDate": "2023-10-16"
                                            },
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
                                            "selfCertified": {
                                                "certificationDate": "2023-06-23"
                                            },
                                            "reference": "Sample Text"
                                        }
                                    },
                                    {
                                        "node": {
                                            "roles": [
                                                "CONTROLLING_PERSON"
                                            ],
                                            "selfCertified": {
                                                "certificationDate": "2024-05-29"
                                            },
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

## Query Company or Trust

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
query CompanyTrustDetails($name: String!)
  {
bank
  { customers {    
     edges {
      node {
      parties (filter: {or:[{companyFullNameContains: $name},{trustFullNameContains: $name},{partyReferenceContains: $name}]}) 
        {
        edges{
        node{

            ... on PartyCompany {
      fullName,
      companyType
      businessNumber
      clientClassification
      companyNumber
      incorporationDate
      incorporationCountry
      stockExchange
      giin
      email
      linkedAccounts{aggregates{count}}
      registeredOfficeAddress{line1,line2,city,state,postCode,countryCode}
      alternateAddress{line1,line2,city,state,postCode,countryCode}
      noTaxResidency
      taxReportingType
      taxResidencies{countryCode,tin,tinMissingReason}
      PartyId: id}
   ... on PartyTrust{
      fullName,
      trustType
      businessNumber
      clientClassification

      countryOfEffectiveManagement
      countryOfEstablishment
      controllingPersons{aggregates{count}}
      giin
      email
      linkedAccounts{aggregates{count}}
      registeredOfficeAddress{line1,line2,city,state,postCode,countryCode}
      alternateAddress{line1,line2,city,state,postCode,countryCode}
      noTaxResidency
      taxReportingType
      taxResidencies{countryCode,tin,tinMissingReason}
      workPhone
      PartyId: id
    }
    roles
    selfCertified{certificationDate}
    reference


  },

        }

        }          
    }
    }
    }
  }
}
```

### Results where name = "Family"

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
                      "fullName": "Smith Family Trust",
                      "trustType": "REGULATED_SELF_MANAGED_SUPER_FUND",
                      "businessNumber": null,
                      "clientClassification": "COMPANY_SMSF_OR_TRUST",
                      "countryOfEffectiveManagement": null,
                      "countryOfEstablishment": "AU",
                      "controllingPersons": {
                        "aggregates": {
                          "count": 0
                        }
                      },
                      "giin": null,
                      "email": null,
                      "linkedAccounts": {
                        "aggregates": {
                          "count": 0
                        }
                      },
                      "registeredOfficeAddress": {
                        "line1": "1 Bucket Street",
                        "line2": null,
                        "city": "Sydney",
                        "state": "NSW",
                        "postCode": "2000",
                        "countryCode": "AU"
                      },
                      "alternateAddress": null,
                      "noTaxResidency": false,
                      "taxReportingType": null,
                      "taxResidencies": [
                        {
                          "countryCode": "AU",
                          "tin": "*********",
                          "tinMissingReason": null
                        }
                      ],
                      "workPhone": null,
                      "PartyId": "UGFydHlUcnVzdDo1MGM1YWIwNTVkOGE4NjkzNDE1NTZiMWVkYWQ4NDNhYTQ5MTk2NGEyYTdiMDdhMzZhZDQ5NmY5ZjA0NTNkMWZj",
                      "roles": [
                        "BENEFICIARY"
                      ],
                      "selfCertified": null,
                      "reference": null
                    }
                  },
                  {
                    "node": {
                      "fullName": "Jones Family Trust",
                      "trustType": "REGULATED_SELF_MANAGED_SUPER_FUND",
                      "businessNumber": null,
                      "clientClassification": "COMPANY_SMSF_OR_TRUST",
                      "countryOfEffectiveManagement": null,
                      "countryOfEstablishment": "AU",
                      "controllingPersons": {
                        "aggregates": {
                          "count": 0
                        }
                      },
                      "giin": null,
                      "email": null,
                      "linkedAccounts": {
                        "aggregates": {
                          "count": 0
                        }
                      },
                      "registeredOfficeAddress": {
                        "line1": "1 High Street",
                        "line2": null,
                        "city": "Sydney",
                        "state": "NSW",
                        "postCode": "2000",
                        "countryCode": "AU"
                      },
                      "alternateAddress": null,
                      "noTaxResidency": false,
                      "taxReportingType": null,
                      "taxResidencies": [
                        {
                          "countryCode": "AU",
                          "tin": "*********",
                          "tinMissingReason": null
                        }
                      ],
                      "workPhone": null,
                      "PartyId": "UGFydHlUcnVzdDpjY2MzYzZiZGYwYTRiNjkwNzhhOGQ4MjI1YTU5MTI3YmY4MjBmYmNjN2JiZjg0MWI5ZjljOTdlNmY1NjVjNzIw",
                      "roles": [
                        "BENEFICIARY"
                      ],
                      "selfCertified": null,
                      "reference": "JFT"
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

## Query - Get Available Product List (detailed)

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
  bank {
    products (filter: {state:  AVAILABLE}) {
      edges {
        node {
          name
          description
          id
          state
          currencies
          ... on CustomerProduct {
            customer {
              fullName
            }
          }

          activeFeatures {
            ... on InterestFeatureConfig {
              accrualTimes{timeZone,time,__typename}
            }
            ... on CustomerInterestFeatureConfig{
              CustomerInterest: rates{Details: currentOrNext{
                name
                ... on FixedNamedRateEntry
                {rate}
                ... on MarginNamedRateEntry
                {rate}
              }}
            }
            ... on ClientInterestFeatureConfig{
              ClientInterest: rates{Details: currentOrNext{
                name
                ... on FixedNamedRateEntry
                {rate}
                ... on MarginNamedRateEntry
                {rate}             
              }}
            }
            ... on PoolFeatureConfig {
              name,pool{name}
            }
            ... on DePaymentFeatureConfig{Enabled: name}
            ... on RtgsPaymentFeatureConfig{Enabled: name}
            ... on CurrencyFeatureConfig{currencies}
            ... on RequiredRolesFeatureConfig{RequiredRoles: roles}
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
            "products": {
                "edges": [
                    {
                        "node": {
                            "name": "Product 1",
                            "description": "Product 1",
                            "id": "YTlkMzBlMzctOWIyYS00YjMzLWJkZWMtMWMzYWQzMjFjZjM0",
                            "state": "AVAILABLE",
                            "currencies": [
                                "AUD",
                                "AUD"
                            ],
                            "activeFeatures": [
                                {
                                    "currencies": [
                                        "AUD",
                                        "AUD"
                                    ]
                                },
                                {
                                    "Enabled": "TRUE"
                                }
                            ]
                        }
                    },
                    {
                        "node": {
                            "name": "Sample Name",
                            "description": "Sample Text",
                            "id": "ZGE2ZjJkY2MtZjYzNC00NzM1LWE1ZTAtNTVkOTY3ZmE4NDQw",
                            "state": "AVAILABLE",
                            "currencies": [
                                "AUD",
                                "AUD"
                            ],
                            "activeFeatures": [
                                {
                                    "Enabled": "TRUE"
                                },
                                {}
                            ]
                        }
                    }
                ]
            }
        }
    }
}
```

## Query any Parties by Variable

### Request

```graphql
query QueryCustomerPartyId($name: String!){
   bank {
    customers {
      edges {
        node {
          parties (filter: {or:[{givenNameContains: $name},{familyNameContains: $name},{companyFullNameContains: $name},{trustFullNameContains: $name}]}) {
          edges {
              node {
                ... on PartyIndividual {
                  familyName
                  givenName
                  id
                  otherGivenNames
                  dateOfBirth
                  gender
                  __typename
                }
                ... on PartyCompany {CompanyName: fullName,id,__typename}
                ... on PartyTrust{TrustName: fullName,id,__typename}
              }
            }
          }
        }
      }
    }
  }
}
```

### Query variable definition

```json
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
                                            "familyName": "O'Conner",
                                            "givenName": "Jesse",
                                            "id": "Y2RlODY3NmYtN2IxNS00ZmM4LWJiYWEtNWJjY2JmMTQxZWY1",
                                            "otherGivenNames": [
                                                "Liam",
                                                "Noel"
                                            ],
                                            "dateOfBirth": "2023-07-27",
                                            "gender": "F",
                                            "__typename": "PartyIndividual"
                                        }
                                    },
                                    {
                                        "node": {
                                            "familyName": "Farrell",
                                            "givenName": "Sophia",
                                            "id": "MmU2YmU0N2MtNDNhZS00NzI3LWEwNTctNDdiNmI1OThkNzJk",
                                            "otherGivenNames": [
                                                "John",
                                                "Mary"
                                            ],
                                            "dateOfBirth": "2023-07-13",
                                            "gender": "F",
                                            "__typename": "PartyIndividual"
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
                                            "familyName": "Walter",
                                            "givenName": "Jake",
                                            "id": "MjhhN2Y1YmEtN2UzNi00ZGEyLWI2ZDYtMzliM2NiNDU4ZjVh",
                                            "otherGivenNames": [
                                                "Kevin",
                                                "Michael"
                                            ],
                                            "dateOfBirth": "2023-06-29",
                                            "gender": "F",
                                            "__typename": "PartyIndividual"
                                        }
                                    },
                                    {
                                        "node": {
                                            "familyName": "Nguyen",
                                            "givenName": "Connor",
                                            "id": "NjUzODJmNWUtZTU4ZC00MmVkLWFiMDktYmQ1NjJjYjJlMDE4",
                                            "otherGivenNames": [
                                                "Sarah",
                                                "Sam"
                                            ],
                                            "dateOfBirth": "2023-10-07",
                                            "gender": "F",
                                            "__typename": "PartyIndividual"
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

## List Unallocated (as Customer)

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
 bank{
  pools {
   edges {
    node {
      name,
      unallocated {
        edges{
          node{
            ...on Payment{
              unallocid: id
              entryReference
              narrative
              accountServicerReference
              unallocatedReason
              Payment: amount{value,creditDebit}
              transactions {
              edges {
                node {
                  currency
                  valueDate
                  transactionType

                }}}
            }         
            ...on Receipt{
              unallocid: id
              entryReference
              narrative
              unallocatedReason
              Receipt: amount{value,creditDebit}
              createdTimestamp
              transactions {
              edges {
                node {
                  currency
                  initiatedTimestamp
                  transactionType
                  valueDate                 

                }}}
            }
          }}}}}
  }
}
  }
```

### Response

```json
{
    "data": {
        "bank": {
            "pools": {
                "edges": [
                    {
                        "node": {
                            "name": "Sample Name",
                            "unallocated": {
                                "edges": [
                                    {
                                        "node": {
                                            "unallocid": "YWRlZDExYzItZjFiYi00NzMwLThmZDItNTk3ZjViZGQ0MmY5",
                                            "entryReference": "Sample Text",
                                            "narrative": "Sample Text",
                                            "accountServicerReference": "Sample Text",
                                            "unallocatedReason": "Sample Text",
                                            "Payment": {
                                                "value": "846.29",
                                                "creditDebit": "DEBIT"
                                            },
                                            "transactions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "currency": "AUD",
                                                            "valueDate": "2024-03-14",
                                                            "transactionType": "Transaction"
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "currency": "AUD",
                                                            "valueDate": "2023-06-23",
                                                            "transactionType": "Transaction"
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
                    },
                    {
                        "node": {
                            "name": "Sample name",
                            "unallocated": {
                                "edges": [
                                    {
                                        "node": {
                                            "unallocid": "ZGNkZmU2MGYtMTg5NS00NzhlLThiNmYtNDg2ODZkMzk3Njk3",
                                            "entryReference": "Sample Text",
                                            "narrative": "Sample Text",
                                            "unallocatedReason": "Sample Text",
                                            "Receipt": {
                                                "value": "4278.73",
                                                "creditDebit": "DEBIT"
                                            },
                                            "createdTimestamp": "2024-06-18T06:51:42.707Z",
                                            "transactions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "currency": "AUD",
                                                            "initiatedTimestamp": "2024-06-18T08:01:08.031Z",
                                                            "transactionType": "Transaction",
                                                            "valueDate": "2023-10-08"
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "currency": "AUD",
                                                            "initiatedTimestamp": "2024-06-18T07:09:28.303Z",
                                                            "transactionType": "Transaction",
                                                            "valueDate": "2024-02-25"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "node": {
                                            "unallocid": "ZmEwMWQwMGEtZTk0Zi00MjdhLWI3YTAtZTdlYWJhYzczZmQ0",
                                            "entryReference": "Sample Text",
                                            "narrative": "Sample Text",
                                            "accountServicerReference": "Sample Text",
                                            "unallocatedReason": "Sample Text",
                                            "Payment": {
                                                "value": "2422.47",
                                                "creditDebit": "CREDIT"
                                            },
                                            "transactions": {
                                                "edges": [
                                                    {
                                                        "node": {
                                                            "currency": "AUD",
                                                            "valueDate": "2023-07-25",
                                                            "transactionType": "Transaction"
                                                        }
                                                    },
                                                    {
                                                        "node": {
                                                            "currency": "AUD",
                                                            "valueDate": "2024-03-22",
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
                    }
                ]
            }
        }
    }
}
```

## Allocate transaction

### Request

Refer to: [allocate]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#mutation-allocate) for mutation details

```graphql
mutation { allocate (i:
{      
  # get the destination account id using one of the queries for Accounts
  accountId: "QWNjb3VudDpjZjkyNGJhMWRkNjUyYmUzYzcxNmQ4MmNhZDgzNjg0YzhhY2FmOWUwZWZjZDc1ODYwMmY1OWQyNmU3Nzc0N2Iw",
    # Free format comment text
  allocationComment: "API allocation",
  # ID of the transaction from the unallocated list to allocate to account - look for unallocid
        unallocatedId: "UmVjZWlwdDo4Mjg3ODJmNjg4YWQ0ZjU2YjJiZGRiOTI0YjBiNjI2MjM1YjNiZTMxZjE1MTMwMWM1ZDYwZTNiYTk1MzI5MGM0"
    }
) {commandId}
}
```

### Result of Allocation - query commandid

```json
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

## Undo Allocation

### Request

Refer to: [unallocate]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#mutation-unallocate) for mutation details

```graphql
mutation { unallocate (i:
{      

  # ID of the transaction from the unallocated list to allocate to account - look for unallocid
        unallocatableId: "UmVjZWlwdDo4Mjg3ODJmNjg4YWQ0ZjU2YjJiZGRiOTI0YjBiNjI2MjM1YjNiZTMxZjE1MTMwMWM1ZDYwZTNiYTk1MzI5MGM0"
    }
) {commandId}
}
```

### Result of Undo Allocation - query commandid

```json
{
  "data": {
    "node": {
      "__typename": "GenericCommand",
      "id": "Q29tbWFuZDoyNzczOTVjYi1iOTAxLTRlYTYtOGU1NC0xNjhjMDc5NzA3YWQ=",
      "action": "UNALLOCATE",
      "state": "SUCCESSFUL",
      "step": "END",
      "invalid": []
    }
  }
}
```

## Query for Account Transactions showing id to use for Unallocation

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
  bank {
    accounts(filter: {accountNumberExact: "000001007"}) {
      edges {
        node {
          id
          transactionEntries {
            edges {
              node {
                transactionType
                businessProcess {
                  __typename
                  unallocid: id  
                }
                transaction {
                  valueDate
                }
                initiatedTimestamp
                creditDebit
                value
                instruction {
                  narrative
                  tracingId
                }
                instruction {
                  narrative
                  tracingId
                }
                unallocatable
                state

              }
            }
          }
        }
      }
    }
  }
}
```

### Results of query - look for unallocid

```json
{
    "data": {
        "bank": {
            "accounts": {
                "edges": [
                    {
                        "node": {
                            "id": "ZmY4MmUyNGMtMmIzMC00ZGYwLTlhNmEtNjkzMWNhYmE5ZjI4",
                            "transactionEntries": {
                                "edges": [
                                    {
                                        "node": {
                                            "transactionType": "Transaction",
                                            "businessProcess": {
                                                "__typename": "Interest",
                                                "unallocid": "OWRjMDY3YjktODdiZi00NzA5LWFmNWYtMTkxNDdiY2IxZmUx"
                                            },
                                            "transaction": {
                                                "valueDate": "2024-01-24"
                                            },
                                            "initiatedTimestamp": "2024-06-23T17:01:15.518Z",
                                            "creditDebit": "CREDIT",
                                            "value": "8797.58",
                                            "instruction": {
                                                "narrative": "Failure Text 1",
                                                "tracingId": "Failure Text 2"
                                            },
                                            "unallocatable": false,
                                            "state": "SUCCESSFUL"
                                        }
                                    },
                                    {
                                        "node": {
                                            "transactionType": "Transaction",
                                            "businessProcess": {
                                                "__typename": "PaymentRequest",
                                                "unallocid": "YWM4ZTU5MTQtMmYzOC00NDJjLTg5ZjktZGRiOGNjZTFjMTBi"
                                            },
                                            "transaction": {
                                                "valueDate": "2024-04-07"
                                            },
                                            "initiatedTimestamp": "2024-06-23T10:52:09.015Z",
                                            "creditDebit": "CREDIT",
                                            "value": "4779.66",
                                            "instruction": {
                                                "narrative": "Sample Text",
                                                "tracingId": "Tracing ID"
                                            },
                                            "unallocatable": true,
                                            "state": "SUCCESSFUL"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "node": {
                            "id": "MTA3ODE3OGEtNjBlMi00ZGQ3LTllYTEtYmNiYzAwMDI5NGU4",
                            "transactionEntries": {
                                "edges": [
                                    {
                                        "node": {
                                            "transactionType": "Transaction",
                                            "businessProcess": {
                                                "__typename": "AggregatePayment",
                                                "unallocid": "ZjY0MWM1N2EtNmJmNC00ZmZiLThhMTctM2E2ZjI2YTY5NWRi"
                                            },
                                            "transaction": {
                                                "valueDate": "2023-08-07"
                                            },
                                            "initiatedTimestamp": "2024-06-23T10:00:38.436Z",
                                            "creditDebit": "DEBIT",
                                            "value": "8243.46",
                                            "instruction": {
                                                "narrative": "Sample Text",
                                                "tracingId": "Transaction"
                                            },
                                            "unallocatable": false,
                                            "state": "SUCCESSFUL"
                                        }
                                    },
                                    {
                                        "node": {
                                            "transactionType": "Transaction",
                                            "businessProcess": {
                                                "__typename": "Receipt",
                                                "unallocid": "ZmM1NTJjMjItY2UyMy00NWU4LTllNTMtMTBlY2UzOTkwNjM4"
                                            },
                                            "transaction": {
                                                "valueDate": "2024-03-27"
                                            },
                                            "initiatedTimestamp": "2024-06-23T17:53:44.001Z",
                                            "creditDebit": "DEBIT",
                                            "value": "4855.65",
                                            "instruction": {
                                                "narrative": "Sample Text",
                                                "tracingId": "Tracing ID"
                                            },
                                            "unallocatable": true,
                                            "state": "SUCCESSFUL"
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

## General Command Status Query

### Request

Refer to: [node]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-node) for query operations

```graphql
query QueryCommand($commandId: ID!) {
  node(id: $commandId ){
     __typename
    ... on GenericCommand{
      action
      state
      step
      invalid{field,reason,}
    }
    ... on TransferPerformCommand{
      action
      state
      transfer{
        creditingAccount{
          accountNumber
          reference
        }
        debitingAccount{
          accountNumber
          reference
        }
        amount{value}
      }
      invalid{field
      reason}

    }
    ... on OpenAccountCommand{
      action
      account{accountNumber
        bankCode
      id}
      state
      invalid{field
      reason}
      action
      state
      id
            step
    }
    ... on PartyIndividualCreateCommand {
      action
      party{
        id
        reference
        roles
        ... on PartyIndividual{givenName,familyName,__typename}

      }
      
      id
      invalid{field,reason}
      state,
      step
    }

    ... on PartyCompanyUpdateCommand {
      action
      party{
        id
        reference
        roles
        ... on PartyCompany{fullName,__typename}

      }
      
      id
      invalid{field,reason}
      state,
      step
    }

    ... on PartyIndividualCreateCommand {
      action
      party{
        id
        reference
        roles

        ... on PartyTrust{fullName,__typename}

      }
      
      id
      invalid{field,reason}
      state,
      step
    }

    ... on AggregatePaymentExecuteCommand{
      action
      state
      step
      invalid{field,reason}
    }
    ... on AggregatePaymentExecuteCommand{
      action
      state
      step

    }
    ... on MakeDePaymentCommand{
      action
      payment{
        reference
        recipient{name,bankCode,accountNumber}
        #transactions{edges{node{value,state}}}

        id
      }
      state
      step
      invalid{field,reason}
    }

    ... on MakeRtgsPaymentCommand{
      action
      payment{
        reference
        recipient{name,bankCode,accountNumber}
        #transactions{edges{node{value,state}}}

        id
      }
      state
      step
      invalid{field,reason}
    }

    ... on MakeNppPaymentCommand{
      action
      payment{
        reference
        recipient{name,bankCode,accountNumber}
        #transactions{edges{node{value,state}}}

        id
      }
      state
      step
      invalid{field,reason}
    }

  }
}
```