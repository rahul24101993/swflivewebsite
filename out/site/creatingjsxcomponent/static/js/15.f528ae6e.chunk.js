(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[15],{3045:function(e,a,t){"use strict";t.r(a),t.d(a,"awPopupCommandBarRenderFunction",(function(){return o}));var n=t(968),i=t(2);const o=e=>{let{alignment:a,viewModel:{data:{commandList:t=null,visibleServerCommands:o}},childCommandClickCallback:s,visibilityLoader:c,context:r,anchor:d}=e;return!t||c&&!o?Object(i.jsxs)("div",{className:"aw-widgets-noResultsLabel aw-popup-command-bar",children:[Object(i.jsx)("div",{className:"aw-layout-flexRow"}),Object(i.jsx)("div",{className:"aw-jswidgets-loading"}),Object(i.jsx)("div",{className:"aw-layout-flexRow"})]}):Object(i.jsx)(n.default,{commandList:t,alignment:a,childCommandClickCallback:s,visibleServerCommands:o,commandContext:r,visibilityLoader:c,anchor:d})}},952:function(e,a,t){"use strict";t.r(a);var n=t(5),i=t(0),o=(t(10),t(4)),s=(t(8),t(3),t(3045));o.a.instance;Object(i.h)("js/AwCommandBarService",(()=>Promise.resolve().then(t.bind(null,275)))),Object(i.h)("js/AwPopupCommandBarService",(()=>Promise.resolve().then(t.bind(null,3045))));const c=Object(n.a)({schemaVersion:"1.0.0",actions:{initialize:{actionType:"JSFunctionAsync",deps:"js/AwCommandBarService",method:"awCommandBarInitFunction",inputData:{0:{anchor:"{{props.anchor}}"}},outputData:{commandList:"commandList",trace:"trace"}},refreshServerVisibility:{actionType:"JSFunctionAsync",deps:"js/AwCommandBarService",method:"refreshServerVisibility",inputData:{0:{anchor:"{{props.anchor}}",commandList:"{{data.commandList}}",visibilityLoader:"{{props.visibilityLoader}}",trace:"{{data.trace}}"}},outputData:{visibleServerCommands:""},events:{success:[{name:"nxCommands.update",condition:"ctx.aw_hosting_enabled && ctx.aw_host_type === 'NX'",eventData:{name:"visibleServerCommands",data:""}}]}},render:{method:"awPopupCommandBarRenderFunction",options:{elementRefList:["commandBar"]},deps:"js/AwPopupCommandBarService"}},lifecycleHooks:{onMount:"initialize",render:"render",onUpdate:{action:"refreshServerVisibility",observers:["props.visibilityLoader","viewModel.data.commandList"]}},props:{alignment:{type:"string"},anchor:{type:"string"},"child-command-click-callback":{type:"object"},"visibility-loader":{type:"object"},context:{type:"object"}},_viewModelId:"AwPopupCommandBar",_uniqueViewModelId:"AwPopupCommandBar",ctx:{aw_hosting_enabled:{type:"object"},aw_host_type:{type:"object"}}},s.awPopupCommandBarRenderFunction,{elementRefList:["commandBar"]},{});a.default=c}}]);