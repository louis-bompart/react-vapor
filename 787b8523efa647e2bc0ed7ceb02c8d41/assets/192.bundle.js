(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1290:function(e,r,n){"use strict";n.r(r),r.default="import * as _ from 'underscore';\r\nimport {XYPoint, XYSerie} from './XYChart';\r\n\r\nconst getValues = (series: XYSerie[], getValue: (point: XYPoint) => number) => {\r\n    return _.chain(series)\r\n        .map((serie: XYSerie) => serie.data.map(getValue))\r\n        .flatten()\r\n        .uniq()\r\n        .sort()\r\n        .value();\r\n};\r\n\r\nconst getXValues = (series: XYSerie[]) => getValues(series, ({x}: XYPoint) => x);\r\n\r\nconst getYValues = (series: XYSerie[]) => getValues(series, ({y}: XYPoint) => y);\r\n\r\nexport const ChartUtils = {\r\n    getXValues,\r\n    getYValues,\r\n};\r\n"}}]);
//# sourceMappingURL=192.bundle.js.map