(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1241:function(r,n,o){"use strict";o.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {closeDropdown} from '../dropdown/DropdownActions';\r\nimport {IUserChoice} from '../inlinePrompt/InlinePrompt';\r\nimport {addPrompt, removePrompt} from '../inlinePrompt/InlinePromptActions';\r\nimport {Action, IBasicActionProps, IConfirmData} from './Action';\r\n\r\nexport interface ITriggerActionOwnProps extends React.ClassAttributes<TriggerAction>, IBasicActionProps {\r\n    confirmLabel?: string;\r\n    parentId?: string;\r\n}\r\n\r\nexport interface ITriggerActionProps extends ITriggerActionOwnProps, Partial<ReturnType<typeof mapDispatchToProps>> {}\r\n\r\nexport const CONFIRM_LABEL: string = 'Are you sure?';\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: ITriggerActionOwnProps\r\n) => ({\r\n    onTriggerConfirm: (onClick: () => void, userChoice: IUserChoice, className: string) => {\r\n        dispatch(addPrompt(ownProps.parentId, {onClick, userChoice, isOpened: false, className}));\r\n    },\r\n    onConfirm: () => dispatch(removePrompt(ownProps.parentId)),\r\n    onCloseDropdown: () => dispatch(closeDropdown(ownProps.parentId)),\r\n});\r\n\r\nexport class TriggerAction extends React.Component<ITriggerActionProps, any> {\r\n    private onTriggerAction() {\r\n        const confirmData: IConfirmData = this.props.action.requiresConfirmation;\r\n        if (confirmData && this.props.onTriggerConfirm) {\r\n            const confirmLabel: string =\r\n                this.props.confirmLabel || this.props.action.requiresConfirmation.confirmLabel || CONFIRM_LABEL;\r\n            const icon: string = this.props.action.icon;\r\n            this.props.onTriggerConfirm(\r\n                () => {\r\n                    if (this.props.action.trigger) {\r\n                        this.props.action.trigger();\r\n                    }\r\n                    if (this.props.onConfirm) {\r\n                        this.props.onConfirm();\r\n                    }\r\n                },\r\n                {\r\n                    icon: icon,\r\n                    description: confirmLabel,\r\n                    cancel: confirmData.buttonLabels.cancel,\r\n                    choices: {\r\n                        confirm: confirmData.buttonLabels.confirm,\r\n                    },\r\n                },\r\n                confirmData.confirmType\r\n            );\r\n        } else {\r\n            if (this.props.action.trigger) {\r\n                this.props.action.trigger();\r\n                this.props.onCloseDropdown && this.props.onCloseDropdown();\r\n            }\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const actionClasses: string = classNames({\r\n            enabled: this.props.action.enabled,\r\n            'state-disabled': !this.props.action.enabled && (this.props.simple || !this.props.action.hideDisabled),\r\n            disabled: !this.props.action.enabled && !this.props.simple,\r\n        });\r\n\r\n        return (\r\n            <span\r\n                onClick={() => this.props.action.enabled && this.onTriggerAction()}\r\n                className={actionClasses}\r\n                title={this.props.action.name}\r\n            >\r\n                <Action action={this.props.action} simple={this.props.simple} />\r\n            </span>\r\n        );\r\n    }\r\n}\r\n\r\nexport const TriggerActionConnected = connect(undefined, mapDispatchToProps)(TriggerAction);\r\n"}}]);
//# sourceMappingURL=129.bundle.js.map