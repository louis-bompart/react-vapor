(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{1610:function(n,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {keyCode} from '../../../utils/InputUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {IModalBackdropProps, ModalBackdrop} from '../ModalBackdrop';\r\n\r\ndescribe('ModalBackdrop', () => {\r\n    describe('<ModalBackdrop />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                const wrapper = shallow(<ModalBackdrop />);\r\n                wrapper.unmount();\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<ModalBackdrop />', () => {\r\n        let modalBackdrop: ReactWrapper<IModalBackdropProps, any>;\r\n\r\n        beforeEach(() => {\r\n            TestUtils.makeDeferSync();\r\n\r\n            modalBackdrop = mount(<ModalBackdrop />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            modalBackdrop.detach();\r\n        });\r\n\r\n        it('should set \"closed\" class when display prop is false or not specified', () => {\r\n            const container = modalBackdrop.find('div').first();\r\n            expect(container.hasClass('closed')).toBe(true);\r\n\r\n            modalBackdrop.setProps({display: false});\r\n            modalBackdrop.mount();\r\n            expect(container.hasClass('closed')).toBe(true);\r\n        });\r\n\r\n        it('should not set \"closed\" class when display prop is true', () => {\r\n            const container = modalBackdrop.find('div').first();\r\n            expect(container.html()).toContain('closed');\r\n\r\n            modalBackdrop.setProps({display: true});\r\n            modalBackdrop.mount();\r\n            expect(container.html()).not.toContain('closed');\r\n        });\r\n\r\n        it('should set \"prompt-backdrop\" class when isPrompt prop is passed', () => {\r\n            const container = modalBackdrop.find('div').first();\r\n            expect(container.html()).not.toContain('prompt-backdrop');\r\n\r\n            modalBackdrop.setProps({isPrompt: true});\r\n            modalBackdrop.mount();\r\n            expect(container.html()).toContain('prompt-backdrop');\r\n        });\r\n\r\n        it('should call onClick on click when onClick prop is set', () => {\r\n            const clickSpy = jasmine.createSpy('onClick');\r\n\r\n            modalBackdrop.simulate('click');\r\n            expect(clickSpy).not.toHaveBeenCalled();\r\n\r\n            modalBackdrop.setProps({onClick: clickSpy});\r\n            modalBackdrop.mount();\r\n            modalBackdrop.simulate('click');\r\n            expect(clickSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should call handleClick when user hits escape and the modal is the last one opened', () => {\r\n            const handleClickSpy = spyOn<any>(modalBackdrop.instance(), 'handleClick');\r\n\r\n            modalBackdrop.setProps({lastOpened: true});\r\n\r\n            const event = document.createEvent('Event');\r\n            (event as any).keyCode = keyCode.escape;\r\n            event.initEvent('keydown', true, true);\r\n            document.dispatchEvent(event);\r\n\r\n            expect(handleClickSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should not call handleClick when user hits escape and the modal is not the last one opened', () => {\r\n            const handleClickSpy = spyOn<any>(modalBackdrop.instance(), 'handleClick');\r\n\r\n            modalBackdrop.setProps({lastOpened: false});\r\n\r\n            const event = document.createEvent('Event');\r\n            (event as any).keyCode = keyCode.escape;\r\n            event.initEvent('keydown', true, true);\r\n            document.dispatchEvent(event);\r\n\r\n            expect(handleClickSpy).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should not call handleClick when user hits another key', () => {\r\n            const handleClickSpy = spyOn<any>(modalBackdrop.instance(), 'handleClick');\r\n\r\n            modalBackdrop.setProps({lastOpened: true});\r\n\r\n            const event = document.createEvent('Event');\r\n            (event as any).keyCode = keyCode.ctrl;\r\n            event.initEvent('keydown', true, true);\r\n            document.dispatchEvent(event);\r\n\r\n            expect(handleClickSpy).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should not call handleClick when user hits escape but the event was handled somewhere else', () => {\r\n            const handleClickSpy = spyOn<any>(modalBackdrop.instance(), 'handleClick');\r\n\r\n            modalBackdrop.setProps({lastOpened: true});\r\n\r\n            const event = document.createEvent('Event');\r\n            (event as any).keyCode = keyCode.escape;\r\n            event.initEvent('keydown', true, true);\r\n            event.preventDefault();\r\n            document.dispatchEvent(event);\r\n\r\n            expect(handleClickSpy).not.toHaveBeenCalled();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=519.bundle.js.map