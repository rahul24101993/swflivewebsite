(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[79],{959:function(e,t,n){"use strict";n.r(t);var a=n(5),o=n(0),i=(n(10),n(4)),c=(n(8),n(3),n(2994));i.a.instance;Object(o.h)("js/AwPageService",(()=>Promise.resolve().then(n.bind(null,2994)))),Object(o.h)("js/aw.narrowMode.service",(()=>n.e(18).then(n.bind(null,598))));const r=Object(a.a)({schemaVersion:"1.0.0",actions:{render:{method:"awPageRenderFunction",deps:"js/AwPageService"},initialize:{actionType:"batchJob",steps:[{action:"cleanCdmCache"},{action:"setBrowsertitle"},{action:"checkNarrowMode"}]},cleanCdmCache:{actionType:"Event",method:"Event",inputData:{events:[{name:"cdm.cleanCache",eventData:{}}]}},setBrowsertitle:{actionType:"JSFunctionAsync",method:"getBrowserTitle",outputData:{browserTitle:""},deps:"js/AwPageService"},checkNarrowMode:{actionType:"JSFunction",method:"checkNarrowMode",deps:"js/aw.narrowMode.service"},setOnNarrowModeTitle:{actionType:"JSFunction",method:"setOnNarrowModeTitle",inputData:{data:"{{data}}"},deps:"js/AwPageService"},handleNarrowModeChange:{actionType:"JSFunction",method:"handleNarrowModeChange",inputData:{eventdata:"{{parameters.eventData}}",data:"{{data}}"},deps:"js/AwPageService"},onSublocationSelectionChange:{actionType:"JSFunction",method:"onSubLocationContentSelectionChange",inputData:{eventdata:"{{parameters.eventData}}",data:"{{data}}"},deps:"js/AwPageService"}},data:{layoutSummaryOnly:null},conditions:{},onEvent:[{eventId:"aw.windowResize",action:"checkNarrowMode"},{eventId:"narrowModeChangeEvent",action:"handleNarrowModeChange",inputArgs:{eventData:"{{eventData}}"}},{eventId:"narrowSummaryLocationTitleClickEvent",action:"setOnNarrowModeTitle"},{eventId:"gwt.SubLocationContentSelectionChangeEvent",action:"onSublocationSelectionChange",inputArgs:{eventData:"{{eventData}}"}}],props:{"browser-sub-title":{type:"string"},"browser-title":{type:"string"},"header-title":{type:"string"},"location-panel-style":{type:"string"},"sub-location-tabs":{type:"object"}},lifecycleHooks:{onMount:"initialize",render:"render"},_viewModelId:"AwPage",_uniqueViewModelId:"AwPage",ctx:{}},c.awPageRenderFunction,void 0,{});t.default=r}}]);