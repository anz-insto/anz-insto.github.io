### Payment Event Codes

Validation failures relating to payment submissions. The codes and status are returned in a Payment Status response message.

**Event Code Ranges**

| Range Start | Range End | Usage                   |
| :---------- | :-------- | :---------------------- |
| EC004_101   | EC004_199 | Group level error       |
| EC004_201   | EC004_299 | Payment level error     |
| EC004_301   | EC004_399 | Transaction level error |

**Payment Event Code List**

| Event Code | Status Code | Status Reason Code | Status Reason Code Description  | Error Description |
| :--------- | :---------: | :----------------: | :------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
|            |    RJCT     |        NARR        | Narrative                       | Reason is provided as narrative information in the additional reason information.<br/>Generic error which will be returned where no external reason code is available.<br/>For rejections from downstream applications additional_information will contain proprietary rejection code and reason in format:<br/>(\<rejection code\>) \<rejection reason\><br/>I.e "(1234) Insufficient funds"|
| EC004_101  |    RJCT     |        TD03        | InvalidPayment                  | Schema validation failed against the payment schema, error details \[Missing or invalid X-Message-Id\]|
| EC004_102  |    RJCT     |        TD03        | DuplicatePayment                | Duplicate payment received (supplied X-Message-Id value: \[X-Message-Id\]|
| EC004_103  |    RJCT     |        TD03        | CryptoFailure                   | Failed to decrypt and verify the message|
| EC004_104  |    RJCT     |        TD03        | SchemaValidation                | Schema validation failed against the payment schema, error details \[{errorDetail}\]|
| EC004_105  |    RJCT     |        DT02        | PaymentProcessingFailed         | Payment processing failed, please re-submit and try again|
| EC004_106  |    RJCT     |        DT02        | InvalidCreationDate             | creation_date_time is too far in the past (greater than 24 hours), or in the future|
| EC004_107  |    RJCT     |        BC01        | InvalidPaymentInformationCount  | The number of payment_information elements should not be more than 1 per request|
| EC004_108  |    RJCT     |        AM10        | InvalidControlSum               | Sum of instructed amounts does not equal the control sum.|
| EC004_109  |    RJCT     |        AM18        | InvalidNumberOfTransactions     | Number of transactions is invalid or missing.|
| EC004_110  |    RJCT     |        TD03        | SchemaValidation                | Echo any parser error message.<br/>I.e.<br/>Property with the name '\<json key\>' already exists in the current JSON object. Path '\<json key\>', line \<#\>, position \<#\>.<br/>Property with the name 'payment_information' already exists in the current JSON object. Path 'payment_information', line 32, position 30.|
| EC004_158  |    RJCT     |        BE16        | InvalidDebtorIdentificationCode      | Where:<br/>Payment Type is CBFT<br/>Do a check on debtor_account_identification to determine if it's AU domestic (CACHE) or FX (MIDANZ) <br/>MIDANZ pattern: [0-9]{6}[A-Z]{3}[0-9]{5}  (i.e 123456USD00001) <br/> Cache pattern: [0-9]{15}  (i.e 012123999999999) <br/>Error Message:<br/>Invalid Debtor Identification Code|
| EC004_159  |    RJCT     |        AM10        | InvalidControlSum         | Where:<br/>Payment Type is CBFT<br/>Sum of amounts(instructed and equivalent) does not equal the control sum. <br/>Error Message:<br/>Invalid Control Sum|
| EC004_201  |    RJCT     |        AC02        | InvalidDebtorAccountNumber      | Where:<br/>{max_account_length} = Integer. Maximum length allowed for account number for country/ payment type<br/>Error Message:<br/>Debtor Account Number format is invalid for country and payment type. Value exceeds maximum length of {max_account_length} (supplied value: \[{debtor_account_identification}\])|
| EC004_202  |    RJCT     |        TC01        | InvalidTransactionCount         | The number of credit_transfer_transaction_information elements should not be more than 1000 per payment_information element|
| EC004_203  |    RJCT     |        AM03        | NotAllowedCurrency              | Where:<br/>{currency} = List of values provided against instructed_amount.currency<br/>Error Message:<br/>Payment type only allows for single currency in batch. Provided currencies: \[{currency}\]|
| EC004_204  |    RJCT     |        DU02        | DuplicatePaymentInformationID   | Payment Information ID must be unique per payment (supplied value: \[{payment_information_identification}\])|
| EC004_205  |    RJCT     |        CH16        | ElementContentFormallyIncorrect | Where:<br/>{max_length} = Maximum allowed length for payment type<br/>Error Message:<br/>Payment Information ID exceeds maximum allowed length for country and payment type. Value exceeds maximum length of {max_length} (supplied value: \[{payment_information_identification}\])|
| EC004_301  |    RJCT     |        AC03        | CreditorAccountRule             | creditor_account_proxy is invalid for CountryCode: \[{countryCode}\] and PaymentType: \[{paymentType}\]|
| EC004_302  |    RJCT     |        AM03        | NotAllowedCurrency              | Where:<br/>{allowed currencies} = an array of currency codes valid for the country/ payment type<br/>{currency} = value of instructed_amount.currency<br/>Error Message:<br/>"Invalid currency for payment type. Instructed amount currency must be one of \[{allowed currencies}\] (supplied value: \\[{currency}\\])"|
| EC004_303  |    RJCT     |        DU05        | DuplicateInstructionID          | Instruction ID must be unique within a batch (supplied value: \[{instruction_identification}\])|
| EC004_304  |    RJCT     |        AC03        | InvalidCreditorAccountNumber    | Either creditor_account_identification or creditor_account_proxy may be present, but not both|
| EC004_305  |    RJCT     |        CH16        | ElementContentFormallyIncorrect | Where:<br/>{max_length} = Maximum allowed length for payment type<br/>Error Message:<br/>Instruction Identification exceeds maximum allowed length for country and payment type. Value exceeds maximum length of {max_length} (supplied value: \[{instruction_identification}\])|
| EC004_306  |    RJCT     |        BE22        | MissingCreditorName    | Where:<br/>{creditor_name} = not present<br/>Error Message:<br/>Creditor name is missing|
| EC004_307  |    RJCT     |        MS06        | MissingAmount | Where:<br/>PaymentType is CBFT and {instructed_amount} = Not present<br/>Or <br/>{equivalent_amount} = Not present<br/> Error Message:<br/>Amount is missing|
| EC004_308  |    RJCT     |        BE19        | InvalidChargeBearerCode | Where:<br/>PaymentType is CBFT and {charge_bearer} = Not present <br/> Error Message:<br/>Invalid Charge Bearer Code|
