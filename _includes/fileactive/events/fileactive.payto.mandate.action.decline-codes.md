### PayTo Mandate Action Decline Codes

Reason Codes for use when declining a Mandate creation/amendment authorisation request. 

The reason codes are returned in the [PayTo API Webhook **Mandate Notifications**]({{ site.baseurl }}/fileactive/api/payto-api-webhook).

| Reason Code | Reason Description | Additional Information |
|:---:|---|---|
| AC02 | InvalidDebtorAccountNumber | Debtor account number invalid or missing |
| AC05 | ClosedDebtorAccountNumber | Debtor account number closed |
| AC06 | BlockedAccount | Account specified is blocked, prohibiting posting of transactions against it |
| AC13 | InvalidDebtorAccountType | Debtor Account Type missing or invalid |
| AG01 | TransactionForbidden | Transaction forbidden on this type of account |
| AG03 | TransactionNotSupported | Account type not supported/authorised |
| AM03 | NotAllowedCurrency | Specified message amount is a non-processable currency outside of existing agreement |
| AM12 | InvalidAmount | Amount is invalid or missing |
| AM14 | AmountExceedsAgreedLimit | Transaction amount exceeds limits agreed between bank and client |
| BE06 | UnknownEndCustomer | End customer specified is not known at associated Sort/National Bank Code or does no longer exist in the books |
| MD09 | NoMandateServiceOnCustomer | Account is not open to specified Mandate services |
| MD16 | RequestedByCustomer | Cancellation/amendment requested by the debtor |
| NARR | Narrative | Reason is provided as narrative information in the additional reason information |
| NOAS | NoAnswerFromCustomer | No response from beneficiary |
| SL11 | Creditor not on Whitelist of Debtor | Whitelisting service offered by the Debtor Agent; Debtor has not included the Creditor on its “Whitelist” (yet). In the Whitelist the Debtor may list all allowed Creditors to debit Debtor bank account |
| SL12 | Creditor on Blacklist of Debtor | Blacklisting service offered by the Debtor Agent; Debtor included the Creditor on its “Blacklist”. In the Blacklist the Debtor may list all Creditors not allowed to debit Debtor bank account |