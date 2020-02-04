(window.webpackJsonp=window.webpackJsonp||[]).push([[640],{1745:function(n,e,t){"use strict";t.r(e),e.default='import * as React from \'react\';\n\nimport * as loremIpsum from \'lorem-ipsum\';\nimport {ExampleComponent} from \'../../../../docs/src/components/ComponentsInterface\';\nimport {Button} from \'../../button/Button\';\nimport {SplitLayout} from \'../../splitlayout/SplitLayout\';\nimport {PopoverConnected} from \'../PopoverConnected\';\n\nconst leftContent = (\n    <div>\n        <h2 className="h2">Popover Title Lorem</h2>\n        <p className="h3 pt2 pb2">I am popping under the button. {loremIpsum({count: 5, sentenceUpperBound: 15})}</p>\n    </div>\n);\nconst rightContent = (\n    <div\n        className="video"\n        style={{\n            position: \'relative\',\n            paddingBottom: \'56.25%\',\n            height: 0,\n        }}\n    >\n        <iframe\n            style={{\n                position: \'absolute\',\n                top: 0,\n                left: 0,\n                width: \'100%\',\n                height: \'100%\',\n            }}\n            src={\'https://www.youtube.com/embed/kmUTQMpi4BI\'}\n            frameBorder="0"\n        />\n    </div>\n);\n\nconst PopoverConnectedExamples = () => (\n    <div className="mb5">\n        <div className="mt2 mb3">\n            <PopoverConnected\n                id="popover-connected-example1"\n                attachment="top left"\n                targetAttachment="bottom left"\n                className="mod-width-70"\n            >\n                <div className="btn inline-block">Click to toggle the popover</div>\n                <div className="coveo-child pb5">\n                    <SplitLayout\n                        className="pb4"\n                        leftChildren={<div className="m2">{leftContent}</div>}\n                        rightChildren={<div className="m2">{rightContent}</div>}\n                    />\n                    <div\n                        className="modal-footer mod-small bg-pure-white"\n                        style={{\n                            position: \'absolute\',\n                            marginLeft: \'-20px\',\n                            width: \'100%\',\n                            bottom: 0,\n                        }}\n                    >\n                        <Button enabled={true} small={true} name="Action Lorem" />\n                    </div>\n                </div>\n            </PopoverConnected>\n        </div>\n        <div className="display-block w100 mb5">\n            <p className="h3 mb2">{loremIpsum({count: 5, sentenceUpperBound: 15})}</p>\n            <p className="h3 mb2">{loremIpsum({count: 5, sentenceUpperBound: 15})}</p>\n        </div>\n    </div>\n);\n\nexport const PopoverExample: ExampleComponent = PopoverConnectedExamples;\nPopoverConnectedExamples.description =\n    \'Popovers provide additional details or interactions. They are visually attached to interactive elements and support various contents and layouts.\';\n'}}]);
//# sourceMappingURL=640.bundle.js.map