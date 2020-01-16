(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1301:function(n,r,e){"use strict";e.r(r),r.default='import * as d3 from \'d3\';\r\nimport * as React from \'react\';\r\nimport * as _ from \'underscore\';\r\n\r\nimport {XYChartContext} from \'./XYChart\';\r\n\r\nexport interface AxisProps {\r\n    show?: boolean;\r\n    tickSize?: number;\r\n    tickTextSize?: number;\r\n    size?: number;\r\n    innerPadding?: number;\r\n}\r\n\r\nexport interface XYAxisProps {\r\n    x?: AxisProps;\r\n    y?: AxisProps;\r\n}\r\n\r\nconst withDefaultConfig = (props: Partial<AxisProps> = {}): AxisProps =>\r\n    _.defaults(props, {\r\n        tickSize: props.show !== false ? 7 : 0,\r\n        tickTextSize: 0,\r\n        size: props.show !== false ? 40 : 0,\r\n        innerPadding: 0,\r\n        show: true,\r\n        format: _.identity,\r\n    });\r\n\r\nexport const XYAxis: React.FunctionComponent<XYAxisProps> = ({x, y, children}) => {\r\n    const context = React.useContext(XYChartContext);\r\n    const {xDomain, yDomain, xScale, yScale, xFormat, yFormat, width, height, xTicksCount, yTicksCount} = context;\r\n\r\n    const xAxis = withDefaultConfig(x);\r\n    const yAxis = withDefaultConfig(y);\r\n\r\n    const yInnerPadding = yAxis.innerPadding || yAxis.tickTextSize / 2;\r\n    const xInnerPadding = xAxis.innerPadding || xAxis.tickTextSize / 2;\r\n\r\n    const newWidth = width - yAxis.size - 2 * xInnerPadding;\r\n    const newHeight = height - xAxis.size - 2 * yInnerPadding;\r\n\r\n    const newXScale = xScale.rangePoints([0, newWidth]);\r\n    const newYScale = yScale.range([newHeight, 0]);\r\n\r\n    const minX = newXScale(xDomain[0]);\r\n    const maxX = newXScale(xDomain[1]);\r\n    const minY = newYScale(yDomain[0]);\r\n    const maxY = newYScale(yDomain[1]);\r\n\r\n    const yTicks = newYScale\r\n        .ticks(yAxis.tickTextSize === 0 ? yTicksCount : Math.floor(newHeight / yAxis.tickTextSize))\r\n        .map((tick: number) => (\r\n            <g\r\n                key={`y-axis-tick-${tick}`}\r\n                className="y-axis-tick"\r\n                transform={`translate(${maxX + 2 * xInnerPadding},${newYScale(tick) + yInnerPadding})`}\r\n            >\r\n                <line stroke="black" x1="0" x2={yAxis.tickSize} />\r\n                <text textAnchor="start" x={yAxis.tickSize + 5} y={5}>\r\n                    {yFormat(tick)}\r\n                </text>\r\n            </g>\r\n        ));\r\n\r\n    const xLinearScale = d3.scale\r\n        .linear()\r\n        .range(newXScale.range())\r\n        .domain(xDomain);\r\n    const xNumberOfTicks = xLinearScale.ticks(\r\n        xAxis.tickTextSize === 0 ? xTicksCount : Math.floor(newWidth / xAxis.tickTextSize)\r\n    ).length;\r\n    const ticks = _.chunk(newXScale.domain(), Math.floor(newXScale.domain().length / xNumberOfTicks))\r\n        // filter out the last array if it contains only one value and other arrays are bigger\r\n        .filter(\r\n            (arr: number[], index: number, arrays: number[][]) =>\r\n                index < arrays.length - 1 || arr.length > 1 || arrays[0].length === 1\r\n        )\r\n        // get the element in the middle of the chunk\r\n        .map((values: number[]) => values[Math.floor((values.length - 1) / 2)]);\r\n\r\n    const xTicks = newXScale.domain().map((tick: number) => {\r\n        const text = _.contains(ticks, tick) && xFormat(tick);\r\n        const textX = newXScale(tick);\r\n        return (\r\n            <g\r\n                key={`x-axis-tick-${tick}`}\r\n                transform={`translate(${textX + xInnerPadding},${minY + 2 * yInnerPadding})`}\r\n                className="x-axis-tick"\r\n            >\r\n                <line stroke="black" y1="0" y2={xAxis.tickSize} />\r\n                {text && (\r\n                    <text textAnchor="middle" y={xAxis.tickSize + 15}>\r\n                        {text}\r\n                    </text>\r\n                )}\r\n            </g>\r\n        );\r\n    });\r\n\r\n    return (\r\n        <>\r\n            <XYChartContext.Provider\r\n                value={{\r\n                    ...context,\r\n                    xScale: newXScale,\r\n                    yScale: newYScale,\r\n                    height: minY,\r\n                    width: maxX,\r\n                }}\r\n            >\r\n                <g transform={`translate(${xInnerPadding},${yInnerPadding})`}>{children}</g>\r\n            </XYChartContext.Provider>\r\n            {yAxis.show && (\r\n                <g className="y-axis">\r\n                    <line\r\n                        className="axis-line"\r\n                        stroke="black"\r\n                        x1={maxX + 2 * xInnerPadding}\r\n                        x2={maxX + 2 * xInnerPadding}\r\n                        y1={minY + 2 * yInnerPadding}\r\n                        y2={maxY}\r\n                    />\r\n                    {yTicks}\r\n                </g>\r\n            )}\r\n            {xAxis.show && (\r\n                <g className="x-axis">\r\n                    <line\r\n                        className="axis-line"\r\n                        stroke="black"\r\n                        x1={minX}\r\n                        x2={maxX + 2 * xInnerPadding}\r\n                        y1={minY + 2 * yInnerPadding}\r\n                        y2={minY + 2 * yInnerPadding}\r\n                    />\r\n                    {xTicks}\r\n                </g>\r\n            )}\r\n        </>\r\n    );\r\n};\r\nXYAxis.displayName = \'XYAxis\';\r\n'}}]);
//# sourceMappingURL=201.bundle.js.map