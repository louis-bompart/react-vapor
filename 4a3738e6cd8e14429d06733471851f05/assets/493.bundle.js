(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{1584:function(n,t,e){"use strict";e.r(t),t.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {ILoadingActionPayload, LoadingActions} from '../LoadingActions';\r\nimport {\r\n    ILoadingState,\r\n    loadingInitialState,\r\n    loadingReducer,\r\n    loadingsInitialState,\r\n    loadingsReducer,\r\n} from '../LoadingReducers';\r\n\r\ndescribe('Reducers', () => {\r\n    describe('LoadingReducers', () => {\r\n        const genericAction: IReduxAction<ILoadingActionPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                ids: [],\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined ', () => {\r\n            const loadingState: ILoadingState[] = loadingsReducer(undefined, genericAction);\r\n\r\n            expect(loadingState).toBe(loadingsInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one loading state', () => {\r\n            const loadingState: ILoadingState = loadingReducer(undefined, genericAction);\r\n\r\n            expect(loadingState).toBe(loadingInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for the loading state', () => {\r\n            const oldState: ILoadingState[] = [\r\n                {\r\n                    id: 'some-loading',\r\n                    isOn: false,\r\n                },\r\n            ];\r\n            const loadingState: ILoadingState[] = loadingsReducer(oldState, genericAction);\r\n\r\n            expect(loadingState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one loading state', () => {\r\n            const oldState: ILoadingState = {\r\n                id: 'some-loading',\r\n                isOn: false,\r\n            };\r\n            const loadingState: ILoadingState = loadingReducer(oldState, genericAction);\r\n\r\n            expect(loadingState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more LoadingState when the action is \"ADD_LOADING\"', () => {\r\n            let oldState: ILoadingState[] = loadingsInitialState;\r\n            const action: IReduxAction<ILoadingActionPayload> = {\r\n                type: LoadingActions.add,\r\n                payload: {\r\n                    ids: ['some-new-loading'],\r\n                },\r\n            };\r\n            let loadingsState: ILoadingState[] = loadingsReducer(oldState, action);\r\n\r\n            expect(loadingsState.length).toBe(oldState.length + 1);\r\n            expect(loadingsState.filter((l) => l.id === action.payload.ids[0]).length).toBe(1);\r\n\r\n            oldState = loadingsState;\r\n            action.payload.ids = ['other-loading'];\r\n            loadingsState = loadingsReducer(oldState, action);\r\n\r\n            expect(loadingsState.length).toBe(oldState.length + 1);\r\n            expect(loadingsState.filter((l) => l.id === action.payload.ids[0]).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state without the LoadingState with the action id when the action is \"REMOVE_LOADING\"', () => {\r\n            let oldState: ILoadingState[] = [\r\n                {\r\n                    id: 'some-loading',\r\n                    isOn: true,\r\n                },\r\n                {\r\n                    id: 'some-loading2',\r\n                    isOn: false,\r\n                },\r\n                {\r\n                    id: 'some-loading1',\r\n                    isOn: true,\r\n                },\r\n            ];\r\n            const action: IReduxAction<ILoadingActionPayload> = {\r\n                type: LoadingActions.remove,\r\n                payload: {\r\n                    ids: ['some-loading2'],\r\n                },\r\n            };\r\n            let loadingsState: ILoadingState[] = loadingsReducer(oldState, action);\r\n\r\n            expect(loadingsState.length).toBe(oldState.length - 1);\r\n            expect(loadingsState.filter((l) => l.id === action.payload.ids[0]).length).toBe(0);\r\n\r\n            oldState = loadingsState;\r\n            action.payload.ids = ['some-loading'];\r\n            loadingsState = loadingsReducer(oldState, action);\r\n\r\n            expect(loadingsState.length).toBe(oldState.length - 1);\r\n            expect(loadingsState.filter((p) => p.id === action.payload.ids[0]).length).toBe(0);\r\n        });\r\n\r\n        it('should set isOn to true when the action is \"TURN_ON_LOADING\" for the action id', () => {\r\n            const oldState = [\r\n                {\r\n                    id: 'some-loading',\r\n                    isOn: false,\r\n                },\r\n                {\r\n                    id: 'some-loading2',\r\n                    isOn: false,\r\n                },\r\n                {\r\n                    id: 'some-loading1',\r\n                    isOn: false,\r\n                },\r\n            ];\r\n            const action: IReduxAction<ILoadingActionPayload> = {\r\n                type: LoadingActions.turnOn,\r\n                payload: {\r\n                    ids: ['some-loading', 'some-loading2'],\r\n                },\r\n            };\r\n            const loadingState = loadingsReducer(oldState, action);\r\n\r\n            expect(_.findWhere(loadingState, {id: 'some-loading'}).isOn).toBe(true);\r\n            expect(_.findWhere(loadingState, {id: 'some-loading2'}).isOn).toBe(true);\r\n            expect(_.findWhere(loadingState, {id: 'some-loading1'}).isOn).toBe(false);\r\n        });\r\n\r\n        it('should set isOn to false when the action is \"TURN_OFF_LOADING\" for the action id', () => {\r\n            const oldState = [\r\n                {\r\n                    id: 'some-loading',\r\n                    isOn: true,\r\n                },\r\n                {\r\n                    id: 'some-loading2',\r\n                    isOn: true,\r\n                },\r\n                {\r\n                    id: 'some-loading1',\r\n                    isOn: true,\r\n                },\r\n            ];\r\n            const action: IReduxAction<ILoadingActionPayload> = {\r\n                type: LoadingActions.turnOff,\r\n                payload: {\r\n                    ids: ['some-loading', 'some-loading2'],\r\n                },\r\n            };\r\n            const loadingState = loadingsReducer(oldState, action);\r\n\r\n            expect(_.findWhere(loadingState, {id: 'some-loading'}).isOn).toBe(false);\r\n            expect(_.findWhere(loadingState, {id: 'some-loading2'}).isOn).toBe(false);\r\n            expect(_.findWhere(loadingState, {id: 'some-loading1'}).isOn).toBe(true);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=493.bundle.js.map