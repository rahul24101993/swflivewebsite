(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[67],{983:function(e,t,o){"use strict";o.r(t);var a=o(5),i=o(0),s=o(10),n=o(4),r=(o(8),o(3)),d=o(980),c=o(609),l=o(981),p=o(45),v=o(2999),w=o(2);n.a.instance;const h=Object(p.a)(Object(p.h)("div")),u=Object(p.h)(c.default),P={context:v.getContext};Object(i.h)("js/viewModeManagementService",(()=>Promise.all([o.e(18),o.e(101)]).then(o.bind(null,3103)))),Object(i.h)("js/AwWorkareaService",(()=>Promise.resolve().then(o.bind(null,2999))));const x=Object(a.a)({schemaVersion:"1.0.0",actions:{initialize:{actionType:"batchJob",steps:[{action:"populateSupportedViewModes"},{action:"setViewMode"}]},populateSupportedViewModes:{actionType:"JSFunction",method:"populateSupportedViewModes",inputData:{viewModes:"{{data.subPanelContext.viewModes}}"},outputData:{supportedViewModes:""},deps:"js/viewModeManagementService"},setViewMode:{actionType:"JSFunction",method:"setViewMode",inputData:{viewModes:"{{data.supportedViewModes}}",provider:"{{props.subPanelContext}}"},outputData:{viewSuffix:"viewSuffix",showSecondaryWorkArea:"showSecondaryWorkArea"},deps:"js/viewModeManagementService"},handleViewModechange:{actionType:"JSFunctionAsync",method:"handleViewModechange",inputData:{data:"{{data.supportedViewModes}}",context:"{{props.subPanelContext}}",viewModeKey:"{{data.eventMap['appCtx.register'].value.ViewModeContext}}"},outputData:{viewSuffix:"viewSuffix",showSecondaryWorkArea:"showSecondaryWorkArea"},deps:"js/viewModeManagementService"},handleSelectionChange:{actionType:"JSFunction",method:"handleSelectionChange",inputData:{localSelectionData:"{{data.selectionData}}",baseSelection:"{{props.baseSelection}}",parentSelectionData:"{{props.selectionData}}",dispatch:"{{data.dispatch}}",primarySelection:"{{data.primarySelection}}",sublocationState:"{{subPanelContext.pageContext.sublocationState}}",parentSelectionModel:"{{props.selectionModel}}",localSelectionModel:"{{selectionModels.nativeSelectionModel}}"},deps:"js/AwWorkareaService"},resetViewModes:{actionType:"JSFunction",method:"cleanupViewModeData",deps:"js/AwWorkareaService"}},data:{selectionData:{initialValues:{},meta:{}}},ctx:{context:{parser:{method:"getContext",deps:"js/AwWorkareaService"}}},conditions:{},lifecycleHooks:{onMount:"initialize",onUpdate:[{action:"handleSelectionChange",observers:["viewModel.atomicData.selectionData"]}],onUnmount:"resetViewModes"},i18n:{},props:{"sub-panel-context":{type:"object"},view:{type:"string"},"selection-model":{type:"object"},"base-selection":{type:"object"},"is-horizontal-orientation":{type:"object"},"search-state":{type:"object"},"selection-data":{type:"object"}},onEvent:[{eventId:"appCtx.register",condition:"name === 'ViewModeContext' && value.ViewModeContext && value.ViewModeContext !== 'None'",action:"handleViewModechange",cacheEventData:!0}],selectionModels:{nativeSelectionModel:{selectionMode:"{{data.subPanelContext.selectionMode}}"}},_viewModelId:"AwStandardWorkarea",_uniqueViewModelId:"AwStandardWorkarea"},(e=>{let t=e.subPanelContext,{viewModel:{data:o,dataProviders:a,dispatch:i,conditions:n,selectionModels:c,editHandlers:p,chartProviders:v,ports:P},grids:x,ctx:M,actions:f,fields:b,messages:S,i18n:m,formProp:y,viewPath:C}=e;o={...o,dataProviders:a},t&&t.fields&&(b={...b,...t.fields});return Object(w.jsxs)(r.Fragment,{children:[Object(w.jsx)(h,{existWhen:s.a.instance("props.subPanelContext.viewBase && props.viewModel.viewSuffix")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P}),awClass:s.a.instance("['aw-layout-primaryWorkarea',    {'sw-row h-6 w-12' : props.isHorizontalOrientation === true },    {'sw-column':props.isHorizontalOrientation === false && ['table','tree'].indexOf(props.viewModel.viewSuffix) === -1 },    {'aw-layout-primaryWorkareaLeft aw-layout-summaryList': props.viewModel.showSecondaryWorkArea === true && ['table','tree'].indexOf(props.viewModel.viewSuffix) === -1},    {'aw-layout-primaryWorkareaLeft aw-layout-summaryList aw-layout-tableSummaryList': props.viewModel.showSecondaryWorkArea === true && ['table','tree'].indexOf(props.viewModel.viewSuffix) !== -1},    {'aw-layout-flexRowContainer afx-alt-content-background aw-layout-primaryWorkareaLeft aw-layout-primaryWorkareaFill': props.viewModel.showSecondaryWorkArea === false}]")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P}),children:Object(w.jsx)(d.default,{viewBase:s.a.instance("props.subPanelContext.viewBase")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P}),view:s.a.instance("data.viewSuffix")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P}),searchState:s.a.instance("props.searchState")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P}),subPanelContext:s.a.instance("props.ctx.context[0]")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P}),selectionModel:s.a.instance("props.selectionModel || selectionModels.nativeSelectionModel")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P}),selectionData:s.a.instance("fields.selectionData")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P})})}),Object(w.jsx)(u,{isPrimarySplitter:"true",direction:s.a.instance("props.isHorizontalOrientation ? 'HORIZONTAL':''")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P}),existWhen:s.a.instance("props.viewModel.showSecondaryWorkArea")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P})}),Object(w.jsx)(h,{existWhen:s.a.instance("props.viewModel.showSecondaryWorkArea")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P}),awClass:s.a.instance("[{'sw-row h-6':props.isHorizontalOrientation === true },    {'sw-column w-9':props.isHorizontalOrientation === false }]")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P}),children:Object(w.jsx)(l.default,{subPanelContext:s.a.instance("props.subPanelContext")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P}),searchState:s.a.instance("props.searchState")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P}),baseSelection:s.a.instance("props.baseSelection")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P}),selectionData:s.a.instance("fields.selectionData")({props:e,data:o,fields:b,dataProviders:a,ctx:M,i18n:m,actions:f,subPanelContext:t,viewPath:C,conditions:n,formProp:y,dispatch:i,selectionModels:c,editHandlers:p,chartProviders:v,ports:P})})})]})}),void 0,P);t.default=x}}]);