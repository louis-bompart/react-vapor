(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1297:function(r,n,t){"use strict";t.r(n),n.default="import * as d3 from 'd3';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {VaporColors} from '../color/Color';\r\nimport {ChartBaseProps} from './ChartContainer';\r\nimport {ChartUtils} from './ChartUtils';\r\n\r\nexport interface XYPoint {\r\n    x: number;\r\n    y: number;\r\n}\r\n\r\nexport interface XYSerie {\r\n    label: string;\r\n    data: XYPoint[];\r\n}\r\n\r\nexport type Padding = {top?: number; right?: number; bottom?: number; left?: number};\r\n\r\nexport interface XYChartProps extends ChartBaseProps {\r\n    series: XYSerie[];\r\n    padding?: number | Padding;\r\n    colorPattern?: string[];\r\n    color?: (serie: number, colorPattern: string[], point?: XYPoint) => string;\r\n    xFormat?: (value: number) => string | number;\r\n    yFormat?: (value: number) => string | number;\r\n    xTicksCount?: number;\r\n    yTicksCount?: number;\r\n}\r\n\r\nexport interface XYChartContextProps {\r\n    width: number;\r\n    height: number;\r\n    xDomain: [number, number];\r\n    yDomain: [number, number];\r\n    series: XYSerie[];\r\n    colorPattern: string[];\r\n    xScale: d3.scale.Ordinal<number, number>;\r\n    yScale: d3.scale.Linear<number, number>;\r\n    xFormat: (value: number) => string | number;\r\n    yFormat: (value: number) => string | number;\r\n    xTicksCount: number;\r\n    yTicksCount: number;\r\n    color?: (serie: number, colorPattern: string[], point?: XYPoint) => string;\r\n}\r\n\r\nexport const XYChartContext = React.createContext<XYChartContextProps>({\r\n    width: 0,\r\n    height: 0,\r\n    xDomain: [0, 0],\r\n    yDomain: [0, 0],\r\n    series: [],\r\n    colorPattern: [],\r\n    xScale: d3.scale.ordinal<number, number>(),\r\n    yScale: d3.scale.linear(),\r\n    xFormat: _.identity,\r\n    yFormat: _.identity,\r\n    xTicksCount: 10,\r\n    yTicksCount: 10,\r\n});\r\n\r\nconst getDateChartColorPattern = (numOfColors: number) => {\r\n    const colorPattern: string[] = [VaporColors.azure, VaporColors.java, VaporColors.anakiwa, VaporColors.nepal];\r\n    return numOfColors > 2 ? [VaporColors['blue-8'], ...colorPattern] : colorPattern;\r\n};\r\nconst defaultPadding = 10;\r\n\r\nexport const XYChart: React.FunctionComponent<XYChartProps> = ({\r\n    width,\r\n    height,\r\n    series,\r\n    colorPattern = [],\r\n    color,\r\n    padding = defaultPadding,\r\n    xFormat = _.identity,\r\n    yFormat = _.identity,\r\n    xTicksCount,\r\n    yTicksCount,\r\n    children,\r\n}) => {\r\n    const xValues = ChartUtils.getXValues(series);\r\n    const xDomain: [number, number] = [Math.min(...xValues), Math.max(...xValues)];\r\n\r\n    const yValues = ChartUtils.getYValues(series);\r\n    const yDomain: [number, number] = [Math.min(0, ...yValues), Math.max(...yValues)];\r\n\r\n    colorPattern = colorPattern.length ? colorPattern : getDateChartColorPattern(series.length);\r\n    color = color || ((serie: number, pattern: string[]) => pattern[serie]);\r\n\r\n    const chartPadding: Padding = _.isNumber(padding)\r\n        ? {top: padding, right: padding, bottom: padding, left: padding}\r\n        : _.defaults(padding, {\r\n              top: defaultPadding,\r\n              right: defaultPadding,\r\n              bottom: defaultPadding,\r\n              left: defaultPadding,\r\n          });\r\n\r\n    width = width - chartPadding.left - chartPadding.right;\r\n    height = height - chartPadding.top - chartPadding.bottom;\r\n\r\n    const xScale = d3.scale\r\n        .ordinal<number, number>()\r\n        .domain(xValues)\r\n        .rangePoints([0, width]);\r\n\r\n    const yScale = d3.scale\r\n        .linear<number, number>()\r\n        .domain(yDomain)\r\n        .range([height, 0]);\r\n\r\n    return (\r\n        <XYChartContext.Provider\r\n            value={{\r\n                width,\r\n                height,\r\n                xDomain,\r\n                yDomain,\r\n                xScale,\r\n                yScale,\r\n                xFormat,\r\n                yFormat,\r\n                color,\r\n                colorPattern,\r\n                series,\r\n                xTicksCount: xTicksCount || xValues.length / 2,\r\n                yTicksCount: yTicksCount || yValues.length / 2,\r\n            }}\r\n        >\r\n            <svg width={width} height={height}>\r\n                <g transform={`translate(${chartPadding.left},${chartPadding.top})`}>{children}</g>\r\n            </svg>\r\n        </XYChartContext.Provider>\r\n    );\r\n};\r\nXYChart.displayName = 'XYChart';\r\n"}}]);
//# sourceMappingURL=198.bundle.js.map