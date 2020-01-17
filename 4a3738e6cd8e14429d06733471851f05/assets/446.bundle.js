(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{1538:function(n,e,t){"use strict";t.r(e),e.default="import * as classNames from 'classnames';\nimport * as React from 'react';\nimport {TooltipPlacement} from '../../utils/TooltipUtils';\nimport {Svg} from '../svg/Svg';\nimport {Tooltip} from '../tooltip/Tooltip';\nimport {InputDescription} from './InputDescription';\n\nexport interface ILabeledInputProps {\n    label?: React.ReactNode;\n    message?: React.ReactNode;\n    helpText?: React.ReactNode;\n    headerClassName?: string;\n    optionalInformation?: string;\n}\n\nexport const LabeledInput: React.FunctionComponent<ILabeledInputProps> = ({\n    children,\n    label,\n    message,\n    helpText: description,\n    headerClassName,\n    optionalInformation: information,\n}) => {\n    const header =\n        !!label || !!information ? (\n            <header className={classNames('label', 'text-light-blue', headerClassName)}>\n                {!!label ? <span>{label}</span> : null}\n                {!!information ? (\n                    <Tooltip title={information} placement={TooltipPlacement.Top} className=\"ml1\">\n                        <Svg svgName=\"info-14\" svgClass=\"icon fill-medium-grey\" />\n                    </Tooltip>\n                ) : null}\n            </header>\n        ) : null;\n\n    return (\n        <div className=\"labeled-input\">\n            {header}\n            {children}\n            {!!message && <InputDescription>{message}</InputDescription>}\n            {!!description && <InputDescription>{description}</InputDescription>}\n        </div>\n    );\n};\n"}}]);
//# sourceMappingURL=446.bundle.js.map