(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{1640:function(n,t,r){"use strict";r.r(t),t.default='import * as React from \'react\';\r\n\r\nconst DEFAULT_TITLE = \'Add a new entry\';\r\n\r\nexport interface IAddInputActionProps {\r\n    title?: string;\r\n    onClick?: () => void;\r\n}\r\n\r\nexport class AddInputAction extends React.Component<IAddInputActionProps, any> {\r\n    private handleClick() {\r\n        if (this.props.onClick) {\r\n            this.props.onClick();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const title = this.props.title ? this.props.title : DEFAULT_TITLE;\r\n        return (\r\n            <div className="input-actions" onClick={() => this.handleClick()}>\r\n                <button className="js-add-value-button">\r\n                    <i className="add-action" title={title}></i>\r\n                </button>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=547.bundle.js.map