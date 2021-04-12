(()=>{"use strict";var e={223:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(476),o=r.n(t)()((function(e){return e[1]}));o.push([e.id,".container {\r\n    padding: 50px 0;\r\n}\r\n\r\nspan{\r\n    height: 100px;\r\n    width: 200px;\r\n    margin-left: 20px;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n}\r\n\r\n.plate {\r\n    height: 25px;\r\n    width: 250px;\r\n    border-bottom: 6px solid black;\r\n    border-radius: 100% 100% 100% 100%;\r\n    margin: 0 auto;\r\n    margin-top: -10px;\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n\r\n.plate_color_grey {\r\n    background-color: grey; \r\n}\r\n\r\n.plates_position_center {\r\n    margin: 0 auto;\r\n}\r\n\r\n.plates {\r\n    padding: 40px 0;\r\n}\r\n\r\n.plates_size_m {\r\n    width: 50%;\r\n}\r\n\r\n.plates_style_border {\r\n    border: 1px solid dimgray;\r\n    border-radius: 10px;\r\n}\r\n\r\n.plates__buttonMenu {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 40px 0;\r\n}\r\n\r\n.plates__buttonMenu_size_s {\r\n    width: 200px;\r\n    height: 50px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.plates__box {\r\n    position: relative;\r\n}\r\n\r\n.plates__box_size_m {\r\n    height: 300px;\r\n}\r\n\r\n.plates_color_seashell {\r\n    background-color: Seashell\r\n}\r\n\r\n.plates__style_shadow {\r\n    box-shadow: -10px 10px 10px rgba(0,0,0,0.2);\r\n}\r\n\r\n.button {\r\n    outline: 0;\r\n    color: antiquewhite;\r\n}\r\n\r\n.button_size_s {\r\n    width: 80px;\r\n    height: 40px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.button_color_green {\r\n    background-color: OliveDrab;\r\n}\r\n\r\n.button_color_red {\r\n    background-color: crimson;\r\n}",""]);const a=o},476:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),n.push(c))}},n}},892:(e,n,r)=>{var t,o=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),a=[];function l(e){for(var n=-1,r=0;r<a.length;r++)if(a[r].identifier===e){n=r;break}return n}function i(e,n){for(var r={},t=[],o=0;o<e.length;o++){var i=e[o],c=n.base?i[0]+n.base:i[0],s=r[c]||0,u="".concat(c," ").concat(s);r[c]=s+1;var d=l(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:g(p,n),references:1}),t.push(u)}return t}function c(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var a=r.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var l=o(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(n)}return n}var s,u=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function d(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),l=e.childNodes;l[n]&&e.removeChild(l[n]),l.length?e.insertBefore(a,l[n]):e.appendChild(a)}}function p(e,n,r){var t=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var h=null,f=0;function g(e,n){var r,t,o;if(n.singleton){var a=f++;r=h||(h=c(n)),t=d.bind(null,r,a,!1),o=d.bind(null,r,a,!0)}else r=c(n),t=p.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=i(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var o=l(r[t]);a[o].references--}for(var c=i(e,n),s=0;s<r.length;s++){var u=l(r[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}r=c}}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{function e(e){let n=Math.floor(Math.random()*Math.floor(3));switch(e.style.backgroundColor="",n){case 0:e.style.backgroundColor="Crimson",e.style.borderColor="DarkRed";break;case 1:e.style.backgroundColor="SteelBlue",e.style.borderColor="DarkSlateBlue";break;case 2:e.style.backgroundColor="OliveDrab",e.style.borderColor="DarkOliveGreen";break;default:e.style.backgroundColor="gray"}return e}let n=console.log;console.log=function(e){let r=new Date,t=String(r.getHours()),o=String(r.getMinutes()),a=String(r.getSeconds());r=t+":"+o+":"+a,n(r,e,"\n",this)};var t=r(892),o=r.n(t),a=r(223);o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;let l=new function(){return this.stack=[],this.push=function(e){this.stack.push(e)},this.pop=function(){this.stack.pop()},this.stack},i=document.getElementById("addButton"),c=document.getElementById("removeButton");i.addEventListener("click",(()=>{try{return function(n){let r=document.createElement("div");r.className="plate";try{e(r),r.style.zIndex=n.length+1,10!=n.length?(n.push(r),document.querySelector(".plate").insertAdjacentElement("beforeBegin",n[n.length-1]),console.log.call(n,`Добавлен элемент с индексом [${n.length-1}]`)):(alert("Стэк переполнен!"),console.log.call(n,"Переполнение стека"))}catch(e){console.log(e)}}(l)}catch(e){console.log(e)}}),!1),c.addEventListener("click",(()=>{try{return function(e){try{let n=document.querySelector(".plates__box"),r=document.querySelector(".plate");0!=e.length?(n.removeChild(r),e.pop(),console.log.call(e,`Удалён элемент элемент с индексом [${e.length}]`)):(alert("в стеке нет элементов!"),console.log.call(e,"В стеке отсуствуют элементы"))}catch(e){console.log(e)}}(l)}catch(e){console.log(e)}}),!1),function(n){let r=document.querySelector(n);return function(t){return function(o=1){try{if("string"==typeof o)throw new Error("invalid type of the argument")}catch(e){alert("Неверный тип аргумента количества блоков\nКоличество должно быть числом"),console.log(e)}for(let a=0;a<o;a++){let o=document.createElement(t),a=document.createElement("button");a.style.cssText="\n                                border: none;\n                                background: transparent;\n                                margin-left: 10px;\n                                margin-top: 10px;\n                                width: 16px;\n                                height: 16px;\n                                font-size: 15px;\n                                font-weight: 700;\n                                text-align: center;\n                                ",a.innerHTML="X",a.className="."==n[0]||"#"==n[0]?n.slice(1)+"__deleteButton":n+"__deleteButton",e(o),a.addEventListener("click",(()=>r.removeChild(o)));try{o.appendChild(a),r.appendChild(o)}catch(e){alert("Введено неправильное имя родительского блока!"),console.log(e.message)}}}}}(".make-block-container")("span")(3)})()})();