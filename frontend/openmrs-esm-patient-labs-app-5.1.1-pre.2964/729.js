"use strict";(globalThis.webpackChunk_openmrs_esm_patient_labs_app=globalThis.webpackChunk_openmrs_esm_patient_labs_app||[]).push([[729],{4729:(e,t,n)=>{n.r(t),n.d(t,{INFINITE_PREFIX:()=>H,IS_REACT_LEGACY:()=>S,IS_SERVER:()=>k,OBJECT:()=>s,SWRConfig:()=>G,SWRGlobalState:()=>_,UNDEFINED:()=>i,cache:()=>$,compare:()=>U,createCacheHelper:()=>v,defaultConfig:()=>J,defaultConfigOptions:()=>O,getTimestamp:()=>V,hasRequestAnimationFrame:()=>b,initCache:()=>P,internalMutate:()=>M,isDocumentDefined:()=>g,isFunction:()=>c,isPromiseLike:()=>l,isUndefined:()=>a,isWindowDefined:()=>w,mergeConfigs:()=>j,mergeObjects:()=>u,mutate:()=>q,noop:()=>r,normalize:()=>Y,preload:()=>Q,preset:()=>T,rAF:()=>I,revalidateEvents:()=>W,serialize:()=>F,slowConnection:()=>L,stableHash:()=>p,subscribeCallback:()=>te,useIsomorphicLayoutEffect:()=>A,useSWRConfig:()=>K,withArgs:()=>ee,withMiddleware:()=>ne});var o=n(268);const r=()=>{},i=r(),s=Object,a=e=>e===i,c=e=>"function"==typeof e,u=(e,t)=>({...e,...t}),l=e=>c(e.then),f=new WeakMap;let d=0;const p=e=>{const t=typeof e,n=e&&e.constructor,o=n==Date;let r,i;if(s(e)!==e||o||n==RegExp)r=o?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(r=f.get(e),r)return r;if(r=++d+"~",f.set(e,r),n==Array){for(r="@",i=0;i<e.length;i++)r+=p(e[i])+",";f.set(e,r)}if(n==s){r="#";const t=s.keys(e).sort();for(;!a(i=t.pop());)a(e[i])||(r+=i+":"+p(e[i])+",");f.set(e,r)}}return r},_=new WeakMap,h={},E={},m="undefined",w=typeof window!=m,g=typeof document!=m,b=()=>w&&typeof window.requestAnimationFrame!=m,v=(e,t)=>{const n=_.get(e);return[()=>!a(t)&&e.get(t)||h,o=>{if(!a(t)){const r=e.get(t);t in E||(E[t]=r),n[5](t,u(r,o),r||h)}},n[6],()=>!a(t)&&t in E?E[t]:!a(t)&&e.get(t)||h]};let y=!0;const[R,C]=w&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[r,r],T={isOnline:()=>y,isVisible:()=>{const e=g&&document.visibilityState;return a(e)||"hidden"!==e}},O={initFocus:e=>(g&&document.addEventListener("visibilitychange",e),R("focus",e),()=>{g&&document.removeEventListener("visibilitychange",e),C("focus",e)}),initReconnect:e=>{const t=()=>{y=!0,e()},n=()=>{y=!1};return R("online",t),R("offline",n),()=>{C("online",t),C("offline",n)}}},S=!o.useId,k=!w||"Deno"in window,I=e=>b()?window.requestAnimationFrame(e):setTimeout(e,1),A=k?o.useEffect:o.useLayoutEffect,D="undefined"!=typeof navigator&&navigator.connection,L=!k&&D&&(["slow-2g","2g"].includes(D.effectiveType)||D.saveData),F=e=>{if(c(e))try{e=e()}catch(t){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?p(e):"",t]};let N=0;const V=()=>++N;var W={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function M(...e){const[t,n,o,r]=e,s=u({populateCache:!0,throwOnError:!0},"boolean"==typeof r?{revalidate:r}:r||{});let f=s.populateCache;const d=s.rollbackOnError;let p=s.optimisticData;const h=!1!==s.revalidate,E=s.throwOnError;if(c(n)){const e=n,o=[],r=t.keys();for(const n of r)!/^\$(inf|sub)\$/.test(n)&&e(t.get(n)._k)&&o.push(n);return Promise.all(o.map(m))}return m(n);async function m(n){const[r]=F(n);if(!r)return;const[s,u]=v(t,r),[m,w,g,b]=_.get(t),y=()=>{const e=m[r];return h&&(delete g[r],delete b[r],e&&e[0])?e[0](2).then((()=>s().data)):s().data};if(e.length<3)return y();let R,C=o;const T=V();w[r]=[T,0];const O=!a(p),S=s(),k=S.data,I=S._c,A=a(I)?k:I;if(O&&(p=c(p)?p(A,k):p,u({data:p,_c:A})),c(C))try{C=C(A)}catch(e){R=e}if(C&&l(C)){if(C=await C.catch((e=>{R=e})),T!==w[r][0]){if(R)throw R;return C}R&&O&&(e=>"function"==typeof d?d(e):!1!==d)(R)&&(f=!0,u({data:A,_c:i}))}if(f&&!R)if(c(f)){const e=f(C,A);u({data:e,error:i,_c:i})}else u({data:C,error:i,_c:i});if(w[r][1]=V(),Promise.resolve(y()).then((()=>{u({_c:i})})),!R)return C;if(E)throw R}}const x=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},P=(e,t)=>{if(!_.has(e)){const n=u(O,t),o={},s=M.bind(i,e);let a=r;const c={},l=(e,t)=>{const n=c[e]||[];return c[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},f=(t,n,o)=>{e.set(t,n);const r=c[t];if(r)for(const e of r)e(n,o)},d=()=>{if(!_.has(e)&&(_.set(e,[o,{},{},{},s,f,l]),!k)){const t=n.initFocus(setTimeout.bind(i,x.bind(i,o,0))),r=n.initReconnect(setTimeout.bind(i,x.bind(i,o,1)));a=()=>{t&&t(),r&&r(),_.delete(e)}}};return d(),[e,s,d,a]}return[e,_.get(e)[4]]},U=(e,t)=>p(e)==p(t),[$,q]=P(new Map),J=u({onLoadingSlow:r,onSuccess:r,onError:r,onErrorRetry:(e,t,n,o,r)=>{const i=n.errorRetryCount,s=r.retryCount,c=~~((Math.random()+.5)*(1<<(s<8?s:8)))*n.errorRetryInterval;!a(i)&&s>i||setTimeout(o,c,r)},onDiscarded:r,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:L?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:L?5e3:3e3,compare:U,isPaused:()=>!1,cache:$,mutate:q,fallback:{}},T),j=(e,t)=>{const n=u(e,t);if(t){const{use:o,fallback:r}=e,{use:i,fallback:s}=t;o&&i&&(n.use=o.concat(i)),r&&s&&(n.fallback=u(r,s))}return n},z=(0,o.createContext)({}),G=e=>{const{value:t}=e,n=(0,o.useContext)(z),r=c(t),s=(0,o.useMemo)((()=>r?t(n):t),[r,n,t]),a=(0,o.useMemo)((()=>r?s:j(n,s)),[r,n,s]),l=s&&s.provider,f=(0,o.useRef)(i);l&&!f.current&&(f.current=P(l(a.cache||$),s));const d=f.current;return d&&(a.cache=d[0],a.mutate=d[1]),A((()=>{if(d)return d[2]&&d[2](),d[3]}),[]),(0,o.createElement)(z.Provider,u(e,{value:a}))},H="$inf$",B=w&&window.__SWR_DEVTOOLS_USE__,X=B?window.__SWR_DEVTOOLS_USE__:[],Y=e=>c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],K=()=>u(J,(0,o.useContext)(z)),Q=(e,t)=>{const[n,o]=F(e),[,,,r]=_.get($);if(r[n])return r[n];const i=t(o);return r[n]=i,i},Z=X.concat((e=>(t,n,o)=>e(t,n&&((...e)=>{const[o]=F(t),[,,,r]=_.get($);if(o.startsWith(H))return n(...e);const i=r[o];return a(i)?n(...e):(delete r[o],i)}),o))),ee=e=>function(...t){const n=K(),[o,r,i]=Y(t),s=j(n,i);let a=e;const{use:c}=s,u=(c||[]).concat(Z);for(let e=u.length;e--;)a=u[e](a);return a(o,r||s.fetcher||null,s)},te=(e,t,n)=>{const o=t[e]||(t[e]=[]);return o.push(n),()=>{const e=o.indexOf(n);e>=0&&(o[e]=o[o.length-1],o.pop())}},ne=(e,t)=>(...n)=>{const[o,r,i]=Y(n),s=(i.use||[]).concat(t);return e(o,r,{...i,use:s})};B&&(window.__SWR_DEVTOOLS_REACT__=o)}}]);