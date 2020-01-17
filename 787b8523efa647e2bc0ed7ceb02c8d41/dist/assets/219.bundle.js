(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{1317:function(n,r,o){"use strict";o.r(r),r.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport interface IGroupableCheckboxActionPayload {\r\n    id: string;\r\n    checked?: boolean;\r\n    isGroupable?: boolean;\r\n    isParent?: boolean;\r\n    parentId?: string;\r\n    disabled?: boolean;\r\n    disabledAll?: boolean;\r\n}\r\n\r\nexport const GroupableCheckboxActions = {\r\n    toggleGroup: 'TOGGLE_GROUP_CHECKBOX',\r\n    addGroup: 'ADD_GROUP_CHECKBOX',\r\n    removeGroup: 'REMOVE_GROUP_CHECKBOX',\r\n    disabledGroup: 'DISABLED_GROUP_CHECKBOX',\r\n    disabledAllGroup: 'DISABLED_ALL_GROUP_CHECKBOX',\r\n};\r\n\r\nexport const toggleGroupedCheckbox = (\r\n    id: string,\r\n    parentId: string,\r\n    isParent: boolean = false\r\n): IReduxAction<IGroupableCheckboxActionPayload> => ({\r\n    type: GroupableCheckboxActions.toggleGroup,\r\n    payload: {\r\n        id,\r\n        parentId,\r\n        isParent,\r\n    },\r\n});\r\n\r\nexport const addGroupedCheckbox = (\r\n    id: string,\r\n    checked: boolean,\r\n    disabled: boolean,\r\n    parentId: string,\r\n    isParent: boolean = false\r\n): IReduxAction<IGroupableCheckboxActionPayload> => ({\r\n    type: GroupableCheckboxActions.addGroup,\r\n    payload: {\r\n        id,\r\n        checked,\r\n        disabled,\r\n        parentId,\r\n        isParent,\r\n    },\r\n});\r\n\r\nexport const removeGroupedCheckbox = (\r\n    id: string,\r\n    parentId: string,\r\n    isParent: boolean = false\r\n): IReduxAction<IGroupableCheckboxActionPayload> => ({\r\n    type: GroupableCheckboxActions.removeGroup,\r\n    payload: {\r\n        id,\r\n        parentId,\r\n        isParent,\r\n    },\r\n});\r\n\r\nexport const toggleDisabledGroupedCheckbox = (\r\n    id: string,\r\n    parentId: string,\r\n    isParent: boolean = false\r\n): IReduxAction<IGroupableCheckboxActionPayload> => ({\r\n    type: GroupableCheckboxActions.disabledGroup,\r\n    payload: {\r\n        id,\r\n        parentId,\r\n        isParent,\r\n    },\r\n});\r\n\r\nexport const toggleDisabledAllGroupedCheckbox = (\r\n    id: string,\r\n    parentId?: string,\r\n    disabled?: boolean\r\n): IReduxAction<IGroupableCheckboxActionPayload> => ({\r\n    type: GroupableCheckboxActions.disabledAllGroup,\r\n    payload: {\r\n        id,\r\n        parentId,\r\n        disabled,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=219.bundle.js.map