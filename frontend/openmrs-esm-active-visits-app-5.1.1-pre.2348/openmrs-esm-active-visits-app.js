var _openmrs_esm_active_visits_app;(()=>{"use strict";var e,r,t,n,o,a,i,s,l,u,f,p,d,c,h,v={9429:(e,r,t)=>{var n={"./start":()=>Promise.all([t.e(255),t.e(629),t.e(206),t.e(325),t.e(277)]).then((()=>()=>t(8817)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},m={};function g(e){var r=m[e];if(void 0!==r)return r.exports;var t=m[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,g),t.loaded=!0,t.exports}g.m=v,g.c=m,g.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return g.d(r,{a:r}),r},g.d=(e,r)=>{for(var t in r)g.o(r,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},g.f={},g.e=e=>Promise.all(Object.keys(g.f).reduce(((r,t)=>(g.f[t](e,r),r)),[])),g.u=e=>e+".js",g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@openmrs/esm-active-visits-app:",g.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var f=l[u];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){i=f;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,g.nc&&i.setAttribute("nonce",g.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var p=(r,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),s&&document.head.appendChild(i)}},g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{g.S={};var e={},r={};g.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];g.o(g.S,t)||(g.S[t]={});var a=g.S[t],i="@openmrs/esm-active-visits-app",s=(e,r,t,n)=>{var o=a[e]=a[e]||{},s=o[r];(!s||!s.loaded&&(!n!=!s.eager?n:i>s.from))&&(o[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(s("@openmrs/esm-framework","5.2.1-pre.1134",(()=>Promise.all([g.e(130),g.e(206)]).then((()=>()=>g(130))))),s("dayjs","1.11.6",(()=>g.e(879).then((()=>()=>g(8879))))),s("react-dom","18.2.0",(()=>Promise.all([g.e(316),g.e(206)]).then((()=>()=>g(8316))))),s("react-i18next","11.18.6",(()=>Promise.all([g.e(588),g.e(206)]).then((()=>()=>g(6588))))),s("react","18.2.0",(()=>g.e(784).then((()=>()=>g(2784))))),s("swr/_internal","2.0.1",(()=>Promise.all([g.e(729),g.e(206)]).then((()=>()=>g(4729))))),s("swr/infinite","2.0.1",(()=>Promise.all([g.e(255),g.e(206),g.e(325),g.e(382)]).then((()=>()=>g(6635)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var r=g.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],s=(typeof i)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(s=e[a]))[0]?"-":(n>0?".":"")+(n=2,s);return t}var i=[];for(a=1;a<e.length;a++){var s=e[a];i.push(0===s?"not("+l()+")":1===s?"("+l()+" || "+l()+")":2===s?i.pop()+" "+i.pop():o(s))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,s=1,l=!0;;s++,i++){var u,f,p=s<e.length?(typeof e[s])[0]:"";if(i>=r.length||"o"==(f=(typeof(u=r[i]))[0]))return!l||("u"==p?s>n&&!o:""==p!=o);if("u"==f){if(!l||"u"!=p)return!1}else if(l)if(p==f)if(s<=n){if(u!=e[s])return!1}else{if(o?u>e[s]:u<e[s])return!1;u!=e[s]&&(l=!1)}else if("s"!=p&&"n"!=p){if(o||s<=n)return!1;l=!1,s--}else{if(s<=n||f<p!=o)return!1;l=!1}else"s"!=p&&"n"!=p&&(l=!1,s--)}}var d=[],c=d.pop.bind(d);for(i=1;i<e.length;i++){var h=e[i];d.push(1==h?c()|c():2==h?c()&c():h?a(h,r):!c())}return!!c()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},s=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",l=(e,r,t,n)=>{var o=i(e,t);return a(n,o)||u(s(e,t,o,n)),f(e[t][o])},u=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f=e=>(e.loaded=1,e.get()),p=(e=>function(r,t,n,o){var a=g.I(r);return a&&a.then?a.then(e.bind(e,r,g.S[r],t,n,o)):e(0,g.S[r],t,n,o)})(((e,r,t,n,o)=>r&&g.o(r,t)?l(r,0,t,n):o())),d={},c={5206:()=>p("default","react",[1,18,1,0],(()=>g.e(784).then((()=>()=>g(2784))))),3325:()=>p("default","swr/_internal",[1,2],(()=>g.e(729).then((()=>()=>g(4729))))),2432:()=>p("default","react-dom",[1,18,1,0],(()=>g.e(316).then((()=>()=>g(8316))))),2870:()=>p("default","@openmrs/esm-framework",[1,5],(()=>g.e(130).then((()=>()=>g(130))))),3565:()=>p("default","dayjs",[1,1],(()=>g.e(879).then((()=>()=>g(8879))))),4924:()=>p("default","react-i18next",[1,11],(()=>g.e(588).then((()=>()=>g(6588))))),9285:()=>p("default","swr/infinite",[1,2],(()=>g.e(635).then((()=>()=>g(6635)))))},h={206:[5206],277:[2432,2870,3565,4924,9285],325:[3325]},g.f.consumes=(e,r)=>{g.o(h,e)&&h[e].forEach((e=>{if(g.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,g.m[e]=t=>{delete g.c[e],t.exports=r()}},n=r=>{delete d[e],g.m[e]=t=>{throw delete g.c[e],r}};try{var o=c[e]();o.then?r.push(d[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={661:0};g.f.j=(r,t)=>{var n=g.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(206|325)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=g.p+g.u(r),i=new Error;g.l(a,(t=>{if(g.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,s]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in i)g.o(i,n)&&(g.m[n]=i[n]);s&&s(g)}for(r&&r(t);l<a.length;l++)o=a[l],g.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=globalThis.webpackChunk_openmrs_esm_active_visits_app=globalThis.webpackChunk_openmrs_esm_active_visits_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),g.nc=void 0;var b=g(9429);_openmrs_esm_active_visits_app=b})();