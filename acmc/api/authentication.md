---
title: Authentication &amp; Payload
layout: api
navigation: fileactive
---


  <head>

    {% include head-api.html %}
    {% raw %}
    <script src="https://cdn.redoc.ly/redoc/v2.1.5/bundles/redoc.standalone.js"></script><style data-styled="true" data-styled-version="6.1.13">.dFrZq{width:calc(100% - 40%);padding:0 40px;}/*!sc*/
@media print,screen and (max-width: 75rem){.dFrZq{width:100%;padding:40px 40px;}}/*!sc*/
.dYLNKi{width:calc(100% - 40%);padding:0 40px;}/*!sc*/
@media print,screen and (max-width: 75rem){.dYLNKi{width:100%;padding:0px 40px;}}/*!sc*/
data-styled.g4[id="sc-fAUdSK"]{content:"dFrZq,dYLNKi,"}/*!sc*/
.bvhSud{padding:40px 0;}/*!sc*/
.bvhSud:last-child{min-height:calc(100vh + 1px);}/*!sc*/
.bvhSud>.bvhSud:last-child{min-height:initial;}/*!sc*/
@media print,screen and (max-width: 75rem){.bvhSud{padding:0;}}/*!sc*/
.aYCdu{padding:40px 0;position:relative;}/*!sc*/
.aYCdu:last-child{min-height:calc(100vh + 1px);}/*!sc*/
.aYCdu>.aYCdu:last-child{min-height:initial;}/*!sc*/
@media print,screen and (max-width: 75rem){.aYCdu{padding:0;}}/*!sc*/
.aYCdu:not(:last-of-type):after{position:absolute;bottom:0;width:100%;display:block;content:'';border-bottom:1px solid rgba(0, 0, 0, 0.2);}/*!sc*/
data-styled.g5[id="sc-dntaoT"]{content:"bvhSud,aYCdu,"}/*!sc*/
.gOjFGl{width:40%;color:#ffffff;background-color:#263238;padding:0 40px;}/*!sc*/
@media print,screen and (max-width: 75rem){.gOjFGl{width:100%;padding:40px 40px;}}/*!sc*/
data-styled.g6[id="sc-ivxoEo"]{content:"gOjFGl,"}/*!sc*/
.oECKJ{background-color:#263238;}/*!sc*/
data-styled.g7[id="sc-ghWlax"]{content:"oECKJ,"}/*!sc*/
.dECWTf{display:flex;width:100%;padding:0;}/*!sc*/
@media print,screen and (max-width: 75rem){.dECWTf{flex-direction:column;}}/*!sc*/
data-styled.g8[id="sc-kLhKbu"]{content:"dECWTf,"}/*!sc*/
.hrgkRP{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:600;font-size:1.85714em;line-height:1.6em;color:#333333;}/*!sc*/
data-styled.g9[id="sc-ixGGxD"]{content:"hrgkRP,"}/*!sc*/
.gQygHf{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:600;font-size:1.57143em;line-height:1.6em;color:#333333;margin:0 0 20px;}/*!sc*/
data-styled.g10[id="sc-khLCKb"]{content:"gQygHf,"}/*!sc*/
.zvQzH{color:#ffffff;}/*!sc*/
data-styled.g12[id="sc-keTIit"]{content:"zvQzH,"}/*!sc*/
.eJAAZj{border-bottom:1px solid rgba(38, 50, 56, 0.3);margin:1em 0 1em 0;color:rgba(38, 50, 56, 0.5);font-weight:normal;text-transform:uppercase;font-size:0.929em;line-height:20px;}/*!sc*/
data-styled.g13[id="sc-dpBQxM"]{content:"eJAAZj,"}/*!sc*/
.hbTOAm{cursor:pointer;margin-left:-20px;padding:0;line-height:1;width:20px;display:inline-block;outline:0;}/*!sc*/
.hbTOAm:before{content:'';width:15px;height:15px;background-size:contain;background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDU5LjcgMjMzLjRsLTkwLjUgOTAuNWMtNTAgNTAtMTMxIDUwLTE4MSAwIC03LjktNy44LTE0LTE2LjctMTkuNC0yNS44bDQyLjEtNDIuMWMyLTIgNC41LTMuMiA2LjgtNC41IDIuOSA5LjkgOCAxOS4zIDE1LjggMjcuMiAyNSAyNSA2NS42IDI0LjkgOTAuNSAwbDkwLjUtOTAuNWMyNS0yNSAyNS02NS42IDAtOTAuNSAtMjQuOS0yNS02NS41LTI1LTkwLjUgMGwtMzIuMiAzMi4yYy0yNi4xLTEwLjItNTQuMi0xMi45LTgxLjYtOC45bDY4LjYtNjguNmM1MC01MCAxMzEtNTAgMTgxIDBDNTA5LjYgMTAyLjMgNTA5LjYgMTgzLjQgNDU5LjcgMjMzLjR6TTIyMC4zIDM4Mi4ybC0zMi4yIDMyLjJjLTI1IDI0LjktNjUuNiAyNC45LTkwLjUgMCAtMjUtMjUtMjUtNjUuNiAwLTkwLjVsOTAuNS05MC41YzI1LTI1IDY1LjUtMjUgOTAuNSAwIDcuOCA3LjggMTIuOSAxNy4yIDE1LjggMjcuMSAyLjQtMS40IDQuOC0yLjUgNi44LTQuNWw0Mi4xLTQyYy01LjQtOS4yLTExLjYtMTgtMTkuNC0yNS44IC01MC01MC0xMzEtNTAtMTgxIDBsLTkwLjUgOTAuNWMtNTAgNTAtNTAgMTMxIDAgMTgxIDUwIDUwIDEzMSA1MCAxODEgMGw2OC42LTY4LjZDMjc0LjYgMzk1LjEgMjQ2LjQgMzkyLjMgMjIwLjMgMzgyLjJ6Ii8+PC9zdmc+Cg==');opacity:0.5;visibility:hidden;display:inline-block;vertical-align:middle;}/*!sc*/
h1:hover>.hbTOAm::before,h2:hover>.hbTOAm::before,.hbTOAm:hover::before{visibility:visible;}/*!sc*/
data-styled.g14[id="sc-jwIPbr"]{content:"hbTOAm,"}/*!sc*/
.gkUOTk{height:18px;width:18px;min-width:18px;vertical-align:middle;float:right;transition:transform 0.2s ease-out;transform:rotateZ(-90deg);}/*!sc*/
.bEpxpV{height:1.3em;width:1.3em;min-width:1.3em;vertical-align:middle;transition:transform 0.2s ease-out;transform:rotateZ(-90deg);}/*!sc*/
.ccTkAM{height:18px;width:18px;min-width:18px;vertical-align:middle;transition:transform 0.2s ease-out;transform:rotateZ(-90deg);}/*!sc*/
.hmCwJW{height:1.5em;width:1.5em;min-width:1.5em;vertical-align:middle;float:left;transition:transform 0.2s ease-out;transform:rotateZ(-90deg);}/*!sc*/
.hmCwJW polygon{fill:#1d8127;}/*!sc*/
.kVOWjS{height:1.5em;width:1.5em;min-width:1.5em;vertical-align:middle;float:left;transition:transform 0.2s ease-out;transform:rotateZ(-90deg);}/*!sc*/
.kVOWjS polygon{fill:#d41f1c;}/*!sc*/
.fmmJjS{height:20px;width:20px;min-width:20px;vertical-align:middle;float:right;transition:transform 0.2s ease-out;transform:rotateZ(0);}/*!sc*/
.fmmJjS polygon{fill:white;}/*!sc*/
data-styled.g15[id="sc-cHqXqK"]{content:"gkUOTk,bEpxpV,ccTkAM,hmCwJW,kVOWjS,fmmJjS,"}/*!sc*/
.iyKqKI{border-left:1px solid #7c7cbb;box-sizing:border-box;position:relative;padding:10px 10px 10px 0;}/*!sc*/
@media screen and (max-width: 50rem){.iyKqKI{display:block;overflow:hidden;}}/*!sc*/
tr:first-of-type>.iyKqKI,tr.last>.iyKqKI{border-left-width:0;background-position:top left;background-repeat:no-repeat;background-size:1px 100%;}/*!sc*/
tr:first-of-type>.iyKqKI{background-image:linear-gradient(
      to bottom,
      transparent 0%,
      transparent 22px,
      #7c7cbb 22px,
      #7c7cbb 100%
    );}/*!sc*/
tr.last>.iyKqKI{background-image:linear-gradient(
      to bottom,
      #7c7cbb 0%,
      #7c7cbb 22px,
      transparent 22px,
      transparent 100%
    );}/*!sc*/
tr.last+tr>.iyKqKI{border-left-color:transparent;}/*!sc*/
tr.last:first-child>.iyKqKI{background:none;border-left-color:transparent;}/*!sc*/
data-styled.g18[id="sc-ovuCP"]{content:"iyKqKI,"}/*!sc*/
.iQpMVv{vertical-align:top;line-height:20px;white-space:nowrap;font-size:13px;font-family:Courier,monospace;}/*!sc*/
.iQpMVv.deprecated{text-decoration:line-through;color:#707070;}/*!sc*/
data-styled.g20[id="sc-eauhAA"]{content:"iQpMVv,"}/*!sc*/
.cHXoZJ{border-bottom:1px solid #9fb4be;padding:10px 0;width:75%;box-sizing:border-box;}/*!sc*/
tr.expanded .cHXoZJ{border-bottom:none;}/*!sc*/
@media screen and (max-width: 50rem){.cHXoZJ{padding:0 20px;border-bottom:none;border-left:1px solid #7c7cbb;}tr.last>.cHXoZJ{border-left:none;}}/*!sc*/
data-styled.g21[id="sc-fFoeYl"]{content:"cHXoZJ,"}/*!sc*/
.kPDxnK{color:#7c7cbb;font-family:Courier,monospace;margin-right:10px;}/*!sc*/
.kPDxnK::before{content:'';display:inline-block;vertical-align:middle;width:10px;height:1px;background:#7c7cbb;}/*!sc*/
.kPDxnK::after{content:'';display:inline-block;vertical-align:middle;width:1px;background:#7c7cbb;height:7px;}/*!sc*/
data-styled.g22[id="sc-gQaihK"]{content:"kPDxnK,"}/*!sc*/
.hNmabw{border-collapse:separate;border-radius:3px;font-size:16px;border-spacing:0;width:100%;}/*!sc*/
.hNmabw >tr{vertical-align:middle;}/*!sc*/
@media screen and (max-width: 50rem){.hNmabw{display:block;}.hNmabw >tr,.hNmabw >tbody>tr{display:block;}}/*!sc*/
@media screen and (max-width: 50rem) and (-ms-high-contrast:none){.hNmabw td{float:left;width:100%;}}/*!sc*/
.hNmabw .sc-iuUfFv,.hNmabw .sc-iuUfFv .sc-iuUfFv .sc-iuUfFv,.hNmabw .sc-iuUfFv .sc-iuUfFv .sc-iuUfFv .sc-iuUfFv .sc-iuUfFv{margin:1em;margin-right:0;background:#fafafa;}/*!sc*/
.hNmabw .sc-iuUfFv .sc-iuUfFv,.hNmabw .sc-iuUfFv .sc-iuUfFv .sc-iuUfFv .sc-iuUfFv,.hNmabw .sc-iuUfFv .sc-iuUfFv .sc-iuUfFv .sc-iuUfFv .sc-iuUfFv .sc-iuUfFv{background:#ffffff;}/*!sc*/
data-styled.g24[id="sc-dprtRQ"]{content:"hNmabw,"}/*!sc*/
.fbQvpV >ul{list-style:none;padding:0;margin:0;margin:0 -5px;}/*!sc*/
.fbQvpV >ul >li{padding:5px 10px;display:inline-block;background-color:#11171a;border-bottom:1px solid rgba(0, 0, 0, 0.5);cursor:pointer;text-align:center;outline:none;color:#ccc;margin:0 5px 5px 5px;border:1px solid #07090b;border-radius:5px;min-width:60px;font-size:0.9em;font-weight:bold;}/*!sc*/
.fbQvpV >ul >li.react-tabs__tab--selected{color:#333333;background:#ffffff;}/*!sc*/
.fbQvpV >ul >li.react-tabs__tab--selected:focus{outline:auto;}/*!sc*/
.fbQvpV >ul >li:only-child{flex:none;min-width:100px;}/*!sc*/
.fbQvpV >ul >li.tab-success{color:#1d8127;}/*!sc*/
.fbQvpV >ul >li.tab-redirect{color:#ffa500;}/*!sc*/
.fbQvpV >ul >li.tab-info{color:#87ceeb;}/*!sc*/
.fbQvpV >ul >li.tab-error{color:#d41f1c;}/*!sc*/
.fbQvpV >.react-tabs__tab-panel{background:#11171a;}/*!sc*/
.fbQvpV >.react-tabs__tab-panel>div,.fbQvpV >.react-tabs__tab-panel>pre{padding:20px;margin:0;}/*!sc*/
.fbQvpV >.react-tabs__tab-panel>div>pre{padding:0;}/*!sc*/
data-styled.g30[id="sc-bMTdWJ"]{content:"fbQvpV,"}/*!sc*/
.drsioI code[class*='language-'],.drsioI pre[class*='language-']{text-shadow:0 -0.1em 0.2em black;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}/*!sc*/
@media print{.drsioI code[class*='language-'],.drsioI pre[class*='language-']{text-shadow:none;}}/*!sc*/
.drsioI pre[class*='language-']{padding:1em;margin:0.5em 0;overflow:auto;}/*!sc*/
.drsioI .token.comment,.drsioI .token.prolog,.drsioI .token.doctype,.drsioI .token.cdata{color:hsl(30, 20%, 50%);}/*!sc*/
.drsioI .token.punctuation{opacity:0.7;}/*!sc*/
.drsioI .namespace{opacity:0.7;}/*!sc*/
.drsioI .token.property,.drsioI .token.tag,.drsioI .token.number,.drsioI .token.constant,.drsioI .token.symbol{color:#4a8bb3;}/*!sc*/
.drsioI .token.boolean{color:#e64441;}/*!sc*/
.drsioI .token.selector,.drsioI .token.attr-name,.drsioI .token.string,.drsioI .token.char,.drsioI .token.builtin,.drsioI .token.inserted{color:#a0fbaa;}/*!sc*/
.drsioI .token.selector+a,.drsioI .token.attr-name+a,.drsioI .token.string+a,.drsioI .token.char+a,.drsioI .token.builtin+a,.drsioI .token.inserted+a,.drsioI .token.selector+a:visited,.drsioI .token.attr-name+a:visited,.drsioI .token.string+a:visited,.drsioI .token.char+a:visited,.drsioI .token.builtin+a:visited,.drsioI .token.inserted+a:visited{color:#4ed2ba;text-decoration:underline;}/*!sc*/
.drsioI .token.property.string{color:white;}/*!sc*/
.drsioI .token.operator,.drsioI .token.entity,.drsioI .token.url,.drsioI .token.variable{color:hsl(40, 90%, 60%);}/*!sc*/
.drsioI .token.atrule,.drsioI .token.attr-value,.drsioI .token.keyword{color:hsl(350, 40%, 70%);}/*!sc*/
.drsioI .token.regex,.drsioI .token.important{color:#e90;}/*!sc*/
.drsioI .token.important,.drsioI .token.bold{font-weight:bold;}/*!sc*/
.drsioI .token.italic{font-style:italic;}/*!sc*/
.drsioI .token.entity{cursor:help;}/*!sc*/
.drsioI .token.deleted{color:red;}/*!sc*/
data-styled.g32[id="sc-epnzzT"]{content:"drsioI,"}/*!sc*/
.jwEzVq{opacity:0.7;transition:opacity 0.3s ease;text-align:right;}/*!sc*/
.jwEzVq:focus-within{opacity:1;}/*!sc*/
.jwEzVq >button{background-color:transparent;border:0;color:inherit;padding:2px 10px;font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5em;cursor:pointer;outline:0;}/*!sc*/
.jwEzVq >button :hover,.jwEzVq >button :focus{background:rgba(255, 255, 255, 0.1);}/*!sc*/
data-styled.g33[id="sc-uYFMi"]{content:"jwEzVq,"}/*!sc*/
.cpBPUN{position:relative;}/*!sc*/
data-styled.g37[id="sc-dEkLRj"]{content:"cpBPUN,"}/*!sc*/
.khtVmz{margin-left:10px;text-transform:none;font-size:0.929em;color:black;}/*!sc*/
data-styled.g41[id="sc-dhCplO"]{content:"khtVmz,"}/*!sc*/
.fTYLVQ{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5em;}/*!sc*/
.fTYLVQ p:last-child{margin-bottom:0;}/*!sc*/
.fTYLVQ h1{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:600;font-size:1.85714em;line-height:1.6em;color:#32329f;margin-top:0;}/*!sc*/
.fTYLVQ h2{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:600;font-size:1.57143em;line-height:1.6em;color:#333333;}/*!sc*/
.fTYLVQ code{color:#e53935;background-color:rgba(38, 50, 56, 0.05);font-family:Courier,monospace;border-radius:2px;border:1px solid rgba(38, 50, 56, 0.1);padding:0 5px;font-size:13px;font-weight:400;word-break:break-word;}/*!sc*/
.fTYLVQ pre{font-family:Courier,monospace;white-space:pre;background-color:#11171a;color:white;padding:20px;overflow-x:auto;line-height:normal;border-radius:0;border:1px solid rgba(38, 50, 56, 0.1);}/*!sc*/
.fTYLVQ pre code{background-color:transparent;color:white;padding:0;}/*!sc*/
.fTYLVQ pre code:before,.fTYLVQ pre code:after{content:none;}/*!sc*/
.fTYLVQ blockquote{margin:0;margin-bottom:1em;padding:0 15px;color:#777;border-left:4px solid #ddd;}/*!sc*/
.fTYLVQ img{max-width:100%;box-sizing:content-box;}/*!sc*/
.fTYLVQ ul,.fTYLVQ ol{padding-left:2em;margin:0;margin-bottom:1em;}/*!sc*/
.fTYLVQ ul ul,.fTYLVQ ol ul,.fTYLVQ ul ol,.fTYLVQ ol ol{margin-bottom:0;margin-top:0;}/*!sc*/
.fTYLVQ table{display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all;border-collapse:collapse;border-spacing:0;margin-top:1.5em;margin-bottom:1.5em;}/*!sc*/
.fTYLVQ table tr{background-color:#fff;border-top:1px solid #ccc;}/*!sc*/
.fTYLVQ table tr:nth-child(2n){background-color:#fafafa;}/*!sc*/
.fTYLVQ table th,.fTYLVQ table td{padding:6px 13px;border:1px solid #ddd;}/*!sc*/
.fTYLVQ table th{text-align:left;font-weight:bold;}/*!sc*/
.fTYLVQ .share-link{cursor:pointer;margin-left:-20px;padding:0;line-height:1;width:20px;display:inline-block;outline:0;}/*!sc*/
.fTYLVQ .share-link:before{content:'';width:15px;height:15px;background-size:contain;background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDU5LjcgMjMzLjRsLTkwLjUgOTAuNWMtNTAgNTAtMTMxIDUwLTE4MSAwIC03LjktNy44LTE0LTE2LjctMTkuNC0yNS44bDQyLjEtNDIuMWMyLTIgNC41LTMuMiA2LjgtNC41IDIuOSA5LjkgOCAxOS4zIDE1LjggMjcuMiAyNSAyNSA2NS42IDI0LjkgOTAuNSAwbDkwLjUtOTAuNWMyNS0yNSAyNS02NS42IDAtOTAuNSAtMjQuOS0yNS02NS41LTI1LTkwLjUgMGwtMzIuMiAzMi4yYy0yNi4xLTEwLjItNTQuMi0xMi45LTgxLjYtOC45bDY4LjYtNjguNmM1MC01MCAxMzEtNTAgMTgxIDBDNTA5LjYgMTAyLjMgNTA5LjYgMTgzLjQgNDU5LjcgMjMzLjR6TTIyMC4zIDM4Mi4ybC0zMi4yIDMyLjJjLTI1IDI0LjktNjUuNiAyNC45LTkwLjUgMCAtMjUtMjUtMjUtNjUuNiAwLTkwLjVsOTAuNS05MC41YzI1LTI1IDY1LjUtMjUgOTAuNSAwIDcuOCA3LjggMTIuOSAxNy4yIDE1LjggMjcuMSAyLjQtMS40IDQuOC0yLjUgNi44LTQuNWw0Mi4xLTQyYy01LjQtOS4yLTExLjYtMTgtMTkuNC0yNS44IC01MC01MC0xMzEtNTAtMTgxIDBsLTkwLjUgOTAuNWMtNTAgNTAtNTAgMTMxIDAgMTgxIDUwIDUwIDEzMSA1MCAxODEgMGw2OC42LTY4LjZDMjc0LjYgMzk1LjEgMjQ2LjQgMzkyLjMgMjIwLjMgMzgyLjJ6Ii8+PC9zdmc+Cg==');opacity:0.5;visibility:hidden;display:inline-block;vertical-align:middle;}/*!sc*/
.fTYLVQ h1:hover>.share-link::before,.fTYLVQ h2:hover>.share-link::before,.fTYLVQ .share-link:hover::before{visibility:visible;}/*!sc*/
.fTYLVQ a{text-decoration:auto;color:#32329f;}/*!sc*/
.fTYLVQ a:visited{color:#32329f;}/*!sc*/
.fTYLVQ a:hover{color:#6868cf;text-decoration:auto;}/*!sc*/
.hETJpC{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5em;}/*!sc*/
.hETJpC p:last-child{margin-bottom:0;}/*!sc*/
.hETJpC p:first-child{margin-top:0;}/*!sc*/
.hETJpC p:last-child{margin-bottom:0;}/*!sc*/
.hETJpC h1{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:600;font-size:1.85714em;line-height:1.6em;color:#32329f;margin-top:0;}/*!sc*/
.hETJpC h2{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:600;font-size:1.57143em;line-height:1.6em;color:#333333;}/*!sc*/
.hETJpC code{color:#e53935;background-color:rgba(38, 50, 56, 0.05);font-family:Courier,monospace;border-radius:2px;border:1px solid rgba(38, 50, 56, 0.1);padding:0 5px;font-size:13px;font-weight:400;word-break:break-word;}/*!sc*/
.hETJpC pre{font-family:Courier,monospace;white-space:pre;background-color:#11171a;color:white;padding:20px;overflow-x:auto;line-height:normal;border-radius:0;border:1px solid rgba(38, 50, 56, 0.1);}/*!sc*/
.hETJpC pre code{background-color:transparent;color:white;padding:0;}/*!sc*/
.hETJpC pre code:before,.hETJpC pre code:after{content:none;}/*!sc*/
.hETJpC blockquote{margin:0;margin-bottom:1em;padding:0 15px;color:#777;border-left:4px solid #ddd;}/*!sc*/
.hETJpC img{max-width:100%;box-sizing:content-box;}/*!sc*/
.hETJpC ul,.hETJpC ol{padding-left:2em;margin:0;margin-bottom:1em;}/*!sc*/
.hETJpC ul ul,.hETJpC ol ul,.hETJpC ul ol,.hETJpC ol ol{margin-bottom:0;margin-top:0;}/*!sc*/
.hETJpC table{display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all;border-collapse:collapse;border-spacing:0;margin-top:1.5em;margin-bottom:1.5em;}/*!sc*/
.hETJpC table tr{background-color:#fff;border-top:1px solid #ccc;}/*!sc*/
.hETJpC table tr:nth-child(2n){background-color:#fafafa;}/*!sc*/
.hETJpC table th,.hETJpC table td{padding:6px 13px;border:1px solid #ddd;}/*!sc*/
.hETJpC table th{text-align:left;font-weight:bold;}/*!sc*/
.hETJpC .share-link{cursor:pointer;margin-left:-20px;padding:0;line-height:1;width:20px;display:inline-block;outline:0;}/*!sc*/
.hETJpC .share-link:before{content:'';width:15px;height:15px;background-size:contain;background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDU5LjcgMjMzLjRsLTkwLjUgOTAuNWMtNTAgNTAtMTMxIDUwLTE4MSAwIC03LjktNy44LTE0LTE2LjctMTkuNC0yNS44bDQyLjEtNDIuMWMyLTIgNC41LTMuMiA2LjgtNC41IDIuOSA5LjkgOCAxOS4zIDE1LjggMjcuMiAyNSAyNSA2NS42IDI0LjkgOTAuNSAwbDkwLjUtOTAuNWMyNS0yNSAyNS02NS42IDAtOTAuNSAtMjQuOS0yNS02NS41LTI1LTkwLjUgMGwtMzIuMiAzMi4yYy0yNi4xLTEwLjItNTQuMi0xMi45LTgxLjYtOC45bDY4LjYtNjguNmM1MC01MCAxMzEtNTAgMTgxIDBDNTA5LjYgMTAyLjMgNTA5LjYgMTgzLjQgNDU5LjcgMjMzLjR6TTIyMC4zIDM4Mi4ybC0zMi4yIDMyLjJjLTI1IDI0LjktNjUuNiAyNC45LTkwLjUgMCAtMjUtMjUtMjUtNjUuNiAwLTkwLjVsOTAuNS05MC41YzI1LTI1IDY1LjUtMjUgOTAuNSAwIDcuOCA3LjggMTIuOSAxNy4yIDE1LjggMjcuMSAyLjQtMS40IDQuOC0yLjUgNi44LTQuNWw0Mi4xLTQyYy01LjQtOS4yLTExLjYtMTgtMTkuNC0yNS44IC01MC01MC0xMzEtNTAtMTgxIDBsLTkwLjUgOTAuNWMtNTAgNTAtNTAgMTMxIDAgMTgxIDUwIDUwIDEzMSA1MCAxODEgMGw2OC42LTY4LjZDMjc0LjYgMzk1LjEgMjQ2LjQgMzkyLjMgMjIwLjMgMzgyLjJ6Ii8+PC9zdmc+Cg==');opacity:0.5;visibility:hidden;display:inline-block;vertical-align:middle;}/*!sc*/
.hETJpC h1:hover>.share-link::before,.hETJpC h2:hover>.share-link::before,.hETJpC .share-link:hover::before{visibility:visible;}/*!sc*/
.hETJpC a{text-decoration:auto;color:#32329f;}/*!sc*/
.hETJpC a:visited{color:#32329f;}/*!sc*/
.hETJpC a:hover{color:#6868cf;text-decoration:auto;}/*!sc*/
data-styled.g42[id="sc-eMwmJz"]{content:"fTYLVQ,hETJpC,"}/*!sc*/
.jtjIAv{display:inline;}/*!sc*/
data-styled.g43[id="sc-drVZOg"]{content:"jtjIAv,"}/*!sc*/
.ezdXRP{position:relative;}/*!sc*/
data-styled.g44[id="sc-eWPXlR"]{content:"ezdXRP,"}/*!sc*/
.mMhCU:hover>.sc-uYFMi{opacity:1;}/*!sc*/
data-styled.g49[id="sc-eDHQDy"]{content:"mMhCU,"}/*!sc*/
.iyEpFV{font-family:Courier,monospace;font-size:13px;white-space:pre;contain:content;overflow-x:auto;}/*!sc*/
.iyEpFV .redoc-json code>.collapser{display:none;pointer-events:none;}/*!sc*/
.iyEpFV .callback-function{color:gray;}/*!sc*/
.iyEpFV .collapser:after{content:'-';cursor:pointer;}/*!sc*/
.iyEpFV .collapsed>.collapser:after{content:'+';cursor:pointer;}/*!sc*/
.iyEpFV .ellipsis:after{content:' … ';}/*!sc*/
.iyEpFV .collapsible{margin-left:2em;}/*!sc*/
.iyEpFV .hoverable{padding-top:1px;padding-bottom:1px;padding-left:2px;padding-right:2px;border-radius:2px;}/*!sc*/
.iyEpFV .hovered{background-color:rgba(235, 238, 249, 1);}/*!sc*/
.iyEpFV .collapser{background-color:transparent;border:0;color:#fff;font-family:Courier,monospace;font-size:13px;padding-right:6px;padding-left:6px;padding-top:0;padding-bottom:0;display:flex;align-items:center;justify-content:center;width:15px;height:15px;position:absolute;top:4px;left:-1.5em;cursor:default;user-select:none;-webkit-user-select:none;padding:2px;}/*!sc*/
.iyEpFV .collapser:focus{outline-color:#fff;outline-style:dotted;outline-width:1px;}/*!sc*/
.iyEpFV ul{list-style-type:none;padding:0px;margin:0px 0px 0px 26px;}/*!sc*/
.iyEpFV li{position:relative;display:block;}/*!sc*/
.iyEpFV .hoverable{display:inline-block;}/*!sc*/
.iyEpFV .selected{outline-style:solid;outline-width:1px;outline-style:dotted;}/*!sc*/
.iyEpFV .collapsed>.collapsible{display:none;}/*!sc*/
.iyEpFV .ellipsis{display:none;}/*!sc*/
.iyEpFV .collapsed>.ellipsis{display:inherit;}/*!sc*/
data-styled.g50[id="sc-giBObj"]{content:"iyEpFV,"}/*!sc*/
.eglery{padding:0.9em;background-color:rgba(38,50,56,0.4);margin:0 0 10px 0;display:block;font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-size:0.929em;line-height:1.5em;}/*!sc*/
data-styled.g51[id="sc-UblHX"]{content:"eglery,"}/*!sc*/
.idVphA{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-size:12px;position:absolute;z-index:1;top:-11px;left:12px;font-weight:600;color:rgba(255,255,255,0.7);}/*!sc*/
data-styled.g52[id="sc-fufdwm"]{content:"idVphA,"}/*!sc*/
.dIDLbO{position:relative;}/*!sc*/
data-styled.g53[id="sc-Rjrgp"]{content:"dIDLbO,"}/*!sc*/
.kqHNPM{margin-top:15px;}/*!sc*/
data-styled.g56[id="sc-FFETS"]{content:"kqHNPM,"}/*!sc*/
.buGHPE.deprecated span.property-name{text-decoration:line-through;color:#707070;}/*!sc*/
.buGHPE button{background-color:transparent;border:0;outline:0;font-size:13px;font-family:Courier,monospace;cursor:pointer;padding:0;color:#333333;}/*!sc*/
.buGHPE button:focus{font-weight:600;}/*!sc*/
.buGHPE .sc-cHqXqK{height:1.1em;width:1.1em;}/*!sc*/
.buGHPE .sc-cHqXqK polygon{fill:#666;}/*!sc*/
data-styled.g57[id="sc-hsfCcR"]{content:"buGHPE,"}/*!sc*/
.hPAOR{vertical-align:middle;font-size:13px;line-height:20px;}/*!sc*/
data-styled.g58[id="sc-CNKsk"]{content:"hPAOR,"}/*!sc*/
.dWKYKL{color:rgba(102,102,102,0.9);}/*!sc*/
data-styled.g59[id="sc-cqgMZH"]{content:"dWKYKL,"}/*!sc*/
.bIEFFi{color:#666;}/*!sc*/
data-styled.g60[id="sc-gQkENW"]{content:"bIEFFi,"}/*!sc*/
.dnQByT{color:#666;word-break:break-word;}/*!sc*/
data-styled.g61[id="sc-gcfzXs"]{content:"dnQByT,"}/*!sc*/
.feFoaC{color:#d41f1c;font-size:0.9em;font-weight:normal;margin-left:20px;line-height:1;}/*!sc*/
data-styled.g62[id="sc-hGZxvd"]{content:"feFoaC,"}/*!sc*/
.hCJxj{color:#0e7c86;}/*!sc*/
.hCJxj::before,.hCJxj::after{font-weight:bold;}/*!sc*/
data-styled.g65[id="sc-bnGbuY"]{content:"hCJxj,"}/*!sc*/
.YZnqP{border-radius:2px;word-break:break-word;background-color:rgba(51,51,51,0.05);color:rgba(51,51,51,0.9);padding:0 5px;border:1px solid rgba(51,51,51,0.1);font-family:Courier,monospace;}/*!sc*/
+{margin-left:0;}/*!sc*/
data-styled.g66[id="sc-cSzYSJ"]{content:"YZnqP,"}/*!sc*/
.dwTuQQ{background-color:transparent;border:0;color:#666;margin-left:5px;border-radius:2px;cursor:pointer;outline-color:#666;font-size:12px;}/*!sc*/
data-styled.g69[id="sc-hylbpc"]{content:"dwTuQQ,"}/*!sc*/
.dIXVzO:after{content:' and ';font-weight:normal;}/*!sc*/
.dIXVzO:last-child:after{content:none;}/*!sc*/
.dIXVzO a{text-decoration:auto;color:#32329f;}/*!sc*/
.dIXVzO a:visited{color:#32329f;}/*!sc*/
.dIXVzO a:hover{color:#6868cf;text-decoration:auto;}/*!sc*/
data-styled.g80[id="sc-bqvdXA"]{content:"dIXVzO,"}/*!sc*/
.eqXCjK{white-space:nowrap;}/*!sc*/
.eqXCjK:after{content:' or ';white-space:pre;}/*!sc*/
.eqXCjK:last-child:after,.eqXCjK:only-child:after{content:none;}/*!sc*/
.eqXCjK a{text-decoration:auto;color:#32329f;}/*!sc*/
.eqXCjK a:visited{color:#32329f;}/*!sc*/
.eqXCjK a:hover{color:#6868cf;text-decoration:auto;}/*!sc*/
data-styled.g81[id="sc-irPVuy"]{content:"eqXCjK,"}/*!sc*/
.jXOga-d{flex:1 1 auto;cursor:pointer;}/*!sc*/
data-styled.g82[id="sc-jWJSSj"]{content:"jXOga-d,"}/*!sc*/
.gQOXJB{width:75%;text-overflow:ellipsis;border-radius:4px;overflow:hidden;}/*!sc*/
@media screen and (max-width: 50rem){.gQOXJB{margin-top:10px;}}/*!sc*/
data-styled.g83[id="sc-iCjFWQ"]{content:"gQOXJB,"}/*!sc*/
.ffSXYc{display:inline-block;margin:0;}/*!sc*/
data-styled.g84[id="sc-khdDuB"]{content:"ffSXYc,"}/*!sc*/
.dyzdIR{width:100%;display:flex;margin:1em 0;flex-direction:row;}/*!sc*/
@media screen and (max-width: 50rem){.dyzdIR{flex-direction:column;}}/*!sc*/
data-styled.g85[id="sc-hGNhLO"]{content:"dyzdIR,"}/*!sc*/
.dZsYqS{margin-top:0;margin-bottom:0.5em;}/*!sc*/
data-styled.g91[id="sc-geoRQH"]{content:"dZsYqS,"}/*!sc*/
.enkzRg{border:1px solid #32329f;color:#32329f;font-weight:normal;margin-left:0.5em;padding:4px 8px 4px;display:inline-block;text-decoration:none;cursor:pointer;}/*!sc*/
data-styled.g92[id="sc-kEsJEW"]{content:"enkzRg,"}/*!sc*/
.gYaAxf{width:9ex;display:inline-block;height:13px;line-height:13px;background-color:#333;border-radius:3px;background-repeat:no-repeat;background-position:6px 4px;font-size:7px;font-family:Verdana,sans-serif;color:white;text-transform:uppercase;text-align:center;font-weight:bold;vertical-align:middle;margin-right:6px;margin-top:2px;}/*!sc*/
.gYaAxf.get{background-color:#2F8132;}/*!sc*/
.gYaAxf.post{background-color:#186FAF;}/*!sc*/
.gYaAxf.put{background-color:#95507c;}/*!sc*/
.gYaAxf.options{background-color:#947014;}/*!sc*/
.gYaAxf.patch{background-color:#bf581d;}/*!sc*/
.gYaAxf.delete{background-color:#cc3333;}/*!sc*/
.gYaAxf.basic{background-color:#707070;}/*!sc*/
.gYaAxf.link{background-color:#07818F;}/*!sc*/
.gYaAxf.head{background-color:#A23DAD;}/*!sc*/
.gYaAxf.hook{background-color:#32329f;}/*!sc*/
.gYaAxf.schema{background-color:#707070;}/*!sc*/
data-styled.g99[id="sc-erSfwj"]{content:"gYaAxf,"}/*!sc*/
.dXwhdL{margin:0;padding:0;}/*!sc*/
.dXwhdL:first-child{padding-bottom:32px;}/*!sc*/
.sc-iRVXky .sc-iRVXky{font-size:0.929em;}/*!sc*/
.kUyAbS{margin:0;padding:0;display:none;}/*!sc*/
.kUyAbS:first-child{padding-bottom:32px;}/*!sc*/
.sc-iRVXky .sc-iRVXky{font-size:0.929em;}/*!sc*/
data-styled.g100[id="sc-iRVXky"]{content:"dXwhdL,kUyAbS,"}/*!sc*/
.ghRwPP{list-style:none inside none;overflow:hidden;text-overflow:ellipsis;padding:0;margin-top:15px;}/*!sc*/
.gSwPLF{list-style:none inside none;overflow:hidden;text-overflow:ellipsis;padding:0;}/*!sc*/
data-styled.g101[id="sc-ljhlHD"]{content:"ghRwPP,gSwPLF,"}/*!sc*/
.iwwGcN{cursor:pointer;color:#394A58;margin:0;padding:12.5px 20px;display:flex;justify-content:space-between;font-family:Myriad Pro,Helvetica,Arial,sans-serif;opacity:0.7;text-transform:uppercase;font-size:0.8em;padding-bottom:0;cursor:default;background-color:#F7F7F7;}/*!sc*/
.iwwGcN .sc-cHqXqK{height:1.5em;width:1.5em;}/*!sc*/
.iwwGcN .sc-cHqXqK polygon{fill:#394A58;}/*!sc*/
.fagwAl{cursor:pointer;color:#394A58;margin:0;padding:12.5px 20px;display:flex;justify-content:space-between;font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-size:0.929em;text-transform:none;background-color:#F7F7F7;}/*!sc*/
.fagwAl:hover{color:#394A58;background-color:#dedede;}/*!sc*/
.fagwAl .sc-cHqXqK{height:1.5em;width:1.5em;}/*!sc*/
.fagwAl .sc-cHqXqK polygon{fill:#394A58;}/*!sc*/
.gvwqsT{cursor:pointer;color:#394A58;margin:0;padding:12.5px 20px;display:flex;justify-content:space-between;font-family:Myriad Pro,Helvetica,Arial,sans-serif;background-color:#F7F7F7;}/*!sc*/
.gvwqsT:hover{color:#394A58;background-color:#eaeaea;}/*!sc*/
.gvwqsT .sc-cHqXqK{height:1.5em;width:1.5em;}/*!sc*/
.gvwqsT .sc-cHqXqK polygon{fill:#394A58;}/*!sc*/
data-styled.g102[id="sc-bAEjGW"]{content:"iwwGcN,fagwAl,gvwqsT,"}/*!sc*/
.bBONey{display:inline-block;vertical-align:middle;width:calc(100% - 38px);overflow:hidden;text-overflow:ellipsis;}/*!sc*/
data-styled.g103[id="sc-enMaOJ"]{content:"bBONey,"}/*!sc*/
.jrNJOI{font-size:0.8em;margin-top:10px;text-align:center;position:fixed;width:260px;bottom:0;background:#F7F7F7;}/*!sc*/
.jrNJOI a,.jrNJOI a:visited,.jrNJOI a:hover{color:#394A58!important;padding:5px 0;border-top:1px solid #dedede;text-decoration:none;display:flex;align-items:center;justify-content:center;}/*!sc*/
.jrNJOI img{width:15px;margin-right:5px;}/*!sc*/
@media screen and (max-width: 50rem){.jrNJOI{width:100%;}}/*!sc*/
data-styled.g104[id="sc-fUEImY"]{content:"jrNJOI,"}/*!sc*/
.dWZoid{cursor:pointer;position:relative;margin-bottom:5px;}/*!sc*/
data-styled.g110[id="sc-duWCru"]{content:"dWZoid,"}/*!sc*/
.iqHzp{font-family:Courier,monospace;margin-left:10px;flex:1;overflow-x:hidden;text-overflow:ellipsis;}/*!sc*/
data-styled.g111[id="sc-etPtWW"]{content:"iqHzp,"}/*!sc*/
.ebcgbH{outline:0;color:inherit;width:100%;text-align:left;cursor:pointer;padding:10px 30px 10px 20px;border-radius:4px 4px 0 0;background-color:#11171a;display:flex;white-space:nowrap;align-items:center;border:1px solid transparent;border-bottom:0;transition:border-color 0.25s ease;}/*!sc*/
.ebcgbH ..sc-etPtWW{color:#ffffff;}/*!sc*/
.ebcgbH:focus{box-shadow:inset 0 2px 2px rgba(0, 0, 0, 0.45),0 2px 0 rgba(128, 128, 128, 0.25);}/*!sc*/
data-styled.g112[id="sc-iPHsxv"]{content:"ebcgbH,"}/*!sc*/
.ezUCub{font-size:0.929em;line-height:20px;background-color:#186FAF;color:#ffffff;padding:3px 10px;text-transform:uppercase;font-family:Myriad Pro,Helvetica,Arial,sans-serif;margin:0;}/*!sc*/
data-styled.g113[id="sc-txhaY"]{content:"ezUCub,"}/*!sc*/
.ddApzj{position:absolute;width:100%;z-index:100;background:#fafafa;color:#263238;box-sizing:border-box;box-shadow:0 0 6px rgba(0, 0, 0, 0.33);overflow:hidden;border-bottom-left-radius:4px;border-bottom-right-radius:4px;transition:all 0.25s ease;visibility:hidden;transform:translateY(-50%) scaleY(0);}/*!sc*/
data-styled.g114[id="sc-ePpfBx"]{content:"ddApzj,"}/*!sc*/
.evaCJX{padding:10px;}/*!sc*/
data-styled.g115[id="sc-dwGkES"]{content:"evaCJX,"}/*!sc*/
.gufODt{padding:5px;border:1px solid #ccc;background:#fff;word-break:break-all;color:#32329f;}/*!sc*/
.gufODt >span{color:#333333;}/*!sc*/
data-styled.g116[id="sc-hSyjfr"]{content:"gufODt,"}/*!sc*/
.fRACBr{text-transform:lowercase;margin-left:0;line-height:1.5em;}/*!sc*/
data-styled.g117[id="sc-kLJHhQ"]{content:"fRACBr,"}/*!sc*/
.cnBopK{display:block;border:0;width:100%;text-align:left;padding:10px;border-radius:2px;margin-bottom:4px;line-height:1.5em;cursor:pointer;color:#1d8127;background-color:rgba(29,129,39,0.07);}/*!sc*/
.cnBopK:focus{outline:auto #1d8127;}/*!sc*/
.ktPKSm{display:block;border:0;width:100%;text-align:left;padding:10px;border-radius:2px;margin-bottom:4px;line-height:1.5em;cursor:pointer;color:#d41f1c;background-color:rgba(212,31,28,0.07);cursor:default;}/*!sc*/
.ktPKSm:focus{outline:auto #d41f1c;}/*!sc*/
.ktPKSm::before{content:"—";font-weight:bold;width:1.5em;text-align:center;display:inline-block;vertical-align:top;}/*!sc*/
.ktPKSm:focus{outline:0;}/*!sc*/
.fhwTMk{display:block;border:0;width:100%;text-align:left;padding:10px;border-radius:2px;margin-bottom:4px;line-height:1.5em;cursor:pointer;color:#d41f1c;background-color:rgba(212,31,28,0.07);}/*!sc*/
.fhwTMk:focus{outline:auto #d41f1c;}/*!sc*/
data-styled.g119[id="sc-gohMHu"]{content:"cnBopK,ktPKSm,fhwTMk,"}/*!sc*/
.beMorW{vertical-align:top;}/*!sc*/
data-styled.g122[id="sc-bKXUjo"]{content:"beMorW,"}/*!sc*/
.dheqgt{font-size:1.3em;padding:0.2em 0;margin:3em 0 1.1em;color:#333333;font-weight:normal;}/*!sc*/
data-styled.g123[id="sc-edsqmr"]{content:"dheqgt,"}/*!sc*/
.exRUVh{margin-bottom:30px;}/*!sc*/
data-styled.g128[id="sc-fantwC"]{content:"exRUVh,"}/*!sc*/
.isQMci{user-select:none;width:20px;height:20px;align-self:center;display:flex;flex-direction:column;color:#32329f;}/*!sc*/
data-styled.g129[id="sc-bLmarx"]{content:"isQMci,"}/*!sc*/
.dOSQxE{width:260px;background-color:#F7F7F7;overflow:hidden;display:flex;flex-direction:column;backface-visibility:hidden;height:100vh;position:sticky;position:-webkit-sticky;top:0;}/*!sc*/
@media screen and (max-width: 50rem){.dOSQxE{position:fixed;z-index:20;width:100%;background:#F7F7F7;display:none;}}/*!sc*/
@media print{.dOSQxE{display:none;}}/*!sc*/
data-styled.g130[id="sc-dFqmTM"]{content:"dOSQxE,"}/*!sc*/
.cZPhLc{outline:none;user-select:none;background-color:#f2f2f2;color:#32329f;display:none;cursor:pointer;position:fixed;right:20px;z-index:100;border-radius:50%;box-shadow:0 0 20px rgba(0, 0, 0, 0.3);bottom:44px;width:60px;height:60px;padding:0 20px;}/*!sc*/
@media screen and (max-width: 50rem){.cZPhLc{display:flex;}}/*!sc*/
.cZPhLc svg{color:#0065FB;}/*!sc*/
@media print{.cZPhLc{display:none;}}/*!sc*/
data-styled.g131[id="sc-eqXzvo"]{content:"cZPhLc,"}/*!sc*/
.kBOkiW{font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.5em;color:#333333;display:flex;position:relative;text-align:left;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;text-rendering:optimizeSpeed!important;tap-highlight-color:rgba(0, 0, 0, 0);text-size-adjust:100%;}/*!sc*/
.kBOkiW *{box-sizing:border-box;-webkit-tap-highlight-color:rgba(255, 255, 255, 0);}/*!sc*/
data-styled.g132[id="sc-iMPxVN"]{content:"kBOkiW,"}/*!sc*/
.knmTbM{z-index:1;position:relative;overflow:hidden;width:calc(100% - 260px);contain:layout;}/*!sc*/
@media print,screen and (max-width: 50rem){.knmTbM{width:100%;}}/*!sc*/
data-styled.g133[id="sc-jdwyG"]{content:"knmTbM,"}/*!sc*/
.ifLiBE{background:#263238;position:absolute;top:0;bottom:0;right:0;width:calc((100% - 260px) * 0.4);}/*!sc*/
@media print,screen and (max-width: 75rem){.ifLiBE{display:none;}}/*!sc*/
data-styled.g134[id="sc-eEVuZf"]{content:"ifLiBE,"}/*!sc*/
.cqdCbT{padding:5px 0;}/*!sc*/
data-styled.g135[id="sc-dtOqdk"]{content:"cqdCbT,"}/*!sc*/
.eeluBl{width:calc(100% - 40px);box-sizing:border-box;margin:0 20px;padding:5px 10px 5px 20px;border:0;border-bottom:1px solid #dedede;font-family:Myriad Pro,Helvetica,Arial,sans-serif;font-weight:bold;font-size:13px;color:#394A58;background-color:transparent;outline:none;}/*!sc*/
data-styled.g136[id="sc-hPGoDJ"]{content:"eeluBl,"}/*!sc*/
.gVJiKg{position:absolute;left:20px;height:1.8em;width:0.9em;}/*!sc*/
.gVJiKg path{fill:#394A58;}/*!sc*/
data-styled.g137[id="sc-kBpWFy"]{content:"gVJiKg,"}/*!sc*/
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
          
      <div id="redoc"><div class="sc-iMPxVN kBOkiW redoc-wrap"><div class="sc-dFqmTM dOSQxE menu-content" style="top:0px;height:calc(100vh - 0px)"><div role="search" class="sc-dtOqdk cqdCbT"><svg class="sc-kBpWFy gVJiKg search-icon" version="1.1" viewBox="0 0 1000 1000" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px"><path d="M968.2,849.4L667.3,549c83.9-136.5,66.7-317.4-51.7-435.6C477.1-25,252.5-25,113.9,113.4c-138.5,138.3-138.5,362.6,0,501C219.2,730.1,413.2,743,547.6,666.5l301.9,301.4c43.6,43.6,76.9,14.9,104.2-12.4C981,928.3,1011.8,893,968.2,849.4z M524.5,522c-88.9,88.7-233,88.7-321.8,0c-88.9-88.7-88.9-232.6,0-321.3c88.9-88.7,233-88.7,321.8,0C613.4,289.4,613.4,433.3,524.5,522z"></path></svg><input placeholder="Search..." aria-label="Search" type="text" class="sc-hPGoDJ eeluBl search-input" value=""/></div><div class="sc-dEkLRj cpBPUN scrollbar-container undefined"><ul role="menu" class="sc-iRVXky dXwhdL"><li tabindex="0" depth="0" data-item-id="group/Paths" role="menuitem" class="sc-ljhlHD ghRwPP"><label class="sc-bAEjGW iwwGcN -depth0"><span width="calc(100% - 38px)" title="Paths" class="sc-enMaOJ bBONey">Paths</span></label><ul class="sc-iRVXky dXwhdL"><li tabindex="0" depth="1" data-item-id="tag/Authorisation" role="menuitem" class="sc-ljhlHD gSwPLF"><label class="sc-bAEjGW fagwAl -depth1"><span width="calc(100% - 38px)" title="Authorisation" class="sc-enMaOJ bBONey">Authorisation</span><svg class="sc-cHqXqK gkUOTk" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></label><ul class="sc-iRVXky kUyAbS"><li tabindex="0" depth="2" data-item-id="tag/Authorisation/operation/auth" role="menuitem" class="sc-ljhlHD gSwPLF"><label class="sc-bAEjGW gvwqsT -depth2"><span type="post" class="sc-erSfwj gYaAxf operation-type post">post</span><span tabindex="0" width="calc(100% - 38px)" class="sc-enMaOJ bBONey">Obtain authorisation token</span></label></li></ul></li><li tabindex="0" depth="1" data-item-id="tag/Graphql-Posts" role="menuitem" class="sc-ljhlHD gSwPLF"><label class="sc-bAEjGW fagwAl -depth1"><span width="calc(100% - 38px)" title="Graphql Posts" class="sc-enMaOJ bBONey">Graphql Posts</span><svg class="sc-cHqXqK gkUOTk" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></label><ul class="sc-iRVXky kUyAbS"><li tabindex="0" depth="2" data-item-id="tag/Graphql-Posts/paths/~1graphql/post" role="menuitem" class="sc-ljhlHD gSwPLF"><label class="sc-bAEjGW gvwqsT -depth2"><span type="post" class="sc-erSfwj gYaAxf operation-type post">post</span><span tabindex="0" width="calc(100% - 38px)" class="sc-enMaOJ bBONey">Post a graphql query or mutation</span></label></li></ul></li></ul></li><li tabindex="0" depth="0" data-item-id="group/Models" role="menuitem" class="sc-ljhlHD ghRwPP"><label class="sc-bAEjGW iwwGcN -depth0"><span width="calc(100% - 38px)" title="Models" class="sc-enMaOJ bBONey">Models</span></label></li></ul><div class="sc-fUEImY jrNJOI"><a target="_blank" rel="noopener noreferrer" href="https://redocly.com/redoc/">API docs by Redocly</a></div></div></div><div class="sc-eqXzvo cZPhLc"><div class="sc-bLmarx isQMci"><svg class="" style="transform:translate(2px, -4px) rotate(180deg);transition:transform 0.2s ease" viewBox="0 0 926.23699 573.74994" version="1.1" x="0px" y="0px" width="15" height="15"><g transform="translate(904.92214,-879.1482)"><path d="
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
        " fill="currentColor"></path></g></svg></div></div><div class="sc-jdwyG knmTbM api-content"><div class="sc-dntaoT bvhSud"><div class="sc-kLhKbu dECWTf"><div class="sc-fAUdSK dFrZq api-info"><h1 class="sc-ixGGxD sc-geoRQH hrgkRP dZsYqS">Authentication &amp; Payload<!-- --> <span>(<!-- -->2.4.0<!-- -->)</span></h1><p>Download OpenAPI specification<!-- -->:<a download="openapi.yaml" target="_blank" class="sc-kEsJEW enkzRg">Download</a></p><div class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ"></div><div data-role="redoc-summary" html="" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ"></div><div data-role="redoc-description" html="&lt;p&gt;To interact with the ANZ Cash Management Central (ACMC) API, all requests must be authenticated using OAuth 2.0, specifically through the Client Credential Grant process. The API endpoint for obtaining the authentication token is essential for ensuring secure access. Once authenticated, all GraphQL API calls should be directed to the &lt;code&gt;/graphql&lt;/code&gt; endpoint. This document provides detailed information on the authentication process and the usage of the &lt;code&gt;/graphql&lt;/code&gt; path for executing API requests.&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ"><p>To interact with the ANZ Cash Management Central (ACMC) API, all requests must be authenticated using OAuth 2.0, specifically through the Client Credential Grant process. The API endpoint for obtaining the authentication token is essential for ensuring secure access. Once authenticated, all GraphQL API calls should be directed to the <code>/graphql</code> endpoint. This document provides detailed information on the authentication process and the usage of the <code>/graphql</code> path for executing API requests.</p>
</div></div></div></div><div id="tag/Authorisation" data-section-id="tag/Authorisation" class="sc-dntaoT bvhSud"><div class="sc-kLhKbu dECWTf"><div class="sc-fAUdSK dFrZq"><h2 class="sc-khLCKb gQygHf"><a class="sc-jwIPbr hbTOAm" href="#tag/Authorisation" aria-label="tag/Authorisation"></a>Authorisation</h2></div></div><div class="sc-fAUdSK dYLNKi"><div class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ redoc-markdown " html="&lt;p&gt;Operations related to authentication &amp;amp; authorisation.&lt;/p&gt;
"><p>Operations related to authentication &amp; authorisation.</p>
</div></div></div><div id="tag/Authorisation/operation/auth" data-section-id="tag/Authorisation/operation/auth" class="sc-dntaoT aYCdu"><div data-section-id="operation/auth" id="operation/auth" class="sc-kLhKbu dECWTf"><div class="sc-fAUdSK dFrZq"><h2 class="sc-khLCKb gQygHf"><a class="sc-jwIPbr hbTOAm" href="#tag/Authorisation/operation/auth" aria-label="tag/Authorisation/operation/auth"></a>Obtain authorisation token<!-- --> </h2><div class="sc-fantwC exRUVh"><div html="&lt;p&gt;ANZ use OAuth 2.0 to authenticate inbound token requests, a bearer token is returned as a response which is then used to authorise against ANZ resources&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ"><p>ANZ use OAuth 2.0 to authenticate inbound token requests, a bearer token is returned as a response which is then used to authorise against ANZ resources</p>
</div></div><div class="sc-hGNhLO dyzdIR"><div class="sc-jWJSSj jXOga-d"><h5 class="sc-dpBQxM sc-khdDuB eJAAZj ffSXYc">Authorizations:</h5><svg class="sc-cHqXqK bEpxpV" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></div><div class="sc-iCjFWQ gQOXJB"><span class="sc-irPVuy eqXCjK">(<span class="sc-bqvdXA dIXVzO"><i>apiKeyAuth</i></span><span class="sc-bqvdXA dIXVzO"><i>OAuth2</i></span>) </span></div></div><h5 class="sc-dpBQxM eJAAZj">Request Body schema: <span class="sc-dhCplO khtVmz">application/x-www-form-urlencoded</span><div class="sc-CNKsk sc-hGZxvd sc-kLJHhQ hPAOR feFoaC fRACBr">required</div></h5><div html="&lt;p&gt;Information and examples of Auth request body&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ"><p>Information and examples of Auth request body</p>
</div><table class="sc-dprtRQ hNmabw"><tbody><tr class=""><td kind="field" title="grant_type" class="sc-ovuCP sc-eauhAA iyKqKI iQpMVv"><span class="sc-gQaihK kPDxnK"></span><span class="property-name">grant_type</span><div class="sc-CNKsk sc-hGZxvd hPAOR feFoaC">required</div></td><td class="sc-fFoeYl cHXoZJ"><div><div><span class="sc-CNKsk sc-cqgMZH hPAOR dWKYKL"></span><span class="sc-CNKsk sc-gQkENW hPAOR bIEFFi">string</span></div> <div><div html="&lt;p&gt;Specify the type credential requested&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI hETJpC"><p>Specify the type credential requested</p>
</div></div></div></td></tr><tr class=""><td kind="field" title="client_assertion_type" class="sc-ovuCP sc-eauhAA iyKqKI iQpMVv"><span class="sc-gQaihK kPDxnK"></span><span class="property-name">client_assertion_type</span><div class="sc-CNKsk sc-hGZxvd hPAOR feFoaC">required</div></td><td class="sc-fFoeYl cHXoZJ"><div><div><span class="sc-CNKsk sc-cqgMZH hPAOR dWKYKL"></span><span class="sc-CNKsk sc-gQkENW hPAOR bIEFFi">string</span></div> <div><div html="&lt;p&gt;Describes the type of client assertion provided in the message request&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI hETJpC"><p>Describes the type of client assertion provided in the message request</p>
</div></div></div></td></tr><tr class=""><td kind="field" title="scope" class="sc-ovuCP sc-eauhAA iyKqKI iQpMVv"><span class="sc-gQaihK kPDxnK"></span><span class="property-name">scope</span><div class="sc-CNKsk sc-hGZxvd hPAOR feFoaC">required</div></td><td class="sc-fFoeYl cHXoZJ"><div><div><span class="sc-CNKsk sc-cqgMZH hPAOR dWKYKL"></span><span class="sc-CNKsk sc-gQkENW hPAOR bIEFFi">string</span></div> <div><div html="&lt;p&gt;Specifies the scopes for the customer claim&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI hETJpC"><p>Specifies the scopes for the customer claim</p>
</div></div></div></td></tr><tr class="last "><td kind="field" title="client_assertion" class="sc-ovuCP sc-eauhAA sc-hsfCcR iyKqKI iQpMVv buGHPE"><span class="sc-gQaihK kPDxnK"></span><button aria-label="expand client_assertion"><span class="property-name">client_assertion</span><svg class="sc-cHqXqK ccTkAM" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></button><div class="sc-CNKsk sc-hGZxvd hPAOR feFoaC">required</div></td><td class="sc-fFoeYl cHXoZJ"><div><div><span class="sc-CNKsk sc-cqgMZH hPAOR dWKYKL"></span><span class="sc-CNKsk sc-gQkENW hPAOR bIEFFi">object</span><span class="sc-CNKsk sc-gcfzXs hPAOR dnQByT"> (<!-- -->ClientAssertion<!-- -->) </span></div> <div><div html="" class="sc-epnzzT sc-eMwmJz drsioI hETJpC"></div></div></div></td></tr></tbody></table><div><h3 class="sc-edsqmr dheqgt">Responses</h3><div><button class="sc-gohMHu cnBopK"><svg class="sc-cHqXqK hmCwJW" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg><strong class="sc-bKXUjo beMorW">200<!-- --> </strong><div html="&lt;p&gt;Bearer token (Opaque Token) returned after a token request&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Bearer token (Opaque Token) returned after a token request</p>
</div></button></div><div><button class="sc-gohMHu ktPKSm" disabled=""><strong class="sc-bKXUjo beMorW">400<!-- --> </strong><div html="&lt;p&gt;Bad Request, message format does not match expected schema&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Bad Request, message format does not match expected schema</p>
</div></button></div><div><button class="sc-gohMHu ktPKSm" disabled=""><strong class="sc-bKXUjo beMorW">401<!-- --> </strong><div html="&lt;p&gt;Unauthorised&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Unauthorised</p>
</div></button></div><div><button class="sc-gohMHu ktPKSm" disabled=""><strong class="sc-bKXUjo beMorW">429<!-- --> </strong><div html="&lt;p&gt;Too Many Requests&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Too Many Requests</p>
</div></button></div><div><button class="sc-gohMHu ktPKSm" disabled=""><strong class="sc-bKXUjo beMorW">500<!-- --> </strong><div html="&lt;p&gt;Internal Server Error, contact support&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Internal Server Error, contact support</p>
</div></button></div><div><button class="sc-gohMHu ktPKSm" disabled=""><strong class="sc-bKXUjo beMorW">502<!-- --> </strong><div html="&lt;p&gt;Bad Gateway&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Bad Gateway</p>
</div></button></div><div><button class="sc-gohMHu ktPKSm" disabled=""><strong class="sc-bKXUjo beMorW">503<!-- --> </strong><div html="&lt;p&gt;Service Unavailable&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Service Unavailable</p>
</div></button></div><div><button class="sc-gohMHu ktPKSm" disabled=""><strong class="sc-bKXUjo beMorW">504<!-- --> </strong><div html="&lt;p&gt;Gateway Timeout&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Gateway Timeout</p>
</div></button></div><div><button class="sc-gohMHu fhwTMk"><svg class="sc-cHqXqK kVOWjS" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg><strong class="sc-bKXUjo beMorW">default<!-- --> </strong><div html="&lt;p&gt;Unexpected Error&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Unexpected Error</p>
</div></button></div></div></div><div class="sc-ivxoEo sc-ghWlax gOjFGl oECKJ"><div class="sc-duWCru dWZoid"><button class="sc-iPHsxv ebcgbH"><span type="post" class="sc-txhaY ezUCub http-verb post">post</span><span class="sc-etPtWW iqHzp">/v1.0/auth</span><svg class="sc-cHqXqK fmmJjS" style="margin-right:-25px" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></button><div aria-hidden="true" class="sc-ePpfBx ddApzj"><div class="sc-dwGkES evaCJX"><div html="&lt;p&gt;UAT (non-production) environment&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI hETJpC"><p>UAT (non-production) environment</p>
</div><div tabindex="0" role="button"><div class="sc-hSyjfr gufODt"><span>https://api.acmc.uat.anzgcis.com</span>/v1.0/auth</div></div></div><div class="sc-dwGkES evaCJX"><div html="&lt;p&gt;Production Environment&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI hETJpC"><p>Production Environment</p>
</div><div tabindex="0" role="button"><div class="sc-hSyjfr gufODt"><span>https://api.acmc.anzgcis.com</span>/v1.0/auth</div></div></div></div></div><div><h3 class="sc-keTIit zvQzH"> <!-- -->Response samples<!-- --> </h3><div class="sc-bMTdWJ fbQvpV" data-rttabs="true"><ul class="react-tabs__tab-list" role="tablist"><li class="tab-success react-tabs__tab--selected" role="tab" id="tab:R2eecq:0" aria-selected="true" aria-disabled="false" aria-controls="panel:R2eecq:0" tabindex="0" data-rttab="true">200</li><li class="tab-error" role="tab" id="tab:R2eecq:1" aria-selected="false" aria-disabled="false" aria-controls="panel:R2eecq:1" data-rttab="true">default</li></ul><div class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="panel:R2eecq:0" aria-labelledby="tab:R2eecq:0"><div><div class="sc-Rjrgp dIDLbO"><span class="sc-fufdwm idVphA">Content type</span><div class="sc-UblHX eglery">application/json</div></div><div class="sc-FFETS kqHNPM"><div class="sc-eDHQDy mMhCU"><div class="sc-uYFMi jwEzVq"><button><div class="sc-eWPXlR ezdXRP">Copy</div></button></div><div class="sc-epnzzT drsioI sc-giBObj iyEpFV"><div class="redoc-json"><code><button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable "><span class="property token string">"expires_in"</span>: <span class="token number">3600</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"token_type"</span>: <span class="token string">&quot;Bearer&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable "><span class="property token string">"access_token"</span>: <span class="token string">&quot;eaaa13ee-b596-a8cc-b9d4-f778f8bb9377&quot;</span></div></li></ul><span class="token punctuation">}</span></code></div></div></div></div></div></div><div class="react-tabs__tab-panel" role="tabpanel" id="panel:R2eecq:1" aria-labelledby="tab:R2eecq:1"></div></div></div></div></div></div><div id="tag/Graphql-Posts" data-section-id="tag/Graphql-Posts" class="sc-dntaoT bvhSud"><div class="sc-kLhKbu dECWTf"><div class="sc-fAUdSK dFrZq"><h2 class="sc-khLCKb gQygHf"><a class="sc-jwIPbr hbTOAm" href="#tag/Graphql-Posts" aria-label="tag/Graphql-Posts"></a>Graphql Posts</h2></div></div></div><div id="tag/Graphql-Posts/paths/~1graphql/post" data-section-id="tag/Graphql-Posts/paths/~1graphql/post" class="sc-dntaoT aYCdu"><div class="sc-kLhKbu dECWTf"><div class="sc-fAUdSK dFrZq"><h2 class="sc-khLCKb gQygHf"><a class="sc-jwIPbr hbTOAm" href="#tag/Graphql-Posts/paths/~1graphql/post" aria-label="tag/Graphql-Posts/paths/~1graphql/post"></a>Post a graphql query or mutation<!-- --> </h2><div class="sc-fantwC exRUVh"><div html="&lt;p&gt;All API calls to the ANZ Cash Management Central (ACMC) platform require authentication via OAuth 2.0. Once authenticated, all requests should be made to the /graphql endpoint. This ensures secure and standardized communication with the platform. Detailed examples and instructions on how to authenticate and use the GraphQL API are provided below.&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ"><p>All API calls to the ANZ Cash Management Central (ACMC) platform require authentication via OAuth 2.0. Once authenticated, all requests should be made to the /graphql endpoint. This ensures secure and standardized communication with the platform. Detailed examples and instructions on how to authenticate and use the GraphQL API are provided below.</p>
</div></div><div class="sc-hGNhLO dyzdIR"><div class="sc-jWJSSj jXOga-d"><h5 class="sc-dpBQxM sc-khdDuB eJAAZj ffSXYc">Authorizations:</h5><svg class="sc-cHqXqK bEpxpV" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></div><div class="sc-iCjFWQ gQOXJB"><span class="sc-irPVuy eqXCjK">(<span class="sc-bqvdXA dIXVzO"><i>apiKeyAuth</i></span><span class="sc-bqvdXA dIXVzO"><i>bearerAuth</i></span>) </span></div></div><div><h5 class="sc-dpBQxM eJAAZj">header<!-- --> Parameters</h5><table class="sc-dprtRQ hNmabw"><tbody><tr class=""><td kind="field" title="X-Correlation-Id" class="sc-ovuCP sc-eauhAA iyKqKI iQpMVv"><span class="sc-gQaihK kPDxnK"></span><span class="property-name">X-Correlation-Id</span></td><td class="sc-fFoeYl cHXoZJ"><div><div><span class="sc-CNKsk sc-cqgMZH hPAOR dWKYKL"></span><span class="sc-CNKsk sc-gQkENW hPAOR bIEFFi">string</span><span class="sc-CNKsk sc-gcfzXs hPAOR dnQByT"> (<!-- -->UUID<!-- -->) </span><span class="sc-CNKsk sc-bnGbuY hPAOR hCJxj">[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{...</span><button class="sc-hylbpc dwTuQQ">Show pattern</button></div> <div><span class="sc-CNKsk hPAOR"> <!-- -->Example:<!-- --> </span> <span class="sc-CNKsk sc-cSzYSJ hPAOR YZnqP">71d6fb19-7515-40dc-b045-e17550b67600</span></div><div><div html="&lt;p&gt;Optional correlation ID provided by the data consumer that should be reflected back in the response headers. Can be used for reporting and logging.&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI hETJpC"><p>Optional correlation ID provided by the data consumer that should be reflected back in the response headers. Can be used for reporting and logging.</p>
</div></div></div></td></tr><tr class="last "><td kind="field" title="X-Message-Id" class="sc-ovuCP sc-eauhAA iyKqKI iQpMVv"><span class="sc-gQaihK kPDxnK"></span><span class="property-name">X-Message-Id</span><div class="sc-CNKsk sc-hGZxvd hPAOR feFoaC">required</div></td><td class="sc-fFoeYl cHXoZJ"><div><div><span class="sc-CNKsk sc-cqgMZH hPAOR dWKYKL"></span><span class="sc-CNKsk sc-gQkENW hPAOR bIEFFi">string</span><span class="sc-CNKsk sc-gcfzXs hPAOR dnQByT"> (<!-- -->UUID<!-- -->) </span><span class="sc-CNKsk sc-bnGbuY hPAOR hCJxj">[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{...</span><button class="sc-hylbpc dwTuQQ">Show pattern</button></div> <div><span class="sc-CNKsk hPAOR"> <!-- -->Example:<!-- --> </span> <span class="sc-CNKsk sc-cSzYSJ hPAOR YZnqP">71d6fb19-7515-40dc-b045-e17550b67600</span></div><div><div html="&lt;p&gt;Duplicate check using point to point reference, as assigned by the instructing party, and sent to the next party in the chain to unambiguously identify the message&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI hETJpC"><p>Duplicate check using point to point reference, as assigned by the instructing party, and sent to the next party in the chain to unambiguously identify the message</p>
</div></div></div></td></tr></tbody></table></div><h5 class="sc-dpBQxM eJAAZj">Request Body schema: <span class="sc-dhCplO khtVmz">application/json</span><div class="sc-CNKsk sc-hGZxvd sc-kLJHhQ hPAOR feFoaC fRACBr">required</div></h5><div html="&lt;p&gt;Secured payload &lt;br&gt; This is just an example, further examples are show in the relevant areas.&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ"><p>Secured payload <br> This is just an example, further examples are show in the relevant areas.</p>
</div><table class="sc-dprtRQ hNmabw"><tbody><tr class="last "><td kind="field" title="secured_payload" class="sc-ovuCP sc-eauhAA iyKqKI iQpMVv"><span class="sc-gQaihK kPDxnK"></span><span class="property-name">secured_payload</span><div class="sc-CNKsk sc-hGZxvd hPAOR feFoaC">required</div></td><td class="sc-fFoeYl cHXoZJ"><div><div><span class="sc-CNKsk sc-cqgMZH hPAOR dWKYKL"></span><span class="sc-CNKsk sc-gQkENW hPAOR bIEFFi">string</span></div> <div><div html="&lt;p&gt;Encrypted and secured payload&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI hETJpC"><p>Encrypted and secured payload</p>
</div></div></div></td></tr></tbody></table><div><h3 class="sc-edsqmr dheqgt">Responses</h3><div><button class="sc-gohMHu cnBopK"><svg class="sc-cHqXqK hmCwJW" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg><strong class="sc-bKXUjo beMorW">202<!-- --> </strong><div html="&lt;p&gt;Accepted the request for processing.&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Accepted the request for processing.</p>
</div></button></div><div><button class="sc-gohMHu fhwTMk"><svg class="sc-cHqXqK kVOWjS" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg><strong class="sc-bKXUjo beMorW">400<!-- --> </strong><div html="&lt;p&gt;Bad Request&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Bad Request</p>
</div></button></div><div><button class="sc-gohMHu ktPKSm" disabled=""><strong class="sc-bKXUjo beMorW">401<!-- --> </strong><div html="&lt;p&gt;Unauthorised&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Unauthorised</p>
</div></button></div><div><button class="sc-gohMHu ktPKSm" disabled=""><strong class="sc-bKXUjo beMorW">429<!-- --> </strong><div html="&lt;p&gt;Too Many Requests&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Too Many Requests</p>
</div></button></div><div><button class="sc-gohMHu fhwTMk"><svg class="sc-cHqXqK kVOWjS" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg><strong class="sc-bKXUjo beMorW">500<!-- --> </strong><div html="&lt;p&gt;Internal Server Error&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Internal Server Error</p>
</div></button></div><div><button class="sc-gohMHu ktPKSm" disabled=""><strong class="sc-bKXUjo beMorW">502<!-- --> </strong><div html="&lt;p&gt;Bad Gateway&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Bad Gateway</p>
</div></button></div><div><button class="sc-gohMHu ktPKSm" disabled=""><strong class="sc-bKXUjo beMorW">503<!-- --> </strong><div html="&lt;p&gt;Service Unavailable&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Service Unavailable</p>
</div></button></div><div><button class="sc-gohMHu ktPKSm" disabled=""><strong class="sc-bKXUjo beMorW">504<!-- --> </strong><div html="&lt;p&gt;Gateway Timeout&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Gateway Timeout</p>
</div></button></div><div><button class="sc-gohMHu fhwTMk"><svg class="sc-cHqXqK kVOWjS" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg><strong class="sc-bKXUjo beMorW">default<!-- --> </strong><div html="&lt;p&gt;Unexpected Error&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI fTYLVQ sc-drVZOg jtjIAv"><p>Unexpected Error</p>
</div></button></div></div></div><div class="sc-ivxoEo sc-ghWlax gOjFGl oECKJ"><div class="sc-duWCru dWZoid"><button class="sc-iPHsxv ebcgbH"><span type="post" class="sc-txhaY ezUCub http-verb post">post</span><span class="sc-etPtWW iqHzp">/graphql</span><svg class="sc-cHqXqK fmmJjS" style="margin-right:-25px" version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0" aria-hidden="true"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon></svg></button><div aria-hidden="true" class="sc-ePpfBx ddApzj"><div class="sc-dwGkES evaCJX"><div html="&lt;p&gt;UAT (non-production) environment&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI hETJpC"><p>UAT (non-production) environment</p>
</div><div tabindex="0" role="button"><div class="sc-hSyjfr gufODt"><span>https://api.acmc.uat.anzgcis.com</span>/graphql</div></div></div><div class="sc-dwGkES evaCJX"><div html="&lt;p&gt;Production Environment&lt;/p&gt;
" class="sc-epnzzT sc-eMwmJz drsioI hETJpC"><p>Production Environment</p>
</div><div tabindex="0" role="button"><div class="sc-hSyjfr gufODt"><span>https://api.acmc.anzgcis.com</span>/graphql</div></div></div></div></div><div><h3 class="sc-keTIit zvQzH"> <!-- -->Request samples<!-- --> </h3><div class="sc-bMTdWJ fbQvpV" data-rttabs="true"><ul class="react-tabs__tab-list" role="tablist"><li class="react-tabs__tab react-tabs__tab--selected" role="tab" id="tab:R2aekq:0" aria-selected="true" aria-disabled="false" aria-controls="panel:R2aekq:0" tabindex="0" data-rttab="true">Payload</li></ul><div class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="panel:R2aekq:0" aria-labelledby="tab:R2aekq:0"><div><div class="sc-Rjrgp dIDLbO"><span class="sc-fufdwm idVphA">Content type</span><div class="sc-UblHX eglery">application/json</div></div><div class="sc-FFETS kqHNPM"><div class="sc-eDHQDy mMhCU"><div class="sc-uYFMi jwEzVq"><button><div class="sc-eWPXlR ezdXRP">Copy</div></button><button> Expand all </button><button> Collapse all </button></div><div class="sc-epnzzT drsioI sc-giBObj iyEpFV"><div class="redoc-json"><code><button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable "><span class="property token string">"data"</span>: <button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable collapsed"><span class="property token string">"openAccount"</span>: <button class="collapser" aria-label="expand"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable collapsed"><span class="property token string">"commandId"</span>: <span class="token string">&quot;Q29tbWFuZDoxMmRkYTEyMi1hNzFkLTRlYWQtODZhZC05NGY3NjVjN2FlY2Q=&quot;</span></div></li></ul><span class="token punctuation">}</span></div></li></ul><span class="token punctuation">}</span></div></li></ul><span class="token punctuation">}</span></code></div></div></div></div></div></div></div></div><div><h3 class="sc-keTIit zvQzH"> <!-- -->Response samples<!-- --> </h3><div class="sc-bMTdWJ fbQvpV" data-rttabs="true"><ul class="react-tabs__tab-list" role="tablist"><li class="tab-error react-tabs__tab--selected" role="tab" id="tab:R2eekq:0" aria-selected="true" aria-disabled="false" aria-controls="panel:R2eekq:0" tabindex="0" data-rttab="true">400</li><li class="tab-error" role="tab" id="tab:R2eekq:1" aria-selected="false" aria-disabled="false" aria-controls="panel:R2eekq:1" data-rttab="true">500</li><li class="tab-error" role="tab" id="tab:R2eekq:2" aria-selected="false" aria-disabled="false" aria-controls="panel:R2eekq:2" data-rttab="true">default</li></ul><div class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="panel:R2eekq:0" aria-labelledby="tab:R2eekq:0"><div><div class="sc-Rjrgp dIDLbO"><span class="sc-fufdwm idVphA">Content type</span><div class="sc-UblHX eglery">application/json</div></div><div class="sc-FFETS kqHNPM"><div class="sc-eDHQDy mMhCU"><div class="sc-uYFMi jwEzVq"><button><div class="sc-eWPXlR ezdXRP">Copy</div></button><button> Expand all </button><button> Collapse all </button></div><div class="sc-epnzzT drsioI sc-giBObj iyEpFV"><div class="redoc-json"><code><button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable "><span class="property token string">"status"</span>: <button class="collapser" aria-label="collapse"></button><span class="token punctuation">{</span><span class="ellipsis"></span><ul class="obj collapsible"><li><div class="hoverable collapsed"><span class="property token string">"severity"</span>: <span class="token string">&quot;Fatal&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable collapsed"><span class="property token string">"code"</span>: <span class="token string">&quot;EC004_001&quot;</span><span class="token punctuation">,</span></div></li><li><div class="hoverable collapsed"><span class="property token string">"text"</span>: <span class="token string">&quot;Internal Server Error, please contact support.&quot;</span></div></li></ul><span class="token punctuation">}</span></div></li></ul><span class="token punctuation">}</span></code></div></div></div></div></div></div><div class="react-tabs__tab-panel" role="tabpanel" id="panel:R2eekq:1" aria-labelledby="tab:R2eekq:1"></div><div class="react-tabs__tab-panel" role="tabpanel" id="panel:R2eekq:2" aria-labelledby="tab:R2eekq:2"></div></div></div></div></div></div></div><div class="sc-eEVuZf ifLiBE"></div></div></div>
      <script>
      const __redoc_state = {"menu":{"activeItemIdx":-1},"spec":{"data":{"openapi":"3.0.1","info":{"title":"Authentication & Payload","description":"To interact with the ANZ Cash Management Central (ACMC) API, all requests must be authenticated using OAuth 2.0, specifically through the Client Credential Grant process. The API endpoint for obtaining the authentication token is essential for ensuring secure access. Once authenticated, all GraphQL API calls should be directed to the `/graphql` endpoint. This document provides detailed information on the authentication process and the usage of the `/graphql` path for executing API requests.","version":"2.4.0"},"servers":[{"url":"https://api.acmc.uat.anzgcis.com","description":"UAT (non-production) environment"},{"url":"https://api.acmc.anzgcis.com","description":"Production Environment"}],"security":[{"bearerAuth":[],"apiKeyAuth":[]}],"paths":{"/v1.0/auth":{"post":{"security":[{"apiKeyAuth":[],"OAuth2":[]}],"summary":"Obtain authorisation token","description":"ANZ use OAuth 2.0 to authenticate inbound token requests, a bearer token is returned as a response which is then used to authorise against ANZ resources\n","tags":["Authorisation"],"operationId":"auth","requestBody":{"description":"Information and examples of Auth request body","required":true,"content":{"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/AuthTokenRequest"}}}},"responses":{"200":{"$ref":"#/components/responses/200OKAuth"},"400":{"$ref":"#/components/responses/400Auth"},"401":{"$ref":"#/components/responses/401"},"429":{"$ref":"#/components/responses/429"},"500":{"$ref":"#/components/responses/500Auth"},"502":{"$ref":"#/components/responses/502"},"503":{"$ref":"#/components/responses/503"},"504":{"$ref":"#/components/responses/504"},"default":{"$ref":"#/components/responses/default"}}}},"/graphql":{"post":{"tags":["Graphql Posts"],"summary":"Post a graphql query or mutation","description":"All API calls to the ANZ Cash Management Central (ACMC) platform require authentication via OAuth 2.0. Once authenticated, all requests should be made to the /graphql endpoint. This ensures secure and standardized communication with the platform. Detailed examples and instructions on how to authenticate and use the GraphQL API are provided below.","security":[{"apiKeyAuth":[],"bearerAuth":["GBL.INSTO.GRAPHQL.CREATE"]}],"parameters":[{"$ref":"#/components/parameters/correlationID"},{"$ref":"#/components/parameters/messageID"}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SecuredSubmissionResource"},"examples":{"Open account":{"value":{"data":{"openAccount":{"commandId":"Q29tbWFuZDoxMmRkYTEyMi1hNzFkLTRlYWQtODZhZC05NGY3NjVjN2FlY2Q="}}}}}}},"description":"Secured payload <br> This is just an example, further examples are show in the relevant areas.","required":true},"responses":{"202":{"$ref":"#/components/responses/202"},"400":{"$ref":"#/components/responses/400"},"401":{"$ref":"#/components/responses/401"},"429":{"$ref":"#/components/responses/429"},"500":{"$ref":"#/components/responses/500"},"502":{"$ref":"#/components/responses/502"},"503":{"$ref":"#/components/responses/503"},"504":{"$ref":"#/components/responses/504"},"default":{"$ref":"#/components/responses/default"}}}}},"components":{"securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"uuid","description":"Bearer token obtained during token exchange"},"apiKeyAuth":{"type":"apiKey","in":"header","name":"apikey","description":"API key to authorize requests."},"OAuth2":{"type":"oauth2","flows":{"clientCredentials":{"tokenUrl":"https://api.acmc.uat.anzgcis.com/auth","scopes":{"GBL.INSTO.GRAPHQL.READ":"Graphql read access<br>","GBL.INSTO.GRAPHQL.CREATE":"Graphql create access <br>"}}}}},"parameters":{"correlationID":{"name":"X-Correlation-Id","in":"header","description":"Optional correlation ID provided by the data consumer that should be reflected back in the response headers. Can be used for reporting and logging.","schema":{"$ref":"#/components/schemas/UUID"}},"messageID":{"name":"X-Message-Id","in":"header","description":"Duplicate check using point to point reference, as assigned by the instructing party, and sent to the next party in the chain to unambiguously identify the message","required":true,"schema":{"$ref":"#/components/schemas/UUID"}},"requestKey":{"name":"X-RequestKey","in":"header","description":"Internal End to End key used for support and reporting purposes","schema":{"$ref":"#/components/schemas/UUID"},"example":"325ea624-ac19-47e2-94ef-a1ab4e487275"}},"responses":{"200":{"description":"Information of submitted resource found and returned","headers":{"X-Correlation-Id":{"schema":{"$ref":"#/components/schemas/UUID"}},"X-RequestKey":{"schema":{"$ref":"#/components/parameters/requestKey"}}}},"202":{"description":"Accepted the request for processing.","headers":{"X-Correlation-Id":{"schema":{"$ref":"#/components/schemas/UUID"},"description":"GUID echo'd from customer request"},"X-RequestKey":{"schema":{"$ref":"#/components/parameters/requestKey"},"description":"Request Key provided to customer for support and reporting purposes."}}},"400":{"description":"Bad Request","headers":{"X-Correlation-Id":{"schema":{"$ref":"#/components/schemas/UUID"},"description":"GUID echo'd from customer request"}},"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}},"401":{"description":"Unauthorised"},"403":{"description":"Forbidden","headers":{"X-Correlation-Id":{"schema":{"$ref":"#/components/schemas/UUID"},"description":"GUID echo'd from customer request"}},"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}},"404":{"description":"Not Found","headers":{"X-Correlation-Id":{"schema":{"$ref":"#/components/schemas/UUID"},"description":"GUID echo'd from customer request"}},"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"},"examples":{"MMS":{"value":{"status":{"severity":"FATL","statusCode":"MMS.API.9011","statusMessage":"No record found"}}}}}}},"408":{"description":"Request Timeout","headers":{"X-Correlation-Id":{"schema":{"$ref":"#/components/schemas/UUID"},"description":"GUID echo'd from customer request"}},"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}},"429":{"description":"Too Many Requests"},"500":{"description":"Internal Server Error","headers":{"X-Correlation-Id":{"schema":{"$ref":"#/components/schemas/UUID"},"description":"GUID echo'd from customer request"}},"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}},"502":{"description":"Bad Gateway"},"503":{"description":"Service Unavailable"},"504":{"description":"Gateway Timeout"},"200OKAuth":{"description":"Bearer token (Opaque Token) returned after a token request","headers":{"x-RequestKey":{"schema":{"$ref":"#/components/parameters/requestKey"}}},"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthTokenResponse"}}}},"400Auth":{"description":"Bad Request, message format does not match expected schema"},"429V2":{"description":"Too Many Requests","headers":{"X-Correlation-Id":{"schema":{"$ref":"#/components/schemas/UUID"},"description":"GUID echo'd from customer request"}},"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"},"examples":{"ANZ":{"value":null},"MMS":{"value":{"status":{"severity":"TRAN","statusCode":"MMS.API.9007","statusMessage":"No record found"}}}}}}},"500Auth":{"description":"Internal Server Error, contact support"},"default":{"description":"Unexpected Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}}},"schemas":{"AuthTokenRequest":{"required":["grant_type","client_assertion_type","scope","client_assertion"],"type":"object","properties":{"grant_type":{"description":"Specify the type credential requested","type":"string","example":"'client_credentials' or 'gcis_delegation'"},"client_assertion_type":{"description":"Describes the type of client assertion provided in the message request","type":"string","example":"urn:ietf:params:oauth:client-assertion-type:jwt-bearer"},"scope":{"description":"Specifies the scopes for the customer claim","type":"string","example":"GBL.INSTO.GRAPHQL.READ GBL.INSTO.GRAPHQL.CREATE"},"client_assertion":{"$ref":"#/components/schemas/ClientAssertion"}}},"AuthTokenResponse":{"type":"object","description":"Response to authorization request","additionalProperties":false,"properties":{"expires_in":{"description":"Indication on how long a token is valid for","type":"integer"},"token_type":{"description":"Type of token returned","type":"string"},"access_token":{"description":"Opaque token returned as part of request, GCIS does not provide the full access token","type":"string"}},"example":{"expires_in":3600,"token_type":"Bearer","access_token":"eaaa13ee-b596-a8cc-b9d4-f778f8bb9377"}},"ClientAssertion":{"required":["sub","exp","aud"],"type":"object","properties":{"sub":{"type":"string","description":"Customer Code as provided by ANZ onboarding","example":"CUSTOMERA"},"exp":{"type":"integer","description":"EPOCH date and time","example":"1619658591"},"aud":{"type":"string","description":"Specify the intended audience of the token request","example":"https://api.fileactive.uat.anzgcis.com/auth"},"act":{"$ref":"#/components/schemas/Act"}}},"Act":{"required":["sub"],"type":"object","properties":{"sub":{"description":"The customer code of the customer delgate as provided by ANZ onboarding","type":"string","example":"CUSTOMERB3PTY4CUSTOMERA"}}},"ErrorDetail":{"type":"object","required":["severity","code","text"],"properties":{"severity":{"type":"string","description":"Severity of the error","enum":["Fatal","Transient"],"example":"Fatal"},"code":{"type":"string","description":"Error code (format: ECxxx_xxx)\n","example":"EC004_001"},"text":{"type":"string","description":"Human readable description of the error","example":"Internal Server Error, please contact support."}}},"ErrorResponse":{"type":"object","properties":{"status":{"$ref":"#/components/schemas/ErrorDetail"}}},"SecuredSubmissionResource":{"type":"object","properties":{"secured_payload":{"type":"string","description":"Encrypted and secured payload","x-jws-signature":{"algorithm":"RS256"},"x-jwe-encryption":{"algorithm":"RSA-OAEP","encryption":"A256CBC-HS512"}}},"required":["secured_payload"],"example":{"secured_payload":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpbnN0cnVjdGlvbl9pZGVudGlmaWNhdGlvbiI6IlRDMTIxLzE0NzE4NzM4MjMiLCJlbmRfdG9fZW5kX2lkZW50aWZpY2F0aW9uIjoiTk9UUFJPVklERUQiLCJjcmVhdGlvbl9kYXRlX3RpbWUiOiIyMDE4LTA5LTE3VDA5OjQ1OjQ3WiIsImluaXRpYXRpbmdfcGFydHlfbmFtZSI6IkN1c3RvbWVyQSIsInJlcXVlc3RlZF9leGVjdXRpb25fZGF0ZSI6IjIwMTgtMDktMTciLCJkZWJ0b3JfbmFtZSI6IkJJTEJPIEJBR0dJTlMiLCJkZWJ0b3JfYWNjb3VudF9pZGVudGlmaWNhdGlvbiI6IjAxMzQyMTIzNDU2NyIsImRlYnRvcl9hY2NvdW50X3R5cGUiOiJCQkFOIiwiaW5zdHJ1Y3RlZF9hbW91bnQiOnsiY3VycmVuY3kiOiJBVUQiLCJhbW91bnQiOiI1NjIuODkifSwiY3JlZGl0b3JfbmFtZSI6IlNBTVdJU0UgR0FNR0VFIiwiY3JlZGl0b3JfYWNjb3VudF9pZGVudGlmaWNhdGlvbiI6IjAxMDE2OTg3NjU0MzIxIiwiY3JlZGl0b3JfYWNjb3VudF90eXBlIjoiQkJBTiIsImNyZWRpdG9yX2FnZW50X2JpYyI6Ik5PVFBST1ZJREVEIiwicmVtaXR0YW5jZV9pbmZvcm1hdGlvbl91bnN0cnVjdHVyZWQiOlsiRklSU1QgTElORSIsIlNFQ09ORCBMSU5FIl19.aR2RMEVTuOOI1YuUCf2Ppo3Bwtf2_91WMvLd3IIA0ToHBDn0II36FumIz2RrwiUNHBMZo41Qmjv_zt9TQbq61csx2lRZcQNNsstAXKZWI4oZjlBaenj3HvY2_ztxS2IPNZNlVUQrw8A51-1dm-EeVTsqwhxs-Ir6d1FCee5SaNBrhtfaDBGAwjtXolPJuyYve0J3F8X-JwKPLBUaQH5LgGlTOSasC0vsKqhfpZOc-3rS39UA7q0jHQyqcJKrhinEyWlTFU9PcOh2W4-0hXiPaLJ_PA-_EkY5kYBnBvUWofVy35ZnB_u0wv0gxvVVDYKLGUpOGblaWRUY09SHx52Njw"}},"UUID":{"type":"string","example":"71d6fb19-7515-40dc-b045-e17550b67600","pattern":"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"}}},"tags":[{"name":"Authorisation","description":"Operations related to authentication & authorisation."},{"name":"Mutation","description":"Operations related to mandates."}],"x-tagGroups":[{"name":"Paths","tags":["Authorisation","Graphql Posts"]},{"name":"Models","tags":["AuthTokenRequest"]}]}},"searchIndex":{"store":["tag/Authorisation","tag/Authorisation/operation/auth","tag/Graphql-Posts","tag/Graphql-Posts/paths/~1graphql/post"],"index":{"version":"2.3.9","fields":["title","description"],"fieldVectors":[["title/0",[0,0.14]],["description/0",[0,0.143,1,1.639,2,1.639,3,0.486,4,1.639]],["title/1",[0,0.097,5,1.113,6,0.641]],["description/1",[0,0.095,3,0.322,6,0.887,7,0.887,8,0.887,9,0.626,10,0.626,11,1.087,12,0.626,13,1.087,14,1.087,15,1.087,16,1.087,17,1.087,18,1.087]],["title/2",[19,0.388,20,0.755]],["description/2",[]],["title/3",[19,0.286,20,0.557,21,0.967,22,0.967]],["description/3",[3,0.432,7,0.442,8,0.442,9,0.442,10,0.442,12,0.442,19,0.432,23,1.191,24,0.768,25,0.768,26,0.768,27,0.768,28,0.768,29,1.191,30,0.768,31,0.768,32,0.768,33,0.768,34,0.768,35,0.768,36,0.768,37,0.768,38,0.768,39,0.768,40,0.768,41,0.768,42,0.768,43,0.768]]],"invertedIndex":[["",{"_index":4,"title":{},"description":{"0":{}}}],["2.0",{"_index":10,"title":{},"description":{"1":{},"3":{}}}],["acmc",{"_index":28,"title":{},"description":{"3":{}}}],["against",{"_index":16,"title":{},"description":{"1":{}}}],["anz",{"_index":7,"title":{},"description":{"1":{},"3":{}}}],["api",{"_index":23,"title":{},"description":{"3":{}}}],["authent",{"_index":3,"title":{},"description":{"0":{},"1":{},"3":{}}}],["authoris",{"_index":0,"title":{"0":{},"1":{}},"description":{"0":{},"1":{}}}],["bearer",{"_index":13,"title":{},"description":{"1":{}}}],["below",{"_index":43,"title":{},"description":{"3":{}}}],["call",{"_index":24,"title":{},"description":{"3":{}}}],["cash",{"_index":25,"title":{},"description":{"3":{}}}],["central",{"_index":27,"title":{},"description":{"3":{}}}],["commun",{"_index":38,"title":{},"description":{"3":{}}}],["detail",{"_index":39,"title":{},"description":{"3":{}}}],["endpoint",{"_index":34,"title":{},"description":{"3":{}}}],["ensur",{"_index":35,"title":{},"description":{"3":{}}}],["exampl",{"_index":40,"title":{},"description":{"3":{}}}],["graphql",{"_index":19,"title":{"2":{},"3":{}},"description":{"3":{}}}],["inbound",{"_index":11,"title":{},"description":{"1":{}}}],["instruct",{"_index":41,"title":{},"description":{"3":{}}}],["made",{"_index":33,"title":{},"description":{"3":{}}}],["manag",{"_index":26,"title":{},"description":{"3":{}}}],["mutat",{"_index":22,"title":{"3":{}},"description":{}}],["oauth",{"_index":9,"title":{},"description":{"1":{},"3":{}}}],["obtain",{"_index":5,"title":{"1":{}},"description":{}}],["onc",{"_index":32,"title":{},"description":{"3":{}}}],["oper",{"_index":1,"title":{},"description":{"0":{}}}],["platform",{"_index":29,"title":{},"description":{"3":{}}}],["post",{"_index":20,"title":{"2":{},"3":{}},"description":{}}],["provid",{"_index":42,"title":{},"description":{"3":{}}}],["queri",{"_index":21,"title":{"3":{}},"description":{}}],["relat",{"_index":2,"title":{},"description":{"0":{}}}],["request",{"_index":12,"title":{},"description":{"1":{},"3":{}}}],["requir",{"_index":30,"title":{},"description":{"3":{}}}],["resourc",{"_index":17,"title":{},"description":{"1":{}}}],["respons",{"_index":15,"title":{},"description":{"1":{}}}],["return",{"_index":14,"title":{},"description":{"1":{}}}],["secur",{"_index":36,"title":{},"description":{"3":{}}}],["standard",{"_index":37,"title":{},"description":{"3":{}}}],["token",{"_index":6,"title":{"1":{}},"description":{"1":{}}}],["us",{"_index":8,"title":{},"description":{"1":{},"3":{}}}],["v1.0/auth",{"_index":18,"title":{},"description":{"1":{}}}],["via",{"_index":31,"title":{},"description":{"3":{}}}]],"pipeline":[]}},"options":{"scrollYOffset":65,"downloadFileName":"openapi.yaml","theme":{"typography":{"fontFamily":"Myriad Pro, Helvetica, Arial, sans-serif","fontSize":"16px","lineHeight":"1.5em","headings":{"fontFamily":"Myriad Pro, Helvetica, Arial, sans-serif","fontWeight":"600"}},"sidebar":{"backgroundColor":"#F7F7F7","textColor":"#394A58"}}}};

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
