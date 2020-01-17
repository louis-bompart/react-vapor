(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1378:function(e,t,i){"use strict";i.r(t),t.default="import * as moment from 'moment';\r\nimport * as _ from 'underscore';\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {DateLimits, DatePickerActions, IAddDatePickerPayload} from './DatePickerActions';\r\nimport {IRangeLimit} from './DatesSelection';\r\n\r\nexport interface IDatePickerState {\r\n    id: string;\r\n    calendarId: string;\r\n    color: string;\r\n    lowerLimit: Date;\r\n    upperLimit: Date;\r\n    inputLowerLimit: Date;\r\n    inputUpperLimit: Date;\r\n    rangeLimit?: IRangeLimit;\r\n    isRange: boolean;\r\n    isClearable: boolean;\r\n    selected: string;\r\n    appliedLowerLimit: Date;\r\n    appliedUpperLimit: Date;\r\n    simple: boolean;\r\n}\r\n\r\nexport const datePickerInitialState: IDatePickerState = {\r\n    id: undefined,\r\n    calendarId: undefined,\r\n    color: undefined,\r\n    isRange: false,\r\n    isClearable: false,\r\n    simple: false,\r\n    lowerLimit: moment()\r\n        .startOf('day')\r\n        .toDate(),\r\n    upperLimit: moment()\r\n        .endOf('day')\r\n        .toDate(),\r\n    selected: '',\r\n    inputLowerLimit: moment()\r\n        .startOf('day')\r\n        .toDate(),\r\n    inputUpperLimit: moment()\r\n        .endOf('day')\r\n        .toDate(),\r\n    appliedLowerLimit: moment()\r\n        .startOf('day')\r\n        .toDate(),\r\n    appliedUpperLimit: moment()\r\n        .endOf('day')\r\n        .toDate(),\r\n};\r\nexport const datePickersInitialState: IDatePickerState[] = [];\r\n\r\nconst addDatePicker = (state: IDatePickerState, action: IReduxAction<IAddDatePickerPayload>): IDatePickerState => {\r\n    const mayBeNull = (d: Date) => (action.payload.initiallyUnselected ? null : d);\r\n    const appliedLowerLimit = (action.payload.initialDateRange || [])[0];\r\n    const appliedUpperLimit = (action.payload.initialDateRange || [])[1];\r\n\r\n    return {\r\n        id: action.payload.id,\r\n        calendarId: action.payload.calendarId,\r\n        color: action.payload.color,\r\n        isRange: action.payload.isRange,\r\n        rangeLimit: action.payload.rangeLimit,\r\n        lowerLimit: appliedLowerLimit || mayBeNull(state.lowerLimit),\r\n        upperLimit: appliedUpperLimit || mayBeNull(state.upperLimit),\r\n        inputLowerLimit: appliedLowerLimit || mayBeNull(state.inputLowerLimit),\r\n        inputUpperLimit: appliedUpperLimit || mayBeNull(state.inputUpperLimit),\r\n        selected: state.selected,\r\n        appliedLowerLimit: appliedLowerLimit || mayBeNull(state.appliedLowerLimit),\r\n        appliedUpperLimit: appliedUpperLimit || mayBeNull(state.appliedUpperLimit),\r\n        isClearable: action.payload.isClearable,\r\n        simple: action.payload.simple,\r\n    };\r\n};\r\n\r\nconst changeLowerLimit = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {\r\n    const nullifyIfBefore = (currentUpperLimit: Date, newLowerLimit: Date) =>\r\n        newLowerLimit && state.isRange && moment(newLowerLimit).isAfter(currentUpperLimit) ? null : currentUpperLimit;\r\n\r\n    const simpleSelected = state.simple ? DateLimits.lower : '';\r\n\r\n    return state.id !== action.payload.id\r\n        ? state\r\n        : _.extend({}, state, {\r\n              lowerLimit: action.payload.date,\r\n              inputLowerLimit: action.payload.date,\r\n              upperLimit: nullifyIfBefore(state.upperLimit, action.payload.date),\r\n              inputUpperLimit: nullifyIfBefore(state.inputUpperLimit, action.payload.date),\r\n              selected: state.isRange ? DateLimits.upper : simpleSelected,\r\n          });\r\n};\r\n\r\nconst changeUpperLimit = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {\r\n    return state.id !== action.payload.id\r\n        ? state\r\n        : _.extend({}, state, {\r\n              upperLimit: action.payload.date,\r\n              inputUpperLimit: action.payload.date,\r\n              selected: '',\r\n          });\r\n};\r\n\r\nconst selectDate = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {\r\n    return state.id !== action.payload.id ? state : _.extend({}, state, {selected: action.payload.limit});\r\n};\r\n\r\nconst applyDates = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {\r\n    const lowerLimit: Date =\r\n        state.lowerLimit || !state.isClearable\r\n            ? state.lowerLimit || state.inputLowerLimit || state.appliedLowerLimit\r\n            : null;\r\n    let upperLimit: Date =\r\n        state.upperLimit || !state.isClearable\r\n            ? state.upperLimit || state.inputUpperLimit || state.appliedUpperLimit\r\n            : null;\r\n    upperLimit = upperLimit >= lowerLimit ? upperLimit : lowerLimit;\r\n\r\n    return state.id.indexOf(action.payload.id) !== 0\r\n        ? state\r\n        : _.extend({}, state, {\r\n              appliedLowerLimit: lowerLimit,\r\n              appliedUpperLimit: upperLimit,\r\n              inputLowerLimit: lowerLimit,\r\n              inputUpperLimit: upperLimit,\r\n          });\r\n};\r\n\r\nconst resetDates = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {\r\n    return state.id.indexOf(action.payload.id) !== 0\r\n        ? state\r\n        : _.extend({}, state, {\r\n              selected: '',\r\n              lowerLimit: state.appliedLowerLimit,\r\n              upperLimit: state.appliedUpperLimit,\r\n          });\r\n};\r\n\r\nconst clearSelection = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {\r\n    return state.id.indexOf(action.payload.id) !== 0 || !state.isClearable\r\n        ? state\r\n        : _.extend({}, state, {\r\n              selected: DateLimits.lower,\r\n              lowerLimit: null,\r\n              upperLimit: null,\r\n              inputLowerLimit: null,\r\n              inputUpperLimit: null,\r\n          });\r\n};\r\n\r\nexport const datePickerReducer = (\r\n    state: IDatePickerState = datePickerInitialState,\r\n    action: IReduxAction<any>\r\n): IDatePickerState => {\r\n    switch (action.type) {\r\n        case DatePickerActions.add:\r\n            return addDatePicker(state, action);\r\n        case DatePickerActions.changeLowerLimit:\r\n            return changeLowerLimit(state, action);\r\n        case DatePickerActions.changeUpperLimit:\r\n            return changeUpperLimit(state, action);\r\n        case DatePickerActions.select:\r\n            return selectDate(state, action);\r\n        case DatePickerActions.apply:\r\n            return applyDates(state, action);\r\n        case DatePickerActions.reset:\r\n            return resetDates(state, action);\r\n        case DatePickerActions.clear:\r\n            return clearSelection(state, action);\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const datePickersReducer = (\r\n    state: IDatePickerState[] = datePickersInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IDatePickerState[] => {\r\n    switch (action.type) {\r\n        case DatePickerActions.add:\r\n            return [...state, datePickerReducer(undefined, action)];\r\n        case DatePickerActions.remove:\r\n            return _.reject(state, (datePicker: IDatePickerState) => {\r\n                return action.payload.id === datePicker.id;\r\n            });\r\n        case DatePickerActions.changeLowerLimit:\r\n        case DatePickerActions.changeUpperLimit:\r\n        case DatePickerActions.select:\r\n        case DatePickerActions.apply:\r\n        case DatePickerActions.reset:\r\n        case DatePickerActions.clear:\r\n            return state.map((datePicker: IDatePickerState) => datePickerReducer(datePicker, action));\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=284.bundle.js.map