(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1226:function(n,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\nimport {IActionOptions} from '../Action';\r\nimport {ActionBar} from '../ActionBar';\r\nimport {ACTION_SEPARATOR} from '../ActionConstants';\r\n\r\nexport class ActionBarExamples extends React.Component<any, any> {\r\n    render() {\r\n        const actions: IActionOptions[] = [\r\n            {\r\n                name: 'Link to Coveo',\r\n                link: 'http://coveo.com',\r\n                target: '_blank',\r\n                icon: 'exit',\r\n                primary: true,\r\n                enabled: true,\r\n            },\r\n            {\r\n                name: 'action1',\r\n                trigger: () => alert('Action 1 was triggered'),\r\n                enabled: true,\r\n            },\r\n            ACTION_SEPARATOR,\r\n            {\r\n                name: 'action2',\r\n                trigger: () => alert('Action 2 was triggered'),\r\n                enabled: true,\r\n            },\r\n            {\r\n                name: 'Link to Coveo (disabled)',\r\n                link: 'http://coveo.com',\r\n                target: '_blank',\r\n                icon: 'exit',\r\n                primary: true,\r\n                enabled: false,\r\n                hideDisabled: false,\r\n                tooltip: \"You cannot access Coveo's website at the moment.\",\r\n                tooltipPlacement: 'bottom',\r\n            },\r\n            {\r\n                name: 'visibly disabled',\r\n                trigger: () => alert('I will never be triggered'),\r\n                target: '_blank',\r\n                icon: 'open',\r\n                primary: true,\r\n                enabled: false,\r\n                hideDisabled: false,\r\n                tooltip: 'You cannot trigger me.',\r\n                tooltipPlacement: 'bottom',\r\n            },\r\n        ];\r\n\r\n        return (\r\n            <div className=\"mt2\">\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Action bar without actions</label>\r\n                    <ActionBar />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Action bar with actions</label>\r\n                    <ActionBar actions={actions} />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        Action bar with default classes turned off and extra classes\r\n                    </label>\r\n                    <ActionBar\r\n                        actions={actions}\r\n                        removeDefaultContainerClasses\r\n                        extraContainerClasses={['coveo-table-actions-container', 'p2']}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Action bar with small actions</label>\r\n                    <ActionBar actions={actions} withSmallActions />\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=128.bundle.js.map