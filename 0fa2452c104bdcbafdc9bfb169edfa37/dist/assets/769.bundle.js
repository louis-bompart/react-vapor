(window.webpackJsonp=window.webpackJsonp||[]).push([[769],{1867:function(r,o,t){"use strict";t.r(o),o.default="import {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {ITabDispatchProps, ITabOwnProps, ITabProps, ITabStateProps, Tab} from './Tab';\r\nimport {addTab, removeTab, selectTab} from './TabActions';\r\nimport {DEFAULT_GROUP_ID, ITabGroupState} from './TabReducers';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: ITabOwnProps): ITabStateProps => {\r\n    const id = ownProps.groupId ? ownProps.groupId : DEFAULT_GROUP_ID;\r\n    const tabGroup = _.find(state.tabs, (currentTabGroup: ITabGroupState) => currentTabGroup.id === id);\r\n    return {\r\n        isActive: tabGroup ? tabGroup.tabs.some((tab) => tab.id === ownProps.id && tab.isSelected) : false,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: ITabOwnProps\r\n): ITabDispatchProps => ({\r\n    onRender: () => dispatch(addTab(ownProps.id, ownProps.groupId)),\r\n    onDestroy: () => dispatch(removeTab(ownProps.id, ownProps.groupId)),\r\n    onSelect: () => dispatch(selectTab(ownProps.id, ownProps.groupId)),\r\n});\r\n\r\nexport const TabConnected: React.ComponentClass<ITabProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(Tab);\r\n"}}]);
//# sourceMappingURL=769.bundle.js.map