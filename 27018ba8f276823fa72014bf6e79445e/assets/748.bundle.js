(window.webpackJsonp=window.webpackJsonp||[]).push([[748],{1848:function(n,r,e){"use strict";e.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport {map, omit} from 'underscore';\r\n\r\nexport interface ISubNavigationOwnProps extends React.ClassAttributes<SubNavigation> {\r\n    id?: string;\r\n    items: ISubNavigationItem[];\r\n    defaultSelected?: string;\r\n}\r\n\r\nexport interface ISubNavigationStateProps {\r\n    selected?: string;\r\n}\r\n\r\nexport interface ISubNavigationDispatchProps {\r\n    onRender?: () => void;\r\n    onDestroy?: () => void;\r\n    onClickItem?: (id: string) => void;\r\n}\r\n\r\nexport interface ISubNavigationItem {\r\n    id: string;\r\n    label: React.ReactNode;\r\n    link?: string;\r\n}\r\n\r\nexport interface ISubNavigationProps\r\n    extends ISubNavigationOwnProps,\r\n        ISubNavigationStateProps,\r\n        ISubNavigationDispatchProps {}\r\n\r\nconst ISubNavigationPropsToOmit = keys<ISubNavigationProps>();\r\n\r\nexport class SubNavigation extends React.PureComponent<ISubNavigationProps & React.HTMLAttributes<HTMLElement>> {\r\n    componentWillMount() {\r\n        this.props.onRender?.();\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onDestroy?.();\r\n    }\r\n\r\n    render() {\r\n        const selected = this.props.selected || this.props.defaultSelected;\r\n        const navProps = omit(this.props, ISubNavigationPropsToOmit);\r\n        const items = map(this.props.items, ({id, link, label}: ISubNavigationItem) => (\r\n            <li key={id} className={classNames('sub-navigation-item', {'mod-selected': id === selected})}>\r\n                <a\r\n                    href={link || '#'}\r\n                    className=\"sub-navigation-item-link\"\r\n                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => this.handleItemClick(e, id)}\r\n                >\r\n                    {label}\r\n                </a>\r\n            </li>\r\n        ));\r\n\r\n        return (\r\n            <nav {...navProps} className={classNames('sub-navigation', navProps.className)}>\r\n                <ul className=\"sub-navigation-items\">{items}</ul>\r\n            </nav>\r\n        );\r\n    }\r\n\r\n    private handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {\r\n        e.preventDefault();\r\n        this.props.onClickItem?.(id);\r\n    };\r\n}\r\n"}}]);
//# sourceMappingURL=748.bundle.js.map