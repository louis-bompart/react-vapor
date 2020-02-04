(window.webpackJsonp=window.webpackJsonp||[]).push([[391],{1499:function(n,t,r){"use strict";r.r(t),t.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {FlatSelectOption, IFlatSelectOptionProps} from './FlatSelectOption';\r\n\r\nexport interface IFlatSelectOwnProps {\r\n    id: string;\r\n    options: IFlatSelectOptionProps[];\r\n    className?: string;\r\n    group?: boolean;\r\n    optionPicker?: boolean;\r\n    defaultSelectedOptionId?: string;\r\n    onClick?: (option: IFlatSelectOptionProps) => void;\r\n    disabled?: boolean;\r\n    classes?: string[] /* @deprecated use className instead */;\r\n}\r\n\r\nexport interface IFlatSelectStateProps {\r\n    selectedOptionId?: string;\r\n}\r\n\r\nexport interface IFlatSelectDispatchProps {\r\n    onRender?: () => void;\r\n    onDestroy?: () => void;\r\n    onOptionClick?: (option: IFlatSelectOptionProps) => void;\r\n}\r\n\r\nexport interface IFlatSelectProps extends IFlatSelectOwnProps, IFlatSelectStateProps, IFlatSelectDispatchProps {}\r\n\r\nexport class FlatSelect extends React.Component<IFlatSelectProps> {\r\n    componentWillMount() {\r\n        if (this.props.onRender) {\r\n            this.props.onRender();\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onDestroy) {\r\n            this.props.onDestroy();\r\n        }\r\n    }\r\n\r\n    private handleOnOptionClick(option: IFlatSelectOptionProps) {\r\n        if (this.props.onOptionClick) {\r\n            this.props.onOptionClick(option);\r\n        }\r\n\r\n        if (this.props.onClick) {\r\n            this.props.onClick(option);\r\n        }\r\n    }\r\n\r\n    private getOptions(): JSX.Element[] {\r\n        return _.map(this.props.options, (flatSelectOption: IFlatSelectOptionProps, index: number) => {\r\n            flatSelectOption.selected =\r\n                this.props.selectedOptionId && this.props.selectedOptionId === flatSelectOption.id;\r\n            flatSelectOption.onClick = (option: IFlatSelectOptionProps) => this.handleOnOptionClick(option);\r\n\r\n            return <FlatSelectOption key={index} {...flatSelectOption} disabled={this.props.disabled} />;\r\n        });\r\n    }\r\n\r\n    render() {\r\n        const classes: string = classNames(\r\n            'flat-select',\r\n            {\r\n                'mod-btn-group': this.props.group,\r\n                'mod-option-picker': this.props.optionPicker,\r\n            },\r\n            this.props.classes,\r\n            this.props.className\r\n        );\r\n\r\n        return <div className={classes}>{this.getOptions()}</div>;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=391.bundle.js.map