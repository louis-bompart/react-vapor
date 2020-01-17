(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1272:function(e,r,s){"use strict";s.r(r),r.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {BorderedLine} from '../BorderedLine';\r\n\r\ndescribe('BorderedLine', () => {\r\n    it('should render without error in various scenarios', () => {\r\n        expect(() => shallow(<BorderedLine />)).not.toThrow();\r\n        expect(() => shallow(<BorderedLine>hello</BorderedLine>)).not.toThrow();\r\n        expect(() => shallow(<BorderedLine className=\"testClass\">hello</BorderedLine>)).not.toThrow();\r\n    });\r\n\r\n    it('should render with default classes by default', () => {\r\n        expect(\r\n            shallow(<BorderedLine />)\r\n                .find('div')\r\n                .prop('className')\r\n        ).toBe(BorderedLine.defaultClassName);\r\n    });\r\n\r\n    it('should add className to default className if some are passed', () => {\r\n        const testClasses = 'we are five custom classes';\r\n        const className = shallow(<BorderedLine className={testClasses} />)\r\n            .find('div')\r\n            .prop('className');\r\n\r\n        expect(className).toContain(testClasses);\r\n        expect(className).toContain(BorderedLine.defaultClassName);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=173.bundle.js.map