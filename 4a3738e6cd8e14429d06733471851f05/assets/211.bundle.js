(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1307:function(r,e,t){"use strict";t.r(e),e.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {ChartUtils} from '../ChartUtils';\r\nimport {ScatterSeries} from '../ScatterSeries';\r\nimport {XYChartContextMock} from './XYChartContextMock';\r\n\r\ndescribe('<ScatterSeries />', () => {\r\n    it('should not throw', () => {\r\n        expect(() => {\r\n            shallow(<ScatterSeries />);\r\n            shallow(<ScatterSeries radius={1337} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render a <g>', () => {\r\n        const component = shallow(<ScatterSeries />);\r\n        expect(component.find('g').exists()).toBe(true);\r\n    });\r\n\r\n    it('should render a circle per point in every series', () => {\r\n        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);\r\n\r\n        const {series} = XYChartContextMock;\r\n        const component = shallow(<ScatterSeries />);\r\n\r\n        expect(component.find('circle').length).toBe(ChartUtils.getXValues(series).length * series.length);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=211.bundle.js.map