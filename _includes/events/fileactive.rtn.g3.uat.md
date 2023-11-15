## SG FAST RTN User Acceptance Testing Scenarios

**Question**

What UAT scenarios does ANZ recommend a customer complete prior to activating the SG FAST Real Time Notification service? 

**Answer**

Using the Fileactive Self Service Testing API it is recommended a customer complete the following testing scenarios. <br><br>

<table>
    <thead>
  <tr>
    <th>#</th>
    <th>Scenario</th>
    <th>Description</th>
    <th>RTN Self-Service Request</th>
    <th>SG FAST Payment Notification Response Snipet</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Virtual account customer receipt</td>
    <td>The Corporate Customer is configured with a virtual account and receives a payment to their virtual account</td>
    <td>
    <pre>
  {
    <strong>"account_identification": "800000010",</strong>
    "entry_reference": "Trading transfer",
    "amount": "100.50",
    "debtor_name": "Andras Arato",
    "creditor_name": "Holden Holdings",,
    <strong>"arm_creditor_account_identification": "965323010",</strong>
    "remittance_information": {
      "unstructured": [
        "Testing Virtual account Customer"
      ]
    }
  }
    </pre>
    </td>
    <td>
    <pre>
  {
   "identification": "D942DD0B23674C3FBDC2702ECB0C837F",
   "creation_date_time": "2022-07-27T23:44:01.9842888+00:00",
   <strong> "account_identification": "014814800000010",</strong>
   <strong>"account_issuer": "ANZBSGSXXXX",</strong>
    "entry": [
     {
       "related_parties": {
         <strong>"creditor_account_identification": "965323010",</strong>
         <strong>"creditor_account_issuer": "ANZBSGSXXXX"</strong>
      }
    }
  ]
}
    </pre>
    </td>
  </tr>

  <tr>
    <td>2</td>
    <td>Non-Virtual account customer receipt</td>
    <td>The Corporate Customer receives a payment to their settlement account.</td>
    <td>
    <pre>
  {
    <strong>"account_identification": "800000010",</strong>
    "entry_reference": "Bill payment",
    "amount": "200.25",
    "debtor_name": "Andras Arato",
    "creditor_name": "Holden Holdings",
    "remittance_information": {
      "unstructured": [
        "Testing Non-ARM Customer"
    ]
  }
}
    </pre>
    </td>
    <td>
    <pre>
  {
    "identification": "D942DD0B23674C3FBDC2702ECB0C837F",
    "creation_date_time": "2022-07-27T23:44:01.9842888+00:00",
    <strong>"account_identification": "800000010",</strong>
    <strong>"account_issuer": "ANZBSGSXXXX",</strong>
    "entry": [
      {
       "related_parties": {
          <strong>"creditor_account_identification": "800000010",</strong>
          <strong>"creditor_account_issuer": "ANZBSGSXXXX"</strong>
      }
    }
  ]
}
    </pre>
    </td>
  </tr>

      
  <tr>
    <td>3</td>
    <td>Duplicate Check</td>
    <td>ANZ to reprocess a previously sent Notification which the customer should not process</td>
    <td>n/a</td>
    <td>ANZ will send a previously sent Notification which has the same account_servicer_reference</td>
  </tr>

        
  <tr>
    <td>4</td>
    <td>Invalid API Key</td>
    <td>ANZ to update customer Notificaiton profile with incorrect API Key. Customer to reject Notifications with invalid API key</td>
    <td>Send a valid RTN request</td>
    <td>ANZ will send a well formed Notification which customer should reject with HTTP 40</td>
  </tr>
</tbody>
</table>

