(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{421:function(e,t,a){"use strict";a.r(t),a.d(t,"FacetConnectedExamples",(function(){return d}));var n=a(0),c=a(21),o=a(9),r={name:"facetTitle1",formattedName:"The first facet"},m={name:"facetTitle2",formattedName:"The second facet"},l=[{name:"row1",formattedName:"Row 1"},{name:"row2",formattedName:"The second row"},{name:"row3",formattedName:"Third row with a count property",count:"23412"},{name:"row4",formattedName:"Row 4, count of 0",count:"0"}],d=Object(c.connect)(null,(function(e){return{onRender:function(){e(Object(o.changeFacet)(r.name,{name:"row2",formattedName:"Irrelevent"})),e(Object(o.changeFacet)(m.name,{name:"row1",formattedName:"it does not matter"})),e(Object(o.changeFacet)(m.name,{name:"row2",formattedName:"why is this mandatory ?",exclude:!0}))}}}))((function(e){var t=e.onRender;return n.useEffect((function(){t()}),[t]),n.createElement(o.Section,{level:2,title:"Facets connected to store"},n.createElement("div",{style:{width:400}},n.createElement("label",{className:"form-control-label"},"Facet with the second row selectd"),n.createElement(o.FacetConnected,{facet:r,facetRows:l,clearFacet:function(){},toggleFacet:function(){}})),n.createElement("div",{style:{width:400}},n.createElement("label",{className:"form-control-label"},"Facet with exclusions, the first row selected and the second row already excluded"),n.createElement(o.FacetConnected,{facet:m,facetRows:l,clearFacet:function(){},enableExclusions:!0,toggleFacet:function(){}})))}))}}]);
//# sourceMappingURL=139.bundle.js.map