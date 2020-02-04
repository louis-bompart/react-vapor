(window.webpackJsonp=window.webpackJsonp||[]).push([[924],{2022:function(t,r,n){"use strict";n.r(r),r.default="import * as React from 'react';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {WithDirtyActions} from './withDirtyActions';\r\nimport {WithDirtySelectors} from './withDirtySelectors';\r\n\r\nexport interface IWithDirty {\r\n    id: string;\r\n    showDirty: (isDirty: boolean) => React.ReactNode;\r\n    isDirty?: boolean;\r\n}\r\n\r\nexport interface IWithDirtyStateProps {\r\n    isDirty: boolean;\r\n}\r\n\r\nexport interface IWithDirtyDispatchProps {\r\n    toggleIsDirty: (isDirty: boolean) => void;\r\n}\r\n\r\nexport interface IWithDirtyProps extends Partial<IWithDirtyStateProps>, Partial<IWithDirtyDispatchProps> {}\r\n\r\nexport const withDirty = <T, R = any>(config: IWithDirty) => (\r\n    Component: React.ComponentType<IWithDirtyProps & T>\r\n): React.ComponentClass<IWithDirtyProps & T, R> => {\r\n    const mapStateToProps = (state: IReactVaporState): IWithDirtyStateProps => ({\r\n        isDirty: WithDirtySelectors.getIsDirty(state, {id: config.id}),\r\n    });\r\n\r\n    const mapDispatchToProps = (dispatch: IDispatch): IWithDirtyDispatchProps => ({\r\n        toggleIsDirty: (isDirty: boolean) => dispatch(WithDirtyActions.toggle(config.id, isDirty)),\r\n    });\r\n\r\n    @ReduxConnect(mapStateToProps, mapDispatchToProps)\r\n    class ComponentWithDirty extends React.PureComponent<Partial<IWithDirtyProps> & T, R> {\r\n        componentDidMount() {\r\n            this.props.toggleIsDirty(config.isDirty);\r\n        }\r\n\r\n        componentWillUnmount() {\r\n            this.props.toggleIsDirty(false);\r\n        }\r\n\r\n        render() {\r\n            return (\r\n                <>\r\n                    <Component {...this.props}>{this.props.children}</Component>\r\n                    {config.showDirty(this.props.isDirty)}\r\n                </>\r\n            );\r\n        }\r\n    }\r\n\r\n    return ComponentWithDirty;\r\n};\r\n"}}]);
//# sourceMappingURL=924.bundle.js.map