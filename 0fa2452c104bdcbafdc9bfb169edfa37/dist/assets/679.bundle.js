(window.webpackJsonp=window.webpackJsonp||[]).push([[679],{1780:function(e,n,o){"use strict";o.r(n),n.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {DropActions} from '../drop/redux/DropActions';\r\nimport {SelectConnected} from './SelectConnected';\r\n\r\nexport const SelectActions = {\r\n    add: 'ADD_SELECT',\r\n    remove: 'REMOVE_SELECT',\r\n};\r\n\r\nexport interface ISelectPayload {\r\n    id: string;\r\n    open?: boolean;\r\n}\r\n\r\nexport const addSelect = (id: string): IReduxAction<ISelectPayload> => ({\r\n    type: SelectActions.add,\r\n    payload: {id},\r\n});\r\n\r\nexport const removeSelect = (id: string): IReduxAction<ISelectPayload> => ({\r\n    type: SelectActions.remove,\r\n    payload: {id},\r\n});\r\n\r\nexport const toggleSelect = (id: string, open?: boolean): IReduxAction<ISelectPayload> =>\r\n    DropActions.toggle(id, SelectConnected.DropGroup, open);\r\n"}}]);
//# sourceMappingURL=679.bundle.js.map