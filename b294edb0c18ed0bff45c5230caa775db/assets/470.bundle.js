(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{1558:function(t,r,o){"use strict";o.r(r),r.default="import * as React from 'react';\r\nimport {IReactVaporExampleState} from '../../../../docs/Reducers';\r\nimport {\r\n    convertItemsBoxToStringList,\r\n    convertStringListToItemsBox,\r\n} from '../../../reusableState/customList/StringListReducers';\r\nimport {IDispatch, ReduxConnect, ReduxUtils} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {Button} from '../../button/Button';\r\nimport {IItemBoxProps} from '../../itemBox/ItemBox';\r\nimport {ListBoxConnected} from '../ListBoxConnected';\r\nimport {addListBoxExample, removeListBoxExample, updateListBoxExample} from './ListBoxExampleActions';\r\n\r\ninterface IListBoxExamplesDispatchProps {\r\n    updateOptions: () => void;\r\n    addListBoxExample: () => void;\r\n    removeListBoxExample: () => void;\r\n}\r\n\r\ninterface IListBoxExamplesStateProps {\r\n    items?: IItemBoxProps[];\r\n}\r\n\r\ninterface IListBoxExamplesProps extends Partial<IListBoxExamplesDispatchProps>, Partial<IListBoxExamplesStateProps> {\r\n    id: string;\r\n    multi?: boolean;\r\n}\r\n\r\nconst mapStateToProps = (\r\n    state: IReactVaporExampleState,\r\n    ownProps: IListBoxExamplesProps\r\n): IListBoxExamplesStateProps => {\r\n    const listBoxExample = state.listBoxExampleState[ownProps.id];\r\n    if (listBoxExample) {\r\n        return {\r\n            items: convertStringListToItemsBox(listBoxExample.options),\r\n        };\r\n    }\r\n\r\n    return {};\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: IListBoxExamplesProps): IListBoxExamplesDispatchProps => ({\r\n    updateOptions: () => {\r\n        dispatch(\r\n            updateListBoxExample(ownProps.id, [\r\n                ...convertItemsBoxToStringList(ownProps.items),\r\n                `${TestUtils.randomValue1To100()}_new_value`,\r\n            ])\r\n        );\r\n    },\r\n    addListBoxExample: () => dispatch(addListBoxExample(ownProps.id, convertItemsBoxToStringList(ownProps.items))),\r\n    removeListBoxExample: () => dispatch(removeListBoxExample(ownProps.id)),\r\n});\r\n\r\n@ReduxConnect(mapStateToProps, mapDispatchToProps, ReduxUtils.defaultMergeProps)\r\nexport class ListBoxExampleConnected extends React.Component<IListBoxExamplesProps> {\r\n    componentWillMount() {\r\n        this.props.addListBoxExample();\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.removeListBoxExample();\r\n    }\r\n\r\n    private handleOnClick() {\r\n        this.props.updateOptions();\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div>\r\n                <ListBoxConnected id={this.props.id} items={this.props.items} multi={!!this.props.multi} />\r\n                <Button\r\n                    key={this.props.id + 'button'}\r\n                    classes={['my2']}\r\n                    enabled={true}\r\n                    name=\"Update options with a reset on selected values\"\r\n                    onClick={() => this.handleOnClick()}\r\n                />\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=470.bundle.js.map