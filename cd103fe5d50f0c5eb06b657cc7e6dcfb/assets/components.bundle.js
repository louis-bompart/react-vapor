(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{150:function(e,t,a){"use strict";var n=a(167),l=a(168),r=a(169),s=a(0),o=a(170),i=a(600),m=a(177),x=a(597),p=function(){return(p=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},c=a(171);i.a.registerLanguage("tsx",m.a);t.a=function(e){var t=e.language,a=e.children,m=a;if("html"===t){var u=o.renderToStaticMarkup(a);m=r.format(u,p(p({},c),{plugins:[n],parser:"html",htmlWhitespaceSensitivity:"ignore"}))}else"tsx"===t&&(m=r.format(a,p(p({},c),{plugins:[l],parser:"typescript"})));return s.createElement(i.a,{language:t,style:x.a,showLineNumbers:!0,customStyle:{fontFamily:"source_code_pro_regular, monospace",fontSize:"16px",lineHeight:"1.2"},lineNumberContainerStyle:{paddingRight:"2rem",float:"left"}},m)}},153:function(e,t,a){"use strict";var n=a(0),l=a(10),r=a(15),s=a(9),o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a};t.a=function(e){var t=e.href,a=e.name,m=e.baseUrl,x=i(e,["href","name","baseUrl"]),p=""+m+t;return n.createElement(l.b,{path:p,children:function(e){return n.createElement(s.SideNavigationItem,{isActive:!!e.match},n.createElement(r.b,o({to:p,className:"block navigation-menu-section-item-link"},x),a))}})}},154:function(e,t,a){"use strict";var n=a(0),l=a(10),r=a(15),s=a(9),o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a},m=function(e){var t=e.children,a=(e.onClick,e.notExpandable,e.baseUrl),m=(e.isActive,e.isLink),x=i(e,["children","onClick","notExpandable","baseUrl","isActive","isLink"]);return m?n.createElement(l.b,{path:a,children:function(e){return n.createElement("div",{className:"navigation-menu-section"},n.createElement(r.b,{to:a},n.createElement(s.SideNavigationMenuSection,o({isActive:!!e.match,isLink:!0},x))))}}):n.createElement(s.SideNavigationMenuSection,o({},x,{expandable:!1}),n.Children.map(t,(function(e){return n.cloneElement(e,{baseUrl:a})})))};t.a=Object(l.g)((function(e){var t=e.baseUrl,a=void 0===t?"":t,l=e.match,r=(e.location,i(e,["baseUrl","match","location"])),s=""+l.url+a;return n.createElement(m,o({baseUrl:s},r))}))},395:function(e,t,a){var n={"./BlankSlateExample.1.use.md":[178,9],"./ButtonExamples.1.use.md":[179,12],"./CheckboxExamples.1.use.md":[180,15],"./ChildFormExamples.1.use.md":[181,17],"./DatePickerDropdownConnectedExamples.1.use.md":[182,28],"./DatePickerExamples.1.use.md":[183,29],"./InputExamples.1.use.md":[184,42],"./MultiSelectExamples.1.use.md":[185,59],"./NumericInputExamples.1.use.md":[186,64],"./PopoverConnectedExamples.1.use.md":[187,70],"./RadioExamples.1.use.md":[188,72],"./RefreshExample.1.use.md":[189,74],"./SingleSelectExamples.1.use.md":[190,81],"./SliderExamples.1.use.md":[191,84],"./ToastConnectedExamples.1.use.md":[192,99],"./TooltipExamples.1.use.md":[193,103]};function l(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],l=t[0];return a.e(t[1]).then((function(){return a(l)}))}l.keys=function(){return Object.keys(n)},l.id=395,e.exports=l},396:function(e,t,a){var n={"./ActionBarConnectedExamples":[194,4],"./ActionBarConnectedExamples.tsx":[194,4],"./ActionBarExamples":[195,5],"./ActionBarExamples.tsx":[195,5],"./ActionableItemExamples":[196,6],"./ActionableItemExamples.tsx":[196,6],"./BadgeExamples":[197,7],"./BadgeExamples.tsx":[197,7],"./BannerExamples":[198,8],"./BannerExamples.tsx":[198,8],"./BlankSlateExample":[199,10],"./BlankSlateExample.1.use.md":[178,9],"./BlankSlateExample.tsx":[199,10],"./BorderedLineExamples":[200,11],"./BorderedLineExamples.tsx":[200,11],"./ButtonExamples":[201,13],"./ButtonExamples.1.use.md":[179,12],"./ButtonExamples.tsx":[201,13],"./ChartExamples":[202,14],"./ChartExamples.tsx":[202,14],"./CheckboxExamples":[203,16],"./CheckboxExamples.1.use.md":[180,15],"./CheckboxExamples.tsx":[203,16],"./ChildFormExamples":[204,18],"./ChildFormExamples.1.use.md":[181,17],"./ChildFormExamples.tsx":[204,18],"./ChosenSelectExamples":[205,19],"./ChosenSelectExamples.tsx":[205,19],"./CodeEditorExamples":[206,20],"./CodeEditorExamples.tsx":[206,20],"./CollapsibleExamples":[207,21],"./CollapsibleExamples.tsx":[207,21],"./ColorBarExamples":[208,22],"./ColorBarExamples.tsx":[208,22],"./ColorExamples":[209,23],"./ColorExamples.tsx":[209,23],"./ColorPickerExamples":[210,24],"./ColorPickerExamples.tsx":[210,24],"./ContentExamples":[211,25],"./ContentExamples.tsx":[211,25],"./CornerRibbonExamples":[212,26],"./CornerRibbonExamples.tsx":[212,26],"./CornerRibbonExamplesCommon":[213,27],"./CornerRibbonExamplesCommon.ts":[213,27],"./DatePickerDropdownConnectedExamples.1.use.md":[182,28],"./DatePickerExamples":[214,30],"./DatePickerExamples.1.use.md":[183,29],"./DatePickerExamples.tsx":[214,30],"./DatePickerExamplesCommon":[215,31],"./DatePickerExamplesCommon.ts":[215,31],"./DiffViewerExamples":[216,32],"./DiffViewerExamples.tsx":[216,32],"./DiffViewerExmaplesCommon":[217,33],"./DiffViewerExmaplesCommon.ts":[217,33],"./ExamplesUtils":[218,34],"./ExamplesUtils.ts":[218,34],"./FacetConnectedExamples":[219,35],"./FacetConnectedExamples.tsx":[219,35],"./FilterBoxExamples":[220,36],"./FilterBoxExamples.tsx":[220,36],"./FlatSelectExamples":[221,37],"./FlatSelectExamples.tsx":[221,37],"./FlippableExamples":[222,38],"./FlippableExamples.tsx":[222,38],"./FooterExample":[223,39],"./FooterExample.tsx":[223,39],"./HeaderExamples":[224,40],"./HeaderExamples.tsx":[224,40],"./InfoBoxExamples":[225,41],"./InfoBoxExamples.tsx":[225,41],"./InputExamples":[226,43],"./InputExamples.1.use.md":[184,42],"./InputExamples.tsx":[226,43],"./ItemBoxExamples":[227,44],"./ItemBoxExamples.tsx":[227,44],"./ItemFilterConnectedExamples":[228,45],"./ItemFilterConnectedExamples.tsx":[228,45],"./ItemFilterExamples":[229,46],"./ItemFilterExamples.tsx":[229,46],"./JSONEditorExamples":[230,47],"./JSONEditorExamples.tsx":[230,47],"./LabeledValueExamples":[231,48],"./LabeledValueExamples.tsx":[231,48],"./LastUpdatedConnectedExamples":[232,49],"./LastUpdatedConnectedExamples.tsx":[232,49],"./LastUpdatedExamples":[233,50],"./LastUpdatedExamples.tsx":[233,50],"./LinkSvgExamples":[234,51],"./LinkSvgExamples.tsx":[234,51],"./ListBoxExampleActions":[235,52],"./ListBoxExampleActions.ts":[235,52],"./ListBoxExampleConnected":[236,53],"./ListBoxExampleConnected.tsx":[236,53],"./ListBoxExampleReducer":[237,54],"./ListBoxExampleReducer.ts":[237,54],"./ListBoxExamples":[238,55],"./ListBoxExamples.tsx":[238,55],"./LoadingExamples":[239,56],"./LoadingExamples.tsx":[239,56],"./LogoCardExamples":[240,57],"./LogoCardExamples.tsx":[240,57],"./LogoCardExamplesCommon":[241,58],"./LogoCardExamplesCommon.ts":[241,58],"./MultiSelectExamples":[242,60],"./MultiSelectExamples.1.use.md":[185,59],"./MultiSelectExamples.tsx":[242,60],"./MultiStepBarExamples":[243,61],"./MultiStepBarExamples.tsx":[243,61],"./MultilineBoxExampleUtils":[244,62],"./MultilineBoxExampleUtils.tsx":[244,62],"./MultilineBoxExamples":[245,63],"./MultilineBoxExamples.tsx":[245,63],"./NumericInputExamples":[246,65],"./NumericInputExamples.1.use.md":[186,64],"./NumericInputExamples.tsx":[246,65],"./OptionsCycleExamples":[247,66],"./OptionsCycleExamples.tsx":[247,66],"./PaginationConnectedExamples":[248,67],"./PaginationConnectedExamples.tsx":[248,67],"./PaginationExamples":[249,68],"./PaginationExamples.tsx":[249,68],"./PartialStringMatchExamples":[250,69],"./PartialStringMatchExamples.tsx":[250,69],"./PopoverConnectedExamples":[251,71],"./PopoverConnectedExamples.1.use.md":[187,70],"./PopoverConnectedExamples.tsx":[251,71],"./RadioExamples":[252,73],"./RadioExamples.1.use.md":[188,72],"./RadioExamples.tsx":[252,73],"./RefreshExample.1.use.md":[189,74],"./RefreshExamples":[253,75],"./RefreshExamples.tsx":[253,75],"./SearchBarExamples":[254,76],"./SearchBarExamples.tsx":[254,76],"./SectionExamples":[255,77],"./SectionExamples.tsx":[255,77],"./ServerSideSelectExampleUtils":[256,78],"./ServerSideSelectExampleUtils.tsx":[256,78],"./SideNavigationExample":[257,79],"./SideNavigationExample.tsx":[257,79],"./SideNavigationLoadingExample":[258,80],"./SideNavigationLoadingExample.tsx":[258,80],"./SingleSelectExamples":[259,82],"./SingleSelectExamples.1.use.md":[190,81],"./SingleSelectExamples.tsx":[259,82],"./SlideYExamples":[260,83],"./SlideYExamples.tsx":[260,83],"./SliderExamples":[261,85],"./SliderExamples.1.use.md":[191,84],"./SliderExamples.tsx":[261,85],"./SplitLayoutExamples":[262,86],"./SplitLayoutExamples.tsx":[262,86],"./StatusCardExamples":[263,87],"./StatusCardExamples.tsx":[263,87],"./StepProgressBarExamples":[264,88],"./StepProgressBarExamples.tsx":[264,88],"./SubNavigationExamples":[265,89],"./SubNavigationExamples.tsx":[265,89],"./SvgExamples":[266,90],"./SvgExamples.tsx":[266,90],"./SyncFeedbackExample":[267,91],"./SyncFeedbackExample.tsx":[267,91],"./TabConnectedExample":[268,92],"./TabConnectedExample.tsx":[268,92],"./TableHOCExampleUtils":[269,93],"./TableHOCExampleUtils.tsx":[269,93],"./TableHOCExamples":[270,94],"./TableHOCExamples.tsx":[270,94],"./TableHOCLoadingExamples":[271,95],"./TableHOCLoadingExamples.tsx":[271,95],"./TableHOCServerExamples":[272,96],"./TableHOCServerExamples.tsx":[272,96],"./TableHOCwithBlankSlateExamples":[273,97],"./TableHOCwithBlankSlateExamples.tsx":[273,97],"./TextAreaExamples":[274,98],"./TextAreaExamples.tsx":[274,98],"./ToastConnectedExamples":[275,100],"./ToastConnectedExamples.1.use.md":[192,99],"./ToastConnectedExamples.tsx":[275,100],"./ToastContentExample":[276,101],"./ToastContentExample.tsx":[276,101],"./ToastExamples":[277,102],"./ToastExamples.tsx":[277,102],"./TooltipExamples":[278,104],"./TooltipExamples.1.use.md":[193,103],"./TooltipExamples.tsx":[278,104],"./UserFeedbackExample":[279,105],"./UserFeedbackExample.tsx":[279,105],"./modalWindowExamples":[280,106],"./modalWindowExamples.tsx":[280,106]};function l(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],l=t[0];return a.e(t[1]).then((function(){return a(l)}))}l.keys=function(){return Object.keys(n)},l.id=396,e.exports=l},397:function(e,t,a){var n={"./ActionBarConnectedExamples.tsx":[399,122],"./ActionBarExamples.tsx":[400,123],"./ActionableItemExamples.tsx":[401,124],"./BadgeExamples.tsx":[402,125],"./BannerExamples.tsx":[403,126],"./BlankSlateExample.tsx":[404,127],"./BorderedLineExamples.tsx":[405,128],"./ButtonExamples.tsx":[406,129],"./ChartExamples.tsx":[407,0,117],"./CheckboxExamples.tsx":[408,130],"./ChildFormExamples.tsx":[409,131],"./ChosenSelectExamples.tsx":[410,132],"./CodeEditorExamples.tsx":[411,133],"./CollapsibleExamples.tsx":[412,134],"./ColorBarExamples.tsx":[413,135],"./ColorExamples.tsx":[414,119],"./ColorPickerExamples.tsx":[416,136],"./ContentExamples.tsx":[417,137],"./CornerRibbonExamples.tsx":[589,138],"./DatePickerExamples.tsx":[418,0,114],"./DiffViewerExamples.tsx":[419,111],"./FacetConnectedExamples.tsx":[421,139],"./FilterBoxExamples.tsx":[422,140],"./FlatSelectExamples.tsx":[423,141],"./FlippableExamples.tsx":[424,142],"./FooterExample.tsx":[425,1,143],"./HeaderExamples.tsx":[590,144],"./InfoBoxExamples.tsx":[437,145],"./InputExamples.tsx":[591,146],"./ItemBoxExamples.tsx":[438,147],"./ItemFilterConnectedExamples.tsx":[439,148],"./ItemFilterExamples.tsx":[440,149],"./JSONEditorExamples.tsx":[441,120],"./LabeledValueExamples.tsx":[442,150],"./LastUpdatedConnectedExamples.tsx":[443,151],"./LastUpdatedExamples.tsx":[444,152],"./LinkSvgExamples.tsx":[445,153],"./ListBoxExamples.tsx":[592,154],"./LoadingExamples.tsx":[446,155],"./LogoCardExamples.tsx":[593,156],"./MultiSelectExamples.tsx":[447,157],"./MultiStepBarExamples.tsx":[448,158],"./MultilineBoxExamples.tsx":[594,159],"./NumericInputExamples.tsx":[449,160],"./OptionsCycleExamples.tsx":[450,161],"./PaginationConnectedExamples.tsx":[451,162],"./PaginationExamples.tsx":[452,163],"./PartialStringMatchExamples.tsx":[453,164],"./PopoverConnectedExamples.tsx":[454,1,165],"./RadioExamples.tsx":[455,166],"./RefreshExamples.tsx":[456,167],"./SearchBarExamples.tsx":[457,168],"./SectionExamples.tsx":[458,169],"./SideNavigationExample.tsx":[459,170],"./SideNavigationLoadingExample.tsx":[460,171],"./SingleSelectExamples.tsx":[595,172],"./SlideYExamples.tsx":[461,1,173],"./SliderExamples.tsx":[462,174],"./SplitLayoutExamples.tsx":[463,1,175],"./StatusCardExamples.tsx":[464,176],"./StepProgressBarExamples.tsx":[465,177],"./SubNavigationExamples.tsx":[466,178],"./SvgExamples.tsx":[467,179],"./SyncFeedbackExample.tsx":[468,180],"./TabConnectedExample.tsx":[469,181],"./TableHOCExamples.tsx":[142,0,2,115],"./TableHOCLoadingExamples.tsx":[581,0,2,112],"./TableHOCServerExamples.tsx":[596,0,116],"./TableHOCwithBlankSlateExamples.tsx":[582,0,2,113],"./TextAreaExamples.tsx":[583,182],"./ToastConnectedExamples.tsx":[584,121],"./ToastContentExample.tsx":[159,183],"./ToastExamples.tsx":[585,184],"./TooltipExamples.tsx":[586,0,118],"./UserFeedbackExample.tsx":[587,185],"./modalWindowExamples.tsx":[588,1,186]};function l(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],l=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(l)}))}l.keys=function(){return Object.keys(n)},l.id=397,e.exports=l},599:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a(10),r=a(9),s=a(14),o=a(286),i=a(150),m={heading:function(e){var t=e.level,a=e.children;return n.createElement("h"+t,{className:"h"+t+" text-medium-blue"},a)},table:function(e){var t=e.children;return n.createElement("table",{className:"table mb2"},t)},list:function(e){var t=e.ordered,a=e.children;return t?n.createElement("ol",{className:"list-decimal"},a):n.createElement("ul",{className:"list-disc"},a)}};var x=function(){return(x=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},p=function(e,t,a,n){return new(a||(a=Promise))((function(l,r){function s(e){try{i(n.next(e))}catch(e){r(e)}}function o(e){try{i(n.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?l(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,o)}i((n=n.apply(e,t||[])).next())}))},c=function(e,t){var a,n,l,r,s={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,n&&(l=2&r[0]?n.return:r[0]?n.throw||((l=n.return)&&l.call(n),0):n.next)&&!(l=l.call(n,r[1])).done)return l;switch(n=0,l&&(r=[2&r[0],l.value]),r[0]){case 0:case 1:l=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(l=(l=s.trys).length>0&&l[l.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!l||r[1]>l[0]&&r[1]<l[3])){s.label=r[1];break}if(6===r[0]&&s.label<l[1]){s.label=l[1],l=r;break}if(l&&s.label<l[2]){s.label=l[2],s.ops.push(r);break}l[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],n=0}finally{a=l=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}},u=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,l,r=a.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=r.next()).done;)s.push(n.value)}catch(e){l={error:e}}finally{try{n&&!n.done&&(a=r.return)&&a.call(r)}finally{if(l)throw l.error}}return s},E=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(u(arguments[t]));return e},d=function(e){return function(t){return e+"-"+t+"-tab"}},f=function(e){var t=e.name,a=e.tabs,l=d(t);return n.createElement(r.TabContent,{className:"mod-header-padding mod-form-top-bottom-padding"},n.createElement(r.TabPaneConnected,{id:l("development")},n.createElement(S,x({},e))),a.map((function(e){var t=e.tabName,a=e.markdown;return n.createElement(r.TabPaneConnected,{key:l(t),id:l(t)},n.createElement(o,{className:"markdown-documentation",source:a,renderers:m}))})))},b=function(e){return n.createElement("div",{className:"mod-header-padding mod-form-top-bottom-padding"},n.createElement(S,x({},e)))},h=/\/\/ start-print\s*([\s\S]*)\/\/ stop-print/,v=/\/\/ start-print\s*([\s\S]*)$/,C=/^([\s\S]*)\/\/ stop-print/;var S=function(e){var t=e.component,l=e.path,r=u(n.useState(""),2),s=r[0],o=r[1];return n.useEffect((function(){p(void 0,void 0,void 0,(function(){var e;return c(this,(function(t){switch(t.label){case 0:return[4,a(396)("./"+l.replace("./",""))];case 1:return e=t.sent(),[2,(n=e.default,r=n.indexOf("// start-print")>=0,s=n.indexOf("// stop-print")>=0,r&&s?n.match(h)[1]:r?n.match(v)[1]:s?n.match(C)[1]:n)]}var n,r,s}))})).then(o)}),[l]),n.createElement(n.Fragment,null,n.createElement(t),s&&n.createElement("div",{className:"mt2"},n.createElement(i.a,{language:"tsx"},s)))},y=function(e){var t=e.path.substring(0,e.path.lastIndexOf(".")),l=u(n.useState(null),2),s=l[0],o=l[1];n.useEffect((function(){var e;(e=a(395),Promise.all(e.keys().map((function(a){return function(e,a){return p(void 0,void 0,void 0,(function(){var n,l,r,s;return c(this,(function(o){switch(o.label){case 0:return e.includes(t)?(n=u(/\w+Examples?(?:\.(\d+))?(?:\.(\w+))?\.md$/.exec(e),3),l=n[1],r=n[2],[4,a(e)]):[3,2];case 1:return s=o.sent().default,[2,{tabName:r,markdown:s,order:parseInt(l,10)||0}];case 2:return[2]}}))}))}(a,e)})))).then((function(e){return o(e.filter(Boolean))}))}),[t]);var i=e.name,m=e.component,h=s&&s.length>0,v=d(i),C=h&&E([{id:v("development"),title:m.firstTabLabel||"Develop"}],s.sort((function(e,t){return e.order-t.order})).map((function(e){var t=e.tabName;return{id:v(t),title:t}}))),S=h?f:b;return null===s?n.createElement(r.Loading,{fullContent:!0}):n.createElement(n.Fragment,null,n.createElement(r.BasicHeader,{title:{text:m.title||i},description:m.description,tabs:C}),n.createElement(S,x({},e,{tabs:s})))},g=a(153),O=a(154),w=function(e){var t=e.components;return n.createElement(r.SideNavigation,null,n.createElement(O.a,{notExpandable:!0},t.map((function(e){var t=e.path,a=e.name,l=e.component;return n.createElement(g.a,{key:t,href:"/"+a,name:(l.title||a)+(l.deprecated?" (deprecated)":"")})}))))},k=function(){return(k=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},B=function(e,t,a,n){return new(a||(a=Promise))((function(l,r){function s(e){try{i(n.next(e))}catch(e){r(e)}}function o(e){try{i(n.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?l(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,o)}i((n=n.apply(e,t||[])).next())}))},P=function(e,t){var a,n,l,r,s={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,n&&(l=2&r[0]?n.return:r[0]?n.throw||((l=n.return)&&l.call(n),0):n.next)&&!(l=l.call(n,r[1])).done)return l;switch(n=0,l&&(r=[2&r[0],l.value]),r[0]){case 0:case 1:l=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(l=(l=s.trys).length>0&&l[l.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!l||r[1]>l[0]&&r[1]<l[3])){s.label=r[1];break}if(6===r[0]&&s.label<l[1]){s.label=l[1],l=r;break}if(l&&s.label<l[2]){s.label=l[2],s.ops.push(r);break}l[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],n=0}finally{a=l=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}},L=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a},T=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,l,r=a.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=r.next()).done;)s.push(n.value)}catch(e){l={error:e}}finally{try{n&&!n.done&&(a=r.return)&&a.call(r)}finally{if(l)throw l.error}}return s};t.default=function(e){var t=e.match,o=T(n.useState([]),2),i=o[0],m=o[1];n.useEffect((function(){var e;(e=a(397),Promise.all(e.keys().map((function(t){return function(e,t){return B(void 0,void 0,void 0,(function(){var a,n,l;return P(this,(function(r){switch(r.label){case 0:return[4,t(e)];case 1:return a=r.sent(),n=s.keys(a)[0].replace(/Examples?/i,""),l=s.values(a)[0],[2,{name:n,path:e,component:l}]}}))}))}(t,e)})))).then((function(e){return m(e.filter(Boolean))}))}),[]);var x=n.useMemo((function(){return i.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){var a=e.path,r=L(e,["path"]);return n.createElement(l.b,{key:r.name,path:t.url+"/"+r.name,component:function(){return n.createElement(y,k({path:a},r))}})}))}),[i]);return 0===i.length?n.createElement(r.Loading,{fullContent:!0}):n.createElement("div",{className:"coveo-form flex full-content"},n.createElement(w,{components:i}),n.createElement("div",{className:"flex-auto overflow-auto relative"},n.createElement(l.d,null,x,n.createElement(l.b,{path:"/",component:function(){return n.createElement(l.a,{to:t.url+"/"+i[0].name})}}))))}}}]);
//# sourceMappingURL=components.bundle.js.map