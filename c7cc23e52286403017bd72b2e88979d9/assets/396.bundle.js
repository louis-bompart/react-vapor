(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{1485:function(t,e,n){"use strict";n.r(e),e.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {FlatSelectActions, IFlatSelectActionPayload} from '../FlatSelectActions';\r\nimport {\r\n    flatSelectInitialState,\r\n    flatSelectReducer,\r\n    flatSelectsInitialState,\r\n    flatSelectsReducer,\r\n    IFlatSelectState,\r\n} from '../FlatSelectReducers';\r\n\r\ndescribe('FlatSelect', () => {\r\n    const genericAction: IReduxAction<IFlatSelectActionPayload> = {\r\n        type: 'DO_SOMETHING',\r\n        payload: {\r\n            id: 'flat-select-id',\r\n        },\r\n    };\r\n\r\n    it('should return the default state if the action is not defined and the state is undefined', () => {\r\n        const flatSelectState: IFlatSelectState[] = flatSelectsReducer(undefined, genericAction);\r\n\r\n        expect(flatSelectState).toBe(flatSelectsInitialState);\r\n    });\r\n\r\n    it('should return the default state if the action is not defined and the state is undefined for one flat select', () => {\r\n        const flatSelectState: IFlatSelectState = flatSelectReducer(undefined, genericAction);\r\n\r\n        expect(flatSelectState).toBe(flatSelectInitialState);\r\n    });\r\n\r\n    it('should return the old state when the action is not defined', () => {\r\n        const oldState: IFlatSelectState[] = [flatSelectInitialState];\r\n        const flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, genericAction);\r\n\r\n        expect(flatSelectState).toBe(oldState);\r\n    });\r\n\r\n    it('should return the old state when the action is not defined for one flat select', () => {\r\n        const oldState: IFlatSelectState = flatSelectInitialState;\r\n        const flatSelectState: IFlatSelectState = flatSelectReducer(oldState, genericAction);\r\n\r\n        expect(flatSelectState).toBe(oldState);\r\n    });\r\n\r\n    it('should return the old state with one more FlatSelectState when the action is \"ADD_FLAT_SELECT\"', () => {\r\n        let oldState: IFlatSelectState[] = flatSelectsInitialState;\r\n        const action: IReduxAction<IFlatSelectActionPayload> = {\r\n            type: FlatSelectActions.add,\r\n            payload: {\r\n                id: 'flat-select-id',\r\n            },\r\n        };\r\n        let flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);\r\n\r\n        expect(flatSelectState.length).toBe(oldState.length + 1);\r\n        expect(flatSelectState.filter((flatSelect) => flatSelect.id === action.payload.id).length).toBe(1);\r\n\r\n        oldState = flatSelectState;\r\n        action.payload.id = 'flat-select-id-2';\r\n        flatSelectState = flatSelectsReducer(oldState, action);\r\n\r\n        expect(flatSelectState.length).toBe(oldState.length + 1);\r\n        expect(flatSelectState.filter((flatSelect) => flatSelect.id === action.payload.id).length).toBe(1);\r\n    });\r\n\r\n    it('should return the old state without the flatSelectState with the flat select id when the action is \"REMOVE_FLAT_SELECT', () => {\r\n        let oldState: IFlatSelectState[] = [\r\n            {\r\n                id: 'flat-select-id-1',\r\n                selectedOptionId: undefined,\r\n            },\r\n            {\r\n                id: 'flat-select-id-2',\r\n                selectedOptionId: undefined,\r\n            },\r\n            {\r\n                id: 'flat-select-id-3',\r\n                selectedOptionId: undefined,\r\n            },\r\n        ];\r\n        const action: IReduxAction<IFlatSelectActionPayload> = {\r\n            type: FlatSelectActions.remove,\r\n            payload: {\r\n                id: 'flat-select-id-1',\r\n            },\r\n        };\r\n        let flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);\r\n\r\n        expect(flatSelectState.length).toBe(oldState.length - 1);\r\n        expect(flatSelectState.filter((flatSelect) => flatSelect.id === action.payload.id).length).toBe(0);\r\n\r\n        oldState = flatSelectState;\r\n        action.payload.id = 'flat-select-id-2';\r\n        flatSelectState = flatSelectsReducer(oldState, action);\r\n\r\n        expect(flatSelectState.length).toBe(oldState.length - 1);\r\n        expect(flatSelectState.filter((flatSelect) => flatSelect.id === action.payload.id).length).toBe(0);\r\n    });\r\n\r\n    it('should return the old state when the action is \"REMOVE_FLAT_SELECT\" and the prompt id does not exist', () => {\r\n        const oldState: IFlatSelectState[] = [\r\n            {\r\n                id: 'flat-select-id-1',\r\n                selectedOptionId: undefined,\r\n            },\r\n            {\r\n                id: 'flat-select-id-2',\r\n                selectedOptionId: undefined,\r\n            },\r\n            {\r\n                id: 'flat-select-id-3',\r\n                selectedOptionId: undefined,\r\n            },\r\n        ];\r\n        const action: IReduxAction<IFlatSelectActionPayload> = {\r\n            type: FlatSelectActions.remove,\r\n            payload: {\r\n                id: 'flat-select-id-4',\r\n            },\r\n        };\r\n        const flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);\r\n\r\n        expect(flatSelectState.length).toBe(oldState.length);\r\n        expect(flatSelectState.filter((flatSelect) => flatSelect.id === action.payload.id).length).toBe(0);\r\n    });\r\n\r\n    it('should return the old state with the flatSelectState selected option updated when the action is \"SELECT_FLAT_SELECT\"', () => {\r\n        const oldState: IFlatSelectState[] = [\r\n            {\r\n                id: 'flat-select-id-1',\r\n                selectedOptionId: undefined,\r\n            },\r\n            {\r\n                id: 'flat-select-id-2',\r\n                selectedOptionId: undefined,\r\n            },\r\n            {\r\n                id: 'flat-select-id-3',\r\n                selectedOptionId: undefined,\r\n            },\r\n        ];\r\n        const action: IReduxAction<IFlatSelectActionPayload> = {\r\n            type: FlatSelectActions.select,\r\n            payload: {\r\n                id: 'flat-select-id-1',\r\n                selectedOptionId: 'id',\r\n            },\r\n        };\r\n\r\n        const flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);\r\n        expect(\r\n            flatSelectState.filter((flatSelect) => flatSelect.selectedOptionId === action.payload.selectedOptionId)\r\n                .length\r\n        ).toBe(1);\r\n    });\r\n\r\n    it('should return the old state if the id does not exist when the action is \"SELECT_FLAT_SELECT\"', () => {\r\n        const oldState: IFlatSelectState[] = [\r\n            {\r\n                id: 'flat-select-id-1',\r\n                selectedOptionId: undefined,\r\n            },\r\n            {\r\n                id: 'flat-select-id-2',\r\n                selectedOptionId: undefined,\r\n            },\r\n            {\r\n                id: 'flat-select-id-3',\r\n                selectedOptionId: undefined,\r\n            },\r\n        ];\r\n        const action: IReduxAction<IFlatSelectActionPayload> = {\r\n            type: FlatSelectActions.select,\r\n            payload: {\r\n                id: 'invalid-id',\r\n                selectedOptionId: 'id',\r\n            },\r\n        };\r\n\r\n        const flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);\r\n        expect(\r\n            flatSelectState.filter((flatSelect) => flatSelect.selectedOptionId === action.payload.selectedOptionId)\r\n                .length\r\n        ).toBe(0);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=396.bundle.js.map