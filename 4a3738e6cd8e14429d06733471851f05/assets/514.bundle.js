(window.webpackJsonp=window.webpackJsonp||[]).push([[514],{1605:function(n,t,a){"use strict";a.r(t),t.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {IModalActionPayload, ModalAction} from './ModalActions';\r\n\r\nexport interface IModalState {\r\n    id: string;\r\n    isOpened: boolean;\r\n}\r\n\r\nexport const modalInitialState: IModalState = {id: undefined, isOpened: false};\r\nexport const modalsInitialState: IModalState[] = [];\r\n\r\nexport const modalReducer = (\r\n    state: IModalState = modalInitialState,\r\n    action: IReduxAction<IModalActionPayload>\r\n): IModalState => {\r\n    switch (action.type) {\r\n        case ModalAction.addModal:\r\n            return {\r\n                id: action.payload.id,\r\n                isOpened: !!action.payload.isOpened,\r\n            };\r\n        case ModalAction.openModal:\r\n            return state.id !== action.payload.id\r\n                ? state\r\n                : {\r\n                      ...state,\r\n                      isOpened: true,\r\n                  };\r\n        case ModalAction.closeModals:\r\n            return action.payload.ids && action.payload.ids.length !== 0 && !_.contains(action.payload.ids, state.id)\r\n                ? state\r\n                : {\r\n                      ...state,\r\n                      isOpened: false,\r\n                  };\r\n\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const modalsReducer = (\r\n    state: IModalState[] = modalsInitialState,\r\n    action: IReduxAction<IModalActionPayload>\r\n): IModalState[] => {\r\n    switch (action.type) {\r\n        case ModalAction.addModal:\r\n            return [...state, modalReducer(undefined, action)];\r\n        case ModalAction.removeModal:\r\n            return _.reject(state, (modal: IModalState) => {\r\n                return action.payload.id === modal.id;\r\n            });\r\n        case ModalAction.closeModals:\r\n        case ModalAction.openModal:\r\n            return state.map((modal: IModalState) => modalReducer(modal, action));\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const openModalsReducer = (state: string[] = [], action: IReduxAction<IModalActionPayload>): string[] => {\r\n    switch (action.type) {\r\n        case ModalAction.openModal:\r\n            return [...state, action.payload.id];\r\n        case ModalAction.closeModals:\r\n            return _.without(state, ...action.payload.ids);\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=514.bundle.js.map