(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[80],{982:function(e,t,a){"use strict";a.r(t);var o=a(5),s=a(0),i=a(10),n=a(4),r=(a(8),a(3),a(972)),d=a(601),c=a(983),l=a(956),p=a(607),P=a(45),b=a(2945),h=a(2);n.a.instance;const v=Object(P.h)(r.default),u=Object(P.h)(d.default),x=Object(P.a)("main"),f=Object(P.h)("nav"),S=Object(P.h)(p.default),m={context:b.getStdContext};Object(s.h)("js/AwStandardSublocationService",(()=>a.e(99).then(a.bind(null,3105)))),Object(s.h)("js/awDefaultSublocationService",(()=>Promise.resolve().then(a.bind(null,2945))));const w=Object(o.a)({schemaVersion:"1.0.0",data:{sideNavLeftData:{slide:"FLOAT",direction:"RIGHT_TO_LEFT",animation:!1,width:"STANDARD",height:"FULL"},sideNavRightData:{slide:"PUSH",direction:"LEFT_TO_RIGHT",animation:!1,width:"STANDARD",height:"FULL"}},props:{provider:{type:"object"},"base-selection":{type:"object"},"search-state":{type:"object"},"sub-panel-context":{type:"object"},"selection-model":{type:"object"},"selection-data":{type:"object"},"sublocation-state":{type:"object"}},actions:{initializeStandardSublocation:{actionType:"JSFunction",method:"initializeStandardSublocation",inputData:{provider:"{{props.provider}}"},outputData:{sublocationStyles:""},deps:"js/AwStandardSublocationService"},cleanUp:{actionType:"JSFunction",method:"cleanUp",deps:"js/awDefaultSublocationService"}},ctx:{mselected:null,pselected:null,context:{parser:{method:"getStdContext",deps:"js/awDefaultSublocationService"}}},lifecycleHooks:{onMount:"initializeStandardSublocation",onUnmount:"cleanUp"},i18n:{rightHandToolBar:["UIElementsMessages"]},_viewModelId:"AwStandardSublocationInternal",_uniqueViewModelId:"AwStandardSublocationInternal"},(e=>{let t=e.subPanelContext,{viewModel:{data:a,dataProviders:o,dispatch:s,conditions:n,selectionModels:r,editHandlers:d,chartProviders:p,ports:P},grids:b,ctx:m,actions:w,fields:C,messages:j,i18n:y,formProp:H,viewPath:M}=e;a={...a,dataProviders:o},t&&t.fields&&(C={...C,...t.fields});return Object(h.jsx)(v,{provider:i.a.instance("props.provider")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),baseSelection:i.a.instance("props.baseSelection")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),selectionData:i.a.instance("props.selectionData")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),existWhen:i.a.instance("props.provider")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),children:Object(h.jsxs)("div",{className:"aw-layout-defaultSublocation aw-layout-flexColumn",children:[Object(h.jsxs)("div",{className:"aw-layout-sublocationContainer",children:[Object(h.jsx)(u,{id:"aw_navigation",config:i.a.instance("data.sideNavRightData")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),subPanelContext:i.a.instance('{...props.subPanelContext, selectionData:props.selectionData, baseSelection: props.baseSelection, searchState: props.searchState, pageContext: {...props.subPanelContext.pageContext, secondaryActiveTabId: props.sublocationState.secondaryActiveTabId !== "" ? props.sublocationState.secondaryActiveTabId : undefined, sublocationState: props.sublocationState}}')({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),existWhen:i.a.instance("!props.provider.awSubLocationPref.hideNavigationArea")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P})}),Object(h.jsx)("div",{className:"aw-layout-workarea",children:Object(h.jsxs)("div",{className:"aw-layout-flexbox",children:[Object(h.jsx)(x,{awClass:i.a.instance("['aw-layout-workareaMain',{'vertical': data.sublocationStyles.vertical},{'vertical-reverse': data.sublocationStyles.verticalReverse},{'horizontal-reverse': data.sublocationStyles.horizontalReverse}]")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),children:Object(h.jsx)(c.default,{baseSelection:i.a.instance("props.baseSelection")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),selectionModel:i.a.instance("props.selectionModel")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),selectionData:i.a.instance("props.selectionData")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),subPanelContext:i.a.instance("props.ctx.context[0]")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),searchState:i.a.instance("props.searchState")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),isHorizontalOrientation:i.a.instance("props.provider.awSubLocationPref.orientation==='HORIZONTAL'")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P})})}),Object(h.jsx)(u,{id:"aw_toolsAndInfo",config:i.a.instance("data.sideNavLeftData")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),subPanelContext:i.a.instance('{...props.subPanelContext,selectionData: props.selectionData, baseSelection: props.baseSelection, searchState: props.searchState, pageContext:{...props.subPanelContext.pageContext, secondaryActiveTabId: props.sublocationState.secondaryActiveTabId !== "" ? props.sublocationState.secondaryActiveTabId : undefined, sublocationState: props.sublocationState}}')({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),existWhen:i.a.instance("!props.provider.awSubLocationPref || !props.provider.awSubLocationPref.hideToolsAndInfoArea")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P})})]})}),Object(h.jsx)(f,{"aria-label":y.rightHandToolBar,className:"aw-layout-flexCommandbar aw-layout-infoCommandbar",existWhen:i.a.instance("!props.provider.awSubLocationPref.hideRightWall")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),children:Object(h.jsx)(l.default,{context:i.a.instance('{...props.subPanelContext, searchState: props.searchState, selectionData: props.selectionData, provider: props.provider, baseSelection: props.baseSelection, pageContext:{...props.subPanelContext.pageContext, secondaryActiveTabId: props.sublocationState.secondaryActiveTabId !== "" ? props.sublocationState.secondaryActiveTabId : undefined, sublocationState: props.sublocationState}}')({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),anchor:"aw_rightWall",alignment:"VERTICAL",mselected:i.a.instance("ctx.mselected")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),pselected:i.a.instance("ctx.pselected")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P}),className:"aw-commands-nativeCommandBar aw-commands-commandBarContainer aw-commands-commandBarVertical"})})]}),Object(h.jsx)(S,{className:"afx-accent-background aw-footer-container",anchor:"aw_footer","include-global":"includeGlobalCommands",existWhen:i.a.instance("!props.subLocationPreference.hideFooter")({props:e,data:a,fields:C,dataProviders:o,ctx:m,i18n:y,actions:w,subPanelContext:t,viewPath:M,conditions:n,formProp:H,dispatch:s,selectionModels:r,editHandlers:d,chartProviders:p,ports:P})})]})})}),void 0,m);t.default=w}}]);