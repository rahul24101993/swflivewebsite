(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[10],{128:function(e,s,t){"use strict";let n={},r=null,o=new Map,i=()=>"function"===typeof window.ResizeObserver;n={observe:(e,s)=>(o.set(e,s),!r&&i()&&(r=new ResizeObserver((e=>{e.forEach((e=>{o.has(e.target)&&o.get(e.target)(e)}))}))),r.observe(e),()=>{r.unobserve(e),o.delete(e)}),supportsResizeObserver:i},s.a=n}}]);