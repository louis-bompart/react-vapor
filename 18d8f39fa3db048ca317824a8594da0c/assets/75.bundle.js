(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{253:function(n,e,t){"use strict";t.r(e),e.default='import * as React from \'react\';\nimport {connect} from \'react-redux\';\nimport {\n    Button,\n    ButtonWithRefreshCallback,\n    IDispatch,\n    LabeledInput,\n    RefreshCallback,\n    RefreshCallBackActions,\n    Section,\n} from \'react-vapor\';\n\n// start-print\nconst mapDispatchToProps = (dispatch: IDispatch) => ({\n    start: (id: string) => dispatch(RefreshCallBackActions.start(id)),\n    stop: (id: string) => dispatch(RefreshCallBackActions.stop(id)),\n});\n\nconst RefreshExamplesDisconnected = (props: ReturnType<typeof mapDispatchToProps>) => (\n    <>\n        <Section level={2} title="Component to handle Refresh">\n            <LabeledInput label="Refresh counter">\n                <Button name="Start" className="btn mr2" onClick={() => props.start(\'refresh-1\')} />\n                <Button name="Stop" className="btn" onClick={() => props.stop(\'refresh-1\')} />\n                <div>\n                    <RefreshCallback id="refresh-1" callback={() => alert(\'refresh end\')} />\n                </div>\n            </LabeledInput>\n        </Section>\n        <Section level={2} title="Component with a button to call the refreshCallback">\n            <LabeledInput label="Refresh counter">\n                <Button name="Start" className="btn mr2" onClick={() => props.start(\'refresh-2\')} />\n                <Button name="Stop" className="btn" onClick={() => props.stop(\'refresh-2\')} />\n                <div>\n                    <ButtonWithRefreshCallback\n                        id="refresh-2"\n                        delay={20}\n                        callback={(start) => {\n                            alert(\'refresh end\');\n                            start();\n                        }}\n                        button={{\n                            name: \'Refresh\',\n                            enabled: true,\n                        }}\n                        buttonContainerProps={{\n                            className: \'mb2\',\n                        }}\n                    />\n                </div>\n            </LabeledInput>\n        </Section>\n    </>\n);\n\nexport const RefreshExamples = connect(undefined, mapDispatchToProps)(RefreshExamplesDisconnected);\n// stop-print\n'}}]);
//# sourceMappingURL=75.bundle.js.map