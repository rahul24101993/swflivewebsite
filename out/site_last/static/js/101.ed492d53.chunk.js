(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[101],{3103:function(e,r,a){"use strict";a.r(r),a.d(r,"populateSupportedViewModes",(function(){return c})),a.d(r,"handleViewModechange",(function(){return y})),a.d(r,"setViewMode",(function(){return w}));var t=a(6),o=a(12),n=a(3059),i=a(65),s=a(598),d=a(11);const c=e=>{let r=e||{SummaryView:{primaryWorkArea:"list",secondaryWorkArea:!0},TableSummaryView:{primaryWorkArea:"table",secondaryWorkArea:!0},ListView:{primaryWorkArea:"list",secondaryWorkArea:!1},TableView:{primaryWorkArea:"table",secondaryWorkArea:!1},ImageView:{primaryWorkArea:"image",secondaryWorkArea:!1}};return n.a.setAvailableViewModes(Object.keys(r)),r},l=(e,r)=>{const a=()=>({viewSuffix:r.primaryWorkArea,showSecondaryWorkArea:r.secondaryWorkArea}),t=i.a.getActiveEditHandler();return t&&!t.editInProgress()?d.a.instance.resolve(a()):i.a.leaveConfirmation().then((()=>a()))},u=e=>"AW_SubLocation_"+(-1!==e.indexOf(":")?e.split(":")[1]:"Generic")+"_ViewMode",p=e=>{let r=o.default.getCtx("preferences."+u(e));return r?r[0]:r},y=(e,r,a)=>{if(e){var n=e[a];n||(a=r.defaultDisplayMode?r.defaultDisplayMode:Object.keys(e)[0],t.a.warn("Unknown view mode, defaulting to",a),n=e[a]);const i=o.default.getCtx("tcSessionData");return p(r.nameToken)!==a&&i&&((e,r)=>{o.default.updatePartialCtx("preferences."+u(r),[e])})(a,r.nameToken),l(0,n)}},w=(e,r)=>{let{defaultDisplayMode:a,nameToken:t}=r,o=t&&p(t);if(!a||o&&e[o]){if(s.default.isNarrowMode()){let r=e.hasOwnProperty(a)?e[a]:{primaryWorkArea:"list",secondaryWorkArea:!0};return l(0,r)}o=t&&p(t),o?n.a.changeViewMode(o):e.hasOwnProperty("SummaryView")?n.a.changeViewMode("SummaryView"):n.a.changeViewMode(Object.keys(e)[0])}else n.a.changeViewMode(a)}}}]);