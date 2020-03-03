(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{1552:function(t,e,a){"use strict";a.r(e),e.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {ILastUpdatedPayload, LastUpdatedActions} from '../LastUpdatedActions';\r\nimport {\r\n    ILastUpdatedState,\r\n    lastUpdatedCompositeInitialState,\r\n    lastUpdatedCompositeReducer,\r\n    lastUpdatedInitialState,\r\n    lastUpdatedReducer,\r\n} from '../LastUpdatedReducers';\r\n\r\ndescribe('LastUpdated', () => {\r\n    describe('LastUpdatedReducers', () => {\r\n        const genericAction: IReduxAction<ILastUpdatedPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'some-timer',\r\n            },\r\n        };\r\n        const initialDate: Date = new Date();\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedCompositeReducer(undefined, genericAction);\r\n\r\n            expect(lastUpdateTimeState).toBe(lastUpdatedCompositeInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one timer', () => {\r\n            const lastUpdateTimeState: ILastUpdatedState = lastUpdatedReducer(undefined, genericAction);\r\n\r\n            expect(lastUpdateTimeState).toBe(lastUpdatedInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: ILastUpdatedState[] = [lastUpdatedInitialState];\r\n            const lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedCompositeReducer(oldState, genericAction);\r\n\r\n            expect(lastUpdateTimeState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one timer', () => {\r\n            const oldState: ILastUpdatedState = lastUpdatedInitialState;\r\n            const lastUpdateTimeState: ILastUpdatedState = lastUpdatedReducer(oldState, genericAction);\r\n\r\n            expect(lastUpdateTimeState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more LastUpdateTimeState when the action is \"lastUpdatedActions.addLastUpdated\"', () => {\r\n            let oldState: ILastUpdatedState[] = lastUpdatedCompositeInitialState;\r\n            const action: IReduxAction<ILastUpdatedPayload> = {\r\n                type: LastUpdatedActions.addLastUpdated,\r\n                payload: {\r\n                    id: 'some_timer',\r\n                },\r\n            };\r\n            let lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedCompositeReducer(oldState, action);\r\n\r\n            expect(lastUpdateTimeState.length).toBe(oldState.length + 1);\r\n\r\n            oldState = lastUpdateTimeState;\r\n            action.payload.id = 'some-timer2';\r\n            lastUpdateTimeState = lastUpdatedCompositeReducer(oldState, action);\r\n\r\n            expect(lastUpdateTimeState.length).toBe(oldState.length + 1);\r\n        });\r\n\r\n        it('should return the old state without the LastUpdateTimeState with the timer id when the action is \"lastUpdatedActions.removeLastUpdated\"', () => {\r\n            let oldState: ILastUpdatedState[] = [\r\n                {\r\n                    id: 'some_timer2',\r\n                    time: initialDate,\r\n                },\r\n                {\r\n                    id: 'some_timer',\r\n                    time: initialDate,\r\n                },\r\n                {\r\n                    id: 'some_timer3',\r\n                    time: initialDate,\r\n                },\r\n            ];\r\n            const action: IReduxAction<ILastUpdatedPayload> = {\r\n                type: LastUpdatedActions.removeLastUpdated,\r\n                payload: {\r\n                    id: 'some_timer',\r\n                },\r\n            };\r\n            let lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedCompositeReducer(oldState, action);\r\n\r\n            expect(lastUpdateTimeState.length).toBe(oldState.length - 1);\r\n            expect(lastUpdateTimeState.filter((timer) => timer.id === action.payload.id).length).toBe(0);\r\n\r\n            oldState = lastUpdateTimeState;\r\n            action.payload.id = 'some_timer2';\r\n            lastUpdateTimeState = lastUpdatedCompositeReducer(oldState, action);\r\n\r\n            expect(lastUpdateTimeState.length).toBe(oldState.length - 1);\r\n            expect(lastUpdateTimeState.filter((timer) => timer.id === action.payload.id).length).toBe(0);\r\n        });\r\n\r\n        it('should return the time of a timer when the action is \"lastUpdatedActions.changeLastUpdated\"', () => {\r\n            jasmine.clock().install();\r\n\r\n            const oldState: ILastUpdatedState[] = [\r\n                {\r\n                    id: 'some_timer2',\r\n                    time: initialDate,\r\n                },\r\n                {\r\n                    id: 'some_timer',\r\n                    time: initialDate,\r\n                },\r\n                {\r\n                    id: 'some_timer3',\r\n                    time: initialDate,\r\n                },\r\n            ];\r\n            const action: IReduxAction<ILastUpdatedPayload> = {\r\n                type: LastUpdatedActions.changeLastUpdated,\r\n                payload: {\r\n                    id: 'some_timer',\r\n                },\r\n            };\r\n            const addedTime: number = 20001;\r\n\r\n            jasmine.clock().tick(addedTime);\r\n\r\n            const lastUpdateTimeState: ILastUpdatedState[] = lastUpdatedCompositeReducer(oldState, action);\r\n\r\n            expect(lastUpdateTimeState.length).toBe(oldState.length);\r\n            expect(lastUpdateTimeState.filter((timer) => timer.id === action.payload.id)[0].time).not.toBe(initialDate);\r\n\r\n            jasmine.clock().uninstall();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=464.bundle.js.map