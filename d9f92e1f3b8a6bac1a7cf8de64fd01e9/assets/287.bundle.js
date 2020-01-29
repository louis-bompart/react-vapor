(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{1395:function(e,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {changeOptionPicker} from '../optionPicker/OptionPickerActions';\r\nimport {IOptionPickerState} from '../optionPicker/OptionPickerReducers';\r\nimport {\r\n    addDatePicker,\r\n    changeDatePickerLowerLimit,\r\n    changeDatePickerUpperLimit,\r\n    DateLimits,\r\n    removeDatePicker,\r\n    selectDate,\r\n} from './DatePickerActions';\r\nimport {IDatePickerState} from './DatePickerReducers';\r\nimport {\r\n    DatesSelection,\r\n    IDatesSelectionDispatchProps,\r\n    IDatesSelectionOwnProps,\r\n    IDatesSelectionProps,\r\n    IDatesSelectionStateProps,\r\n} from './DatesSelection';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IDatesSelectionOwnProps): IDatesSelectionStateProps => {\r\n    const item: IDatePickerState = _.findWhere(state.datePickers, {id: ownProps.id});\r\n    const optionPicker: IOptionPickerState = _.findWhere(state.optionPickers, {id: ownProps.id});\r\n\r\n    return {\r\n        lowerLimit: item ? item.lowerLimit : new Date(),\r\n        upperLimit: item ? item.upperLimit : new Date(),\r\n        inputLowerLimit: item ? item.inputLowerLimit : new Date(),\r\n        inputUpperLimit: item ? item.inputUpperLimit : new Date(),\r\n        quickOption: optionPicker ? optionPicker.selectedValue : '',\r\n        isSelecting: item ? item.selected : '',\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: IDatesSelectionOwnProps\r\n): IDatesSelectionDispatchProps => ({\r\n    onRender: () => {\r\n        dispatch(\r\n            addDatePicker(\r\n                ownProps.id,\r\n                ownProps.isRange,\r\n                ownProps.rangeLimit,\r\n                ownProps.color,\r\n                ownProps.calendarId,\r\n                ownProps.initiallyUnselected,\r\n                ownProps.isClearable,\r\n                undefined,\r\n                ownProps.initialDateRange\r\n            )\r\n        );\r\n    },\r\n    onDestroy: () => dispatch(removeDatePicker(ownProps.id)),\r\n    onBlur: (date: Date, isUpperLimit: boolean, optionPicker = false) => {\r\n        if (isUpperLimit) {\r\n            dispatch(changeDatePickerUpperLimit(ownProps.id, date));\r\n        } else {\r\n            dispatch(changeDatePickerLowerLimit(ownProps.id, date));\r\n            if (!ownProps.isRange) {\r\n                dispatch(changeDatePickerUpperLimit(ownProps.id, date));\r\n            }\r\n        }\r\n\r\n        if (!optionPicker) {\r\n            dispatch(changeOptionPicker(ownProps.id, '', ''));\r\n        }\r\n    },\r\n    onClick: (isUpperLimit: boolean) => {\r\n        dispatch(selectDate(ownProps.id, isUpperLimit ? DateLimits.upper : DateLimits.lower));\r\n    },\r\n});\r\n\r\nexport const DatesSelectionConnected: React.ComponentClass<IDatesSelectionProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(DatesSelection);\r\n"}}]);
//# sourceMappingURL=287.bundle.js.map