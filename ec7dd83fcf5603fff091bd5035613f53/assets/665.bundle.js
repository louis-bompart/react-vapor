(window.webpackJsonp=window.webpackJsonp||[]).push([[665],{1766:function(e,t,s){"use strict";s.r(t),t.default="import {RefreshCallBackActions} from '../RefeshCallbackActions';\nimport {IRefreshCallbackReducerState, refreshCallBackReducer, RefreshStatus} from '../RefreshCallbackReducer';\n\ndescribe('RefreshCallbackReducer', () => {\n    let state: IRefreshCallbackReducerState;\n\n    describe('start', () => {\n        it('should add the id in the state if not there\"', () => {\n            state = refreshCallBackReducer({}, RefreshCallBackActions.start('id'));\n\n            expect(state['id']).toBe(RefreshStatus.started);\n        });\n\n        it('should set the element with the current id with the status \"start\"', () => {\n            state = refreshCallBackReducer({id: RefreshStatus.stopped}, RefreshCallBackActions.start('id'));\n\n            expect(state['id']).toBe(RefreshStatus.started);\n        });\n    });\n    describe('stop', () => {\n        it('should add the id in the state if not there\"', () => {\n            state = refreshCallBackReducer({}, RefreshCallBackActions.stop('id'));\n\n            expect(state['id']).toBe(RefreshStatus.stopped);\n        });\n\n        it('should set the element with the current id with the status \"stop\"', () => {\n            state = refreshCallBackReducer({id: RefreshStatus.inProgress}, RefreshCallBackActions.stop('id'));\n\n            expect(state['id']).toBe(RefreshStatus.stopped);\n        });\n    });\n    describe('inProgress', () => {\n        it('should add the id in the state if not there\"', () => {\n            state = refreshCallBackReducer({}, RefreshCallBackActions.inProgress('id'));\n\n            expect(state['id']).toBe(RefreshStatus.inProgress);\n        });\n\n        it('should set the element with the current id with the status \"inProgress\"', () => {\n            state = refreshCallBackReducer({id: RefreshStatus.started}, RefreshCallBackActions.inProgress('id'));\n\n            expect(state['id']).toBe(RefreshStatus.inProgress);\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=665.bundle.js.map