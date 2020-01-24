(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{1587:function(r,n,o){"use strict";o.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\n\r\nimport {keyCode} from '../../utils/InputUtils';\r\n\r\nexport interface IModalBackdropOwnProps {\r\n    displayFor?: string[];\r\n    isPrompt?: boolean;\r\n}\r\n\r\nexport interface IModalBackdropStateProps {\r\n    display?: boolean;\r\n    lastOpened?: boolean;\r\n}\r\n\r\nexport interface IModalBackdropDispatchProps {\r\n    onClick?: () => void;\r\n}\r\n\r\nexport interface IModalBackdropProps\r\n    extends IModalBackdropOwnProps,\r\n        IModalBackdropStateProps,\r\n        IModalBackdropDispatchProps {}\r\n\r\nconst ModalBackdropPropsToOmit = keys<IModalBackdropProps>();\r\n\r\nexport type IModalBackdropAllProps = IModalBackdropProps & React.HTMLAttributes<HTMLDivElement>;\r\n\r\n/**\r\n * @deprecated use ModalComposite instead\r\n */\r\nexport class ModalBackdrop extends React.Component<IModalBackdropAllProps> {\r\n    static defaultProps: Partial<IModalBackdropProps> = {\r\n        lastOpened: true,\r\n    };\r\n\r\n    private canClose: boolean;\r\n\r\n    componentDidMount() {\r\n        document.addEventListener('keydown', this.onKeyDown);\r\n        this.canClose = this.props.lastOpened;\r\n    }\r\n\r\n    // This is needed so that it does not turn to true before getting to the onKeydown function when becoming\r\n    // the last opened modal after the last one was closed on escape\r\n    componentDidUpdate() {\r\n        this.canClose = false;\r\n        _.defer(() => (this.canClose = this.props.lastOpened));\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        document.removeEventListener('keydown', this.onKeyDown);\r\n    }\r\n\r\n    handleClick() {\r\n        if (this.props.onClick) {\r\n            this.props.onClick();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const classes = classNames('modal-backdrop', {\r\n            closed: !this.props.display,\r\n            'prompt-backdrop': this.props.isPrompt,\r\n        });\r\n\r\n        return (\r\n            <div\r\n                {..._.omit(this.props, ModalBackdropPropsToOmit)}\r\n                className={classNames(this.props.className, classes)}\r\n                onClick={() => this.handleClick()}\r\n            >\r\n                <div className=\"mask\"></div>\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private onKeyDown = (e: KeyboardEvent) => {\r\n        if (this.canClose && !e.defaultPrevented && e.keyCode === keyCode.escape) {\r\n            e.stopPropagation();\r\n            e.preventDefault();\r\n            this.handleClick();\r\n        }\r\n    };\r\n}\r\n"}}]);
//# sourceMappingURL=499.bundle.js.map