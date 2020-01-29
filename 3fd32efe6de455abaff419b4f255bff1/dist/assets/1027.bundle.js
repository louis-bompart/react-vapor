(window.webpackJsonp=window.webpackJsonp||[]).push([[1027],{2324:function(e,t,n){"use strict";n.r(t),n.d(t,"FlippableExamples",(function(){return c}));var r,o=n(1),l=n(633),i=n(763),a=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this;return o.createElement("div",{className:"mt2"},o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"Default Flippable"),o.createElement("div",{className:"form-control flex"},o.createElement(l.a,{id:"flippable-example1",front:o.createElement("div",{className:"bg-white center bold p2"},"Some content on the front."),back:o.createElement("div",{className:"bg-light-grey bold p2"},"Some content on the back.")}))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"Flippable with redux state"),o.createElement("div",{className:"form-control flex",style:{width:"300px"}},o.createElement(i.a,{id:"flippable-example2",front:o.createElement("div",{className:"bg-white center bold p2"},o.createElement("span",null,"Some content on the front ",o.createElement("br",null),"(Click me)")),back:o.createElement("div",{className:"bg-light-grey bold p2",style:{width:"300px"}},"Some content on the back.")}))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"Flippable with uneven sized sides and redux state"),o.createElement("div",{className:"form-control flex"},o.createElement(i.a,{id:"flippable-example3",front:o.createElement("div",{className:"bg-white center bold p2"},o.createElement("span",null,"Some content on the front ",o.createElement("br",null),"(Click me)")),back:o.createElement("div",{className:"bg-light-grey bold p2",style:{width:"300px",height:"200px"}},"Some content on the back.")}))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"Scoped Flippable with redux state"),o.createElement("div",{className:"form-control flex"},o.createElement(i.a,{id:"flippable-example4",front:o.createElement("div",{className:"bg-white center bold p2"},o.createElement("span",null,"Some content on the front ",o.createElement("br",null),"(Click me)")),back:o.createElement("div",{className:"bg-light-grey bold p2 full-content-x"},"Some content on the back."),allowUnflip:function(t){return e.scope.contains(t)}}),o.createElement("div",{style:{width:"200px"},className:"ml2 bg-white",ref:function(t){return e.scope=t}},o.createElement("p",{className:"p2"},"Only clicks inside here can unflip the flipped flippable because it's specified as scope by allowUnflip property.")))))},t}(o.Component)},494:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={isIE:function(){return-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>-1}}},633:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r,o=n(9),l=n(1),i=n(12),a=n(0),c=n(494),p=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},f=["id","front","back","className","allowUnflip","onRender","onDestroy","onFlip","onUnflip","isFlipped"],d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClickOnFront=function(){t.props.onFlip&&!t.props.isFlipped&&t.props.onFlip()},t.handleOutsideClick=function(e){if(t.props.isFlipped){var n=i.findDOMNode(t.frontside),r=i.findDOMNode(t.backside),o=e.target;r.contains(o)||n.contains(o)||t.props.allowUnflip&&!t.props.allowUnflip(o)||(t.handleUnflip(),e.preventDefault())}},t}return p(t,e),t.prototype.componentWillMount=function(){this.props.onRender&&this.props.onRender(),document.addEventListener("click",this.handleOutsideClick)},t.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.handleOutsideClick),this.props.onDestroy&&this.props.onDestroy()},t.prototype.render=function(){var e=this,n=o(c.a.isIE()?"flippable-ie":t.CONTAINER_CLASSNAME,this.props.isFlipped?"show-on-top":"",this.props.className),r=o(t.FLIPPER_CLASSNAME,this.props.isFlipped?t.triggers.BACK:t.triggers.FRONT);return l.createElement("div",s({className:n},a.omit(this.props,f)),l.createElement("div",{className:r},l.createElement("div",{className:t.sides.FRONT,onClick:this.handleClickOnFront,ref:function(t){return e.frontside=t}},this.props.front),l.createElement("div",{className:t.sides.BACK,ref:function(t){return e.backside=t}},this.props.back)))},t.prototype.handleUnflip=function(){this.props.onUnflip&&this.props.onUnflip()},t.CONTAINER_CLASSNAME="flippable",t.FLIPPER_CLASSNAME="flipper",t.sides={FRONT:"flipper-front",BACK:"flipper-back"},t.triggers={FRONT:"show-front",BACK:"show-back"},t.defaults={isFlipped:!1},t}(l.Component)},763:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(56),o=n(0),l=n(55),i=n(633),a=n(68),c=Object(r.b)((function(e,t){var n=o.findWhere(e.flippables,{id:t.id});return{isFlipped:n&&n.flipped}}),(function(e,t){return{onRender:function(){return e(Object(a.b)(t.id))},onDestroy:function(){return e(Object(a.d)(t.id))},onFlip:function(){return e(Object(a.c)(t.id,!0))},onUnflip:function(){return e(Object(a.c)(t.id,!1))}}}),l.c.mergeProps)(i.a)}}]);
//# sourceMappingURL=1027.bundle.js.map