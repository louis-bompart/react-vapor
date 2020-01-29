(window.webpackJsonp=window.webpackJsonp||[]).push([[704],{1804:function(n,e,r){"use strict";r.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\n\r\nimport {JSXRenderable} from '../../utils/JSXUtils';\r\nimport {IReduxStatePossibleProps} from '../../utils/ReduxUtils';\r\n\r\nexport interface ISideNavProps extends IReduxStatePossibleProps {\r\n    className?: string;\r\n    children?: JSXRenderable;\r\n    opened?: boolean;\r\n}\r\n\r\nexport class SideNavigation extends React.Component<ISideNavProps> {\r\n    static toggleEvent = 'side-navigation-toggle';\r\n\r\n    render() {\r\n        return (\r\n            <nav\r\n                className={classNames(this.props.className, 'navigation', {\r\n                    'navigation-opened': !this.props.withReduxState || this.props.opened,\r\n                })}\r\n            >\r\n                <div className=\"navigation-menu\">\r\n                    <div className=\"navigation-menu-sections\">{this.props.children}</div>\r\n                </div>\r\n            </nav>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=704.bundle.js.map