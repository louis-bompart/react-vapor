(window.webpackJsonp=window.webpackJsonp||[]).push([[771],{1855:function(r,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {ConfigSupplier, HocUtils} from '../../utils/HocUtils';\r\nimport {ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {BlankSlate, IBlankSlateProps} from '../blankSlate/BlankSlate';\r\nimport {ITableHOCOwnProps} from './TableHOC';\r\nimport {TableSelectors} from './TableSelectors';\r\n\r\nexport interface ITableWithBlankSlateStateProps {\r\n    isEmpty: boolean;\r\n}\r\n\r\nexport interface ITableWithBlankSlateProps extends Partial<ITableWithBlankSlateStateProps> {}\r\n\r\nconst TableWithBlankSlatePropsToOmit = keys<ITableWithBlankSlateStateProps>();\r\n\r\nexport const tableWithBlankSlate = (supplier: ConfigSupplier<IBlankSlateProps> = {}) => (\r\n    Component: React.ComponentClass<ITableHOCOwnProps>\r\n): React.ComponentClass<ITableWithBlankSlateProps & React.HTMLAttributes<HTMLTableElement>> => {\r\n    const mapStateToProps = (\r\n        state: IReactVaporState,\r\n        ownProps: ITableHOCOwnProps\r\n    ): ITableWithBlankSlateStateProps | ITableHOCOwnProps => {\r\n        const isEmpty = TableSelectors.getIsEmpty(state, ownProps);\r\n        return {\r\n            isEmpty,\r\n            data: isEmpty ? null : ownProps.data,\r\n        };\r\n    };\r\n\r\n    @ReduxConnect(mapStateToProps)\r\n    class TableWithBlankSlate extends React.Component<ITableHOCOwnProps & ITableWithBlankSlateProps> {\r\n        render() {\r\n            const newProps = {\r\n                ..._.omit(this.props, [...TableWithBlankSlatePropsToOmit]),\r\n                renderBody: this.props.isEmpty ? (): any => null : this.props.renderBody,\r\n            };\r\n            return (\r\n                <Component {...newProps}>\r\n                    {this.props.isEmpty ? <BlankSlate {...HocUtils.supplyConfig(supplier)} /> : this.props.children}\r\n                </Component>\r\n            );\r\n        }\r\n    }\r\n\r\n    return TableWithBlankSlate;\r\n};\r\n"}}]);
//# sourceMappingURL=771.bundle.js.map