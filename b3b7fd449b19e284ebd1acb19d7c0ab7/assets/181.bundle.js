(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1293:function(r,t,n){"use strict";n.r(t),t.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IBaseActionOptions} from '../actions/Action';\r\nimport {Tooltip} from '../tooltip/Tooltip';\r\n\r\nexport interface IButtonProps extends IBaseActionOptions {\r\n    small?: boolean;\r\n    classes?: string[];\r\n}\r\n\r\nconst ButtonPropsToOmit = keys<IButtonProps>();\r\n\r\nexport class Button extends React.Component<IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> {\r\n    static defaultProps: Partial<IButtonProps> = {\r\n        enabled: true,\r\n        name: '',\r\n        tooltip: '',\r\n        primary: false,\r\n        small: false,\r\n        tooltipPlacement: 'right',\r\n        target: '',\r\n    };\r\n\r\n    private onClick() {\r\n        if (this.props.onClick && this.props.enabled) {\r\n            this.props.onClick();\r\n        }\r\n    }\r\n\r\n    getTemplate(buttonClass: string): JSX.Element {\r\n        let buttonElement: JSX.Element;\r\n\r\n        let buttonAttrs = {\r\n            ..._.omit(this.props, ButtonPropsToOmit),\r\n            disabled: !this.props.enabled,\r\n            onClick: () => this.onClick(),\r\n        };\r\n\r\n        if (this.props.link) {\r\n            buttonAttrs = _.extend(buttonAttrs, {\r\n                target: this.props.target,\r\n                rel: 'noopener noreferrer',\r\n                href: this.props.link,\r\n            });\r\n\r\n            buttonElement = (\r\n                <a className={`${buttonClass} btn-container`} {...buttonAttrs}>\r\n                    {this.props.name}\r\n                    {this.props.children}\r\n                </a>\r\n            );\r\n        } else {\r\n            buttonElement = (\r\n                <button className={buttonClass} {...buttonAttrs}>\r\n                    {this.props.name}\r\n                    {this.props.children}\r\n                </button>\r\n            );\r\n        }\r\n\r\n        return !_.isEmpty(this.props.tooltip) ? (\r\n            <Tooltip title={this.props.tooltip} placement={this.props.tooltipPlacement} className=\"btn-container\">\r\n                {buttonElement}\r\n            </Tooltip>\r\n        ) : (\r\n            buttonElement\r\n        );\r\n    }\r\n\r\n    private getClasses() {\r\n        return classNames(\r\n            'btn',\r\n            {\r\n                'mod-primary': this.props.primary,\r\n                'mod-small': this.props.small,\r\n                'state-disabled disabled': !this.props.enabled,\r\n                'text-medium-grey': !this.props.primary && !this.props.enabled,\r\n            },\r\n            this.props.classes\r\n        );\r\n    }\r\n\r\n    render() {\r\n        return this.getTemplate(this.getClasses());\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=181.bundle.js.map