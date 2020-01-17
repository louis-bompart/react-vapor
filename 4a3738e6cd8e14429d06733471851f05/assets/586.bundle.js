(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{1677:function(n,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {ISetNumericInputPayload, NumericInputActionTypes} from './NumericInputActions';\r\n\r\nexport interface INumericInputState {\r\n    value: React.ReactText;\r\n    hasError: boolean;\r\n}\r\n\r\nexport interface INumericInputsState {\r\n    [key: string]: INumericInputState;\r\n}\r\n\r\nexport const initialNumericInputsState: INumericInputsState = {};\r\n\r\nexport const initialNumericInputState = {value: 1, hasError: false};\r\n\r\nconst mount = (state: INumericInputsState, action: IReduxAction<ISetNumericInputPayload>) => {\r\n    const initialValue = action.payload.value;\r\n    const hasError = validateValueError(initialValue, action.payload.min, action.payload.max);\r\n\r\n    return {\r\n        ...state,\r\n        [action.payload.id]: {value: initialValue, hasError},\r\n    };\r\n};\r\n\r\nconst unmount = (state: INumericInputsState, action: IReduxAction<ISetNumericInputPayload>) => {\r\n    return _.omit(state, action.payload.id);\r\n};\r\n\r\nconst set = (state: INumericInputState, action: IReduxAction<ISetNumericInputPayload>) => {\r\n    const newValue = action.payload.value;\r\n    const hasError = validateValueError(newValue, action.payload.min, action.payload.max);\r\n\r\n    return {...state, value: newValue, hasError};\r\n};\r\n\r\nconst NumericInputsReducers: {[key: string]: (...args: any[]) => INumericInputsState} = {\r\n    [NumericInputActionTypes.mount]: mount,\r\n    [NumericInputActionTypes.unmount]: unmount,\r\n};\r\n\r\nconst NumericInputReducers: {[key: string]: (...args: any[]) => INumericInputState} = {\r\n    [NumericInputActionTypes.set]: set,\r\n};\r\n\r\nfunction validateValueError(value: React.ReactText, min: number, max: number) {\r\n    let hasError = false;\r\n    if (!_.isUndefined(min) && value < min) {\r\n        hasError = true;\r\n    }\r\n\r\n    if (!_.isUndefined(max) && value > max) {\r\n        hasError = true;\r\n    }\r\n\r\n    if (_.isNaN(parseFloat('' + value))) {\r\n        hasError = true;\r\n    }\r\n    return hasError;\r\n}\r\n\r\nexport type INumericInputPayload = {id: string} | ISetNumericInputPayload;\r\n\r\nexport const numericInputReducer = (\r\n    state: INumericInputsState = initialNumericInputsState,\r\n    action?: IReduxAction<INumericInputPayload>\r\n) => {\r\n    if (!_.isUndefined(NumericInputsReducers[action.type])) {\r\n        return NumericInputsReducers[action.type](state, action);\r\n    }\r\n\r\n    if (\r\n        action &&\r\n        action.payload &&\r\n        action.payload.id &&\r\n        state[action.payload.id] &&\r\n        !_.isUndefined(NumericInputReducers[action.type])\r\n    ) {\r\n        return {\r\n            ...state,\r\n            [action.payload.id]: NumericInputReducers[action.type](state[action.payload.id], action),\r\n        };\r\n    }\r\n\r\n    return state;\r\n};\r\n"}}]);
//# sourceMappingURL=586.bundle.js.map