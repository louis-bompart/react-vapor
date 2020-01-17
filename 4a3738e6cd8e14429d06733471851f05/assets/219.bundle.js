(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{1315:function(o,r,e){"use strict";e.r(r),r.default="import {connect} from 'react-redux';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {IInputDispatchProps, IInputOwnProps, IInputStateProps} from '../input/Input';\r\nimport {Checkbox, ICheckboxProps} from './Checkbox';\r\nimport {addCheckbox, ICheckboxActionPayload, removeCheckbox, toggleCheckbox} from './CheckboxActions';\r\nimport {CheckboxSelectors} from './CheckboxSelectors';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IInputOwnProps): IInputStateProps => ({\r\n    checked: CheckboxSelectors.getIsSelected(state, {id: ownProps.id}),\r\n});\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<ICheckboxActionPayload>) => void,\r\n    ownProps: IInputOwnProps\r\n): IInputDispatchProps => {\r\n    return {\r\n        onRender: () => dispatch(addCheckbox(ownProps.id, ownProps.defaultChecked)),\r\n        onDestroy: () => dispatch(removeCheckbox(ownProps.id)),\r\n        onClick: (e: React.MouseEvent<HTMLElement>) => dispatch(toggleCheckbox(ownProps.id)),\r\n    };\r\n};\r\n\r\nexport const CheckboxConnected: React.ComponentClass<ICheckboxProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(Checkbox);\r\n"}}]);
//# sourceMappingURL=219.bundle.js.map