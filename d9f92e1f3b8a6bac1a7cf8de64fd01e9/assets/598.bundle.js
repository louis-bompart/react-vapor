(window.webpackJsonp=window.webpackJsonp||[]).push([[598],{1702:function(n,e,i){"use strict";i.r(e),e.default='import * as React from \'react\';\r\nimport {ExampleComponent} from \'../../../../docs/src/components/ComponentsInterface\';\r\nimport {Section} from \'../../section/Section\';\r\nimport {NumericInputConnected} from \'../NumericInputConnected\';\r\n\r\nexport const NumericInputExamples: ExampleComponent = () => (\r\n    <Section title="Numeric Inputs Examples">\r\n        <NumericInputs />\r\n    </Section>\r\n);\r\nNumericInputExamples.description =\r\n    \'Numeric inputs are used to require the input of a numeric value. They can be configured in discrete jumps, when precision is not mandatory (e.g., 0, 5, 10, etc.).\';\r\n\r\nconst NumericInputs: React.FunctionComponent = () => (\r\n    <Section level={2} title="Numeric input examples">\r\n        <Section level={3} title="A numeric input with an initial value">\r\n            <NumericInputConnected id="numeric-2" initialValue={5} />\r\n        </Section>\r\n        <Section\r\n            level={3}\r\n            title="A numeric with an initial value of 500, a step of 50, a minimum of 25 and a max of 950 with three digits. Its inital value is 500."\r\n        >\r\n            <NumericInputConnected\r\n                id="numeric-4"\r\n                initialValue={500}\r\n                step={50}\r\n                min={25}\r\n                max={950}\r\n                maxLength={3}\r\n                invalidMessage="The value must be between 25 and 999."\r\n            />\r\n        </Section>\r\n        <Section level={3}></Section>\r\n    </Section>\r\n);\r\n'}}]);
//# sourceMappingURL=598.bundle.js.map