(window.webpackJsonp=window.webpackJsonp||[]).push([[1040],{2330:function(t,e,n){"use strict";n.r(e),n.d(e,"LastUpdatedExamples",(function(){return s}));var o,r=n(1),a=n(572),p=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p(e,t),e.prototype.render=function(){return r.createElement("div",{className:"mt2",style:{width:400}},r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Last update"),r.createElement(a.a,{id:"LastUpdatedExampleComponent"})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Last update with custom time"),r.createElement(a.a,{id:"LastUpdatedExampleComponentWithTime",time:new Date(+new Date-Math.floor(1e10*Math.random()))})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Last update with label changed"),r.createElement(a.a,{id:"LastUpdatedExampleComponentWithLabel",label:"Dernière modification à"})))},e}(r.Component)},572:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o,r=n(9),a=n.n(r),p=n(14),s=n(1),c=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.componentWillMount=function(){this.props.onRender&&this.props.onRender()},e.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy()},e.prototype.render=function(){var t=this.props.label||"Last update:",e=this.props.time||new Date,n=p(e).format("LTS");return s.createElement("div",{className:a()("table-last-update",this.props.className)},t," ",n)},e}(s.Component)}}]);
//# sourceMappingURL=1040.bundle.js.map