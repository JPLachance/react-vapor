(window.webpackJsonp=window.webpackJsonp||[]).push([[785],{1884:function(n,e,o){"use strict";o.r(e),e.default="import * as React from 'react';\nimport {TextLoadingPlaceholder} from '../loading/components/TextLoadingPlaceholder';\n\nexport const TableRowHeader = ({isLoading, children}: {isLoading?: boolean; children?: React.ReactNode}) => {\n    return isLoading ? (\n        <th>\n            <TextLoadingPlaceholder small />\n        </th>\n    ) : (\n        <th>{children}</th>\n    );\n};\n"}}]);
//# sourceMappingURL=785.bundle.js.map