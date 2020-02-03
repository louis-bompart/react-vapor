(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{1555:function(n,t,e){"use strict";e.r(t),t.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport {findWhere} from 'underscore';\r\n\r\nimport {shallowWithState} from 'enzyme-redux';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {IInputProps, Input} from '../Input';\r\nimport {InputConnected} from '../InputConnected';\r\nimport {inputPossibleProps, inputProps} from './InputTestCommons.spec';\r\n\r\ndescribe('<InputConnected />', () => {\r\n    let store: Store<IReactVaporState>;\r\n    let wrapper: ReactWrapper<any, any>;\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n        wrapper?.detach();\r\n    });\r\n\r\n    const mountComponentWithProps = (props: IInputProps = {}) => {\r\n        if (wrapper && wrapper.length) {\r\n            wrapper.unmount();\r\n        }\r\n        wrapper = mount(\r\n            <Provider store={store}>\r\n                <InputConnected {...props} />\r\n            </Provider>,\r\n            {attachTo: document.getElementById('App')}\r\n        );\r\n    };\r\n\r\n    it('should mount without errors in various props scenarios', () => {\r\n        expect(() => {\r\n            mountComponentWithProps();\r\n        }).not.toThrow();\r\n\r\n        inputPossibleProps.forEach((props) => {\r\n            expect(() => {\r\n                mountComponentWithProps(props);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('dispatch props', () => {\r\n        it('should not throw when calling onRender with basic props', () => {\r\n            mountComponentWithProps(inputProps);\r\n            expect(() => wrapper.find(Input).prop('onRender')()).not.toThrow();\r\n        });\r\n\r\n        it('should not throw when calling onRender with validateOnMount set as a prop', () => {\r\n            mountComponentWithProps({...inputProps, validateOnMount: true});\r\n            expect(() => wrapper.find(Input).prop('onRender')()).not.toThrow();\r\n        });\r\n\r\n        it('should not throw when calling onDestroy', () => {\r\n            mountComponentWithProps(inputProps);\r\n            expect(() => wrapper.find(Input).prop('onDestroy')()).not.toThrow();\r\n        });\r\n\r\n        it('should not throw when calling onChange with basic props', () => {\r\n            mountComponentWithProps(inputProps);\r\n            expect(() => wrapper.find(Input).prop('onChange')()).not.toThrow();\r\n        });\r\n\r\n        it('should not throw when calling onChange when validateOnChange is set as a prop but not validate', () => {\r\n            mountComponentWithProps({...inputProps, validateOnChange: true});\r\n            expect(() => wrapper.find(Input).prop('onChange')()).not.toThrow();\r\n        });\r\n\r\n        it('should not throw when calling onChange when validateOnChange and validate are set as props', () => {\r\n            mountComponentWithProps({...inputProps, validateOnChange: true, validate: (value: string) => !!value});\r\n            expect(() => wrapper.find(Input).prop('onChange')()).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('onMount', () => {\r\n        it('should add an input in the store with default values if no default value, disabledOnMount, validateOnMount, and validate function are provided', () => {\r\n            mountComponentWithProps(inputProps);\r\n\r\n            const input = findWhere(store.getState().inputs, {id: inputProps.id});\r\n            expect(input.value).toBe('');\r\n            expect(input.valid).toBe(true);\r\n            expect(input.disabled).toBe(false);\r\n        });\r\n\r\n        it('should add an input in the store with the defaultValue if there is one in the props', () => {\r\n            const defaultValue = 'defaultValue';\r\n            mountComponentWithProps({...inputProps, defaultValue});\r\n\r\n            const input = findWhere(store.getState().inputs, {id: inputProps.id});\r\n            expect(input.value).toBe(defaultValue);\r\n        });\r\n\r\n        it('should add an input in the store with the disabled value set as the disabledOnMount prop if present in the props', () => {\r\n            const disabledOnMount = true;\r\n            mountComponentWithProps({...inputProps, disabledOnMount});\r\n\r\n            const input = findWhere(store.getState().inputs, {id: inputProps.id});\r\n            expect(input.disabled).toBe(disabledOnMount);\r\n        });\r\n\r\n        it('should add an input in the store with the validate value set to the result of the validate function if validateOnMount and validate are passed as props', () => {\r\n            const validateOnMount = true;\r\n            const validate = (value: string) => !!value;\r\n            let defaultValue = '';\r\n            mountComponentWithProps({...inputProps, defaultValue, validateOnMount, validate});\r\n            let input = findWhere(store.getState().inputs, {id: inputProps.id});\r\n\r\n            expect(validate(defaultValue)).toBe(false);\r\n            expect(input.valid).toBe(validate(defaultValue));\r\n\r\n            store.dispatch(clearState());\r\n\r\n            defaultValue = 'valid value';\r\n            mountComponentWithProps({...inputProps, defaultValue, validateOnMount, validate});\r\n            input = findWhere(store.getState().inputs, {id: inputProps.id});\r\n\r\n            expect(validate(defaultValue)).toBe(true);\r\n            expect(input.valid).toBe(validate(defaultValue));\r\n        });\r\n    });\r\n\r\n    describe('onUnmount', () => {\r\n        it('should remove the input from the store', () => {\r\n            mountComponentWithProps(inputProps);\r\n\r\n            expect(findWhere(store.getState().inputs, {id: inputProps.id})).toBeDefined();\r\n\r\n            wrapper.unmount();\r\n\r\n            expect(findWhere(store.getState().inputs, {id: inputProps.id})).toBeUndefined();\r\n        });\r\n    });\r\n\r\n    describe('onChange', () => {\r\n        it('should change the value in the store to the new value and leave the valid value unchanged', () => {\r\n            mountComponentWithProps(inputProps);\r\n            const oldInputState = findWhere(store.getState().inputs, {id: inputProps.id});\r\n            expect(oldInputState.value).toBe('');\r\n\r\n            (document.querySelector(`#${inputProps.id}`) as HTMLInputElement).value = 'new value';\r\n            wrapper.find('input').simulate('change');\r\n\r\n            const newInputState = findWhere(store.getState().inputs, {id: inputProps.id});\r\n            expect(newInputState.value).toBe('new value');\r\n            expect(newInputState.valid).toBe(oldInputState.valid);\r\n        });\r\n\r\n        it('should send the proper valid value to the input state if validateOnChange and validate are set as props', () => {\r\n            const validateOnChange = true;\r\n            const validate = (value: string) => !!value;\r\n            mountComponentWithProps({...inputProps, validate, validateOnChange});\r\n\r\n            (document.querySelector(`#${inputProps.id}`) as HTMLInputElement).value = 'new value';\r\n            wrapper.find('input').simulate('change');\r\n\r\n            let newInputState = findWhere(store.getState().inputs, {id: inputProps.id});\r\n            expect(validate(newInputState.value)).toBe(true);\r\n            expect(newInputState.valid).toBe(validate(newInputState.value));\r\n\r\n            (document.querySelector(`#${inputProps.id}`) as HTMLInputElement).value = '';\r\n            wrapper.find('input').simulate('change');\r\n\r\n            newInputState = findWhere(store.getState().inputs, {id: inputProps.id});\r\n            expect(validate(newInputState.value)).toBe(false);\r\n            expect(newInputState.valid).toBe(validate(newInputState.value));\r\n        });\r\n        it('should call changeDirtyState if set as props', () => {\r\n            const changeDirtyStateSpy = jasmine.createSpy();\r\n            const wrapperInputConnected = shallowWithState(<InputConnected />, {});\r\n\r\n            wrapperInputConnected.props().onChange();\r\n\r\n            expect(changeDirtyStateSpy).toHaveBeenCalledTimes(0);\r\n\r\n            wrapperInputConnected.setProps({changeDirtyState: changeDirtyStateSpy});\r\n            wrapperInputConnected.props().onChange();\r\n\r\n            expect(changeDirtyStateSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=449.bundle.js.map