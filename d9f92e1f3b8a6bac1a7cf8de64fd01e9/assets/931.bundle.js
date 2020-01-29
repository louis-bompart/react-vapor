(window.webpackJsonp=window.webpackJsonp||[]).push([[931],{2027:function(n,o,r){"use strict";r.r(o),o.default="import * as React from 'react';\r\nimport {ModalComposite} from '../../components/modal/ModalComposite';\r\n\r\nexport interface PreventNavigationPromptProps {\r\n    id: string;\r\n    title: string;\r\n    content: React.ReactNode;\r\n    exit: string;\r\n    stay: string;\r\n    isOpen: boolean;\r\n    onClose: () => void;\r\n    onStay: () => void;\r\n}\r\n\r\nexport const PreventNavigationPrompt = ({\r\n    id,\r\n    title,\r\n    content,\r\n    exit,\r\n    stay,\r\n    isOpen,\r\n    onClose,\r\n    onStay,\r\n}: PreventNavigationPromptProps) => (\r\n    <ModalComposite\r\n        id={id}\r\n        isOpen={isOpen}\r\n        title={title}\r\n        classes={['mod-prompt', 'mod-fade-in-scale']}\r\n        modalHeaderClasses={['mod-confirmation']}\r\n        modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\r\n        modalBodyChildren={content}\r\n        onClose={() => onStay()}\r\n        modalFooterChildren={\r\n            <>\r\n                <button className=\"btn mod-small mod-primary js-exit\" onClick={() => onClose()}>\r\n                    {exit}\r\n                </button>\r\n                <button className=\"btn mod-small js-stay\" onClick={() => onStay()}>\r\n                    {stay}\r\n                </button>\r\n            </>\r\n        }\r\n    />\r\n);\r\n"}}]);
//# sourceMappingURL=931.bundle.js.map