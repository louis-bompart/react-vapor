(window.webpackJsonp=window.webpackJsonp||[]).push([[775],{1859:function(e,r,t){"use strict";t.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\n\r\nimport {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {ConfigSupplier, HocUtils} from '../../utils/HocUtils';\r\nimport {ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {IItemBoxProps} from '../itemBox/ItemBox';\r\nimport {SelectSelector} from '../select/SelectSelector';\r\nimport {SingleSelectConnected} from '../select/SingleSelectConnected';\r\nimport * as styles from './styles/TableWithPredicates.scss';\r\nimport {ITableHOCOwnProps} from './TableHOC';\r\nimport {TableHOCUtils} from './TableHOCUtils';\r\n\r\nexport interface ITableWithPredicateConfig extends WithServerSideProcessingProps {\r\n    id: string;\r\n    values: IItemBoxProps[];\r\n    prepend?: React.ReactNode;\r\n    matchPredicate?: (predicate: string, datum: any) => boolean;\r\n}\r\n\r\nexport interface ITableWithPredicateStateProps {\r\n    predicate: string;\r\n}\r\n\r\nexport interface ITableWithPredicateProps\r\n    extends Partial<ITableWithPredicateStateProps>,\r\n        ITableHOCOwnProps,\r\n        WithServerSideProcessingProps {}\r\n\r\nconst TableWithPredicatePropsToOmit = keys<ITableWithPredicateStateProps>();\r\n\r\nconst defaultMatchPredicate = (predicate: string, datum: any) =>\r\n    !predicate || _.some(_.values(datum), (value: string) => value === predicate);\r\n\r\ntype TableWithPredicateComponent = React.ComponentType<ITableWithPredicateProps>;\r\n\r\nexport const tableWithPredicate = (supplier: ConfigSupplier<ITableWithPredicateConfig>) => (\r\n    Component: TableWithPredicateComponent\r\n): TableWithPredicateComponent => {\r\n    const config = HocUtils.supplyConfig(supplier);\r\n\r\n    const mapStateToProps = (\r\n        state: IReactVaporState,\r\n        ownProps: ITableWithPredicateProps\r\n    ): ITableWithPredicateStateProps | ITableHOCOwnProps => {\r\n        const predicate = SelectSelector.getListBoxSelected(state, {\r\n            id: TableHOCUtils.getPredicateId(ownProps.id, config.id),\r\n        })[0];\r\n        const matchPredicate = config.matchPredicate || defaultMatchPredicate;\r\n        const predicateData = () =>\r\n            !ownProps.isServer && !config.isServer && predicate\r\n                ? _.filter(ownProps.data, (datum: any) => matchPredicate(predicate, datum))\r\n                : ownProps.data;\r\n        return {\r\n            predicate: predicate,\r\n            data: ownProps.data && predicateData(),\r\n        };\r\n    };\r\n\r\n    @ReduxConnect(mapStateToProps)\r\n    class TableWithPredicate extends React.Component<ITableWithPredicateProps> {\r\n        componentDidUpdate(prevProps: ITableWithPredicateProps) {\r\n            if (prevProps.predicate !== this.props.predicate) {\r\n                this.props.onUpdate?.();\r\n            }\r\n        }\r\n\r\n        render() {\r\n            const key = TableHOCUtils.getPredicateId(this.props.id, config.id);\r\n            const actions = this.props.actions || [];\r\n            const predicateAction = (\r\n                <div\r\n                    className={classNames('coveo-table-actions predicate-filters', styles.tablePredicateFilters)}\r\n                    key={key}\r\n                >\r\n                    <SingleSelectConnected id={key} items={config.values} buttonPrepend={config.prepend} />\r\n                </div>\r\n            );\r\n\r\n            const newActions = [...actions, predicateAction];\r\n            const newProps = _.omit(this.props, [...TableWithPredicatePropsToOmit]);\r\n            return (\r\n                <Component {...newProps} actions={newActions}>\r\n                    {this.props.children}\r\n                </Component>\r\n            );\r\n        }\r\n    }\r\n\r\n    return TableWithPredicate;\r\n};\r\n"}}]);
//# sourceMappingURL=775.bundle.js.map