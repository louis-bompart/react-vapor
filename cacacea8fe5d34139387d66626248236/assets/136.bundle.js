(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{416:function(e,l,t){"use strict";t.r(l),t.d(l,"ColorPickerExamples",(function(){return m}));var o=t(0),r=t(9),a=t(14),c=t(34),n=Object(a.debounce)((function(e){console.log(e)}),500),m=function(){return o.createElement("div",{className:"mt2"},o.createElement("h2",{className:"mb2"},"Built using ",o.createElement("a",{href:"https://github.com/casesandberg/react-color/"},"React Color")),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"Basic ColorPicker"),o.createElement("div",{className:"flex"},o.createElement(r.ColorPicker,{id:"color-picker-example-1",defaultColor:"#F37231",onChangeComplete:n}))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"ColorPicker with different picker styling, hiding controls"),o.createElement("div",{className:"flex"},o.createElement(r.ColorPicker,{id:"color-picker-example-2",styles:{default:{controls:{display:"none"}}}}))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"ColorPickerConnected with color as hex available from state"),o.createElement("div",{className:"flex"},o.createElement(r.ColorPicker,{id:"color-picker-example-3",defaultColor:"#47FF21"}),o.createElement(r.Button,{className:"btn mod-primary ml2",name:"Click me to get color from state",onClick:function(){return alert(r.InputSelectors.getValue(c.a.getState(),{id:"color-picker-example-3"}))}}))))}}}]);
//# sourceMappingURL=136.bundle.js.map