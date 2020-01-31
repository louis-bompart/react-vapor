(window.webpackJsonp=window.webpackJsonp||[]).push([[926],{2022:function(t,n,o){"use strict";o.r(n),n.default="import * as _ from 'underscore';\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {ComponentId} from '../../utils/ComponentUtils';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {WithDirtyActionTypes} from './withDirtyActions';\r\n\r\nexport const dirtyComponentsInitialState: ComponentId[] = [];\r\n\r\nexport const withDirtyReducer = (\r\n    state: ComponentId[] = dirtyComponentsInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): ComponentId[] => {\r\n    switch (action.type) {\r\n        case WithDirtyActionTypes.toggle:\r\n            return action.payload.isDirty\r\n                ? _.uniq([...state, action.payload.id])\r\n                : _.reject(state, (id: ComponentId) => id === action.payload.id);\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=926.bundle.js.map