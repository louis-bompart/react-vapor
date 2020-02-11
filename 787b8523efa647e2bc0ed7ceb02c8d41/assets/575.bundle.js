(window.webpackJsonp=window.webpackJsonp||[]).push([[575],{1668:function(r,n,e){"use strict";e.r(n),n.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {IDispatch, ReduxUtils} from '../../../utils/ReduxUtils';\r\nimport {changePage} from '../pagination/NavigationPaginationActions';\r\nimport {IPaginationState} from '../pagination/NavigationPaginationReducers';\r\nimport {\r\n    INavigationPerPageDispatchProps,\r\n    INavigationPerPageOwnProps,\r\n    INavigationPerPageProps,\r\n    INavigationPerPageStateProps,\r\n    NavigationPerPage,\r\n    PER_PAGE_NUMBERS,\r\n} from './NavigationPerPage';\r\nimport {addPerPage, changePerPage, removePerPage} from './NavigationPerPageActions';\r\nimport {IPerPageState} from './NavigationPerPageReducers';\r\n\r\nconst mapStateToProps = (\r\n    state: IReactVaporState,\r\n    ownProps: INavigationPerPageOwnProps\r\n): INavigationPerPageStateProps => {\r\n    const perPageNumber: number[] = ownProps.perPageNumbers || PER_PAGE_NUMBERS;\r\n    const defaultInitialPosition: number = Math.ceil(perPageNumber.length / 2) - 1;\r\n    const item: IPerPageState = _.findWhere(state.perPageComposite, {id: ownProps.id});\r\n    const pagination: IPaginationState = _.findWhere(state.paginationComposite, {id: `pagination-${ownProps.id}`});\r\n    const initialPosition: number = !_.isUndefined(ownProps.initialPosition)\r\n        ? ownProps.initialPosition\r\n        : defaultInitialPosition;\r\n\r\n    return {\r\n        currentPerPage: item ? item.perPage : perPageNumber[initialPosition],\r\n        currentPage: pagination ? pagination.pageNb : 0,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: IDispatch,\r\n    ownProps: INavigationPerPageOwnProps\r\n): INavigationPerPageDispatchProps => ({\r\n    onRender: (perPageNb: number) => dispatch(addPerPage(ownProps.id, perPageNb)),\r\n    onDestroy: () => dispatch(removePerPage(ownProps.id)),\r\n    onPerPageClick: (perPageNb: number, oldPerPageNb: number, currentPage: number) => {\r\n        dispatch(changePerPage(ownProps.id, perPageNb));\r\n        dispatch(changePage(`pagination-${ownProps.id}`, Math.floor((currentPage * oldPerPageNb) / perPageNb)));\r\n    },\r\n});\r\n\r\nexport const NavigationPerPageConnected: React.ComponentClass<INavigationPerPageProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(NavigationPerPage);\r\n"}}]);
//# sourceMappingURL=575.bundle.js.map