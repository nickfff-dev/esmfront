(()=>{var e,r,t={8842:(e,r,t)=>{"use strict";var n=t(906),o={featureName:"openconceptlab",moduleName:"@openmrs/esm-openconceptlab-app"};t(3979),(0,n.getAsyncLifecycle)((function(){return Promise.all([t.e(638),t.e(49),t.e(268),t.e(944),t.e(535)]).then(t.bind(t,2853))}),o),(0,n.getAsyncLifecycle)((function(){return Promise.all([t.e(638),t.e(268),t.e(944),t.e(392)]).then(t.bind(t,9392))}),o)},3979:(e,r,t)=>{var n={"./ar.json":[4460,460],"./en.json":[3574,574]};function o(e){if(!t.o(n,e))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=n[e],o=r[0];return t.e(r[1]).then((()=>t(o)))}o.keys=()=>Object.keys(n),o.id=3979,e.exports=o}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=t,o.c=n,o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@openmrs/esm-openconceptlab-app:",o.l=(t,n,a,i)=>{if(e[t])e[t].push(n);else{var l,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),p=0;p<s.length;p++){var c=s[p];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+a){l=c;break}}l||(u=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",r+a),l.src=t),e[t]=[n];var f=(r,n)=>{l.onerror=l.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),u&&document.head.appendChild(l)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{o.S={};var e={},r={};o.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];o.o(o.S,t)||(o.S[t]={});var i=o.S[t],l="@openmrs/esm-openconceptlab-app",u=(e,r,t,n)=>{var o=i[e]=i[e]||{},a=o[r];(!a||!a.loaded&&(!n!=!a.eager?n:l>a.from))&&(o[r]={get:t,from:l,eager:!!n})},s=[];return"default"===t&&(u("@openmrs/esm-framework","5.2.1-pre.1090",(()=>Promise.all([o.e(130),o.e(268)]).then((()=>()=>o(130))))),u("react-dom","18.2.0",(()=>Promise.all([o.e(316),o.e(268)]).then((()=>()=>o(8316))))),u("react-i18next","11.18.6",(()=>Promise.all([o.e(553),o.e(268)]).then((()=>()=>o(9553))))),u("react","18.2.0",(()=>o.e(784).then((()=>()=>o(2784))))),u("swr/_internal","2.2.2",(()=>Promise.all([o.e(729),o.e(268)]).then((()=>()=>o(4729)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(l=e[a]))[0]?"-":(o>0?".":"")+(o=2,l);return n}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():r(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,l=1,u=!0;;l++,i++){var s,p,c=l<r.length?(typeof r[l])[0]:"";if(i>=n.length||"o"==(p=(typeof(s=n[i]))[0]))return!u||("u"==c?l>o&&!a:""==c!=a);if("u"==p){if(!u||"u"!=c)return!1}else if(u)if(c==p)if(l<=o){if(s!=r[l])return!1}else{if(a?s>r[l]:s<r[l])return!1;s!=r[l]&&(u=!1)}else if("s"!=c&&"n"!=c){if(a||l<=o)return!1;u=!1,l--}else{if(l<=o||p<c!=a)return!1;u=!1}else"s"!=c&&"n"!=c&&(u=!1,l--)}}var f=[],d=f.pop.bind(f);for(i=1;i<r.length;i++){var h=r[i];f.push(1==h?d()|d():2==h?d()&d():h?t(h,n):!d())}return!!d()},n=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,t)?t:r),0)},a=(e,o,a,u)=>{var s=n(e,a);return t(u,s)||i(((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(e,a,s,u)),l(e[a][s])},i=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},l=e=>(e.loaded=1,e.get()),u=(e=>function(r,t,n,a){var i=o.I(r);return i&&i.then?i.then(e.bind(e,r,o.S[r],t,n,a)):e(r,o.S[r],t,n,a)})(((e,r,t,n,i)=>r&&o.o(r,t)?a(r,0,t,n):i())),s={},p={268:()=>u("default","react",[1,18],(()=>o.e(784).then((()=>()=>o(2784))))),1858:()=>u("default","react-dom",[1,18],(()=>o.e(316).then((()=>()=>o(8316))))),4924:()=>u("default","react-i18next",[1,11],(()=>o.e(553).then((()=>()=>o(9553))))),6496:()=>u("default","swr/_internal",[7,4,0,1,,"pre",86],(()=>o.e(729).then((()=>()=>o(4729))))),906:()=>u("default","@openmrs/esm-framework",[1,4],(()=>Promise.all([o.e(130),o.e(268)]).then((()=>()=>o(130)))))};[906].forEach((e=>{o.m[e]=r=>{s[e]=0,delete o.c[e];var t=p[e]();if("function"!=typeof t)throw new Error("Shared module is not available for eager consumption: "+e);r.exports=t()}}));var c={268:[268],535:[6496],944:[1858,4924]};o.f.consumes=(e,r)=>{o.o(c,e)&&c[e].forEach((e=>{if(o.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,o.m[e]=t=>{delete o.c[e],t.exports=r()}},n=r=>{delete s[e],o.m[e]=t=>{throw delete o.c[e],r}};try{var a=p[e]();a.then?r.push(s[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))}})(),(()=>{var e={179:0,842:0};o.f.j=(r,t)=>{var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(268|944)$/.test(r))e[r]=0;else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=a);var i=o.p+o.u(r),l=new Error;o.l(i,(t=>{if(o.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[i,l,u]=t,s=0;if(i.some((r=>0!==e[r]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);u&&u(o)}for(r&&r(t);s<i.length;s++)a=i[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=globalThis.webpackChunk_openmrs_esm_openconceptlab_app=globalThis.webpackChunk_openmrs_esm_openconceptlab_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),o.nc=void 0,o(8842)})();