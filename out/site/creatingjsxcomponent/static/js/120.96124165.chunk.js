(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[120],{2851:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(0),o=(a(10),a(4)),i=(a(8),a(3),a(3057));o.a.instance;Object(r.h)("js/AwShowObjectHeaderService",(()=>Promise.resolve().then(a.bind(null,3057))));const c=Object(n.a)({schemaVersion:"1.0.0",actions:{render:{method:"awShowObjectHeaderRenderFunction",deps:"js/AwShowObjectHeaderService"},onUnmount:{actionType:"JSFunction",method:"onUnmount",inputData:{data:"{{data._eventBusSubDefs}}"},deps:"js/AwShowObjectHeaderService"},initialize:{actionType:"JSFunctionAsync",method:"initialize",inputData:{},deps:"js/AwShowObjectHeaderService",outputData:{backBtnTitle:"backButtonTitle",contributedHeaderViews:"contributedHeaderViews"}},getHeaderProps:{actionType:"JSFunction",method:"getHeaderProps",inputData:{headerPropsData:"{{props.headerProps}}",headerData:"{{props.headerData}}"},deps:"js/AwShowObjectHeaderService",outputData:{headerProps:""}}},data:{backBtnTitle:"",selection:null,_activeTab:null,_eventBusSubDefs:[]},conditions:{},onEvent:[],lifecycleHooks:{render:"render",onMount:"initialize",onUnmount:"onUnmount",onUpdate:{action:"getHeaderProps",observers:["props.headerData"]}},props:{headervmo:{type:"viewModelObject"},"header-data":{type:"object"},"header-props":{type:"object"},"sub-panel-context":{type:"object"}},_viewModelId:"AwShowObjectHeader",_uniqueViewModelId:"AwShowObjectHeader"},i.awShowObjectHeaderRenderFunction,void 0,{});t.default=c},3057:function(e,t,a){"use strict";a.r(t),a.d(t,"getHeaderProps",(function(){return p})),a.d(t,"initialize",(function(){return w})),a.d(t,"onUnmount",(function(){return b})),a.d(t,"awShowObjectHeaderRenderFunction",(function(){return h}));var n=a(179),r=a(178),o=a(621),i=a(15),c=a(19),s=a(1),d=a.n(s),l=a(7),u=a(2);const p=(e,t)=>{if(!e||!t)return null;let a=[];for(const n of e)n.propertyName&&t[n.propertyName]&&a.push({property:t[n.propertyName],renderingHint:n.renderingHint,renderingStyle:n.renderingStyle});return a},w=async()=>{let e=await c.default.getCfg("headerContributions");e&&(e=d.a.sortBy(e,[function(e){return e.priority}]),e.reverse());return{backButtonTitle:await i.default.getLocalizedText("UIMessages","backBtn"),contributedHeaderViews:e||[]}},b=e=>{e&&e.length>0&&e.forEach((e=>{l.a.unsubscribe(e)}))},h=e=>j(e),j=e=>{const{viewModel:t,i18n:a,ctx:i}=e,{subPanelContext:c}=e,s=e.headerVMO?e.headerVMO:e.headervmo,d=e.children||[],{data:l}=t,{contributedHeaderViews:p,headerProps:w}=l;return Object(u.jsx)("div",{className:"aw-layout-flexColumn",children:Object(u.jsxs)("header",{"aria-label":a.applicationHeader,className:"sw-row aw-layout-header",children:[Object(u.jsxs)("div",{className:"aw-layout-headerLeft aw-layout-flexRow align-center",children:[s&&s.props&&Object(u.jsx)(r.default,{vmo:s}),Object(u.jsxs)("div",{className:"aw-layout-flexColumn aw-layout-headerContent",children:[Object(u.jsx)("div",{className:"aw-layout-flexRowContainer aw-layout-locationTitlePanel",children:d[0]?Object(u.jsx)("div",{className:"aw-layout-flexRow aw-layout-breadCrumbContainer",children:d[0]}):null}),Object(u.jsxs)("div",{className:"aw-layout-headerPropContainer aw-layout-flexRowContainer",children:[Object(u.jsx)("div",{className:"aw-layout-flexRowContainer AwVisualIndicatorContainer",children:s&&s.indicators&&Object(u.jsx)(n.default,{vmo:s})}),p?Object(u.jsx)(o.default,{props:{headerProps:w,contributedHeaders:p,context:c}}):""]})]})]}),Object(u.jsxs)("div",{className:"aw-layout-flexRowContainer align-center",children:[d[1],d[2]]})]})})}}}]);