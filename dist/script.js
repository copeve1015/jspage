(()=>{var e={579:()=>{document.addEventListener("DOMContentLoaded",(function(){fetch("/api/read-data").then((function(e){return e.json()})).then((function(e){return tableItem=e.response.body.items.item,function updateTable(e){e&&e.length>0?(document.querySelector("#dataTable thead").innerHTML="<tr>\n      ".concat(Object.keys(e[0]).map((function(e){return"<th>".concat(e,"</th>")})).join(""),"\n    </tr>"),document.querySelector("#dataTable tbody").innerHTML=e.map((function(e){return"<tr>\n      ".concat(Object.keys(e).map((function(t){return"<th>".concat(e[t],"</th>")})).join(""),"\n    </tr>")})).join("")):function clearTable(){document.querySelector("#dataTable thead").innerHTML="",document.querySelector("#dataTable tbody").innerHTML=""}()}(tableItem)})).catch((function(e){}))}))}},t={};function __webpack_require__(r){var _=t[r];if(void 0!==_)return _.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,__webpack_require__),a.exports}__webpack_require__.n=e=>{var t=e&&e.t?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__._(t,r)&&!__webpack_require__._(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__._=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";__webpack_require__(579)})()})();