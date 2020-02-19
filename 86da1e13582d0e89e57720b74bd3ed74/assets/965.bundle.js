(window.webpackJsonp=window.webpackJsonp||[]).push([[965],{2063:function(e,n,r){"use strict";r.r(n),n.default="import * as React from 'react';\r\nimport {isEmpty} from 'underscore';\r\n\r\nexport class EventUtils {\r\n    static isClickingInsideElementWithClassname = (e: React.MouseEvent<any>, classname: string): boolean => {\r\n        let currentTarget: HTMLElement = e && (e.target as HTMLElement);\r\n        let isClickingInside = false;\r\n\r\n        while (e && !isEmpty(classname) && currentTarget && currentTarget !== e.currentTarget && !isClickingInside) {\r\n            isClickingInside = currentTarget.classList.contains(classname);\r\n            currentTarget = currentTarget.parentElement;\r\n        }\r\n\r\n        return isClickingInside;\r\n    };\r\n}\r\n"}}]);
//# sourceMappingURL=965.bundle.js.map