/*! For license information please see 255.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_openmrs_esm_patient_registration_app=globalThis.webpackChunk_openmrs_esm_patient_registration_app||[]).push([[255],{452:(e,n,t)=>{var r=t(268),i="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},s=r.useState,a=r.useEffect,u=r.useLayoutEffect,o=r.useDebugValue;function d(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!i(e,t)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),r=s({inst:{value:t,getSnapshot:n}}),i=r[0].inst,c=r[1];return u((function(){i.value=t,i.getSnapshot=n,d(i)&&c({inst:i})}),[e,t,n]),a((function(){return d(i)&&c({inst:i}),e((function(){d(i)&&c({inst:i})}))}),[e]),o(t),t};n.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},3100:(e,n,t)=>{e.exports=t(452)},3255:(e,n,t)=>{t.d(n,{ZP:()=>u});var r=t(268),i=t(3100),s=t(3325);const a={dedupe:!0};s.OBJECT.defineProperty(s.SWRConfig,"defaultValue",{value:s.defaultConfig});var u=(0,s.withArgs)(((e,n,t)=>{const{cache:u,compare:o,suspense:d,fallbackData:c,revalidateOnMount:l,refreshInterval:f,refreshWhenHidden:E,refreshWhenOffline:g,keepPreviousData:p}=t,[v,S,h]=s.SWRGlobalState.get(u),[b,m]=(0,s.serialize)(e),U=(0,r.useRef)(!1),_=(0,r.useRef)(!1),R=(0,r.useRef)(b),C=(0,r.useRef)(n),T=(0,r.useRef)(t),y=()=>T.current,V=()=>y().isVisible()&&y().isOnline(),[w,k,I]=(0,s.createCacheHelper)(u,b),L=(0,r.useRef)({}).current,O=(0,s.isUndefined)(c)?t.fallback[b]:c,D=(e,n)=>{let t=!0;for(const r in L){const i=r;o(n[i],e[i])||"data"===i&&(0,s.isUndefined)(e[i])&&o(n[i],j)||(t=!1)}return t},N=(0,r.useMemo)((()=>{const e=!!b&&!!n&&((0,s.isUndefined)(l)?!y().isPaused()&&!d:l),t=()=>{const n=w(),t=(0,s.mergeObjects)(n);return delete t._k,e?{isValidating:!0,isLoading:!0,...t}:t};let r=t();return()=>{const e=t();return D(e,r)?r:r=e}}),[u,b]),F=(0,i.useSyncExternalStore)((0,r.useCallback)((e=>I(b,((n,t)=>{D(n,t)||e()}))),[u,b]),N,N),A=!U.current,P=F.data,x=(0,s.isUndefined)(P)?O:P,M=F.error,W=(0,r.useRef)(x),j=p?(0,s.isUndefined)(P)?W.current:P:x,G=A&&!(0,s.isUndefined)(l)?l:!y().isPaused()&&(d?!(0,s.isUndefined)(x)&&t.revalidateIfStale:(0,s.isUndefined)(x)||t.revalidateIfStale),H=!!(b&&n&&A&&G),Y=(0,s.isUndefined)(F.isValidating)?H:F.isValidating,q=(0,s.isUndefined)(F.isLoading)?H:F.isLoading,z=(0,r.useCallback)((async e=>{const n=C.current;if(!b||!n||_.current||y().isPaused())return!1;let r,i,a=!0;const u=e||{},d=!h[b]||!u.dedupe,c=()=>s.IS_REACT_LEGACY?!_.current&&b===R.current&&U.current:b===R.current,l={isValidating:!1,isLoading:!1},f=()=>{k(l)},E=()=>{const e=h[b];e&&e[1]===i&&delete h[b]},g={isValidating:!0};(0,s.isUndefined)(w().data)&&(g.isLoading=!0);try{if(d&&(k(g),t.loadingTimeout&&(0,s.isUndefined)(w().data)&&setTimeout((()=>{a&&c()&&y().onLoadingSlow(b,t)}),t.loadingTimeout),h[b]=[n(m),(0,s.getTimestamp)()]),[r,i]=h[b],r=await r,d&&setTimeout(E,t.dedupingInterval),!h[b]||h[b][1]!==i)return d&&c()&&y().onDiscarded(b),!1;l.error=s.UNDEFINED;const e=S[b];if(!(0,s.isUndefined)(e)&&(i<=e[0]||i<=e[1]||0===e[1]))return f(),d&&c()&&y().onDiscarded(b),!1;const u=w().data;l.data=o(u,r)?u:r,d&&c()&&y().onSuccess(r,b,t)}catch(e){E();const n=y(),{shouldRetryOnError:t}=n;n.isPaused()||(l.error=e,d&&c()&&(n.onError(e,b,n),(!0===t||(0,s.isFunction)(t)&&t(e))&&V()&&n.onErrorRetry(e,b,n,z,{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return a=!1,f(),!0}),[b,u]),B=(0,r.useCallback)(((...e)=>(0,s.internalMutate)(u,R.current,...e)),[]);if((0,s.useIsomorphicLayoutEffect)((()=>{C.current=n,T.current=t,(0,s.isUndefined)(P)||(W.current=P)})),(0,s.useIsomorphicLayoutEffect)((()=>{if(!b)return;const e=z.bind(s.UNDEFINED,a);let n=0;const t=(0,s.subscribeCallback)(b,v,(t=>{if(t==s.revalidateEvents.FOCUS_EVENT){const t=Date.now();y().revalidateOnFocus&&t>n&&V()&&(n=t+y().focusThrottleInterval,e())}else if(t==s.revalidateEvents.RECONNECT_EVENT)y().revalidateOnReconnect&&V()&&e();else if(t==s.revalidateEvents.MUTATE_EVENT)return z()}));return _.current=!1,R.current=b,U.current=!0,k({_k:m}),G&&((0,s.isUndefined)(x)||s.IS_SERVER?e():(0,s.rAF)(e)),()=>{_.current=!0,t()}}),[b]),(0,s.useIsomorphicLayoutEffect)((()=>{let e;function n(){const n=(0,s.isFunction)(f)?f(x):f;n&&-1!==e&&(e=setTimeout(t,n))}function t(){w().error||!E&&!y().isVisible()||!g&&!y().isOnline()?n():z(a).then(n)}return n(),()=>{e&&(clearTimeout(e),e=-1)}}),[f,E,g,b]),(0,r.useDebugValue)(j),d&&(0,s.isUndefined)(x)&&b){if(!s.IS_REACT_LEGACY&&s.IS_SERVER)throw new Error("Fallback data is required when using suspense in SSR.");throw C.current=n,T.current=t,_.current=!1,(0,s.isUndefined)(M)?z(a):M}return{mutate:B,get data(){return L.data=!0,j},get error(){return L.error=!0,M},get isValidating(){return L.isValidating=!0,Y},get isLoading(){return L.isLoading=!0,q}}}))}}]);