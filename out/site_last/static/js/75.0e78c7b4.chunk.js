(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[75],{3038:function(e,o,r){"use strict";r.r(o),r.d(o,"awColorPickerRenderFunction",(function(){return n}));r(595),r(597);var c=r(2);const n=e=>{console.log(e);const{viewModel:o}=e;return Object(c.jsx)("input",{type:"color",value:e.selectedColor.value,onChange:o=>(o=>{let r={...e.selectedColor.getValue()};r.value=o,e.selectedColor.update(r)})(o.target.value)})}},966:function(e,o,r){"use strict";r.r(o);var c=r(5),n=r(0),t=(r(10),r(4)),i=(r(8),r(3),r(3038));t.a.instance;Object(n.h)("js/AwColorPickerService",(()=>Promise.resolve().then(r.bind(null,3038))));const l=Object(c.a)({schemaVersion:"1.0.0",lifecycleHooks:{render:"render"},actions:{render:{method:"awColorPickerRenderFunction",deps:"js/AwColorPickerService"}},props:{"selected-color":{type:"object"}},_viewModelId:"AwColorPicker",_uniqueViewModelId:"AwColorPicker",ctx:{}},i.awColorPickerRenderFunction,void 0,{});o.default=l}}]);