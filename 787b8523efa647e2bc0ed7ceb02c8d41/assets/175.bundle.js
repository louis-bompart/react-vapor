(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1274:function(r,n,e){"use strict";e.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {Svg} from '../svg/Svg';\r\n\r\nexport interface IBreadcrumbLinkProps {\r\n    name: React.ReactNode;\r\n    link?: string;\r\n    classes?: string;\r\n    onClick?: (props: IBreadcrumbLinkProps) => boolean; // return false to cancel the href event\r\n}\r\n\r\nexport class BreadcrumbLink extends React.Component<IBreadcrumbLinkProps, {}> {\r\n    private handleOnClick(e: React.MouseEvent<HTMLAnchorElement>): boolean {\r\n        if (this.props.onClick && !this.props.onClick(this.props)) {\r\n            e.stopPropagation();\r\n            e.nativeEvent.stopImmediatePropagation();\r\n            e.preventDefault();\r\n            return false;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    render() {\r\n        const linkClasses = classNames(\r\n            {\r\n                link: this.props.link,\r\n                'text-blank semi-bold': !this.props.link,\r\n            },\r\n            this.props.classes\r\n        );\r\n        const TagName = this.props.link ? 'a' : 'span';\r\n        return (\r\n            <li className=\"breadcrumb-title\">\r\n                <TagName\r\n                    className={linkClasses}\r\n                    href={this.props.link}\r\n                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => this.handleOnClick(e)}\r\n                >\r\n                    {this.props.name}\r\n                </TagName>\r\n                <Svg svgName=\"arrow-right-rounded\" className=\"breadcrumb-arrow\" />\r\n            </li>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=175.bundle.js.map