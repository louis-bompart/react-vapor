(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{1353:function(e,n,t){"use strict";t.r(n),n.default="import 'chosen-js'; // Clean way to make Webpack import something that is not a module\r\nimport * as $ from 'jquery';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nexport interface IChosenSelectProps extends React.HTMLProps<ChosenSelect> {\r\n    allowSingleDeselect?: boolean; // @default: false\r\n    caseSensitiveSearch?: boolean; // @default: false\r\n    disableSearch?: boolean; // @default: false\r\n    disableSearchThreshold?: number; // @default: 0, a.k.a. always enabled\r\n    displayDisabledOptions?: boolean; // @default: true\r\n    displaySelectedOptions?: boolean; // @default: true\r\n    enableSplitWordSearch?: boolean; // @default: true\r\n    includeGroupLabelInSelected?: boolean; // @default: false\r\n    inheritSelectClasses?: boolean; // @default: false\r\n    maxSelectedOptions?: number; // @default: Infinity\r\n    maxShownResults?: number; // @default: Infinity\r\n    noResultsText?: string; // @default: \"No results match\"\r\n    onChosenChange?: (event: JQueryEventObject, args: Chosen.SelectedData) => void;\r\n    placeholderTextMultiple?: string; // @default: \"Select Some Options\"\r\n    placeholderTextSingle?: string; // @default: \"Select an Option\"\r\n    searchContains?: boolean; // @default: false\r\n    singleBackstrokeDelete?: boolean; // @default: true\r\n    width?: string; // @default: the width of the select chosen is replacing\r\n}\r\n\r\n/**\r\n * List of props that were passed to the <ChosenSelect> component but that should not be passed to the <select> element to avoid warnings.\r\n * @type {string[]}\r\n */\r\nconst chosenSelectPropsToOmit = [\r\n    'allowSingleDeselect',\r\n    'children',\r\n    'disableSearch',\r\n    'disableSearchThreshold',\r\n    'displayDisabledOptions',\r\n    'displaySelectedOptions',\r\n    'enableSplitWordSearch',\r\n    'inheritSelectClasses',\r\n    'maxSelectedOptions',\r\n    'noResultsText',\r\n    'onChosenChange',\r\n    'placeholderTextMultiple',\r\n    'placeholderTextSingle',\r\n    'searchContains',\r\n    'singleBackstrokeDelete',\r\n    'width',\r\n];\r\n\r\n/**\r\n * @deprecated use components from SelectComponents instead\r\n */\r\nexport class ChosenSelect extends React.Component<IChosenSelectProps, any> {\r\n    select: JQuery;\r\n\r\n    componentDidMount() {\r\n        this.select\r\n            .chosen({\r\n                allow_single_deselect: this.props.allowSingleDeselect,\r\n                case_sensitive_search: this.props.caseSensitiveSearch,\r\n                disable_search: this.props.disableSearch,\r\n                disable_search_threshold: this.props.disableSearchThreshold,\r\n                display_disabled_options: this.props.displayDisabledOptions,\r\n                display_selected_options: this.props.displaySelectedOptions,\r\n                enable_split_word_search: this.props.enableSplitWordSearch,\r\n                include_group_label_in_selected: this.props.includeGroupLabelInSelected,\r\n                inherit_select_classes: this.props.inheritSelectClasses,\r\n                max_selected_options: this.props.maxSelectedOptions,\r\n                max_shown_results: this.props.maxShownResults,\r\n                no_results_text: this.props.noResultsText,\r\n                placeholder_text_multiple: this.props.placeholderTextMultiple,\r\n                placeholder_text_single: this.props.placeholderTextSingle,\r\n                search_contains: this.props.searchContains,\r\n                single_backstroke_delete: this.props.singleBackstrokeDelete,\r\n                width: this.props.width,\r\n            })\r\n            .change(\r\n                (event: JQueryEventObject, args: Chosen.SelectedData) =>\r\n                    this.props.onChosenChange && this.props.onChosenChange(event, args)\r\n            );\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.select.off('change').chosen('destroy');\r\n    }\r\n\r\n    /**\r\n     * HACK: Since we cannot overrdide onChange method signature (provided by React.HTMLProps<HTMLSelectElement>), since onChange is\r\n     * required by React when a value has been specified (component becomes \"controlled\") and because chosen does not trigger the change\r\n     * event on the <select> and foces us to use jQuery, we added a onChosenChange prop and faked the onChange prop.\r\n     * @returns {JSX.Element | null}\r\n     */\r\n    render() {\r\n        // Omit ChosenSelect props to avoid warnings.\r\n        const selectProps = _.extend({}, _.omit(this.props, chosenSelectPropsToOmit));\r\n        return (\r\n            <select {...selectProps} ref={(select: HTMLSelectElement) => (this.select = $(select))} onChange={_.noop}>\r\n                {this.props.children}\r\n            </select>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=243.bundle.js.map