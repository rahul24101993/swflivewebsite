(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[1811],{3210:function(t,a,e){"use strict";e.r(a),e.d(a,"intializeCommonLocation",(function(){return s}));var o=e(3101),n=e(12),i=e(505),c=e(3026),u=e(2956);const s=async()=>{const t=o.default.normalizeStateName(),a=n.default.getCtx("locationContext");n.default.updateCtx("locationContext",{"ActiveWorkspace:Location":t,"ActiveWorkspace:SubLocation":a&&a["ActiveWorkspace:SubLocation"]}),i.default.registerSubLocationContext(),c.a.registerKeyDownEvent();const e=await u.default.getTitles();n.default.updateCtx("location.titles",e);const s=await i.default.getAvailableSubpages(null),l=await u.default.constructTabsAndGetActiveTab(s);return{subLocationTabCond:o.default.updateTabs(null),...e,...l}};a.default={intializeCommonLocation:s}}}]);