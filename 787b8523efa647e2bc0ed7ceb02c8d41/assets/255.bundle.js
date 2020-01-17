(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{1351:function(e,t,n){"use strict";n.r(t),t.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {addCollapsible, removeCollapsible, setCollapsibleExpanded} from '../CollapsibleActions';\r\nimport {collapsiblesInitialState, collapsiblesReducer, CollapsibleState} from '../CollapsibleReducers';\r\n\r\ndescribe('Reducers', () => {\r\n    describe('CollapsiblesReducers', () => {\r\n        const unrelatedAction: IReduxAction<any> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {id: ''},\r\n        };\r\n\r\n        it('should return the default state if the action is not related and the state is undefined ', () => {\r\n            expect(collapsiblesReducer(undefined, unrelatedAction)).toEqual(collapsiblesInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is unrelated to collapsible s', () => {\r\n            const oldState: CollapsibleState[] = [\r\n                {\r\n                    id: 'some-',\r\n                    expanded: false,\r\n                },\r\n            ];\r\n            const newState: CollapsibleState[] = collapsiblesReducer(oldState, unrelatedAction);\r\n\r\n            expect(oldState).toEqual(newState);\r\n        });\r\n\r\n        it('should return the old state when the action is unrelated for one ', () => {\r\n            const oldState: CollapsibleState[] = [\r\n                {\r\n                    id: 'some-',\r\n                    expanded: false,\r\n                },\r\n            ];\r\n            const newState: CollapsibleState[] = collapsiblesReducer(oldState, unrelatedAction);\r\n\r\n            expect(oldState).toEqual(newState);\r\n        });\r\n\r\n        it('should return the old state with one more Collapsible when the action is CollapsibleActions.add', () => {\r\n            const oldState: CollapsibleState[] = [\r\n                {\r\n                    id: 'some-',\r\n                    expanded: false,\r\n                },\r\n            ];\r\n            const action = addCollapsible('new-collapsible', true);\r\n            const newState = collapsiblesReducer(oldState, action);\r\n\r\n            expect(newState.length).toBe(oldState.length + 1);\r\n            expect(newState.filter((collapsible) => collapsible.id === action.payload.id).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state with one less Collapsible when the action is CollapsibleActions.remove', () => {\r\n            const oldState: CollapsibleState[] = [\r\n                {\r\n                    id: 'some-',\r\n                    expanded: false,\r\n                },\r\n            ];\r\n            const action = removeCollapsible(oldState[0].id);\r\n            const newState = collapsiblesReducer(oldState, action);\r\n\r\n            expect(newState.length).toBe(oldState.length - 1);\r\n            expect(newState.filter((collapsible) => collapsible.id === oldState[0].id).length).toBe(0);\r\n        });\r\n\r\n        it('should modify the expanded state for the Collapsible having the same id as in the action payload', () => {\r\n            const oldState: CollapsibleState[] = [\r\n                {\r\n                    id: 'some-',\r\n                    expanded: false,\r\n                },\r\n            ];\r\n            const setExpandedToTrueAction = setCollapsibleExpanded(oldState[0].id, true);\r\n            const newState = collapsiblesReducer(oldState, setExpandedToTrueAction);\r\n\r\n            expect(newState[0].expanded).toBe(true);\r\n\r\n            const setExpandedToFalseAction = setCollapsibleExpanded(oldState[0].id, false);\r\n            const secondNewState = collapsiblesReducer(oldState, setExpandedToFalseAction);\r\n\r\n            expect(secondNewState[0].expanded).toBe(false);\r\n        });\r\n\r\n        it('should not modify the expanded state for the Collapsible having a different id as in the action payload', () => {\r\n            const oldState: CollapsibleState[] = [\r\n                {\r\n                    id: 'some-',\r\n                    expanded: undefined,\r\n                },\r\n            ];\r\n            const setExpandedToTrueAction = setCollapsibleExpanded('a different id', true);\r\n            const newState = collapsiblesReducer(oldState, setExpandedToTrueAction);\r\n\r\n            expect(newState[0].expanded).toBeUndefined();\r\n            expect(oldState).toEqual(oldState);\r\n\r\n            const setExpandedToFalseAction = setCollapsibleExpanded('a different id', false);\r\n            const secondNewState = collapsiblesReducer(oldState, setExpandedToFalseAction);\r\n\r\n            expect(secondNewState[0].expanded).toBeUndefined();\r\n            expect(oldState).toEqual(oldState);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=255.bundle.js.map