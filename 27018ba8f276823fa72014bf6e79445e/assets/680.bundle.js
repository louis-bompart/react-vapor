(window.webpackJsonp=window.webpackJsonp||[]).push([[680],{1783:function(e,r,n){"use strict";n.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {createStructuredSelector} from 'reselect';\r\nimport * as _ from 'underscore';\r\n\r\nimport {keys} from 'ts-transformer-keys';\r\nimport {Defaults} from '../../Defaults';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IComponentBehaviour} from '../../utils/ComponentUtils';\r\nimport {mod} from '../../utils/DataStructuresUtils';\r\nimport {keyCode} from '../../utils/InputUtils';\r\nimport {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {Content} from '../content/Content';\r\nimport {DropPodPosition} from '../drop/DomPositionCalculator';\r\nimport {Drop} from '../drop/Drop';\r\nimport {IDropPodProps} from '../drop/DropPod';\r\nimport {IItemBoxProps} from '../itemBox/ItemBox';\r\nimport {IItemBoxPropsWithIndex, IListBoxOwnProps} from '../listBox/ListBox';\r\nimport {selectListBoxOption, setActiveListBoxOption} from '../listBox/ListBoxActions';\r\nimport {ListBoxConnected} from '../listBox/ListBoxConnected';\r\nimport {addSelect, removeSelect, toggleSelect} from './SelectActions';\r\nimport {SelectSelector} from './SelectSelector';\r\nimport * as styles from './styles/SingleSelect.scss';\r\n\r\nexport interface ISelectSpecificProps {\r\n    button: React.ReactNode;\r\n}\r\n\r\nexport interface ISelectOwnProps extends IListBoxOwnProps, IComponentBehaviour {\r\n    id: string;\r\n    placeholder?: string;\r\n    selectClasses?: string;\r\n    dropClasses?: string;\r\n    hasFocusableChild?: boolean;\r\n    disabled?: boolean;\r\n    onUpdate?: () => void;\r\n    dropOption?: Partial<IDropPodProps>;\r\n}\r\n\r\nconst listBoxProps = keys<IListBoxOwnProps>();\r\n\r\nexport interface ISelectStateProps {\r\n    isOpened: boolean;\r\n    active: number;\r\n    selectedValues: string[];\r\n}\r\n\r\nexport type ISelectDispatchProps = ReturnType<typeof mapDispatchToProps>;\r\n\r\nexport interface ISelectButtonProps {\r\n    onClick: (e: React.MouseEvent) => void;\r\n    onKeyUp: (e: React.KeyboardEvent<HTMLElement>) => void;\r\n    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;\r\n    placeholder?: string;\r\n}\r\n\r\nexport interface ISelectProps extends ISelectOwnProps, Partial<ISelectStateProps>, Partial<ISelectDispatchProps> {}\r\n\r\nconst makeMapStateToProps = () => {\r\n    const statePropsSelector = createStructuredSelector({\r\n        selectedValues: SelectSelector.getListBoxSelected,\r\n        isOpened: SelectSelector.getSelectOpened,\r\n        active: SelectSelector.getListBoxActive,\r\n    });\r\n\r\n    return (state: IReactVaporState, ownProps: ISelectOwnProps): ISelectStateProps =>\r\n        statePropsSelector(state, ownProps);\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: ISelectOwnProps & ISelectSpecificProps\r\n) => ({\r\n    onRender: () => dispatch(addSelect(ownProps.id)),\r\n    onDestroy: () => dispatch(removeSelect(ownProps.id)),\r\n    onToggleDropdown: () => dispatch(toggleSelect(ownProps.id)),\r\n    onSelectValue: (value: string, isMulti: boolean, index?: number) => {\r\n        dispatch(selectListBoxOption(ownProps.id, isMulti, value, index));\r\n    },\r\n    setActive: (diff: number) => dispatch(setActiveListBoxOption(ownProps.id, diff)),\r\n});\r\n\r\n@ReduxConnect(makeMapStateToProps, mapDispatchToProps)\r\nexport class SelectConnected extends React.PureComponent<ISelectProps & ISelectSpecificProps> {\r\n    static DropGroup = 'select';\r\n    private dropdown: HTMLDivElement;\r\n\r\n    componentDidMount() {\r\n        this.props.onRender();\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onDestroy();\r\n    }\r\n\r\n    componentDidUpdate(prevProps: ISelectProps) {\r\n        const wentFromOpenedToClosed = prevProps.isOpened && !this.props.isOpened;\r\n        const selectionChanged = prevProps.selectedValues.length <= this.props.selectedValues.length;\r\n\r\n        if ((this.props.isOpened && !this.props.hasFocusableChild) || (wentFromOpenedToClosed && selectionChanged)) {\r\n            this.focusOnButton();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        if (this.props.isLoading && !this.props.selectedValues) {\r\n            return (\r\n                <div\r\n                    className={classNames(\r\n                        'btn dropdown-toggle mod-rounded-border-2 bg-pure-white cursor-auto mod-no-border',\r\n                        styles.singleSelectFixedWidth\r\n                    )}\r\n                />\r\n            );\r\n        }\r\n\r\n        const pickerClasses = classNames('select-dropdown dropdown', this.props.selectClasses, {\r\n            open: this.props.isOpened,\r\n            'mod-multi': this.props.multi,\r\n        });\r\n        const minWidth = (this.dropdown && this.dropdown.clientWidth) || undefined;\r\n        return (\r\n            <Drop\r\n                id={this.props.id}\r\n                groupId={SelectConnected.DropGroup}\r\n                selector={Defaults.DROP_ROOT}\r\n                positions={[DropPodPosition.bottom, DropPodPosition.top]}\r\n                buttonContainerProps={{className: pickerClasses}}\r\n                renderOpenButton={(onClick: () => void) => (\r\n                    <div className=\"js-drop-button-container\" ref={(ref: HTMLDivElement) => (this.dropdown = ref)}>\r\n                        <Content\r\n                            content={this.props.button}\r\n                            classes={['select-dropdown-button']}\r\n                            componentProps={{\r\n                                onClick,\r\n                                onKeyUp: (e: React.KeyboardEvent<HTMLElement>) => this.onKeyUp(e),\r\n                                onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => this.onKeyDown(e),\r\n                                placeholder: this.props.placeholder,\r\n                            }}\r\n                            key={`${this.props.id}-button`}\r\n                        />\r\n                    </div>\r\n                )}\r\n                minWidth={minWidth}\r\n                closeOnClickDrop={false}\r\n                parentSelector={Defaults.DROP_PARENT_ROOT}\r\n                {...this.props.dropOption}\r\n            >\r\n                <div\r\n                    className={classNames('select-dropdown-container bg-pure-white', this.props.dropClasses)}\r\n                    style={{minWidth}}\r\n                >\r\n                    {this.renderChildren()}\r\n                    <ListBoxConnected {..._.pick(this.props, listBoxProps)} />\r\n                </div>\r\n            </Drop>\r\n        );\r\n    }\r\n\r\n    private renderChildren() {\r\n        if (this.props.children && this.props.isOpened) {\r\n            const newChildren = React.Children.map(this.props.children, (child: React.ReactElement<any>) => {\r\n                if (child) {\r\n                    return React.cloneElement(child, {\r\n                        onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => this.onKeyDown(e),\r\n                        onKeyUp: (e: React.KeyboardEvent<HTMLElement>) => this.onKeyUp(e),\r\n                    });\r\n                }\r\n            });\r\n            return <div className=\"flex p2 flex-center bg-white flex-column mod-border-bottom\">{newChildren}</div>;\r\n        }\r\n        return null;\r\n    }\r\n\r\n    private getButton(): HTMLElement {\r\n        return this.dropdown && this.dropdown.querySelector('.dropdown-toggle');\r\n    }\r\n\r\n    private focusOnButton() {\r\n        const button = this.getButton();\r\n        button && button.focus();\r\n    }\r\n\r\n    private onToggleDropdown(e: React.SyntheticEvent<HTMLElement>) {\r\n        e.stopPropagation();\r\n        e.preventDefault();\r\n\r\n        this.props.onToggleDropdown();\r\n        this.focusOnButton();\r\n    }\r\n\r\n    private onKeyDown(e: React.KeyboardEvent<HTMLElement>) {\r\n        if (\r\n            _.contains([keyCode.escape, keyCode.downArrow, keyCode.upArrow, keyCode.enter], e.keyCode) ||\r\n            (e.keyCode === keyCode.tab && this.props.isOpened)\r\n        ) {\r\n            e.stopPropagation();\r\n            e.preventDefault();\r\n        }\r\n    }\r\n\r\n    private onKeyUp(e: React.KeyboardEvent<HTMLElement>) {\r\n        if (keyCode.escape === e.keyCode && this.props.isOpened) {\r\n            this.onToggleDropdown(e);\r\n        }\r\n        let realIndex = 0;\r\n        if (_.contains([keyCode.enter, keyCode.tab], e.keyCode) && this.props.isOpened) {\r\n            const actives: IItemBoxPropsWithIndex[] = _.chain(this.props.items)\r\n                .filter(\r\n                    (item: IItemBoxProps) =>\r\n                        !item.hidden &&\r\n                        (!this.props.multi || !_.contains(this.props.selectedValues, item.value)) &&\r\n                        !item.disabled\r\n                )\r\n                .map((item: IItemBoxProps) => {\r\n                    return {...item, index: realIndex++};\r\n                })\r\n                .value();\r\n            const active = actives[mod(this.props.active, actives.length)];\r\n            if (active) {\r\n                this.props.onSelectValue(active.value, this.props.multi, active.index);\r\n            }\r\n        } else if (_.contains([keyCode.enter, keyCode.downArrow, keyCode.upArrow], e.keyCode) && !this.props.isOpened) {\r\n            this.onToggleDropdown(e);\r\n        } else if (keyCode.downArrow === e.keyCode) {\r\n            this.props.setActive(this.props.isOpened ? 1 : 0);\r\n        } else if (keyCode.upArrow === e.keyCode) {\r\n            this.props.setActive(this.props.isOpened ? -1 : 0);\r\n        }\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=680.bundle.js.map