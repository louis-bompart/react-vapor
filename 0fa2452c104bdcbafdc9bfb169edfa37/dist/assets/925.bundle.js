(window.webpackJsonp=window.webpackJsonp||[]).push([[925],{2021:function(n,t,i){"use strict";i.r(t),t.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport const WithDirtyActionTypes = {\r\n    toggle: 'TOGGLE_DIRTY_COMPONENT',\r\n};\r\n\r\nexport interface IWithEditingPayload {\r\n    id: string;\r\n    isDirty: boolean;\r\n}\r\n\r\nconst toggle = (id: string, isDirty: boolean): IReduxAction<IWithEditingPayload> => ({\r\n    type: WithDirtyActionTypes.toggle,\r\n    payload: {id, isDirty},\r\n});\r\n\r\nexport const WithDirtyActions = {\r\n    toggle,\r\n};\r\n"}}]);
//# sourceMappingURL=925.bundle.js.map