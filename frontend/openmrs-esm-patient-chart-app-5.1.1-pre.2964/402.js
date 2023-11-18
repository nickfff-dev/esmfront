"use strict";(globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[]).push([[402],{6322:(t,e,a)=>{a.d(e,{Z:()=>r});var s=a(272),i=a.n(s),n=a(2609),o=a.n(n)()(i());o.push([t.id,":root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79}.-esm-patient-chart__start-visit-dialog__header___qFdjw{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0)}.-esm-patient-chart__start-visit-dialog__body___VphOU{font-size:var(--cds-body-01-font-size, 0.875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, 0.16px)}","",{version:3,sources:["webpack://./../../node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/visit/visit-prompt/start-visit-dialog.scss","webpack://./../../node_modules/@carbon/type/scss/_styles.scss"],names:[],mappings:"AAoDA,MACE,mBAAA,CACA,mBAAA,CACA,mBAAA,CCnDF,wDCs0BI,kDAAA,CAAA,kDAAA,CAAA,kDAAA,CAAA,sDAAA,CDl0BJ,sDCk0BI,gDAAA,CAAA,+CAAA,CAAA,mDAAA,CAAA,wDAAA",sourceRoot:""}]),o.locals={header:"-esm-patient-chart__start-visit-dialog__header___qFdjw",body:"-esm-patient-chart__start-visit-dialog__body___VphOU"};const r=o},1496:(t,e,a)=>{a.d(e,{Z:()=>_});var s=a(1354),i=a.n(s),n=a(1583),o=a.n(n),r=a(7378),c=a.n(r),d=a(5993),l=a.n(d),A=a(4154),p=a.n(A),h=a(8141),u=a.n(h),v=a(6322),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),i()(v.Z,m);const _=v.Z&&v.Z.locals?v.Z.locals:void 0},7402:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var s=a(268),i=a.n(s),n=a(4924),o=a(4350),r=a(414),c=a(2870),d=a(1496);const l=function(t){var e=t.patientUuid,a=t.closeModal,l=t.visitType,A=t.launchPatientChart,p=(0,n.useTranslation)().t,h=(0,c.useFeatureFlag)("rde"),u=(0,s.useCallback)((function(){A?(0,r.launchPatientChartWithWorkspaceOpen)({patientUuid:e,workspaceName:"past-visits-overview"}):(0,r.launchPatientWorkspace)("past-visits-overview"),a()}),[a,e,A]),v=(0,s.useCallback)((function(){A?(0,r.launchPatientChartWithWorkspaceOpen)({patientUuid:e,workspaceName:"start-visit-workspace-form"}):(0,r.launchPatientWorkspace)("start-visit-workspace-form"),a()}),[a,e,A]),m=h&&"past"===l?p("addAPastVisit","Add a past visit"):p("noActiveVisit","No active visit"),_=h?"past"===l?p("addPastVisitText","You can add a new past visit or update an old one. Choose from one of the options below to continue."):p("noActiveVisitText","You can't add data to the patient chart without an active visit. Choose from one of the options below to continue."):p("noActiveVisitNoRDEText","You can't add data to the patient chart without an active visit. Would you like to start a new visit?");return i().createElement("div",null,i().createElement(o.ModalHeader,{closeModal:a},i().createElement("span",{className:d.Z.header},m)),i().createElement(o.ModalBody,null,i().createElement("p",{className:d.Z.body},_)),i().createElement(o.ModalFooter,null,i().createElement(o.Button,{kind:"secondary",onClick:a},p("cancel","Cancel")),h&&i().createElement(o.Button,{kind:"secondary",onClick:u},p("editPastVisit","Edit past visit")),i().createElement(o.Button,{kind:"primary",onClick:v},p("startNewVisit","Start new visit"))))}}}]);