(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1294:function(n,l,t){"use strict";t.r(l),l.default='import * as React from \'react\';\nimport {Svg} from \'../../svg/Svg\';\nimport {Button} from \'../Button\';\n\nexport class ButtonExamples extends React.Component<any, any> {\n    static description = \'Buttons communicate actions, and, when clicked, initialize those actions.\';\n    render() {\n        return (\n            <div className="mt2">\n                <div className="form-group">\n                    <label className="form-control-label">Default Button</label>\n                    <div className="form-control">\n                        <Button enabled={true} />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Primary Button</label>\n                    <div className="form-control">\n                        <Button enabled={true} primary={true} name="Primary Button" />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Small Button</label>\n                    <div className="form-control">\n                        <Button enabled={true} small={true} name="Small Button" />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Link Button</label>\n                    <div className="form-control">\n                        <Button enabled={true} name="Link Button" link="http://perdu.com/" target="_blank" />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Button with a callback on click</label>\n                    <div className="form-control">\n                        <Button enabled={true} name="Button click me!" onClick={() => alert(\'Hello\')} />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Button with tooltip</label>\n                    <div className="form-control">\n                        <Button enabled={true} name="Button with tooltip" tooltip="Tooltip test" />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Button with tooltip and placement</label>\n                    <div className="form-control">\n                        <Button\n                            enabled={true}\n                            name="Button with tooltip top"\n                            tooltip="Tooltip test"\n                            tooltipPlacement="top"\n                        />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Button link with tooltip</label>\n                    <div className="form-control">\n                        <Button\n                            enabled={true}\n                            name="Button link with tooltip"\n                            link="http://perdu.com/"\n                            target="_blank"\n                            tooltip="Tooltip test"\n                        />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Button link with a callback on click</label>\n                    <div className="form-control">\n                        <Button\n                            enabled={true}\n                            name="Link Button click me!"\n                            link="http://perdu.com/"\n                            target="_blank"\n                            onClick={() => alert(\'Hello\')}\n                        />\n                    </div>\n                </div>\n\n                <div className="form-group">\n                    <label className="form-control-label">Disabled Button</label>\n                    <div className="form-control">\n                        <Button enabled={false} name="Disabled Button" />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Disabled Primary Button</label>\n                    <div className="form-control">\n                        <Button enabled={false} name="Disabled Button" primary />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Disabled Button with tooltip</label>\n                    <div className="form-control">\n                        <Button enabled={false} name="Disabled Button with tooltip" tooltip="Tooltip test" />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Disabled Button link</label>\n                    <div className="form-control">\n                        <Button enabled={false} name="Disabled Button link" link="http://perdu.com/" target="_blank" />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Disabled Button link with tooltip</label>\n                    <div className="form-control">\n                        <Button\n                            enabled={false}\n                            name="Disabled Button link with tooltip"\n                            tooltip="Tooltip test"\n                            link="http://perdu.com/"\n                            target="_blank"\n                        />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Disabled Button link with tooltip placement top</label>\n                    <div className="form-control">\n                        <Button\n                            enabled={false}\n                            name="Disabled Button link with tooltip top"\n                            tooltip="Tooltip test"\n                            tooltipPlacement="top"\n                            link="http://perdu.com/"\n                            target="_blank"\n                        />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Disabled Button link with onClick</label>\n                    <div className="form-control">\n                        <Button\n                            enabled={false}\n                            name="Disabled Button link with onClick"\n                            link="http://perdu.com/"\n                            target="_blank"\n                            onClick={() => alert(\'Hello\')}\n                        />\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Button with children Svg</label>\n                    <div className="form-control">\n                        <Button classes={[\'p1\', \'full-content-y\']} enabled>\n                            <Svg svgName={\'add\'} className="icon mod-2x" />\n                        </Button>\n                    </div>\n                </div>\n                <div className="form-group">\n                    <label className="form-control-label">Button with children name and Svg</label>\n                    <div className="form-control">\n                        <Button classes={[\'p1\', \'full-content-y\']} name={\'Button\'} enabled>\n                            <Svg svgName={\'add\'} className="ml1 icon mod-2x" />\n                        </Button>\n                    </div>\n                </div>\n\n                <div className="form-group mb5">\n                    <label className="form-control-label">Button with custom style</label>\n                    <div className="form-control">\n                        <Button\n                            enabled\n                            style={{\n                                background: \'linear-gradient(to right, blue, black)\',\n                                color: \'white\',\n                                border: \'none\',\n                                borderRadius: 5,\n                            }}\n                        >\n                            I Rock\n                        </Button>\n                    </div>\n                </div>\n            </div>\n        );\n    }\n}\n'}}]);
//# sourceMappingURL=184.bundle.js.map