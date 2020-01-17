(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{1415:function(n,r,o){"use strict";o.r(r),r.default="import * as _ from 'underscore';\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {DropdownActions} from './DropdownActions';\r\n\r\nexport interface IDropdownState {\r\n    id: string;\r\n    opened: boolean;\r\n}\r\n\r\nexport const dropdownInitialState: IDropdownState = {id: undefined, opened: false};\r\nexport const dropdownsInitialState: IDropdownState[] = [];\r\n\r\nexport const dropdownReducer = (\r\n    state: IDropdownState = dropdownInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IDropdownState => {\r\n    switch (action.type) {\r\n        case DropdownActions.toggle:\r\n            if (state.id !== action.payload.id) {\r\n                return state;\r\n            }\r\n\r\n            return {\r\n                id: state.id,\r\n                opened: !state.opened,\r\n            };\r\n        case DropdownActions.close:\r\n            if (state.id !== action.payload.id) {\r\n                return state;\r\n            }\r\n\r\n            return {\r\n                id: state.id,\r\n                opened: false,\r\n            };\r\n        case DropdownActions.add:\r\n            return {\r\n                id: action.payload.id,\r\n                opened: false,\r\n            };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const dropdownsReducer = (\r\n    state: IDropdownState[] = dropdownsInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IDropdownState[] => {\r\n    switch (action.type) {\r\n        case DropdownActions.toggle:\r\n        case DropdownActions.close:\r\n            return state.map((dropdown: IDropdownState) => dropdownReducer(dropdown, action));\r\n        case DropdownActions.add:\r\n            return [...state, dropdownReducer(undefined, action)];\r\n        case DropdownActions.remove:\r\n            return _.reject(state, (dropdown: IDropdownState) => {\r\n                return action.payload.id === dropdown.id;\r\n            });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=323.bundle.js.map