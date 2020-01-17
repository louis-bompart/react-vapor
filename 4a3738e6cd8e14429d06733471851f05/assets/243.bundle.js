(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{1337:function(n,e,r){"use strict";r.r(e),e.default='import * as React from \'react\';\r\nimport * as _ from \'underscore\';\r\nimport {ChosenSelect} from \'../ChosenSelect\';\r\n\r\nexport class ChosenSelectExamples extends React.Component<any, any> {\r\n    static deprecated = true;\r\n\r\n    getNumberOfOptions(num: number) {\r\n        return _.times(num, (index: number) => {\r\n            const indexShow = index + 1;\r\n            return (\r\n                <option key={index} value={indexShow}>\r\n                    Option {indexShow}\r\n                </option>\r\n            );\r\n        });\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Default Chosen single select</label>\r\n                    <div className="form-control">\r\n                        <ChosenSelect\r\n                            placeholderTextSingle="Choose a country"\r\n                            value="France"\r\n                            width="400px"\r\n                            onChosenChange={(event: JQueryEventObject, args: Chosen.SelectedData) => {\r\n                                /* tslint:disable */ console.log(\'Changed: \', args); /* tslint:enable */\r\n                            }}\r\n                        >\r\n                            <option value="Canada">Canada</option>\r\n                            <option value="France">France</option>\r\n                            <option value="United States">United States</option>\r\n                        </ChosenSelect>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Chosen multi select</label>\r\n                    <div className="form-control">\r\n                        <ChosenSelect\r\n                            placeholderTextSingle="Choose a country"\r\n                            defaultValue={[\'Canada\']}\r\n                            multiple\r\n                            width="400px"\r\n                            onChosenChange={(event: JQueryEventObject, args: Chosen.SelectedData) => {\r\n                                /* tslint:disable */ console.log(\'Changed: \', args); /* tslint:enable */\r\n                            }}\r\n                        >\r\n                            <option value="Canada">Canada</option>\r\n                            <option value="France">France</option>\r\n                            <option value="United States">United States</option>\r\n                        </ChosenSelect>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Chosen single select with 2000 options</label>\r\n                    <div className="form-control">\r\n                        <ChosenSelect placeholderTextSingle="Choose a option" width="400px">\r\n                            {this.getNumberOfOptions(2000)}\r\n                        </ChosenSelect>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=243.bundle.js.map