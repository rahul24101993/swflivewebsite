(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[70],{2992:function(e,t,n){"use strict";n.r(t),n.d(t,"handleCompleteEvent",(function(){return m})),n.d(t,"updateBaseSelection",(function(){return f})),n.d(t,"initializePage",(function(){return p})),n.d(t,"cleanupPage",(function(){return C})),n.d(t,"getContext",(function(){return g}));var a=n(1),o=n.n(a),i=n(12),c=n(7),r=n(43),s=n(2993),d=n(51),l=n(80);const u={sublocation:"sublocation",taiCmd:"activeToolsAndInfoCommand",navCmd:"activeNavigationCommand",sidenavCmd:"sidenavCommandId"},m=e=>{let t=e.id,n=i.default.getCtx("sidenavCommandId");if("toolAndInfoPanel"===e.source){var a=i.default.getCtx("activeToolsAndInfoCommand");a&&(t="aw_toolsAndInfo",n=a.commandId),i.default.unRegisterCtx("activeToolsAndInfoCommand")}else if("navigationPanel"===e.source){var o=i.default.getCtx("activeNavigationCommand");o&&(t="aw_navigation",n=o.commandId),i.default.unRegisterCtx("activeNavigationCommand")}n&&c.a.publish("awsidenav.openClose",{id:t,commandId:n})},f=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"s_uid";e&&!r.a.instance.params[n]&&(s.a.updateSelection([e],e),t&&t.update({selected:[e],pselected:e,source:"base"}))},p=async(e,t)=>{e||(e=r.a.instance.current.data?r.a.instance.current.data:{}),e.name=e.name?e.name:r.a.instance.current.name,e.parentStateName=e.parentStateName?e.parentStateName:r.a.instance.current.parent,(e=>{var t={location:"locationContext",sublocationInLocation:"ActiveWorkspace:SubLocation",...u},n=i.default.getCtx(t.location)||{};n[t.sublocationInLocation]=e&&e.name.replace(/_/g,"."),i.default.registerCtx(t.location,n);var a={clientScopeURI:e.clientScopeURI,historyNameToken:e.name,label:e.label,nameToken:e.nameToken};i.default.registerCtx(t.sublocation,a),i.default.registerCtx("sublocationTitleErrorMessage",null)})(e);const n=(e=>{if(e.context){const t=Object.keys(e.context);return t.forEach((function(t){const n=e.context[t],a=i.default.getCtx(t);n instanceof Array||"string"===typeof n||!a?i.default.registerCtx(t,o.a.cloneDeep(n)):i.default.registerCtx(t,{...a,...o.a.cloneDeep(n)})})),t}return null})(e);s.a.updateSelection(t?[t]:void 0,t);const a=e.policy&&await d.a.registerPolicyAsync(e.policy);return{subLocationPreference:e.awSubLocationPref||e.context||{},stateContext:n,propertyPolicyId:a}},C=(e,t)=>{e&&e.length>0&&e.forEach(i.default.unRegisterCtx),Object.keys(u).forEach(i.default.unRegisterCtx),s.a.updateSelection(void 0,void 0),d.a.unregister(t)},g=(e,t)=>[new l.a({ctxParameters:[],additionalParameters:[t.provider,t.subPanelContext],compute:()=>({provider:t.provider,...t.subPanelContext})})]}}]);