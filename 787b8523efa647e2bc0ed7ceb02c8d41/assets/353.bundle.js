(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{1447:function(r,o,n){"use strict";n.r(o),o.default="import 'codemirror/addon/dialog/dialog';\r\nimport 'codemirror/addon/dialog/dialog.css';\r\nimport 'codemirror/addon/hint/anyword-hint';\r\nimport 'codemirror/addon/hint/show-hint';\r\nimport 'codemirror/addon/hint/show-hint.css';\r\nimport 'codemirror/addon/search/jump-to-line';\r\nimport 'codemirror/addon/search/matchesonscrollbar';\r\nimport 'codemirror/addon/search/search';\r\nimport 'codemirror/mode/python/python';\r\n\r\nimport * as CodeMirror from 'codemirror';\r\nimport * as React from 'react';\r\nimport * as ReactCodeMirror from 'react-codemirror2';\r\nimport * as _ from 'underscore';\r\n\r\nimport {CodeMirrorGutters} from './EditorConstants';\r\n\r\nexport interface ICodeEditorProps {\r\n    value: string;\r\n    readOnly?: boolean;\r\n    onChange?: (code: string) => void;\r\n    onMount?: (codemirror: ReactCodeMirror.Controlled) => void;\r\n    errorMessage?: string;\r\n    mode: any; // string or object ex.: {name: \"javascript\", json: true}\r\n    extraKeywords?: string[];\r\n    className?: string;\r\n}\r\n\r\nexport interface CodeEditorState {\r\n    value: string;\r\n}\r\n\r\nexport class CodeEditor extends React.Component<ICodeEditorProps, CodeEditorState> {\r\n    static defaultProps: Partial<ICodeEditorProps> = {\r\n        className: 'mod-border',\r\n    };\r\n\r\n    static Options: CodeMirror.EditorConfiguration = {\r\n        lineNumbers: true,\r\n        foldGutter: true,\r\n        lint: true,\r\n        gutters: [CodeMirrorGutters.LineNumbers, CodeMirrorGutters.FoldGutter, CodeMirrorGutters.LintMarkers],\r\n        extraKeys: {\r\n            'Ctrl-Space': 'autocomplete',\r\n            'Alt-F': 'findPersistent',\r\n        },\r\n    };\r\n\r\n    private codemirror = React.createRef<ReactCodeMirror.Controlled>();\r\n    private editor: ReactCodeMirror.IInstance;\r\n\r\n    constructor(props: ICodeEditorProps, state: CodeEditorState) {\r\n        super(props, state);\r\n\r\n        this.state = {\r\n            value: props.value,\r\n        };\r\n    }\r\n\r\n    componentDidMount() {\r\n        this.props.onMount?.(this.codemirror.current);\r\n    }\r\n\r\n    componentDidUpdate(prevProps: ICodeEditorProps) {\r\n        if (prevProps.value !== this.props.value && this.editor) {\r\n            this.setState({value: this.props.value});\r\n            this.editor.getDoc().clearHistory();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <ReactCodeMirror.Controlled\r\n                ref={this.codemirror}\r\n                editorDidMount={(editor: ReactCodeMirror.IInstance) => {\r\n                    this.editor = editor;\r\n                    this.addExtraKeywords();\r\n                }}\r\n                onBeforeChange={(editor, data, value: string) => {\r\n                    this.setState({value});\r\n                }}\r\n                value={this.state.value}\r\n                onChange={(editor, data, value: string) => this.handleChange(value)}\r\n                options={_.extend({}, CodeEditor.Options, {\r\n                    readOnly: this.removeCursorWhenEditorIsReadOnly(),\r\n                    mode: this.props.mode,\r\n                })}\r\n                className={this.props.className}\r\n            />\r\n        );\r\n    }\r\n\r\n    private removeCursorWhenEditorIsReadOnly() {\r\n        return this.props.readOnly ? 'nocursor' : this.props.readOnly;\r\n    }\r\n\r\n    private handleChange(code: string) {\r\n        this.props.onChange?.(code);\r\n    }\r\n\r\n    private addExtraKeywords() {\r\n        if (this.props.extraKeywords) {\r\n            const mode: string = this.props.mode.name || this.props.mode;\r\n            (CodeMirror as any).helpers.hintWords[mode] = (CodeMirror as any).helpers.hintWords[mode].concat(\r\n                this.props.extraKeywords\r\n            );\r\n        }\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=353.bundle.js.map