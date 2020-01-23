(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{1369:function(r,e,n){"use strict";n.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as moment from 'moment';\r\nimport * as React from 'react';\r\nimport * as ReactDOM from 'react-dom';\r\n\r\nimport {DateUtils} from '../../utils/DateUtils';\r\nimport {IReduxStatePossibleProps} from '../../utils/ReduxUtils';\r\nimport {Button} from '../button/Button';\r\nimport {DEFAULT_YEARS, ICalendarSelectionRule} from '../calendar/Calendar';\r\nimport {ModalFooter} from '../modal/ModalFooter';\r\nimport {DatePickerBox, IDatePickerBoxChildrenProps, IDatePickerBoxProps, IDatesSelectionBox} from './DatePickerBox';\r\nimport {DatePickerDateRange} from './DatePickerConstants';\r\nimport {IDatePickerState} from './DatePickerReducers';\r\n\r\nexport interface IDatePickerDropdownOwnProps extends React.ClassAttributes<DatePickerDropdown> {\r\n    label?: string;\r\n    className?: string;\r\n    id?: string;\r\n    applyLabel?: string;\r\n    cancelLabel?: string;\r\n    toLabel?: string;\r\n    onRight?: boolean;\r\n    onBeforeApply?: () => void;\r\n    extraDropdownClasses?: string[];\r\n    extraDropdownToggleClasses?: string[];\r\n    renderDatePickerWhenClosed?: boolean;\r\n    initiallyUnselected?: boolean;\r\n    isClearable?: boolean;\r\n    attributeName?: string;\r\n    readonly?: boolean;\r\n}\r\n\r\nexport interface IDatePickerDropdownChildrenProps extends IDatePickerBoxChildrenProps {\r\n    datesSelectionBoxes: IDatesSelectionBox[];\r\n    setToNowTooltip?: string;\r\n    clearLabel?: string;\r\n    months?: string[];\r\n    startingMonth?: number;\r\n    years?: string[];\r\n    startingYear?: number;\r\n    days?: string[];\r\n    startingDay?: number;\r\n    selectionRules?: ICalendarSelectionRule[];\r\n    lowerLimitPlaceholder?: string;\r\n    upperLimitPlaceholder?: string;\r\n    isLinkedToDateRange?: boolean;\r\n    simple?: boolean;\r\n    initialDateRange?: DatePickerDateRange;\r\n}\r\n\r\nexport interface IDatePickerDropdownStateProps extends IReduxStatePossibleProps {\r\n    isOpened?: boolean;\r\n    datePicker?: IDatePickerState;\r\n}\r\n\r\nexport interface IDatePickerDropdownDispatchProps {\r\n    onApply?: () => void;\r\n    onCancel?: (currentMonth: number, currentYear: number, isOpened: boolean) => void;\r\n    onRender?: () => void;\r\n    onDestroy?: () => void;\r\n    onClick?: (datePicker: IDatePickerState) => void;\r\n    onDocumentClick?: () => void;\r\n    onClear?: () => void;\r\n}\r\n\r\nexport interface IDatePickerDropdownProps\r\n    extends IDatePickerDropdownOwnProps,\r\n        IDatePickerDropdownStateProps,\r\n        IDatePickerDropdownDispatchProps,\r\n        IDatePickerDropdownChildrenProps {}\r\n\r\nexport const DEFAULT_DATE_PICKER_DROPDOWN_LABEL: string = 'Select date';\r\nexport const DEFAULT_APPLY_DATE_LABEL: string = 'Apply';\r\nexport const DEFAULT_CANCEL_DATE_LABEL: string = 'Cancel';\r\nexport const DEFAULT_TO_LABEL: string = 'to';\r\nexport const DEFAULT_EXTRA_DROPDOWN_CLASSES: string[] = [];\r\nexport const DEFAULT_EXTRA_DROPDOWN_TOGGLE_CLASSES: string[] = [];\r\nexport const DEFAULT_RENDER_DATEPICKER_WHEN_CLOSED: boolean = true;\r\nexport const DEFAULT_INITIALY_UNSELECTED: boolean = false;\r\n\r\nexport class DatePickerDropdown extends React.Component<IDatePickerDropdownProps, any> {\r\n    static defaultProps: Partial<IDatePickerDropdownProps> = {\r\n        label: DEFAULT_DATE_PICKER_DROPDOWN_LABEL,\r\n        applyLabel: DEFAULT_APPLY_DATE_LABEL,\r\n        cancelLabel: DEFAULT_CANCEL_DATE_LABEL,\r\n        toLabel: DEFAULT_TO_LABEL,\r\n        extraDropdownClasses: DEFAULT_EXTRA_DROPDOWN_CLASSES,\r\n        extraDropdownToggleClasses: DEFAULT_EXTRA_DROPDOWN_TOGGLE_CLASSES,\r\n        renderDatePickerWhenClosed: DEFAULT_RENDER_DATEPICKER_WHEN_CLOSED,\r\n        isClearable: false,\r\n    };\r\n\r\n    private dropdown: HTMLDivElement;\r\n\r\n    componentDidMount() {\r\n        if (this.props.onRender) {\r\n            this.props.onRender();\r\n        }\r\n\r\n        if (this.props.onDocumentClick && !this.props.readonly) {\r\n            document.addEventListener('click', this.handleDocumentClick);\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onDocumentClick && !this.props.readonly) {\r\n            document.removeEventListener('click', this.handleDocumentClick);\r\n        }\r\n\r\n        if (this.props.onDestroy) {\r\n            this.props.onDestroy();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        let label: string = this.props.label;\r\n        let toLabel: JSX.Element = null;\r\n        let labelSecondPart: string = '';\r\n\r\n        if (this.props.datePicker && this.props.datePicker.appliedLowerLimit) {\r\n            label = this.formatDate(this.props.datePicker.appliedLowerLimit);\r\n            if (this.props.datePicker.isRange) {\r\n                const formattedUpper = this.formatDate(this.props.datePicker.appliedUpperLimit);\r\n                if (formattedUpper !== label) {\r\n                    toLabel = (\r\n                        <span\r\n                            className={classNames('mx1', this.props.readonly ? 'text-medium-grey' : 'text-dark-grey')}\r\n                        >\r\n                            {this.props.toLabel}\r\n                        </span>\r\n                    );\r\n                    labelSecondPart = formattedUpper;\r\n                }\r\n            }\r\n        }\r\n\r\n        const dropdownClasses: string = classNames(...this.props.extraDropdownClasses, 'dropdown-wrapper', 'dropdown', {\r\n            open: this.props.isOpened,\r\n        });\r\n\r\n        const menuClasses: string = classNames('dropdown-menu', 'normal-height', {\r\n            'on-right': this.props.onRight,\r\n        });\r\n\r\n        const toggleClasses = classNames(\r\n            'dropdown-toggle btn inline-flex flex-center',\r\n            this.props.extraDropdownToggleClasses,\r\n            {\r\n                'dropdown-toggle-placeholder': !this.props.datePicker || !this.props.datePicker.appliedLowerLimit,\r\n            }\r\n        );\r\n        return (\r\n            <div className={classNames('date-picker-dropdown', this.props.className)}>\r\n                <div className={dropdownClasses} ref={(dropdown: HTMLDivElement) => (this.dropdown = dropdown)}>\r\n                    <button className={toggleClasses} onClick={this.handleClick} disabled={this.props.readonly}>\r\n                        <span className=\"dropdown-selected-value\">\r\n                            <label>\r\n                                {label}\r\n                                {toLabel}\r\n                                {labelSecondPart}\r\n                            </label>\r\n                        </span>\r\n                        <span className=\"dropdown-toggle-arrow\"></span>\r\n                    </button>\r\n                    <div className={menuClasses}>{this.getDatePickerBox()}</div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private handleClick = () => {\r\n        if (this.props.onClick && !this.props.readonly) {\r\n            this.props.onClick(this.props.datePicker);\r\n        }\r\n    };\r\n\r\n    private handleDocumentClick = (e: MouseEvent) => {\r\n        const dropdown: Element | Text = ReactDOM.findDOMNode(this.dropdown);\r\n        if (!dropdown.contains(e.target as Node) && this.props.isOpened) {\r\n            this.props.onDocumentClick();\r\n            this.handleCancel();\r\n        }\r\n    };\r\n\r\n    private handleApply() {\r\n        if (this.props.onBeforeApply) {\r\n            this.props.onBeforeApply();\r\n        }\r\n\r\n        if (this.props.onApply) {\r\n            this.props.onApply();\r\n        }\r\n    }\r\n\r\n    private handleCancel() {\r\n        if (this.props.onCancel) {\r\n            const currentMonth: number =\r\n                this.props.datePicker && this.props.datePicker.appliedLowerLimit\r\n                    ? this.props.datePicker.appliedLowerLimit.getMonth()\r\n                    : DateUtils.currentMonth;\r\n            const years: string[] = this.props.years || DEFAULT_YEARS;\r\n            const currentYear: number =\r\n                this.props.datePicker && this.props.datePicker.appliedLowerLimit\r\n                    ? this.props.datePicker.appliedLowerLimit.getFullYear()\r\n                    : DateUtils.currentYear;\r\n            this.props.onCancel(currentMonth, years.indexOf(currentYear.toString()), this.props.isOpened);\r\n        }\r\n    }\r\n\r\n    private handleClear() {\r\n        if (this.props.onClear) {\r\n            this.props.onClear();\r\n        }\r\n    }\r\n\r\n    private formatDate(date: Date): string {\r\n        return this.props.datesSelectionBoxes.length && this.props.datesSelectionBoxes[0].withTime\r\n            ? DateUtils.getDateWithTimeString(date)\r\n            : DateUtils.getSimpleDate(date);\r\n    }\r\n\r\n    private hasExceededRangeLimit(): boolean {\r\n        if (this.props.datePicker && this.props.datePicker.rangeLimit) {\r\n            const {weeks, days, hours} = this.props.datePicker.rangeLimit;\r\n            const limitInMinutes: number =\r\n                (weeks ? weeks * 10080 : 0) + (days ? days * 1440 : 0) + (hours ? hours * 60 : 0);\r\n            const diffInMinutes: number = moment(this.props.datePicker.inputUpperLimit).diff(\r\n                moment(this.props.datePicker.inputLowerLimit),\r\n                'minutes'\r\n            );\r\n            return diffInMinutes > limitInMinutes;\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    private getDatePickerBox(): JSX.Element {\r\n        if (this.props.isOpened || this.props.renderDatePickerWhenClosed) {\r\n            const hasExceededRangeLimit = this.hasExceededRangeLimit();\r\n            const datePickerBoxProps: IDatePickerBoxProps = {\r\n                setToNowTooltip: this.props.setToNowTooltip,\r\n                datesSelectionBoxes: this.props.datesSelectionBoxes,\r\n                months: this.props.months,\r\n                startingMonth: this.props.startingMonth,\r\n                years: this.props.years,\r\n                startingYear: this.props.startingYear,\r\n                days: this.props.days,\r\n                startingDay: this.props.startingDay,\r\n                selectionRules: this.props.selectionRules,\r\n                lowerLimitPlaceholder: this.props.lowerLimitPlaceholder,\r\n                upperLimitPlaceholder: this.props.upperLimitPlaceholder,\r\n                isLinkedToDateRange: this.props.isLinkedToDateRange,\r\n                isClearable: this.props.isClearable,\r\n                initiallyUnselected: this.props.initiallyUnselected,\r\n                clearLabel: this.props.clearLabel,\r\n                simple: this.props.simple,\r\n                initialDateRange: this.props.initialDateRange,\r\n                onClear: () => this.handleClear(),\r\n                footer: (\r\n                    <ModalFooter classes={['mod-small']}>\r\n                        <Button\r\n                            enabled={!hasExceededRangeLimit}\r\n                            name={this.props.applyLabel}\r\n                            small={true}\r\n                            primary={true}\r\n                            tooltip={hasExceededRangeLimit ? this.props.datePicker.rangeLimit.message : ''}\r\n                            tooltipPlacement={'left'}\r\n                            onClick={() => this.handleApply()}\r\n                        />\r\n                        <Button\r\n                            enabled={true}\r\n                            name={this.props.cancelLabel}\r\n                            small={true}\r\n                            primary={true}\r\n                            onClick={() => this.handleCancel()}\r\n                        />\r\n                    </ModalFooter>\r\n                ),\r\n            };\r\n\r\n            return this.props.withReduxState ? (\r\n                <DatePickerBox withReduxState id={this.props.id} {...datePickerBoxProps} />\r\n            ) : (\r\n                <DatePickerBox {...datePickerBoxProps} />\r\n            );\r\n        }\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=278.bundle.js.map