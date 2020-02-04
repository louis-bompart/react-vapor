(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{1699:function(n,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport const NumericInputActionTypes = {\r\n    mount: 'MOUNT_NUMERIC_INPUT',\r\n    unmount: 'UNMOUNT_NUMERIC_INPUT',\r\n    set: 'SET_NUMERIC_INPUT',\r\n    increment: 'INCREMENT_NUMERIC_INPUT',\r\n};\r\n\r\nconst mount = (\r\n    id: string,\r\n    initialValue: number,\r\n    min?: number,\r\n    max?: number\r\n): IReduxAction<ISetNumericInputPayload> => ({\r\n    type: NumericInputActionTypes.mount,\r\n    payload: {id, value: initialValue, min, max},\r\n});\r\n\r\nconst unmount = (id: string): IReduxAction<{id: string}> => ({\r\n    type: NumericInputActionTypes.unmount,\r\n    payload: {id},\r\n});\r\n\r\nexport interface ISetNumericInputPayload {\r\n    id: string;\r\n    value: React.ReactText;\r\n    min?: number;\r\n    max?: number;\r\n}\r\n\r\nconst setValue = (\r\n    id: string,\r\n    value: React.ReactText,\r\n    min?: number,\r\n    max?: number\r\n): IReduxAction<ISetNumericInputPayload> => ({\r\n    type: NumericInputActionTypes.set,\r\n    payload: {id, value, min, max},\r\n});\r\n\r\nexport const NumericInputActions = {\r\n    mount,\r\n    unmount,\r\n    setValue,\r\n};\r\n"}}]);
//# sourceMappingURL=592.bundle.js.map