### FX Event Codes

| Event Code | Name                | HTTP <br> Response | Description                                                                                                                                                                                   |
|:-----------|:--------------------|:------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EC014_001  | Invalid Request     | 400                | Schema validation failed against the request payload schema error details [{0}]<br>{0} = error message from parser, schema check, missing or invalid headers etc. Enclosed in square brackets |
| EC014_002  | Duplicate Request   | 400                | Duplicate request received (supplied X-Message-Id value: [{0}]<br>{0} = Duplicate X-Message-Id value. Enclosed in square brackets                                                             |
| EC014_003  | Internal Error      | 500                | Internal Server Error, please contact support.                                                                                                                                                |
| EC014_004  | Service Unavailable | 503                | Service Unavailable                                                                                                                                                                           |

