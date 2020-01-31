(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{1502:function(t,e,r){"use strict";r.r(e),e.default="import {createSelector} from 'reselect';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {flatSelectInitialState, IFlatSelectState} from './FlatSelectReducers';\r\n\r\nconst getInput = (state: IReactVaporState, ownProps: {id: string}): IFlatSelectState => {\r\n    return _.findWhere(state.flatSelect, {id: ownProps.id}) || flatSelectInitialState;\r\n};\r\n\r\nconst getSelectedOptionId = createSelector(\r\n    getInput,\r\n    (flatSelectState: IFlatSelectState): string => flatSelectState && flatSelectState.selectedOptionId\r\n);\r\n\r\nexport const FlatSelectSelectors = {\r\n    getInput,\r\n    getSelectedOptionId,\r\n};\r\n"}}]);
//# sourceMappingURL=396.bundle.js.map