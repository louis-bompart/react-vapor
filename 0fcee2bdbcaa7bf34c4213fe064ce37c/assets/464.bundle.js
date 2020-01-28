(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{1569:function(t,a,e){"use strict";e.r(a),a.default="import * as _ from 'underscore';\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {LastUpdatedActions} from './LastUpdatedActions';\r\n\r\nexport interface ILastUpdatedState {\r\n    id: string;\r\n    time: Date;\r\n}\r\n\r\nexport const lastUpdatedInitialState: ILastUpdatedState = {id: undefined, time: new Date()};\r\nexport const lastUpdatedCompositeInitialState: ILastUpdatedState[] = [];\r\n\r\nexport const lastUpdatedReducer = (\r\n    state: ILastUpdatedState = lastUpdatedInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): ILastUpdatedState => {\r\n    switch (action.type) {\r\n        case LastUpdatedActions.addLastUpdated:\r\n            return {\r\n                id: action.payload.id,\r\n                time: state.time,\r\n            };\r\n        case LastUpdatedActions.changeLastUpdated:\r\n            if (state.id !== action.payload.id) {\r\n                return state;\r\n            }\r\n            return _.extend({}, state, {\r\n                time: new Date(),\r\n            });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const lastUpdatedCompositeReducer = (\r\n    state: ILastUpdatedState[] = lastUpdatedCompositeInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): ILastUpdatedState[] => {\r\n    switch (action.type) {\r\n        case LastUpdatedActions.addLastUpdated:\r\n            return [...state, lastUpdatedReducer(undefined, action)];\r\n        case LastUpdatedActions.removeLastUpdated:\r\n            return _.reject(state, (lastUpdated: ILastUpdatedState) => {\r\n                return action.payload.id === lastUpdated.id;\r\n            });\r\n        case LastUpdatedActions.changeLastUpdated:\r\n            return state.map((lastUpdated: ILastUpdatedState) => lastUpdatedReducer(lastUpdated, action));\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=464.bundle.js.map