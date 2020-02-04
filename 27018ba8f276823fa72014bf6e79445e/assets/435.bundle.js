(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{1543:function(t,n,r){"use strict";r.r(n),n.default="import * as _ from 'underscore';\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {IInlinePromptOptions} from './InlinePrompt';\r\nimport {PromptActions} from './InlinePromptActions';\r\n\r\nexport interface IPromptState {\r\n    id: string;\r\n    options: IInlinePromptOptions;\r\n}\r\n\r\nexport const promptInitialState: IPromptState = {id: undefined, options: {userChoice: undefined, onClick: undefined}};\r\nexport const promptsInitialState: IPromptState[] = [];\r\n\r\nexport const promptReducer = (\r\n    state: IPromptState = promptInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IPromptState => {\r\n    switch (action.type) {\r\n        case PromptActions.add:\r\n            return _.extend({}, state, {\r\n                id: action.payload.id,\r\n                options: action.payload.options,\r\n            });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const promptsReducer = (\r\n    state: IPromptState[] = promptsInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IPromptState[] => {\r\n    switch (action.type) {\r\n        case PromptActions.add:\r\n            return [...state, promptReducer(undefined, action)];\r\n        case PromptActions.remove:\r\n            return _.reject(state, (prompt: IPromptState) => {\r\n                return action.payload.id === prompt.id;\r\n            });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=435.bundle.js.map