(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{398:function(e,t,n){"use strict";n.r(t),n.d(t,"ActionBarExamples",(function(){return l}));var o,i=n(0),a=n(9),r=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=[{name:"Link to Coveo",link:"http://coveo.com",target:"_blank",icon:"exit",primary:!0,enabled:!0},{name:"action1",trigger:function(){return alert("Action 1 was triggered")},enabled:!0},a.ACTION_SEPARATOR,{name:"action2",trigger:function(){return alert("Action 2 was triggered")},enabled:!0},{name:"Link to Coveo (disabled)",link:"http://coveo.com",target:"_blank",icon:"exit",primary:!0,enabled:!1,hideDisabled:!1,tooltip:"You cannot access Coveo's website at the moment.",tooltipPlacement:"bottom"},{name:"visibly disabled",trigger:function(){return alert("I will never be triggered")},target:"_blank",icon:"open",primary:!0,enabled:!1,hideDisabled:!1,tooltip:"You cannot trigger me.",tooltipPlacement:"bottom"}];return i.createElement(a.Section,{level:1,title:"ActionBar examples"},i.createElement(a.Section,{level:2,title:"Action bar without actions"},i.createElement(a.ActionBar,null)),i.createElement(a.Section,{level:2,title:"Action bar with actions"},i.createElement(a.ActionBar,{actions:e})),i.createElement(a.Section,{level:2,title:"Action bar with default classes turned off and extra classes"},i.createElement(a.ActionBar,{actions:e,removeDefaultContainerClasses:!0,extraContainerClasses:["coveo-table-actions-container","p2"]})),i.createElement(a.Section,{level:2,title:"Action bar with small actions"},i.createElement(a.ActionBar,{actions:e,withSmallActions:!0})),i.createElement(a.Section,{level:2,title:"Action bar disabled"},i.createElement(a.ActionBar,{actions:e,disabled:!0})),i.createElement(a.Section,{level:2,title:"Action bar disabled with a secondary action converted to a primary action"},i.createElement(a.ActionBar,{actions:[{name:"Link to Coveo (disabled)",link:"http://coveo.com",target:"_blank",icon:"exit",primary:!0,enabled:!1,hideDisabled:!1,tooltip:"You cannot access Coveo's website at the moment.",tooltipPlacement:"bottom"},{name:"visibly disabled",trigger:function(){return alert("I will never be triggered")},target:"_blank",icon:"open",primary:!1,enabled:!1,hideDisabled:!1,tooltip:"You cannot trigger me.",tooltipPlacement:"bottom"}],disabled:!0})))},t}(i.Component)}}]);
//# sourceMappingURL=123.bundle.js.map