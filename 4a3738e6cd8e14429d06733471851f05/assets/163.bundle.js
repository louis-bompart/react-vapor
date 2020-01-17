(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{1261:function(n,r,e){"use strict";e.r(r),r.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {BannerContainer} from '../BannerContainer';\r\n\r\ndescribe('BannerContainer', () => {\r\n    it('should not throw', () => {\r\n        expect(() => {\r\n            shallow(<BannerContainer />);\r\n            shallow(<BannerContainer>Hello</BannerContainer>);\r\n            shallow(<BannerContainer className=\"test\">Hello</BannerContainer>);\r\n            shallow(\r\n                <BannerContainer className=\"test\" onClick={_.noop}>\r\n                    Hello\r\n                </BannerContainer>\r\n            );\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should contain the children', () => {\r\n        const id = 'this-is-my-id';\r\n        const wrapper = shallow(\r\n            <BannerContainer>\r\n                <div id={id} />\r\n            </BannerContainer>\r\n        );\r\n\r\n        expect(wrapper.find(`#${id}`).exists()).toBe(true);\r\n    });\r\n\r\n    it('should allow custom classes', () => {\r\n        const className = 'this-is-my-className';\r\n        const wrapper = shallow(<BannerContainer className={className} />);\r\n\r\n        expect(wrapper.hasClass(className)).toBe(true);\r\n    });\r\n\r\n    it('should allow other props', () => {\r\n        const wrapper = shallow(<BannerContainer onClick={_.noop} style={{}} />);\r\n\r\n        expect(wrapper.prop('onClick')).toBeDefined();\r\n        expect(wrapper.prop('style')).toBeDefined();\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=163.bundle.js.map