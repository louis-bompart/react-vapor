(window.webpackJsonp=window.webpackJsonp||[]).push([[1002],{2318:function(e,t,n){"use strict";n.r(t),n.d(t,"DiffViewerExamples",(function(){return f}));n(2319);var r,o=n(1),i=n(605),a=n(754),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){return o.createElement("div",{className:"mt2"},o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"Diff Viewer"),o.createElement(a.a,{first:Object(i.a)(i.b),second:Object(i.a)(i.c)})))},t}(o.Component)},449:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,o=n(9),i=n(1),a=n(0),s=n(83),f=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(){return(p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=["small","classes","enabled","name","link","target","primary","tooltip","tooltipPlacement","hideDisabled","onClick"],l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return f(t,e),t.prototype.onClick=function(){this.props.onClick&&this.props.enabled&&this.props.onClick()},t.prototype.getTemplate=function(e){var t,n=this,r=p(p({},a.omit(this.props,c)),{disabled:!this.props.enabled,onClick:function(){return n.onClick()}});return this.props.link?(r=a.extend(r,{target:this.props.target,rel:"noopener noreferrer",href:this.props.link}),t=i.createElement("a",p({className:e+" btn-container"},r),this.props.name,this.props.children)):t=i.createElement("button",p({className:e},r),this.props.name,this.props.children),a.isEmpty(this.props.tooltip)?t:i.createElement(s.a,{title:this.props.tooltip,placement:this.props.tooltipPlacement,className:"btn-container"},t)},t.prototype.getClasses=function(){return o("btn",{"mod-primary":this.props.primary,"mod-small":this.props.small,"state-disabled disabled":!this.props.enabled,"text-medium-grey":!this.props.primary&&!this.props.enabled},this.props.classes)},t.prototype.render=function(){return this.getTemplate(this.getClasses())},t.defaultProps={enabled:!0,name:"",tooltip:"",primary:!1,small:!1,tooltipPlacement:"right",target:""},t}(i.Component)},488:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,o=n(9),i=n(1),a=n(0),s=n(449),f=n(82),p=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p(t,e),t.prototype.getSvgTemplate=function(){return this.props.svgName?i.createElement(f.a,{svgName:this.props.svgName,svgClass:"icon mod-4x "+this.props.svgClass}):null},t.prototype.getDescriptionTemplate=function(){return this.props.description?i.createElement("p",{className:this.props.descriptionClassName},this.props.description):null},t.prototype.getButtonsTemplate=function(){return a.map(this.props.buttons,(function(e){return i.createElement(s.a,c({key:e.name},e))}))},t.prototype.render=function(){var e="blankslate "+(this.props.withModal?"mt2 mb2":"m2")+" "+this.props.classes.join(" "),t=o({"mod-header-padding":this.props.withModal},this.props.containerClasses);return i.createElement("div",{className:t},i.createElement("div",{className:e},this.getSvgTemplate(),i.createElement("h1",null,this.props.title),this.getDescriptionTemplate(),this.getButtonsTemplate(),this.props.additionalSection))},t.defaultProps={title:null,description:null,additionalSection:null,buttons:[],withModal:!1,classes:[],containerClasses:[],descriptionClassName:"",svgName:"",svgClass:""},t}(i.Component)},590:function(e,t,n){(t=e.exports=n(73)(!1)).push([e.i,"/* ----------- Deprecated Palette ----------- */\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-file-wrapper {\n  border: none; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-file-diff {\n  overflow: initial; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-file-header {\n  display: none; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-wrapper {\n  position: relative; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-diff-table {\n  font-size: 14px;\n  font-family: source_code_pro_regular, \"Courier New\", Courier, monospace;\n  border-bottom: 1px solid #bcc3ca; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-linenumber {\n  top: -1px;\n  width: auto;\n  height: calc(20px + 1px);\n  margin-top: 1px;\n  color: #373737;\n  background: #f1f3f4;\n  border: none;\n  border-left: 1px solid #bcc3ca;\n  cursor: initial; }\n  .DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-linenumber.d2h-change {\n    background: #f1f3f4; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .line-num1,\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .line-num2 {\n  width: 45px; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U tr:last-child .d2h-code-linenumber {\n  height: calc(20px - 1px); }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U tr {\n  position: relative;\n  display: block; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U td {\n  border-right: 1px solid #bcc3ca; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U td:last-child {\n  display: block; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U td.d2h-info {\n  height: auto;\n  line-height: normal;\n  background: none;\n  border: 1px solid #bcc3ca;\n  border-right: none;\n  border-left: none; }\n  .DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U td.d2h-info.d2h-code-linenumber {\n    top: 0;\n    width: calc(45px * 2 + 45px);\n    height: 2px;\n    margin-top: 0;\n    background: #ffffff;\n    border-right: none;\n    border-bottom: none;\n    border-left: none; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U tr:first-child td.d2h-info {\n  border-top: none; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-line {\n  margin-left: 90px; }\n  .DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-line.d2h-info {\n    position: relative;\n    width: 100%;\n    margin-bottom: 10px;\n    margin-left: 0;\n    color: #ffffff;\n    font-size: 0;\n    background: #ffffff;\n    border-bottom: 2px solid #bcc3ca; }\n    .DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-line.d2h-info:before {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      padding-bottom: 3px;\n      color: #7a7d81;\n      font-size: 10px;\n      line-height: 5px;\n      background: white;\n      border: 1px solid #f1f3f4;\n      border-radius: 2px;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      content: '...';\n      content: '...'; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-ins:not(.d2h-code-linenumber) {\n  background: #d0e9c4; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-line ins,\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-code-side-line ins {\n  background: #d0e9c4; }\n\n.DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U .d2h-del:not(.d2h-code-linenumber) {\n  background: #edbcbf; }\n",""]),t.locals={diffViewer:"DiffViewer-diffViewer-1eaLvotTSSN1f1yxkkda4U"}},605:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return p}));var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},i=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(o(arguments[t]));return e},a={_id:"5aa97c3a188912df4047d157",index:0,guid:"a77733c5-01ea-4d3d-9f22-9ec4d06c2da6",isActive:!1,balance:"$3,307.29",picture:"http://placehold.it/32x32",age:33,eyeColor:"green",name:{first:"Natasha",last:"Jenkins"},company:"ZANYMAX",email:"natasha.jenkins@zanymax.net",phone:"+1 (917) 404-3066",address:"555 Linden Boulevard, Stonybrook, Wisconsin, 2342",about:"Nulla sunt excepteur veniam elit laboris pariatur. Occaecat aliquip magna aliqua sunt tempor sunt id.",registered:"Sunday, January 31, 2016 2:37 AM",latitude:"-11.761137",longitude:"-23.176443",tags:["voluptate","et","sunt","sunt","cupidatat"],range:[0,1,2],friends:[{id:0,name:"Mccray Kerr"},{id:1,name:"Cristina Osborn"}],greeting:"Hello, Natasha! You have 8 unread messages.",favoriteFruit:"apple"},s=r(r({},a),{range:[5,6],friends:i(a.friends,[{id:4,name:"Someone New"}]),otherThing:"This is a new property"});delete s.isActive;var f=s,p=function(e){return JSON.stringify(e,void 0,2)}},754:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r,o=n(940),i=n(1),a=n(950),s=n(488),f=n(963),p=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=a.diffLines(this.props.first,this.props.second),n=a.formatLines(e,{context:3}),r=o.Diff2Html.getPrettyHtml(n,{inputFormat:t.InputFormat.Diff,showFiles:!1,matching:t.Matching.Words,outputFormat:t.OutputFormat.Line});return t.EmptyHtmlRegex.test(r)?i.createElement(s.a,{title:this.props.noChangesLabel,description:this.props.noChangesDescription}):i.createElement("div",{className:f.diffViewer,dangerouslySetInnerHTML:{__html:r}})},t.defaultProps={noChangesLabel:"No changes"},t.OutputFormat={Side:"side-by-side",Line:"line-by-line"},t.InputFormat={Diff:"diff",JSON:"json"},t.Matching={Lines:"lines",Words:"words",None:"none"},t.EmptyHtmlRegex=new RegExp(/<div class="d2h-wrapper"\>\s*<\/div>/),t}(i.Component)},944:function(e,t){},963:function(e,t,n){var r=n(590);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=n(74)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(590,(function(){var t=n(590);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))}}]);
//# sourceMappingURL=1002.bundle.js.map