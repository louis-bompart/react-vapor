(window.webpackJsonp=window.webpackJsonp||[]).push([[798],{1898:function(e,t,a){"use strict";a.r(t),t.default="import * as React from 'react';\nimport {connect} from 'react-redux';\nimport * as _ from 'underscore';\n\nimport {IReactVaporState} from '../../ReactVapor';\nimport {IDispatch, IThunkAction} from '../../utils/ReduxUtils';\nimport {UrlUtils} from '../../utils/UrlUtils';\nimport {applyDatePicker, changeDatePickerLowerLimit, changeDatePickerUpperLimit} from '../datePicker/DatePickerActions';\nimport {filterThrough} from '../filterBox/FilterBoxActions';\nimport {selectListBoxOption} from '../listBox/ListBoxActions';\nimport {changePage} from '../navigation/pagination/NavigationPaginationActions';\nimport {changePerPage} from '../navigation/perPage/NavigationPerPageActions';\nimport {TableHeaderActions} from './actions/TableHeaderActions';\nimport {ITableHOCOwnProps} from './TableHOC';\nimport {ITableHOCPredicateValue, TableHOCUtils} from './utils/TableHOCUtils';\n\nexport interface TableWithUrlStateProps {\n    onUpdateUrl: (queryString: string) => void;\n}\n\nenum SortOrderValues {\n    ascending = 'asc',\n    descending = 'desc',\n}\n\nexport const Params = {\n    pageNumber: 'page',\n    pageSize: 'pageSize',\n    sortKey: 'sortBy',\n    sortOrder: 'order',\n    lowerDateLimit: 'from',\n    upperDateLimit: 'to',\n    filter: 'q',\n};\n\nfunction tableWithUrlState<P extends ITableHOCOwnProps>(Component: React.ComponentType<P>) {\n    type Props = P &\n        TableWithUrlStateProps &\n        ReturnType<typeof mapStateToProps> &\n        ReturnType<typeof mapDispatchToProps>;\n\n    const mapStateToProps = (state: IReactVaporState, ownProps: P) => ({\n        query: getQuery(state, ownProps.id),\n    });\n\n    const mapDispatchToProps = (dispatch: IDispatch, ownProps: P) => ({\n        initializeFromUrl: () => dispatch(updateTableStateFromUrl(ownProps.id)),\n    });\n\n    class WrappedComponentDisconnected extends React.PureComponent<Props> {\n        static displayName = `withUrlState(${Component.displayName})`;\n\n        render() {\n            const wrappedProps = _.omit(this.props, 'onUpdate', 'onUpdateUrl', 'query', 'initializeFromUrl');\n            return <Component {...(wrappedProps as P)} onUpdate={this.onUpdate} />;\n        }\n\n        componentDidMount() {\n            this.props.initializeFromUrl();\n        }\n\n        private onUpdate = () => {\n            this.updateUrl(this.props.query);\n            this.props.onUpdate?.();\n        };\n\n        private updateUrl = _.debounce(this.props.onUpdateUrl || _.noop, 100);\n    }\n\n    return connect(\n        mapStateToProps,\n        mapDispatchToProps\n        // @ts-ignore\n    )(WrappedComponentDisconnected);\n}\n\nfunction getQuery(state: IReactVaporState, tableId: string): string {\n    let order: SortOrderValues.ascending | SortOrderValues.descending;\n    const tableState = TableHOCUtils.getCompositeState(tableId, state);\n    const [from, to] = _.map(tableState.dateLimits, (limit) => limit && limit.toISOString());\n\n    if (_.isBoolean(tableState.sortAscending)) {\n        order = tableState.sortAscending ? SortOrderValues.ascending : SortOrderValues.descending;\n    }\n\n    return UrlUtils.toQueryString({\n        [Params.filter]: tableState.filter || undefined,\n        [Params.pageNumber]: tableState.pageNb,\n        [Params.pageSize]: tableState.perPage,\n        [Params.sortKey]: tableState.sortKey,\n        [Params.sortOrder]: order,\n        ..._.reduce(\n            tableState.predicates,\n            (memo, {id, value}: ITableHOCPredicateValue) => ({\n                ...memo,\n                [id]: value,\n            }),\n            {}\n        ),\n        [Params.lowerDateLimit]: from || undefined,\n        [Params.upperDateLimit]: to || undefined,\n    });\n}\n\nfunction updateTableStateFromUrl(tableId: string): IThunkAction {\n    return (dispatch: IDispatch, getState) => {\n        const urlParams = UrlUtils.getSearchParams();\n        const possiblePredicates = TableHOCUtils.getPredicateIds(tableId, getState());\n\n        Object.keys(urlParams)\n            .filter((key) => possiblePredicates.includes(key))\n            .forEach((key) =>\n                dispatch(selectListBoxOption(TableHOCUtils.getPredicateId(tableId, key), false, urlParams[key]))\n            );\n\n        if (urlParams.hasOwnProperty(Params.lowerDateLimit)) {\n            dispatch(\n                changeDatePickerLowerLimit(\n                    TableHOCUtils.getDatePickerId(tableId),\n                    new Date(urlParams[Params.lowerDateLimit])\n                )\n            );\n        }\n\n        if (urlParams.hasOwnProperty(Params.upperDateLimit)) {\n            dispatch(\n                changeDatePickerUpperLimit(\n                    TableHOCUtils.getDatePickerId(tableId),\n                    new Date(urlParams[Params.upperDateLimit])\n                )\n            );\n        }\n\n        if (urlParams.hasOwnProperty(Params.lowerDateLimit) || urlParams.hasOwnProperty(Params.upperDateLimit)) {\n            dispatch(applyDatePicker(tableId));\n        }\n\n        if (urlParams.hasOwnProperty(Params.filter)) {\n            dispatch(filterThrough(tableId, urlParams[Params.filter]));\n        }\n\n        if (urlParams.hasOwnProperty(Params.sortKey) && urlParams.hasOwnProperty(Params.sortOrder)) {\n            dispatch(\n                TableHeaderActions.sortTable(\n                    urlParams[Params.sortKey],\n                    urlParams[Params.sortOrder] === SortOrderValues.ascending\n                )\n            );\n        }\n\n        if (urlParams.hasOwnProperty(Params.pageSize)) {\n            dispatch(changePerPage(tableId, urlParams[Params.pageSize]));\n        }\n\n        if (urlParams.hasOwnProperty(Params.pageNumber)) {\n            dispatch(changePage(TableHOCUtils.getPaginationId(tableId), urlParams[Params.pageNumber]));\n        }\n    };\n}\n\nexport {tableWithUrlState, Params as TableWithUrlStateParameters};\n"}}]);
//# sourceMappingURL=798.bundle.js.map