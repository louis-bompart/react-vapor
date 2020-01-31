(window.webpackJsonp=window.webpackJsonp||[]).push([[731],{1829:function(e,t,i){"use strict";i.r(t),t.default="import {IReduxAction} from '../../../utils/ReduxUtils';\nimport {ISetSliderValuePayload, SliderActionTypes} from '../SliderActions';\nimport {ISlidersState, SliderReducer} from '../SliderReducers';\n\ndescribe('SliderReducers', () => {\n    const wrongSliderAction: IReduxAction<ISetSliderValuePayload> = {\n        type: 'eat some 🍟 while sliding it',\n        payload: {\n            id: '🥔 slider',\n            value: 300,\n        },\n    };\n\n    let originalState: ISlidersState;\n    let sliderState: ISlidersState;\n\n    it('should return the default state if the action is not defined and the state is undefined', () => {\n        originalState = undefined;\n        sliderState = SliderReducer(originalState, wrongSliderAction);\n\n        expect(sliderState).toEqual(null);\n    });\n\n    it('should return the default state if the action is not defined and the state is undefined for one slider', () => {\n        originalState = undefined;\n        sliderState = SliderReducer(originalState, undefined);\n\n        expect(sliderState).toEqual(null);\n    });\n\n    it('should not modify the state if no good action type is passed', () => {\n        originalState = {\n            ['🍩 slider']: {id: '🍩 slider', value: 100},\n            ['🥔 slider']: {id: '🥔 slider', value: 200},\n        };\n\n        sliderState = SliderReducer(originalState, wrongSliderAction);\n\n        expect(sliderState).toEqual(originalState);\n    });\n\n    it('should change the value of the slider if the good action is dispatched', () => {\n        originalState = {\n            ['🍩 slider']: {id: '🍩 slider', value: 100},\n            ['🥔 slider']: {id: '🥔 slider', value: 200},\n        };\n        const expectedState = {\n            ['🍩 slider']: {id: '🍩 slider', value: 100},\n            ['🥔 slider']: {id: '🥔 slider', value: 300},\n        };\n        const goodSliderAction: IReduxAction<ISetSliderValuePayload> = {\n            type: SliderActionTypes.setValue,\n            payload: {\n                id: '🥔 slider',\n                value: 300,\n            },\n        };\n\n        sliderState = SliderReducer(originalState, goodSliderAction);\n        expect(sliderState).toEqual(expectedState);\n    });\n});\n"}}]);
//# sourceMappingURL=731.bundle.js.map