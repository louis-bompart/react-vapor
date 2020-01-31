(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{1471:function(r,t,e){"use strict";e.r(t),t.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {filterThrough} from '../filterBox/FilterBoxActions';\r\nimport {IFilterState} from '../filterBox/FilterBoxReducers';\r\nimport {closeMoreFacetRows} from './FacetActions';\r\nimport {\r\n    FacetMoreRows,\r\n    IFacetMoreRowsDispatchProps,\r\n    IFacetMoreRowsOwnProps,\r\n    IFacetMoreRowsProps,\r\n    IFacetMoreRowsStateProps,\r\n} from './FacetMoreRows';\r\nimport {IFacetState} from './FacetReducers';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IFacetMoreRowsOwnProps): IFacetMoreRowsStateProps => {\r\n    const item: IFacetState = _.findWhere(state.facets, {facet: ownProps.facet});\r\n    const filterItem: IFilterState = _.findWhere(state.filters, {id: 'filter-' + ownProps.facet});\r\n\r\n    return {\r\n        isOpened: item && item.opened,\r\n        filterText: filterItem ? filterItem.filterText : '',\r\n        withReduxState: true,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: IFacetMoreRowsOwnProps\r\n): IFacetMoreRowsDispatchProps => ({\r\n    onOpen: () => dispatch(filterThrough('filter-' + ownProps.facet, '')),\r\n    onDocumentClick: () => dispatch(closeMoreFacetRows()),\r\n});\r\n\r\nexport const FacetMoreRowsConnected: React.ComponentClass<IFacetMoreRowsProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(FacetMoreRows);\r\n"}}]);
//# sourceMappingURL=365.bundle.js.map