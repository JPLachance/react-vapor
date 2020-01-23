(window.webpackJsonp=window.webpackJsonp||[]).push([[610],{1697:function(e,n,r){"use strict";r.r(n),n.default="import * as escapeRegExp from 'escape-string-regexp';\r\nimport * as React from 'react';\r\n\r\nexport interface PartialStringMatchProps {\r\n    /**\r\n     * @deprecated use children instead\r\n     */\r\n    wholeString?: string;\r\n    partialMatch?: string;\r\n    caseInsensitive?: boolean;\r\n}\r\n\r\nexport class PartialStringMatch extends React.PureComponent<PartialStringMatchProps> {\r\n    static defaultProps: Partial<PartialStringMatchProps> = {\r\n        wholeString: '',\r\n        partialMatch: '',\r\n    };\r\n\r\n    render() {\r\n        const toRender = this.props.wholeString || this.props.children;\r\n        if (!this.props.partialMatch) {\r\n            return toRender;\r\n        }\r\n\r\n        return this.lookupChildren(toRender);\r\n    }\r\n\r\n    private lookupChildren(component: React.ReactNode): React.ReactNode[] {\r\n        const iterator = this.deepReplaceStrings(component);\r\n\r\n        const children: React.ReactNode[] = [];\r\n        let result: IteratorResult<React.ReactNode>;\r\n        do {\r\n            result = iterator.next();\r\n            children.push(result.value);\r\n        } while (!result.done);\r\n\r\n        return children;\r\n    }\r\n\r\n    private *deepReplaceStrings(component: React.ReactNode): IterableIterator<React.ReactNode> {\r\n        const element = component as JSX.Element;\r\n        if (!component) {\r\n            return;\r\n        } else if (component instanceof Array) {\r\n            for (let i = 0; i < component.length; i++) {\r\n                yield* this.deepReplaceStrings(component[i]);\r\n            }\r\n        } else if (typeof component === 'string') {\r\n            yield this.hightlightMatches(component);\r\n        } else if (element.props && element.props.children) {\r\n            // The node is a React.Component, we iterate over its children\r\n            // We iterate over its children\r\n            yield React.cloneElement(element, {\r\n                ...element.props,\r\n                children: this.lookupChildren(element.props.children),\r\n            });\r\n        } else if (typeof element.type === 'function') {\r\n            // The node is a React.FunctionComponent, we iterate over what's rendered by the function\r\n            yield this.lookupChildren(element.type(element.props));\r\n        } else {\r\n            yield component;\r\n        }\r\n    }\r\n\r\n    private hightlightMatches(str: string): React.ReactNode {\r\n        const flags = this.props.caseInsensitive ? 'ig' : 'g';\r\n        const matcher = escapeRegExp(this.props.partialMatch);\r\n        const regExp = new RegExp(`(${matcher})`, flags);\r\n\r\n        if (regExp.test(str)) {\r\n            const parts: React.ReactNode[] = str.split(regExp);\r\n            for (let i = 1; i < parts.length; i += 2) {\r\n                parts[i] = <Highlight key={`match-${i}`}>{parts[i]}</Highlight>;\r\n            }\r\n            return parts;\r\n        } else {\r\n            return str;\r\n        }\r\n    }\r\n}\r\n\r\nconst Highlight: React.FunctionComponent<{}> = ({children}) => <span className=\"bold\">{children}</span>;\r\n"}}]);
//# sourceMappingURL=610.bundle.js.map