(window.webpackJsonp=window.webpackJsonp||[]).push([[927],{2023:function(n,a,e){"use strict";e.r(a),a.default="import * as React from 'react';\nimport {connect} from 'react-redux';\nimport {IReactVaporState} from '../../../ReactVapor';\nimport {ValidationSelectors} from '../ValidationSelectors';\n\nexport interface IValidationMessageProps {\n    id: string;\n}\n\nconst mapStateToProps = (state: IReactVaporState, ownProps: IValidationMessageProps) => ({\n    errors: ValidationSelectors.getErrors(ownProps.id)(state),\n    warnings: ValidationSelectors.getWarnings(ownProps.id)(state),\n});\n\nexport const ValidationMessageClasses = {\n    error: 'text-red',\n    warning: 'text-yellow',\n};\n\nexport const ValidationMessageDisconnect: React.FunctionComponent<IValidationMessageProps &\n    ReturnType<typeof mapStateToProps>> = ({errors, warnings}) => {\n    return (\n        <>\n            {errors.length > 0\n                ? errors.map(({subId, value}) => (\n                      <span key={subId} className={ValidationMessageClasses.error}>\n                          {value}\n                      </span>\n                  ))\n                : warnings\n                ? warnings.map(({subId, value}) => (\n                      <span key={subId} className={ValidationMessageClasses.warning}>\n                          {value}\n                      </span>\n                  ))\n                : null}\n        </>\n    );\n};\n\nexport const ValidationMessage = connect(mapStateToProps)(ValidationMessageDisconnect);\n"}}]);
//# sourceMappingURL=927.bundle.js.map