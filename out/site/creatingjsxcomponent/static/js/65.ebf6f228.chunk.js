(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[65],{977:function(e,t,a){"use strict";a.r(t);var o=a(5),n=a(0),i=a(10),s=a(4),r=(a(8),a(3),a(269)),c=a(960),d=a(2);s.a.instance;Object(n.h)("js/AwPrimaryWorkareaService",(()=>a.e(49).then(a.bind(null,2997)))),Object(n.h)("js/appCtxService",(()=>Promise.resolve().then(a.bind(null,12))));const l=Object(o.a)({schemaVersion:"1.0.0",data:{selectionData:{initialValues:{},meta:{}}},ports:{pwaSelection:{syncObject:{}}},actions:{reset:{actionType:"JSFunction",method:"reset",inputData:{selectionModel:"{{props.selectionModel}}"},deps:"js/AwPrimaryWorkareaService"},handleSelectEvent:{actionType:"JSFunction",method:"handleSelectEvent",inputData:{eventData:"{{parameters.eventData}}",pwaSelectionModel:"{{props.selectionModel}}"},deps:"js/AwPrimaryWorkareaService"},handleMultiSelectEvent:{actionType:"JSFunction",method:"handleMultiSelectEvent",inputData:{eventData:"{{parameters.eventData}}",pwaSelectionModel:"{{props.selectionModel}}"},outputData:{showCheckBox:""},deps:"js/AwPrimaryWorkareaService"},unRegisterPwaSelectionInfoContext:{actionType:"JSFunction",method:"unRegisterCtx",inputData:{name:"pwaSelectionInfo"},deps:"js/appCtxService"},handleSelectionChange:{actionType:"batchJob",steps:[{action:"updateParentSelection"},{action:"updatePWASelectionPort"}]},updateParentSelection:{actionType:"JSFunction",method:"handleSelectionChange",inputData:{localSelectionData:"{{data.selectionData}}",parentSelectionData:"{{props.selectionData}}",selModel:"{{props.selectionModel}}"},deps:"js/AwPrimaryWorkareaService"},updatePWASelectionPort:{actionType:"Sync",inputData:{port:"pwaSelection",syncObject:"{{data.selectionData.selected}}"}}},lifecycleHooks:{onUpdate:[{action:"handleSelectionChange",observers:["viewModel.atomicData.selectionData"]}],onUnmount:"unRegisterPwaSelectionInfoContext"},onEvent:[{eventId:"primaryWorkarea.reset",action:"reset"},{eventId:"primaryWorkarea.selectAction",action:"handleSelectEvent",inputArgs:{eventData:"{{eventData}}"}},{eventId:"primaryWorkarea.multiSelectAction",action:"handleMultiSelectEvent",inputArgs:{eventData:"{{eventData}}"}}],props:{"view-base":{type:"object"},view:{type:"object"},"sub-panel-context":{type:"object"},"selection-model":{type:"object"},"selection-data":{type:"object"}},_viewModelId:"AwPrimaryWorkarea",_uniqueViewModelId:"AwPrimaryWorkarea",ctx:{}},(e=>{let t=e.subPanelContext,{viewModel:{data:a,dataProviders:o,dispatch:n,conditions:s,selectionModels:l,editHandlers:p,chartProviders:v,ports:h},grids:P,ctx:u,actions:w,fields:m,messages:x,i18n:b,formProp:S,viewPath:f}=e;a={...a,dataProviders:o},t&&t.fields&&(m={...m,...t.fields});return Object(d.jsxs)("div",{className:"sw-column w-12 h-12 afx-alt-content-background",children:[Object(d.jsx)("div",{className:"aw-layout-workareaCommandbar aw-theme-toolbar",children:Object(d.jsx)(r.default,{name:"aw_pwaCommandBar",context:i.a.instance("{...props.subPanelContext,selectionModel:props.selectionModel,pwaSelectionModel:props.selectionModel,selectionData:fields.selectionData}")({props:e,data:a,fields:m,dataProviders:o,ctx:u,i18n:b,actions:w,subPanelContext:t,viewPath:f,conditions:s,formProp:S,dispatch:n,selectionModels:l,editHandlers:p,chartProviders:v,ports:h})})}),Object(d.jsx)("div",{className:"sw-row sw-primary-workarea align-self-stretch flex-auto",children:Object(d.jsx)(c.default,{viewBase:i.a.instance("props.viewBase")({props:e,data:a,fields:m,dataProviders:o,ctx:u,i18n:b,actions:w,subPanelContext:t,viewPath:f,conditions:s,formProp:S,dispatch:n,selectionModels:l,editHandlers:p,chartProviders:v,ports:h}),view:i.a.instance("props.view")({props:e,data:a,fields:m,dataProviders:o,ctx:u,i18n:b,actions:w,subPanelContext:t,viewPath:f,conditions:s,formProp:S,dispatch:n,selectionModels:l,editHandlers:p,chartProviders:v,ports:h}),subPanelContext:i.a.instance("props.subPanelContext")({props:e,data:a,fields:m,dataProviders:o,ctx:u,i18n:b,actions:w,subPanelContext:t,viewPath:f,conditions:s,formProp:S,dispatch:n,selectionModels:l,editHandlers:p,chartProviders:v,ports:h}),showCheckBox:i.a.instance("data.showCheckBox")({props:e,data:a,fields:m,dataProviders:o,ctx:u,i18n:b,actions:w,subPanelContext:t,viewPath:f,conditions:s,formProp:S,dispatch:n,selectionModels:l,editHandlers:p,chartProviders:v,ports:h}),selection:i.a.instance("props.selectionModel")({props:e,data:a,fields:m,dataProviders:o,ctx:u,i18n:b,actions:w,subPanelContext:t,viewPath:f,conditions:s,formProp:S,dispatch:n,selectionModels:l,editHandlers:p,chartProviders:v,ports:h}),selectionData:i.a.instance("fields.selectionData")({props:e,data:a,fields:m,dataProviders:o,ctx:u,i18n:b,actions:w,subPanelContext:t,viewPath:f,conditions:s,formProp:S,dispatch:n,selectionModels:l,editHandlers:p,chartProviders:v,ports:h})})})]})}),void 0,{});t.default=l}}]);