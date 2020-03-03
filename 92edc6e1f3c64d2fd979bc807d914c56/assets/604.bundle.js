(window.webpackJsonp=window.webpackJsonp||[]).push([[604],{1698:function(e,t,n){"use strict";n.r(t),t.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {IChangeOptionPayload, IOptionPickerPayload, OptionPickerActions} from '../OptionPickerActions';\r\nimport {\r\n    IOptionPickerState,\r\n    optionPickerInitialState,\r\n    optionPickerReducer,\r\n    optionPickersInitialState,\r\n    optionPickersReducer,\r\n} from '../OptionPickerReducers';\r\n\r\ndescribe('Option picker', () => {\r\n    const genericAction: IReduxAction<IOptionPickerPayload> = {\r\n        type: 'DO_SOMETHING',\r\n        payload: {\r\n            id: 'some-option-picker',\r\n        },\r\n    };\r\n\r\n    describe('optionPickersReducer', () => {\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const optionPickersState: IOptionPickerState[] = optionPickersReducer(undefined, genericAction);\r\n\r\n            expect(optionPickersState).toBe(optionPickersInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IOptionPickerState[] = [\r\n                {id: 'some-option-picker', selectedValue: 'anything', selectedLabel: 'the label'},\r\n            ];\r\n            const optionPickersState: IOptionPickerState[] = optionPickersReducer(oldState, genericAction);\r\n\r\n            expect(optionPickersState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more IOptionPickerState when the action is \"ADD_OPTION_PICKER\"', () => {\r\n            let oldState: IOptionPickerState[] = optionPickersInitialState;\r\n            const action: IReduxAction<IOptionPickerPayload> = {\r\n                type: OptionPickerActions.add,\r\n                payload: {\r\n                    id: 'some-option-picker',\r\n                },\r\n            };\r\n            let optionPickersState: IOptionPickerState[] = optionPickersReducer(oldState, action);\r\n\r\n            expect(optionPickersState.length).toBe(oldState.length + 1);\r\n            expect(\r\n                optionPickersState.filter((optionPicker: IOptionPickerState) => optionPicker.id === action.payload.id)\r\n                    .length\r\n            ).toBe(1);\r\n\r\n            oldState = optionPickersState;\r\n            action.payload.id = 'some-option-picker2';\r\n            optionPickersState = optionPickersReducer(oldState, action);\r\n\r\n            expect(optionPickersState.length).toBe(oldState.length + 1);\r\n            expect(\r\n                optionPickersState.filter((optionPicker: IOptionPickerState) => optionPicker.id === action.payload.id)\r\n                    .length\r\n            ).toBe(1);\r\n        });\r\n\r\n        it('should return the old state without the IOptionPickerState when the action is \"REMOVE_OPTION_PICKER', () => {\r\n            let oldState: IOptionPickerState[] = [\r\n                {\r\n                    id: 'some-option-picker2',\r\n                    selectedValue: '',\r\n                    selectedLabel: '',\r\n                },\r\n                {\r\n                    id: 'some-option-picker',\r\n                    selectedValue: 'something',\r\n                    selectedLabel: 'something',\r\n                },\r\n                {\r\n                    id: 'some-option-picker3',\r\n                    selectedValue: 'nothing',\r\n                    selectedLabel: 'nothing',\r\n                },\r\n            ];\r\n            const action: IReduxAction<IOptionPickerPayload> = {\r\n                type: OptionPickerActions.remove,\r\n                payload: {\r\n                    id: 'some-option-picker',\r\n                },\r\n            };\r\n            let optionPickersState: IOptionPickerState[] = optionPickersReducer(oldState, action);\r\n\r\n            expect(optionPickersState.length).toBe(oldState.length - 1);\r\n            expect(\r\n                optionPickersState.filter((optionPicker: IOptionPickerState) => optionPicker.id === action.payload.id)\r\n                    .length\r\n            ).toBe(0);\r\n\r\n            oldState = optionPickersState;\r\n            action.payload.id = 'some-option-picker2';\r\n            optionPickersState = optionPickersReducer(oldState, action);\r\n\r\n            expect(optionPickersState.length).toBe(oldState.length - 1);\r\n            expect(\r\n                optionPickersState.filter((optionPicker: IOptionPickerState) => optionPicker.id === action.payload.id)\r\n                    .length\r\n            ).toBe(0);\r\n        });\r\n\r\n        it('should return the old state when the action is \"REMOVE_OPTION_PICKER\" and the options cycle id does not exist', () => {\r\n            const oldState: IOptionPickerState[] = [\r\n                {\r\n                    id: 'some-option-picker2',\r\n                    selectedValue: '',\r\n                    selectedLabel: '',\r\n                },\r\n                {\r\n                    id: 'some-option-picker',\r\n                    selectedValue: 'something',\r\n                    selectedLabel: 'something',\r\n                },\r\n                {\r\n                    id: 'some-option-picker3',\r\n                    selectedValue: 'nothing',\r\n                    selectedLabel: 'nothing',\r\n                },\r\n            ];\r\n            const action: IReduxAction<IOptionPickerPayload> = {\r\n                type: OptionPickerActions.remove,\r\n                payload: {\r\n                    id: 'some-option-picker4',\r\n                },\r\n            };\r\n            const optionPickersState: IOptionPickerState[] = optionPickersReducer(oldState, action);\r\n\r\n            expect(optionPickersState.length).toBe(oldState.length);\r\n            expect(\r\n                optionPickersState.filter((optionPicker: IOptionPickerState) => optionPicker.id === action.payload.id)\r\n                    .length\r\n            ).toBe(0);\r\n        });\r\n\r\n        it(\r\n            'should return the state with the new selected value and label for the option picker with the action id when' +\r\n                'the action is \"CHANGE_OPTION\"',\r\n            () => {\r\n                const oldState: IOptionPickerState[] = [\r\n                    {\r\n                        id: 'some-option-picker2',\r\n                        selectedValue: '',\r\n                        selectedLabel: '',\r\n                    },\r\n                    {\r\n                        id: 'some-option-picker',\r\n                        selectedValue: 'something',\r\n                        selectedLabel: 'something',\r\n                    },\r\n                    {\r\n                        id: 'some-option-picker3',\r\n                        selectedValue: 'nothing',\r\n                        selectedLabel: 'nothing',\r\n                    },\r\n                ];\r\n                const action: IReduxAction<IChangeOptionPayload> = {\r\n                    type: OptionPickerActions.change,\r\n                    payload: {\r\n                        id: 'some-option-picker',\r\n                        value: 'new value',\r\n                        label: 'new label',\r\n                    },\r\n                };\r\n                const optionPickersState: IOptionPickerState[] = optionPickersReducer(oldState, action);\r\n\r\n                expect(_.findWhere(optionPickersState, {id: action.payload.id}).selectedValue).toBe(\r\n                    action.payload.value\r\n                );\r\n                expect(_.findWhere(optionPickersState, {id: action.payload.id}).selectedLabel).toBe(\r\n                    action.payload.label\r\n                );\r\n            }\r\n        );\r\n\r\n        it('should reset all option pickers starting with the action id if the action is \"RESET_OPTION_PICKERS\"', () => {\r\n            const oldState: IOptionPickerState[] = [\r\n                {\r\n                    id: 'some-option-picker2',\r\n                    selectedValue: '',\r\n                    selectedLabel: '',\r\n                },\r\n                {\r\n                    id: 'some-option-picker',\r\n                    selectedValue: 'something',\r\n                    selectedLabel: 'something',\r\n                },\r\n                {\r\n                    id: 'some-option-picker3',\r\n                    selectedValue: 'nothing',\r\n                    selectedLabel: 'nothing',\r\n                },\r\n                {\r\n                    id: 'other-id',\r\n                    selectedValue: 'this will not be reset',\r\n                    selectedLabel: 'this wont be rest either',\r\n                },\r\n            ];\r\n            const action: IReduxAction<IOptionPickerPayload> = {\r\n                type: OptionPickerActions.reset,\r\n                payload: {\r\n                    id: 'some-option-picker',\r\n                },\r\n            };\r\n            const optionPickersState: IOptionPickerState[] = optionPickersReducer(oldState, action);\r\n\r\n            expect(_.findWhere(optionPickersState, {id: 'some-option-picker2'}).selectedValue).toBe('');\r\n            expect(_.findWhere(optionPickersState, {id: 'some-option-picker2'}).selectedLabel).toBe('');\r\n\r\n            expect(_.findWhere(optionPickersState, {id: 'some-option-picker'}).selectedValue).toBe('');\r\n            expect(_.findWhere(optionPickersState, {id: 'some-option-picker'}).selectedLabel).toBe('');\r\n\r\n            expect(_.findWhere(optionPickersState, {id: 'some-option-picker3'}).selectedValue).toBe('');\r\n            expect(_.findWhere(optionPickersState, {id: 'some-option-picker3'}).selectedLabel).toBe('');\r\n\r\n            expect(_.findWhere(optionPickersState, {id: 'other-id'}).selectedValue).not.toBe('');\r\n            expect(_.findWhere(optionPickersState, {id: 'other-id'}).selectedLabel).not.toBe('');\r\n        });\r\n\r\n        it('should not change the original state', () => {\r\n            const expectedState = optionPickersInitialState.slice(0);\r\n            const action: IReduxAction<IOptionPickerPayload> = {\r\n                type: OptionPickerActions.add,\r\n                payload: {\r\n                    id: 'some-option-picker',\r\n                },\r\n            };\r\n            optionPickersReducer(optionPickersInitialState, action);\r\n\r\n            expect(expectedState).toEqual(optionPickersInitialState);\r\n        });\r\n    });\r\n\r\n    describe('optionPickerReducer', () => {\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const optionPickerState: IOptionPickerState = optionPickerReducer(undefined, genericAction);\r\n\r\n            expect(optionPickerState).toBe(optionPickerInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IOptionPickerState = {\r\n                id: 'some-option-picker',\r\n                selectedValue: 'anything',\r\n                selectedLabel: 'aaa',\r\n            };\r\n            const optionPickerState: IOptionPickerState = optionPickerReducer(oldState, genericAction);\r\n\r\n            expect(optionPickerState).toBe(oldState);\r\n        });\r\n\r\n        it('should return a new option picker with the specified id when the action is \"ADD_OPTION_PICKER\"', () => {\r\n            const oldState: IOptionPickerState = optionPickerInitialState;\r\n            const action: IReduxAction<IOptionPickerPayload> = {\r\n                type: OptionPickerActions.add,\r\n                payload: {\r\n                    id: 'some-option-picker',\r\n                },\r\n            };\r\n            const optionPickerState: IOptionPickerState = optionPickerReducer(oldState, action);\r\n\r\n            expect(optionPickerState.id).toBe(action.payload.id);\r\n            expect(optionPickerState.selectedValue).toBe('');\r\n            expect(optionPickerState.selectedValue).toBe('');\r\n        });\r\n\r\n        it('should return the original state if the action is \"CHANGE_OPTION\" and the id is not the one specified in the action', () => {\r\n            const oldState: IOptionPickerState = {\r\n                id: 'some-option-picker',\r\n                selectedValue: 'anything',\r\n                selectedLabel: 'aaa',\r\n            };\r\n            const action: IReduxAction<IChangeOptionPayload> = {\r\n                type: OptionPickerActions.change,\r\n                payload: {\r\n                    id: 'some-option-picker5',\r\n                    value: 'nothing',\r\n                    label: 'bbb',\r\n                },\r\n            };\r\n            const optionPickerState: IOptionPickerState = optionPickerReducer(oldState, action);\r\n\r\n            expect(optionPickerState.selectedValue).toBe(oldState.selectedValue);\r\n            expect(optionPickerState.selectedLabel).toBe(oldState.selectedLabel);\r\n        });\r\n\r\n        it('should return the option picker with a new selected value and label when the action is \"CHANGE_OPTION\" and the id is the one specified', () => {\r\n            const oldState: IOptionPickerState = {\r\n                id: 'some-option-picker',\r\n                selectedValue: 'anything',\r\n                selectedLabel: 'aaa',\r\n            };\r\n            const action: IReduxAction<IChangeOptionPayload> = {\r\n                type: OptionPickerActions.change,\r\n                payload: {\r\n                    id: 'some-option-picker',\r\n                    value: 'nothing',\r\n                    label: 'bbb',\r\n                },\r\n            };\r\n            const optionPickerState: IOptionPickerState = optionPickerReducer(oldState, action);\r\n\r\n            expect(optionPickerState.selectedValue).toBe(action.payload.value);\r\n            expect(optionPickerState.selectedLabel).toBe(action.payload.label);\r\n        });\r\n\r\n        it('should return the option picker as is if the action is \"RESET_OPTION_PICKERS\" and the id does not start with the one from the action', () => {\r\n            const oldState: IOptionPickerState = {\r\n                id: 'some-option-picker',\r\n                selectedValue: 'anything',\r\n                selectedLabel: 'aaa',\r\n            };\r\n            const action: IReduxAction<IOptionPickerPayload> = {\r\n                type: OptionPickerActions.reset,\r\n                payload: {\r\n                    id: 'option-picker',\r\n                },\r\n            };\r\n            const optionPickerState: IOptionPickerState = optionPickerReducer(oldState, action);\r\n\r\n            expect(optionPickerState.selectedValue).toBe(oldState.selectedValue);\r\n            expect(optionPickerState.selectedLabel).toBe(oldState.selectedLabel);\r\n        });\r\n\r\n        it('should return the option picker without a selected value if the action is \"RESET_OPTION_PICKERS\" and the id starts with the one from the action', () => {\r\n            const oldState: IOptionPickerState = {\r\n                id: 'some-option-picker',\r\n                selectedValue: 'anything',\r\n                selectedLabel: 'aaa',\r\n            };\r\n            const action: IReduxAction<IOptionPickerPayload> = {\r\n                type: OptionPickerActions.reset,\r\n                payload: {\r\n                    id: 'some-option',\r\n                },\r\n            };\r\n            const optionPickerState: IOptionPickerState = optionPickerReducer(oldState, action);\r\n\r\n            expect(optionPickerState.selectedValue).toBe('');\r\n            expect(optionPickerState.selectedLabel).toBe('');\r\n        });\r\n\r\n        it('should not change the original state', () => {\r\n            const expectedState = _.extend({}, optionPickerInitialState);\r\n            const action: IReduxAction<IChangeOptionPayload> = {\r\n                type: OptionPickerActions.change,\r\n                payload: {\r\n                    id: 'some-option-picker',\r\n                    value: 'a value',\r\n                    label: 'a label',\r\n                },\r\n            };\r\n            optionPickerReducer(optionPickerInitialState, action);\r\n\r\n            expect(expectedState).toEqual(optionPickerInitialState);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=604.bundle.js.map