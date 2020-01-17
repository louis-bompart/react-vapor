(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{1524:function(n,o,e){"use strict";e.r(o),o.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {InfoBoxLink} from '../InfoBoxLink';\r\n\r\ndescribe('InfoBoxLink', () => {\r\n    it('should not throw', () => {\r\n        expect(() => shallow(<InfoBoxLink />)).not.toThrow();\r\n        expect(() => shallow(<InfoBoxLink>Link</InfoBoxLink>)).not.toThrow();\r\n        expect(() => shallow(<InfoBoxLink href=\"#\">Link</InfoBoxLink>)).not.toThrow();\r\n    });\r\n\r\n    it('should allow custom classes', () => {\r\n        const expectedClass = 'some-link-class';\r\n        const wrapper = shallow(<InfoBoxLink className={expectedClass} />);\r\n\r\n        expect(wrapper.hasClass(expectedClass)).toBe(true);\r\n    });\r\n\r\n    it('should render children', () => {\r\n        const expectedChildren = <div className=\"to-find\" />;\r\n        const wrapper = shallow(<InfoBoxLink>{expectedChildren}</InfoBoxLink>);\r\n\r\n        expect(wrapper.contains(expectedChildren)).toBe(true);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=432.bundle.js.map