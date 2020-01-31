(window.webpackJsonp=window.webpackJsonp||[]).push([[722],{1821:function(n,o,e){"use strict";e.r(o),o.default="import {Handle} from 'rc-slider';\nimport Tooltip from 'rc-tooltip';\nimport * as React from 'react';\nimport * as _ from 'underscore';\n\nexport interface CustomHandleProps {\n    customTooltip: React.ReactNode;\n    hasTooltip: boolean;\n    rangeOutput: number;\n}\n\nexport interface HandleProps {\n    dragging: boolean;\n    vertical: boolean;\n    offset: number;\n    reverse: boolean;\n    value: number;\n}\n\nconst SliderHandle: React.FunctionComponent<{handleProps: HandleProps; handleCustomProps: CustomHandleProps}> = ({\n    handleProps,\n    handleCustomProps,\n}) => (\n    <Tooltip\n        prefixCls=\"rc-slider-tooltip\"\n        overlay={handleCustomProps.customTooltip ?? handleCustomProps.rangeOutput}\n        visible={handleCustomProps.hasTooltip ? handleProps.dragging : false}\n        placement=\"top\"\n    >\n        <Handle value={handleProps.value} {..._.omit(handleProps, ['dragging', 'index'])} />\n    </Tooltip>\n);\n\nexport default SliderHandle;\n"}}]);
//# sourceMappingURL=722.bundle.js.map