(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{1302:function(n,t,e){"use strict";e.r(t),t.default="import * as d3 from 'd3';\r\nimport {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {XYAxis} from '../XYAxis';\r\nimport {XYChartContext} from '../XYChart';\r\nimport {XYChartContextMock} from './XYChartContextMock';\r\n\r\ndescribe('<XYAxis />', () => {\r\n    it('should not throw', () => {\r\n        expect(() => {\r\n            shallow(<XYAxis />);\r\n            shallow(<XYAxis x={{show: false}} />);\r\n            shallow(<XYAxis x={{size: 25}} y={{innerPadding: 30}} />);\r\n            shallow(\r\n                <XYAxis\r\n                    x={{size: 25, innerPadding: 50, show: true, tickSize: 10}}\r\n                    y={{size: 50, innerPadding: 10, show: false, tickSize: 5}}\r\n                />\r\n            );\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render a context provider', () => {\r\n        const component = shallow(<XYAxis />);\r\n\r\n        const provider = component.find(XYChartContext.Provider);\r\n        expect(provider.exists()).toBe(true);\r\n    });\r\n\r\n    it('should reduce the width and height in the context provider', () => {\r\n        const component = shallow(<XYAxis />);\r\n\r\n        const context = component.find(XYChartContext.Provider).prop('value');\r\n        expect(context.width).toBeLessThan(XYChartContextMock.width);\r\n        expect(context.height).toBeLessThan(XYChartContextMock.height);\r\n    });\r\n\r\n    it('should render as many x ticks as there are points in the scale from the context', () => {\r\n        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);\r\n        const component = shallow(<XYAxis x={{show: true}} y={{show: false}} />);\r\n\r\n        expect(component.find('.x-axis-tick').length).toBe(XYChartContextMock.xScale.domain().length);\r\n    });\r\n\r\n    it('should render as many x ticks labels as d3 determine', () => {\r\n        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);\r\n        const component = shallow(<XYAxis x={{show: true}} y={{show: false}} />);\r\n\r\n        // D3 doesn't enforce a strict tick count\r\n        const linearScale = d3.scale\r\n            .linear()\r\n            .range(XYChartContextMock.xScale.range())\r\n            .domain(XYChartContextMock.xDomain);\r\n\r\n        expect(component.find('.x-axis-tick text').length).toBe(\r\n            linearScale.ticks(XYChartContextMock.xTicksCount).length\r\n        );\r\n    });\r\n\r\n    it('should render as many y ticks as defined in the context', () => {\r\n        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);\r\n        const component = shallow(<XYAxis x={{show: false}} y={{show: true}} />);\r\n\r\n        // D3 doesn't enforce a strict tick count\r\n        expect(component.find('.y-axis-tick').length).toBe(\r\n            XYChartContextMock.yScale.ticks(XYChartContextMock.yTicksCount).length\r\n        );\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=209.bundle.js.map