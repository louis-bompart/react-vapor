(window.webpackJsonp=window.webpackJsonp||[]).push([[1072],{2483:function(e,t,o){"use strict";o.r(t);var a=o(14),r=o(1),n=o(0),l=o(83),m=function(e){var t,o=e.date,m=e.format,c=e.tooltipFormat,i=a(o).format(null!=c?c:"LLL"),s=a.isMoment(o)?o:a(o);return t=m?n.isFunction(m)?m(s):s.format(m):s.format(),r.createElement(l.a,{title:i},t)};o.d(t,"TooltipExamples",(function(){return s}));var c,i=(c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return r.createElement("div",{className:"mt2"},r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Tooltip example"),r.createElement("div",{className:"form-control"},r.createElement(l.a,{title:"I am a tooltip!",placement:"right"},r.createElement("button",{type:"button",className:"btn"},"Hover me!")))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Tooltip example with a footer"),r.createElement("div",{className:"form-control"},r.createElement(l.a,{title:"I am a tooltip!",footer:"I have a footer",placement:"right"},r.createElement("button",{type:"button",className:"btn"},"Hover me!")))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Tooltip with top with the container body"),r.createElement("div",{className:"form-control"},r.createElement(l.a,{title:"I am a tooltip!"},r.createElement("button",{type:"button",className:"btn"},"Hover me!")))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"No Tooltip if the title is an empty string"),r.createElement("div",{className:"form-control"},r.createElement(l.a,{title:""},r.createElement("button",{type:"button",className:"btn"},"Hover me!")))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Time Tooltip example"),r.createElement("div",{className:"form-control"},r.createElement("button",{type:"button",className:"btn"},r.createElement(m,{date:a("2019-12-16"),format:function(e){return e.calendar()}})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Time Tooltip with custom formating example"),r.createElement("div",{className:"form-control"},r.createElement("button",{type:"button",className:"btn"},r.createElement(m,{date:a(),format:"LLL",tooltipFormat:"ddd, hA"})))))},t.description="Tooltips are short descriptions that appear when hovering an element. They are used to provide explanations that do not require nor allow user interaction, like tips and tricks.",t}(r.Component)}}]);
//# sourceMappingURL=1072.bundle.js.map