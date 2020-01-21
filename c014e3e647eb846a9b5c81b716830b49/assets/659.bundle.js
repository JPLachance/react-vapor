(window.webpackJsonp=window.webpackJsonp||[]).push([[659],{1750:function(n,e,t){"use strict";t.r(e),e.default="import * as classNames from 'classnames';\nimport * as React from 'react';\n\ntype SectionMods = 'mod-header-padding' | 'mod-form-top-bottom-padding' | 'material-card';\n\nexport interface ISectionProps {\n    title?: string;\n    description?: React.ReactNode;\n    className?: string;\n    mods?: SectionMods | SectionMods[];\n    level?: 1 | 2 | 3;\n}\n\nexport const Section: React.FunctionComponent<ISectionProps> = ({\n    children,\n    title,\n    description,\n    className,\n    mods,\n    level = 1,\n}) => {\n    const titleProps: React.HTMLProps<HTMLElement> = {\n        className: 'text-medium-blue mb1',\n        children: title,\n    };\n    const H = `h${level + 1}`;\n    return (\n        <fieldset className={classNames(className, mods, `level-${level} form-group mod-padding-children`)}>\n            {title && <H {...titleProps} />}\n            {description && <p className=\"description\">{description}</p>}\n            {children}\n        </fieldset>\n    );\n};\n"}}]);
//# sourceMappingURL=659.bundle.js.map