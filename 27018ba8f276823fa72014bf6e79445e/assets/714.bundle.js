(window.webpackJsonp=window.webpackJsonp||[]).push([[714],{1815:function(r,e,n){"use strict";n.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Svg} from '../../svg/Svg';\r\nimport {ISideNavigationHeaderProps, SideNavigationHeader} from '../SideNavigationHeader';\r\n\r\ndescribe('<SideNavigationHeader />', () => {\r\n    const title = 'hello';\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<SideNavigationHeader title={title} />);\r\n        }).not.toThrow();\r\n    });\r\n});\r\n\r\ndescribe('<SideNavigationHeader />', () => {\r\n    let wrapper: ReactWrapper<ISideNavigationHeaderProps, any>;\r\n    const title = 'hello';\r\n\r\n    beforeEach(() => {\r\n        wrapper = mount(<SideNavigationHeader title={title} />, {attachTo: document.getElementById('App')});\r\n    });\r\n\r\n    afterEach(() => {\r\n        wrapper.detach();\r\n    });\r\n\r\n    it('should render an icon if svgTitle prop is specified.', () => {\r\n        const svgName = 'menu-content';\r\n        wrapper.setProps({svgName, title});\r\n        wrapper.mount();\r\n\r\n        const icon = wrapper.find(Svg).first();\r\n        expect(icon).toBeDefined();\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=714.bundle.js.map