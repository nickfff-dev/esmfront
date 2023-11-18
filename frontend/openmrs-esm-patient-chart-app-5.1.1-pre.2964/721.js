"use strict";(globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[]).push([[721],{1912:(t,i,e)=>{e.d(i,{Z:()=>r});var n=e(272),s=e.n(n),l=e(2609),o=e.n(l)()(s());o.push([t.id,":root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79}.-esm-patient-chart__cancel-visit-dialog__bodyShort02___e5GxJ{font-size:var(--cds-body-compact-02-font-size, 1rem);font-weight:var(--cds-body-compact-02-font-weight, 400);line-height:var(--cds-body-compact-02-line-height, 1.375);letter-spacing:var(--cds-body-compact-02-letter-spacing, 0);color:#161616}","",{version:3,sources:["webpack://./../../node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/visit/visit-prompt/cancel-visit-dialog.scss","webpack://./../../node_modules/@carbon/type/scss/_styles.scss"],names:[],mappings:"AAoDA,MACE,mBAAA,CACA,mBAAA,CACA,mBAAA,CCpDF,8DCu0BI,oDAAA,CAAA,uDAAA,CAAA,yDAAA,CAAA,2DAAA,CDr0BF,aDDM",sourceRoot:""}]),o.locals={bodyShort02:"-esm-patient-chart__cancel-visit-dialog__bodyShort02___e5GxJ"};const r=o},4455:(t,i,e)=>{e.d(i,{l:()=>a});var n=e(2870),s=e(5968),l=e(4924),o=e(268);function r(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function c(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,s,l=[],o=!0,r=!1;try{for(e=e.call(t);!(o=(n=e.next()).done)&&(l.push(n.value),!i||l.length!==i);o=!0);}catch(t){r=!0,s=t}finally{try{o||null==e.return||e.return()}finally{if(r)throw s}}return l}}(t,i)||function(t,i){if(t){if("string"==typeof t)return r(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,i):void 0}}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=(0,s.Tn)(t).mutateVisits,u=(0,n.useVisit)(t),d=u.mutate,v=c((0,o.useState)(!1),2),p=v[0],A=v[1],y=(0,l.useTranslation)().t,f=function(){(0,s.rP)(null==i?void 0:i.uuid).then((function(){var t,e;(0,n.showNotification)({title:y("visitRestored","Visit restored"),description:y("visitRestoredSuccessfully","{{visit}} restored successfully",{visit:null!==(e=null==i||null===(t=i.visitType)||void 0===t?void 0:t.display)&&void 0!==e?e:y("visit","Visit")}),kind:"success"}),a(),d(),null==r||r()})).catch((function(){var t,e;(0,n.showNotification)({title:y("visitNotRestored","Visit couldn't be restored"),description:y("errorWhenRestoringVisit","Error occured when restoring {{visit}}",{visit:null!==(e=null==i||null===(t=i.visitType)||void 0===t?void 0:t.display)&&void 0!==e?e:y("visit","Visit")}),kind:"error"})}))},m=function(){A(!0);var t=!(null==i?void 0:i.stopDatetime);(0,s.u4)(null==i?void 0:i.uuid).then((function(){var s,l,o,r;a(),d(),(0,n.showActionableNotification)({title:t?y("visitCancelled","Visit cancelled"):y("visitDeleted","{{visit}} deleted",{visit:null!==(o=null==i||null===(s=i.visitType)||void 0===s?void 0:s.display)&&void 0!==o?o:y("visit","Visit")}),kind:"success",subtitle:t?y("visitCanceled","Canceled active visit successfully"):y("visitCancelSuccessMessage","Active {{visit}} cancelled successfully",{visit:null!==(r=null==i||null===(l=i.visitType)||void 0===l?void 0:l.display)&&void 0!==r?r:y("visit","Visit")}),actionButtonLabel:y("undo","Undo"),onActionButtonClick:f}),null==e||e()})).catch((function(){(0,n.showNotification)({title:t?y("errorCancellingVisit","Error cancelling active visit"):y("errorDeletingVisit","Error deleting visit"),kind:"error",description:y("errorOccuredDeletingVisit","An error occured when deleting visit")})})).finally((function(){A(!1)}))};return{initiateDeletingVisit:m,isDeletingVisit:p}}},6721:(t,i,e)=>{e.r(i),e.d(i,{default:()=>k});var n=e(268),s=e.n(n),l=e(4924),o=e(4350),r=e(2870),c=e(4100),a=e(4994),u=e(1354),d=e.n(u),v=e(1583),p=e.n(v),A=e(7378),y=e.n(A),f=e(5993),m=e.n(f),h=e(4154),g=e.n(h),b=e(8141),C=e.n(b),_=e(1912),V={};V.styleTagTransform=C(),V.setAttributes=m(),V.insert=y().bind(null,"head"),V.domAPI=p(),V.insertStyleElement=g(),d()(_.Z,V);const w=_.Z&&_.Z.locals?_.Z.locals:void 0;var D=e(4455);const k=function(t){var i=t.patientUuid,e=t.closeModal,u=(0,l.useTranslation)().t,d=(0,r.useVisit)(i).currentVisit,v=(0,a.t)(i,null==d?void 0:d.uuid),p=(0,n.useCallback)((function(){var t=null==v?void 0:v.queueEntry;t&&(0,c.Ls)(t.queueUuid,t.queueEntryUuid,new AbortController),e()}),[]),A=(0,D.l)(i,d,p),y=A.initiateDeletingVisit,f=A.isDeletingVisit;return s().createElement("div",null,s().createElement(o.ModalHeader,{closeModal:e,title:u("cancelActiveVisitConfirmation","Are you sure you want to cancel this active visit?")}),s().createElement(o.ModalBody,null,s().createElement("p",{className:w.bodyShort02},u("cancelVisitExplainerMessage","Cancelling this visit will delete its associated encounters"),".")),s().createElement(o.ModalFooter,null,s().createElement(o.Button,{kind:"secondary",onClick:e},u("cancel","Cancel")),s().createElement(o.Button,{disabled:f,kind:"danger",onClick:y},f?s().createElement(o.InlineLoading,{description:u("cancellingVisit","Cancelling visit")}):u("cancelVisit","Cancel visit"))))}}}]);