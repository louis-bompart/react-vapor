(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1292:function(r,n,e){"use strict";e.r(n),n.default="import * as d3 from 'd3';\r\nimport * as React from 'react';\r\n\r\nimport {XYChartContext, XYPoint, XYSerie} from './XYChart';\r\n\r\nexport interface LineSeriesProps {\r\n    interpolate?: string;\r\n    strokeWith?: number;\r\n}\r\n\r\nexport const LineSeries: React.FunctionComponent<LineSeriesProps> = ({\r\n    interpolate = 'linear',\r\n    strokeWith = 2,\r\n    children,\r\n}) => {\r\n    const {series, xScale, yScale, color, colorPattern} = React.useContext(XYChartContext);\r\n\r\n    const line = d3.svg\r\n        .line<XYPoint>()\r\n        .x((d) => xScale(d.x))\r\n        .y((d) => yScale(d.y))\r\n        .interpolate(interpolate);\r\n\r\n    const lines = series.map((serie: XYSerie, i: number) => (\r\n        <path\r\n            key={`line-${i}`}\r\n            fill=\"none\"\r\n            strokeWidth={strokeWith}\r\n            stroke={color(i, colorPattern)}\r\n            d={line(serie.data)}\r\n        />\r\n    ));\r\n\r\n    return (\r\n        <g className=\"line-series\">\r\n            {lines}\r\n            {children}\r\n        </g>\r\n    );\r\n};\r\nLineSeries.displayName = 'LineSeries';\r\n"}}]);
//# sourceMappingURL=194.bundle.js.map