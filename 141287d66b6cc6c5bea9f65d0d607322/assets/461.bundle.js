(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{1549:function(a,e,t){"use strict";t.r(e),e.default='import * as React from \'react\';\r\nimport {LastUpdated} from \'../LastUpdated\';\r\n\r\nexport class LastUpdatedExamples extends React.Component<any, any> {\r\n    render() {\r\n        return (\r\n            <div className="mt2" style={{width: 400}}>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Last update</label>\r\n                    <LastUpdated id="LastUpdatedExampleComponent" />\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Last update with custom time</label>\r\n                    <LastUpdated\r\n                        id="LastUpdatedExampleComponentWithTime"\r\n                        time={new Date(+new Date() - Math.floor(Math.random() * 10000000000))}\r\n                    />\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Last update with label changed</label>\r\n                    <LastUpdated id="LastUpdatedExampleComponentWithLabel" label="Dernière modification à" />\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=461.bundle.js.map