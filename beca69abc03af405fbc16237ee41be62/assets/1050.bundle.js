(window.webpackJsonp=window.webpackJsonp||[]).push([[1050],{2308:function(e,t,r){"use strict";r.r(t),r.d(t,"NavigationExamples",(function(){return i}));var n,a=r(0),o=r(216),c=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){var e={totalPages:10,totalEntries:50,currentPerPage:10,onPageClick:function(e){return alert("New page selected: "+(e+1))},onPerPageClick:function(e){return alert("New per page option selected: "+e)}};return a.createElement("div",{className:"mt2"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Navigation"),a.createElement(o.a,l({},e))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Navigation with loading"),a.createElement(o.a,l({},e,{isLoading:!0}))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Navigation with custom values"),a.createElement(o.a,l({},e,{previousLabel:"Précédente",nextLabel:"Prochaine",numberOfPagesToShow:3,currentPage:1,perPageLabel:"Items par page",perPageNumbers:[2,10,25,50]}))))},t}(a.Component)}}]);
//# sourceMappingURL=1050.bundle.js.map