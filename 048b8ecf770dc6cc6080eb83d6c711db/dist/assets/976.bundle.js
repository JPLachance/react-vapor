(window.webpackJsonp=window.webpackJsonp||[]).push([[976],{2072:function(n,r,t){"use strict";t.r(r),r.default="const internalComponentPropsToOmit: string[] = ['children', 'dangerouslySetInnerHTML'];\r\n\r\n// We omit those props for the input native tag because those props are reserved for the Input component and\r\n// to stay compatible with the old interface\r\nconst inputTagPropsToOmit: string[] = [\r\n    ...internalComponentPropsToOmit,\r\n    'defaultValue',\r\n    'onClick',\r\n    'onChange',\r\n    'onBlur',\r\n    'value',\r\n    'valid',\r\n];\r\n\r\nexport const PropsToOmitUtils = {\r\n    internal: internalComponentPropsToOmit,\r\n    input: inputTagPropsToOmit,\r\n};\r\n"}}]);
//# sourceMappingURL=976.bundle.js.map