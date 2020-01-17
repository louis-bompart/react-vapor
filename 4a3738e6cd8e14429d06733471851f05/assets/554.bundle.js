(window.webpackJsonp=window.webpackJsonp||[]).push([[554],{1645:function(n,t,r){"use strict";r.r(t),t.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {AddInputAction, IAddInputActionProps} from '../AddInputAction';\r\n\r\ndescribe('AddInputAction', () => {\r\n    describe('<AddInputAction />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<AddInputAction />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<AddInputAction />', () => {\r\n        let addInput: ReactWrapper<IAddInputActionProps, any>;\r\n\r\n        beforeEach(() => {\r\n            addInput = mount(<AddInputAction />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            addInput.detach();\r\n        });\r\n\r\n        it('should render title prop if prop is set', () => {\r\n            const title = 'a title';\r\n            expect(addInput.find(`[title=\"${title}\"]`).length).toBe(0);\r\n\r\n            addInput\r\n                .setProps({title})\r\n                .mount()\r\n                .update();\r\n            expect(addInput.find(`[title=\"${title}\"]`).length).toBeGreaterThanOrEqual(1);\r\n        });\r\n\r\n        it('should call onClick props on button click if prop is set', () => {\r\n            const clickSpy = jasmine.createSpy('onClick');\r\n\r\n            const innerAction = addInput.find('.input-actions');\r\n            innerAction.simulate('click');\r\n            expect(clickSpy.calls.count()).toBe(0);\r\n\r\n            addInput.setProps({onClick: clickSpy}).mount();\r\n            innerAction.simulate('click');\r\n            expect(clickSpy.calls.count()).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=554.bundle.js.map