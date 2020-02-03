(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{1466:function(r,e,o){"use strict";o.r(e),e.default="import * as CodeMirror from 'codemirror';\r\nimport {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as ReactCodeMirror from 'react-codemirror2';\r\nimport * as _ from 'underscore';\r\n\r\nimport {CodeEditor, CodeEditorState, ICodeEditorProps} from '../CodeEditor';\r\nimport {CodeMirrorModes} from '../EditorConstants';\r\n\r\ndescribe('CodeEditor', () => {\r\n    const basicProps: ICodeEditorProps = {\r\n        value: 'any string',\r\n        mode: CodeMirrorModes.Python,\r\n    };\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<CodeEditor {...basicProps} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('<CodeEditor />', () => {\r\n        let codeEditor: ReactWrapper<ICodeEditorProps, CodeEditorState>;\r\n        let codeEditorInstance: CodeEditor;\r\n\r\n        const mountWithProps = (props: Partial<ICodeEditorProps> = {}) => {\r\n            codeEditor = mount(<CodeEditor {..._.defaults(props, basicProps)} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n            codeEditorInstance = codeEditor.instance() as any;\r\n        };\r\n\r\n        beforeEach(() => {\r\n            mountWithProps();\r\n        });\r\n\r\n        it('should get the value as a prop', () => {\r\n            const valueProp: string = codeEditor.props().value;\r\n\r\n            expect(valueProp).toBe(basicProps.value);\r\n        });\r\n\r\n        it('should get the readonly state as a prop', () => {\r\n            let readOnlyProp: boolean = codeEditor.props().readOnly;\r\n\r\n            expect(readOnlyProp).toBeUndefined();\r\n\r\n            mountWithProps({readOnly: true});\r\n\r\n            readOnlyProp = codeEditor.props().readOnly;\r\n\r\n            expect(readOnlyProp).toBe(true);\r\n        });\r\n\r\n        it('should set readOnly to `nocursor` when receiving true from props, else keep props', () => {\r\n            mountWithProps({readOnly: true});\r\n            expect((codeEditorInstance as any).removeCursorWhenEditorIsReadOnly(codeEditor.props().readOnly)).toBe(\r\n                'nocursor'\r\n            );\r\n\r\n            codeEditor.setProps({readOnly: false});\r\n            expect((codeEditorInstance as any).removeCursorWhenEditorIsReadOnly(codeEditor.props().readOnly)).toBe(\r\n                codeEditor.props().readOnly\r\n            );\r\n        });\r\n\r\n        it('should get what to do on change state as a prop if set', () => {\r\n            let onChangeProp: (json: string) => void = codeEditor.props().onChange;\r\n\r\n            expect(onChangeProp).toBeUndefined();\r\n\r\n            mountWithProps({onChange: jasmine.createSpy('onChange')});\r\n\r\n            onChangeProp = codeEditor.props().onChange;\r\n\r\n            expect(onChangeProp).toBeDefined();\r\n        });\r\n\r\n        it('should display a <CodeMirror /> component', () => {\r\n            expect(codeEditor.find(ReactCodeMirror.Controlled).length).toBe(1);\r\n        });\r\n\r\n        it('should call onChange prop when its value prop changes', () => {\r\n            const onChangeSpy: jasmine.Spy = jasmine.createSpy('onChange');\r\n            const expectedValue: string = 'the expected value';\r\n\r\n            mountWithProps({onChange: onChangeSpy});\r\n            codeEditor.setProps({value: expectedValue});\r\n\r\n            expect(onChangeSpy).toHaveBeenCalledTimes(1);\r\n            expect(onChangeSpy).toHaveBeenCalledWith(expectedValue);\r\n        });\r\n\r\n        it('should not throw on change if the onChange prop is undefined', () => {\r\n            expect(() => (codeEditorInstance as any).handleChange('expectedValue')).not.toThrow();\r\n        });\r\n\r\n        it(`should clear codemirror's history if we set a new value`, () => {\r\n            const clearHistorySpy: jasmine.Spy = spyOn((codeEditorInstance as any).editor.getDoc(), 'clearHistory');\r\n\r\n            codeEditor.setProps({value: 'a new value'});\r\n\r\n            expect(clearHistorySpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should add any extra keywords for the autocompletion if there are some in the props', () => {\r\n            const currentKeywords: string[] = [...(CodeMirror as any).helpers.hintWords[basicProps.mode]];\r\n            const expectedNewKeywords = ['one', 'two'];\r\n\r\n            codeEditor.setProps(_.extend({}, basicProps, {extraKeywords: expectedNewKeywords}));\r\n            (codeEditorInstance as any).addExtraKeywords();\r\n\r\n            const newList: string[] = (CodeMirror as any).helpers.hintWords[basicProps.mode];\r\n            expect(newList).not.toEqual(currentKeywords);\r\n            expect(newList).toEqual(currentKeywords.concat(expectedNewKeywords));\r\n        });\r\n\r\n        it('should have a border by default', () => {\r\n            expect(codeEditor.find(ReactCodeMirror.Controlled).props().className).toBe('mod-border');\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=359.bundle.js.map