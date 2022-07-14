(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[1817],{2869:function(e,t,n){"use strict";n.r(t),n.d(t,"constants",(function(){return c})),n.d(t,"activeSplitterData",(function(){return d})),n.d(t,"initSplitter",(function(){return v})),n.d(t,"mouseDownEvent",(function(){return w})),n.d(t,"mouseUpEventHandler",(function(){return g})),n.d(t,"mouseMoveEventHandler",(function(){return y})),n.d(t,"updateActiveSplitter",(function(){return x})),n.d(t,"updateAreaSize",(function(){return h})),n.d(t,"splitterLimit",(function(){return E})),n.d(t,"reportError",(function(){return z})),n.d(t,"updateViewMode",(function(){return A}));var i=n(7),r=n(32),a=n(6),o=n(1),l=n.n(o),s=n(82);let u;const c={minSize1:20,minSize2:20};let d=null,p=null,m=l.a.debounce((function(e,t,n){p&&p({splitter:e.splitter,area1:t,area2:n}),i.a.publish("aw-splitter-update",{splitter:e.splitter,area1:t,area2:n})}),1e3,{maxWait:2e4,trailing:!0,leading:!1});const v=(e,t,n)=>{let i=t;var a;let o=e.get("splitter").current;var l=o.previousElementSibling,s=o.nextElementSibling;if(!l&&!s){let e=o.closest(".aw-xrt-columnContentPanel");e&&(l=e.previousElementSibling,s=e.nextElementSibling,e.style["min-width"]="16px",e.style.width="16px",e.style["max-width"]="16px",e.style.padding="0px",e.style.overflow="hidden",e.parentElement.style.flexWrap="nowrap",e.parentElement.style.height="100%",e.parentElement.parentElement.style.height="100%",l.style.minWidth="0px",s.style.minWidth="0px",o.style.height=window.getComputedStyle(e).getPropertyValue("height"))}i.direction&&"HORIZONTAL"===i.direction.toUpperCase()?o.style.cursor="row-resize":o.style.cursor="col-resize",o.onmousedown=e=>u.mouseDownEvent(e,t.action),o.ontouchstart=e=>u.mouseDownEvent(e,t.action),"true"===i.isPrimarySplitter&&(n&&(u.viewModeContext=n),r.default.get(u.viewModeContext)&&(a=JSON.parse(r.default.get(u.viewModeContext)))&&l&&s&&(l.style.flexBasis=a.area1Size+"px",l.style.webkitFlexBasis=a.area1Size+"px",l.style.flexGrow="1",l.style.flexShrink="1",s.style.flexBasis=a.area2Size+"px",s.style.webkitFlexBasis=a.area2Size+"px"))};let S=function(e){var t=e.contentWindow.onmousemove;e.contentWindow.onmousemove=function(n){t&&t(n);var i=document.createEvent("MouseEvents"),r=e.getBoundingClientRect();i.initMouseEvent("mousemove",!0,!1,window,n.detail,n.screenX,n.screenY,n.clientX+r.left,n.clientY+r.top,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,n.button,null),e.dispatchEvent(i)},e.contentWindow.onmouseup=function(t){var n=document.createEvent("MouseEvents"),i=e.getBoundingClientRect();n.initMouseEvent("mouseup",!0,!1,window,t.detail,t.screenX,t.screenY,t.clientX+i.left,t.clientY+i.top,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,null),e.dispatchEvent(n)}},f=function(e){try{return"onmousemove"in e.contentWindow}catch(t){return!1}},w=function(e,t){if(e=e||window.event,window.getSelection){var n=window.getSelection();null!==n.focusNode&&n.removeAllRanges()}else document.selection&&document.selection.empty();e.stopPropagation(),e.preventDefault();var i=e.clientX,r=e.clientY;i||r||(i=e.touches[0].clientX,r=e.touches[0].clientY);var a=e.currentTarget,o=a.previousElementSibling,l=a.nextElementSibling;if(!o&&!l){let e=a.closest(".aw-xrt-columnContentPanel");e&&(o=e.previousElementSibling,l=e.nextElementSibling)}var s=parseInt(a.getAttribute("min-size-1")),c=parseInt(a.getAttribute("min-size-2")),d=a.getAttribute("isPrimarySplitter"),m=a.getAttribute("viewMode");s||c||(s=u.constants.minSize1,c=u.constants.minSize2);var v=a.style.cursor;u.activeSplitterData={splitter:a,area1:o,area2:l,minSize1:s,minSize2:c,direction:v,isPrimarySplitter:d,viewMode:m,x:i,y:r},p=t;for(var w=document.getElementsByTagName("iframe"),x=0;x<w.length;x++)f(w[x])&&S(w[x]);document.addEventListener("mousemove",y),document.addEventListener("mouseup",g),document.addEventListener("touchmove",y),document.addEventListener("touchend",g),document.addEventListener("touchcancel",g)},g=function(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",g),document.removeEventListener("touchcancel",g);for(var e,t=document.getElementsByTagName("iframe"),n=0;n<t.length;n++)f(t[n])&&((e=t[n]).contentWindow.onmousemove=null,e.contentWindow.onmouseup=null);if(u.activeSplitterData.viewMode&&(u.viewModeContext=u.activeSplitterData.viewMode),u.activeSplitterData.isPrimarySplitter&&u.viewModeContext){u.activeSplitterData.area1.style.flexGrow="1",u.activeSplitterData.area1.style.flexShrink="1";var i=u.activeSplitterData.area1.clientWidth,a=u.activeSplitterData.area2.clientWidth,o={area1Size:i,area2Size:a};r.default.publish(u.viewModeContext,JSON.stringify(o)),((e,t)=>{let n={sanAnalyticsType:"Splitter",sanCommandId:"Splitter",sanCommandTitle:"Splitter"};n.sanPrimaryPercentage=(e/(e+t)*100).toFixed(2),n.sanPixelSize=e,s.a.logCommands(n)})(i,a)}u.activeSplitterData=null},y=function(e){if(e=e||window.event,null!==u.activeSplitterData){e.preventDefault();var t=e.clientX,n=e.clientY;if(!t&&!n){var i=e.originalEvent.touches[0];t=i.clientX,n=i.clientY}u.updateActiveSplitter(t,n)}},x=function(e,t){var n=u.activeSplitterData;if(n){var i=e-n.x,r=t-n.y;if(0!==i||0!==r){var a=n.area1,o=n.area2,l=n.minSize1,s=n.minSize2,c=parseFloat(a.style.flexGrow),d=parseFloat(o.style.flexGrow);if("row-resize"===n.direction){var p=a.clientHeight,v=o.clientHeight;if(u.splitterLimit(p,v,r,l,s))return void(c||d||(r>0&&v!==s?(u.updateAreaSize(a,c,p,v-s),u.updateAreaSize(o,d,s,"")):r<0&&p!==l&&(u.updateAreaSize(a,c,l,""),u.updateAreaSize(o,d,v,p-l)),n.y=n.splitter.getBoundingClientRect().top-10,n.x=e));u.updateAreaSize(a,c,p,r),u.updateAreaSize(o,d,v,-r)}else{var S=a.offsetWidth,f=o.offsetWidth;if(u.splitterLimit(S,f,i,l,s))return void(c||d||(i>0&&f!==s?(u.updateAreaSize(a,c,S,f-s),u.updateAreaSize(o,d,s,"")):i<0&&S!==l&&(u.updateAreaSize(a,c,l,""),u.updateAreaSize(o,d,f,S-l)),n.x=n.splitter.getBoundingClientRect().right-10,n.y=t));u.updateAreaSize(a,c,S,i),u.updateAreaSize(o,d,f,-i)}n.x=e,n.y=t,m(n,a,o)}}},h=function(e,t,n,i){var r=n+i;e.getAttribute("when")&&(e.style.maxWidth="100%"),e.style.flexBasis=r.toString()+"px",e.style.webkitFlexBasis=r.toString()+"px"},E=function(e,t,n,i,r){if(n>0){if(t-n<r)return!0}else if(e+n<i)return!0;return!1},z=function(e){a.a.warn("awSplitterService:"+e)},A=function(e){return e};u={constants:c,activeSplitterData:d,initSplitter:v,mouseDownEvent:w,mouseUpEventHandler:g,mouseMoveEventHandler:y,updateActiveSplitter:x,updateAreaSize:h,splitterLimit:E,reportError:z,updateViewMode:A},t.default=u}}]);