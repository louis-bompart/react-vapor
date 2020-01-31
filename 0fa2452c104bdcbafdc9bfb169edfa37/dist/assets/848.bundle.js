(window.webpackJsonp=window.webpackJsonp||[]).push([[848],{1946:function(n,e,r){"use strict";r.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\n\r\nimport {EventUtils} from '../../utils/EventUtils';\r\nimport {TableCollapsibleRowToggle} from './TableCollapsibleRowToggle';\r\n\r\nexport interface ITableHeadingRowOwnProps extends React.ClassAttributes<TableHeadingRow> {\r\n    id?: string;\r\n    tableId?: string;\r\n    rowId?: string;\r\n    isCollapsible: boolean;\r\n    onClickCallback?: () => void;\r\n    onDoubleClick?: () => void;\r\n    className?: string;\r\n    isMultiSelect?: boolean;\r\n    selectionDisabled?: boolean;\r\n    tableHasCollapsibleRow?: boolean;\r\n}\r\n\r\nexport interface ITableHeadingRowStateProps {\r\n    opened?: boolean;\r\n    selected?: boolean;\r\n}\r\n\r\nexport interface ITableHeadingRowDispatchProps {\r\n    onRender?: () => void;\r\n    onDestroy?: () => void;\r\n    onClick?: (hasMultipleSelectedRow: boolean) => void;\r\n}\r\n\r\nexport interface ITableHeadingRowProps\r\n    extends ITableHeadingRowOwnProps,\r\n        ITableHeadingRowStateProps,\r\n        ITableHeadingRowDispatchProps {}\r\n\r\nexport class TableHeadingRow extends React.Component<ITableHeadingRowProps, any> {\r\n    componentWillMount() {\r\n        this.props.onRender?.();\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onDestroy?.();\r\n    }\r\n\r\n    render() {\r\n        const toggle: JSX.Element = this.props.isCollapsible ? (\r\n            <TableCollapsibleRowToggle isExpanded={this.props.opened} />\r\n        ) : (\r\n            this.props.tableHasCollapsibleRow && <td></td>\r\n        );\r\n        const rowClasses = classNames(\r\n            {\r\n                'heading-row': this.props.isCollapsible,\r\n                selected: this.props.selected,\r\n                opened: this.props.opened,\r\n            },\r\n            this.props.className\r\n        );\r\n\r\n        return (\r\n            <tr\r\n                className={rowClasses}\r\n                onClick={(e: React.MouseEvent<any>) => this.handleClick(e)}\r\n                onDoubleClick={() => this.handleDoubleClick()}\r\n            >\r\n                {this.props.children}\r\n                {toggle}\r\n            </tr>\r\n        );\r\n    }\r\n\r\n    private handleClick(e: React.MouseEvent<any>) {\r\n        if (!EventUtils.isClickingInsideElementWithClassname(e, 'dropdown')) {\r\n            const hasMultipleSelectedRow = (e.metaKey || e.ctrlKey) && this.props.isMultiSelect;\r\n\r\n            this.props.onClick?.(hasMultipleSelectedRow);\r\n            this.props.onClickCallback?.();\r\n        }\r\n    }\r\n\r\n    private handleDoubleClick() {\r\n        this.props.onDoubleClick?.();\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=848.bundle.js.map