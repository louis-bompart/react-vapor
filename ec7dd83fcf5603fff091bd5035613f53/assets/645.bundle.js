(window.webpackJsonp=window.webpackJsonp||[]).push([[645],{1748:function(n,e,r){"use strict";r.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {ToggleForm} from '../childForm/ToggleForm';\r\nimport {Radio} from './Radio';\r\n\r\nexport interface IRadioSelectOnChangeCallback {\r\n    onChange?: (value: string, id?: string, e?: React.MouseEvent<HTMLElement>) => void;\r\n}\r\n\r\nexport interface IRadioSelectProps extends IRadioSelectOnChangeCallback {\r\n    id?: string;\r\n    name?: string;\r\n    className?: string;\r\n    value?: string;\r\n    disabled?: boolean;\r\n    disabledTooltip?: string;\r\n    children?: Array<React.ReactElement<Radio>> | Array<React.ReactElement<ToggleForm>>;\r\n    onChangeCallback?: (value: string, id?: string, e?: React.MouseEvent<HTMLElement>) => void;\r\n}\r\n\r\nexport interface IRadioSelectConnectedProps {\r\n    valueOnMount?: string;\r\n    disabledValuesOnMount?: string[];\r\n}\r\n\r\nexport interface IRadioSelectDispatchProps extends IRadioSelectOnChangeCallback {\r\n    onMount?: (id: string, valueOnMount: string, disabledValues: string[]) => void;\r\n    onUnmount?: (id: string) => void;\r\n}\r\n\r\nexport interface IRadioSelectStateProps {\r\n    value?: string;\r\n    disabledValues?: string[];\r\n}\r\n\r\nexport interface IRadioSelectAllProps\r\n    extends IRadioSelectProps,\r\n        IRadioSelectConnectedProps,\r\n        IRadioSelectDispatchProps,\r\n        IRadioSelectStateProps {}\r\n\r\nexport class RadioSelect extends React.PureComponent<IRadioSelectAllProps> {\r\n    componentDidMount() {\r\n        this.props.onMount?.(this.props.id, this.props.valueOnMount, this.props.disabledValuesOnMount);\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onUnmount?.(this.props.id);\r\n    }\r\n\r\n    render() {\r\n        const children = React.Children.map(this.props.children, (child: React.ReactElement<any>) => {\r\n            return React.cloneElement(child, {\r\n                name: child.props.name || this.props.name,\r\n                checked: this.props.value === child.props.value,\r\n                disabled: this.isValueDisabled(child.props.value),\r\n                disabledTooltip: this.props.disabledTooltip,\r\n                onClick: (e: React.MouseEvent<HTMLElement>) => {\r\n                    child.props.onClick && child.props.onClick(e);\r\n                    this.handleToggle(child.props.value, e);\r\n                },\r\n            });\r\n        });\r\n\r\n        return <div className={classNames('form-control radio-select', this.props.className)}>{children}</div>;\r\n    }\r\n\r\n    private handleToggle(value: string, e: React.MouseEvent<HTMLElement>) {\r\n        this.props.onChange?.(value, this.props.id, e);\r\n        this.props.onChangeCallback?.(value, this.props.id, e);\r\n    }\r\n\r\n    private isValueDisabled(childValue: string): boolean {\r\n        return (\r\n            this.props.disabled || (!!this.props.disabledValues && _.contains(this.props.disabledValues, childValue))\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=645.bundle.js.map