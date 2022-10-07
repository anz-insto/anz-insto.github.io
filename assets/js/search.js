---
layout: null
---
// get details of searchable pages
var store = [{% assign search_pages = "" | split: ',' %}{% for page in site.pages %}{% unless page.url contains '/assets' or page.url contains '/feed.xml' or page.url contains '/404.html' %}
{% assign search_pages = search_pages | push: page %}{% endunless %}{% endfor %}
{% for swagger in site.docs %}{% if swagger.url contains "/api" %}{% assign search_pages = search_pages | push: swagger %}{% endif %}{% endfor %}
{% assign count = 0 %}{% for page in search_pages %}
{
    "ref": {{ count }},
    "title": {{ page.title | jsonify }},
    "url": {{ page.url | jsonify }},
    "content": {{ page.content | strip_html | strip_newlines | jsonify }}.replace(/\s+/g, ' '),
    "description": {% if page.url contains '/api' %}"API Specification"{% elsif page.description %}{{ page.description | jsonify }}{% else %}""{% endif %},
    "section": {% if page.section %}{{ page.section | jsonify }}{% else %}""{% endif %},
    "tags": {% if page.tags %}{{ page.tags | jsonify }}{% else %}""{% endif %}
}{% assign count = count | plus: 1 %}{% unless forloop.last %},{% endunless %}{% endfor %}
];

// create the lunr search index
var idx = lunr(function () {
    this.ref('ref')
    this.field('title')
    this.field('url')
    this.field('content')
    this.field('section')
    this.field('tags')
    store.forEach(function (item) {
        this.add(item)
    }, this)
});

$(document).ready(function () {
    var resultList = $('ul.search-results');
    var inputSearch = $('input#search');
    var minSearchLength = 2;
    var maxDescriptionLength = 100;
    
    resultList.hide();

    // Search and show results in real 
    inputSearch.on('keyup', function () {
        // search on value if greater than 3 chars
        if($(this).val().length >= minSearchLength) {
            resultList.empty();
            var results = idx.search($(this).val() + "*");
            var resultDetails = results.map(function (item) {
                return store.filter(function (value){
                    return value.ref == item.ref; 
                })[0];
            });
            // show search results
            if(resultDetails.length == 0) {
                resultList.append('<li class="search-item"><span>No results found</span></li>');
            }
            else {
                resultDetails.forEach(function (result) {
                    var searchitem = '<li class="search-item"><a href="{{ site.baseurl }}' 
                                        + result.url 
                                        + '"><span class="search-heading">' 
                                        + result.title 
                                        + '</span><small>' 
                                        + result.description.substring(0,maxDescriptionLength)
                                        + '</small></a></li>';
                    resultList.append(searchitem);
                });
            }
            resultList.show();
        }
        // if search is empty remove results window
        if(!$(this).val().length) {
            resultList.empty();
            resultList.hide();
        }
    });

    // Empty and hide result list where input is cleared 
    inputSearch.on('search', function () {
        if(this.value == '') {
            resultList.empty().hide();
        }
    });

    // Remove the results list and input text on click outside searchbox and result list elements
    $(document).on('click', function(evt) {
        if(!$(evt.target).closest(inputSearch).length && !$(evt.target).closest(resultList).length) {
            resultList.empty().hide();
            inputSearch.val('');
        }
    });
});

