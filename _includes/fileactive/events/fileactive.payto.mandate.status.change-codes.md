### PayTo Mandate Status Change Codes

Reason Codes for use when cancelling or suspending a Mandate. 

The reason codes are returned in the [PayTo API Webhook **Mandate Notifications**]({{ site.baseurl }}/fileactive/api/payto-api-webhook).

| Reason Code | Reason Description | Additional Information |
|:---:|---|---|
| AC02 | InvalidDebtorAccountNumber | Debtor account number invalid or missing |
| AC04 | ClosedAccountNumber | Account number specified has been closed on the Receiver's books |
| AC05 | ClosedDebtorAccountNumber | Debtor account number closed |
| AC06 | BlockedAccount | Account specified is blocked, prohibiting posting of transactions against it |
| AC13 | InvalidDebtorAccountType | Debtor Account Type missing or invalid |
| AG01 | TransactionForbidden | Transaction forbidden on this type of account |
| AG03 | TransactionNotSupported | Account type not supported/authorised |
| AM03 | NotAllowedCurrency | Specified message amount is a non-processable currency outside of existing agreement |
| AM12 | InvalidAmount | Amount is invalid or missing |
| AM14 | AmountExceedsAgreedLimit | Transaction amount exceeds limits agreed between bank and client |
| CTAM | ContractAmended | Mandate suspended due to amendment of the contract |
| CTCA | ContractCancellationInitiatedByDebtor | Mandate suspended due to cancellation of the contract, requested by the debtor |
| CTEX | ContractExpired | Mandate suspended due to the contract that expired |
| MCFC | MandateSuspendedFinalCollection | Mandate suspended as final collection took place |
| MCOC | MandateSuspendedOnceOffCollectio | Mandate suspended as the once off collection took place |
| MD07 | EndCustomerDeceased | End customer is deceased |
| MD08 | NoMandateServiceByAgent | Receiving agent does not offer specified Mandate services |
| MD09 | NoMandateServiceOnCustomer | Account is not open to specified Mandate services |
| MD16 | RequestedByCustomer | Cancellation/amendment requested by the debtor |
| MD17 | RequestedByInitiatingParty | Cancellation/amendment requested by the creditor or by the initiating party |
| MD20 | MandateExpired | Mandate cancellation following validity expiration |
| MS02 | NotSpecifiedReasonCustomerGenerated | Reason has not been specified by end customer |
| MS03 | NotSpecifiedReasonAgentGenerated | Reason has not been specified by agent |
| MSUC | MandateSuspended7ConsecutiveUnsuccessfulCollections | Mandate suspended after 7 consecutive unsuccessful collections |
| NARR | Narrative | Reason is provided as narrative information in the additional reason information |
| NOAS | NoAnswerFromCustomer | No response from beneficiary |
| SL01 | Specific Service offered by   Debtor Agent | Due to specific service offered by the Debtor Agent |
| SL11 | Creditor not on Whitelist of Debtor | Whitelisting service offered by the Debtor Agent; Debtor has not included the Creditor on its “Whitelist” (yet). In the Whitelist the Debtor may list all allowed Creditors to debit Debtor bank account |
| SL12 | Creditor on Blacklist of Debtor | Blacklisting service offered by the Debtor Agent; Debtor included the Creditor on its “Blacklist”. In the Blacklist the Debtor may list all Creditors not allowed to debit Debtor bank account |