(window.webpackJsonp=window.webpackJsonp||[]).push([[560],{1651:function(t,n,o){"use strict";o.r(n),n.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {ILoadingState} from '../loading/LoadingReducers';\r\nimport {INavigationOwnProps, INavigationProps, INavigationStateProps, Navigation} from './Navigation';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: INavigationOwnProps): INavigationStateProps => {\r\n    const item: ILoadingState = _.findWhere(state.loadings, {id: 'loading-' + ownProps.id});\r\n\r\n    return {\r\n        isLoading: (item && item.isOn) || false,\r\n        withReduxState: true,\r\n    };\r\n};\r\n\r\nexport const NavigationConnected: React.ComponentClass<INavigationProps> = connect(\r\n    mapStateToProps,\r\n    undefined,\r\n    ReduxUtils.mergeProps\r\n)(Navigation);\r\n"}}]);
//# sourceMappingURL=560.bundle.js.map