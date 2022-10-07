### NPP Event Codes

Below event codes are used to indicate Payment validation failures. The codes and status are returned in a Payment Status response message

| Event Code | transaction_<br>status | transaction_status_<br>reason_code | transaction_status_<br>description     | Description                                                                                          |
| :--------- | :--------------------: | :--------------------------------: | :------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| EC004_001  |          RJCT          |                TD03                | EC004_001-InvalidPayment               | Schema validation failed against the payment schema, error details [Missing or invalid X-Message-Id] |
| EC004_002  |          RJCT          |                TD03                | EC004_002-DuplicatePayment             | Duplicate payment received (supplied X-Message-Id value: [X-Message-Id]                              |
| EC004_003  |          RJCT          |                TD03                | EC004_003-InvalidPayment               | Schema validation failed against the payment schema, error details [{errorDetail}]                   |
| EC004_004  |          RJCT          |                TD03                | EC004_004-CryptoFailure                | Failed to decrypt and verify the message                                                             |
| EC004_005  |          RJCT          |                TD03                | EC004_005-SchemaValidation             | Schema validation failed against the payment schema, `PaymentSubmissionResource`                     |
| EC004_006  |          RJCT          |                AC03                | EC004_006-CreditorAccountRule          | /CreditorAliasValue or /CreditorAccountIdentification must be present                                |
| EC004_007  |          RJCT          |                AC03                | EC004_007-CreditorAccountRule          | If /CreditorAccountType is present then /CreditorAccountIdentification must be present               |
| EC004_008  |          RJCT          |                AC03                | EC004_008-CreditorAccountRule          | If /CreditorAliasType is present then /CreditorAliasValue must be present                            |
| EC004_009  |          RJCT          |                AC13                | EC004_009-DebtorAccountRule            | /DebtorAccountType AND /DebtorAccountIdentification must be present                                  |
| EC004_010  |          RJCT          |                DT02                | EC004_010-CreationDateRule             | Creation date and time (UTC) is too far in the past (greater than 24 hours), or is future dated      |
| EC004_011  |          RJCT          |                DT01                | EC004_011-RequestedDateRule            | Requested Execution Date is in the past or invalid                                                   |
| EC004_012  |          RJCT          |                DT01                | EC004_012-RequestedDateRule            | Requested Execution Date is in the future or invalid                                                 |
| EC004_013  |          RJCT          |                AM12                | EC004_013-InstructedAmountRule         | Amount field does not match a two decimal place format.                                              |
| EC004_014  |          RJCT          |                AM06                | EC004_014-TooLowAmount                 | Instructed amount must be equal or greater than `$0.01`                                              |
| EC004_015  |          RJCT          |                AM03                | EC004_015-CurrencyRule                 | Instructed amount must be in `AUD`                                                                   |
| EC004_016  |          RJCT          |                AC02                | EC004_016-InvalidDebtorAccountNumber   | Account numbers for NPP can only contain numeric values                                              |
| EC004_017  |          RJCT          |                AC08                | EC004_017-InvalidBranchCode            | Debtor BSB must be a minimum of 6 numeric digits, including leading zeroes                           |
| EC004_018  |          RJCT          |                AC03                | EC004_018-InvalidCreditorAccountNumber | Account numbers for NPP can only contain numeric values                                              |
| EC004_019  |          RJCT          |                AC08                | EC004_019-InvalidBranchCode            | Creditor BSB must be a minimum of 6 numeric digits, including leading zeroes                         |
| EC004_020  |          RJCT          |                AC14                | EC004_020-InvalidCreditorAccountType   | Valid values are: `AIIN` and `BBAN`                                                                  |
| EC004_021  |          RJCT          |                AC13                | EC004_021-InvalidDebtorAccountType     | Valid values are: `AIIN` and `BBAN`                                                                  |
| EC004_022  |          RJCT          |                AC13                | EC004_022-InvalidEndToEndId            | EndToEnd Identification is missing or invalid                                                        |
| EC004_023  |          RJCT          |                FF04                | EC004_023-InvalidServiceLevelCode      | Service Level must be `npp.clear.01-x2p1`                                                            |
| EC004_024  |          RJCT          |                DT02                | EC004_024-InvalidCreationDate          | Creation date must be of ISODateTime format (UTC Expressed: YYYY-MM-DDThh:mm:ss.sssZ)                |
| EC004_026  |          RJCT          |                DT02                | EC004_026-PaymentProcessingFailed      | Payment processing failed, please re-submit and try again                                            |
| EC004_027  |          RJCT          |                DT02                | EC004_027-InvalidAlias                 | Alias value is invalid as per Alias Type.                                                            |


