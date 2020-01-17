(window.webpackJsonp=window.webpackJsonp||[]).push([[873],{1957:function(n,r,s){"use strict";s.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {Svg} from '../svg/Svg';\r\n\r\nexport interface IToastProps {\r\n    id?: string;\r\n    title?: React.ReactNode;\r\n    isOpened?: boolean;\r\n    type?: string;\r\n    dismiss?: number;\r\n    dismissible?: boolean;\r\n    animate?: boolean;\r\n    className?: string;\r\n    /**\r\n     * @deprecated use children instead\r\n     */\r\n    content?: React.ReactNode;\r\n    onRender?: () => void;\r\n    onClose?: () => void;\r\n    onDestroy?: () => void;\r\n}\r\n\r\nexport const ToastType = {\r\n    Success: 'Success',\r\n    Warning: 'Warning',\r\n    Error: 'Error',\r\n};\r\n\r\nexport class Toast extends React.Component<IToastProps, {}> {\r\n    private timeout: number;\r\n\r\n    static defaultProps: Partial<IToastProps> = {\r\n        dismissible: true,\r\n    };\r\n\r\n    componentWillMount() {\r\n        if (this.props.onRender) {\r\n            this.props.onRender();\r\n        }\r\n    }\r\n\r\n    componentDidMount() {\r\n        this.setTimeout();\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.clearTimeout();\r\n\r\n        if (this.props.onDestroy) {\r\n            this.props.onDestroy();\r\n        }\r\n    }\r\n\r\n    private setTimeout() {\r\n        if (this.props.dismissible && this.props.dismiss > 0) {\r\n            this.timeout = setTimeout(() => this.close(), this.props.dismiss) as any;\r\n        }\r\n    }\r\n\r\n    private clearTimeout() {\r\n        clearTimeout(this.timeout);\r\n    }\r\n\r\n    private close() {\r\n        if (this.props.onClose) {\r\n            this.props.onClose();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const classes = classNames(\r\n            'toast',\r\n            {\r\n                'mod-success':\r\n                    this.props.type === ToastType.Success ||\r\n                    (_.isEmpty(this.props.className) && _.isEmpty(this.props.type)),\r\n                'mod-warning': this.props.type === ToastType.Warning,\r\n                'mod-error': this.props.type === ToastType.Error,\r\n                'mod-animated': _.isUndefined(this.props.animate) || this.props.animate === true,\r\n            },\r\n            this.props.className\r\n        );\r\n\r\n        const closeButton = this.props.dismissible && (\r\n            <span className=\"toast-close\" onClick={() => this.close()}>\r\n                <Svg svgName=\"close\" className=\"icon mod-lg fill-pure-white\" />\r\n            </span>\r\n        );\r\n\r\n        const toastContent = (!!this.props.content || !!this.props.children) && (\r\n            <div className=\"toast-description\">\r\n                {this.props.children}\r\n                {_.isString(this.props.content) || !this.props.content\r\n                    ? this.props.content\r\n                    : React.createElement(this.props.content as React.ComponentClass)}\r\n            </div>\r\n        );\r\n\r\n        return (\r\n            <div className={classes} onMouseEnter={() => this.clearTimeout()} onMouseLeave={() => this.setTimeout()}>\r\n                {closeButton}\r\n                <div className=\"toast-title\">{this.props.title}</div>\r\n                {toastContent}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=873.bundle.js.map