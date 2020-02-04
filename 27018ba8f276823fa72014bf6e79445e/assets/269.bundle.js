(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{1379:function(r,o,t){"use strict";t.r(o),o.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {IClassName} from '../../utils/ClassNameUtils';\r\nimport {KeyValue} from '../../utils/DataStructuresUtils';\r\nimport {Color} from '../color/Color';\r\nimport {ITooltipProps, Tooltip} from '../tooltip/Tooltip';\r\n\r\nexport interface IColorBarProps {\r\n    /**\r\n     * key value pair object, in which\r\n     * each key is a string defining a css legal color value https://www.w3schools.com/cssref/css_colors_legal.asp\r\n     * and each value is an integer representing the percentage of 100% that this color must fill\r\n     */\r\n    widthPerColor: KeyValue<number>;\r\n    tooltipPerColor?: KeyValue<ITooltipProps>;\r\n    height?: string;\r\n    className?: IClassName;\r\n}\r\n\r\nexport class ColorBar extends React.Component<IColorBarProps> {\r\n    static defaultProps: Partial<IColorBarProps> = {\r\n        height: '5px',\r\n        tooltipPerColor: {},\r\n    };\r\n\r\n    render() {\r\n        return (\r\n            <div className={classNames('full-content-x color-bar', this.props.className)}>\r\n                {_.map(this.getAdjustedWidthPerColor(), (width: number, color: string) => {\r\n                    const colorBarSection: JSX.Element = (\r\n                        <Color\r\n                            key={color}\r\n                            className=\"inline-block color-bar-color\"\r\n                            color={color}\r\n                            style={{height: this.props.height, width: `${width}%`}}\r\n                        ></Color>\r\n                    );\r\n\r\n                    return this.props.tooltipPerColor[color] ? (\r\n                        <Tooltip key={color} {...this.props.tooltipPerColor[color]}>\r\n                            {colorBarSection}\r\n                        </Tooltip>\r\n                    ) : (\r\n                        colorBarSection\r\n                    );\r\n                })}\r\n            </div>\r\n        );\r\n    }\r\n\r\n    getAdjustedWidthPerColor(): KeyValue<number> {\r\n        const nonZeroWidthColors = _.omit(this.props.widthPerColor, (width: number) => !width);\r\n        const totalColoredWidth = _.reduce(\r\n            nonZeroWidthColors,\r\n            (totalWidth: number, width: number) => width + totalWidth,\r\n            0\r\n        );\r\n\r\n        if (totalColoredWidth === 0) {\r\n            return {transparent: 100};\r\n        } else if (totalColoredWidth < 100) {\r\n            return {...nonZeroWidthColors, transparent: 100 - totalColoredWidth};\r\n        } else if (totalColoredWidth === 100) {\r\n            return nonZeroWidthColors;\r\n        } else {\r\n            return _.mapObject(nonZeroWidthColors, (width: number) => Math.round((width / totalColoredWidth) * 100));\r\n        }\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=269.bundle.js.map