"use strict";(globalThis.webpackChunk_openmrs_esm_service_queues_app=globalThis.webpackChunk_openmrs_esm_service_queues_app||[]).push([[86],{4086:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(5206),l=n.n(r),i=n(4924),o=n(281),a=n(3028),u=n(2870),c=n(8053);function s(e,t,n,r,l,i,o){try{var a=e[i](o),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,l)}var f=function(e,t){var n,r,l,i,o={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(l=2&i[0]?r.return:i[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,i[1])).done)return l;switch(r=0,l&&(i=[2&i[0],l.value]),i[0]){case 0:case 1:l=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((l=(l=o.trys).length>0&&l[l.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!l||i[1]>l[0]&&i[1]<l[3])){o.label=i[1];break}if(6===i[0]&&o.label<l[1]){o.label=l[1],l=i;break}if(l&&o.label<l[2]){o.label=l[2],o.ops.push(i);break}l[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=l=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},d=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};function p(){var e;return e=function(e){var t,n,r,l,i;return f(this,(function(o){switch(o.label){case 0:t=function(){var t,i,o,a,s,d,p,v,h,y;return f(this,(function(f){switch(f.label){case 0:t=e.length<l+r?e.length:l+r,i=new Array(r),o=new Date,a=l,f.label=1;case 1:return a<t?[4,Promise.all([(0,c.TW)(null===(s=e[a])||void 0===s?void 0:s.queueUuid,null===(d=e[a])||void 0===d?void 0:d.queueEntryUuid,o)])]:[3,4];case 2:f.sent(),i.push((0,u.openmrsFetch)("/ws/rest/v1/visit/".concat(e[a].visitUuid),{method:"POST",headers:{"Content-Type":"application/json"},signal:n.signal,body:{location:null===(p=e[a])||void 0===p?void 0:p.visitLocation,startDatetime:(0,u.parseDate)(null===(v=e[a])||void 0===v?void 0:v.visitStartDateTime),visitType:null===(h=e[a])||void 0===h?void 0:h.visitTypeUuid,stopDatetime:new Date}})),l++,f.label=3;case 3:return a++,[3,1];case 4:return y={},[4,Promise.all(i).then((function(e){return e})).catch((function(e){return e}))];case 5:return[2,(y.v=f.sent(),y)]}}))},n=new AbortController,r=10,l=0,o.label=1;case 1:return l<e.length?[5,d(t())]:[3,3];case 2:return i=o.sent(),"object"==((a=i)&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a)?[2,i.v]:[3,1];case 3:return[2]}var a}))},p=function(){var t=this,n=arguments;return new Promise((function(r,l){var i=e.apply(t,n);function o(e){s(i,r,l,o,a,"next",e)}function a(e){s(i,r,l,o,a,"throw",e)}o(void 0)}))},p.apply(this,arguments)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const h=function(e){var t,n,s=e.visitQueueEntries,f=e.closeModal,d=(0,i.useTranslation)().t,h=(0,c.P4)("","").mutate,y=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,i=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){a=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw l}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=y[0],m=y[1],w=(0,r.useCallback)((function(){m(!0),function(e){return p.apply(this,arguments)}(s).then((function(e){f(),(0,u.showToast)({critical:!0,title:d("clearQueue","Clear queue"),kind:"success",description:d("queuesClearedSuccessfully","Queues cleared successfully")}),h()}),(function(e){(0,u.showNotification)({title:d("errorClearingQueues","Error clearing queues"),kind:"error",critical:!0,description:null==e?void 0:e.message})}))}),[f,h,d,s]);return l().createElement("div",null,l().createElement(a.xBx,{closeModal:f,label:d("serviceQueue","Service queue"),title:d("clearAllQueueEntries","Clear all queue entries?")}),l().createElement(a.fef,null,l().createElement("p",{className:o.Z.subHeading,id:"subHeading"},d("clearAllQueueEntriesWarningMessage","Clearing all queue entries will remove  all the patients from the queues and will not allow you to fill any other encounter forms for the patients"))),l().createElement(a.mzw,null,l().createElement(a.zxk,{kind:"secondary",onClick:f},d("cancel","Cancel")),!0===b?l().createElement(a.Db,null):l().createElement(a.zxk,{kind:"danger",onClick:w},d("clearQueue","Clear queue"))))}}}]);