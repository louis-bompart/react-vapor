(window.webpackJsonp=window.webpackJsonp||[]).push([[596],{1686:function(r,n,o){"use strict";o.r(n),n.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {\r\n    IOptionPickerDispatchProps,\r\n    IOptionPickerOwnProps,\r\n    IOptionPickerProps,\r\n    IOptionPickerStateProps,\r\n    OptionPicker,\r\n} from './OptionPicker';\r\nimport {addOptionPicker, changeOptionPicker, removeOptionPicker} from './OptionPickerActions';\r\nimport {IOptionPickerState} from './OptionPickerReducers';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IOptionPickerOwnProps): IOptionPickerStateProps => {\r\n    const item: IOptionPickerState = _.findWhere(state.optionPickers, {id: ownProps.id});\r\n\r\n    return {\r\n        activeLabel: item ? item.selectedLabel : '',\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: IOptionPickerOwnProps\r\n): IOptionPickerDispatchProps => ({\r\n    onRender: () => dispatch(addOptionPicker(ownProps.id)),\r\n    onDestroy: () => dispatch(removeOptionPicker(ownProps.id)),\r\n    onClick: (value: string, label: string) => dispatch(changeOptionPicker(ownProps.id, label, value)),\r\n});\r\n\r\nexport const OptionPickerConnected: React.ComponentClass<IOptionPickerProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(OptionPicker);\r\n"}}]);
//# sourceMappingURL=596.bundle.js.map