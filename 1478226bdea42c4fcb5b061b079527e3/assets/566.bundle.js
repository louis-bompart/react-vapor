(window.webpackJsonp=window.webpackJsonp||[]).push([[566],{1671:function(n,e,t){"use strict";t.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {AddInput} from '../AddInput';\r\nimport {DeletableInput} from '../DeletableInput';\r\nimport {IMultilineInputProps, IMultilineInputValue, MultilineInput} from '../MultilineInput';\r\n\r\ndescribe('MultilineInput', () => {\r\n    describe('<MultilineInput />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<MultilineInput />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<MultilineInput />', () => {\r\n        let multilineInput: ReactWrapper<IMultilineInputProps, any>;\r\n        const valueId = 'an-id';\r\n        const valueValue = 'a-value';\r\n        const multilineInputValue: IMultilineInputValue = {\r\n            id: valueId,\r\n            value: valueValue,\r\n        };\r\n        const aNewValue = 'a-new-value';\r\n\r\n        beforeEach(() => {\r\n            multilineInput = mount(<MultilineInput />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            multilineInput.detach();\r\n        });\r\n\r\n        it('should render an AddInput when no values are specified', () => {\r\n            const innerAddInput = multilineInput.find('AddInput');\r\n\r\n            expect(innerAddInput.length).toBe(1);\r\n        });\r\n\r\n        it('should render no DeletableInput when no values are specifie.', () => {\r\n            const innerDeleteInput = multilineInput.find(DeletableInput);\r\n\r\n            expect(innerDeleteInput.length).toBe(0);\r\n        });\r\n\r\n        it('should render one DeletableInput when one value is specified', () => {\r\n            multilineInput.setProps({values: [multilineInputValue]});\r\n            multilineInput.mount();\r\n            const innerDeleteInput = multilineInput.find(DeletableInput);\r\n\r\n            expect(innerDeleteInput.length).toBe(1);\r\n        });\r\n\r\n        it('should call prop onChange with new value when add input changes', () => {\r\n            const changeSpy = jasmine.createSpy('onChange');\r\n            multilineInput.setProps({onChange: changeSpy, values: []});\r\n            multilineInput.mount();\r\n\r\n            const innerAddInput = multilineInput.find(AddInput);\r\n            expect(innerAddInput.length).toBe(1);\r\n\r\n            innerAddInput.props().onBlur(aNewValue);\r\n\r\n            expect(changeSpy.calls.count()).toBe(1);\r\n            expect(changeSpy.calls.first().args[0][0].value).toBe(aNewValue);\r\n        });\r\n\r\n        it('should call prop onChange with updated value when delete input changes', () => {\r\n            const changeSpy = jasmine.createSpy('onChange');\r\n            multilineInput.setProps({onChange: changeSpy, values: [multilineInputValue]});\r\n            multilineInput.mount();\r\n\r\n            const innerDeleteInput = multilineInput.find(DeletableInput);\r\n            expect(innerDeleteInput.length).toBe(1);\r\n\r\n            innerDeleteInput.props().onBlur(aNewValue);\r\n\r\n            expect(changeSpy.calls.count()).toBe(1);\r\n            expect(changeSpy.calls.first().args[0][0].value).toBe(aNewValue);\r\n        });\r\n\r\n        it('should call prop onChange with removed value when delete input changes for something empty', () => {\r\n            const changeSpy = jasmine.createSpy('onChange');\r\n            multilineInput.setProps({onChange: changeSpy, values: [multilineInputValue]});\r\n            multilineInput.mount();\r\n\r\n            const innerDeleteInput = multilineInput.find(DeletableInput);\r\n            expect(innerDeleteInput.length).toBe(1);\r\n\r\n            innerDeleteInput.props().onBlur('');\r\n\r\n            expect(changeSpy.calls.count()).toBe(1);\r\n            expect(changeSpy.calls.first().args[0].length).toBe(0);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=566.bundle.js.map