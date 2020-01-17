(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{1630:function(n,a,r){"use strict";r.r(a),a.default="import * as VaporSVG from 'coveo-styleguide';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {UUID} from '../../../utils/UUID';\r\nimport {IButtonProps} from '../../button/Button';\r\nimport {InputConnected} from '../../input/InputConnected';\r\nimport {Svg} from '../../svg/Svg';\r\nimport {multilineBoxContainer} from '../hoc/MultilineBoxContainer';\r\nimport {multilineBoxWithDnD} from '../hoc/MultilineBoxWithDnD';\r\nimport {\r\n    defaultMultilineBoxRemoveButtonClasses,\r\n    multilineBoxWithRemoveButton,\r\n} from '../hoc/MultilineBoxWithRemoveButton';\r\nimport {IMultilineParentProps, IMultilineSingleBoxProps, MultilineBox} from '../MultilineBox';\r\nimport {IExampleData, IMultilineBoxExamplesProps, WrapperExample} from './MultilineBoxExampleUtils';\r\n\r\nconst containerNodeExample = (\r\n    child: React.ReactNode,\r\n    data: Array<IMultilineSingleBoxProps<IMultilineBoxExamplesProps>>,\r\n    index: number\r\n) => (\r\n    <div key={`${data[index].id}Container`} className={'mod-border p1 flex'}>\r\n        {child}\r\n    </div>\r\n);\r\n\r\nconst containerNodeMaxWidthExample = (\r\n    child: React.ReactNode,\r\n    data: Array<IMultilineSingleBoxProps<IMultilineBoxExamplesProps>>,\r\n    index: number\r\n) => (\r\n    <div key={`${data[index].id}Container`} className={'mod-border p1 flex'} style={{width: '500px', height: '70px'}}>\r\n        {child}\r\n    </div>\r\n);\r\n\r\nconst MultilineBoxWithDefaultContainer = _.compose(multilineBoxContainer())(MultilineBox);\r\n\r\nconst MultilineBoxWithContainer = _.compose(\r\n    multilineBoxContainer({\r\n        containerNode: containerNodeExample,\r\n    })\r\n)(MultilineBox);\r\n\r\nconst DefaultMultilineBoxWithRemoveButton = _.compose(multilineBoxWithRemoveButton())(MultilineBox);\r\n\r\nconst MultilineBoxWithRemoveButton = _.compose(\r\n    multilineBoxWithRemoveButton({\r\n        containerNode: (\r\n            child: React.ReactNode,\r\n            getRemoveButton: (props?: Partial<IButtonProps>) => React.ReactNode\r\n        ) => (\r\n            <>\r\n                {child}\r\n                {getRemoveButton({\r\n                    classes: [defaultMultilineBoxRemoveButtonClasses, 'flex-auto full-content-y'],\r\n                })}\r\n            </>\r\n        ),\r\n    }),\r\n    multilineBoxContainer({\r\n        containerNode: containerNodeMaxWidthExample,\r\n    })\r\n)(MultilineBox);\r\n\r\nconst MultilineBoxWithContainerAndTwoRemoveButton = _.compose(\r\n    multilineBoxWithRemoveButton({\r\n        containerNode: (\r\n            child: React.ReactNode,\r\n            getRemoveButton: (props?: Partial<IButtonProps>) => React.ReactNode\r\n        ) => (\r\n            <>\r\n                {child}\r\n                {getRemoveButton({\r\n                    classes: [defaultMultilineBoxRemoveButtonClasses, 'bg-light-grey full-content-y'],\r\n                })}\r\n            </>\r\n        ),\r\n    }),\r\n    multilineBoxContainer({\r\n        containerNode: (\r\n            child: React.ReactNode,\r\n            data: Array<IMultilineSingleBoxProps<IMultilineBoxExamplesProps>>,\r\n            index: number\r\n        ) => (\r\n            <div key={`${data[index].id}Container`} className={'p1 bg-light-grey'}>\r\n                {child}\r\n            </div>\r\n        ),\r\n    }),\r\n    multilineBoxWithRemoveButton(),\r\n    multilineBoxContainer({\r\n        containerNode: containerNodeExample,\r\n    })\r\n)(MultilineBox);\r\n\r\nconst MultilineBoxWithDragAndDrop = _.compose(multilineBoxWithDnD())(MultilineBox);\r\n\r\nconst ComplexMultilineBox = _.compose(\r\n    multilineBoxWithRemoveButton(),\r\n    multilineBoxWithDnD(),\r\n    multilineBoxContainer({\r\n        containerNode: containerNodeExample,\r\n    })\r\n)(MultilineBox);\r\n\r\nconst ComplexMultilineBox2 = _.compose(\r\n    multilineBoxWithDnD({\r\n        DnDContainerProps: {\r\n            draggableContainerProps: {\r\n                className: 'inline-flex center-align',\r\n            },\r\n        },\r\n    }),\r\n    multilineBoxWithRemoveButton(),\r\n    multilineBoxContainer({\r\n        containerNode: containerNodeExample,\r\n    })\r\n)(MultilineBox);\r\n\r\nconst ComplexMultilineBox3 = _.compose(\r\n    multilineBoxWithDnD({\r\n        DnDContainerProps: {\r\n            draggableContainerProps: {\r\n                className: 'inline-flex center-align',\r\n            },\r\n            icon: <Svg svgName={VaporSVG.svg.dragDrop.name} svgClass=\"icon fill-medium-grey mod-lg\" />,\r\n        },\r\n    }),\r\n    multilineBoxWithRemoveButton(),\r\n    multilineBoxContainer({\r\n        containerNode: containerNodeExample,\r\n    })\r\n)(MultilineBox);\r\n\r\nexport class MultilineBoxExamples extends React.PureComponent {\r\n    render() {\r\n        return (\r\n            <div className=\"my2\">\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Multiline box with initial data</label>\r\n                    <MultilineBox<IMultilineBoxExamplesProps>\r\n                        id={UUID.generate()}\r\n                        data={[\r\n                            {\r\n                                name: 'Poire',\r\n                                displayName: 'Pear',\r\n                            },\r\n                        ]}\r\n                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>\r\n                            _.map(data, (cData: IExampleData) => (\r\n                                <div key={cData.id}>\r\n                                    <InputConnected\r\n                                        id={`${cData.id}1`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.name}\r\n                                        validate={(value: string) => cData.props.name === value}\r\n                                        validateOnChange\r\n                                        onChange={(value: string) => {\r\n                                            if (value !== '' && cData.isLast) {\r\n                                                defaultProps.addNewBox();\r\n                                            }\r\n                                        }}\r\n                                    />\r\n                                    <InputConnected\r\n                                        id={`${cData.id}2`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.displayName}\r\n                                    />\r\n                                </div>\r\n                            ))\r\n                        }\r\n                        defaultProps={{\r\n                            name: '',\r\n                            displayName: '',\r\n                        }}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        Multiline box with initial data and a button to update data\r\n                    </label>\r\n                    <WrapperExample />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Multiline box with a default container</label>\r\n                    <MultilineBoxWithDefaultContainer<IMultilineBoxExamplesProps>\r\n                        id={UUID.generate()}\r\n                        data={[\r\n                            {\r\n                                name: 'Poire',\r\n                                displayName: 'Pear',\r\n                            },\r\n                        ]}\r\n                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>\r\n                            _.map(data, (cData: IExampleData) => (\r\n                                <div key={cData.id}>\r\n                                    <InputConnected\r\n                                        id={`${cData.id}1`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.name}\r\n                                        validate={(value: string) => cData.props.name === value}\r\n                                        validateOnChange\r\n                                        onChange={(value: string) => {\r\n                                            if (value !== '' && cData.isLast) {\r\n                                                defaultProps.addNewBox();\r\n                                            }\r\n                                        }}\r\n                                    />\r\n                                    <InputConnected\r\n                                        id={`${cData.id}2`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.displayName}\r\n                                    />\r\n                                </div>\r\n                            ))\r\n                        }\r\n                        defaultProps={{\r\n                            name: '',\r\n                            displayName: '',\r\n                        }}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Multiline box with default values</label>\r\n                    <MultilineBox<IMultilineBoxExamplesProps>\r\n                        id={UUID.generate()}\r\n                        data={[\r\n                            {\r\n                                name: 'Poire',\r\n                                displayName: 'Pear',\r\n                            },\r\n                        ]}\r\n                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>\r\n                            _.map(data, (cData: IExampleData) => (\r\n                                <div key={cData.id}>\r\n                                    <InputConnected\r\n                                        id={`${cData.id}1`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.name}\r\n                                        validate={(value: string) => cData.props.name === value}\r\n                                        validateOnChange\r\n                                        onChange={(value: string) => {\r\n                                            if (value !== '' && cData.isLast) {\r\n                                                defaultProps.addNewBox();\r\n                                            }\r\n                                        }}\r\n                                    />\r\n                                    <InputConnected\r\n                                        id={`${cData.id}2`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.displayName}\r\n                                    />\r\n                                </div>\r\n                            ))\r\n                        }\r\n                        defaultProps={{\r\n                            name: 'Patate',\r\n                            displayName: 'Pasdfsa',\r\n                        }}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Multiline box with a container</label>\r\n                    <MultilineBoxWithContainer<IMultilineBoxExamplesProps>\r\n                        id={UUID.generate()}\r\n                        data={[\r\n                            {\r\n                                name: 'Poire',\r\n                                displayName: 'Pear',\r\n                            },\r\n                        ]}\r\n                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>\r\n                            _.map(data, (cData: IExampleData) => (\r\n                                <React.Fragment key={cData.id}>\r\n                                    <InputConnected\r\n                                        id={`${cData.id}1`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.name}\r\n                                        validate={(value: string) => cData.props.name === value}\r\n                                        validateOnChange\r\n                                        onChange={(value: string) => {\r\n                                            if (value !== '' && cData.isLast) {\r\n                                                defaultProps.addNewBox();\r\n                                            }\r\n                                        }}\r\n                                    />\r\n                                    <InputConnected\r\n                                        id={`${cData.id}2`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.displayName}\r\n                                    />\r\n                                </React.Fragment>\r\n                            ))\r\n                        }\r\n                        defaultProps={{\r\n                            name: '',\r\n                            displayName: '',\r\n                        }}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Multiline box with a default hoc remove button</label>\r\n                    <DefaultMultilineBoxWithRemoveButton<IMultilineBoxExamplesProps>\r\n                        id={UUID.generate()}\r\n                        data={[\r\n                            {\r\n                                name: 'Poire',\r\n                                displayName: 'Pear',\r\n                            },\r\n                        ]}\r\n                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>\r\n                            _.map(data, (cData: IExampleData) => (\r\n                                <React.Fragment key={cData.id}>\r\n                                    <InputConnected\r\n                                        id={`${cData.id}1`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.name}\r\n                                        validate={(value: string) => cData.props.name === value}\r\n                                        validateOnChange\r\n                                        onChange={(value: string) => {\r\n                                            if (value !== '' && cData.isLast) {\r\n                                                defaultProps.addNewBox();\r\n                                            }\r\n                                        }}\r\n                                    />\r\n                                    <InputConnected\r\n                                        id={`${cData.id}2`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.displayName}\r\n                                    />\r\n                                </React.Fragment>\r\n                            ))\r\n                        }\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        Multiline box with a hoc remove button wrapped in a container to style the button position right\r\n                    </label>\r\n                    <MultilineBoxWithRemoveButton<IMultilineBoxExamplesProps>\r\n                        id={UUID.generate()}\r\n                        data={[\r\n                            {\r\n                                name: 'Poire',\r\n                                displayName: 'Pear',\r\n                            },\r\n                        ]}\r\n                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>\r\n                            _.map(data, (cData: IExampleData) => (\r\n                                <React.Fragment key={cData.id}>\r\n                                    <InputConnected\r\n                                        id={`${cData.id}1`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.name}\r\n                                        validate={(value: string) => cData.props.name === value}\r\n                                        validateOnChange\r\n                                        onChange={(value: string) => {\r\n                                            if (value !== '' && cData.isLast) {\r\n                                                defaultProps.addNewBox();\r\n                                            }\r\n                                        }}\r\n                                    />\r\n                                    <InputConnected\r\n                                        id={`${cData.id}2`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.displayName}\r\n                                    />\r\n                                </React.Fragment>\r\n                            ))\r\n                        }\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        Multiline box with 2 containers to wrap a remove button\r\n                    </label>\r\n                    <MultilineBoxWithContainerAndTwoRemoveButton<IMultilineBoxExamplesProps>\r\n                        id={UUID.generate()}\r\n                        data={[\r\n                            {\r\n                                name: 'Poire',\r\n                                displayName: 'Pear',\r\n                            },\r\n                        ]}\r\n                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>\r\n                            _.map(data, (cData: IExampleData) => (\r\n                                <React.Fragment key={cData.id}>\r\n                                    <InputConnected\r\n                                        id={`${cData.id}1`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.name}\r\n                                        validate={(value: string) => cData.props.name === value}\r\n                                        validateOnChange\r\n                                        onChange={(value: string) => {\r\n                                            if (value !== '' && cData.isLast) {\r\n                                                defaultProps.addNewBox();\r\n                                            }\r\n                                        }}\r\n                                    />\r\n                                    <InputConnected\r\n                                        id={`${cData.id}2`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.displayName}\r\n                                    />\r\n                                </React.Fragment>\r\n                            ))\r\n                        }\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Multiline box with drag and drop</label>\r\n                    <MultilineBoxWithDragAndDrop<IMultilineBoxExamplesProps>\r\n                        id={UUID.generate()}\r\n                        data={[\r\n                            {\r\n                                name: 'Poire',\r\n                                displayName: 'Pear',\r\n                            },\r\n                        ]}\r\n                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>\r\n                            _.map(data, (cData: IExampleData) => (\r\n                                <React.Fragment key={cData.id}>\r\n                                    <InputConnected\r\n                                        id={`${cData.id}1`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.name}\r\n                                        validate={(value: string) => cData.props.name === value}\r\n                                        validateOnChange\r\n                                        onChange={(value: string) => {\r\n                                            if (value !== '' && cData.isLast) {\r\n                                                defaultProps.addNewBox();\r\n                                            }\r\n                                        }}\r\n                                    />\r\n                                    <InputConnected\r\n                                        id={`${cData.id}2`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.displayName}\r\n                                    />\r\n                                </React.Fragment>\r\n                            ))\r\n                        }\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Complex multiline box hoc</label>\r\n                    <ComplexMultilineBox<IMultilineBoxExamplesProps>\r\n                        id={UUID.generate()}\r\n                        data={[\r\n                            {\r\n                                name: 'Poire',\r\n                                displayName: 'Pear',\r\n                            },\r\n                        ]}\r\n                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>\r\n                            _.map(data, (cData: IExampleData) => (\r\n                                <React.Fragment key={cData.id}>\r\n                                    <InputConnected\r\n                                        id={`${cData.id}1`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.name}\r\n                                        validate={(value: string) => cData.props.name === value}\r\n                                        validateOnChange\r\n                                        onChange={(value: string) => {\r\n                                            if (value !== '' && cData.isLast) {\r\n                                                defaultProps.addNewBox();\r\n                                            }\r\n                                        }}\r\n                                    />\r\n                                    <InputConnected\r\n                                        id={`${cData.id}2`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.displayName}\r\n                                    />\r\n                                </React.Fragment>\r\n                            ))\r\n                        }\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Complex multiline box hoc without icon when dragging</label>\r\n                    <ComplexMultilineBox2<IMultilineBoxExamplesProps>\r\n                        id={UUID.generate()}\r\n                        data={[\r\n                            {\r\n                                name: 'Poire',\r\n                                displayName: 'Pear',\r\n                            },\r\n                        ]}\r\n                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>\r\n                            _.map(data, (cData: IExampleData) => (\r\n                                <React.Fragment key={cData.id}>\r\n                                    <InputConnected\r\n                                        id={`${cData.id}1`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.name}\r\n                                        validate={(value: string) => {\r\n                                            if (value !== '') {\r\n                                                if (cData.isLast) {\r\n                                                    defaultProps.addNewBox();\r\n                                                }\r\n                                                return true;\r\n                                            }\r\n\r\n                                            return false;\r\n                                        }}\r\n                                        labelProps={{invalidMessage: 'Do not leave me empty'}}\r\n                                        validateOnChange\r\n                                    />\r\n                                    <InputConnected\r\n                                        id={`${cData.id}2`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.displayName}\r\n                                    />\r\n                                </React.Fragment>\r\n                            ))\r\n                        }\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        Complex multiline box hoc with a custom icon for the drag and drop\r\n                    </label>\r\n                    <ComplexMultilineBox3<IMultilineBoxExamplesProps>\r\n                        id={UUID.generate()}\r\n                        data={[\r\n                            {\r\n                                name: 'Poire',\r\n                                displayName: 'Pear',\r\n                            },\r\n                        ]}\r\n                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>\r\n                            _.map(data, (cData: IExampleData) => (\r\n                                <React.Fragment key={cData.id}>\r\n                                    <InputConnected\r\n                                        id={`${cData.id}1`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.name}\r\n                                        validate={(value: string) => {\r\n                                            if (value !== '') {\r\n                                                if (cData.isLast) {\r\n                                                    defaultProps.addNewBox();\r\n                                                }\r\n                                                return true;\r\n                                            }\r\n\r\n                                            return false;\r\n                                        }}\r\n                                        labelProps={{invalidMessage: 'Do not leave me empty'}}\r\n                                        validateOnChange\r\n                                    />\r\n                                    <InputConnected\r\n                                        id={`${cData.id}2`}\r\n                                        classes=\"mt0 inline-block mx1\"\r\n                                        defaultValue={cData.props.displayName}\r\n                                    />\r\n                                </React.Fragment>\r\n                            ))\r\n                        }\r\n                    />\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=537.bundle.js.map