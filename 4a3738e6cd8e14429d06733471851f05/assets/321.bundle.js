(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{1413:function(n,o,r){"use strict";r.r(o),o.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport interface IDropdownActionPayload {\r\n    id: string;\r\n}\r\n\r\nexport const DropdownActions = {\r\n    add: 'ADD_DROPDOWN',\r\n    remove: 'REMOVE_DROPDOWN',\r\n    toggle: 'TOGGLE_DROPDOWN',\r\n    close: 'CLOSE',\r\n};\r\n\r\nexport const addDropdown = (id: string): IReduxAction<IDropdownActionPayload> => ({\r\n    type: DropdownActions.add,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const removeDropdown = (id: string): IReduxAction<IDropdownActionPayload> => ({\r\n    type: DropdownActions.remove,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const toggleDropdown = (id: string): IReduxAction<IDropdownActionPayload> => ({\r\n    type: DropdownActions.toggle,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const closeDropdown = (id: string): IReduxAction<IDropdownActionPayload> => ({\r\n    type: DropdownActions.close,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=321.bundle.js.map