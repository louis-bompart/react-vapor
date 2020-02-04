(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{1529:function(e,r,t){"use strict";t.r(r),r.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Title} from '../../title/Title';\r\nimport {BasicHeader, IBasicHeaderProps} from '../BasicHeader';\r\nimport {HeaderWrapper} from '../HeaderWrapper';\r\n\r\ndescribe('<BasicHeader/>', () => {\r\n    const defaultProps: IBasicHeaderProps = {\r\n        title: {\r\n            text: 'test',\r\n        },\r\n    };\r\n\r\n    let basicHeaderComponent: ReactWrapper<IBasicHeaderProps, any>;\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<BasicHeader {...defaultProps} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('<Breadcrumb /> with default props', () => {\r\n        beforeEach(() => {\r\n            basicHeaderComponent = mount(<BasicHeader {...defaultProps} />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            basicHeaderComponent.detach();\r\n        });\r\n\r\n        it('should render the default title', () => {\r\n            const titleComponent = basicHeaderComponent.find(Title);\r\n            expect(titleComponent.length).toBe(1);\r\n            expect(titleComponent.props().text).toBe(defaultProps.title.text);\r\n        });\r\n\r\n        it('should render the HeaderWrapper', () => {\r\n            expect(basicHeaderComponent.find(HeaderWrapper).length).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=421.bundle.js.map