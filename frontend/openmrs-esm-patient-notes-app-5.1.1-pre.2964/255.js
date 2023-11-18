/*! For license information please see 255.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_openmrs_esm_patient_notes_app=globalThis.webpackChunk_openmrs_esm_patient_notes_app||[]).push([[255],{452:(e,n,t)=>{var r=t(268),i="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},s=r.useState,a=r.useEffect,u=r.useLayoutEffect,d=r.useDebugValue;function o(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!i(e,t)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),r=s({inst:{value:t,getSnapshot:n}}),i=r[0].inst,c=r[1];return u((function(){i.value=t,i.getSnapshot=n,o(i)&&c({inst:i})}),[e,t,n]),a((function(){return o(i)&&c({inst:i}),e((function(){o(i)&&c({inst:i})}))}),[e]),d(t),t};n.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},3100:(e,n,t)=>{e.exports=t(452)},3255:(e,n,t)=>{t.d(n,{ZP:()=>d});var r=t(268),i=t(3100),s=t(3325);const a=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((n=>{e.status="fulfilled",e.value=n}),(n=>{e.status="rejected",e.reason=n})),e)}),u={dedupe:!0},d=(s.OBJECT.defineProperty(s.SWRConfig,"defaultValue",{value:s.defaultConfig}),(0,s.withArgs)(((e,n,t)=>{const{cache:d,compare:o,suspense:c,fallbackData:l,revalidateOnMount:f,revalidateIfStale:E,refreshInterval:g,refreshWhenHidden:v,refreshWhenOffline:p,keepPreviousData:h}=t,[R,S,U,_]=s.SWRGlobalState.get(d),[T,V]=(0,s.serialize)(e),b=(0,r.useRef)(!1),m=(0,r.useRef)(!1),C=(0,r.useRef)(T),w=(0,r.useRef)(n),y=(0,r.useRef)(t),L=()=>y.current,I=()=>L().isVisible()&&L().isOnline(),[O,k,D,A]=(0,s.createCacheHelper)(d,T),N=(0,r.useRef)({}).current,F=(0,s.isUndefined)(l)?t.fallback[T]:l,P=(e,n)=>{for(const t in N){const r=t;if("data"===r){if(!o(e[r],n[r])){if(!(0,s.isUndefined)(e[r]))return!1;if(!o(z,n[r]))return!1}}else if(n[r]!==e[r])return!1}return!0},j=(0,r.useMemo)((()=>{const e=!!T&&!!n&&((0,s.isUndefined)(f)?!L().isPaused()&&!c&&(!!(0,s.isUndefined)(E)||E):f),t=n=>{const t=(0,s.mergeObjects)(n);return delete t._k,e?{isValidating:!0,isLoading:!0,...t}:t},r=O(),i=A(),a=t(r),u=r===i?a:t(i);let d=a;return[()=>{const e=t(O());return P(e,d)?(d.data=e.data,d.isLoading=e.isLoading,d.isValidating=e.isValidating,d.error=e.error,d):(d=e,e)},()=>u]}),[d,T]),x=(0,i.useSyncExternalStore)((0,r.useCallback)((e=>D(T,((n,t)=>{P(t,n)||e()}))),[d,T]),j[0],j[1]),M=!b.current,W=R[T]&&R[T].length>0,G=x.data,H=(0,s.isUndefined)(G)?F:G,Y=x.error,q=(0,r.useRef)(H),z=h?(0,s.isUndefined)(G)?q.current:G:H,B=!(W&&!(0,s.isUndefined)(Y))&&(M&&!(0,s.isUndefined)(f)?f:!L().isPaused()&&(c?!(0,s.isUndefined)(H)&&E:(0,s.isUndefined)(H)||E)),J=!!(T&&n&&M&&B),Z=(0,s.isUndefined)(x.isValidating)?J:x.isValidating,K=(0,s.isUndefined)(x.isLoading)?J:x.isLoading,Q=(0,r.useCallback)((async e=>{const n=w.current;if(!T||!n||m.current||L().isPaused())return!1;let r,i,a=!0;const u=e||{},d=!U[T]||!u.dedupe,c=()=>s.IS_REACT_LEGACY?!m.current&&T===C.current&&b.current:T===C.current,l={isValidating:!1,isLoading:!1},f=()=>{k(l)},E=()=>{const e=U[T];e&&e[1]===i&&delete U[T]},g={isValidating:!0};(0,s.isUndefined)(O().data)&&(g.isLoading=!0);try{if(d&&(k(g),t.loadingTimeout&&(0,s.isUndefined)(O().data)&&setTimeout((()=>{a&&c()&&L().onLoadingSlow(T,t)}),t.loadingTimeout),U[T]=[n(V),(0,s.getTimestamp)()]),[r,i]=U[T],r=await r,d&&setTimeout(E,t.dedupingInterval),!U[T]||U[T][1]!==i)return d&&c()&&L().onDiscarded(T),!1;l.error=s.UNDEFINED;const e=S[T];if(!(0,s.isUndefined)(e)&&(i<=e[0]||i<=e[1]||0===e[1]))return f(),d&&c()&&L().onDiscarded(T),!1;const u=O().data;l.data=o(u,r)?u:r,d&&c()&&L().onSuccess(r,T,t)}catch(e){E();const n=L(),{shouldRetryOnError:t}=n;n.isPaused()||(l.error=e,d&&c()&&(n.onError(e,T,n),(!0===t||(0,s.isFunction)(t)&&t(e))&&I()&&n.onErrorRetry(e,T,n,(e=>{const n=R[T];n&&n[0]&&n[0](s.revalidateEvents.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return a=!1,f(),!0}),[T,d]),X=(0,r.useCallback)(((...e)=>(0,s.internalMutate)(d,C.current,...e)),[]);if((0,s.useIsomorphicLayoutEffect)((()=>{w.current=n,y.current=t,(0,s.isUndefined)(G)||(q.current=G)})),(0,s.useIsomorphicLayoutEffect)((()=>{if(!T)return;const e=Q.bind(s.UNDEFINED,u);let n=0;const t=(0,s.subscribeCallback)(T,R,((t,r={})=>{if(t==s.revalidateEvents.FOCUS_EVENT){const t=Date.now();L().revalidateOnFocus&&t>n&&I()&&(n=t+L().focusThrottleInterval,e())}else if(t==s.revalidateEvents.RECONNECT_EVENT)L().revalidateOnReconnect&&I()&&e();else{if(t==s.revalidateEvents.MUTATE_EVENT)return Q();if(t==s.revalidateEvents.ERROR_REVALIDATE_EVENT)return Q(r)}}));return m.current=!1,C.current=T,b.current=!0,k({_k:V}),B&&((0,s.isUndefined)(H)||s.IS_SERVER?e():(0,s.rAF)(e)),()=>{m.current=!0,t()}}),[T]),(0,s.useIsomorphicLayoutEffect)((()=>{let e;function n(){const n=(0,s.isFunction)(g)?g(O().data):g;n&&-1!==e&&(e=setTimeout(t,n))}function t(){O().error||!v&&!L().isVisible()||!p&&!L().isOnline()?n():Q(u).then(n)}return n(),()=>{e&&(clearTimeout(e),e=-1)}}),[g,v,p,T]),(0,r.useDebugValue)(z),c&&(0,s.isUndefined)(H)&&T){if(!s.IS_REACT_LEGACY&&s.IS_SERVER)throw new Error("Fallback data is required when using suspense in SSR.");w.current=n,y.current=t,m.current=!1;const e=_[T];if(!(0,s.isUndefined)(e)){const n=X(e);a(n)}if(!(0,s.isUndefined)(Y))throw Y;{const e=Q(u);(0,s.isUndefined)(z)||(e.status="fulfilled",e.value=!0),a(e)}}return{mutate:X,get data(){return N.data=!0,z},get error(){return N.error=!0,Y},get isValidating(){return N.isValidating=!0,Z},get isLoading(){return N.isLoading=!0,K}}})))}}]);