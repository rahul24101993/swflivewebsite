(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[1800],{2850:function(e,t,o){"use strict";o.r(t);var a=o(5),n=o(0),s=o(10),i=o(4),c=(o(8),o(3),o(975)),l=o(2);i.a.instance;Object(n.h)("js/awDefaultSublocationService",(()=>Promise.resolve().then(o.bind(null,2945)))),Object(n.h)("js/urlArgsUtilsService",(()=>o.e(100).then(o.bind(null,3104))));const d=Object(a.a)({schemaVersion:"1.0.0",data:{sublocationState:{initialValues:{secondaryActiveTabId:""},meta:{}},selectionData:{initialValues:{},meta:{}}},props:{"sub-panel-context":{type:"object"},"base-selection":{type:"object"},"selection-model":{type:"object"},"selection-data":{type:"object"}},actions:{handleSelectionChange:{actionType:"JSFunction",method:"handleSelectionChange",inputData:{localSelectionData:"{{data.selectionData}}",parentSelectionData:"{{props.selectionData}}",selectionQueryParamKey:"{{props.subPanelContext.selectionQueryParamKey}}"},deps:"js/awDefaultSublocationService"},syncSelectionAndExecuteUrlCommand:{actionType:"batchJob",steps:[{action:"syncSelectionWithUrl",condition:"!props.selectionData"},{action:"executeUrlCommand"}]},syncSelectionWithUrl:{actionType:"JSFunction",method:"updateSelection",inputData:{selectionModel:"{{selectionModels.defaultSelectionModel}}",parentSelectionModel:"{{props.selectionModel}}",selectionQueryParamKey:"{{props.subPanelContext.selectionQueryParamKey}}",originalParams:"{{data.changedParams}}"},outputData:{changedParams:"changedParams"},deps:"js/awDefaultSublocationService"},executeUrlCommand:{actionType:"JSFunction",method:"executeUrlCommand",inputData:{cmdContext:"{{props.subPanelContext}}",cmdActionExe:"{{parameters.commandActionExecutor}}"},deps:"js/urlArgsUtilsService"}},lifecycleHooks:{onMount:"syncSelectionAndExecuteUrlCommand",onUpdate:[{action:"handleSelectionChange",observers:["viewModel.atomicData.selectionData"]}]},onEvent:[{eventId:"stateChangeSuccess",action:"syncSelectionAndExecuteUrlCommand"}],selectionModels:{defaultSelectionModel:{selectionMode:"{{subPanelContext.selectionMode || 'multiple' }}"}},_viewModelId:"AwDefaultSublocation",_uniqueViewModelId:"AwDefaultSublocation",ctx:{}},(e=>{let t=e.subPanelContext,{viewModel:{data:o,dataProviders:a,dispatch:n,conditions:i,selectionModels:d,editHandlers:r,chartProviders:p,ports:u},grids:P,ctx:m,actions:h,fields:b,messages:v,i18n:S,formProp:x,viewPath:f}=e;o={...o,dataProviders:a},t&&t.fields&&(b={...b,...t.fields});return Object(l.jsx)(c.default,{subPanelContext:s.a.instance("props.subPanelContext")({props:e,data:o,fields:b,dataProviders:a,ctx:m,i18n:S,actions:h,subPanelContext:t,viewPath:f,conditions:i,formProp:x,dispatch:n,selectionModels:d,editHandlers:r,chartProviders:p,ports:u}),sublocationState:s.a.instance("fields.sublocationState")({props:e,data:o,fields:b,dataProviders:a,ctx:m,i18n:S,actions:h,subPanelContext:t,viewPath:f,conditions:i,formProp:x,dispatch:n,selectionModels:d,editHandlers:r,chartProviders:p,ports:u}),baseSelection:s.a.instance("props.baseSelection")({props:e,data:o,fields:b,dataProviders:a,ctx:m,i18n:S,actions:h,subPanelContext:t,viewPath:f,conditions:i,formProp:x,dispatch:n,selectionModels:d,editHandlers:r,chartProviders:p,ports:u}),selectionModel:s.a.instance("props.selectionModel || props.viewModel.selectionModels.defaultSelectionModel")({props:e,data:o,fields:b,dataProviders:a,ctx:m,i18n:S,actions:h,subPanelContext:t,viewPath:f,conditions:i,formProp:x,dispatch:n,selectionModels:d,editHandlers:r,chartProviders:p,ports:u}),selectionData:s.a.instance("fields.selectionData")({props:e,data:o,fields:b,dataProviders:a,ctx:m,i18n:S,actions:h,subPanelContext:t,viewPath:f,conditions:i,formProp:x,dispatch:n,selectionModels:d,editHandlers:r,chartProviders:p,ports:u})})}),void 0,{});t.default=d}}]);