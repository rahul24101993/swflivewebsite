(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[100],{3104:function(n,t,e){"use strict";e.r(t),e.d(t,"executeUrlCommand",(function(){return u}));var a=e(43),c=e(277),o=e(110),r=e(6),i=e(12);let m=null;const u=function(n){let{runActionWithViewModel:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const e=a.a.instance.params.cmdId||a.a.instance.params.commandID;if(e&&!m&&t)return m=!0,c.a.instance((function(){let c={ctx:i.default.getCtx(),commandContext:n};return o.default.executeCommand(e,a.a.instance.params.cmdArg,{},c,t).then((function(){r.a.trace("Executed command: "+e+" with args "+a.a.instance.params.cmdArg+" from url")}),(function(n){r.a.error(n)})).then((function(){if(!a.a.instance.params.commandId)return a.a.instance.go(".",{cmdId:null,cmdArg:null},{location:"replace"})})).then((function(){m=null}))}),500)};t.default={executeUrlCommand:u}}}]);