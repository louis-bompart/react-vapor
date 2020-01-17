(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{1264:function(n,e,t){"use strict";t.r(e),e.default="import {ComponentClass} from 'react';\nimport * as React from 'react';\nimport {IBlankSlateProps} from './BlankSlate';\n\nexport interface IBlankSlateWithTableProps extends IBlankSlateProps {\n    numberOfColumn?: number;\n}\n\nexport const blankSlateWithTable = <P extends IBlankSlateProps>(\n    Component: React.ComponentType<P>\n): ComponentClass<IBlankSlateWithTableProps & P> => {\n    class ComponentBlankSlateWithTable extends React.PureComponent<IBlankSlateWithTableProps & P> {\n        static defaultProps: Partial<IBlankSlateWithTableProps & P> = {\n            numberOfColumn: 20,\n        } as Partial<IBlankSlateWithTableProps & P>;\n\n        render() {\n            const {numberOfColumn, ...componentProps} = this.props;\n            return (\n                <tr className=\"blankslate-row no-hover\">\n                    <td colSpan={numberOfColumn}>\n                        <Component {...(componentProps as P)}>{this.props.children}</Component>\n                    </td>\n                </tr>\n            );\n        }\n    }\n\n    return ComponentBlankSlateWithTable;\n};\n"}}]);
//# sourceMappingURL=166.bundle.js.map