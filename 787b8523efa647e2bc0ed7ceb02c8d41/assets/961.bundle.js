(window.webpackJsonp=window.webpackJsonp||[]).push([[961],{2191:function(e,t,n){"use strict";n.r(t),n.d(t,"CheckboxExamples",(function(){return f}));var r=n(0),a=n(187),i=n(92),o=n(537),l=n(578),c=n(175),s=n(579),p=n(753),u=n(55),d=n(754),h=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return o},f=function(){return r.createElement(c.a,null,r.createElement(b,null),r.createElement(m,null))};f.description="Checkboxes allow users to select multiple options from a set.";var b=function(){var e=h(r.useState(!1),2),t=e[0],n=e[1];return r.createElement(c.a,{title:"Checkbox set"},r.createElement(c.a,{level:2,title:"Checkboxes with labels"},r.createElement(l.a,{label:"The label of the checkbox set"},r.createElement(p.a,{id:"checkbox1",clearSides:!0},r.createElement(o.a,null,"An unchecked checkbox")),r.createElement(p.a,{id:"checkbox2",defaultChecked:!0,clearSides:!0},r.createElement(o.a,null,"A checked checkbox")),r.createElement(p.a,{id:"checkbox3",disabled:!0,clearSides:!0},r.createElement(o.a,null,"A force disabled checkbox")),r.createElement(p.a,{id:"checkbox4",indeterminate:!0,clearSides:!0},r.createElement(o.a,null,"A force checked and indeterminate (partially selected) checkbox")),r.createElement(s.a,{id:"checkbox5",checked:t,onClick:function(){return n(!t)}},r.createElement(o.a,null,"A checkbox with local state")))),r.createElement(c.a,{level:2},r.createElement(l.a,{label:"A checkbox with no label"},r.createElement(p.a,{id:"checkbox-nolabel"}))))},m=function(){return r.createElement(c.a,{level:2,title:"Groupable Checkboxes"},r.createElement(c.a,null,r.createElement(l.a,{label:"A groupable checkbox with some child checkboxes selected by default"},r.createElement(d.a,{id:"parentId1",isParent:!0,clearSides:!0},r.createElement(o.a,null,"A parent checkbox connected")),r.createElement(d.a,{id:"parentId11",parentId:"parentId1",defaultChecked:!0},r.createElement(o.a,null,"Checkbox child 1")),r.createElement(d.a,{id:"parentId12",parentId:"parentId1",defaultChecked:!1},r.createElement(o.a,null,"Checkbox child 2")),r.createElement(d.a,{id:"parentId13",parentId:"parentId1",defaultChecked:!0},r.createElement(o.a,null,"Checkbox child 3")),r.createElement(d.a,{id:"parentId14",parentId:"parentId1",defaultChecked:!1},r.createElement(o.a,null,"Checkbox child 4"))),r.createElement("br",null)),r.createElement(c.a,null,r.createElement(l.a,{label:"A groupable checkbox with all checkboxes disabled or enabled"},r.createElement("div",null,r.createElement(i.a,{name:"Toggle checkboxes",enabled:!0,onClick:function(){return e="parentId2",void a.a.dispatch(Object(u.d)(e,void 0,t));var e,t}})),r.createElement(d.a,{id:"parentId2",isParent:!0,defaultDisabled:!0,clearSides:!0},r.createElement(o.a,null,"A parent checkbox connected")),r.createElement(d.a,{id:"parentId21",parentId:"parentId2",defaultChecked:!0,defaultDisabled:!0},r.createElement(o.a,null,"Checkbox child 1")),r.createElement(d.a,{id:"parentId22",parentId:"parentId2",defaultChecked:!1,defaultDisabled:!0},r.createElement(o.a,null,"Checkbox child 2")),r.createElement(d.a,{id:"parentId23",parentId:"parentId2",defaultChecked:!0,defaultDisabled:!0},r.createElement(o.a,null,"Checkbox child 3")),r.createElement(d.a,{id:"parentId24",parentId:"parentId2",defaultChecked:!1,defaultDisabled:!0},r.createElement(o.a,null,"Checkbox child 4")))))}},536:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r,a=n(2),i=n(0),o=n(1),l=n(545),c=n(176),s=n(40),p=n(537),u=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},h=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return o},f=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e},b=["number","text","password"],m=["id","classes","innerInputClasses","validate","labelTitle","labelProps","validateOnChange","disabledOnMount","validateOnMount","disabledTooltip","minimum","maximum","onBlur","defaultValue","valid","indeterminate","onDestroy","onRender","onChange","onClick"],v=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.state={valid:r.props.valid},r}return u(t,e),t.prototype.componentWillMount=function(){if(this.props.onRender){var e=this.props.validateOnMount&&this.props.validate&&this.props.validate(this.props.defaultValue||"");this.props.onRender(this.props.defaultValue,e,this.props.disabledOnMount)}},t.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy()},t.prototype.componentDidUpdate=function(e){this.props.valid!==e.valid&&this.validate(),e.value!==this.props.value&&this.innerInput&&(this.innerInput.value=this.props.value)},t.prototype.reset=function(){this.innerInput.value=""},t.prototype.getInnerValue=function(){return this.innerInput&&this.innerInput.value||""},t.prototype.validate=function(){this.setState({valid:this.props.valid&&!(this.props.validate&&!this.props.validate(this.getInnerValue()))})},t.prototype.handleBlur=function(){this.props.onBlur&&this.props.onBlur(this.getInnerValue())},t.prototype.handleChange=function(){if(this.props.onChange){var e=this.props.validateOnChange&&this.props.validate&&this.props.validate(this.getInnerValue());this.props.onChange(this.getInnerValue(),e)}},t.prototype.handleClick=function(e){this.props.onClick&&this.props.onClick(e)},t.prototype.handleKeyUp=function(e){this.props.onKeyUp&&this.props.onKeyUp(e)},t.prototype.getLabel=function(){var e=this.props,t=e.labelProps,n=e.labelTitle;return"string"==typeof n?n||this.props.validate?i.createElement(p.a,d({key:this.props.id+"label",htmlFor:this.props.id},t),n):null:n},t.prototype.render=function(){var e=this,t=a("input-wrapper validate",{"input-field":Object(o.contains)(b,this.props.type)},this.props.classes),n=a({invalid:!this.state.valid&&Object(o.contains)(b,this.props.type)},this.props.innerInputClasses),r=[i.createElement("input",d({key:this.props.id,id:this.props.id,className:n,defaultValue:Object(o.isUndefined)(this.props.value)?this.props.defaultValue:this.props.value,ref:function(t){return e.innerInput=t},onBlur:function(){return e.handleBlur()},onChange:function(){return e.handleChange()},onKeyUp:function(t){return e.handleKeyUp(t)},min:this.props.minimum,max:this.props.maximum},o.omit(this.props,f(l.a.input,m)))),this.getLabel(),this.props.children];return this.props.disabled&&this.props.disabledTooltip?i.createElement("div",{className:t,onClick:function(t){return e.handleClick(t)}},i.createElement(s.a,{title:this.props.disabledTooltip,placement:c.a.Right},r)):i.createElement("div",{className:t,onClick:function(t){return e.handleClick(t)}},r)},t.defaultProps={id:Object(o.uniqueId)("input"),type:"text",valid:!0,labelTitle:"",required:!0},t}(i.Component)},537:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r,a=n(2),i=n(0),o=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=a(this.props.classes),t=this.props,n=t.validMessage,r=t.invalidMessage,o=t.children,s=c(t,["validMessage","invalidMessage","children"]);return i.createElement("label",l({className:e,"data-valid-message":n,"data-invalid-message":r},s),o)},t}(i.Component)},545:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return o},a=["children","dangerouslySetInnerHTML"],i={internal:a,input:function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e}(a,["defaultValue","onClick","onChange","onBlur","value","valid"])}},561:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),a=function(e){var t=e.children;return r.createElement("section",{className:"text-dark-medium-grey help-text"},t)}},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(2),a=n(0),i=n(176),o=n(13),l=n(40),c=n(561),s=function(e){var t=e.children,n=e.label,s=e.message,p=e.helpText,u=e.headerClassName,d=e.optionalInformation,h=n||d?a.createElement("header",{className:r("label","text-light-blue",u)},n?a.createElement("span",null,n):null,d?a.createElement(l.a,{title:d,placement:i.a.Top,className:"ml1"},a.createElement(o.a,{svgName:"info-14",svgClass:"icon fill-medium-grey"})):null):null;return a.createElement("div",{className:"labeled-input"},h,t,!!s&&a.createElement(c.a,null,s),!!p&&a.createElement(c.a,null,p))}},579:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r,a=n(2),i=n(0),o=n(18),l=n(536),c=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.componentDidMount=function(){this.updateIndeterminate()},t.prototype.componentDidUpdate=function(){this.updateIndeterminate()},t.prototype.updateIndeterminate=function(){var e=o.findDOMNode(this).getElementsByTagName("input");e.length&&(e[0].indeterminate=!!this.props.indeterminate)},t.prototype.handleOnClick=function(e){this.props.disabled||(this.props.onClick&&(e.preventDefault(),e.stopPropagation(),this.props.onClick(e)),this.props.handleOnClick&&this.props.handleOnClick(this.props.checked))},t.prototype.render=function(){var e=this,t=a("coveo-checkbox-label",{disabled:!!this.props.disabled,"checkbox-clear":this.props.clearSides},this.props.classes),n=a("coveo-checkbox","react-vapor-checkbox",this.props.innerInputClasses);return i.createElement(l.a,s({},this.props,{classes:[t],innerInputClasses:[n],type:"checkbox",onClick:function(t){return e.handleOnClick(t)},readOnly:!0}),i.createElement("button",{type:"button",disabled:!!this.props.disabled}),this.props.children)},t}(i.Component)},663:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(50),a=n(1),i={getIsSelected:Object(r.a)((function(e,t){var n=t.id;return a.findWhere(e.checkboxes,{id:n})}),(function(e){return e&&e.checked}))}},753:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(7),a=n(6),i=n(579),o=n(84),l=n(663),c=Object(r.b)((function(e,t){return{checked:l.a.getIsSelected(e,{id:t.id})}}),(function(e,t){return{onRender:function(){return e(Object(o.b)(t.id,t.defaultChecked))},onDestroy:function(){return e(Object(o.c)(t.id))},onClick:function(n){return e(Object(o.d)(t.id))}}}),a.c.mergeProps)(i.a)},754:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(7),a=n(1),i=n(6),o=n(579),l=n(55),c=Object(r.b)((function(e,t){var n=a.findWhere(e.groupableCheckboxes,{parentId:t.parentId||t.id});if(n){var r=t.isParent?n.parent:a.findWhere(n.checkboxes,{id:t.id});return{checked:r?r.checked:!!t.defaultChecked,disabled:r?r.disabled:!!t.defaultDisabled,indeterminate:t.isParent&&n.nbChecked>0&&n.nbChecked<n.total}}return{checked:!!t.defaultChecked,disabled:!!t.defaultDisabled,indeterminate:!1}}),(function(e,t){return{onRender:function(){return e(Object(l.b)(t.id,t.defaultChecked,!!t.defaultDisabled,t.parentId,!!t.isParent))},onDestroy:function(){return e(Object(l.c)(t.id,t.parentId,!!t.isParent))},onClick:function(){return e(Object(l.e)(t.id,t.parentId,!!t.isParent))}}}),i.c.mergeProps)(o.a)}}]);
//# sourceMappingURL=961.bundle.js.map