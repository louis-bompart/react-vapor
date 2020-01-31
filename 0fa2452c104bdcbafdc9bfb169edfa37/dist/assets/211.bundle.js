(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1321:function(e,n,r){"use strict";r.r(n),n.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {LineSeries} from '../LineSeries';\r\nimport {XYChartContextMock} from './XYChartContextMock';\r\n\r\ndescribe('<LineSeries />', () => {\r\n    it('should not throw', () => {\r\n        expect(() => {\r\n            shallow(<LineSeries />);\r\n            shallow(<LineSeries interpolate=\"monotone\" strokeWith={2} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render a <g>', () => {\r\n        const component = shallow(<LineSeries />);\r\n        expect(component.find('g').exists()).toBe(true);\r\n    });\r\n\r\n    it('should render a path for every serie', () => {\r\n        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);\r\n\r\n        const {series} = XYChartContextMock;\r\n        const component = shallow(<LineSeries />);\r\n\r\n        expect(component.find('path').length).toBe(series.length);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=211.bundle.js.map