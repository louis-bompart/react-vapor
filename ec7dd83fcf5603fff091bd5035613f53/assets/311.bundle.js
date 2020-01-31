(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{1417:function(r,n,e){"use strict";e.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as ReactDOM from 'react-dom';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {defaultDropPodPosition, DropPod, IDropPodProps} from './DropPod';\r\nimport {DefaultGroupIds, DropActions} from './redux/DropActions';\r\nimport {DropSelectors} from './redux/DropReducers';\r\n\r\nexport interface IDropOwnProps extends Partial<IDropPodProps> {\r\n    id: string;\r\n    groupId?: string;\r\n    renderOpenButton: (onClick: () => void) => React.ReactNode;\r\n    buttonContainerProps?: React.HTMLProps<HTMLDivElement>;\r\n    listContainerProps?: React.HTMLAttributes<HTMLDivElement>;\r\n    closeOnClickOutside?: boolean;\r\n    closeOnClickDrop?: boolean;\r\n}\r\n\r\nexport type IDropStateProps = ReturnType<typeof mapStateToProps>;\r\nexport type IDropDispatchProps = ReturnType<typeof mapDispatchToProps>;\r\n\r\nexport interface IDropProps extends IDropOwnProps, Partial<IDropStateProps>, Partial<IDropDispatchProps> {}\r\n\r\nconst mapStateToProps = (state: IReactVaporState, {id, groupId}: IDropOwnProps) => ({\r\n    isOpen: DropSelectors.isOpen(state, {id, groupId}),\r\n});\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, {id, groupId}: IDropOwnProps) => ({\r\n    toggle: (isOpen?: boolean) => dispatch(DropActions.toggle(id, groupId, isOpen)),\r\n});\r\n\r\n@ReduxConnect(mapStateToProps, mapDispatchToProps)\r\nexport class Drop extends React.PureComponent<IDropProps> {\r\n    private readonly button: React.RefObject<HTMLDivElement>;\r\n    private dropRef: React.RefObject<HTMLDivElement>;\r\n\r\n    static defaultProps: Partial<IDropProps>;\r\n\r\n    constructor(props: IDropProps) {\r\n        super(props);\r\n\r\n        this.button = React.createRef();\r\n        this.handleDocumentClick = this.handleDocumentClick.bind(this);\r\n        this.onClick = this.onClick.bind(this);\r\n    }\r\n\r\n    componentWillMount() {\r\n        if (this.props.isOpen) {\r\n            this.setEventOnClickOnDocument();\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.removeEventOnClickOnDocument();\r\n        if (this.props.isOpen) {\r\n            this.props.toggle(false);\r\n        }\r\n    }\r\n\r\n    componentDidUpdate(prevProps: Readonly<IDropProps>) {\r\n        if (!prevProps.isOpen && this.props.isOpen) {\r\n            this.setEventOnClickOnDocument();\r\n        } else if (prevProps.isOpen && !this.props.isOpen) {\r\n            this.removeEventOnClickOnDocument();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <>\r\n                <div ref={this.button} {...this.props.buttonContainerProps}>\r\n                    {this.props.renderOpenButton(this.onClick)}\r\n                </div>\r\n                {this.createPortalMenu()}\r\n            </>\r\n        );\r\n    }\r\n\r\n    private setEventOnClickOnDocument() {\r\n        document.addEventListener('click', this.handleDocumentClick);\r\n    }\r\n\r\n    private removeEventOnClickOnDocument() {\r\n        document.removeEventListener('click', this.handleDocumentClick);\r\n    }\r\n\r\n    private createPortalMenu() {\r\n        return (\r\n            <DropPod\r\n                ref={this.button}\r\n                isOpen={this.props.isOpen}\r\n                positions={this.props.positions || []}\r\n                selector={this.props.selector}\r\n                minHeight={this.props.minHeight}\r\n                minWidth={this.props.minWidth}\r\n                hasSameWidth={this.props.hasSameWidth}\r\n                parentSelector={this.props.parentSelector}\r\n                renderDrop={(style: React.CSSProperties, dropRef: React.RefObject<HTMLDivElement>): React.ReactNode => (\r\n                    // Use dropRef as a reference of the drop element because we need to calculate later if the click is inside or not the drop container\r\n                    <div\r\n                        style={style}\r\n                        ref={(this.dropRef = dropRef)}\r\n                        className={classNames('drop', this.props.listContainerProps.className)}\r\n                        {...this.props.listContainerProps}\r\n                        data-open={this.props.isOpen}\r\n                    >\r\n                        {this.props.children}\r\n                    </div>\r\n                )}\r\n            />\r\n        );\r\n    }\r\n\r\n    private onClick() {\r\n        this.props.toggle(true);\r\n    }\r\n\r\n    private onClickOutside() {\r\n        this.props.toggle(false);\r\n    }\r\n\r\n    private handleDocumentClick(e: MouseEvent) {\r\n        if (this.props.isOpen && document.body.contains(e.target as HTMLElement)) {\r\n            const button: Element | Text = ReactDOM.findDOMNode(this.button.current);\r\n\r\n            if (this.dropRef.current.contains(e.target as Node)) {\r\n                if (this.props.closeOnClickDrop) {\r\n                    this.onClickOutside();\r\n                }\r\n            } else if (!button.contains(e.target as Node) && this.props.closeOnClickOutside) {\r\n                this.onClickOutside();\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nDrop.defaultProps = {\r\n    groupId: DefaultGroupIds.default,\r\n    positions: defaultDropPodPosition,\r\n    closeOnClickDrop: true,\r\n    closeOnClickOutside: true,\r\n    listContainerProps: {},\r\n    minHeight: 0,\r\n    minWidth: 0,\r\n    hasSameWidth: false,\r\n};\r\n"}}]);
//# sourceMappingURL=311.bundle.js.map