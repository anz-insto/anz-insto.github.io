
### Alias Information

| Alias Identifier Type | Example | Description                   |
| :---------------------------------- | :------------------------------------- | :------------------------------------------------------------------------------------ |
| TELI - TELEPHONE NUMBER             | +61-397656547 (landline) or +61-423765879 (mobile) or +61-131234 (professional) | Must consist of a “+” followed by the country code (from 1 to 3 characters) then a “-“ and finally, any combination of numbers (up to 30 characters).Participants should use the country code from the list of ITU-T Recommendation E.164 Assigned Country Codes. NPPA will communicate any changes.       |
| EMAL - EMAIL ADDRESS                | npp@mail.com | Consists of a character string with a maximum length of 256 characters in lower case. This must include the “@” symbol with leading and trailing characters and no white spaces.     |
| AUBN - AUSTRALIAN BUSINESS NUMBER   | 601428737 | Consists of a nine to eleven digit number where the first two digits are a checksum. An ABN is assigned by the Australian Taxation Office to identify an individual Australian Business.An ACN, ARBN or ARSN is allocated by ASIC. |
| ORGN - ORGANISATION ID              | aardvark plumbing mosman nsw tru blu loyalty program | The Identifier must include the company/organisation name and both/either the description of the business/trade/ product/campaign and/or geographic location (suburb/town/state). Maximum of 256 characters in lower case, to be drawn from Printable ASCII (decimal 32-126) and without leading or trailing whitespace |


### Alias Regular Expressions (REGEX)

Regular Expression posted as a sample to preserve REGEX formatting

**Regular Expressions**



<table>
<thead>
  <tr>
    <th>Alias Identifier Type</th>
    <th>Alias Regular Expression</th>
  </tr>
</thead>
    <tr>
        <td>TELI - TELEPHONE NUMBER</td>
        <td>^\+[0-9]{1,3}-[1-9]{1,1}[0-9]{1,29}$   </td>
    </tr>
    <tr>
        <td>EMAL - EMAIL ADDRESS</td>
        <td>^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)$  </td>
    </tr>
    <tr>
        <td>AUBN - AUSTRALIAN BUSINESS NUMBER </td>
        <td>^((\d{9})|(\d{11}))$  </td>
    </tr>
    <tr>
        <td>ORGN - ORGANISATION ID    </td>
        <td>^[!-@[-~][ -@[-~]{0,254}[!-@[-~]$ </td>
    </tr>
  </table>