---
title: Fileactive Testing API
layout: api
---


  <head>

    {% include head-api.html %}
    {% raw %}
    <script src="https://cdn.redoc.ly/redoc/v2.0.0/bundles/redoc.standalone.js"></script><style data-styled="true" data-styled-version="5.3.3">.fcjMZs{width:calc(100% - 40%);padding:0 40px;}/*!sc*/
@media print,screen and (max-width:75rem){.fcjMZs{width:100%;padding:40px 40px;}}/*!sc*/
.frutYI{width:calc(100% - 40%);padding:0 40px;}/*!sc*/
@media print,screen and (max-width:75rem){.frutYI{width:100%;padding:0px 40px;}}/*!sc*/
data-styled.g4[id="sc-hKwDye"]{content:"fcjMZs,frutYI,"}/*!sc*/
.kKqedw{padding:40px 0;}/*!sc*/
.kKqedw:last-child{min-height:calc(100vh + 1px);}/*!sc*/
.sc-eCImPb > .sc-eCImPb:last-child{min-height:initial;}/*!sc*/
@media print,screen and (max-width:75rem){.kKqedw{padding:0;}}/*!sc*/
.hexvPn{padding:40px 0;position:relative;}/*!sc*/
.hexvPn:last-child{min-height:calc(100vh + 1px);}/*!sc*/
.sc-eCImPb > .sc-eCImPb:last-child{min-height:initial;}/*!sc*/
@media print,screen and (max-width:75rem){.hexvPn{padding:0;}}/*!sc*/
.hexvPn:not(:last-of-type):after{position:absolute;bottom:0;width:100%;display:block;content:'';border-bottom:1px solid rgba(0,0,0,0.2);}/*!sc*/
data-styled.g5[id="sc-eCImPb"]{content:"kKqedw,hexvPn,"}/*!sc*/
.vSqXI{width:40%;color:#ffffff;background-color:#263238;padding:0 40px;}/*!sc*/
@media print,screen and (max-width:75rem){.vSqXI{width:100%;padding:40px 40px;}}/*!sc*/
data-styled.g6[id="sc-jRQBWg"]{content:"vSqXI,"}/*!sc*/
.dKDnzb{background-color:#263238;}/*!sc*/
data-styled.g7[id="sc-gKclnd"]{content:"dKDnzb,"}/*!sc*/
.jTXZbd{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:0;}/*!sc*/
@media print,screen and (max-width:75rem){.jTXZbd{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}/*!sc*/
data-styled.g8[id="sc-iCfMLu"]{content:"jTXZbd,"}/*!sc*/
.gZCBCh{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:600;font-size:1.85714em;line-height:1.6em;color:#333333;}/*!sc*/
data-styled.g9[id="sc-furwcr"]{content:"gZCBCh,"}/*!sc*/
.dEelKS{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:600;font-size:1.57143em;line-height:1.6em;color:#333333;margin:0 0 20px;}/*!sc*/
data-styled.g10[id="sc-pVTFL"]{content:"dEelKS,"}/*!sc*/
.hwMGJl{color:#ffffff;}/*!sc*/
data-styled.g12[id="sc-kDTinF"]{content:"hwMGJl,"}/*!sc*/
.kyZwVG{border-bottom:1px solid rgba(38,50,56,0.3);margin:1em 0 1em 0;color:rgba(38,50,56,0.5);font-weight:normal;text-transform:uppercase;font-size:0.929em;line-height:20px;}/*!sc*/
data-styled.g13[id="sc-iqseJM"]{content:"kyZwVG,"}/*!sc*/
.bNUQy{cursor:pointer;margin-left:-20px;padding:0;line-height:1;width:20px;display:inline-block;outline:0;}/*!sc*/
.bNUQy:before{content:'';width:15px;height:15px;background-size:contain;background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDU5LjcgMjMzLjRsLTkwLjUgOTAuNWMtNTAgNTAtMTMxIDUwLTE4MSAwIC03LjktNy44LTE0LTE2LjctMTkuNC0yNS44bDQyLjEtNDIuMWMyLTIgNC41LTMuMiA2LjgtNC41IDIuOSA5LjkgOCAxOS4zIDE1LjggMjcuMiAyNSAyNSA2NS42IDI0LjkgOTAuNSAwbDkwLjUtOTAuNWMyNS0yNSAyNS02NS42IDAtOTAuNSAtMjQuOS0yNS02NS41LTI1LTkwLjUgMGwtMzIuMiAzMi4yYy0yNi4xLTEwLjItNTQuMi0xMi45LTgxLjYtOC45bDY4LjYtNjguNmM1MC01MCAxMzEtNTAgMTgxIDBDNTA5LjYgMTAyLjMgNTA5LjYgMTgzLjQgNDU5LjcgMjMzLjR6TTIyMC4zIDM4Mi4ybC0zMi4yIDMyLjJjLTI1IDI0LjktNjUuNiAyNC45LTkwLjUgMCAtMjUtMjUtMjUtNjUuNiAwLTkwLjVsOTAuNS05MC41YzI1LTI1IDY1LjUtMjUgOTAuNSAwIDcuOCA3LjggMTIuOSAxNy4yIDE1LjggMjcuMSAyLjQtMS40IDQuOC0yLjUgNi44LTQuNWw0Mi4xLTQyYy01LjQtOS4yLTExLjYtMTgtMTkuNC0yNS44IC01MC01MC0xMzEtNTAtMTgxIDBsLTkwLjUgOTAuNWMtNTAgNTAtNTAgMTMxIDAgMTgxIDUwIDUwIDEzMSA1MCAxODEgMGw2OC42LTY4LjZDMjc0LjYgMzk1LjEgMjQ2LjQgMzkyLjMgMjIwLjMgMzgyLjJ6Ii8+PC9zdmc+Cg==');opacity:0.5;visibility:hidden;display:inline-block;vertical-align:middle;}/*!sc*/
h1:hover > .sc-crHmcD::before,h2:hover > .bNUQy::before,.bNUQy:hover::before{visibility:visible;}/*!sc*/
data-styled.g14[id="sc-crHmcD"]{content:"bNUQy,"}/*!sc*/
.jLPfXH{height:18px;width:18px;min-width:18px;vertical-align:middle;float:right;-webkit-transition:-webkit-transform 0.2s ease-out;-webkit-transition:transform 0.2s ease-out;transition:transform 0.2s ease-out;-webkit-transform:rotateZ(-90deg);-ms-transform:rotateZ(-90deg);transform:rotateZ(-90deg);}/*!sc*/
.jCLLyq{height:1.3em;width:1.3em;min-width:1.3em;vertical-align:middle;-webkit-transition:-webkit-transform 0.2s ease-out;-webkit-transition:transform 0.2s ease-out;transition:transform 0.2s ease-out;-webkit-transform:rotateZ(-90deg);-ms-transform:rotateZ(-90deg);transform:rotateZ(-90deg);}/*!sc*/
.cUKGZj{height:18px;width:18px;min-width:18px;vertical-align:middle;-webkit-transition:-webkit-transform 0.2s ease-out;-webkit-transition:transform 0.2s ease-out;transition:transform 0.2s ease-out;-webkit-transform:rotateZ(-90deg);-ms-transform:rotateZ(-90deg);transform:rotateZ(-90deg);}/*!sc*/
.bPEzCN{height:1.5em;width:1.5em;min-width:1.5em;vertical-align:middle;float:left;-webkit-transition:-webkit-transform 0.2s ease-out;-webkit-transition:transform 0.2s ease-out;transition:transform 0.2s ease-out;-webkit-transform:rotateZ(-90deg);-ms-transform:rotateZ(-90deg);transform:rotateZ(-90deg);}/*!sc*/
.bPEzCN polygon{fill:#1d8127;}/*!sc*/
.FBjwd{height:1.5em;width:1.5em;min-width:1.5em;vertical-align:middle;float:left;-webkit-transition:-webkit-transform 0.2s ease-out;-webkit-transition:transform 0.2s ease-out;transition:transform 0.2s ease-out;-webkit-transform:rotateZ(-90deg);-ms-transform:rotateZ(-90deg);transform:rotateZ(-90deg);}/*!sc*/
.FBjwd polygon{fill:#d41f1c;}/*!sc*/
.laPRNF{height:20px;width:20px;min-width:20px;vertical-align:middle;float:right;-webkit-transition:-webkit-transform 0.2s ease-out;-webkit-transition:transform 0.2s ease-out;transition:transform 0.2s ease-out;-webkit-transform:rotateZ(0);-ms-transform:rotateZ(0);transform:rotateZ(0);}/*!sc*/
.laPRNF polygon{fill:white;}/*!sc*/
data-styled.g15[id="sc-egiyK"]{content:"jLPfXH,jCLLyq,cUKGZj,bPEzCN,FBjwd,laPRNF,"}/*!sc*/
.kCCtqV{border-left:1px solid #7c7cbb;box-sizing:border-box;position:relative;padding:10px 10px 10px 0;}/*!sc*/
@media screen and (max-width:50rem){.kCCtqV{display:block;overflow:hidden;}}/*!sc*/
tr:first-of-type > .sc-hBUSln,tr.last > .kCCtqV{border-left-width:0;background-position:top left;background-repeat:no-repeat;background-size:1px 100%;}/*!sc*/
tr:first-of-type > .sc-hBUSln{background-image:linear-gradient( to bottom, transparent 0%, transparent 22px, #7c7cbb 22px, #7c7cbb 100% );}/*!sc*/
tr.last > .sc-hBUSln{background-image:linear-gradient( to bottom, #7c7cbb 0%, #7c7cbb 22px, transparent 22px, transparent 100% );}/*!sc*/
tr.last + tr > .sc-hBUSln{border-left-color:transparent;}/*!sc*/
tr.last:first-child > .sc-hBUSln{background:none;border-left-color:transparent;}/*!sc*/
data-styled.g18[id="sc-hBUSln"]{content:"kCCtqV,"}/*!sc*/
.fwnkRw{vertical-align:top;line-height:20px;white-space:nowrap;font-size:13px;font-family:Courier,monospace;}/*!sc*/
.fwnkRw.deprecated{-webkit-text-decoration:line-through;text-decoration:line-through;color:#707070;}/*!sc*/
data-styled.g20[id="sc-fFeiMQ"]{content:"fwnkRw,"}/*!sc*/
.fOwWgB{border-bottom:1px solid #9fb4be;padding:10px 0;width:75%;box-sizing:border-box;}/*!sc*/
tr.expanded .sc-bkkeKt{border-bottom:none;}/*!sc*/
@media screen and (max-width:50rem){.fOwWgB{padding:0 20px;border-bottom:none;border-left:1px solid #7c7cbb;}tr.last > .sc-bkkeKt{border-left:none;}}/*!sc*/
data-styled.g21[id="sc-bkkeKt"]{content:"fOwWgB,"}/*!sc*/
.fMdASL{color:#7c7cbb;font-family:Courier,monospace;margin-right:10px;}/*!sc*/
.fMdASL::before{content:'';display:inline-block;vertical-align:middle;width:10px;height:1px;background:#7c7cbb;}/*!sc*/
.fMdASL::after{content:'';display:inline-block;vertical-align:middle;width:1px;background:#7c7cbb;height:7px;}/*!sc*/
data-styled.g22[id="sc-ieecCq"]{content:"fMdASL,"}/*!sc*/
.jJnLYz{border-collapse:separate;border-radius:3px;font-size:16px;border-spacing:0;width:100%;}/*!sc*/
.jJnLYz > tr{vertical-align:middle;}/*!sc*/
@media screen and (max-width:50rem){.jJnLYz{display:block;}.jJnLYz > tr,.jJnLYz > tbody > tr{display:block;}}/*!sc*/
@media screen and (max-width:50rem) and (-ms-high-contrast:none){.jJnLYz td{float:left;width:100%;}}/*!sc*/
.jJnLYz .sc-dJjYzT,.jJnLYz .sc-dJjYzT .sc-dJjYzT .sc-dJjYzT,.jJnLYz .sc-dJjYzT .sc-dJjYzT .sc-dJjYzT .sc-dJjYzT .sc-dJjYzT{margin:1em;margin-right:0;background:#fafafa;}/*!sc*/
.jJnLYz .sc-dJjYzT .sc-dJjYzT,.jJnLYz .sc-dJjYzT .sc-dJjYzT .sc-dJjYzT .sc-dJjYzT,.jJnLYz .sc-dJjYzT .sc-dJjYzT .sc-dJjYzT .sc-dJjYzT .sc-dJjYzT .sc-dJjYzT{background:#ffffff;}/*!sc*/
data-styled.g24[id="sc-hGPBjI"]{content:"jJnLYz,"}/*!sc*/
.eCLDJY > ul{list-style:none;padding:0;margin:0;margin:0 -5px;}/*!sc*/
.eCLDJY > ul > li{padding:5px 10px;display:inline-block;background-color:#11171a;border-bottom:1px solid rgba(0,0,0,0.5);cursor:pointer;text-align:center;outline:none;color:#ccc;margin:0 5px 5px 5px;border:1px solid #07090b;border-radius:5px;min-width:60px;font-size:0.9em;font-weight:bold;}/*!sc*/
.eCLDJY > ul > li.react-tabs__tab--selected{color:#333333;background:#ffffff;}/*!sc*/
.eCLDJY > ul > li.react-tabs__tab--selected:focus{outline:auto;}/*!sc*/
.eCLDJY > ul > li:only-child{-webkit-flex:none;-ms-flex:none;flex:none;min-width:100px;}/*!sc*/
.eCLDJY > ul > li.tab-success{color:#1d8127;}/*!sc*/
.eCLDJY > ul > li.tab-redirect{color:#ffa500;}/*!sc*/
.eCLDJY > ul > li.tab-info{color:#87ceeb;}/*!sc*/
.eCLDJY > ul > li.tab-error{color:#d41f1c;}/*!sc*/
.eCLDJY > .react-tabs__tab-panel{background:#11171a;}/*!sc*/
.eCLDJY > .react-tabs__tab-panel > div,.eCLDJY > .react-tabs__tab-panel > pre{padding:20px;margin:0;}/*!sc*/
.eCLDJY > .react-tabs__tab-panel > div > pre{padding:0;}/*!sc*/
data-styled.g30[id="sc-cxpSdN"]{content:"eCLDJY,"}/*!sc*/
.hGZPxu code[class*='language-'],.hGZPxu pre[class*='language-']{text-shadow:0 -0.1em 0.2em black;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}/*!sc*/
@media print{.hGZPxu code[class*='language-'],.hGZPxu pre[class*='language-']{text-shadow:none;}}/*!sc*/
.hGZPxu pre[class*='language-']{padding:1em;margin:0.5em 0;overflow:auto;}/*!sc*/
.hGZPxu .token.comment,.hGZPxu .token.prolog,.hGZPxu .token.doctype,.hGZPxu .token.cdata{color:hsl(30,20%,50%);}/*!sc*/
.hGZPxu .token.punctuation{opacity:0.7;}/*!sc*/
.hGZPxu .namespace{opacity:0.7;}/*!sc*/
.hGZPxu .token.property,.hGZPxu .token.tag,.hGZPxu .token.number,.hGZPxu .token.constant,.hGZPxu .token.symbol{color:#4a8bb3;}/*!sc*/
.hGZPxu .token.boolean{color:#e64441;}/*!sc*/
.hGZPxu .token.selector,.hGZPxu .token.attr-name,.hGZPxu .token.string,.hGZPxu .token.char,.hGZPxu .token.builtin,.hGZPxu .token.inserted{color:#a0fbaa;}/*!sc*/
.hGZPxu .token.selector + a,.hGZPxu .token.attr-name + a,.hGZPxu .token.string + a,.hGZPxu .token.char + a,.hGZPxu .token.builtin + a,.hGZPxu .token.inserted + a,.hGZPxu .token.selector + a:visited,.hGZPxu .token.attr-name + a:visited,.hGZPxu .token.string + a:visited,.hGZPxu .token.char + a:visited,.hGZPxu .token.builtin + a:visited,.hGZPxu .token.inserted + a:visited{color:#4ed2ba;-webkit-text-decoration:underline;text-decoration:underline;}/*!sc*/
.hGZPxu .token.property.string{color:white;}/*!sc*/
.hGZPxu .token.operator,.hGZPxu .token.entity,.hGZPxu .token.url,.hGZPxu .token.variable{color:hsl(40,90%,60%);}/*!sc*/
.hGZPxu .token.atrule,.hGZPxu .token.attr-value,.hGZPxu .token.keyword{color:hsl(350,40%,70%);}/*!sc*/
.hGZPxu .token.regex,.hGZPxu .token.important{color:#e90;}/*!sc*/
.hGZPxu .token.important,.hGZPxu .token.bold{font-weight:bold;}/*!sc*/
.hGZPxu .token.italic{font-style:italic;}/*!sc*/
.hGZPxu .token.entity{cursor:help;}/*!sc*/
.hGZPxu .token.deleted{color:red;}/*!sc*/
data-styled.g32[id="sc-iJKOTD"]{content:"hGZPxu,"}/*!sc*/
.fpoFZz{opacity:0.7;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;text-align:right;}/*!sc*/
.fpoFZz:focus-within{opacity:1;}/*!sc*/
.fpoFZz > button{background-color:transparent;border:0;color:inherit;padding:2px 10px;font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5em;cursor:pointer;outline:0;}/*!sc*/
.fpoFZz > button:hover,.fpoFZz > button:focus{background:rgba(255,255,255,0.1);}/*!sc*/
data-styled.g33[id="sc-giYglK"]{content:"fpoFZz,"}/*!sc*/
.eqZXtE{position:relative;}/*!sc*/
data-styled.g38[id="sc-ikJyIC"]{content:"eqZXtE,"}/*!sc*/
.hgRRjA{margin-left:10px;text-transform:none;font-size:0.929em;color:black;}/*!sc*/
data-styled.g42[id="sc-cCcXHH"]{content:"hgRRjA,"}/*!sc*/
.gTacTs{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5em;}/*!sc*/
.gTacTs p:last-child{margin-bottom:0;}/*!sc*/
.gTacTs h1{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:600;font-size:1.85714em;line-height:1.6em;color:#32329f;margin-top:0;}/*!sc*/
.gTacTs h2{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:600;font-size:1.57143em;line-height:1.6em;color:#333333;}/*!sc*/
.gTacTs code{color:#e53935;background-color:rgba(38,50,56,0.05);font-family:Courier,monospace;border-radius:2px;border:1px solid rgba(38,50,56,0.1);padding:0 5px;font-size:13px;font-weight:400;word-break:break-word;}/*!sc*/
.gTacTs pre{font-family:Courier,monospace;white-space:pre;background-color:#11171a;color:white;padding:20px;overflow-x:auto;line-height:normal;border-radius:0px;border:1px solid rgba(38,50,56,0.1);}/*!sc*/
.gTacTs pre code{background-color:transparent;color:white;padding:0;}/*!sc*/
.gTacTs pre code:before,.gTacTs pre code:after{content:none;}/*!sc*/
.gTacTs blockquote{margin:0;margin-bottom:1em;padding:0 15px;color:#777;border-left:4px solid #ddd;}/*!sc*/
.gTacTs img{max-width:100%;box-sizing:content-box;}/*!sc*/
.gTacTs ul,.gTacTs ol{padding-left:2em;margin:0;margin-bottom:1em;}/*!sc*/
.gTacTs ul ul,.gTacTs ol ul,.gTacTs ul ol,.gTacTs ol ol{margin-bottom:0;margin-top:0;}/*!sc*/
.gTacTs table{display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all;border-collapse:collapse;border-spacing:0;margin-top:1.5em;margin-bottom:1.5em;}/*!sc*/
.gTacTs table tr{background-color:#fff;border-top:1px solid #ccc;}/*!sc*/
.gTacTs table tr:nth-child(2n){background-color:#fafafa;}/*!sc*/
.gTacTs table th,.gTacTs table td{padding:6px 13px;border:1px solid #ddd;}/*!sc*/
.gTacTs table th{text-align:left;font-weight:bold;}/*!sc*/
.gTacTs .share-link{cursor:pointer;margin-left:-20px;padding:0;line-height:1;width:20px;display:inline-block;outline:0;}/*!sc*/
.gTacTs .share-link:before{content:'';width:15px;height:15px;background-size:contain;background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDU5LjcgMjMzLjRsLTkwLjUgOTAuNWMtNTAgNTAtMTMxIDUwLTE4MSAwIC03LjktNy44LTE0LTE2LjctMTkuNC0yNS44bDQyLjEtNDIuMWMyLTIgNC41LTMuMiA2LjgtNC41IDIuOSA5LjkgOCAxOS4zIDE1LjggMjcuMiAyNSAyNSA2NS42IDI0LjkgOTAuNSAwbDkwLjUtOTAuNWMyNS0yNSAyNS02NS42IDAtOTAuNSAtMjQuOS0yNS02NS41LTI1LTkwLjUgMGwtMzIuMiAzMi4yYy0yNi4xLTEwLjItNTQuMi0xMi45LTgxLjYtOC45bDY4LjYtNjguNmM1MC01MCAxMzEtNTAgMTgxIDBDNTA5LjYgMTAyLjMgNTA5LjYgMTgzLjQgNDU5LjcgMjMzLjR6TTIyMC4zIDM4Mi4ybC0zMi4yIDMyLjJjLTI1IDI0LjktNjUuNiAyNC45LTkwLjUgMCAtMjUtMjUtMjUtNjUuNiAwLTkwLjVsOTAuNS05MC41YzI1LTI1IDY1LjUtMjUgOTAuNSAwIDcuOCA3LjggMTIuOSAxNy4yIDE1LjggMjcuMSAyLjQtMS40IDQuOC0yLjUgNi44LTQuNWw0Mi4xLTQyYy01LjQtOS4yLTExLjYtMTgtMTkuNC0yNS44IC01MC01MC0xMzEtNTAtMTgxIDBsLTkwLjUgOTAuNWMtNTAgNTAtNTAgMTMxIDAgMTgxIDUwIDUwIDEzMSA1MCAxODEgMGw2OC42LTY4LjZDMjc0LjYgMzk1LjEgMjQ2LjQgMzkyLjMgMjIwLjMgMzgyLjJ6Ii8+PC9zdmc+Cg==');opacity:0.5;visibility:hidden;display:inline-block;vertical-align:middle;}/*!sc*/
.gTacTs h1:hover > .share-link::before,.gTacTs h2:hover > .share-link::before,.gTacTs .share-link:hover::before{visibility:visible;}/*!sc*/
.gTacTs a{-webkit-text-decoration:auto;text-decoration:auto;color:#32329f;}/*!sc*/
.gTacTs a:visited{color:#32329f;}/*!sc*/
.gTacTs a:hover{color:#6868cf;-webkit-text-decoration:auto;text-decoration:auto;}/*!sc*/
.jCFAvK{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5em;}/*!sc*/
.jCFAvK p:last-child{margin-bottom:0;}/*!sc*/
.jCFAvK p:first-child{margin-top:0;}/*!sc*/
.jCFAvK p:last-child{margin-bottom:0;}/*!sc*/
.jCFAvK h1{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:600;font-size:1.85714em;line-height:1.6em;color:#32329f;margin-top:0;}/*!sc*/
.jCFAvK h2{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:600;font-size:1.57143em;line-height:1.6em;color:#333333;}/*!sc*/
.jCFAvK code{color:#e53935;background-color:rgba(38,50,56,0.05);font-family:Courier,monospace;border-radius:2px;border:1px solid rgba(38,50,56,0.1);padding:0 5px;font-size:13px;font-weight:400;word-break:break-word;}/*!sc*/
.jCFAvK pre{font-family:Courier,monospace;white-space:pre;background-color:#11171a;color:white;padding:20px;overflow-x:auto;line-height:normal;border-radius:0px;border:1px solid rgba(38,50,56,0.1);}/*!sc*/
.jCFAvK pre code{background-color:transparent;color:white;padding:0;}/*!sc*/
.jCFAvK pre code:before,.jCFAvK pre code:after{content:none;}/*!sc*/
.jCFAvK blockquote{margin:0;margin-bottom:1em;padding:0 15px;color:#777;border-left:4px solid #ddd;}/*!sc*/
.jCFAvK img{max-width:100%;box-sizing:content-box;}/*!sc*/
.jCFAvK ul,.jCFAvK ol{padding-left:2em;margin:0;margin-bottom:1em;}/*!sc*/
.jCFAvK ul ul,.jCFAvK ol ul,.jCFAvK ul ol,.jCFAvK ol ol{margin-bottom:0;margin-top:0;}/*!sc*/
.jCFAvK table{display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all;border-collapse:collapse;border-spacing:0;margin-top:1.5em;margin-bottom:1.5em;}/*!sc*/
.jCFAvK table tr{background-color:#fff;border-top:1px solid #ccc;}/*!sc*/
.jCFAvK table tr:nth-child(2n){background-color:#fafafa;}/*!sc*/
.jCFAvK table th,.jCFAvK table td{padding:6px 13px;border:1px solid #ddd;}/*!sc*/
.jCFAvK table th{text-align:left;font-weight:bold;}/*!sc*/
.jCFAvK .share-link{cursor:pointer;margin-left:-20px;padding:0;line-height:1;width:20px;display:inline-block;outline:0;}/*!sc*/
.jCFAvK .share-link:before{content:'';width:15px;height:15px;background-size:contain;background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDU5LjcgMjMzLjRsLTkwLjUgOTAuNWMtNTAgNTAtMTMxIDUwLTE4MSAwIC03LjktNy44LTE0LTE2LjctMTkuNC0yNS44bDQyLjEtNDIuMWMyLTIgNC41LTMuMiA2LjgtNC41IDIuOSA5LjkgOCAxOS4zIDE1LjggMjcuMiAyNSAyNSA2NS42IDI0LjkgOTAuNSAwbDkwLjUtOTAuNWMyNS0yNSAyNS02NS42IDAtOTAuNSAtMjQuOS0yNS02NS41LTI1LTkwLjUgMGwtMzIuMiAzMi4yYy0yNi4xLTEwLjItNTQuMi0xMi45LTgxLjYtOC45bDY4LjYtNjguNmM1MC01MCAxMzEtNTAgMTgxIDBDNTA5LjYgMTAyLjMgNTA5LjYgMTgzLjQgNDU5LjcgMjMzLjR6TTIyMC4zIDM4Mi4ybC0zMi4yIDMyLjJjLTI1IDI0LjktNjUuNiAyNC45LTkwLjUgMCAtMjUtMjUtMjUtNjUuNiAwLTkwLjVsOTAuNS05MC41YzI1LTI1IDY1LjUtMjUgOTAuNSAwIDcuOCA3LjggMTIuOSAxNy4yIDE1LjggMjcuMSAyLjQtMS40IDQuOC0yLjUgNi44LTQuNWw0Mi4xLTQyYy01LjQtOS4yLTExLjYtMTgtMTkuNC0yNS44IC01MC01MC0xMzEtNTAtMTgxIDBsLTkwLjUgOTAuNWMtNTAgNTAtNTAgMTMxIDAgMTgxIDUwIDUwIDEzMSA1MCAxODEgMGw2OC42LTY4LjZDMjc0LjYgMzk1LjEgMjQ2LjQgMzkyLjMgMjIwLjMgMzgyLjJ6Ii8+PC9zdmc+Cg==');opacity:0.5;visibility:hidden;display:inline-block;vertical-align:middle;}/*!sc*/
.jCFAvK h1:hover > .share-link::before,.jCFAvK h2:hover > .share-link::before,.jCFAvK .share-link:hover::before{visibility:visible;}/*!sc*/
.jCFAvK a{-webkit-text-decoration:auto;text-decoration:auto;color:#32329f;}/*!sc*/
.jCFAvK a:visited{color:#32329f;}/*!sc*/
.jCFAvK a:hover{color:#6868cf;-webkit-text-decoration:auto;text-decoration:auto;}/*!sc*/
data-styled.g43[id="sc-cidDSM"]{content:"gTacTs,jCFAvK,"}/*!sc*/
.iDCylP{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5em;}/*!sc*/
.iDCylP p:last-child{margin-bottom:0;}/*!sc*/
.iDCylP p:first-child{margin-top:0;}/*!sc*/
.iDCylP p:last-child{margin-bottom:0;}/*!sc*/
.iDCylP p{display:inline-block;}/*!sc*/
.iDCylP h1{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:600;font-size:1.85714em;line-height:1.6em;color:#32329f;margin-top:0;}/*!sc*/
.iDCylP h2{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:600;font-size:1.57143em;line-height:1.6em;color:#333333;}/*!sc*/
.iDCylP code{color:#e53935;background-color:rgba(38,50,56,0.05);font-family:Courier,monospace;border-radius:2px;border:1px solid rgba(38,50,56,0.1);padding:0 5px;font-size:13px;font-weight:400;word-break:break-word;}/*!sc*/
.iDCylP pre{font-family:Courier,monospace;white-space:pre;background-color:#11171a;color:white;padding:20px;overflow-x:auto;line-height:normal;border-radius:0px;border:1px solid rgba(38,50,56,0.1);}/*!sc*/
.iDCylP pre code{background-color:transparent;color:white;padding:0;}/*!sc*/
.iDCylP pre code:before,.iDCylP pre code:after{content:none;}/*!sc*/
.iDCylP blockquote{margin:0;margin-bottom:1em;padding:0 15px;color:#777;border-left:4px solid #ddd;}/*!sc*/
.iDCylP img{max-width:100%;box-sizing:content-box;}/*!sc*/
.iDCylP ul,.iDCylP ol{padding-left:2em;margin:0;margin-bottom:1em;}/*!sc*/
.iDCylP ul ul,.iDCylP ol ul,.iDCylP ul ol,.iDCylP ol ol{margin-bottom:0;margin-top:0;}/*!sc*/
.iDCylP table{display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all;border-collapse:collapse;border-spacing:0;margin-top:1.5em;margin-bottom:1.5em;}/*!sc*/
.iDCylP table tr{background-color:#fff;border-top:1px solid #ccc;}/*!sc*/
.iDCylP table tr:nth-child(2n){background-color:#fafafa;}/*!sc*/
.iDCylP table th,.iDCylP table td{padding:6px 13px;border:1px solid #ddd;}/*!sc*/
.iDCylP table th{text-align:left;font-weight:bold;}/*!sc*/
.iDCylP .share-link{cursor:pointer;margin-left:-20px;padding:0;line-height:1;width:20px;display:inline-block;outline:0;}/*!sc*/
.iDCylP .share-link:before{content:'';width:15px;height:15px;background-size:contain;background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDU5LjcgMjMzLjRsLTkwLjUgOTAuNWMtNTAgNTAtMTMxIDUwLTE4MSAwIC03LjktNy44LTE0LTE2LjctMTkuNC0yNS44bDQyLjEtNDIuMWMyLTIgNC41LTMuMiA2LjgtNC41IDIuOSA5LjkgOCAxOS4zIDE1LjggMjcuMiAyNSAyNSA2NS42IDI0LjkgOTAuNSAwbDkwLjUtOTAuNWMyNS0yNSAyNS02NS42IDAtOTAuNSAtMjQuOS0yNS02NS41LTI1LTkwLjUgMGwtMzIuMiAzMi4yYy0yNi4xLTEwLjItNTQuMi0xMi45LTgxLjYtOC45bDY4LjYtNjguNmM1MC01MCAxMzEtNTAgMTgxIDBDNTA5LjYgMTAyLjMgNTA5LjYgMTgzLjQgNDU5LjcgMjMzLjR6TTIyMC4zIDM4Mi4ybC0zMi4yIDMyLjJjLTI1IDI0LjktNjUuNiAyNC45LTkwLjUgMCAtMjUtMjUtMjUtNjUuNiAwLTkwLjVsOTAuNS05MC41YzI1LTI1IDY1LjUtMjUgOTAuNSAwIDcuOCA3LjggMTIuOSAxNy4yIDE1LjggMjcuMSAyLjQtMS40IDQuOC0yLjUgNi44LTQuNWw0Mi4xLTQyYy01LjQtOS4yLTExLjYtMTgtMTkuNC0yNS44IC01MC01MC0xMzEtNTAtMTgxIDBsLTkwLjUgOTAuNWMtNTAgNTAtNTAgMTMxIDAgMTgxIDUwIDUwIDEzMSA1MCAxODEgMGw2OC42LTY4LjZDMjc0LjYgMzk1LjEgMjQ2LjQgMzkyLjMgMjIwLjMgMzgyLjJ6Ii8+PC9zdmc+Cg==');opacity:0.5;visibility:hidden;display:inline-block;vertical-align:middle;}/*!sc*/
.iDCylP h1:hover > .share-link::before,.iDCylP h2:hover > .share-link::before,.iDCylP .share-link:hover::before{visibility:visible;}/*!sc*/
.iDCylP a{-webkit-text-decoration:auto;text-decoration:auto;color:#32329f;}/*!sc*/
.iDCylP a:visited{color:#32329f;}/*!sc*/
.iDCylP a:hover{color:#6868cf;-webkit-text-decoration:auto;text-decoration:auto;}/*!sc*/
data-styled.g44[id="sc-jcFjpl"]{content:"iDCylP,"}/*!sc*/
.ddxnzs{position:relative;}/*!sc*/
data-styled.g45[id="sc-caiLqq"]{content:"ddxnzs,"}/*!sc*/
.jOBPNj:hover > .sc-giYglK{opacity:1;}/*!sc*/
data-styled.g50[id="sc-jObWnj"]{content:"jOBPNj,"}/*!sc*/
.sRoPx{font-family:Courier,monospace;font-size:13px;white-space:pre;contain:content;overflow-x:auto;}/*!sc*/
.sRoPx .redoc-json code > .collapser{display:none;pointer-events:none;}/*!sc*/
.sRoPx .callback-function{color:gray;}/*!sc*/
.sRoPx .collapser:after{content:'-';cursor:pointer;}/*!sc*/
.sRoPx .collapsed > .collapser:after{content:'+';cursor:pointer;}/*!sc*/
.sRoPx .ellipsis:after{content:' … ';}/*!sc*/
.sRoPx .collapsible{margin-left:2em;}/*!sc*/
.sRoPx .hoverable{padding-top:1px;padding-bottom:1px;padding-left:2px;padding-right:2px;border-radius:2px;}/*!sc*/
.sRoPx .hovered{background-color:rgba(235,238,249,1);}/*!sc*/
.sRoPx .collapser{background-color:transparent;border:0;color:#fff;font-family:Courier,monospace;font-size:13px;padding-right:6px;padding-left:6px;padding-top:0;padding-bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:15px;height:15px;position:absolute;top:4px;left:-1.5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;padding:2px;}/*!sc*/
.sRoPx .collapser:focus{outline-color:#fff;outline-style:dotted;outline-width:1px;}/*!sc*/
.sRoPx ul{list-style-type:none;padding:0px;margin:0px 0px 0px 26px;}/*!sc*/
.sRoPx li{position:relative;display:block;}/*!sc*/
.sRoPx .hoverable{display:inline-block;}/*!sc*/
.sRoPx .selected{outline-style:solid;outline-width:1px;outline-style:dotted;}/*!sc*/
.sRoPx .collapsed > .collapsible{display:none;}/*!sc*/
.sRoPx .ellipsis{display:none;}/*!sc*/
.sRoPx .collapsed > .ellipsis{display:inherit;}/*!sc*/
data-styled.g51[id="sc-dPiLbb"]{content:"sRoPx,"}/*!sc*/
.dVTWnS{padding:0.9em;background-color:rgba(38,50,56,0.4);margin:0 0 10px 0;display:block;font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-size:0.929em;line-height:1.5em;}/*!sc*/
data-styled.g52[id="sc-bBHHxi"]{content:"dVTWnS,"}/*!sc*/
.lipuak{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-size:12px;position:absolute;z-index:1;top:-11px;left:12px;font-weight:600;color:rgba(255,255,255,0.7);}/*!sc*/
data-styled.g53[id="sc-cNKqjZ"]{content:"lipuak,"}/*!sc*/
.bcpfGN{position:relative;}/*!sc*/
data-styled.g54[id="sc-AjmGg"]{content:"bcpfGN,"}/*!sc*/
.iUheaL{margin-top:15px;}/*!sc*/
data-styled.g57[id="sc-jgrJph"]{content:"iUheaL,"}/*!sc*/
.iFIEVq button{background-color:transparent;border:0;outline:0;font-size:13px;font-family:Courier,monospace;cursor:pointer;padding:0;color:#333333;}/*!sc*/
.iFIEVq button:focus{font-weight:600;}/*!sc*/
.iFIEVq .sc-egiyK{height:1.1em;width:1.1em;}/*!sc*/
.iFIEVq .sc-egiyK polygon{fill:#666;}/*!sc*/
data-styled.g58[id="sc-gSQFLo"]{content:"iFIEVq,"}/*!sc*/
.gHbDui{vertical-align:middle;font-size:13px;line-height:20px;}/*!sc*/
data-styled.g59[id="sc-lbhJGD"]{content:"gHbDui,"}/*!sc*/
.eLMLxg{color:rgba(102,102,102,0.9);}/*!sc*/
data-styled.g60[id="sc-iNGGcK"]{content:"eLMLxg,"}/*!sc*/
.ifsMbX{color:#666;}/*!sc*/
data-styled.g61[id="sc-jeraig"]{content:"ifsMbX,"}/*!sc*/
.hvXkwh{color:#666;word-break:break-word;}/*!sc*/
data-styled.g62[id="sc-eJwWfJ"]{content:"hvXkwh,"}/*!sc*/
.eyZzuM{vertical-align:middle;font-size:13px;line-height:20px;}/*!sc*/
data-styled.g63[id="sc-nVkyK"]{content:"eyZzuM,"}/*!sc*/
.eSyGZd{color:#d41f1c;font-size:0.9em;font-weight:normal;margin-left:20px;line-height:1;}/*!sc*/
data-styled.g64[id="sc-hiwPVj"]{content:"eSyGZd,"}/*!sc*/
.eTfxwi{color:#0e7c86;}/*!sc*/
.eTfxwi::before,.eTfxwi::after{font-weight:bold;}/*!sc*/
data-styled.g67[id="sc-gGCDDS"]{content:"eTfxwi,"}/*!sc*/
.hqhiLz{border-radius:2px;word-break:break-word;background-color:rgba(51,51,51,0.05);color:rgba(51,51,51,0.9);padding:0 5px;border:1px solid rgba(51,51,51,0.1);font-family:Courier,monospace;}/*!sc*/
.sc-clIzBv + .sc-clIzBv{margin-left:0;}/*!sc*/
data-styled.g68[id="sc-clIzBv"]{content:"hqhiLz,"}/*!sc*/
.dhNwRb{border-radius:2px;background-color:rgba(104,104,207,0.05);color:rgba(50,50,159,0.9);margin:0 5px;padding:0 5px;border:1px solid rgba(50,50,159,0.1);}/*!sc*/
.sc-Galmp + .sc-Galmp{margin-left:0;}/*!sc*/
data-styled.g70[id="sc-Galmp"]{content:"dhNwRb,"}/*!sc*/
.kSkeoW{background-color:transparent;border:0;color:#666;margin-left:5px;border-radius:2px;cursor:pointer;outline-color:#666;font-size:12px;}/*!sc*/
data-styled.g71[id="sc-fWCJzd"]{content:"kSkeoW,"}/*!sc*/
.gGaqcD{margin:1em 0;}/*!sc*/
.gGaqcD a{-webkit-text-decoration:auto;text-decoration:auto;color:#32329f;}/*!sc*/
.gGaqcD a:visited{color:#32329f;}/*!sc*/
.gGaqcD a:hover{color:#6868cf;-webkit-text-decoration:auto;text-decoration:auto;}/*!sc*/
data-styled.g72[id="sc-dvQaRk"]{content:"gGaqcD,"}/*!sc*/
.liMzMB{background:#11171a;}/*!sc*/
.liMzMB > div,.liMzMB > pre{padding:20px;margin:0;}/*!sc*/
.liMzMB > div > pre{padding:0;}/*!sc*/
data-styled.g78[id="sc-eLwHnm"]{content:"liMzMB,"}/*!sc*/
.ciGjvL:after{content:' and ';font-weight:normal;}/*!sc*/
.ciGjvL:last-child:after{content:none;}/*!sc*/
.ciGjvL a{-webkit-text-decoration:auto;text-decoration:auto;color:#32329f;}/*!sc*/
.ciGjvL a:visited{color:#32329f;}/*!sc*/
.ciGjvL a:hover{color:#6868cf;-webkit-text-decoration:auto;text-decoration:auto;}/*!sc*/
data-styled.g82[id="sc-dtMgUX"]{content:"ciGjvL,"}/*!sc*/
.iGVliB{white-space:nowrap;}/*!sc*/
.iGVliB:after{content:' or ';white-space:pre;}/*!sc*/
.iGVliB:last-child:after,.iGVliB:only-child:after{content:none;}/*!sc*/
.iGVliB a{-webkit-text-decoration:auto;text-decoration:auto;color:#32329f;}/*!sc*/
.iGVliB a:visited{color:#32329f;}/*!sc*/
.iGVliB a:hover{color:#6868cf;-webkit-text-decoration:auto;text-decoration:auto;}/*!sc*/
data-styled.g83[id="sc-cZMNgc"]{content:"iGVliB,"}/*!sc*/
.jaJyem{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;cursor:pointer;}/*!sc*/
data-styled.g84[id="sc-jUosCB"]{content:"jaJyem,"}/*!sc*/
.jrhmxi{width:75%;text-overflow:ellipsis;border-radius:4px;overflow:hidden;}/*!sc*/
@media screen and (max-width:50rem){.jrhmxi{margin-top:10px;}}/*!sc*/
data-styled.g85[id="sc-jQrDum"]{content:"jrhmxi,"}/*!sc*/
.gJCGVY{display:inline-block;margin:0;}/*!sc*/
data-styled.g86[id="sc-fvxzrP"]{content:"gJCGVY,"}/*!sc*/
.kkpKfS{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1em 0;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}/*!sc*/
@media screen and (max-width:50rem){.kkpKfS{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}/*!sc*/
data-styled.g87[id="sc-fbyfCU"]{content:"kkpKfS,"}/*!sc*/
.dezuum{margin-top:0;margin-bottom:0.5em;}/*!sc*/
data-styled.g93[id="sc-dFtzxp"]{content:"dezuum,"}/*!sc*/
.cfBNBf{border:1px solid #32329f;color:#32329f;font-weight:normal;margin-left:0.5em;padding:4px 8px 4px;display:inline-block;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}/*!sc*/
data-styled.g94[id="sc-brSvTw"]{content:"cfBNBf,"}/*!sc*/
.eXEyiA{width:9ex;display:inline-block;height:13px;line-height:13px;background-color:#333;border-radius:3px;background-repeat:no-repeat;background-position:6px 4px;font-size:7px;font-family:Verdana,sans-serif;color:white;text-transform:uppercase;text-align:center;font-weight:bold;vertical-align:middle;margin-right:6px;margin-top:2px;}/*!sc*/
.eXEyiA.get{background-color:#2F8132;}/*!sc*/
.eXEyiA.post{background-color:#186FAF;}/*!sc*/
.eXEyiA.put{background-color:#95507c;}/*!sc*/
.eXEyiA.options{background-color:#947014;}/*!sc*/
.eXEyiA.patch{background-color:#bf581d;}/*!sc*/
.eXEyiA.delete{background-color:#cc3333;}/*!sc*/
.eXEyiA.basic{background-color:#707070;}/*!sc*/
.eXEyiA.link{background-color:#07818F;}/*!sc*/
.eXEyiA.head{background-color:#A23DAD;}/*!sc*/
.eXEyiA.hook{background-color:#32329f;}/*!sc*/
data-styled.g101[id="sc-ilfuhL"]{content:"eXEyiA,"}/*!sc*/
.cBjpjq{margin:0;padding:0;}/*!sc*/
.cBjpjq:first-child{padding-bottom:32px;}/*!sc*/
.sc-uojGG .sc-uojGG{font-size:0.929em;}/*!sc*/
.fZvBef{margin:0;padding:0;display:none;}/*!sc*/
.fZvBef:first-child{padding-bottom:32px;}/*!sc*/
.sc-uojGG .sc-uojGG{font-size:0.929em;}/*!sc*/
data-styled.g102[id="sc-uojGG"]{content:"cBjpjq,fZvBef,"}/*!sc*/
.bcDLDq{list-style:none inside none;overflow:hidden;text-overflow:ellipsis;padding:0;margin-top:15px;}/*!sc*/
.iVJVQY{list-style:none inside none;overflow:hidden;text-overflow:ellipsis;padding:0;}/*!sc*/
data-styled.g103[id="sc-bilyIR"]{content:"bcDLDq,iVJVQY,"}/*!sc*/
.dAoupt{cursor:pointer;color:#394A58;margin:0;padding:12.5px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:Myriad Pro,Helvetica,Arial,sans-serif;opacity:0.7;text-transform:uppercase;font-size:0.8em;padding-bottom:0;cursor:default;background-color:#F7F7F7;}/*!sc*/
.dAoupt .sc-egiyK{height:1.5em;width:1.5em;}/*!sc*/
.dAoupt .sc-egiyK polygon{fill:#394A58;}/*!sc*/
.edVOSt{cursor:pointer;color:#394A58;margin:0;padding:12.5px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-size:0.929em;text-transform:none;background-color:#F7F7F7;}/*!sc*/
.edVOSt:hover{color:#394A58;background-color:#dedede;}/*!sc*/
.edVOSt .sc-egiyK{height:1.5em;width:1.5em;}/*!sc*/
.edVOSt .sc-egiyK polygon{fill:#394A58;}/*!sc*/
.inUybX{cursor:pointer;color:#394A58;margin:0;padding:12.5px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:Myriad Pro,Helvetica,Arial,sans-serif;background-color:#F7F7F7;}/*!sc*/
.inUybX:hover{color:#394A58;background-color:#eaeaea;}/*!sc*/
.inUybX .sc-egiyK{height:1.5em;width:1.5em;}/*!sc*/
.inUybX .sc-egiyK polygon{fill:#394A58;}/*!sc*/
data-styled.g104[id="sc-eGPXGI"]{content:"dAoupt,edVOSt,inUybX,"}/*!sc*/
.hTIqli{display:inline-block;vertical-align:middle;width:auto;overflow:hidden;text-overflow:ellipsis;}/*!sc*/
.gPtqKT{display:inline-block;vertical-align:middle;width:calc(100% - 38px);overflow:hidden;text-overflow:ellipsis;}/*!sc*/
data-styled.g105[id="sc-hAcGzb"]{content:"hTIqli,gPtqKT,"}/*!sc*/
.cOBVaf{font-size:0.8em;margin-top:10px;text-align:center;position:fixed;width:260px;bottom:0;background:#F7F7F7;}/*!sc*/
.cOBVaf a,.cOBVaf a:visited,.cOBVaf a:hover{color:#394A58 !important;padding:5px 0;border-top:1px solid #dedede;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}/*!sc*/
.cOBVaf img{width:15px;margin-right:5px;}/*!sc*/
@media screen and (max-width:50rem){.cOBVaf{width:100%;}}/*!sc*/
data-styled.g106[id="sc-kYHfwS"]{content:"cOBVaf,"}/*!sc*/
.jYAhkx{cursor:pointer;position:relative;margin-bottom:5px;}/*!sc*/
data-styled.g112[id="sc-FNXRL"]{content:"jYAhkx,"}/*!sc*/
.hxZHzL{font-family:Courier,monospace;margin-left:10px;-webkit-flex:1;-ms-flex:1;flex:1;overflow-x:hidden;text-overflow:ellipsis;}/*!sc*/
data-styled.g113[id="sc-jWUzzU"]{content:"hxZHzL,"}/*!sc*/
.bxamQ{outline:0;color:inherit;width:100%;text-align:left;cursor:pointer;padding:10px 30px 10px 20px;border-radius:4px 4px 0 0;background-color:#11171a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;white-space:nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-bottom:0;-webkit-transition:border-color 0.25s ease;transition:border-color 0.25s ease;}/*!sc*/
.bxamQ ..sc-jWUzzU{color:#ffffff;}/*!sc*/
.bxamQ:focus{box-shadow:inset 0 2px 2px rgba(0,0,0,0.45),0 2px 0 rgba(128,128,128,0.25);}/*!sc*/
data-styled.g114[id="sc-eFegNN"]{content:"bxamQ,"}/*!sc*/
.jsdNGb{font-size:0.929em;line-height:20px;background-color:#186FAF;color:#ffffff;padding:3px 10px;text-transform:uppercase;font-family:Myriad Pro,Helvetica,Arial,sans-serif;margin:0;}/*!sc*/
data-styled.g115[id="sc-fmBCVi"]{content:"jsdNGb,"}/*!sc*/
.fuqHqW{position:absolute;width:100%;z-index:100;background:#fafafa;color:#263238;box-sizing:border-box;box-shadow:0px 0px 6px rgba(0,0,0,0.33);overflow:hidden;border-bottom-left-radius:4px;border-bottom-right-radius:4px;-webkit-transition:all 0.25s ease;transition:all 0.25s ease;visibility:hidden;-webkit-transform:translateY(-50%) scaleY(0);-ms-transform:translateY(-50%) scaleY(0);transform:translateY(-50%) scaleY(0);}/*!sc*/
data-styled.g116[id="sc-lkgTHX"]{content:"fuqHqW,"}/*!sc*/
.fUpXCf{padding:10px;}/*!sc*/
data-styled.g117[id="sc-jlRLRk"]{content:"fUpXCf,"}/*!sc*/
.ggmziU{padding:5px;border:1px solid #ccc;background:#fff;word-break:break-all;color:#32329f;}/*!sc*/
.ggmziU > span{color:#333333;}/*!sc*/
data-styled.g118[id="sc-dUbtfd"]{content:"ggmziU,"}/*!sc*/
.hoRAnv{display:block;border:0;width:100%;text-align:left;padding:10px;border-radius:2px;margin-bottom:4px;line-height:1.5em;cursor:pointer;color:#1d8127;background-color:rgba(29,129,39,0.07);}/*!sc*/
.hoRAnv:focus{outline:auto #1d8127;}/*!sc*/
.wltdp{display:block;border:0;width:100%;text-align:left;padding:10px;border-radius:2px;margin-bottom:4px;line-height:1.5em;cursor:pointer;color:#d41f1c;background-color:rgba(212,31,28,0.07);}/*!sc*/
.wltdp:focus{outline:auto #d41f1c;}/*!sc*/
.gBqHPX{display:block;border:0;width:100%;text-align:left;padding:10px;border-radius:2px;margin-bottom:4px;line-height:1.5em;cursor:pointer;color:#d41f1c;background-color:rgba(212,31,28,0.07);cursor:default;}/*!sc*/
.gBqHPX:focus{outline:auto #d41f1c;}/*!sc*/
.gBqHPX::before{content:"—";font-weight:bold;width:1.5em;text-align:center;display:inline-block;vertical-align:top;}/*!sc*/
.gBqHPX:focus{outline:0;}/*!sc*/
data-styled.g119[id="sc-htJRVC"]{content:"hoRAnv,wltdp,gBqHPX,"}/*!sc*/
.jHtNTU{vertical-align:top;}/*!sc*/
data-styled.g123[id="sc-fXeWAj"]{content:"jHtNTU,"}/*!sc*/
.bTvSgn{font-size:1.3em;padding:0.2em 0;margin:3em 0 1.1em;color:#333333;font-weight:normal;}/*!sc*/
data-styled.g124[id="sc-fIosxK"]{content:"bTvSgn,"}/*!sc*/
.ilWCwE{margin-bottom:30px;}/*!sc*/
data-styled.g129[id="sc-iFMAIt"]{content:"ilWCwE,"}/*!sc*/
.lptroy{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:20px;height:20px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#32329f;}/*!sc*/
data-styled.g130[id="sc-iqVWFU"]{content:"lptroy,"}/*!sc*/
.dCiyBx{width:260px;background-color:#F7F7F7;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100vh;position:-webkit-sticky;position:sticky;position:-webkit-sticky;top:0;}/*!sc*/
@media screen and (max-width:50rem){.dCiyBx{position:fixed;z-index:20;width:100%;background:#F7F7F7;display:none;}}/*!sc*/
@media print{.dCiyBx{display:none;}}/*!sc*/
data-styled.g131[id="sc-eWfVMQ"]{content:"dCiyBx,"}/*!sc*/
.cxHKpm{outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#f2f2f2;color:#32329f;display:none;cursor:pointer;position:fixed;right:20px;z-index:100;border-radius:50%;box-shadow:0 0 20px rgba(0,0,0,0.3);bottom:44px;width:60px;height:60px;padding:0 20px;}/*!sc*/
@media screen and (max-width:50rem){.cxHKpm{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}/*!sc*/
.cxHKpm svg{color:#0065FB;}/*!sc*/
@media print{.cxHKpm{display:none;}}/*!sc*/
data-styled.g132[id="sc-kTLmzF"]{content:"cxHKpm,"}/*!sc*/
.jfUss{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.5em;color:#333333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;text-align:left;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;text-rendering:optimizeSpeed !important;tap-highlight-color:rgba(0,0,0,0);-webkit-text-size-adjust:100%;text-size-adjust:100%;}/*!sc*/
.jfUss *{box-sizing:border-box;-webkit-tap-highlight-color:rgba(255,255,255,0);}/*!sc*/
data-styled.g133[id="sc-dwsnSq"]{content:"jfUss,"}/*!sc*/
.jxeukX{z-index:1;position:relative;overflow:hidden;width:calc(100% - 260px);contain:layout;}/*!sc*/
@media print,screen and (max-width:50rem){.jxeukX{width:100%;}}/*!sc*/
data-styled.g134[id="sc-jtXEFf"]{content:"jxeukX,"}/*!sc*/
.bLydqy{background:#263238;position:absolute;top:0;bottom:0;right:0;width:calc((100% - 260px) * 0.4);}/*!sc*/
@media print,screen and (max-width:75rem){.bLydqy{display:none;}}/*!sc*/
data-styled.g135[id="sc-eldieg"]{content:"bLydqy,"}/*!sc*/
.qyDlP{padding:5px 0;}/*!sc*/
data-styled.g136[id="sc-kiIyQV"]{content:"qyDlP,"}/*!sc*/
.eXkpcT{width:calc(100% - 40px);box-sizing:border-box;margin:0 20px;padding:5px 10px 5px 20px;border:0;border-bottom:1px solid #dedede;font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:bold;font-size:13px;color:#394A58;background-color:transparent;outline:none;}/*!sc*/
data-styled.g137[id="sc-cLpAjG"]{content:"eXkpcT,"}/*!sc*/
.kXqFAm{position:absolute;left:20px;height:1.8em;width:0.9em;}/*!sc*/
.kXqFAm path{fill:#394A58;}/*!sc*/
data-styled.g138[id="sc-iIUQWv"]{content:"kXqFAm,"}/*!sc*/
</style>
    {% endraw %}

    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700" rel="stylesheet">
  
    

  </head>

  <body class="td-section">


      {% include header.html %}


      <div class="container-fluid">
        <div class="td-main row"> 
          <div class="col-12 px-0">

          {% raw %}
          
      <div id="redoc"><div class="sc-dwsnSq jfUss redoc-wrap"><div class="sc-eWfVMQ dCiyBx menu-content" style="top:0px;height:calc(100vh - 0px)"><div role="search" class="sc-kiIyQV qyDlP"><svg class="sc-iIUQWv kXqFAm search-icon" version="1.1" viewBox="0 0 1000 1000" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px"><path d="M968.2,849.4L667.3,549c83.9-136.5,66.7-317.4-51.7-435.6C477.1-25,252.5-25,113.9,113.4c-138.5,138.3-138.5,362.6,0,501C219.2,730.1,413.2,743,547.6,666.5l301.9,301.4c43.6,43.6,76.9,14.9,104.2-12.4C981,928.3,1011.8,893,968.2,849.4z M524.5,522c-88.9,88.7-233,88.7-321.8,0c-88.9-88.7-88.9-232.6,0-321.3c88.9-88.7,233-88.7,321.8,0C613.4,289.4,613.4,433.3,524.5,522z"></path></svg><input type="text" value="" placeholder="Search..." aria-label="Search" class="sc-cLpAjG eXkpcT search-input"/></div><div class="sc-ikJyIC eqZXtE scrollbar-container undefined"><ul class="sc-uojGG cBjpjq" role="menu"><li data-item-id="group/Paths" class="sc-bilyIR bcDLDq"><label type="group" role="menuitem" class="sc-eGPXGI dAoupt -depth0"><span title="Paths" class="sc-hAcGzb hTIqli">Paths</span></label><ul class="sc-uojGG cBjpjq"><li data-item-id="tag/Receivables" class="sc-bilyIR iVJVQY"><label type="tag" role="menuitem" class="sc-eGPXGI edVOSt -depth1"><span title="Receivables" class="sc-hAcGzb hTIqli">Receivables</span><svg class="sc-egiyK jLPfXH" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></label><ul class="sc-uojGG fZvBef"><li data-item-id="tag/Receivables/operation/submitRTNRequest" class="sc-bilyIR iVJVQY"><label role="menuitem" class="sc-eGPXGI inUybX -depth2"><span type="post" class="sc-ilfuhL eXEyiA operation-type post">post</span><span width="calc(100% - 38px)" class="sc-hAcGzb gPtqKT">Request A Real Time Notification Submit</span></label></li></ul></li></ul></li><li data-item-id="group/Models" class="sc-bilyIR bcDLDq"><label type="group" role="menuitem" class="sc-eGPXGI dAoupt -depth0"><span title="Models" class="sc-hAcGzb hTIqli">Models</span></label><ul class="sc-uojGG cBjpjq"><li data-item-id="tag/RequestRTN" class="sc-bilyIR iVJVQY"><label type="tag" role="menuitem" class="sc-eGPXGI edVOSt -depth1"><span title="RequestRTN" class="sc-hAcGzb hTIqli">RequestRTN</span></label></li></ul></li></ul><div class="sc-kYHfwS cOBVaf"><a target="_blank" rel="noopener noreferrer" href="https://redocly.com/redoc/">API docs by Redocly</a></div></div></div><div class="sc-kTLmzF cxHKpm"><div class="sc-iqVWFU lptroy"><svg class="" style="transform:translate(2px, -4px) rotate(180deg);transition:transform 0.2s ease" viewBox="0 0 926.23699 573.74994" version="1.1" x="0px" y="0px" width="15" height="15"><g transform="translate(904.92214,-879.1482)"><path d="
          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,
          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,
          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,
          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,
          -174.68583 0.6895,0 26.281,25.03215 56.8701,
          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864
          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,
          -104.0616 -231.873,-231.248 z
        " fill="currentColor"></path></g></svg><svg class="" style="transform:translate(2px, 4px);transition:transform 0.2s ease" viewBox="0 0 926.23699 573.74994" version="1.1" x="0px" y="0px" width="15" height="15"><g transform="translate(904.92214,-879.1482)"><path d="
          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,
          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,
          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,
          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,
          -174.68583 0.6895,0 26.281,25.03215 56.8701,
          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864
          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,
          -104.0616 -231.873,-231.248 z
        " fill="currentColor"></path></g></svg></div></div><div class="sc-jtXEFf jxeukX api-content"><div class="sc-eCImPb kKqedw"><div class="sc-iCfMLu jTXZbd"><div class="sc-hKwDye fcjMZs api-info"><h1 class="sc-furwcr sc-dFtzxp gZCBCh dezuum">Fileactive Testing API<!-- --> <span>(<!-- -->v1.0<!-- -->)</span></h1><p>Download OpenAPI specification<!-- -->:<a download="openapi.yaml" target="_blank" class="sc-brSvTw cfBNBf">Download</a></p><div class="sc-iJKOTD sc-cidDSM hGZPxu gTacTs"></div><div class="sc-iJKOTD sc-cidDSM hGZPxu gTacTs" data-role="redoc-summary"></div><div class="sc-iJKOTD sc-cidDSM hGZPxu gTacTs" data-role="redoc-description"><p>Fileactive Self-Service Testing API. Rate limit is one request per second.</p>
</div></div></div></div><div id="tag/Receivables" data-section-id="tag/Receivables" class="sc-eCImPb kKqedw"><div class="sc-iCfMLu jTXZbd"><div class="sc-hKwDye fcjMZs"><h1 class="sc-furwcr gZCBCh"><a class="sc-crHmcD bNUQy" href="#tag/Receivables" aria-label="tag/Receivables"></a>Receivables</h1></div></div><div class="sc-hKwDye frutYI"><div class="sc-iJKOTD sc-cidDSM hGZPxu gTacTs redoc-markdown "><p>Operations related to receivables.</p>
</div></div></div><div id="tag/Receivables/operation/submitRTNRequest" data-section-id="tag/Receivables/operation/submitRTNRequest" class="sc-eCImPb hexvPn"><div data-section-id="operation/submitRTNRequest" id="operation/submitRTNRequest" class="sc-iCfMLu jTXZbd"><div class="sc-hKwDye fcjMZs"><h2 class="sc-pVTFL dEelKS"><a class="sc-crHmcD bNUQy" href="#tag/Receivables/operation/submitRTNRequest" aria-label="tag/Receivables/operation/submitRTNRequest"></a>Request A Real Time Notification Submit<!-- --> </h2><div class="sc-iFMAIt ilWCwE"><div class="sc-iJKOTD sc-cidDSM hGZPxu gTacTs"><p>Request includes attributes which will be included in the RTN. All unspecified RTN fields will be defaulted</p>
</div><div class="sc-dvQaRk gGaqcD"><a href="https://anz-insto.github.io/fileactive/rtn-info.html">RTN Additional Information</a></div></div><div class="sc-fbyfCU kkpKfS"><div class="sc-jUosCB jaJyem"><h5 class="sc-iqseJM sc-fvxzrP kyZwVG gJCGVY">Authorizations:</h5><svg class="sc-egiyK jCLLyq" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></div><div class="sc-jQrDum jrhmxi"><span class="sc-cZMNgc iGVliB"><span class="sc-dtMgUX ciGjvL"><i>apiKeyAuth</i></span></span></div></div><div><h5 class="sc-iqseJM kyZwVG">header<!-- --> Parameters</h5><table class="sc-hGPBjI jJnLYz"><tbody><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="x-Correlation-Id"><span class="sc-ieecCq fMdASL"></span><span class="property-name">x-Correlation-Id</span></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span class="sc-lbhJGD sc-eJwWfJ gHbDui hvXkwh"> (<!-- -->UUID<!-- -->) </span><span class="sc-lbhJGD sc-gGCDDS gHbDui eTfxwi">[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{...</span><button class="sc-fWCJzd kSkeoW">Show pattern</button></div> <div><span class="sc-lbhJGD gHbDui"> <!-- -->Example:<!-- --> </span> <span class="sc-lbhJGD sc-clIzBv gHbDui hqhiLz">baf7b2b0-449d-48c7-a63a-876e72cd7b02</span></div><div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>Optional correlation ID provided by the data consumer that should be reflected back in the response headers. Can be used for reporting and logging.</p>
</div></div></div></td></tr><tr class="last "><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="x-Message-Id"><span class="sc-ieecCq fMdASL"></span><span class="property-name">x-Message-Id</span><div class="sc-nVkyK sc-hiwPVj eyZzuM eSyGZd">required</div></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span class="sc-lbhJGD sc-eJwWfJ gHbDui hvXkwh"> (<!-- -->UUID<!-- -->) </span><span class="sc-lbhJGD sc-gGCDDS gHbDui eTfxwi">[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{...</span><button class="sc-fWCJzd kSkeoW">Show pattern</button></div> <div><span class="sc-lbhJGD gHbDui"> <!-- -->Example:<!-- --> </span> <span class="sc-lbhJGD sc-clIzBv gHbDui hqhiLz">3c40b28a-b902-477f-8400-6cb97d41cb06</span></div><div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>Point to point reference, as assigned by the instructing party, and sent to the next party in the chain to unambiguously identify the message</p>
</div></div></div></td></tr></tbody></table></div><h5 class="sc-iqseJM kyZwVG">Request Body schema: <span class="sc-cCcXHH hgRRjA">application/json</span></h5><div class="sc-iJKOTD sc-cidDSM hGZPxu gTacTs"><p>Request a RTN</p>
</div><table class="sc-hGPBjI jJnLYz"><tbody><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="account_identification"><span class="sc-ieecCq fMdASL"></span><span class="property-name">account_identification</span><div class="sc-nVkyK sc-hiwPVj eyZzuM eSyGZd">required</div></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span> <span class="sc-lbhJGD sc-Galmp gHbDui dhNwRb"> <!-- -->[ 1 .. 34 ] characters<!-- --> </span></span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>Account identification assigned by an institution, includes BSB</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="entry_reference"><span class="sc-ieecCq fMdASL"></span><span class="property-name">entry_reference</span><div class="sc-nVkyK sc-hiwPVj eyZzuM eSyGZd">required</div></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span> <span class="sc-lbhJGD sc-Galmp gHbDui dhNwRb"> <!-- -->[ 1 .. 35 ] characters<!-- --> </span></span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>Unique reference for the entry</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="amount"><span class="sc-ieecCq fMdASL"></span><span class="property-name">amount</span><div class="sc-nVkyK sc-hiwPVj eyZzuM eSyGZd">required</div></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span> <span class="sc-lbhJGD sc-Galmp gHbDui dhNwRb"> <!-- -->[ 1 .. 19 ] characters<!-- --> </span></span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>Notified amount in AUD</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="puid"><span class="sc-ieecCq fMdASL"></span><span class="property-name">puid</span></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span> <span class="sc-lbhJGD sc-Galmp gHbDui dhNwRb"> <!-- -->[ 1 .. 16 ] characters<!-- --> </span></span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>An optionally provided identifier which is returned in the requested RTN</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="debtor_name"><span class="sc-ieecCq fMdASL"></span><span class="property-name">debtor_name</span></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span> <span class="sc-lbhJGD sc-Galmp gHbDui dhNwRb"> <!-- -->[ 1 .. 140 ] characters<!-- --> </span></span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>Debtor (payer) account name</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="creditor_name"><span class="sc-ieecCq fMdASL"></span><span class="property-name">creditor_name</span></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span> <span class="sc-lbhJGD sc-Galmp gHbDui dhNwRb"> <!-- -->[ 1 .. 140 ] characters<!-- --> </span></span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>Creditor (payee) account name</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="arm_creditor_account_identification"><span class="sc-ieecCq fMdASL"></span><span class="property-name">arm_creditor_account_identification</span></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span> <span class="sc-lbhJGD sc-Galmp gHbDui dhNwRb"> <!-- -->[ 1 .. 34 ] characters<!-- --> </span></span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>ARM (virtual) account identification, includes BSB</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ sc-gSQFLo kCCtqV fwnkRw iFIEVq" kind="field" title="creditor_alias"><span class="sc-ieecCq fMdASL"></span><button aria-label="expand properties"><span class="property-name">creditor_alias</span><svg class="sc-egiyK cUKGZj" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></button></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">object</span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>Creditor account alias</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ sc-gSQFLo kCCtqV fwnkRw iFIEVq" kind="field" title="remittance_information"><span class="sc-ieecCq fMdASL"></span><button aria-label="expand properties"><span class="property-name">remittance_information</span><svg class="sc-egiyK cUKGZj" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></button></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">object</span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"></div></div></div></td></tr><tr class="last "><td class="sc-hBUSln sc-fFeiMQ sc-gSQFLo kCCtqV fwnkRw iFIEVq" kind="field" title="return_information"><span class="sc-ieecCq fMdASL"></span><button aria-label="expand properties"><span class="property-name">return_information</span><svg class="sc-egiyK cUKGZj" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></button></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">object</span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"></div></div></div></td></tr></tbody></table><div><h3 class="sc-fIosxK bTvSgn">Responses</h3><div><button class="sc-htJRVC hoRAnv"><svg class="sc-egiyK bPEzCN" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg><strong class="sc-fXeWAj jHtNTU">201<!-- --> </strong><span class="sc-jcFjpl iDCylP"><p>Success - A RTN was successfully created</p>
</span></button></div><div><button class="sc-htJRVC wltdp"><svg class="sc-egiyK FBjwd" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg><strong class="sc-fXeWAj jHtNTU">400<!-- --> </strong><span class="sc-jcFjpl iDCylP"><p>Bad Request, message format does not match expected schema</p>
</span></button></div><div><button class="sc-htJRVC gBqHPX" disabled=""><strong class="sc-fXeWAj jHtNTU">401<!-- --> </strong><span class="sc-jcFjpl iDCylP"><p>Request is not authenticated</p>
</span></button></div><div><button class="sc-htJRVC wltdp"><svg class="sc-egiyK FBjwd" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg><strong class="sc-fXeWAj jHtNTU">403<!-- --> </strong><span class="sc-jcFjpl iDCylP"><p>Request is authenticated but action is not allowed</p>
</span></button></div><div><button class="sc-htJRVC gBqHPX" disabled=""><strong class="sc-fXeWAj jHtNTU">429<!-- --> </strong><span class="sc-jcFjpl iDCylP"><p>Action exceeds allocated limits</p>
</span></button></div><div><button class="sc-htJRVC wltdp"><svg class="sc-egiyK FBjwd" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg><strong class="sc-fXeWAj jHtNTU">500<!-- --> </strong><span class="sc-jcFjpl iDCylP"><p>Internal Server Error</p>
</span></button></div><div><button class="sc-htJRVC gBqHPX" disabled=""><strong class="sc-fXeWAj jHtNTU">502<!-- --> </strong><span class="sc-jcFjpl iDCylP"><p>Bad Gateway, contact support</p>
</span></button></div><div><button class="sc-htJRVC gBqHPX" disabled=""><strong class="sc-fXeWAj jHtNTU">503<!-- --> </strong><span class="sc-jcFjpl iDCylP"><p>Service Unavailable or down for maintainance</p>
</span></button></div><div><button class="sc-htJRVC gBqHPX" disabled=""><strong class="sc-fXeWAj jHtNTU">504<!-- --> </strong><span class="sc-jcFjpl iDCylP"><p>Gateway Timeout, retry or contact support</p>
</span></button></div><div><button class="sc-htJRVC gBqHPX" disabled=""><strong class="sc-fXeWAj jHtNTU">default<!-- --> </strong><span class="sc-jcFjpl iDCylP"><p>Unexpected error</p>
</span></button></div></div></div><div class="sc-jRQBWg sc-gKclnd vSqXI dKDnzb"><div class="sc-FNXRL jYAhkx"><button class="sc-eFegNN bxamQ"><span type="post" class="sc-fmBCVi jsdNGb http-verb post">post</span><span class="sc-jWUzzU hxZHzL">/testingfileactive/v1.0/rtn</span><svg class="sc-egiyK laPRNF" style="margin-right:-25px" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></button><div aria-hidden="true" class="sc-lkgTHX fuqHqW"><div class="sc-jlRLRk fUpXCf"><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>UAT (non-production) environment</p>
</div><div tabindex="0" role="button"><div class="sc-dUbtfd ggmziU"><span>https://api.fileactive.uat.anzgcis.com</span>/testingfileactive/v1.0/rtn</div></div></div></div></div><div><h3 class="sc-kDTinF hwMGJl"> <!-- -->Request samples<!-- --> </h3><div class="sc-cxpSdN eCLDJY" data-rttabs="true"><ul class="react-tabs__tab-list" role="tablist"><li class="react-tabs__tab react-tabs__tab--selected" role="tab" id="react-tabs-0" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-1" tabindex="0" data-rttab="true">Payload</li></ul><div class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-1" aria-labelledby="react-tabs-0"><div><div class="sc-AjmGg bcpfGN"><span class="sc-cNKqjZ lipuak">Content type</span><div class="sc-bBHHxi dVTWnS">application/json</div></div><div class="sc-jgrJph iUheaL"><div class="sc-jObWnj jOBPNj"><div class="sc-giYglK fpoFZz"><button><div class="sc-caiLqq ddxnzs">Copy</div></button><button> Expand all </button><button> Collapse all </button></div><div class="sc-iJKOTD hGZPxu sc-dPiLbb sRoPx"><div class="redoc-json"><code><button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable "><span class="property token string">"account_identification"</span>: <span class="token string">&quot;014814800000010&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"entry_reference"</span>: <span class="token string">&quot;Reference entered in the initiating channel&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"amount"</span>: <span class="token number">7120.86</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"puid"</span>: <span class="token string">&quot;PTM2022101389715&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"debtor_name"</span>: <span class="token string">&quot;Andras Arato&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"creditor_name"</span>: <span class="token string">&quot;Holden Holdings&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"arm_creditor_account_identification"</span>: <span class="token string">&quot;063678965323010&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"creditor_alias"</span>: <button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable collapsed"><span class="property token string">"type"</span>: <span class="token string">&quot;TELI&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable collapsed"><span class="property token string">"identification"</span>: <span class="token string">&quot;+61403736550&quot;</span></div></li></ul><span class="token punctuation">}</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"remittance_information"</span>: <button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable collapsed"><span class="property token string">"unstructured"</span>: <button class="collapser" aria-label="expand"></button><span class="token punctuation">[</span><span class="ellipsis"></span><ul class="array collapsible"><li><div class="hoverable collapsed"><span class="token string">&quot;👨‍👩‍👧‍👦Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a&quot;</span>,</div></li><li><div class="hoverable collapsed"><span class="token string">&quot;d minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit i&quot;</span></div></li></ul><span class="token punctuation">]</span></div></li></ul><span class="token punctuation">}</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"return_information"</span>: <button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable collapsed"><span class="property token string">"reason_code"</span>: <span class="token string">&quot;NARR&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable collapsed"><span class="property token string">"additional_information"</span>: <button class="collapser" aria-label="expand"></button><span class="token punctuation">[</span><span class="ellipsis"></span><ul class="array collapsible"><li><div class="hoverable collapsed"><span class="token string">&quot;Beneficiary is&quot;</span>,</div></li><li><div class="hoverable collapsed"><span class="token string">&quot;unknown&quot;</span></div></li></ul><span class="token punctuation">]</span></div></li></ul><span class="token punctuation">}</span></div></li></ul><span class="token punctuation">}</span></code></div></div></div></div></div></div></div></div><div><h3 class="sc-kDTinF hwMGJl"> <!-- -->Response samples<!-- --> </h3><div class="sc-cxpSdN eCLDJY" data-rttabs="true"><ul class="react-tabs__tab-list" role="tablist"><li class="tab-error react-tabs__tab--selected" role="tab" id="react-tabs-2" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-3" tabindex="0" data-rttab="true">400</li><li class="tab-error" role="tab" id="react-tabs-4" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-5" data-rttab="true">403</li><li class="tab-error" role="tab" id="react-tabs-6" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-7" data-rttab="true">500</li></ul><div class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-3" aria-labelledby="react-tabs-2"><div><div class="sc-AjmGg bcpfGN"><span class="sc-cNKqjZ lipuak">Content type</span><div class="sc-bBHHxi dVTWnS">application/json</div></div><div class="sc-jgrJph iUheaL"><div class="sc-jObWnj jOBPNj"><div class="sc-giYglK fpoFZz"><button><div class="sc-caiLqq ddxnzs">Copy</div></button><button> Expand all </button><button> Collapse all </button></div><div class="sc-iJKOTD hGZPxu sc-dPiLbb sRoPx"><div class="redoc-json"><code><button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable "><span class="property token string">"status"</span>: <button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable collapsed"><span class="property token string">"code"</span>: <span class="token string">&quot;EC000 _003&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable collapsed"><span class="property token string">"severity"</span>: <span class="token string">&quot;Fatal&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable collapsed"><span class="property token string">"text"</span>: <span class="token string">&quot;The request failed validation {reason}&quot;</span></div></li></ul><span class="token punctuation">}</span></div></li></ul><span class="token punctuation">}</span></code></div></div></div></div></div></div><div class="react-tabs__tab-panel" role="tabpanel" id="react-tabs-5" aria-labelledby="react-tabs-4"></div><div class="react-tabs__tab-panel" role="tabpanel" id="react-tabs-7" aria-labelledby="react-tabs-6"></div></div></div></div></div></div><div id="tag/RequestRTN" data-section-id="tag/RequestRTN" class="sc-eCImPb kKqedw"><div class="sc-iCfMLu jTXZbd"><div class="sc-hKwDye fcjMZs"><h1 class="sc-furwcr gZCBCh"><a class="sc-crHmcD bNUQy" href="#tag/RequestRTN" aria-label="tag/RequestRTN"></a>RequestRTN</h1></div></div><div class="sc-eCImPb kKqedw"><div class="sc-iCfMLu jTXZbd"><div class="sc-hKwDye fcjMZs"><table class="sc-hGPBjI jJnLYz"><tbody><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="account_identification"><span class="sc-ieecCq fMdASL"></span><span class="property-name">account_identification</span><div class="sc-nVkyK sc-hiwPVj eyZzuM eSyGZd">required</div></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span> <span class="sc-lbhJGD sc-Galmp gHbDui dhNwRb"> <!-- -->[ 1 .. 34 ] characters<!-- --> </span></span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>Account identification assigned by an institution, includes BSB</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="entry_reference"><span class="sc-ieecCq fMdASL"></span><span class="property-name">entry_reference</span><div class="sc-nVkyK sc-hiwPVj eyZzuM eSyGZd">required</div></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span> <span class="sc-lbhJGD sc-Galmp gHbDui dhNwRb"> <!-- -->[ 1 .. 35 ] characters<!-- --> </span></span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>Unique reference for the entry</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="amount"><span class="sc-ieecCq fMdASL"></span><span class="property-name">amount</span><div class="sc-nVkyK sc-hiwPVj eyZzuM eSyGZd">required</div></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span> <span class="sc-lbhJGD sc-Galmp gHbDui dhNwRb"> <!-- -->[ 1 .. 19 ] characters<!-- --> </span></span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>Notified amount in AUD</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="puid"><span class="sc-ieecCq fMdASL"></span><span class="property-name">puid</span></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span> <span class="sc-lbhJGD sc-Galmp gHbDui dhNwRb"> <!-- -->[ 1 .. 16 ] characters<!-- --> </span></span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>An optionally provided identifier which is returned in the requested RTN</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="debtor_name"><span class="sc-ieecCq fMdASL"></span><span class="property-name">debtor_name</span></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span> <span class="sc-lbhJGD sc-Galmp gHbDui dhNwRb"> <!-- -->[ 1 .. 140 ] characters<!-- --> </span></span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>Debtor (payer) account name</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="creditor_name"><span class="sc-ieecCq fMdASL"></span><span class="property-name">creditor_name</span></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span> <span class="sc-lbhJGD sc-Galmp gHbDui dhNwRb"> <!-- -->[ 1 .. 140 ] characters<!-- --> </span></span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>Creditor (payee) account name</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ kCCtqV fwnkRw" kind="field" title="arm_creditor_account_identification"><span class="sc-ieecCq fMdASL"></span><span class="property-name">arm_creditor_account_identification</span></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">string</span><span> <span class="sc-lbhJGD sc-Galmp gHbDui dhNwRb"> <!-- -->[ 1 .. 34 ] characters<!-- --> </span></span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>ARM (virtual) account identification, includes BSB</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ sc-gSQFLo kCCtqV fwnkRw iFIEVq" kind="field" title="creditor_alias"><span class="sc-ieecCq fMdASL"></span><button aria-label="expand properties"><span class="property-name">creditor_alias</span><svg class="sc-egiyK cUKGZj" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></button></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">object</span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"><p>Creditor account alias</p>
</div></div></div></td></tr><tr class=""><td class="sc-hBUSln sc-fFeiMQ sc-gSQFLo kCCtqV fwnkRw iFIEVq" kind="field" title="remittance_information"><span class="sc-ieecCq fMdASL"></span><button aria-label="expand properties"><span class="property-name">remittance_information</span><svg class="sc-egiyK cUKGZj" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></button></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">object</span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"></div></div></div></td></tr><tr class="last "><td class="sc-hBUSln sc-fFeiMQ sc-gSQFLo kCCtqV fwnkRw iFIEVq" kind="field" title="return_information"><span class="sc-ieecCq fMdASL"></span><button aria-label="expand properties"><span class="property-name">return_information</span><svg class="sc-egiyK cUKGZj" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></button></td><td class="sc-bkkeKt fOwWgB"><div><div><span class="sc-lbhJGD sc-iNGGcK gHbDui eLMLxg"></span><span class="sc-lbhJGD sc-jeraig gHbDui ifsMbX">object</span></div> <div><div class="sc-iJKOTD sc-cidDSM hGZPxu jCFAvK"></div></div></div></td></tr></tbody></table></div><div class="sc-jRQBWg sc-gKclnd vSqXI dKDnzb"><div class="sc-eLwHnm liMzMB"><div class="sc-jgrJph iUheaL"><div class="sc-jObWnj jOBPNj"><div class="sc-giYglK fpoFZz"><button><div class="sc-caiLqq ddxnzs">Copy</div></button><button> Expand all </button><button> Collapse all </button></div><div class="sc-iJKOTD hGZPxu sc-dPiLbb sRoPx"><div class="redoc-json"><code><button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable "><span class="property token string">"account_identification"</span>: <span class="token string">&quot;014814800000010&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"entry_reference"</span>: <span class="token string">&quot;Reference entered in the initiating channel&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"amount"</span>: <span class="token number">7120.86</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"puid"</span>: <span class="token string">&quot;PTM2022101389715&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"debtor_name"</span>: <span class="token string">&quot;Andras Arato&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"creditor_name"</span>: <span class="token string">&quot;Holden Holdings&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"arm_creditor_account_identification"</span>: <span class="token string">&quot;063678965323010&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"creditor_alias"</span>: <button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable collapsed"><span class="property token string">"type"</span>: <span class="token string">&quot;TELI&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable collapsed"><span class="property token string">"identification"</span>: <span class="token string">&quot;+61403736550&quot;</span></div></li></ul><span class="token punctuation">}</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"remittance_information"</span>: <button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable collapsed"><span class="property token string">"unstructured"</span>: <button class="collapser" aria-label="expand"></button><span class="token punctuation">[</span><span class="ellipsis"></span><ul class="array collapsible"><li><div class="hoverable collapsed"><span class="token string">&quot;👨‍👩‍👧‍👦Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a&quot;</span>,</div></li><li><div class="hoverable collapsed"><span class="token string">&quot;d minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit i&quot;</span></div></li></ul><span class="token punctuation">]</span></div></li></ul><span class="token punctuation">}</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"return_information"</span>: <button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable collapsed"><span class="property token string">"reason_code"</span>: <span class="token string">&quot;NARR&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable collapsed"><span class="property token string">"additional_information"</span>: <button class="collapser" aria-label="expand"></button><span class="token punctuation">[</span><span class="ellipsis"></span><ul class="array collapsible"><li><div class="hoverable collapsed"><span class="token string">&quot;Beneficiary is&quot;</span>,</div></li><li><div class="hoverable collapsed"><span class="token string">&quot;unknown&quot;</span></div></li></ul><span class="token punctuation">]</span></div></li></ul><span class="token punctuation">}</span></div></li></ul><span class="token punctuation">}</span></code></div></div></div></div></div></div></div></div></div></div><div class="sc-eldieg bLydqy"></div></div></div>
      <script>
      const __redoc_state = {"menu":{"activeItemIdx":-1},"spec":{"data":{"openapi":"3.0.1","info":{"title":"Fileactive Testing API","description":"Fileactive Self-Service Testing API. Rate limit is one request per second.","version":"v1.0"},"servers":[{"url":"https://api.fileactive.uat.anzgcis.com","description":"UAT (non-production) environment"}],"security":[{"apiKeyAuth":[]}],"paths":{"/testingfileactive/v1.0/rtn":{"post":{"summary":"Request A Real Time Notification Submit","description":"Request includes attributes which will be included in the RTN. All unspecified RTN fields will be defaulted","tags":["Receivables"],"operationId":"submitRTNRequest","externalDocs":{"description":"RTN Additional Information","url":"https://anz-insto.github.io/fileactive/rtn-info.html"},"parameters":[{"$ref":"#/components/parameters/correlationID"},{"$ref":"#/components/parameters/messageID"}],"requestBody":{"description":"Request a RTN","content":{"application/json":{"schema":{"$ref":"#/components/schemas/RequestRTN"}}},"required":true},"responses":{"201":{"$ref":"#/components/responses/201Created"},"400":{"$ref":"#/components/responses/400BadRequest"},"401":{"$ref":"#/components/responses/401Unauthorised"},"403":{"$ref":"#/components/responses/403Forbidden"},"429":{"$ref":"#/components/responses/429TooManyRequests"},"500":{"$ref":"#/components/responses/500InternalError"},"502":{"$ref":"#/components/responses/502BadGateway"},"503":{"$ref":"#/components/responses/503Unavailable"},"504":{"$ref":"#/components/responses/504Timeout"},"default":{"$ref":"#/components/responses/default"}}}}},"components":{"securitySchemes":{"apiKeyAuth":{"type":"apiKey","in":"header","name":"apikey","description":"API key to authorise requests."}},"parameters":{"correlationID":{"name":"x-Correlation-Id","in":"header","description":"Optional correlation ID provided by the data consumer that should be reflected back in the response headers. Can be used for reporting and logging.","schema":{"$ref":"#/components/schemas/UUID"},"example":"baf7b2b0-449d-48c7-a63a-876e72cd7b02"},"messageID":{"name":"x-Message-Id","in":"header","description":"Point to point reference, as assigned by the instructing party, and sent to the next party in the chain to unambiguously identify the message","required":true,"schema":{"$ref":"#/components/schemas/UUID"},"example":"3c40b28a-b902-477f-8400-6cb97d41cb06"}},"responses":{"201Created":{"description":"Success - A RTN was successfully created","headers":{"x-Correlation-Id":{"description":"GUID echoed from request. Example baf7b2b0-449d-48c7-a63a-876e72cd7b02","schema":{"$ref":"#/components/schemas/UUID"}},"x-RequestKey":{"description":"Request Key provided to customer for support and reporting purposes. Example 7eda441d-5716-4f28-b5fe-d3dc7458d526","schema":{"$ref":"#/components/schemas/UUID"}}}},"400BadRequest":{"description":"Bad Request, message format does not match expected schema","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorCode"},"example":{"status":{"code":"EC000 _003","severity":"Fatal","text":"The request failed validation {reason}"}}}}},"401Unauthorised":{"description":"Request is not authenticated","content":{}},"403Forbidden":{"description":"Request is authenticated but action is not allowed","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorCode"},"example":{"status":{"code":"EC013_003","severity":"Fatal","text":"The provided account_identification = 013999012345678 is not authorised to receive real time notifications. Provide an authorised account or please contact support"}}}}},"429TooManyRequests":{"description":"Action exceeds allocated limits","content":{}},"500InternalError":{"description":"Internal Server Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorCode"},"example":{"status":{"code":"EC000_001","severity":"Fatal","text":"Internal Server Error, please contact support"}}}}},"502BadGateway":{"description":"Bad Gateway, contact support","content":{}},"503Unavailable":{"description":"Service Unavailable or down for maintainance","content":{}},"504Timeout":{"description":"Gateway Timeout, retry or contact support","content":{}},"default":{"description":"Unexpected error","content":{}}},"schemas":{"RequestRTN":{"required":["account_identification","entry_reference","amount"],"type":"object","properties":{"account_identification":{"type":"string","description":"Account identification assigned by an institution, includes BSB","minLength":1,"maxLength":34,"example":"014814800000010"},"entry_reference":{"type":"string","minLength":1,"maxLength":35,"description":"Unique reference for the entry","example":"Reference entered in the initiating channel"},"amount":{"type":"string","description":"Notified amount in AUD","minLength":1,"maxLength":19,"example":7120.86},"puid":{"type":"string","minLength":1,"maxLength":16,"description":"An optionally provided identifier which is returned in the requested RTN","example":"PTM2022101389715"},"debtor_name":{"type":"string","minLength":1,"maxLength":140,"description":"Debtor (payer) account name","example":"Andras Arato"},"creditor_name":{"type":"string","minLength":1,"maxLength":140,"description":"Creditor (payee) account name","example":"Holden Holdings"},"arm_creditor_account_identification":{"type":"string","description":"ARM (virtual) account identification, includes BSB","minLength":1,"maxLength":34,"example":"063678965323010"},"creditor_alias":{"required":["type","identification"],"type":"object","description":"Creditor account alias","properties":{"type":{"type":"string","enum":["TELI","EMAL","AUBN","ORGN"],"description":"Creditor account alias type","example":"TELI"},"identification":{"type":"string","description":"Creditor account alias identification","minLength":1,"maxLength":2048,"example":"+61403736550"}}},"remittance_information":{"type":"object","properties":{"unstructured":{"type":"array","description":"Information supplied to enable the matching/reconciliation of an entry  with the items that the payment is intended to settle, such as commercial  invoices in an accounts receivable system, in an unstructured form.","example":["👨‍👩‍👧‍👦Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a","d minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit i"],"items":{"type":"string","minLength":1,"maxLength":140},"minItems":1,"maxItems":2}}},"return_information":{"required":["reason_code"],"type":"object","properties":{"reason_code":{"type":"string","description":"Payment return reason code","minLength":4,"maxLength":4,"example":"NARR"},"additional_information":{"type":"array","description":"Further details on the return reason","example":["Beneficiary is","unknown"],"items":{"type":"string","minLength":1,"maxLength":105},"minItems":1,"maxItems":3}}}}},"UUID":{"type":"string","pattern":"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"},"ErrorCode":{"type":"object","properties":{"status":{"type":"object","required":["code","severity","text"],"properties":{"code":{"type":"string","example":"EC000_001"},"severity":{"type":"string","enum":["Fatal","Transient"],"example":"Fatal"},"text":{"type":"string","example":"Internal Server Error, please contact support"}}}}}}},"tags":[{"name":"Receivables","description":"Operations related to receivables."},{"name":"RequestRTN","description":"<SchemaDefinition schemaRef=\"#/components/schemas/RequestRTN\" />","x-displayName":"RequestRTN"}],"x-tagGroups":[{"name":"Paths","tags":["Receivables"]},{"name":"Models","tags":["RequestRTN"]}]}},"searchIndex":{"store":["tag/Receivables","tag/Receivables/operation/submitRTNRequest","tag/RequestRTN"],"index":{"version":"2.3.9","fields":["title","description"],"fieldVectors":[["title/0",[0,0.613]],["description/0",[0,0.572,1,1.195,2,1.195]],["title/1",[3,0.32,4,0.668,5,0.668,6,0.668,7,0.668]],["description/1",[3,0.346,8,1.082,9,0.722,10,1.082,11,0.722,12,0.722,13,0.722,14,0.722]],["title/2",[15,1.28]],["description/2",[16,1.195,17,1.195,18,1.195]]],"invertedIndex":[["",{"_index":18,"title":{},"description":{"2":{}}}],["attribut",{"_index":9,"title":{},"description":{"1":{}}}],["default",{"_index":13,"title":{},"description":{"1":{}}}],["field",{"_index":12,"title":{},"description":{"1":{}}}],["includ",{"_index":8,"title":{},"description":{"1":{}}}],["notif",{"_index":6,"title":{"1":{}},"description":{}}],["oper",{"_index":1,"title":{},"description":{"0":{}}}],["real",{"_index":4,"title":{"1":{}},"description":{}}],["receiv",{"_index":0,"title":{"0":{}},"description":{"0":{}}}],["relat",{"_index":2,"title":{},"description":{"0":{}}}],["request",{"_index":3,"title":{"1":{}},"description":{"1":{}}}],["requestrtn",{"_index":15,"title":{"2":{}},"description":{}}],["rtn",{"_index":10,"title":{},"description":{"1":{}}}],["schemadefinit",{"_index":16,"title":{},"description":{"2":{}}}],["schemaref=\"#/components/schemas/requestrtn",{"_index":17,"title":{},"description":{"2":{}}}],["submit",{"_index":7,"title":{"1":{}},"description":{}}],["testingfileactive/v1.0/rtn",{"_index":14,"title":{},"description":{"1":{}}}],["time",{"_index":5,"title":{"1":{}},"description":{}}],["unspecifi",{"_index":11,"title":{},"description":{"1":{}}}]],"pipeline":[]}},"options":{"scrollYOffset":65,"downloadFileName":"openapi.yaml","theme":{"typography":{"fontFamily":"Myriad Pro, Helvetica, Arial, sans-serif","fontSize":"16px","lineHeight":"1.5em","headings":{"fontFamily":"Myriad Pro, Helvetica, Arial, sans-serif","fontWeight":"600"}},"sidebar":{"backgroundColor":"#F7F7F7","textColor":"#394A58"}}}};

      var container = document.getElementById('redoc');
      Redoc.hydrate(__redoc_state, container);

      </script>
          {% endraw %}
          </div>
        </div>
        {% include footer.html %}
      </div>
      {% include scripts.html %}

  </body>
