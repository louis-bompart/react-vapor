(window.webpackJsonp=window.webpackJsonp||[]).push([[968],{2284:function(e,t,o){"use strict";o.r(t),o.d(t,"FacetExamples",(function(){return l}));var n,a=o(0),r=o(1),c=o(612),s=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){var e={name:"facetTitle",formattedName:"Facet Title"},t=[{name:"row1",formattedName:"Row 1"},{name:"row2",formattedName:"Row 2 with a count",count:"516"},{name:"row3",formattedName:"Row 3 with very long facet name that will get cut"}],o=[{name:"row2",formattedName:"Row 2",exclude:!0},{name:"row1",formattedName:"Row 1"}],n=t.concat({name:"row4",formattedName:"Row 4"},{name:"row5",formattedName:"Row 5"},{name:"row6",formattedName:"Row 6"},{name:"row7",formattedName:"Row 7"}),s=r.noop,l=function(){};return a.createElement("div",{className:"mt2",style:{width:300}},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Facet"),a.createElement(c.a,{facet:e,facetRows:t,clearFacet:l,toggleFacet:s})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Facet with a selected row"),a.createElement(c.a,{facet:e,facetRows:t,selectedFacetRows:o,clearFacet:l,toggleFacet:s})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Facet with many rows"),a.createElement(c.a,{facet:e,facetRows:n,clearFacet:l,toggleFacet:s})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Facet with enabled exclude rows"),a.createElement(c.a,{facet:e,facetRows:n,selectedFacetRows:o,enableExclusions:!0,clearFacet:l,toggleFacet:s})))},t}(a.Component)},563:function(e,t,o){"use strict";o.d(t,"a",(function(){return u}));var n,a=o(0),r=o(18),c=o(1),s=o(25),l=o(186),i=o(182),p=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleDocumentClick=function(e){t.props.isOpened&&(r.findDOMNode(t.facetSearch).contains(e.target)||t.props.onDocumentClick())},t}return p(t,e),t.prototype.componentWillMount=function(){this.props.onDocumentClick&&document.addEventListener("click",this.handleDocumentClick)},t.prototype.componentWillReceiveProps=function(e){this.props.onOpen&&!this.props.isOpened&&e.isOpened&&this.props.onOpen()},t.prototype.componentWillUnmount=function(){this.props.onDocumentClick&&document.removeEventListener("click",this.handleDocumentClick)},t.prototype.componentDidUpdate=function(){this.props.isOpened&&this.facetSearch.getElementsByTagName("input")[0].focus()},t.prototype.render=function(){var e=this,t="facet-more-search"+(this.props.isOpened?"":" hidden"),o=this.props.filterText&&this.props.filterText.length?c.map(this.props.facetRows,(function(t){var o=t.props.facetRow.formattedName;if(s.contains(o.toLowerCase(),e.props.filterText.toLowerCase()))return t})).filter(Boolean):this.props.facetRows,n="facet-search-results"+(o.length?"":" hidden"),r="filter-"+this.props.facet,p=this.props.withReduxState?a.createElement(i.a,{id:r,filterPlaceholder:this.props.filterPlaceholder}):a.createElement(l.a,{id:r,filterPlaceholder:this.props.filterPlaceholder});return a.createElement("div",{className:t},a.createElement("div",{className:"facet-search",ref:function(t){return e.facetSearch=t}},p),a.createElement("ul",{className:n},o))},t}(a.Component)},564:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var n,a=o(0),r=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleOnChange=function(){t.props.onToggleMore&&t.props.onToggleMore(t.props.facet)},t}return r(t,e),t.prototype.render=function(){var e=this,t="facet-value facet-selectable facet-more"+(!!this.props.isOpened&&this.props.isOpened?" hidden":""),o=this.props.moreLabel||"More";return a.createElement("li",{className:t,onClick:function(e){return e.nativeEvent.stopImmediatePropagation()}},a.createElement("label",{className:"coveo-checkbox-label facet-value-label"},a.createElement("input",{type:"checkbox",className:"coveo-checkbox facet-checkbox-input",onChange:function(){return e.handleOnChange()}}),a.createElement("span",{className:"facet-more-button"}),a.createElement("span",{className:"label"},o)))},t}(a.Component)},612:function(e,t,o){"use strict";o.d(t,"a",(function(){return h}));var n,a=o(0),r=o(1),c=o(13),s=o(40),l=o(563),i=o(613),p=o(564),u=o(614),f=o(615),m=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildFacet=function(e){t.props.toggleFacet(t.props.facet.name,e),t.props.onToggleFacet&&t.props.onToggleFacet(t.props.facet.name,e)},t.clearFacet=function(){t.props.clearFacet(t.props.facet.name),t.props.onClearFacet&&t.props.onClearFacet(t.props.facet.name)},t}return m(t,e),t.prototype.sortFacetRows=function(e){return r.sortBy(e,(function(e){return e.formattedName.toLowerCase()}))},t.prototype.componentWillMount=function(){this.props.onRender&&this.props.onRender(this.props.facet.name)},t.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy(this.props.facet.name)},t.prototype.render=function(){var e=this;if(!this.props.facetRows.length&&!this.props.selectedFacetRows.length)return null;var t="facet-header-eraser"+(this.props.selectedFacetRows.length?"":" hidden"),o=this.sortFacetRows(this.props.selectedFacetRows),n=this.sortFacetRows(this.props.facetRows),l=r.union(o,n),i=r.uniq(l,!1,(function(e){return e.name})),m=r.map(i,(function(t){var n=r.contains(r.pluck(o,"name"),t.name);return a.createElement(f.a,{key:t.name,facet:e.props.facet.name,facetRow:t,onToggleFacet:e.buildFacet,isChecked:n,enableExclusions:e.props.enableExclusions,maxTooltipLabelLength:e.props.maxTooltipLabelLength,excludeTooltipMessage:e.props.excludeTooltipMessage})})),h=Math.max(this.props.selectedFacetRows.length,this.props.maxRowsToShow);m.length===h+1&&(h+=1);var d=m.length>h?this.props.withReduxState?a.createElement(u.a,{facet:this.props.facet.name,moreLabel:this.props.moreLabel}):a.createElement(p.a,{facet:this.props.facet.name,moreLabel:this.props.moreLabel}):null,g=this.props.facet.name+" facet"+(this.props.isOpened?" facet-opened":"");return a.createElement("div",{className:g},a.createElement("div",{className:"facet-header"},a.createElement("div",{className:t,onClick:function(){return e.clearFacet()}},a.createElement(s.a,{className:"remove-selected-tooltip",title:this.props.clearFacetLabel+" "+this.props.facet.formattedName},a.createElement(c.a,{svgName:"clear",className:"icon fill-medium-grey"}))),a.createElement("div",{className:"facet-header-title bold text-medium-blue"},this.props.facet.formattedName)),a.createElement("ul",{className:"facet-values"},m.slice(0,h),d),this.getMoreRows(!!d,m.slice(h)))},t.prototype.getMoreRows=function(e,t){if(e)return this.props.withReduxState?a.createElement(i.a,{facet:this.props.facet.name,facetRows:t,filterPlaceholder:this.props.filterPlaceholder}):a.createElement(l.a,{facet:this.props.facet.name,facetRows:t,filterPlaceholder:this.props.filterPlaceholder})},t.defaultProps={clearFacetLabel:"Clear",selectedFacetRows:[],maxRowsToShow:5},t}(a.Component)},613:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(7),a=o(1),r=o(6),c=o(28),s=o(31),l=o(563),i=Object(n.b)((function(e,t){var o=a.findWhere(e.facets,{facet:t.facet}),n=a.findWhere(e.filters,{id:"filter-"+t.facet});return{isOpened:o&&o.opened,filterText:n?n.filterText:"",withReduxState:!0}}),(function(e,t){return{onOpen:function(){return e(Object(c.c)("filter-"+t.facet,""))},onDocumentClick:function(){return e(Object(s.d)())}}}),r.c.mergeProps)(l.a)},614:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var n=o(7),a=o(1),r=o(6),c=o(31),s=o(564),l=Object(n.b)((function(e,t){var o=a.findWhere(e.facets,{facet:t.facet});return{isOpened:o&&o.opened}}),(function(e){return{onToggleMore:function(t){return e(Object(c.g)(t))}}}),r.c.mergeProps)(s.a)},615:function(e,t,o){"use strict";o.d(t,"a",(function(){return u}));var n,a=o(2),r=o(0),c=o(1),s=o(13),l=o(40),i=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),p=function(){return(p=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),Object.defineProperty(t.prototype,"isExclude",{get:function(){return!!this.props.enableExclusions&&!!this.props.facetRow.exclude},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this,t=a("facet-value","facet-selectable",{"facet-exclude":this.props.enableExclusions});return r.createElement("li",{className:t},this.getExcludeCheckbox(),r.createElement("label",{className:"coveo-checkbox-label facet-value-label",onClick:function(t){t.preventDefault(),e.toggleFacet()}},r.createElement("input",{type:"checkbox",name:this.props.facetRow.name,className:"coveo-checkbox facet-checkbox-input",checked:this.props.isChecked&&!this.isExclude,onClick:this.stopEvent,onChange:c.noop}),r.createElement("button",{type:"button",className:this.props.isChecked&&this.isExclude?"exclude-box":""},r.createElement(s.a,{svgName:"clear",className:"icon hide exclude-icon",svgClass:"fill-red"})),this.getLabel(),this.getCount()))},t.prototype.getLabel=function(){var e=this.props.facetRow.count?this.props.maxTooltipLabelLength-this.props.facetRow.count.length:this.props.maxTooltipLabelLength,t=a({"text-exclude":this.props.isChecked&&this.isExclude}),o=r.createElement("span",{className:t},this.props.facetRow.formattedName);return this.props.facetRow.formattedName.length>e?r.createElement(l.a,{title:this.props.facetRow.tooltipLabel||this.props.facetRow.formattedName,placement:"top",className:"label"},o):r.createElement("span",{className:"label"},o)},t.prototype.getCount=function(){if(!c.isUndefined(this.props.facetRow.count))return r.createElement("span",{className:a("facet-value-count",{"text-exclude":this.props.isChecked&&this.isExclude})},this.props.facetRow.count)},t.prototype.getExcludeCheckbox=function(){var e=this;if(this.props.enableExclusions)return r.createElement("div",{className:"flex center-align facet-exclude-button",onClick:function(){return e.toggleFacetToExclude()}},r.createElement("input",{type:"checkbox",className:"coveo-checkbox",checked:this.props.isChecked&&this.isExclude,onClick:this.stopEvent,onChange:c.noop}),this.getExcludeButton())},t.prototype.getExcludeButton=function(){return this.props.excludeTooltipMessage?r.createElement(l.a,{className:"exclude-button",title:this.props.excludeTooltipMessage(this.props.facetRow.formattedName)},r.createElement(s.a,{svgName:"exclude",className:"icon",svgClass:"fill-medium-grey"})):r.createElement(s.a,{svgName:"exclude",className:"exclude-button icon",svgClass:"fill-medium-grey"})},t.prototype.stopEvent=function(e){e.preventDefault(),e.stopPropagation()},t.prototype.toggleFacetToExclude=function(){this.props.onToggleFacet(p(p({},this.props.facetRow),{exclude:!this.isExclude}))},t.prototype.toggleFacet=function(){this.props.onToggleFacet(p(p({},this.props.facetRow),{exclude:!1}))},t.defaultProps={maxTooltipLabelLength:25},t}(r.Component)}}]);
//# sourceMappingURL=968.bundle.js.map