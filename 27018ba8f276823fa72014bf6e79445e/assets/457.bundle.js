(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{1564:function(r,e,o){"use strict";o.r(e),e.default='import * as React from \'react\';\r\nimport {IContentProps} from \'../../content/Content\';\r\nimport {ISvgProps, Svg} from \'../../svg/Svg\';\r\nimport {ITooltipProps} from \'../../tooltip/Tooltip\';\r\nimport {ItemBox} from \'../ItemBox\';\r\n\r\nexport class ItemBoxExamples extends React.Component<any, any> {\r\n    render() {\r\n        const tooltip: ITooltipProps = {\r\n            title: \'title test for the item Box\',\r\n            placement: \'bottom\',\r\n            container: \'body\',\r\n        };\r\n\r\n        const svg: ISvgProps = {\r\n            svgName: \'domain-google\',\r\n            svgClass: \'icon\',\r\n        };\r\n        const getPrepend: IContentProps = {content: () => <Svg {...svg} />, classes: [\'mr1\']};\r\n        const getAppend: IContentProps = {content: () => <Svg {...svg} />, classes: [\'ml1\']};\r\n\r\n        const triggerAlertFunction = () => {\r\n            alert(\'Event onClick triggered\');\r\n        };\r\n\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Default Item Box</label>\r\n                    <div className="form-control">\r\n                        <ItemBox value="test" />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Item Box with an displayValue</label>\r\n                    <div className="form-control">\r\n                        <ItemBox value="test" displayValue="Display test" />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Item Box with a prepend text</label>\r\n                    <div className="form-control">\r\n                        <ItemBox value="test" prepend={{content: \'Prefix\', classes: [\'text-medium-grey\', \'mr1\']}} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Item Box with a prepend icon</label>\r\n                    <div className="form-control">\r\n                        <ItemBox value="test" prepend={getPrepend} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Item Box with a append icon</label>\r\n                    <div className="form-control">\r\n                        <ItemBox value="test" append={getAppend} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Item Box with a title</label>\r\n                    <div className="form-control">\r\n                        <ItemBox value="test" tooltip={tooltip} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Item Box with selected</label>\r\n                    <div className="form-control">\r\n                        <ItemBox value="test" selected={true} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Item Box with active</label>\r\n                    <div className="form-control">\r\n                        <ItemBox value="test" active={true} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Item Box disabled</label>\r\n                    <div className="form-control">\r\n                        <ItemBox value="test" disabled={true} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Item Box divider</label>\r\n                    <div className="form-control">\r\n                        <ItemBox value="test" divider={true} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Item Box with an onClick event</label>\r\n                    <div className="form-control">\r\n                        <ItemBox value="test" onOptionClick={triggerAlertFunction} />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=457.bundle.js.map