(window.webpackJsonp=window.webpackJsonp||[]).push([[558],{1651:function(n,e,t){"use strict";t.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {Input} from '../../input/Input';\r\nimport {AddInputAction} from '../AddInputAction';\r\nimport {DeleteInputAction} from '../DeleteInputAction';\r\nimport {\r\n    ISplitInput,\r\n    ISplitMultilineInputProps,\r\n    ISplitMultilineInputState,\r\n    ISplitValue,\r\n    SplitMultilineInput,\r\n} from '../SplitMultilineInput';\r\n\r\ndescribe('SplitMultilineInput', () => {\r\n    const basicProps: ISplitMultilineInputProps = {\r\n        inputs: [\r\n            {\r\n                id: 'first',\r\n                label: 'First input',\r\n            },\r\n            {\r\n                id: 'second',\r\n                label: 'Second input',\r\n            },\r\n        ],\r\n        defaultValues: [],\r\n    };\r\n\r\n    describe('<SplitMultilineInput />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<SplitMultilineInput {...basicProps} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<SplitMultilineInput />', () => {\r\n        let splitMultilineInput: ReactWrapper<ISplitMultilineInputProps, ISplitMultilineInputState>;\r\n        let splitMultilineInputInstance: SplitMultilineInput;\r\n\r\n        const defaultValue: ISplitValue = {\r\n            first: 'something',\r\n            second: 'something else',\r\n        };\r\n\r\n        beforeEach(() => {\r\n            splitMultilineInput = mount(<SplitMultilineInput {...basicProps} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n            splitMultilineInputInstance = splitMultilineInput.instance() as any;\r\n        });\r\n\r\n        afterEach(() => {\r\n            splitMultilineInput.detach();\r\n        });\r\n\r\n        it('should get the inputs as a prop', () => {\r\n            const inputsProp: ISplitInput[] = splitMultilineInput.props().inputs;\r\n\r\n            expect(inputsProp).toBeDefined();\r\n            expect(inputsProp).toEqual(basicProps.inputs);\r\n        });\r\n\r\n        it('should get the defaultValues as a prop', () => {\r\n            const defaultValuesProps: ISplitValue[] = splitMultilineInput.props().defaultValues;\r\n\r\n            expect(defaultValuesProps).toBeDefined();\r\n            expect(defaultValuesProps).toEqual(basicProps.defaultValues);\r\n        });\r\n\r\n        it('should render an <AddInputAction /> when no values are specified', () => {\r\n            const innerAddInput = splitMultilineInput.find(AddInputAction);\r\n\r\n            expect(innerAddInput.length).toBe(1);\r\n        });\r\n\r\n        it('should render no <DeleteInputAction /> when no values are specified', () => {\r\n            const innerDeleteInput = splitMultilineInput.find(DeleteInputAction);\r\n\r\n            expect(innerDeleteInput.length).toBe(0);\r\n        });\r\n\r\n        it('should render one DeletableInput when one value is specified', () => {\r\n            splitMultilineInput.setProps(_.extend({}, basicProps, {defaultValues: [defaultValue]})).update();\r\n            const innerDeleteInput = splitMultilineInput.find(DeleteInputAction);\r\n\r\n            expect(innerDeleteInput.length).toBe(1);\r\n        });\r\n\r\n        it('should not throw if the default values do not reference the inputs correctly', () => {\r\n            expect(() =>\r\n                splitMultilineInput.setProps(\r\n                    _.extend({}, basicProps, {\r\n                        defaultValues: [\r\n                            {\r\n                                third: 'where does this value go?',\r\n                            },\r\n                        ],\r\n                    })\r\n                )\r\n            ).not.toThrow();\r\n        });\r\n\r\n        it('should call removeLine with the index of the input when clicking the delete input action', () => {\r\n            const removeLineSpy: jasmine.Spy = spyOn<any>(splitMultilineInputInstance, 'removeLine');\r\n            splitMultilineInput.setProps(_.extend({}, basicProps, {defaultValues: [defaultValue]})).update();\r\n\r\n            splitMultilineInput.find(DeleteInputAction).simulate('click');\r\n            splitMultilineInput.update();\r\n\r\n            expect(removeLineSpy).toHaveBeenCalledTimes(1);\r\n            expect(removeLineSpy).toHaveBeenCalledWith(0);\r\n        });\r\n\r\n        it('should call changeValue when an existing input is changed', () => {\r\n            const changeValueSpy: jasmine.Spy = spyOn<any>(splitMultilineInputInstance, 'changeValue');\r\n            const expectedValue: string = 'a new value';\r\n\r\n            splitMultilineInput.setProps(_.extend({}, basicProps, {defaultValues: [defaultValue]})).update();\r\n            splitMultilineInput\r\n                .find(Input)\r\n                .first()\r\n                .props()\r\n                .onChange(expectedValue, true);\r\n\r\n            expect(changeValueSpy).toHaveBeenCalledTimes(1);\r\n            expect(changeValueSpy).toHaveBeenCalledWith(\r\n                expectedValue,\r\n                true,\r\n                0,\r\n                _.keys(defaultValue)[0],\r\n                jasmine.anything()\r\n            );\r\n        });\r\n\r\n        it('should call addLine when clicking the <AddInputAction />', () => {\r\n            const addLineSpy: jasmine.Spy = spyOn<any>(splitMultilineInputInstance, 'addLine');\r\n\r\n            splitMultilineInput.find(AddInputAction).simulate('click');\r\n\r\n            expect(addLineSpy).toHaveBeenCalledTimes(1);\r\n            expect(addLineSpy.calls.mostRecent().args[0].length).toBe(basicProps.inputs.length);\r\n        });\r\n\r\n        it('should send the validation to the <Input /> if there is a validation set on an split input', () => {\r\n            const newProps: ISplitMultilineInputProps = _.extend({}, basicProps, {\r\n                inputs: [\r\n                    {\r\n                        id: 'new',\r\n                        label: 'New',\r\n                        validation: (value: any) => true,\r\n                    },\r\n                ],\r\n                defaultValues: [\r\n                    {\r\n                        new: 'a default value',\r\n                    },\r\n                ],\r\n            });\r\n            splitMultilineInput.setProps(newProps);\r\n\r\n            expect(\r\n                splitMultilineInput\r\n                    .find(Input)\r\n                    .first()\r\n                    .props()\r\n                    .validate('anything')\r\n            ).toBe(true);\r\n            expect(\r\n                splitMultilineInput\r\n                    .find(Input)\r\n                    .last()\r\n                    .props()\r\n                    .validate('anything')\r\n            ).toBe(true);\r\n\r\n            newProps.inputs[0].validation = (value: any) => false;\r\n            splitMultilineInput.setProps(newProps);\r\n\r\n            expect(\r\n                splitMultilineInput\r\n                    .find(Input)\r\n                    .first()\r\n                    .props()\r\n                    .validate('anything')\r\n            ).toBe(false);\r\n            expect(\r\n                splitMultilineInput\r\n                    .find(Input)\r\n                    .last()\r\n                    .props()\r\n                    .validate('anything')\r\n            ).toBe(false);\r\n        });\r\n\r\n        it('should remove the split value from the state when calling removeLine with the index of the value', () => {\r\n            splitMultilineInput.setProps(\r\n                _.extend({}, basicProps, {\r\n                    defaultValues: [\r\n                        defaultValue,\r\n                        {\r\n                            first: 'another one',\r\n                            second: 'second input of the second value',\r\n                        },\r\n                    ],\r\n                })\r\n            );\r\n\r\n            expect(splitMultilineInput.state().values.length).toBe(2);\r\n\r\n            (splitMultilineInputInstance as any).removeLine(1);\r\n\r\n            expect(splitMultilineInput.state().values.length).toBe(1);\r\n            expect(splitMultilineInput.state().values[0]).toEqual(defaultValue);\r\n\r\n            (splitMultilineInputInstance as any).removeLine(0);\r\n\r\n            expect(splitMultilineInput.state().values.length).toBe(0);\r\n        });\r\n\r\n        it('should add the new value to the state when calling addLine and there is no error', () => {\r\n            const expectedValue: string = 'new value';\r\n\r\n            spyOn(Input.prototype, 'getInnerValue').and.returnValue(expectedValue);\r\n\r\n            splitMultilineInput.find(AddInputAction).simulate('click');\r\n\r\n            expect(splitMultilineInput.state().values.length).toBe(1);\r\n            expect(splitMultilineInput.state().values[0][basicProps.inputs[0].id]).toBe(expectedValue);\r\n            expect(splitMultilineInput.state().values[0][basicProps.inputs[1].id]).toBe(expectedValue);\r\n        });\r\n\r\n        it('should reset the inputs of the line to add if the value was successfully added', () => {\r\n            const resetSpy: jasmine.Spy = spyOn(Input.prototype, 'reset');\r\n\r\n            splitMultilineInput.find(AddInputAction).simulate('click');\r\n\r\n            expect(resetSpy).toHaveBeenCalledTimes(2);\r\n        });\r\n\r\n        it('should not add the new value if an input is in error', () => {\r\n            const newProps: ISplitMultilineInputProps = _.extend({}, basicProps, {\r\n                inputs: [\r\n                    {\r\n                        id: 'new',\r\n                        label: 'New',\r\n                        validation: (value: any) => false,\r\n                    },\r\n                ],\r\n            });\r\n            splitMultilineInput.setProps(newProps);\r\n\r\n            splitMultilineInput.find(AddInputAction).simulate('click');\r\n\r\n            expect(splitMultilineInput.state().values.length).toBe(0);\r\n        });\r\n\r\n        it('should not reset the inputs if an input is in error', () => {\r\n            const resetSpy: jasmine.Spy = spyOn(Input.prototype, 'reset');\r\n            const newProps: ISplitMultilineInputProps = _.extend({}, basicProps, {\r\n                inputs: [\r\n                    {\r\n                        id: 'new',\r\n                        label: 'New',\r\n                        validation: (value: any) => false,\r\n                    },\r\n                ],\r\n            });\r\n            splitMultilineInput.setProps(newProps);\r\n\r\n            splitMultilineInput.find(AddInputAction).simulate('click');\r\n\r\n            expect(resetSpy).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should change the value of an input in the state when calling changeValue', () => {\r\n            const expectedValue: string = 'the value has been changed';\r\n            const valueId: string = basicProps.inputs[0].id;\r\n\r\n            splitMultilineInput.setProps(_.extend({}, basicProps, {defaultValues: [defaultValue]}));\r\n\r\n            (splitMultilineInputInstance as any).changeValue(expectedValue, true, 0, valueId, undefined);\r\n\r\n            expect(splitMultilineInput.state().values[0][valueId]).toBe(expectedValue);\r\n        });\r\n\r\n        it('should not change the value if it is not valid', () => {\r\n            const unexpectedValue: string = 'the value has been changed!';\r\n            const valueId: string = basicProps.inputs[0].id;\r\n            const input: any = {\r\n                validate: jasmine.createSpy('validate'),\r\n            };\r\n\r\n            splitMultilineInput.setProps(_.extend({}, basicProps, {defaultValues: [defaultValue]}));\r\n\r\n            (splitMultilineInputInstance as any).changeValue(unexpectedValue, false, 0, valueId, input);\r\n\r\n            expect(splitMultilineInput.state().values[0][valueId]).not.toBe(unexpectedValue);\r\n            expect(splitMultilineInput.state().values[0][valueId]).toBe(defaultValue[valueId]);\r\n        });\r\n\r\n        it('should call onChange if it is set as a prop when calling handleChange', () => {\r\n            const newProps: ISplitMultilineInputProps = _.extend({}, basicProps, {\r\n                onChange: jasmine.createSpy('onChange'),\r\n            });\r\n\r\n            expect(() => (splitMultilineInputInstance as any).handleChange()).not.toThrow();\r\n\r\n            splitMultilineInput.setProps(newProps);\r\n\r\n            (splitMultilineInputInstance as any).handleChange();\r\n\r\n            expect(newProps.onChange).toHaveBeenCalledTimes(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=558.bundle.js.map