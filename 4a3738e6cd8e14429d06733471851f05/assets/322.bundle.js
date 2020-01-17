(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{1414:function(o,r,n){"use strict";n.r(r),r.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {Dropdown, IDropdownDispatchProps, IDropdownOwnProps, IDropdownProps, IDropdownStateProps} from './Dropdown';\r\nimport {addDropdown, closeDropdown, removeDropdown, toggleDropdown} from './DropdownActions';\r\nimport {IDropdownState} from './DropdownReducers';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IDropdownOwnProps): IDropdownStateProps => {\r\n    const item: IDropdownState = _.findWhere(state.dropdowns, {id: ownProps.id});\r\n\r\n    return {\r\n        isOpened: item && item.opened,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: IDropdownOwnProps\r\n): IDropdownDispatchProps => ({\r\n    onRender: () => dispatch(addDropdown(ownProps.id)),\r\n    onDestroy: () => dispatch(removeDropdown(ownProps.id)),\r\n    onClick: () => dispatch(toggleDropdown(ownProps.id)),\r\n    onDocumentClick: () => dispatch(closeDropdown(ownProps.id)),\r\n});\r\n\r\nexport const DropdownConnected: React.ComponentClass<IDropdownProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(Dropdown);\r\n"}}]);
//# sourceMappingURL=322.bundle.js.map