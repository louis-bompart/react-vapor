(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1237:function(n,t,s){"use strict";s.r(t),t.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {Action, IBasicActionProps} from './Action';\r\n\r\nexport interface ILinkActionProps extends React.ClassAttributes<LinkAction>, IBasicActionProps {}\r\n\r\nexport class LinkAction extends React.Component<ILinkActionProps> {\r\n    render() {\r\n        const actionClasses: string = classNames({\r\n            enabled: this.props.action.enabled,\r\n            'state-disabled': !this.props.action.enabled && !this.props.action.hideDisabled,\r\n            'inline-flex flex-center': !this.props.simple,\r\n        });\r\n        const opts: React.AllHTMLAttributes<HTMLAnchorElement> = {\r\n            children: <Action action={this.props.action} simple={this.props.simple} />,\r\n        };\r\n        const href = this.props.action.enabled ? this.props.action.link : undefined;\r\n        if (this.props.action.target) {\r\n            opts.target = this.props.action.enabled ? this.props.action.target : undefined;\r\n            opts.rel = 'noopener noreferrer';\r\n        }\r\n\r\n        return <a className={actionClasses} href={href} title={this.props.action.name} {...opts} />;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=125.bundle.js.map