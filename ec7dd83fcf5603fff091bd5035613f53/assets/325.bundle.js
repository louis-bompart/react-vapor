(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{1431:function(n,o,e){"use strict";e.r(o),o.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {Dropdown, IDropdownProps} from '../Dropdown';\r\n\r\ndescribe('Dropdown', () => {\r\n    const basicDropdownProps: IDropdownProps = {\r\n        toggleContent: [<span key=\"toggle\">Toggle</span>],\r\n        dropdownItems: [<li key=\"option1\">Option 1</li>, <li key=\"option2\">Option 2</li>],\r\n    };\r\n\r\n    describe('<Dropdown />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<Dropdown {...basicDropdownProps} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<Dropdown />', () => {\r\n        let dropdown: ReactWrapper<IDropdownProps, any>;\r\n        let dropdownInstance: Dropdown;\r\n\r\n        beforeEach(() => {\r\n            dropdown = mount(<Dropdown {...basicDropdownProps} />, {attachTo: document.getElementById('App')});\r\n            dropdownInstance = dropdown.instance() as Dropdown;\r\n        });\r\n\r\n        afterEach(() => {\r\n            dropdown.detach();\r\n        });\r\n\r\n        it('should get the toggleContent as a prop', () => {\r\n            const toggleContentProp = dropdown.props().toggleContent;\r\n\r\n            expect(toggleContentProp).toBeDefined();\r\n            expect(toggleContentProp.length).toBe(basicDropdownProps.toggleContent.length);\r\n        });\r\n\r\n        it('should get the dropdown items as a prop', () => {\r\n            const dropdownItemsProp = dropdown.props().dropdownItems;\r\n\r\n            expect(dropdownItemsProp).toBeDefined();\r\n            expect(dropdownItemsProp.length).toBe(basicDropdownProps.dropdownItems.length);\r\n        });\r\n\r\n        it('should have \"open\" class if opened', () => {\r\n            const newDropdownProps = _.extend({}, basicDropdownProps, {isOpened: true});\r\n\r\n            expect(dropdown.find('.open').length).toBe(0);\r\n\r\n            dropdown.setProps(newDropdownProps);\r\n            expect(dropdown.find('.open').length).toBe(1);\r\n        });\r\n\r\n        it('should have the classes passed as props if any', () => {\r\n            const newDropdownProps = _.extend({}, basicDropdownProps, {className: 'some-class'});\r\n\r\n            expect(dropdown.find('.some-class').length).toBe(0);\r\n\r\n            dropdown.setProps(newDropdownProps).update();\r\n            expect(dropdown.find('.some-class').length).toBeGreaterThanOrEqual(1);\r\n        });\r\n\r\n        it('should call onClick prop if set when clicking the toggle', () => {\r\n            const onClickSpy = jasmine.createSpy('onClick');\r\n            const newDropdownProps = _.extend({}, basicDropdownProps, {onClick: onClickSpy});\r\n\r\n            expect(() => dropdownInstance['handleClick'].call(dropdownInstance)).not.toThrow();\r\n\r\n            dropdown.setProps(newDropdownProps);\r\n            dropdown.find('.dropdown-toggle').simulate('click');\r\n            expect(onClickSpy).toHaveBeenCalled();\r\n        });\r\n    });\r\n\r\n    describe('<Dropdown />', () => {\r\n        beforeEach(() => {\r\n            const otherElement: HTMLDivElement = document.createElement('div');\r\n            otherElement.setAttribute('id', 'other');\r\n            document.body.appendChild(otherElement);\r\n        });\r\n\r\n        afterEach(() => document.getElementById('other').remove());\r\n\r\n        const clickOnOther = () => {\r\n            const evt = new MouseEvent('click', {\r\n                view: window,\r\n                bubbles: true,\r\n                cancelable: true,\r\n                clientX: 20,\r\n            });\r\n            document.getElementById('other').dispatchEvent(evt);\r\n        };\r\n\r\n        it('should not add a listener on document on mount if onDocumentClick is set but the dropdown is not opened', () => {\r\n            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');\r\n            const props = _.extend({}, basicDropdownProps, {onDocumentClick: onDocumentClickSpy});\r\n\r\n            mount(<Dropdown {...props} />, {attachTo: document.getElementById('App')});\r\n            clickOnOther();\r\n            expect(onDocumentClickSpy).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should add a listener on document on mount and remove it on unmount if prop onDocumentClick is set', () => {\r\n            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');\r\n            const props = _.extend({}, basicDropdownProps, {isOpened: true, onDocumentClick: onDocumentClickSpy});\r\n\r\n            const dropdown = mount(<Dropdown {...props} />, {attachTo: document.getElementById('App')});\r\n            expect(dropdown.props().isOpened).toBe(true);\r\n\r\n            clickOnOther();\r\n            expect(onDocumentClickSpy).toHaveBeenCalledTimes(1);\r\n\r\n            dropdown.unmount();\r\n            clickOnOther();\r\n            expect(onDocumentClickSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should not call onDocumentClick when prop is set and clicking on the dropdown', () => {\r\n            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');\r\n            const props = _.extend({}, basicDropdownProps, {isOpened: true, onDocumentClick: onDocumentClickSpy});\r\n\r\n            mount(<Dropdown {...props} />, {attachTo: document.getElementById('App')});\r\n\r\n            (document.getElementsByClassName('dropdown')[0] as HTMLDivElement).click();\r\n            expect(onDocumentClickSpy).not.toHaveBeenCalled();\r\n\r\n            document.getElementById('App').click();\r\n            expect(onDocumentClickSpy).toHaveBeenCalled();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=325.bundle.js.map