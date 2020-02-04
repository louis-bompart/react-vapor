(window.webpackJsonp=window.webpackJsonp||[]).push([[794],{1894:function(n,e,t){"use strict";t.r(e),e.default="import * as React from 'react';\nimport {connect} from 'react-redux';\nimport {keys} from 'ts-transformer-keys';\nimport * as _ from 'underscore';\nimport {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing';\n\nimport {IReactVaporState} from '../../ReactVapor';\nimport {IDispatch} from '../../utils';\nimport {ConfigSupplier, HocUtils} from '../../utils/HocUtils';\nimport {FlatSelectSelectors} from '../flatSelect/FlatSelectSelectors';\nimport {INavigationChildrenProps, INavigationOwnProps} from '../navigation';\nimport {NavigationSelectors} from '../navigation/NavigationSelectors';\nimport {PER_PAGE_NUMBERS} from '../navigation/perPage/NavigationPerPage';\nimport {PaginationUtils} from '../pagination/PaginationUtils';\nimport {TablePagination} from '../pagination/TablePagination';\nimport {TableWithPaginationActions} from './actions/TableWithPaginationActions';\nimport {ITableHOCOwnProps} from './TableHOC';\nimport {TableSelectors} from './TableSelectors';\nimport {TableHOCUtils} from './utils/TableHOCUtils';\n\nconst TableWithNewPaginationProps = keys<ITableWithNewPaginationStateProps>();\n\nconst sliceData = (data: any[], startingIndex: number, endingIndex: number) => data.slice(startingIndex, endingIndex);\n\nexport interface ITableWithNewPaginationConfig\n    extends WithServerSideProcessingProps,\n        Partial<INavigationOwnProps>,\n        Partial<INavigationChildrenProps> {}\n\nexport interface ITableWithNewPaginationProps\n    extends ITableHOCOwnProps,\n        WithServerSideProcessingProps,\n        Partial<ITableWithNewPaginationStateProps>,\n        ReturnType<typeof mapDispatchToProps> {}\n\nexport interface ITableWithNewPaginationStateProps {\n    totalEntries: number;\n    totalPages: number;\n    pageNb: number;\n    perPage: number;\n}\n\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableWithNewPaginationProps) => ({\n    onMount: () => dispatch(TableWithPaginationActions.add(ownProps.id)),\n    onUnmount: () => dispatch(TableWithPaginationActions.remove(ownProps.id)),\n});\n\nexport const tableWithNewPagination = (\n    supplier: ConfigSupplier<ITableWithNewPaginationConfig> = {perPageNumbers: PER_PAGE_NUMBERS}\n) => (\n    Component: React.ComponentType<ITableWithNewPaginationProps>\n): React.ComponentClass<ITableWithNewPaginationProps & React.HTMLAttributes<HTMLTableElement>> => {\n    const config = HocUtils.supplyConfig(supplier);\n    const mapStateToProps = (state: IReactVaporState, ownProps: ITableWithNewPaginationProps) => {\n        const pageNb = NavigationSelectors.getPaginationPage(state, {id: TableHOCUtils.getPaginationId(ownProps.id)});\n\n        const perPage =\n            parseInt(\n                FlatSelectSelectors.getSelectedOptionId(state, {\n                    id: PaginationUtils.getPaginationPerPageId(ownProps.id),\n                }),\n                10\n            ) || PER_PAGE_NUMBERS[1];\n\n        const isServer = ownProps.isServer || config.isServer;\n        const length = TableSelectors.getDataCount(state, {\n            id: ownProps.id,\n            data: ownProps.data,\n            isServer,\n        });\n\n        const startingIndex = pageNb * perPage;\n        const endingIndex = startingIndex + perPage;\n\n        return {\n            pageNb,\n            perPage,\n            totalEntries: length,\n            totalPages: Math.max(Math.ceil(length / perPage), 1),\n            data: isServer ? ownProps.data : ownProps.data && sliceData(ownProps.data, startingIndex, endingIndex),\n        };\n    };\n\n    class TableWithNewPaginationDisconnected extends React.Component<ITableHOCOwnProps & ITableWithNewPaginationProps> {\n        componentDidMount() {\n            this.props.onMount();\n        }\n\n        componentWillUnmount() {\n            this.props.onUnmount();\n        }\n\n        componentDidUpdate(prevProps: ITableWithNewPaginationProps) {\n            if (prevProps.pageNb !== this.props.pageNb || prevProps.perPage !== this.props.perPage) {\n                this.props.onUpdate?.();\n            }\n        }\n\n        render() {\n            const newProps = _.omit(this.props, [...TableWithNewPaginationProps]);\n            return (\n                <Component {...newProps}>\n                    <TablePagination\n                        id={this.props.id}\n                        disabled={this.props.isLoading}\n                        totalPages={this.props.totalPages}\n                        defaultPerPageSelected={\n                            config?.perPageNumbers?.length > 1\n                                ? config?.perPageNumbers[1]\n                                : config?.perPageNumbers[0] ?? PER_PAGE_NUMBERS[1]\n                        }\n                        totalEntries={this.props.totalEntries}\n                        perPageNumbers={config.perPageNumbers}\n                    />\n                </Component>\n            );\n        }\n    }\n\n    return connect(mapStateToProps, mapDispatchToProps)(TableWithNewPaginationDisconnected);\n};\n"}}]);
//# sourceMappingURL=794.bundle.js.map