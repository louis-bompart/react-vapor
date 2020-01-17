(window.webpackJsonp=window.webpackJsonp||[]).push([[556],{1649:function(e,t,n){"use strict";n.r(t),t.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {DeleteInputAction, IDeleteInputActionProps} from '../DeleteInputAction';\r\n\r\ndescribe('DeleteInputAction', () => {\r\n    describe('<DeleteInputAction />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<DeleteInputAction onClick={() => 1} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<DeleteInputAction />', () => {\r\n        let deleteInput: ReactWrapper<IDeleteInputActionProps, any>;\r\n\r\n        beforeEach(() => {\r\n            deleteInput = mount(<DeleteInputAction onClick={() => 1} />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            deleteInput.detach();\r\n        });\r\n\r\n        it('should render title prop if prop is set', () => {\r\n            const title = 'a title';\r\n            expect(deleteInput.find(`[title=\"${title}\"]`).length).toBe(0);\r\n\r\n            deleteInput.setProps({title}).update();\r\n            expect(deleteInput.find(`[title=\"${title}\"]`).length).toBeGreaterThanOrEqual(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=556.bundle.js.map