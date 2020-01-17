(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{1376:function(r,o,e){"use strict";e.r(o),o.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {MONTH_PICKER_ID, YEAR_PICKER_ID} from '../calendar/Calendar';\r\nimport {addDropdown, closeDropdown, removeDropdown, toggleDropdown} from '../dropdown/DropdownActions';\r\nimport {IDropdownState} from '../dropdown/DropdownReducers';\r\nimport {resetOptionPickers} from '../optionPicker/OptionPickerActions';\r\nimport {changeOptionsCycle} from '../optionsCycle/OptionsCycleActions';\r\nimport {applyDatePicker, clearSelection, DateLimits, resetDatePickers, selectDate} from './DatePickerActions';\r\nimport {\r\n    DatePickerDropdown,\r\n    IDatePickerDropdownDispatchProps,\r\n    IDatePickerDropdownOwnProps,\r\n    IDatePickerDropdownProps,\r\n    IDatePickerDropdownStateProps,\r\n} from './DatePickerDropdown';\r\nimport {IDatePickerState} from './DatePickerReducers';\r\nimport {DatePickerSelectors} from './DatePickerSelectors';\r\n\r\nconst mapStateToProps = (\r\n    state: IReactVaporState,\r\n    ownProps: IDatePickerDropdownOwnProps\r\n): IDatePickerDropdownStateProps => {\r\n    const item: IDropdownState = _.findWhere(state.dropdowns, {id: ownProps.id});\r\n\r\n    return {\r\n        isOpened: item && item.opened,\r\n        datePicker: DatePickerSelectors.getDatePicker(state, {id: ownProps.id}),\r\n        withReduxState: true,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: IDatePickerDropdownOwnProps\r\n): IDatePickerDropdownDispatchProps => ({\r\n    onRender: () => dispatch(addDropdown(ownProps.id)),\r\n    onDestroy: () => dispatch(removeDropdown(ownProps.id)),\r\n    onClick: (datePicker: IDatePickerState) => {\r\n        dispatch(toggleDropdown(ownProps.id));\r\n        if (datePicker) {\r\n            dispatch(resetOptionPickers(datePicker.id));\r\n            dispatch(selectDate(datePicker.id, DateLimits.lower));\r\n        }\r\n    },\r\n    onDocumentClick: () => dispatch(closeDropdown(ownProps.id)),\r\n    onApply: () => {\r\n        dispatch(closeDropdown(ownProps.id));\r\n        dispatch(applyDatePicker(ownProps.id));\r\n        dispatch(resetDatePickers(ownProps.id));\r\n    },\r\n    onCancel: (currentMonth: number, currentYear: number, isOpened: boolean) => {\r\n        if (isOpened) {\r\n            dispatch(changeOptionsCycle(`calendar-${ownProps.id}${MONTH_PICKER_ID}`, currentMonth));\r\n            dispatch(changeOptionsCycle(`calendar-${ownProps.id}${YEAR_PICKER_ID}`, currentYear));\r\n            dispatch(resetDatePickers(ownProps.id));\r\n            dispatch(resetOptionPickers(ownProps.id));\r\n            dispatch(closeDropdown(ownProps.id));\r\n        }\r\n    },\r\n    onClear: () => {\r\n        dispatch(clearSelection(ownProps.id));\r\n    },\r\n});\r\n\r\nexport const DatePickerDropdownConnected: React.ComponentClass<IDatePickerDropdownProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(DatePickerDropdown);\r\n"}}]);
//# sourceMappingURL=280.bundle.js.map