(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[1805],{2858:function(e,t,a){"use strict";a.r(t);var o=a(5),s=a(0),i=a(10),r=a(4),c=(a(8),a(3),a(959)),n=a(608),d=a(603),p=a(273),l=a(63),h=a(958),b=a(602),S=a(984),u=a(45),P=a(2);r.a.instance;const v=Object(u.h)(p.default),m=Object(u.h)(S.default);Object(s.h)("js/awSearchSublocationService",(()=>Promise.all([a.e(46),a.e(47)]).then(a.bind(null,3112)))),Object(s.h)("js/awHeaderService",(()=>Promise.all([a.e(46),a.e(47),a.e(48)]).then(a.bind(null,2956))));const x=Object(o.a)({schemaVersion:"1.0.0",lifecycleHooks:{onMount:"init",onUpdate:[{action:"updateURL",observers:["viewModel.searchState","props.searchState"]},{action:"updateSearchCriteria",observers:["props.searchCriteria"]},{action:"updateSublocationTabs",observers:["viewModel.data.primaryActiveTabId"]},{action:"handleSearchStatePWASelectionUpdate",observers:["viewModel.searchState.pwaSelection[0].uid","viewModel.searchState.pwaSelection.length","props.searchState.pwaSelection[0].uid","props.searchState.pwaSelection.length"]},{action:"getActiveSublocationTab",observers:["props.tabsdata.sublocationTabs"]},{action:"handleSelectionChange",observers:["viewModel.atomicData.selectionData"]}]},data:{searchState:{initialValues:{},meta:{categories:[{filterValues:[{selected:{field:"true",type:"BOOLEAN"}}]}]}},primaryActiveTabId:{dbValue:"",type:"OBJECT"},selectionData:{initialValues:{},meta:{}}},actions:{updateSelectionQueryParamInURL:{actionType:"JSFunction",method:"updateSelectionQueryParamInURL",inputData:{searchStateProp:"{{props.searchState}}",searchState:"{{data.searchState}}"},deps:"js/awSearchSublocationService"},handleSearchStatePWASelectionUpdate:{actionType:"batchJob",steps:[{action:"updateChartsDataOnSelectionChange"},{action:"updateSelectionQueryParamInURL"}]},init:{actionType:"batchJob",steps:[{action:"initializeSearchState"},{action:"constructTitles"}]},constructTitles:{actionType:"JSFunctionAsync",method:"getTitles",deps:"js/awHeaderService",outputData:{browserTitle:"result.browserTitle",browserSubTitle:"result.browserSubTitle",headerTitle:"result.headerTitle"}},initializeSearchState:{actionType:"JSFunctionAsync",method:"createStateFromUrl",inputData:{provider:"{{props.provider}}",searchStateProp:"{{props.searchState}}",searchState:"{{data.searchState}}",searchStateUpdater:"{{data.updateAtomicData}}",skipURL:"{{props.skipUrl}}",searchCriteria:"{{props.searchCriteria}}",pwaSelectionModel:"{{data.selectionModels.searchPageSelectionModel}}"},deps:"js/awSearchSublocationService"},updateURL:{actionType:"JSFunction",method:"updateURL",inputData:{searchStateProp:"{{props.searchState}}",searchState:"{{data.searchState}}",searchStateUpdater:"{{data.updateAtomicData}}",skipURL:"{{props.skipUrl}}"},deps:"js/awSearchSublocationService"},updateSearchCriteria:{actionType:"JSFunction",method:"updateSearchCriteria",inputData:{searchStateAtomicData:"{{data.atomicDataRef.searchState}}",searchStateUpdater:"{{data.updateAtomicData}}",searchCriteria:"{{props.searchCriteria}}"},deps:"js/awSearchSublocationService"},syncStateFromUrl:{actionType:"JSFunction",method:"syncStateFromUrl",inputData:{searchStateProp:"{{props.searchState}}",searchState:"{{data.searchState}}",searchStateUpdater:"{{data.updateAtomicData}}"},deps:"js/awSearchSublocationService"},searchctxhack:{actionType:"JSFunction",method:"updateSearchContext",inputData:{provider:"{{props.provider}}"},deps:"js/awSearchSublocationService"},postURLChangeProcess:{actionType:"batchJob",steps:[{action:"searchctxhack"},{action:"syncStateFromUrl"}]},updateSublocationTabs:{actionType:"JSFunction",method:"updateSublocationTabs",inputData:{sublocationsTabs:"{{props.tabsdata.sublocationTabs}}",primarySublocTabState:"{{data.primaryActiveTabId}}"},deps:"js/awSearchSublocationService"},updateChartsDataOnSelectionChange:{actionType:"JSFunction",method:"updateChartsDataOnSelectionChange",inputData:{searchStateProp:"{{props.searchState}}",searchState:"{{data.searchState}}",searchStateUpdater:"{{data.updateAtomicData}}"},deps:"js/awSearchSublocationService"},getActiveSublocationTab:{actionType:"JSFunction",method:"getActiveSublocationTab",inputData:{sublocationsTabs:"{{props.tabsdata.sublocationTabs}}"},outputData:{primaryActiveTab:""},deps:"js/awSearchSublocationService"},handleSelectionChange:{actionType:"batchJob",steps:[{action:"updateGlobalSelection"},{condition:"!props.selectionData",action:"updateSearchStateWithSelection"}]},updateGlobalSelection:{actionType:"JSFunction",method:"updateGlobalSelection",inputData:{localSelectionData:"{{data.selectionData}}",parentSelectionData:"{{props.selectionData}}"},deps:"js/awSearchSublocationService"},updateSearchStateWithSelection:{actionType:"JSFunction",method:"updateSearchStateWithSelectionData",inputData:{searchStateProp:"{{props.searchState}}",searchState:"{{fields.searchState}}",selectionData:"{{data.selectionData}}"},deps:"js/awSearchSublocationService"}},props:{provider:{type:"object"},"base-selection":{type:"object"},"search-box":{type:"object"},"search-box-action":{type:"action"},tabsdata:{type:"object"},"search-state":{type:"object"},"skip-url":{type:"object"},"header-title":{type:"object"},"search-criteria":{type:"object"},showsearchbox:{type:"object"},"xrt-context":{type:"object"},"selection-data":{type:"object"}},onEvent:[{eventId:"locationChangeSuccess",action:"postURLChangeProcess"}],selectionModels:{searchPageSelectionModel:{selectionMode:"{{prop.provider.selectionMode || 'multiple'}}"}},_viewModelId:"AwSearchPage",_uniqueViewModelId:"AwSearchPage",ctx:{}},(e=>{let t=e.subPanelContext,{viewModel:{data:a,dataProviders:o,dispatch:s,conditions:r,selectionModels:p,editHandlers:S,chartProviders:u,ports:x},grids:f,ctx:w,actions:T,fields:C,messages:y,i18n:j,formProp:M,viewPath:D}=e;a={...a,dataProviders:o},t&&t.fields&&(C={...C,...t.fields});return Object(P.jsxs)(c.default,{className:"aw-layout-flexColumn",browserTitle:i.a.instance("data.browserTitle")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),browserSubTitle:i.a.instance("data.browserSubTitle")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),subLocationTabs:i.a.instance("props.tabsdata.sublocationTabs")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),children:[Object(P.jsxs)(n.default,{children:[Object(P.jsx)(d.default,{headertitle:i.a.instance("props.headerTitle||data.headerTitle")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x})}),Object(P.jsx)(v,{tabContainerModel:i.a.instance("props.tabsdata.sublocationTabs")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),subPanelContext:i.a.instance("fields.selectionData")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),callback:i.a.instance("props.tabsdata.tabCallbackApi")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),tabSetId:"primary",existWhen:i.a.instance("props.tabsdata.sublocationTabs.length>1")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x})}),Object(P.jsx)(l.default,{viewId:i.a.instance("props.provider.breadcrumbConfig.vm")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),viewPath:i.a.instance("viewPath")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),name:i.a.instance("props.provider.breadcrumbConfig.vm")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),subPanelContext:i.a.instance("{'searchState': props.searchState || fields.searchState}")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x})}),Object(P.jsx)(h.default,{showsearchbox:i.a.instance("props.showsearchbox")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x})}),Object(P.jsx)(b.default,{})]}),Object(P.jsx)(m,{provider:i.a.instance("props.provider")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),subPanelContext:i.a.instance("{xrtContext: props.xrtContext || {}, sublocationTabs: props.tabsdata && props.tabsdata.sublocationTabs, pageContext: {primarySublocTabState: fields.primaryActiveTabId, primaryActiveTabId: data.primaryActiveTab ? data.primaryActiveTab: undefined}}")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),searchState:i.a.instance("props.searchState||fields.searchState")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),baseSelection:i.a.instance("props.baseSelection")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),selectionModel:i.a.instance("selectionModels.searchPageSelectionModel")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),selectionData:i.a.instance("fields.selectionData")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x}),existWhen:i.a.instance("props.searchState||fields.searchState")({props:e,data:a,fields:C,dataProviders:o,ctx:w,i18n:j,actions:T,subPanelContext:t,viewPath:D,conditions:r,formProp:M,dispatch:s,selectionModels:p,editHandlers:S,chartProviders:u,ports:x})})]})}),void 0,{});t.default=x}}]);