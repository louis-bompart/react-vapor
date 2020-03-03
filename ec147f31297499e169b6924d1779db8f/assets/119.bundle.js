(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1236:function(r,n,t){"use strict";t.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch} from '../../utils/ReduxUtils';\r\nimport {Content, IContentProps} from '../content/Content';\r\nimport {InlinePromptConnected} from '../inlinePrompt/InlinePrompt';\r\nimport {removePrompt} from '../inlinePrompt/InlinePromptActions';\r\nimport {IPromptState} from '../inlinePrompt/InlinePromptReducers';\r\nimport {ITooltipProps} from '../tooltip/Tooltip';\r\nimport {IActionOptions} from './Action';\r\nimport {addActionBar, removeActionBar} from './ActionBarActions';\r\nimport {IActionBarState} from './ActionBarReducers';\r\nimport {ItemFilter} from './filters/ItemFilter';\r\nimport {addItemFilter, filterItems, removeItemFilter} from './filters/ItemFilterActions';\r\nimport {IItemFilterState} from './filters/ItemFilterReducers';\r\nimport {PrimaryAction} from './PrimaryAction';\r\nimport {PrimaryActionConnected} from './PrimaryActionConnected';\r\nimport {SecondaryActions} from './SecondaryActions';\r\n\r\nexport interface IActionBarProps {\r\n    id?: string;\r\n    itemFilterLabel?: string;\r\n    itemTooltipProps?: ITooltipProps;\r\n    onClearItemFilter?: () => void;\r\n    extraContainerClasses?: string[];\r\n    removeDefaultContainerClasses?: boolean;\r\n    withSmallActions?: boolean;\r\n    prefixContent?: IContentProps;\r\n    width?: number;\r\n    moreLabel?: string;\r\n    itemFilterCropLength?: number;\r\n    disabled?: boolean;\r\n}\r\n\r\nexport class ActionBar extends React.PureComponent<\r\n    IActionBarProps & Partial<ReturnType<typeof mapStateToProps>> & Partial<ReturnType<typeof mapDispatchToProps>>\r\n> {\r\n    static defaultProps: Partial<IActionBarProps> = {\r\n        extraContainerClasses: [],\r\n        withSmallActions: false,\r\n    };\r\n\r\n    static defaultClasses = [\r\n        'coveo-table-actions-container',\r\n        'mod-cancel-header-padding',\r\n        'mod-border-bottom',\r\n        'mod-align-header',\r\n    ];\r\n\r\n    componentDidMount() {\r\n        this.props.onRender?.();\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onDestroy?.();\r\n    }\r\n\r\n    render() {\r\n        const containerClasses = classNames(this.defaultClasses, this.props.extraContainerClasses, {\r\n            'mod-deactivate-pointer': !!this.props.isLoading,\r\n            'small-actions-container': this.props.withSmallActions,\r\n        });\r\n\r\n        const prefixContentElement = this.props.prefixContent ? <Content {...this.props.prefixContent} /> : null;\r\n\r\n        return (\r\n            <div className={containerClasses} style={this.props.width ? {width: this.props.width} : null}>\r\n                {prefixContentElement}\r\n                <this.Filter />\r\n                <this.Actions />\r\n                {this.props.children}\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private get defaultClasses(): string {\r\n        return classNames(this.props.removeDefaultContainerClasses ? '' : ActionBar.defaultClasses);\r\n    }\r\n\r\n    private Actions: React.FunctionComponent = () => {\r\n        const primaryActions =\r\n            this.props.actions\r\n                ?.filter(({primary}) => !!primary)\r\n                .map((action: IActionOptions, index: number) => {\r\n                    const primaryAction = this.props.withReduxState ? (\r\n                        <PrimaryActionConnected\r\n                            action={{...action, enabled: action.enabled && !this.props.disabled}}\r\n                            parentId={this.props.id}\r\n                        />\r\n                    ) : (\r\n                        <PrimaryAction action={{...action, enabled: action.enabled && !this.props.disabled}} />\r\n                    );\r\n                    return (\r\n                        <div className=\"action primary-action\" key={`primary-${index}`}>\r\n                            {primaryAction}\r\n                        </div>\r\n                    );\r\n                }) ?? [];\r\n\r\n        const secondaryActions: IActionOptions[] =\r\n            this.props.actions\r\n                ?.filter(({primary}) => !primary)\r\n                .map((action: IActionOptions) => ({\r\n                    ...action,\r\n                    enabled: action.enabled && !this.props.disabled,\r\n                })) ?? [];\r\n\r\n        let secondaryActionsView: JSX.Element = null;\r\n        if (!_.isEmpty(secondaryActions)) {\r\n            secondaryActionsView = (\r\n                <SecondaryActions\r\n                    id={this.props.id}\r\n                    moreLabel={this.props.moreLabel}\r\n                    actions={secondaryActions}\r\n                    disabled={this.props.disabled}\r\n                />\r\n            );\r\n        }\r\n\r\n        const actions = this.props.prompt ? (\r\n            <this.Prompt />\r\n        ) : (\r\n            <>\r\n                {primaryActions}\r\n                {secondaryActionsView}\r\n            </>\r\n        );\r\n\r\n        return primaryActions.length || secondaryActionsView || this.props.prompt ? (\r\n            <div className=\"coveo-table-actions\">{actions}</div>\r\n        ) : null;\r\n    };\r\n\r\n    private Prompt: React.FunctionComponent = () =>\r\n        this.props.prompt?.options ? (\r\n            <div className=\"prompt\">\r\n                <InlinePromptConnected {...this.props.prompt} />\r\n            </div>\r\n        ) : null;\r\n\r\n    private Filter: React.FunctionComponent = () =>\r\n        this.props.itemFilter ? (\r\n            <ItemFilter\r\n                label={this.props.itemFilterLabel}\r\n                item={this.props.itemFilter}\r\n                itemTooltipProps={this.props.itemTooltipProps}\r\n                onClear={this.props.clearItemFilter}\r\n                crop={this.props.itemFilterCropLength}\r\n            />\r\n        ) : null;\r\n}\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IActionBarProps) => {\r\n    const actionBar: IActionBarState = _.findWhere(state.actionBars, {id: ownProps.id});\r\n    const prompt: IPromptState = _.find(state.prompts, ({id}) => id.indexOf(ownProps.id) >= 0);\r\n    const itemFilter: IItemFilterState = _.findWhere(state.itemFilters, {id: ownProps.id});\r\n\r\n    return {\r\n        withReduxState: true,\r\n        actions: actionBar?.actions.filter(({enabled, hideDisabled}) => enabled || hideDisabled === false) ?? [],\r\n        isLoading: actionBar?.isLoading ?? false,\r\n        prompt,\r\n        itemFilter: itemFilter?.item ?? '',\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch<IReactVaporState>, ownProps: IActionBarProps) => ({\r\n    onRender: () => {\r\n        dispatch(addActionBar(ownProps.id));\r\n        if (ownProps.itemFilterLabel) {\r\n            dispatch(addItemFilter(ownProps.id));\r\n        }\r\n    },\r\n    onDestroy: () => {\r\n        dispatch(removeActionBar(ownProps.id));\r\n        dispatch(removeItemFilter(ownProps.id));\r\n        dispatch(removePrompt(ownProps.id));\r\n    },\r\n    clearItemFilter: () => {\r\n        ownProps.onClearItemFilter?.();\r\n        dispatch(filterItems(ownProps.id, ''));\r\n    },\r\n});\r\n\r\nexport const ActionBarConnected = connect(mapStateToProps, mapDispatchToProps)(ActionBar);\r\n"}}]);
//# sourceMappingURL=119.bundle.js.map