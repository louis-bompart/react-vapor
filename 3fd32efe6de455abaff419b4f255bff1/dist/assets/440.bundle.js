(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1547:function(n,t,r){"use strict";r.r(t),t.default="import {connect} from 'react-redux';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {IInputDispatchProps, IInputProps, IInputStateProps, Input} from './Input';\r\nimport {addInput, changeInputValue, removeInput} from './InputActions';\r\nimport {InputSelectors} from './InputSelectors';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IInputProps): IInputStateProps => {\r\n    const input = InputSelectors.getInput(state, {id: ownProps.id});\r\n    return {\r\n        valid: input && input.valid,\r\n        value: input && input.value,\r\n        disabled: input && input.disabled,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: IInputProps): IInputDispatchProps => ({\r\n    onRender: (value: string = '', valid = true, disabled = false) =>\r\n        dispatch(addInput(ownProps.id, value, valid, disabled)),\r\n    onDestroy: () => dispatch(removeInput(ownProps.id)),\r\n    onChange: (value: string, valid = true) => {\r\n        dispatch(changeInputValue(ownProps.id, value, valid));\r\n        ownProps.changeDirtyState?.(value);\r\n    },\r\n});\r\n\r\nexport const InputConnected: React.ComponentClass<IInputProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(Input);\r\n"}}]);
//# sourceMappingURL=440.bundle.js.map