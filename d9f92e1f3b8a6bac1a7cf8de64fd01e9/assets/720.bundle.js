(window.webpackJsonp=window.webpackJsonp||[]).push([[720],{1819:function(n,e,a){"use strict";a.r(e),e.default="import 'rc-slider/assets/index.css';\n\nimport {Range, SliderProps} from 'rc-slider';\nimport * as React from 'react';\nimport {connect} from 'react-redux';\n\nimport {IDispatch} from '../../utils/ReduxUtils';\nimport {SliderActions} from './SliderActions';\nimport SliderHandle from './SliderHandle';\nimport {\n    convertInitialValuetoRangeValue,\n    getComputedRangeValue,\n    getCrossingPoint,\n    getValuesPositionOnRange,\n    handleIsAtCrossingPoint,\n    propsValidator,\n    valuesPositionOnRange,\n} from './SliderUtils';\n\nexport interface MiddleSliderOwnProps extends SliderProps {\n    id: string;\n    enabled?: boolean;\n    hasTooltip?: boolean;\n    initialValue?: number;\n    marks?: {[key: number]: string};\n    min?: number;\n    max: number;\n    step?: number;\n    tabIndex?: number[];\n    onChange?: (rangeOutputValue: number) => any;\n    customTooltip?: (value: any) => JSX.Element;\n}\n\nexport const mapDispatchToProps = (dispatch: IDispatch, ownProps: MiddleSliderOwnProps) => ({\n    setOutputValue: (value: number) => dispatch(SliderActions.setValue(ownProps.id, value)),\n});\n\nconst MiddleSliderDisconnected: React.FunctionComponent<MiddleSliderOwnProps &\n    ReturnType<typeof mapDispatchToProps>> = ({\n    id,\n    enabled = true,\n    customTooltip,\n    hasTooltip,\n    initialValue,\n    marks,\n    min = 0,\n    max,\n    setOutputValue,\n    step,\n    onChange,\n}) => {\n    const crossingPoint = getCrossingPoint(min, max);\n    const [highRange, setHighRange] = React.useState(crossingPoint);\n    const [lowRange, setLowRange] = React.useState(crossingPoint);\n\n    const rangeOutputValue = getComputedRangeValue(lowRange, highRange, min, max, crossingPoint);\n\n    React.useEffect(() => {\n        onChange?.(rangeOutputValue);\n    }, [onChange, rangeOutputValue]);\n\n    React.useEffect(() => {\n        propsValidator(min, max, initialValue);\n        if (initialValue) {\n            const initialRangeValue: number = convertInitialValuetoRangeValue(min, max, initialValue);\n            setHandlePosition([initialRangeValue, initialRangeValue]);\n        }\n    }, [min, max, initialValue]);\n\n    React.useEffect(() => {\n        setOutputValue(rangeOutputValue);\n    }, [setOutputValue, rangeOutputValue]);\n\n    const setHandlePosition = (value: number[]) => {\n        const valuesPosition = getValuesPositionOnRange(value, crossingPoint);\n        switch (valuesPosition) {\n            case valuesPositionOnRange.lower:\n                setValueInTheLowRange(value);\n                break;\n            case valuesPositionOnRange.higher:\n                setValueInTheHighRange(value);\n                break;\n            case valuesPositionOnRange.both:\n                lowRange === crossingPoint ? jumpValueFromHighToLowRange(value) : jumpValueFromLowToHighRange(value);\n                break;\n            default:\n                setLowRange(value[0]);\n                setHighRange(value[1]);\n        }\n    };\n\n    const jumpValueFromHighToLowRange = (value: number[]) => {\n        setHighRange(crossingPoint);\n        setLowRange(value[0]);\n    };\n\n    const jumpValueFromLowToHighRange = (value: number[]) => {\n        setLowRange(crossingPoint);\n        setHighRange(value[1]);\n    };\n\n    const setValueInTheLowRange = (value: number[]) => {\n        const correctLowRangeValue = value[1] < crossingPoint ? value[1] : value[0];\n        setLowRange(correctLowRangeValue);\n    };\n\n    const setValueInTheHighRange = (value: number[]) => {\n        const correctHighRangeValue = value[0] > crossingPoint ? value[0] : value[1];\n        setHighRange(correctHighRangeValue);\n    };\n\n    const renderHandle = (handleProps: any) => {\n        const customProps = {\n            hasTooltip: hasTooltip,\n            customTooltip: customTooltip,\n            rangeOutput: rangeOutputValue,\n        };\n        if (!handleIsAtCrossingPoint(lowRange, highRange, handleProps.index, crossingPoint)) {\n            return <SliderHandle key={handleProps.index} handleProps={handleProps} handleCustomProps={customProps} />;\n        }\n        return null;\n    };\n\n    return (\n        <Range\n            key={id}\n            value={[lowRange, highRange]}\n            onChange={setHandlePosition}\n            handle={renderHandle}\n            className=\"vapor-slider input-wrapper input-field\"\n            marks={marks}\n            step={step}\n            disabled={!enabled}\n        />\n    );\n};\n\nexport const MiddleSlider = connect(null, mapDispatchToProps)(MiddleSliderDisconnected);\n"}}]);
//# sourceMappingURL=720.bundle.js.map