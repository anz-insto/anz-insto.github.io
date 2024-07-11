---
layout: default
---
# Instructions on how to generate the GraphQL Schema

## Requirements

* Graphdoc * 

Schema is generated using GraphDoc and can be installed as an NPM package

- npm install -g @2fd/graphdoc

* GraphQL Schema *

The GraphQL schema must be retrieved from CCM and saved to a location on the local machine

> curl to retrieve schema:

``` shell

curl --request POST \
  --url https://%ccmUrl%/ccm/graphql \
  --header 'Authorization: Bearer %BEARER_TOKEN%' \
  --header 'Content-Type: application/json' \
  --header 'apikey: %API_KEY%' \
  --data '{"query":"fragment FullType on __Type {\n  kind\n  name\n  fields(includeDeprecated: true) {\n    name\n    description\n    args {\n      ...InputValue\n    }\n    type {\n      ...TypeRef\n    }\n    isDeprecated\n    deprecationReason\n  }\n  inputFields {\n    ...InputValue\n  }\n  interfaces {\n    ...TypeRef\n  }\n  enumValues(includeDeprecated: true) {\n    name\n    description\n    isDeprecated\n    deprecationReason\n  }\n  possibleTypes {\n    ...TypeRef\n  }\n}\nfragment InputValue on __InputValue {\n  name\n  description\n  type {\n    ...TypeRef\n  }\n  defaultValue\n}\nfragment TypeRef on __Type {\n  kind\n  name\n  description\n  ofType {\n    kind\n    name\n    description\n    ofType {\n      kind\n      name\n      description\n      ofType {\n        kind\n        name\n        description\n        ofType {\n          kind\n          name\n          description\n          ofType {\n            kind\n            name\n            description\n            ofType {\n              kind\n              name\n              description\n              ofType {\n                kind\n                name\n                description\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\nquery IntrospectionQuery {\n  __schema {\n    queryType {\n      name\n      description\n    }\n    mutationType {\n      name\n      description\n    }\n    types {\n      ...FullType\n    }\n    directives {\n      name\n      description\n      locations\n      args {\n        ...InputValue\n      }\n    }\n  }\n}","operationName":"IntrospectionQuery"}'


```

## Generate Schema

1. Save the output from the above command to an accessable location as %GraphqlFilename.json%
2. execute the following command: graphdoc -s ./ccm_schema_plus_description.json -o ./schema
3. Place the generated output on the developer portal