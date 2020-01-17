(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{1274:function(r,n,e){"use strict";e.r(n),n.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {ITitleProps, Title} from '../title/Title';\r\nimport {BreadcrumbLink, IBreadcrumbLinkProps} from './BreadcrumbLink';\r\n\r\nexport interface IBreadcrumbProps extends React.ClassAttributes<Breadcrumb> {\r\n    links?: IBreadcrumbLinkProps[];\r\n    defaultLinkPath?: string;\r\n    title: ITitleProps;\r\n}\r\n\r\nexport class Breadcrumb extends React.Component<IBreadcrumbProps, {}> {\r\n    static defaultProps: Partial<IBreadcrumbProps> = {\r\n        links: [],\r\n        defaultLinkPath: '',\r\n    };\r\n\r\n    private getLinks(): JSX.Element[] {\r\n        return _.map(this.props.links, (link: IBreadcrumbLinkProps) => (\r\n            <BreadcrumbLink\r\n                key={link.name}\r\n                {..._.extend(link, {\r\n                    link: link?.link ? `${this.props.defaultLinkPath}${link.link}` : undefined,\r\n                })}\r\n            />\r\n        ));\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <nav>\r\n                <ul className=\"flex\">\r\n                    {this.getLinks()}\r\n                    <li className=\"breadcrumb-title truncate\">\r\n                        <Title {...this.props.title} />\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=177.bundle.js.map