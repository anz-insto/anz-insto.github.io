---
layout: default
title: Client Money Central Channel Documentation - Changelog
description: All notable changes to the Client Money Central solution will be documented here.
---

# Changelog
All notable changes to the ANZ Cash Management Central solution will be documented here.

## Contents

- [1.0.5 - Updated ACMC product specific API endpoint (ARROW-2748)](#1.0.4)
- [1.0.4 - Updated ACMC product specific API endpoint (ARROW-982)](#1.0.4)
- [1.0.3 - Added information about graphql path to the main page (ARROW-830)](#1.0.3)
- [1.0.2 - Formatting of Query pages, updated GraphQL Schema (ARROW-470)](#1.0.2)
- [1.0.1 - Add additional Queries, spelling and grammar fixes (ARROW-470)](#1.0.1)
- [1.0.0 - Initial Version of Client Money Central solution (ARROW-179)](#1.0.0)


---
<a name="1.0.5"></a>
## [1.0.5] - 2023-12-20

### Added
- Added account management query examples.
- Added any client variable query examples.
- Added client detail company query examples.
- Added client detail individual query examples.
- Added client detail trust query examples.
- Added list reversals query examples.
- Added match reversals query examples.
- Added payment command query examples.
- Added client detail individual query examples.
- Added update individual party query examples.

### Changed
- Updated Accounts examples.
- Updated Allocations examples.
- Updated Interrogate party examples.
- Updated sample examples.
- Updated Create Individual party examples.
- Updated Create Trust party examples.
- Updated Individual Result examples.
- Updated Trust Result examples.
- Updated Company Result examples.
- Updated Showing account number examples.
- Updated Transfer encrypted payload examples.
- Updated aggregate payment examples.
- Updated aggregate receipt examples.

### Deprecated
- noting depricated

### Removed
- nothing removed.

### Fixed
- nothing fixed.

### Security
- no security updates.


<a name="1.0.4"></a>
## [1.0.4] - 2022-07-18

### Added
- nothing added.

### Changed
- Updated ACMC product specific link for: [accounts]({{site.baseurl}}/api/acmc/accounts.html).
- Updated ACMC product specific link for: [allocations]({{site.baseurl}}/api/acmc/allocations.html).
- Updated ACMC product specific link for: [general_queries]({{site.baseurl}}/api/acmc/general_queries.html).
- Updated ACMC product specific link for: [open_client_account]({{site.baseurl}}/api/acmc/open_client_account.html).
- Updated ACMC product specific link for: [parties]({{site.baseurl}}/api/acmc/parties.html).
- Updated ACMC product specific link for: [products]({{site.baseurl}}/api/acmc/products.html).
- Updated ACMC product specific link for: [queries_samples]({{site.baseurl}}/api/acmc/queries_samples.html).
- Updated ACMC product specific link for: [queries]({{site.baseurl}}/api/acmc/queries.html).
- Updated ACMC product specific link for: [transaction_queries]({{site.baseurl}}/api/acmc/transaction_queries.html).
- Updated ACMC product specific API endpoint for OAuth authentication: [oauth]({{site.baseurl}}/api/acmc/oauth.html).
- Updated ACMC product specific API endpoint OAuth JWT AUD.
- Added ACMC product API URL certificate.

### Deprecated
- Deprecated Auth API endpoint containing CCM path for OAuth authentication.
- Deprecated GraphQL API endpoint containing CCM path.

### Removed
- nothing removed.

### Fixed
- nothing fixed.

### Security
- no security updates.

<a name="1.0.3"></a>
## [1.0.3] - 2021-12-09

### Added
- [Information on the GraphQL path]({{ site.baseurl }}/api/ccm/ccm/index.html)

### Changed
- nothing changed.

### Deprecated
- nothing deprecated.

### Removed
- nothing removed.

### Fixed
- nothing fixed.

### Security
- no security updates.

<a name="1.0.2"></a>
## [1.0.2] - 2021-03-24

### Added
- [General Queries, Parties]({{ site.baseurl }}/api/ccm/general_queries.html)
* Enquire on `Company or Trust`, using a variable
* Enquire on any `Party(ies)` using a variable
* [Allocations Processing]({{ site.baseurl }}/api/ccm/allocations.html)

### Changed
- Updated GraphQL Schema
- Spelling and Grammar fixes
- Formatting of query pages

### Deprecated
- nothing deprecated.

### Removed
- nothing removed

### Fixed
- nothing fixed.

### Security
- no security updates.

<a name="1.0.1"></a>
## [1.0.1] - 2021-03-08

### Added
- General Queries
* Party Enquiries
* Account Enquiries
* Product Enquiries

### Changed
- Spelling and grammer issues on index page
- Fixed bad links on commandID reference pages

### Deprecated
- nothing deprecated.

### Removed
- Link to stubbed pages

### Fixed
- nothing fixed.

### Security
- no security updates.

<a name="1.0.0"></a>
## [1.0.0] - 2020-10-31

### Added

- GraphQL Schema Documents
- FAQ
- Changelog (this page)
- Account Management
- Party Management

### Changed
- nothing changed.

### Deprecated
- nothing deprecated.

### Removed
- nothing removed.

### Fixed
- nothing fixed.

### Security
- no security updates.