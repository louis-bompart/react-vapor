(window.webpackJsonp=window.webpackJsonp||[]).push([[777],{1863:function(r,t,o){"use strict";o.r(t),t.default="import * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\n\r\nimport {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {ConfigSupplier, HocUtils} from '../../utils/HocUtils';\r\nimport {ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {ITableWithSortState} from './reducers/TableWithSortReducers';\r\nimport {ITableHOCOwnProps} from './TableHOC';\r\nimport {TableSelectors} from './TableSelectors';\r\n\r\nexport interface ITableWithSortConfig extends WithServerSideProcessingProps {\r\n    sort?: (sortKey: string, isAsc: boolean, a: any, b: any) => number;\r\n}\r\n\r\nexport interface ITableWithSortStateProps {\r\n    isAsc?: boolean;\r\n    sortKey?: string;\r\n}\r\n\r\nexport interface ITableWithSortProps\r\n    extends ITableHOCOwnProps,\r\n        Partial<ITableWithSortStateProps>,\r\n        WithServerSideProcessingProps {}\r\n\r\nconst TableWithSortPropsToOmit = keys<ITableWithSortStateProps>();\r\n\r\nconst defaultSort = () => 0;\r\n\r\nexport type SortableTableComponent = React.ComponentType<ITableWithSortProps>;\r\n\r\nexport const tableWithSort = (supplier: ConfigSupplier<ITableWithSortConfig> = {}) => (\r\n    Component: SortableTableComponent\r\n): SortableTableComponent => {\r\n    const config = HocUtils.supplyConfig(supplier);\r\n\r\n    const mapStateToProps = (\r\n        state: IReactVaporState,\r\n        ownProps: ITableWithSortProps\r\n    ): ITableWithSortStateProps | ITableHOCOwnProps => {\r\n        const tableSort: ITableWithSortState = TableSelectors.getSort(state, ownProps);\r\n        const sort = config.sort || defaultSort;\r\n\r\n        return {\r\n            data:\r\n                ownProps.isServer || config.isServer\r\n                    ? ownProps.data\r\n                    : ownProps.data && [...ownProps.data].sort((a, b) => sort(tableSort.id, tableSort.isAsc, a, b)),\r\n            sortKey: tableSort && tableSort.id,\r\n            isAsc: !!(tableSort && tableSort.isAsc),\r\n        };\r\n    };\r\n\r\n    @ReduxConnect(mapStateToProps)\r\n    class TableWithSort extends React.Component<ITableWithSortProps> {\r\n        componentDidUpdate(prevProps: ITableWithSortProps) {\r\n            if (prevProps.sortKey !== this.props.sortKey || prevProps.isAsc !== this.props.isAsc) {\r\n                this.props.onUpdate?.();\r\n            }\r\n        }\r\n\r\n        render() {\r\n            const newProps = {..._.omit(this.props, [...TableWithSortPropsToOmit])};\r\n            return <Component {...newProps}>{this.props.children}</Component>;\r\n        }\r\n    }\r\n\r\n    return TableWithSort;\r\n};\r\n"}}]);
//# sourceMappingURL=777.bundle.js.map