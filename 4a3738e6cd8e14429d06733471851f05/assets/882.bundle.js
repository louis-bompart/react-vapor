(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{1965:function(t,e,n){"use strict";n.r(e),e.default="// tslint:disable-next-line:no-unused-variable\r\nimport {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IToastProps, Toast, ToastType} from '../Toast';\r\n\r\ndescribe('Toasts', () => {\r\n    let toastComponent: ReactWrapper<IToastProps, {}>;\r\n    let toastBasicAttributes: IToastProps;\r\n    let toastInstance: Toast;\r\n\r\n    describe('<Toast />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => shallow(<Toast title=\"Hello\" />)).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<Toast />', () => {\r\n        beforeEach(() => {\r\n            toastBasicAttributes = {\r\n                title: 'some title',\r\n            };\r\n\r\n            toastComponent = mount(<Toast {...toastBasicAttributes} />, {attachTo: document.getElementById('App')});\r\n            toastInstance = toastComponent.instance() as Toast;\r\n        });\r\n\r\n        afterEach(() => {\r\n            toastComponent.detach();\r\n        });\r\n\r\n        it('should call prop onRender on mounting if set', () => {\r\n            const renderSpy = jasmine.createSpy('onRender');\r\n            const newToastAttributes = _.extend({}, toastBasicAttributes, {onRender: renderSpy});\r\n\r\n            expect(() => toastInstance.componentWillMount()).not.toThrow();\r\n\r\n            toastComponent.unmount();\r\n            toastComponent.setProps(newToastAttributes).mount();\r\n\r\n            expect(renderSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should call prop onDestroy on unmounting if set', () => {\r\n            const destroySpy = jasmine.createSpy('onDestroy');\r\n            const newToastAttributes = _.extend({}, toastBasicAttributes, {onDestroy: destroySpy});\r\n\r\n            expect(() => toastInstance.componentWillUnmount()).not.toThrow();\r\n\r\n            toastComponent.setProps(newToastAttributes).mount();\r\n\r\n            toastComponent.unmount();\r\n            expect(destroySpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should have class \"mod-success\" when type is Success', () => {\r\n            toastComponent.setProps({type: ToastType.Success});\r\n\r\n            expect(toastComponent.children().hasClass('mod-success')).toBe(true);\r\n        });\r\n\r\n        it('should have class \"mod-success\" when both type and className props are empty', () => {\r\n            expect(toastComponent.children().hasClass('mod-success')).toBe(true);\r\n        });\r\n\r\n        it('should have class \"mod-warning\" if the type is Warning', () => {\r\n            const expectedClass = '.mod-warning';\r\n            const newToastAttributes = _.extend({}, toastBasicAttributes, {type: ToastType.Warning});\r\n\r\n            expect(toastComponent.find(expectedClass).length).toBe(0);\r\n\r\n            toastComponent.setProps(newToastAttributes).mount();\r\n\r\n            expect(toastComponent.find(expectedClass).length).toBe(1);\r\n        });\r\n\r\n        it('should have class \"mod-warning\" if the type is Error', () => {\r\n            const expectedClass = '.mod-error';\r\n            const newToastAttributes = _.extend({}, toastBasicAttributes, {type: ToastType.Error});\r\n\r\n            expect(toastComponent.find(expectedClass).length).toBe(0);\r\n\r\n            toastComponent.setProps(newToastAttributes).mount();\r\n\r\n            expect(toastComponent.find(expectedClass).length).toBe(1);\r\n        });\r\n\r\n        it('should have class \"mod-animated\" if the animate props is undefined or true', () => {\r\n            const expectedClass = '.mod-animated';\r\n            let newToastAttributes = _.extend({}, toastBasicAttributes, {animate: true});\r\n\r\n            expect(toastComponent.find(expectedClass).length).toBe(1);\r\n\r\n            toastComponent.setProps(newToastAttributes).mount();\r\n\r\n            expect(toastComponent.find(expectedClass).length).toBe(1);\r\n\r\n            newToastAttributes = _.extend({}, toastBasicAttributes, {animate: false});\r\n            toastComponent.setProps(newToastAttributes).mount();\r\n\r\n            expect(toastComponent.find(expectedClass).length).toBe(0);\r\n        });\r\n\r\n        it('should have any class specified in the className prop', () => {\r\n            const expectedClass = 'my-awesome-class';\r\n\r\n            toastComponent.setProps({className: expectedClass});\r\n\r\n            expect(toastComponent.hasClass(expectedClass));\r\n        });\r\n\r\n        it('should have a description when the content is set', () => {\r\n            const descriptionContainer = '.toast-description';\r\n            const expectedDescription = 'description';\r\n            const newToastAttributes = _.extend({}, toastBasicAttributes, {content: expectedDescription});\r\n\r\n            expect(toastComponent.find(descriptionContainer).length).toBe(0);\r\n\r\n            toastComponent.setProps(newToastAttributes).mount();\r\n\r\n            expect(toastComponent.find(descriptionContainer).length).toBe(1);\r\n            expect(toastComponent.find(descriptionContainer).text()).toBe(expectedDescription);\r\n        });\r\n\r\n        it('should allow JSX in the content', () => {\r\n            const descriptionContainer = '.toast-description';\r\n            const expectedDescription = 'description';\r\n            const newToastAttributes = _.extend({}, toastBasicAttributes, {\r\n                content: () => <a href=\"#\">{expectedDescription}</a>,\r\n            });\r\n\r\n            expect(toastComponent.find(descriptionContainer).length).toBe(0);\r\n\r\n            toastComponent.setProps(newToastAttributes).mount();\r\n\r\n            expect(toastComponent.find(descriptionContainer).length).toBe(1);\r\n            expect(toastComponent.find(descriptionContainer).text()).toBe(expectedDescription);\r\n        });\r\n\r\n        it('should render the children node inside the toast', () => {\r\n            const descriptionContainer = '.toast-description';\r\n            const expectedChildren = <div>my toast content</div>;\r\n\r\n            toastComponent = mount(<Toast {...toastBasicAttributes}>{expectedChildren}</Toast>, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n\r\n            expect(toastComponent.find(descriptionContainer).length).toBe(1);\r\n            expect(\r\n                toastComponent\r\n                    .find(descriptionContainer)\r\n                    .children()\r\n                    .equals(expectedChildren)\r\n            ).toBe(true);\r\n        });\r\n\r\n        it('should contain a toast-close when the prop is undefined or true', () => {\r\n            const closeSelector = '.toast-close';\r\n\r\n            // By default dismisslbe is omitted\r\n            expect(toastComponent.find(closeSelector).length).toBe(1);\r\n\r\n            const newToastAttributes = _.extend({}, toastBasicAttributes, {dismissible: true});\r\n            toastComponent.setProps(newToastAttributes).mount();\r\n\r\n            expect(toastComponent.find(closeSelector).length).toBe(1);\r\n        });\r\n\r\n        it('should call onClose when the user clicks on .toast-close', () => {\r\n            const closeSelector = '.toast-close';\r\n            const newToastAttributes = _.extend({}, toastBasicAttributes, {onClose: jasmine.createSpy('onClose')});\r\n\r\n            toastComponent.find(closeSelector).simulate('click');\r\n            expect(newToastAttributes.onClose).not.toHaveBeenCalled();\r\n\r\n            toastComponent.setProps(newToastAttributes).mount();\r\n\r\n            toastComponent.find(closeSelector).simulate('click');\r\n            expect(newToastAttributes.onClose).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should not contain a toast-close when the toast is not dismissible', () => {\r\n            const closeSelector = '.toast-close';\r\n            const newToastAttributes = _.extend({}, toastBasicAttributes, {dismissible: false});\r\n\r\n            toastComponent.setProps(newToastAttributes).mount();\r\n            expect(toastComponent.find(closeSelector).length).toBe(0);\r\n        });\r\n    });\r\n\r\n    describe('<Toast /> with a dismiss timer', () => {\r\n        const onCloseToast = jasmine.createSpy('onClose');\r\n        const dismissDelay = 2000;\r\n\r\n        beforeEach(() => {\r\n            toastBasicAttributes = {\r\n                title: 'some title',\r\n                // Subtract 1 so the jasmine.tick work as expected\r\n                dismiss: dismissDelay - 1,\r\n                onClose: onCloseToast,\r\n            };\r\n\r\n            onCloseToast.calls.reset();\r\n            jasmine.clock().install();\r\n\r\n            toastComponent = mount(<Toast {...toastBasicAttributes} />, {attachTo: document.getElementById('App')});\r\n            toastInstance = toastComponent.instance() as Toast;\r\n        });\r\n\r\n        afterEach(() => {\r\n            jasmine.clock().uninstall();\r\n            toastComponent.detach();\r\n        });\r\n\r\n        it('should call onClose when the timer expires', () => {\r\n            expect(onCloseToast).not.toHaveBeenCalled();\r\n\r\n            jasmine.clock().tick(dismissDelay);\r\n            expect(onCloseToast).toHaveBeenCalledTimes(1);\r\n\r\n            jasmine.clock().tick(dismissDelay);\r\n            expect(onCloseToast).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should not call onClose when the toast is not dimissible even if the timer expires', () => {\r\n            // Needed to clear the timeout since we mounted it in the beforeEach\r\n            toastComponent.simulate('mouseEnter');\r\n\r\n            const newToastAttributes = _.extend({}, toastBasicAttributes, {dismissible: false});\r\n            toastComponent.setProps(newToastAttributes).mount();\r\n            toastComponent.simulate('mouseLeave');\r\n\r\n            expect(onCloseToast).not.toHaveBeenCalled();\r\n\r\n            jasmine.clock().tick(dismissDelay);\r\n            expect(onCloseToast).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should clear the timeout on mouseenter', () => {\r\n            expect(onCloseToast).not.toHaveBeenCalled();\r\n\r\n            expect(toastComponent.find('.toast').length).toBe(1);\r\n            toastComponent.find('.toast').simulate('mouseEnter');\r\n            jasmine.clock().tick(dismissDelay);\r\n\r\n            expect(onCloseToast).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should reset the timeout on mouseleave', () => {\r\n            expect(onCloseToast).not.toHaveBeenCalled();\r\n\r\n            toastComponent.simulate('mouseEnter');\r\n            jasmine.clock().tick(dismissDelay);\r\n\r\n            expect(onCloseToast).not.toHaveBeenCalled();\r\n\r\n            toastComponent.simulate('mouseLeave');\r\n            jasmine.clock().tick(dismissDelay);\r\n\r\n            expect(onCloseToast).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should not dismiss the toast if the dismiss is set to 0', () => {\r\n            const newToastAttributes = _.extend({}, toastBasicAttributes, {dismiss: 0});\r\n            toastComponent.setProps(newToastAttributes).mount();\r\n\r\n            expect(onCloseToast).not.toHaveBeenCalled();\r\n\r\n            toastComponent.simulate('mouseEnter');\r\n            jasmine.clock().tick(dismissDelay);\r\n\r\n            expect(onCloseToast).not.toHaveBeenCalled();\r\n\r\n            toastComponent.simulate('mouseLeave');\r\n            jasmine.clock().tick(dismissDelay);\r\n\r\n            expect(onCloseToast).not.toHaveBeenCalled();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=882.bundle.js.map