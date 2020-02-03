(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1337:function(e,n,t){"use strict";t.r(n),n.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {ICheckboxState} from './CheckboxReducers';\r\nimport {IGroupableCheckboxActionPayload} from './GroupableCheckboxActions';\r\nimport {groupableCheckboxInitialState, IGroupableCheckboxesState} from './GroupableCheckboxReducers';\r\n\r\nexport const calculateTotalCheckboxesChecked = (checkboxes: ICheckboxState[]): number =>\r\n    _.where(checkboxes, {checked: true}).length;\r\n\r\nexport const addParentCheckbox = (\r\n    state: IGroupableCheckboxesState,\r\n    action: IReduxAction<IGroupableCheckboxActionPayload>\r\n): IGroupableCheckboxesState => {\r\n    const newState: IGroupableCheckboxesState = {\r\n        ...state,\r\n        parent: {\r\n            id: action.payload.id,\r\n            checked: !!action.payload.checked,\r\n            disabled: !!action.payload.disabled,\r\n        },\r\n    };\r\n\r\n    if (state === groupableCheckboxInitialState) {\r\n        newState.parentId = action.payload.id;\r\n    }\r\n\r\n    return newState;\r\n};\r\n\r\nexport const addChildCheckbox = (\r\n    state: IGroupableCheckboxesState,\r\n    action: IReduxAction<IGroupableCheckboxActionPayload>\r\n): IGroupableCheckboxesState => {\r\n    const newState: IGroupableCheckboxesState = {\r\n        ...state,\r\n        checkboxes: [\r\n            ...state.checkboxes,\r\n            {\r\n                id: action.payload.id,\r\n                checked: !!action.payload.checked,\r\n                disabled: !!action.payload.disabled,\r\n            },\r\n        ],\r\n        total: state.total + 1,\r\n        nbChecked: state.nbChecked + (action.payload.checked ? 1 : 0),\r\n    };\r\n\r\n    if (state === groupableCheckboxInitialState) {\r\n        newState.parentId = action.payload.parentId;\r\n    }\r\n\r\n    return newState;\r\n};\r\n\r\nexport const removeParentCheckbox = (\r\n    state: IGroupableCheckboxesState[],\r\n    action: IReduxAction<IGroupableCheckboxActionPayload>\r\n): IGroupableCheckboxesState[] => {\r\n    return _.reject(state, (checkboxState: IGroupableCheckboxesState) => action.payload.id === checkboxState.parentId);\r\n};\r\n\r\nexport const removeChildCheckbox = (\r\n    state: IGroupableCheckboxesState,\r\n    action: IReduxAction<IGroupableCheckboxActionPayload>\r\n) => {\r\n    const checkboxState: ICheckboxState = _.findWhere(state.checkboxes, {id: action.payload.id});\r\n    if (checkboxState) {\r\n        return {\r\n            checkboxes: _.reject(state.checkboxes, (checkbox: ICheckboxState) => checkbox.id === action.payload.id),\r\n            nbChecked: state.nbChecked + (checkboxState && checkboxState.checked ? -1 : 0),\r\n            total: state.total + (checkboxState ? -1 : 0),\r\n        };\r\n    }\r\n    return state;\r\n};\r\n\r\nexport const toggleChildCheckbox = (\r\n    state: IGroupableCheckboxesState,\r\n    action: IReduxAction<IGroupableCheckboxActionPayload>\r\n) => {\r\n    let isChecked: boolean;\r\n    const checkboxes: ICheckboxState[] = _.map(state.checkboxes, (checkbox: ICheckboxState) => {\r\n        if (checkbox.id === action.payload.id) {\r\n            isChecked = !checkbox.checked;\r\n            return {\r\n                ...checkbox,\r\n                id: checkbox.id,\r\n                checked: isChecked,\r\n            };\r\n        }\r\n        return checkbox;\r\n    });\r\n\r\n    const nbChecked: number = (state.nbChecked += isChecked ? 1 : -1);\r\n    return {\r\n        ...state,\r\n        parent: {\r\n            ...state.parent,\r\n            id: action.payload.parentId,\r\n            checked: nbChecked === state.total,\r\n        },\r\n        nbChecked,\r\n        checkboxes: [...checkboxes],\r\n    };\r\n};\r\n\r\nexport const toggleParentCheckbox = (\r\n    state: IGroupableCheckboxesState,\r\n    action: IReduxAction<IGroupableCheckboxActionPayload>\r\n) => {\r\n    const isChecked: boolean = !state.parent.checked;\r\n    const newCheckboxes: ICheckboxState[] = _.map(state.checkboxes, (checkbox: ICheckboxState) => {\r\n        return {\r\n            ...checkbox,\r\n            checked: checkbox.disabled ? checkbox.checked : isChecked,\r\n        };\r\n    });\r\n    return {\r\n        ...state,\r\n        parent: {\r\n            ...state.parent,\r\n            id: action.payload.id,\r\n            checked: isChecked,\r\n        },\r\n        checkboxes: newCheckboxes,\r\n        nbChecked: calculateTotalCheckboxesChecked(newCheckboxes),\r\n    };\r\n};\r\n\r\nexport const disabledParentCheckbox = (\r\n    state: IGroupableCheckboxesState,\r\n    action: IReduxAction<IGroupableCheckboxActionPayload>\r\n) => {\r\n    const isDisabled: boolean = !state.parent.disabled;\r\n    return {\r\n        ...state,\r\n        parent: {\r\n            ...state.parent,\r\n            id: action.payload.id,\r\n            disabled: isDisabled,\r\n        },\r\n    };\r\n};\r\n\r\nexport const disabledChildCheckbox = (\r\n    state: IGroupableCheckboxesState,\r\n    action: IReduxAction<IGroupableCheckboxActionPayload>\r\n) => {\r\n    const checkboxes: ICheckboxState[] = _.map(state.checkboxes, (checkbox: ICheckboxState) => {\r\n        if (checkbox.id === action.payload.id) {\r\n            return {\r\n                ...checkbox,\r\n                id: checkbox.id,\r\n                disabled: !checkbox.disabled,\r\n            };\r\n        }\r\n        return checkbox;\r\n    });\r\n    return {\r\n        ...state,\r\n        checkboxes: [...checkboxes],\r\n    };\r\n};\r\n\r\nexport const disabledAllCheckbox = (\r\n    state: IGroupableCheckboxesState,\r\n    action: IReduxAction<IGroupableCheckboxActionPayload>\r\n) => {\r\n    const disabled: boolean = action.payload.disabled || !state.parent.disabled;\r\n    return {\r\n        ...state,\r\n        parent: {\r\n            ...state.parent,\r\n            id: action.payload.id,\r\n            disabled: disabled,\r\n        },\r\n        checkboxes: _.map(state.checkboxes, (checkbox: ICheckboxState) => ({\r\n            ...checkbox,\r\n            disabled: disabled,\r\n        })),\r\n    };\r\n};\r\n"}}]);
//# sourceMappingURL=226.bundle.js.map