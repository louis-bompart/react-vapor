(window.webpackJsonp=window.webpackJsonp||[]).push([[1032],{2319:function(e,t,r){"use strict";r.r(t),r.d(t,"CodeEditorExamples",(function(){return c}));var o,n=r(1),a=r(612),i=r(538),s=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){return n.createElement("div",{className:"mt2"},n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Code Editor using codemirror"),n.createElement(a.a,{value:"",mode:i.b.Python})),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Code Editor using codemirror in readonly mode"),n.createElement(a.a,{value:"",mode:i.b.Python,readOnly:!0})),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Code Editor using codemirror with an action on change"),n.createElement(a.a,{value:"",mode:i.b.Python,onChange:function(e){return alert(e)}})))},t}(n.Component)},538:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n}));var o={LineNumbers:"CodeMirror-linenumbers",FoldGutter:"CodeMirror-foldgutter",LintMarkers:"CodeMirror-lint-markers"},n={JSON:"application/json",XML:"xml",Python:"python",Text:"text/javascript"}},612:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));r(966),r(1038),r(1039),r(1040),r(1041),r(1042),r(1043),r(1044),r(1045);var o,n=r(551),a=r(1),i=r(1046),s=r(0),c=r(538),l=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=function(e){function t(t,r){var o=e.call(this,t,r)||this;return o.codemirror=a.createRef(),o.state={value:t.value},o}return l(t,e),t.prototype.componentDidMount=function(){var e,t;null===(t=(e=this.props).onMount)||void 0===t||t.call(e,this.codemirror.current)},t.prototype.componentDidUpdate=function(e){e.value!==this.props.value&&this.editor&&(this.setState({value:this.props.value}),this.editor.getDoc().clearHistory())},t.prototype.render=function(){var e=this;return a.createElement(i.Controlled,{ref:this.codemirror,editorDidMount:function(t){e.editor=t,e.addExtraKeywords()},onBeforeChange:function(t,r,o){e.setState({value:o})},value:this.state.value,onChange:function(t,r,o){return e.handleChange(o)},options:s.extend({},t.Options,{readOnly:this.removeCursorWhenEditorIsReadOnly(),mode:this.props.mode}),className:this.props.className})},t.prototype.removeCursorWhenEditorIsReadOnly=function(){return this.props.readOnly?"nocursor":this.props.readOnly},t.prototype.handleChange=function(e){var t,r;null===(r=(t=this.props).onChange)||void 0===r||r.call(t,e)},t.prototype.addExtraKeywords=function(){if(this.props.extraKeywords){var e=this.props.mode.name||this.props.mode;n.helpers.hintWords[e]=n.helpers.hintWords[e].concat(this.props.extraKeywords)}},t.defaultProps={className:"mod-border"},t.Options={lineNumbers:!0,foldGutter:!0,lint:!0,gutters:[c.a.LineNumbers,c.a.FoldGutter,c.a.LintMarkers],extraKeys:{"Ctrl-Space":"autocomplete","Alt-F":"findPersistent"}},t}(a.Component)}}]);
//# sourceMappingURL=1032.bundle.js.map