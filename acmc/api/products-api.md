---
title: Product Detail
layout: default
navigation: acmc
toc: true
---

## Query - Get Parties with Trustee role

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
bank
  { customers {    
     edges {
      node {
        parties (filter: {hasRoles: [TRUSTEE]})
        {
        edges{
        node{
            ... on PartyIndividual {
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
                                            "givenName": "Savannah",
                                            "familyName": "Hyatt-Casper",
                                            "PartyId": "NTNhMjFhMGEtNzYzMy00MGIzLThkMDgtNGIzYzdjNWNhYzA1",
                                            "roles": [
                                                "CONTROLLING_PERSON"
                                            ]
                                        }
                                    },
                                    {
                                        "node": {
                                            "givenName": "Jordan",
                                            "familyName": "Jenkins",
                                            "PartyId": "MjdjYjVlZTktOWQ1My00MTE4LWJhNjgtOTA2MGFjYjI1YzM4",
                                            "roles": [
                                                "BENEFICIARY"
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
                                            "givenName": "Hayley",
                                            "familyName": "Doyle",
                                            "PartyId": "NmViNWM5ZjgtNGE3OC00NWI3LWEyZDEtMDM2MWM5NTRjMTMx",
                                            "roles": [
                                                "BENEFICIARY"
                                            ]
                                        }
                                    },
                                    {
                                        "node": {
                                            "givenName": "Justin",
                                            "familyName": "Cox",
                                            "PartyId": "NDhlNzJmZmMtZTQyMC00Yjc2LTg5ZWMtZDRiNDYwYzc4MzQ3",
                                            "roles": [
                                                "TRUSTEE"
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

## Query - Get Products available for use

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
{
  bank {


    products (filter: {state:  AVAILABLE}){edges
      {node
        {
          ProductName: name,
          Prodid: id,
          Product_Desc: description,
          state
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
                            "ProductName": "Customer Product Name",
                            "Prodid": "YTlkMzBlMzctOWIyYS00YjMzLWJkZWMtMWMzYWQzMjFjZjM0",
                            "Product_Desc": "Customer Product",
                            "state": "AVAILABLE"
                        }
                    },
                    {
                        "node": {
                            "ProductName": "Customer Product Name",
                            "Prodid": "ZGE2ZjJkY2MtZjYzNC00NzM1LWE1ZTAtNTVkOTY3ZmE4NDQw",
                            "Product_Desc": "Customer Product",
                            "state": "AVAILABLE"
                        }
                    }
                ]
            }
        }
    }
}
```

## Query - Get CustomerID

### Request

Refer to: [bank]({{ site.baseurl }}/acmc/graphqlDoc/public/ccm-api#query-bank) for query operations

```graphql
query { bank
  { customers
    { edges {node {CustomerID: id,
                                fullName,
                            displayName

    }} } } }
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
                            "CustomerID": "OWFhMDAzNDgtNTMzYi00NTczLWIzYzctMTM5OWQzM2UyODg3",
                            "fullName": "Jane Doe",
                            "displayName": "Jane Doe"
                        }
                    },
                    {
                        "node": {
                            "CustomerID": "ZjYzNTZlZDMtMGIyYS00YTllLThmOTEtNmQwYjRjNjJjODky",
                            "fullName": "Jane Doe",
                            "displayName": "Jane Doe"
                        }
                    }
                ]
            }
        }
    }
}
```