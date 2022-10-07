### General API Event Codes

| Event Code | Name                   | HTTP <BR> Response | Description                                    |
| :--------- | :--------------------- | :----------------: | :--------------------------------------------- |
| EC000_001  | Internal Server Error  |        500         | Internal Server Error, please contact support. |
| EC000_002  | Unauthorized           |        401         | The request is not authorized                  |
| EC000_003  | Validation Failure     |        400         | The request failed validation                  |
| EC000_004  | Resource Not Found     |        404         | The requested resource is not found            |
| EC000_005  | Method Not Allowed     |        405         | The requested HTTP method is not allowed       |
| EC000_006  | Unsupported Media Type |        405         | Content-Type provided is not supported         |
| EC000_007  | Invalid Content        |        400         | Invalid secured payload                        |