/*! For license information please see 68.js.LICENSE.txt */
(globalThis.webpackChunk_openmrs_esm_devtools_app=globalThis.webpackChunk_openmrs_esm_devtools_app||[]).push([[68],{841:(t,e)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&t.push(s)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var a in n)o.call(n,a)&&n[a]&&t.push(a)}}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(t.exports=n)}()},159:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var o=n(233),r=n.n(o),i=n(361),s=n.n(i)()(r());s.push([t.id,".-esm-devtools__devtools-popup-styles__popup___CkRFm {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  z-index: 100000;\n  background-color: black;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  box-sizing: border-box;\n  font-family: sans serif;\n  overflow-y: auto;\n}\n\n.-esm-devtools__devtools-popup-styles__tabs___DiZOd {\n  width: 100%;\n}\n\n.-esm-devtools__devtools-popup-styles__tabList___ju4HZ {\n  position: fixed;\n  height: 4rem;\n  width: 100%;\n  z-index: 1000;\n  background-color: black;\n}\n\n.-esm-devtools__devtools-popup-styles__tabPanels___keTDw {\n  padding: 1.5rem;\n}\n\n.-esm-devtools__devtools-popup-styles__farRight___hP\\+s\\+ {\n  position: absolute;\n  right: 24px;\n  top: 16px;\n  display: flex;\n  z-index: 1000;\n}\n\n.-esm-devtools__devtools-popup-styles__closeButton___\\+z1ZU {\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  height: inherit;\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n  text-align: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n}\n\n.-esm-devtools__devtools-popup-styles__closeButton___\\+z1ZU:focus {\n  /*\n    there's some 3rd party css that turns these off using !important, so the only way to override them is to also use important.\n    this is why you don't use !important -- it makes it hard for other people to override it when they need to :(\n  */\n  outline: solid !important;\n  outline-width: thin !important;\n  outline-color: #e5e5e6 !important;\n}\n","",{version:3,sources:["webpack://./src/devtools/devtools-popup.styles.css"],names:[],mappings:"AAAA;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,WAAW;EACX,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,aAAa;EACb,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,uBAAuB;;EAEvB,uCAAuC;EACvC,cAAc;EACd,aAAa;EACb,mBAAmB;;EAEnB,4EAA4E;EAC5E,mBAAmB;;EAEnB,uCAAuC;EACvC,+BAA+B;EAC/B,gCAAgC;;EAEhC,+DAA+D;EAC/D,wBAAwB;AAC1B;;AAEA;EACE;;;GAGC;EACD,yBAAyB;EACzB,8BAA8B;EAC9B,iCAAiC;AACnC",sourcesContent:[".popup {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  z-index: 100000;\n  background-color: black;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  box-sizing: border-box;\n  font-family: sans serif;\n  overflow-y: auto;\n}\n\n.tabs {\n  width: 100%;\n}\n\n.tabList {\n  position: fixed;\n  height: 4rem;\n  width: 100%;\n  z-index: 1000;\n  background-color: black;\n}\n\n.tabPanels {\n  padding: 1.5rem;\n}\n\n.farRight {\n  position: absolute;\n  right: 24px;\n  top: 16px;\n  display: flex;\n  z-index: 1000;\n}\n\n.closeButton {\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  height: inherit;\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n  text-align: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n}\n\n.closeButton:focus {\n  /*\n    there's some 3rd party css that turns these off using !important, so the only way to override them is to also use important.\n    this is why you don't use !important -- it makes it hard for other people to override it when they need to :(\n  */\n  outline: solid !important;\n  outline-width: thin !important;\n  outline-color: #e5e5e6 !important;\n}\n"],sourceRoot:""}]),s.locals={popup:"-esm-devtools__devtools-popup-styles__popup___CkRFm",tabs:"-esm-devtools__devtools-popup-styles__tabs___DiZOd",tabList:"-esm-devtools__devtools-popup-styles__tabList___ju4HZ",tabPanels:"-esm-devtools__devtools-popup-styles__tabPanels___keTDw",farRight:"-esm-devtools__devtools-popup-styles__farRight___hP+s+",closeButton:"-esm-devtools__devtools-popup-styles__closeButton___+z1ZU"};const a=s},702:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var o=n(233),r=n.n(o),i=n(361),s=n.n(i)()(r());s.push([t.id,".-esm-devtools__devtools-styles__devtoolsTriggerButton___jdOjG {\n  z-index: 100000;\n  background-color: #c6c6c6;\n  height: 40px !important;\n  width: 40px !important;\n  bottom: 10px;\n  right: 8px;\n  position: fixed;\n  border-radius: 2px;\n}\n\n.-esm-devtools__devtools-styles__overridden___6XJFA {\n  background-color: #da1e28;\n}\n","",{version:3,sources:["webpack://./src/devtools/devtools.styles.css"],names:[],mappings:"AAAA;EACE,eAAe;EACf,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;EACtB,YAAY;EACZ,UAAU;EACV,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B",sourcesContent:[".devtoolsTriggerButton {\n  z-index: 100000;\n  background-color: #c6c6c6;\n  height: 40px !important;\n  width: 40px !important;\n  bottom: 10px;\n  right: 8px;\n  position: fixed;\n  border-radius: 2px;\n}\n\n.overridden {\n  background-color: #da1e28;\n}\n"],sourceRoot:""}]),s.locals={devtoolsTriggerButton:"-esm-devtools__devtools-styles__devtoolsTriggerButton___jdOjG",overridden:"-esm-devtools__devtools-styles__overridden___6XJFA"};const a=s},260:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var o=n(233),r=n.n(o),i=n(361),s=n.n(i)()(r());s.push([t.id,".-esm-devtools__import-map-styles__importMap___ICDeA {\n  width: 100%;\n  margin-top: 12px;\n}\n","",{version:3,sources:["webpack://./src/devtools/import-map.styles.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,gBAAgB;AAClB",sourcesContent:[".importMap {\n  width: 100%;\n  margin-top: 12px;\n}\n"],sourceRoot:""}]),s.locals={importMap:"-esm-devtools__import-map-styles__importMap___ICDeA"};const a=s},361:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},233:t=>{"use strict";function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}t.exports=function(t){var n,o,r=(o=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var o,r,i=[],s=!0,a=!1;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);s=!0);}catch(t){a=!0,r=t}finally{try{s||null==n.return||n.return()}finally{if(a)throw r}}return i}}(n,o)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[1],s=r[3];if(!s)return i;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),u="/*# ".concat(l," */"),c=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[i].concat(c).concat([u]).join("\n")}return[i].join("\n")}},487:t=>{"use strict";var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},s=[],a=0;a<t.length;a++){var l=t[a],u=o.base?l[0]+o.base:l[0],c=i[u]||0,p="".concat(u," ").concat(c);i[u]=c+1;var A=n(p),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==A)e[A].references++,e[A].updater(d);else{var f=r(d,o);o.byIndex=a,e.splice(a,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var a=n(i[s]);e[a].references--}for(var l=o(t,r),u=0;u<i.length;u++){var c=n(i[u]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=l}}},52:t=>{"use strict";var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},469:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},10:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},631:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},329:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},68:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>z});var o=n(776),r=n.n(o),i=n(841),s=n.n(i),a=n(487),l=n.n(a),u=n(631),c=n.n(u),p=n(52),A=n.n(p),d=n(10),f=n.n(d),m=n(469),v=n.n(m),h=n(329),_=n.n(h),g=n(260),y={};y.styleTagTransform=_(),y.setAttributes=f(),y.insert=A().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=v(),l()(g.Z,y);const b=g.Z&&g.Z.locals?g.Z.locals:void 0;function E(t){var e=(0,o.useRef)(null);return(0,o.useEffect)((function(){var e=function(e){t.toggleOverridden(C())};return window.addEventListener("import-map-overrides:change",e),function(){return window.removeEventListener("import-map-overrides:change",e)}}),[t]),r().createElement("div",{className:b.importMap},r().createElement("import-map-overrides-list",{ref:e}))}function C(){return Object.keys(window.importMapOverrides.getOverrideMap().imports).length>0}var B=n(159),w={};w.styleTagTransform=_(),w.setAttributes=f(),w.insert=A().bind(null,"head"),w.domAPI=c(),w.insertStyleElement=v(),l()(B.Z,w);const x=B.Z&&B.Z.locals?B.Z.locals:void 0;function k(t){return r().createElement("div",{className:x.popup},r().createElement(E,{toggleOverridden:t.toggleOverridden}),r().createElement("div",{className:x.farRight},r().createElement("button",{onClick:t.close,className:x.closeButton},"ⓧ")))}var S=n(702),T={};T.styleTagTransform=_(),T.setAttributes=f(),T.insert=A().bind(null,"head"),T.domAPI=c(),T.insertStyleElement=v(),l()(S.Z,T);const j=S.Z&&S.Z.locals?S.Z.locals:void 0;function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function O(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i=[],s=!0,a=!1;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);s=!0);}catch(t){a=!0,r=t}finally{try{s||null==n.return||n.return()}finally{if(a)throw r}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(t){return"development"===window.spaEnv||Boolean(localStorage.getItem("openmrs:devtools"))?r().createElement(I,t):null}function I(){var t,e,n,i=function(){u(!l)},a=O((0,o.useState)(!1),2),l=a[0],u=a[1],c=O((0,o.useState)(C),2),p=c[0],A=c[1];return r().createElement(r().Fragment,null,r().createElement("div",{role:"button",tabIndex:0,onClick:i,className:s()(j.devtoolsTriggerButton,(t={},e=j.overridden,n=p,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t))}),l&&r().createElement(k,{close:i,toggleOverridden:function(t){A(t)}}))}}}]);