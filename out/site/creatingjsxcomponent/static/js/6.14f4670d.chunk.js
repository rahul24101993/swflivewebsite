(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[6],{383:function(t,e,s){"use strict";var i=s(78),n=s(1),o=s.n(n);const c="aria-selected";function a(){}a.prototype.init=function(t,e,s){this.ROLE_OPTION='[role="'.concat(s,'"]'),this.childSelector=s,this.node=t,this.options=e,this.options.autoScroll=!1!==this.options.autoScroll,this.options.listSelector=e.listSelector||".aw-widgets-cellListItem",this.activeDescendant=null,this.resources=[],this.handleFocusChange=function(){},this.registerEvents()},a.prototype.clean=function(){this.resources.forEach((t=>{t()}))},a.prototype.registerEvents=function(){this.node&&(this._setupFocus=this.setupFocus.bind(this),this._setupBlur=this.setupBlur.bind(this),this._checkKeyPress=this.checkKeyPress.bind(this),this._checkClickItem=this.checkClickItem.bind(this),this.node.addEventListener("focus",this._setupFocus),this.node.addEventListener("blur",this._setupBlur),this.node.addEventListener("keydown",this._checkKeyPress),this.node.addEventListener("click",this._checkClickItem),this.resources.push((()=>{this.node.removeEventListener("focus",this._setupFocus),this.node.removeEventListener("blur",this._setupBlur),this.node.removeEventListener("keydown",this._checkKeyPress),this.node.removeEventListener("click",this._checkClickItem)})))},a.prototype.setupFocus=function(){if(this.activeDescendant&&"0"!==this.node.getAttribute("tabindex"))return void this.focusItem(this.activeDescendant);let t=this.node.querySelector("li".concat(this.ROLE_OPTION,"[").concat(c,'="true"]'));t?(this.activeDescendant=t,this.focusItem(this.activeDescendant)):this.focusFirstItem()},a.prototype.checkContextMenu=function(t){t.preventDefault(),this.options&&this.options.apis&&this.options.apis.handleContextMenu(t)},a.prototype.setupBlur=function(){this.activeDescendant&&(this.activeDescendant=null)},a.prototype.focusFirstItem=function(){var t=this.node.querySelector(this.ROLE_OPTION);t&&this.focusItem(t)},a.prototype.focusLastItem=function(){var t=this.node.querySelectorAll(this.ROLE_OPTION);t.length&&this.focusItem(t[t.length-1])},a.prototype.focusNextItem=function(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var s=this.node.querySelectorAll(this.ROLE_OPTION),i=e?t.nextElementSibling:t.previousElementSibling;if(i&&-1!==o.a.indexOf(s,i))this.focusItem(i);else{const i=o.a.indexOf(s,t);e&&i>-1&&s.length>i+1?this.focusItem(s[i+1]):!e&&i-1>-1&&this.focusItem(s[i-1])}},a.prototype.isFocusableListItem=function(t){return o.a.isEqual(t.target.closest(this.options.listSelector),document.activeElement)},a.prototype.checkClickItem=function(t){if(!this.isFocusableListItem(t))return;let e=t.target.closest(this.options.listSelector);this.focusItem(e,!0),this.options.setAriaAttributes&&this.toggleSelectItem(e)},a.prototype.toggleSelectItem=function(t){let e=this.node.querySelector("li".concat(this.ROLE_OPTION,"[").concat(c,'="true"]'));e&&!o.a.isEqual(e,t)&&e.setAttribute(c,"false"),t.setAttribute(c,"true"===t.getAttribute(c)?"false":"true")},a.prototype.handleEnterKey=function(t,e,s){var i;(t.target.getAttribute("role")===this.childSelector&&!this.options.useCtrl||this.options.useCtrl&&e)&&(t.preventDefault(),this.options.setAriaAttributes&&this.toggleSelectItem(s),i=0===t.target.tabIndex?t.target:s,this.options&&this.options.apis&&this.options.apis.selectItem(t,i))},a.prototype.handleTabKey=function(t,e){".aw-jswidgets-arrayValueCellListItem"===this.options.listSelector&&this.node.querySelectorAll(this.ROLE_OPTION).length>0&&0===this.node.querySelectorAll("li.aw-state-selected").length&&!e&&(t.preventDefault(),this.node.parentNode&&this.node.parentNode.nextElementSibling&&this.node.parentNode.nextElementSibling.focus())},a.prototype.checkKeyPress=function(t){if(this.isFocusableListItem(t)){var e=t.key||t.code,s=t.ctrlKey||t.metaKey,n=t.shiftKey||t.metaKey;o.a.includes(this.node.querySelectorAll(this.ROLE_OPTION),this.activeDescendant)||(this.activeDescendant=null);var a=this.activeDescendant||this.node.querySelector("li".concat(this.ROLE_OPTION,"[").concat(c,'="true"]'));if(a)switch(e){case i.a.PAGE_UP:case i.a.PAGE_DOWN:case i.a.UP:case i.a.ARROW_UP:case i.a.DOWN:case i.a.ARROW_DOWN:case i.a.LEFT:case i.a.ARROW_LEFT:case i.a.RIGHT:case i.a.ARROW_RIGHT:t.preventDefault(),e===i.a.PAGE_UP||e===i.a.UP||e===i.a.ARROW_UP||e===i.a.LEFT||e===i.a.ARROW_LEFT?this.focusNextItem(a,!1):this.focusNextItem(a);break;case i.a.HOME:t.preventDefault(),this.focusFirstItem();break;case i.a.END:t.preventDefault(),this.focusLastItem();break;case i.a.SPACE:case i.a.RETURN:case i.a.ENTER:this.handleEnterKey(t,s,a);break;case i.a.TAB:this.handleTabKey(t,n);break;case i.a.CONTEXTMENU:this.checkContextMenu(t)}else this.setupFocus()}},a.prototype.roveTabIndex=function(t){t&&t.setAttribute("tabindex",-1)},a.prototype.focusItem=function(t,e){this.roveTabIndex(this.activeDescendant),t.setAttribute("tabindex",0),t.focus(),this.setHandleFocusChangeOnItem(t),this.activeDescendant=t,this.options.autoScroll&&!e&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),this.handleFocusChange(null,t),"0"===this.node.getAttribute("tabindex")&&this.node.setAttribute("tabindex",-1)},a.prototype.setHandleFocusChange=function(t){this.handleFocusChange=t},a.prototype.setHandleFocusChangeOnItem=function(t){let e=()=>{this.handleFocusChange(null,t)},s=()=>{setTimeout((()=>{this.options&&this.options.apis&&this.options.apis.handleBlurOnItem&&this.options.apis.handleBlurOnItem(t,document.activeElement)}))};this.activeDescendant&&(this.activeDescendant.removeEventListener("focus",e),this.activeDescendant.removeEventListener("blur",s)),t.addEventListener("focus",e),t.addEventListener("blur",s)},e.a=a}}]);