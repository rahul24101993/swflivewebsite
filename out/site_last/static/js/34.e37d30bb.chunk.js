(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[34],{3044:function(e,n,t){"use strict";t.r(n),t.d(n,"awCellCommandListRenderFunction",(function(){return l}));var a=t(276),i=t(2);const l=e=>{let{alignment:n,commandContext:t,ctxMin:{commandDisplays:l},anchor:s}=e;return Object(i.jsxs)("div",{className:"aw-cell-command-bar",anchor:s,children:[l.filter((e=>e.visible&&(!e.cellDisplay||"TOP_RIGHT"===e.cellDisplay.position))).map((e=>Object(i.jsx)(a.default,{commandContext:t,command:e,alignment:n},e.id))),l.filter((e=>e.visible&&e.cellDisplay&&"MANUAL_STYLE"===e.cellDisplay.position)).map((e=>Object(i.jsx)(a.default,{commandContext:t,command:e,alignment:n},e.id))),Object(i.jsx)("div",{className:"aw-layout-flexRow"}),l.filter((e=>e.visible&&e.cellDisplay&&"MIDDLE_RIGHT"===e.cellDisplay.position)).map((e=>Object(i.jsx)(a.default,{commandContext:t,command:e,alignment:n},e.id))),Object(i.jsx)("div",{className:"aw-layout-flexRow"}),l.filter((e=>e.visible&&e.cellDisplay&&"BOTTOM_RIGHT"===e.cellDisplay.position)).map((e=>Object(i.jsx)(a.default,{commandContext:t,command:e,alignment:n},e.id)))]})}},967:function(e,n,t){"use strict";t.r(n);var a=t(5),i=t(0),l=(t(10),t(4)),s=(t(8),t(3),t(3044)),o=t(110);l.a.instance;const c={commandDisplays:o.getCommandStates};Object(i.h)("js/AwCellCommandListService",(()=>Promise.resolve().then(t.bind(null,3044))));const m=Object(a.a)({schemaVersion:"1.0.0",actions:{render:{method:"awCellCommandListRenderFunction",deps:"js/AwCellCommandListService"}},ctx:{commandDisplays:{parser:{method:"getCommandStates",deps:"js/command.service"}}},lifecycleHooks:{render:"render"},_viewModelId:"AwCellCommandList",_uniqueViewModelId:"AwCellCommandList"},s.awCellCommandListRenderFunction,void 0,c);n.default=m}}]);