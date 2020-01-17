(window.webpackJsonp=window.webpackJsonp||[]).push([[917],{2003:function(t,e,n){"use strict";n.r(e),e.default="import {IItemBoxProps} from '../../../components/itemBox/ItemBox';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {\r\n    addStringList,\r\n    addValueStringList,\r\n    IStringListPayload,\r\n    removeStringList,\r\n    removeValueStringList,\r\n} from '../StringListActions';\r\nimport {\r\n    convertItemsBoxToStringList,\r\n    convertStringListToItemsBox,\r\n    IStringListCompositeState,\r\n    stringListCompositeReducer,\r\n    stringListInitialState,\r\n} from '../StringListReducers';\r\n\r\ndescribe('StringList', () => {\r\n    describe('StringList Reducers', () => {\r\n        const stateId: string = 'test';\r\n        const oldState: IStringListCompositeState = {\r\n            [stateId]: {\r\n                id: stateId,\r\n                list: [],\r\n            },\r\n        };\r\n\r\n        const genericAction: IReduxAction<IStringListPayload> = {\r\n            type: 'pokeball',\r\n        };\r\n\r\n        it('should return the default state if the action has no payload and the state is undefined', () => {\r\n            const newState: IStringListCompositeState = stringListCompositeReducer(undefined, genericAction);\r\n\r\n            expect(newState).toBe(stringListInitialState);\r\n        });\r\n\r\n        it('should return the default state if the payload id is not in the state, the action type is not ADD_STRING_LIST and the state is undefined', () => {\r\n            const newState: IStringListCompositeState = stringListCompositeReducer(undefined, {\r\n                ...genericAction,\r\n                payload: {id: 'pokemon'},\r\n            });\r\n\r\n            expect(newState).toEqual(stringListInitialState);\r\n        });\r\n\r\n        it('should return the oldState state if the payload id is not in the state and the action type is not ADD_STRING_LIST', () => {\r\n            const newState: IStringListCompositeState = stringListCompositeReducer(oldState, {\r\n                ...genericAction,\r\n                payload: {id: 'pokemon'},\r\n            });\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the oldState state if the id is in the state but the action type do not exist in the StringListActions', () => {\r\n            const newState: IStringListCompositeState = stringListCompositeReducer(oldState, {\r\n                type: 'custom_action',\r\n                payload: {id: stateId},\r\n            });\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        describe('ADD_STRING_LIST', () => {\r\n            const newId: string = 'charmeleon';\r\n\r\n            it('should return the oldState if the id is already in the state', () => {\r\n                const newState: IStringListCompositeState = stringListCompositeReducer(\r\n                    oldState,\r\n                    addStringList(stateId)\r\n                );\r\n\r\n                expect(newState).toBe(oldState);\r\n            });\r\n\r\n            it('should add the new stringList in the state if the id do not exist', () => {\r\n                const newState: IStringListCompositeState = stringListCompositeReducer(oldState, addStringList(newId));\r\n\r\n                expect(newState[newId]).toBeDefined();\r\n            });\r\n\r\n            it('should add the new stringList in the state with an empty array by default', () => {\r\n                const newState: IStringListCompositeState = stringListCompositeReducer(oldState, addStringList(newId));\r\n\r\n                expect(newState[newId].list).toEqual([]);\r\n            });\r\n\r\n            it('should add the new list sent as parameter in the state', () => {\r\n                const newList: string[] = ['a', 'b', 'c'];\r\n                const newState: IStringListCompositeState = stringListCompositeReducer(\r\n                    oldState,\r\n                    addStringList(newId, newList)\r\n                );\r\n\r\n                expect(newState[newId].list).toEqual(newList);\r\n            });\r\n        });\r\n\r\n        describe('REMOVE_STRING_LIST', () => {\r\n            const newId: string = 'pidgeot';\r\n\r\n            it('should remove nothing if the id is not in the state', () => {\r\n                const newState: IStringListCompositeState = stringListCompositeReducer(\r\n                    oldState,\r\n                    removeStringList(newId)\r\n                );\r\n\r\n                expect(newState).toBe(oldState);\r\n            });\r\n\r\n            it('should remove the list if the id is in the state', () => {\r\n                const newState: IStringListCompositeState = stringListCompositeReducer(\r\n                    oldState,\r\n                    removeStringList(stateId)\r\n                );\r\n\r\n                expect(newState).not.toEqual(oldState);\r\n            });\r\n        });\r\n\r\n        describe('ADD_VALUE_STRING_LIST', () => {\r\n            const newId: string = 'bulbasaur';\r\n            const newValue: string = 'ivysaur';\r\n\r\n            it('should return the oldState if the id where to add the value is not in the state', () => {\r\n                const newState: IStringListCompositeState = stringListCompositeReducer(\r\n                    oldState,\r\n                    addValueStringList(newId, newValue)\r\n                );\r\n\r\n                expect(newState).toBe(oldState);\r\n            });\r\n\r\n            it('should add the value at the end of the list if the id is in the state', () => {\r\n                const newState: IStringListCompositeState = stringListCompositeReducer(\r\n                    oldState,\r\n                    addValueStringList(stateId, newValue)\r\n                );\r\n\r\n                const newStateListLength: number = newState[stateId].list.length;\r\n                expect(newStateListLength).toBeGreaterThan(oldState[stateId].list.length);\r\n                expect(newState[stateId].list[newStateListLength - 1]).toEqual(newValue);\r\n            });\r\n\r\n            it('should reset the list before and add the new list', () => {\r\n                const oldStateWithValues = {\r\n                    [stateId]: {\r\n                        id: stateId,\r\n                        list: ['a', 'b', 'c'],\r\n                    },\r\n                };\r\n\r\n                const newState: IStringListCompositeState = stringListCompositeReducer(\r\n                    oldStateWithValues,\r\n                    addValueStringList(stateId, newValue, true)\r\n                );\r\n\r\n                expect(newState[stateId].list.length).toBe(1);\r\n                expect(newState[stateId].list[0]).toBe(newValue);\r\n            });\r\n        });\r\n\r\n        describe('REMOVE_VALUE_STRING_LIST', () => {\r\n            const newId: string = 'bulbasaur';\r\n            const newValue: string = 'venusaur';\r\n\r\n            it('should return the oldState if the id where to remove the value is not in the state', () => {\r\n                const newState: IStringListCompositeState = stringListCompositeReducer(\r\n                    oldState,\r\n                    removeValueStringList(newId, newValue)\r\n                );\r\n\r\n                expect(newState).toBe(oldState);\r\n            });\r\n\r\n            it('should remove the value in the list if the id is in the state', () => {\r\n                const oldStateWithList: IStringListCompositeState = {[stateId]: {id: stateId, list: [newValue]}};\r\n                const newState: IStringListCompositeState = stringListCompositeReducer(\r\n                    oldStateWithList,\r\n                    removeValueStringList(stateId, newValue)\r\n                );\r\n\r\n                const newStateListLength: number = newState[stateId].list.length;\r\n                expect(newStateListLength).toBeLessThan(oldStateWithList[stateId].list.length);\r\n                expect(newStateListLength).toBe(0);\r\n            });\r\n        });\r\n    });\r\n\r\n    describe('utils', () => {\r\n        describe('convertStringListToItemsBox', () => {\r\n            const list: string[] = ['a', 'b'];\r\n\r\n            it('should return an empty list if the list as argument is empty', () => {\r\n                expect(convertStringListToItemsBox([])).toEqual([]);\r\n            });\r\n\r\n            it('should return a list of ItemBox with each value in the array as value', () => {\r\n                const newList: IItemBoxProps[] = convertStringListToItemsBox(list);\r\n\r\n                expect(newList.length).toBe(2);\r\n\r\n                expect(newList[0].value).toEqual(list[0]);\r\n                expect(newList[1].value).toEqual(list[1]);\r\n            });\r\n\r\n            it('should add itemBox props for each itemBox from the list', () => {\r\n                const newList: IItemBoxProps[] = convertStringListToItemsBox(list, {disabled: true, hidden: false});\r\n\r\n                expect(newList[0].disabled).toBe(true);\r\n                expect(newList[1].disabled).toBe(true);\r\n\r\n                expect(newList[0].hidden).toBe(false);\r\n                expect(newList[1].hidden).toBe(false);\r\n            });\r\n        });\r\n\r\n        describe('convertItemsBoxToStringList', () => {\r\n            const itemBox: IItemBoxProps[] = [{value: 'a'}, {value: 'b'}];\r\n\r\n            it('should return an empty array if the itemBox list is empty', () => {\r\n                expect(convertItemsBoxToStringList([])).toEqual([]);\r\n            });\r\n\r\n            it('should return the list of each value in the itemBox list', () => {\r\n                expect(convertItemsBoxToStringList(itemBox)).toEqual(['a', 'b']);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=917.bundle.js.map