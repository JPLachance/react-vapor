(window.webpackJsonp=window.webpackJsonp||[]).push([[685],{1770:function(t,e,r){"use strict";r.r(e),e.default="import * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {MatchFilter} from '../../filterBox/FilterBoxUtils';\r\nimport {IItemBoxProps} from '../../itemBox/ItemBox';\r\nimport {IListBoxState} from '../../listBox/ListBoxReducers';\r\nimport {ISelectWithFilterProps} from '../hoc/SelectWithFilter';\r\nimport {SelectCombiners, SelectSelector} from '../SelectSelector';\r\n\r\ndescribe('Select', () => {\r\n    describe('Select Selector', () => {\r\n        const id: string = 'a';\r\n        const defaultState: IReactVaporState = {\r\n            filters: [],\r\n            selectWithFilter: {},\r\n            listBoxes: [],\r\n        };\r\n        const defaultOwnProps: ISelectWithFilterProps = {id};\r\n        const list: string[] = ['a', 'b'];\r\n\r\n        describe('getListState', () => {\r\n            it('should not throw when passing falsy values and return an empty array', () => {\r\n                expect(SelectSelector.getListState({}, defaultOwnProps)).toEqual([]);\r\n            });\r\n\r\n            it('should return an empty list if the selectWithFilter is not in the state', () => {\r\n                expect(SelectSelector.getListState(defaultState, defaultOwnProps)).toEqual([]);\r\n            });\r\n\r\n            it('should return the current list in the state if the id is in the state', () => {\r\n                expect(SelectSelector.getListState({selectWithFilter: {[id]: {id, list}}}, defaultOwnProps)).toEqual(\r\n                    list\r\n                );\r\n            });\r\n        });\r\n\r\n        describe('getListBox', () => {\r\n            it('should return an empty listBox object if it is not in the state', () => {\r\n                expect(SelectSelector.getListBox(defaultState, defaultOwnProps)).toEqual({});\r\n            });\r\n\r\n            it('should return the current object in the state if the id is in the state', () => {\r\n                const listBox: IListBoxState = {id, selected: list};\r\n                expect(SelectSelector.getListBox({listBoxes: [listBox]}, defaultOwnProps)).toEqual(listBox);\r\n            });\r\n        });\r\n\r\n        describe('getItems', () => {\r\n            it('should return an empty items list if it is not in the ownProps', () => {\r\n                expect(SelectSelector.getItems(defaultState, defaultOwnProps)).toEqual([]);\r\n            });\r\n\r\n            it('should return the filterText in the state if the id is in the state', () => {\r\n                const items: IItemBoxProps[] = [{value: 'a'}];\r\n                expect(SelectSelector.getItems(defaultState, {id, items})).toEqual(items);\r\n            });\r\n        });\r\n\r\n        describe('Combiner', () => {\r\n            describe('itemsWithFilterCombiner', () => {\r\n                const items: IItemBoxProps[] = [{value: 'a'}];\r\n                const filterText: string = 'b';\r\n                const matchFilter: MatchFilter = () => true;\r\n\r\n                it('should return an empty array if the items is already empty', () => {\r\n                    expect(SelectCombiners.itemsWithFilterCombiner([], filterText, matchFilter)).toEqual([]);\r\n                });\r\n\r\n                it('should return items with hidden false if match filter return true', () => {\r\n                    expect(SelectCombiners.itemsWithFilterCombiner(items, filterText, matchFilter)).toEqual([\r\n                        {value: 'a', hidden: false},\r\n                    ]);\r\n                });\r\n\r\n                it('should return items with hidden true if match filter return false', () => {\r\n                    const matchFilterFalse: MatchFilter = () => false;\r\n                    expect(SelectCombiners.itemsWithFilterCombiner(items, filterText, matchFilterFalse)).toEqual([\r\n                        {value: 'a', hidden: true},\r\n                    ]);\r\n                });\r\n            });\r\n\r\n            describe('customItemsCombiner', () => {\r\n                const items: IItemBoxProps[] = [{value: 'a'}];\r\n                const listState: string[] = ['b'];\r\n\r\n                const itemsResult: IItemBoxProps[] = [{value: 'b', hidden: true, selected: true}];\r\n\r\n                it('should return new items list with the value in the listState if items is empty', () => {\r\n                    expect(SelectCombiners.customItemsCombiner([], listState)).toEqual(itemsResult);\r\n                });\r\n\r\n                it('should return new items list from the listState value with all values in items removed', () => {\r\n                    expect(SelectCombiners.customItemsCombiner(items, [...listState, 'a'])).toEqual(itemsResult);\r\n                });\r\n            });\r\n\r\n            describe('listBoxSelectedCombiner', () => {\r\n                const listBox: IListBoxState = {id, selected: list};\r\n\r\n                it('should return an empty array if selected is not defined in the listBox', () => {\r\n                    expect(SelectCombiners.listBoxSelectedCombiner({id, selected: undefined})).toEqual([]);\r\n                });\r\n\r\n                it('should return the list of selected in the listBox', () => {\r\n                    expect(SelectCombiners.listBoxSelectedCombiner(listBox)).toEqual(list);\r\n                });\r\n            });\r\n\r\n            describe('multiSelectSelectedValuesCombiner', () => {\r\n                const list1 = ['a', 'b'];\r\n                const list2 = ['c', 'd'];\r\n                const list3 = ['a', 'e'];\r\n\r\n                it('should return a list with items from both list', () => {\r\n                    const state = {\r\n                        selectWithFilter: {[id]: {id, list: list1}},\r\n                        listBoxes: [{id, selected: list2}],\r\n                    };\r\n\r\n                    const resultList = [...list1, ...list2];\r\n                    expect(SelectSelector.getMultiSelectSelectedValues(state, {id}).length).toEqual(resultList.length);\r\n                });\r\n\r\n                it('should return a list with items from both list without duplicate', () => {\r\n                    const state = {\r\n                        selectWithFilter: {[id]: {id, list: list1}},\r\n                        listBoxes: [{id, selected: list3}],\r\n                    };\r\n\r\n                    const resultList = _.uniq([...list1, ...list3]);\r\n                    expect(SelectSelector.getMultiSelectSelectedValues(state, {id}).length).toEqual(resultList.length);\r\n                });\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=685.bundle.js.map