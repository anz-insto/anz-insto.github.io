# Fileactive Developer Portal
Documentation for ANZ Fileactive API offering.

## Contribution
Details on how to contribute fixes and improvements to the Developer Portal coming soon...

## Prequisites
 - [Ruby > 2.0](https://www.ruby-lang.org/en/documentation/installation)
 - [Rubygems](https://rubygems.org/pages/download)
 - Jekyll (& bundler) `gem install jekyll bundler`
 - [Redoc CLI](https://redocly.com/docs/redoc/deployment/cli)

## Running the Developer Portal locally
1. Clone this repository
1. Open a terminal in the repository folder then run the following:
```bash
bundle install
bundle exec jekyll serve
```
1. Open your browser to http://localhost:4000/docs

When running the command above the content of the site will be watched and changes will automatically be reflected

## FAQ
FAQ questions and answers are contained as yaml in `/_data/faq.yaml`

### Search
Search is run using [lunr.js](https://lunrjs.com/) with search script located in `/assets/js/search.js`
