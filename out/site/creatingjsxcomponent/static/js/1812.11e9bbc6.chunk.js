(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[1812],{2656:function(e,r,n){"use strict";n.r(r),n.d(r,"callGraphQL",(function(){return d}));var t=n(113),s=n(11),a=n(15),o=n(1),c=n.n(o),i=n(22),p=n(7),u=n(26),l=n(6);let d=function(e){return p.a.publish("progress.start",{}),t.a.instance.post(u.default.getBaseURL()+e.endPoint,e.request,{headers:{"Accept-Language":a.default.getLocale()}}).then((function(e){Object(i.a)(e,"No response given for null");var r=e.data;try{if(r.errors){if(c.a.isEmpty(r.data))return p.a.publish("progress.end",{}),s.a.instance.reject(r.errors[0].message);l.a.error(r.errors[0].message)}}catch(n){}return p.a.publish("progress.end",{}),"string"!==typeof r||-1===r.indexOf("<?xml version")?r:s.a.instance.reject("Unexpected response body for: null")}),(function(e){throw p.a.publish("progress.end",{}),e}))};const f={callGraphQL:d};r.default=f}}]);