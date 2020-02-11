(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{1404:function(n,r,o){"use strict";o.r(r),r.default="import * as React from 'react';\r\nimport {ExamplesStore} from '../../../../docs/Store';\r\nimport {UUID} from '../../../utils/UUID';\r\nimport {Button} from '../../button/Button';\r\nimport {ChildForm} from '../../childForm/ChildForm';\r\nimport {IItemBoxProps} from '../../itemBox/ItemBox';\r\nimport {ListBox} from '../../listBox/ListBox';\r\nimport {openModal} from '../../modal/ModalActions';\r\nimport {ModalCompositeConnected} from '../../modal/ModalCompositeConnected';\r\nimport {SingleSelectWithFilter} from '../../select/hoc/SelectComponents';\r\nimport {DropPodPosition} from '../DomPositionCalculator';\r\nimport {Drop} from '../Drop';\r\n\r\nconst modalId: string = 'ModalIDDrop';\r\nconst modalId2: string = 'ModalIDDrop2';\r\n\r\nexport class DropExamples extends React.PureComponent<any> {\r\n    openModal(id: string) {\r\n        ExamplesStore.dispatch(openModal(id));\r\n    }\r\n    render() {\r\n        const triggerAlertFunction = () => {\r\n            alert(`Alert function triggered`);\r\n        };\r\n\r\n        const defaultItems: IItemBoxProps[] = [\r\n            {value: 'Add Digimon'},\r\n            {value: 'Duplicate Meepo'},\r\n            {value: 'Disable Dragon Ball', onOptionClick: () => triggerAlertFunction()},\r\n            {value: 'Delete BitConnect'},\r\n        ];\r\n\r\n        const defaultItemsLongText: IItemBoxProps[] = [\r\n            {value: 'Add Digimon'},\r\n            {value: 'Duplicate Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo'},\r\n        ];\r\n\r\n        return (\r\n            <div className=\"mt2\">\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Default drop</label>\r\n                    <div className=\"form-control\">\r\n                        <Drop\r\n                            id={UUID.generate()}\r\n                            selector={'#App'}\r\n                            buttonContainerProps={{\r\n                                className: 'inline-block',\r\n                            }}\r\n                            renderOpenButton={(onClick: () => void) => (\r\n                                <Button name={'Text'} enabled={true} onClick={() => onClick()} />\r\n                            )}\r\n                        >\r\n                            <ListBox items={defaultItems} />\r\n                        </Drop>\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Drop with list position left</label>\r\n                    <div className=\"form-control\">\r\n                        <Drop\r\n                            id={UUID.generate()}\r\n                            selector={'#App'}\r\n                            positions={[DropPodPosition.left, DropPodPosition.right]}\r\n                            buttonContainerProps={{\r\n                                className: 'right inline-block',\r\n                            }}\r\n                            renderOpenButton={(onClick: () => void) => (\r\n                                <Button name={'Text'} enabled={true} onClick={() => onClick()} />\r\n                            )}\r\n                        >\r\n                            <ListBox items={defaultItems} />\r\n                        </Drop>\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Drop with list position bottom</label>\r\n                    <div className=\"form-control\">\r\n                        <Drop\r\n                            id={UUID.generate()}\r\n                            selector={'#App'}\r\n                            positions={[DropPodPosition.bottom, DropPodPosition.top]}\r\n                            renderOpenButton={(onClick: () => void) => (\r\n                                <Button name={'Text'} enabled={true} onClick={() => onClick()} />\r\n                            )}\r\n                        >\r\n                            <ListBox items={defaultItems} />\r\n                        </Drop>\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Drop with list position top</label>\r\n                    <div className=\"form-control\">\r\n                        <Drop\r\n                            id={UUID.generate()}\r\n                            selector={'#App'}\r\n                            positions={[DropPodPosition.top, DropPodPosition.bottom]}\r\n                            buttonContainerProps={{\r\n                                className: 'inline-block',\r\n                            }}\r\n                            renderOpenButton={(onClick: () => void) => (\r\n                                <Button name={'Text'} enabled={true} onClick={() => onClick()} />\r\n                            )}\r\n                        >\r\n                            <ListBox items={defaultItems} />\r\n                        </Drop>\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Drop: no position. no toolip</label>\r\n                    <div className=\"form-control\">\r\n                        <Drop\r\n                            id={UUID.generate()}\r\n                            selector={'#App'}\r\n                            positions={[]}\r\n                            buttonContainerProps={{\r\n                                className: 'right inline-block',\r\n                            }}\r\n                            renderOpenButton={(onClick: () => void) => (\r\n                                <Button name={'Text'} enabled={true} onClick={() => onClick()} />\r\n                            )}\r\n                        >\r\n                            <ListBox items={defaultItems} />\r\n                        </Drop>\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Drop with the same size than the button</label>\r\n                    <div className=\"form-control\">\r\n                        <Drop\r\n                            id={UUID.generate()}\r\n                            parentSelector={'body'}\r\n                            selector={'#App'}\r\n                            positions={[DropPodPosition.bottom]}\r\n                            buttonContainerProps={{\r\n                                className: 'inline-block',\r\n                            }}\r\n                            renderOpenButton={(onClick: () => void) => (\r\n                                <Button\r\n                                    name={'Text'}\r\n                                    enabled={true}\r\n                                    onClick={() => onClick()}\r\n                                    style={{width: '300px'}}\r\n                                />\r\n                            )}\r\n                            hasSameWidth\r\n                        >\r\n                            <ListBox items={defaultItems} />\r\n                        </Drop>\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Drop with an item with a long text</label>\r\n                    <div className=\"form-control flex center-align\">\r\n                        <Drop\r\n                            id={UUID.generate()}\r\n                            parentSelector={'body'}\r\n                            selector={'#App'}\r\n                            positions={[DropPodPosition.bottom]}\r\n                            buttonContainerProps={{\r\n                                className: 'inline-block',\r\n                            }}\r\n                            renderOpenButton={(onClick: () => void) => (\r\n                                <Button\r\n                                    name={'Text'}\r\n                                    enabled={true}\r\n                                    onClick={() => onClick()}\r\n                                    style={{width: '300px'}}\r\n                                />\r\n                            )}\r\n                        >\r\n                            <ListBox\r\n                                items={[\r\n                                    ...defaultItems,\r\n                                    {\r\n                                        value:\r\n                                            'this is a long storyyyyyyyyyyyyyyyyyyyy!!!!!!!!! and more ....... more ..... more ..... more .... more ..... more',\r\n                                    },\r\n                                ]}\r\n                            />\r\n                        </Drop>\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Drop inside a modal</label>\r\n                    <div className=\"form-control\">\r\n                        <button className=\"btn\" onClick={() => this.openModal(modalId)}>\r\n                            Open Modal\r\n                        </button>\r\n                        <ModalCompositeConnected\r\n                            id={modalId}\r\n                            title=\"Modal composite\"\r\n                            classes={['mod-fade-in-scale']}\r\n                            modalBodyChildren={\r\n                                <>\r\n                                    <Drop\r\n                                        id={UUID.generate()}\r\n                                        selector={'#App'}\r\n                                        positions={[\r\n                                            DropPodPosition.right,\r\n                                            DropPodPosition.left,\r\n                                            DropPodPosition.bottom,\r\n                                        ]}\r\n                                        buttonContainerProps={{\r\n                                            className: 'inline-block',\r\n                                        }}\r\n                                        renderOpenButton={(onClick: () => void) => (\r\n                                            <Button name={'Text'} enabled={true} onClick={() => onClick()} />\r\n                                        )}\r\n                                    >\r\n                                        <ListBox items={defaultItemsLongText} />\r\n                                    </Drop>\r\n                                    <div className=\"mt5 pt5\">\r\n                                        <SingleSelectWithFilter\r\n                                            id={UUID.generate()}\r\n                                            items={[\r\n                                                {displayValue: 'Test', value: '0'},\r\n                                                {displayValue: 'Test One', value: '1'},\r\n                                                {displayValue: 'Disabled', value: 'disabled', disabled: true},\r\n                                                {displayValue: 'Three', value: '3'},\r\n                                                {displayValue: 'Four', value: '4'},\r\n                                                {displayValue: 'Five', value: '5'},\r\n                                                {displayValue: 'Six', value: '6'},\r\n                                                {\r\n                                                    displayValue: 'Seven',\r\n                                                    value: '7',\r\n                                                    selectedDisplayValue: '007 Bond, James',\r\n                                                },\r\n                                            ]}\r\n                                        />\r\n                                    </div>\r\n                                </>\r\n                            }\r\n                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Drop inside a modal with a scroll</label>\r\n                    <div className=\"form-control\">\r\n                        <button className=\"btn\" onClick={() => this.openModal(modalId2)}>\r\n                            Open Modal\r\n                        </button>\r\n                        <ModalCompositeConnected\r\n                            id={modalId2}\r\n                            title=\"Modal composite\"\r\n                            classes={['mod-slide-in-bottom', 'mod-stick-bottom', 'mod-big']}\r\n                            modalBodyChildren={\r\n                                <>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">\r\n                                        <Drop\r\n                                            id={UUID.generate()}\r\n                                            selector={'#App'}\r\n                                            positions={[DropPodPosition.top]}\r\n                                            buttonContainerProps={{\r\n                                                className: 'inline-block relative',\r\n                                            }}\r\n                                            renderOpenButton={(onClick: () => void) => (\r\n                                                <Button name={'Text'} enabled={true} onClick={() => onClick()} />\r\n                                            )}\r\n                                        >\r\n                                            <ListBox items={defaultItemsLongText} />\r\n                                        </Drop>\r\n                                    </div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                    <div className=\"my5\">more...</div>\r\n                                </>\r\n                            }\r\n                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\r\n                            modalFooterChildren={\r\n                                <div className={'mt5'}>\r\n                                    <button className=\"btn\">Do nothing</button>\r\n                                </div>\r\n                            }\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <ChildForm>\r\n                    <Drop\r\n                        id={UUID.generate()}\r\n                        selector={'#App'}\r\n                        positions={[DropPodPosition.bottom]}\r\n                        buttonContainerProps={{\r\n                            className: 'inline-block relative',\r\n                        }}\r\n                        parentSelector={'body'}\r\n                        renderOpenButton={(onClick: () => void) => (\r\n                            <Button name={'Text'} enabled={true} onClick={() => onClick()} />\r\n                        )}\r\n                    >\r\n                        <ListBox items={defaultItemsLongText} />\r\n                    </Drop>\r\n                </ChildForm>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=309.bundle.js.map