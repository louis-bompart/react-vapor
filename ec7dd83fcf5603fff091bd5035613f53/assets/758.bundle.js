(window.webpackJsonp=window.webpackJsonp||[]).push([[758],{1856:function(r,s,n){"use strict";n.r(s),s.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {ITooltipProps, Tooltip} from '../tooltip/Tooltip';\r\nimport {ISvgProps, Svg} from './Svg';\r\n\r\nexport interface ILinkSvgProps extends React.ClassAttributes<LinkSvg> {\r\n    url?: string;\r\n    target?: string;\r\n    linkClasses?: string[];\r\n    svg?: ISvgProps;\r\n    tooltip?: ITooltipProps;\r\n}\r\n\r\nexport class LinkSvg extends React.Component<ILinkSvgProps, {}> {\r\n    static defaultProps: Partial<ILinkSvgProps> = {\r\n        target: '_blank',\r\n        linkClasses: [],\r\n        svg: {svgName: 'help', svgClass: 'icon'},\r\n    };\r\n\r\n    render() {\r\n        const classes = classNames(this.props.linkClasses);\r\n        const href = this.props.url ? {href: this.props.url} : null;\r\n        return (\r\n            <a {...href} target={this.props.target} className={classes}>\r\n                <Tooltip {...this.props.tooltip}>\r\n                    <Svg {...this.props.svg} />\r\n                </Tooltip>\r\n            </a>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=758.bundle.js.map