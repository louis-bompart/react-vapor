(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{230:function(e,t,n){"use strict";n.r(t),t.default='import * as React from \'react\';\r\nimport {Button, FilterBoxConnected, Section, Svg} from \'react-vapor\';\r\n\r\nimport {ExampleComponent} from \'../ComponentsInterface\';\r\n\r\nexport const FilterBoxExamples: ExampleComponent = () => <FilterBoxes />;\r\nFilterBoxExamples.description = \'Will be used to filter content\';\r\n\r\n// start-print\r\n\r\nconst FilterBoxes: React.FunctionComponent = () => (\r\n    <Section title="FilterBox Examples">\r\n        <Section level={3} title="A filterBox with a custom placeholder.">\r\n            <FilterBoxConnected id="FirstFilterBox" filterPlaceholder="Custom Placeholder" />\r\n        </Section>\r\n        <Section level={3} title="A filterBox with a maximum width.">\r\n            <FilterBoxConnected id="SecondFilterBox" maxWidth={160} />\r\n        </Section>\r\n        <Section level={3} title="A filterBox with a child component">\r\n            <FilterBoxConnected\r\n                id="FilterBoxExampleComponentWithChildren"\r\n                className={\'flex flex-center\'}\r\n                filterPlaceholder="Filter"\r\n            >\r\n                <Button classes={[\'p1\', \'ml1\']} enabled onClick={() => alert(\'clicked !\')}>\r\n                    <Svg svgName={\'add\'} className="icon mod-lg mod-align-with-text" />\r\n                </Button>\r\n            </FilterBoxConnected>\r\n        </Section>\r\n    </Section>\r\n);\r\n'}}]);
//# sourceMappingURL=35.bundle.js.map