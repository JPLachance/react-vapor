(window.webpackJsonp=window.webpackJsonp||[]).push([[868],{1956:function(e,t,r){"use strict";r.r(t),t.default="import * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {ITextAreaState} from './TextAreaReducers';\r\n\r\nconst getValue = (state: IReactVaporState, id: string): string => {\r\n    const textArea: ITextAreaState = _.findWhere(state.textAreas, {id});\r\n    return (textArea && textArea.value) || '';\r\n};\r\n\r\nexport const TextAreaSelectors = {\r\n    getValue,\r\n};\r\n"}}]);
//# sourceMappingURL=868.bundle.js.map