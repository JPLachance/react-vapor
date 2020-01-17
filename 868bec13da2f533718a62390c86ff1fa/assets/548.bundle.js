(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{1643:function(n,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {RTestUtils} from '../../../utils/tests/RTestUtils';\r\nimport {DnDContainer} from '../../dragAndDrop/DnDContainer';\r\nimport {DnDUtils} from '../../dragAndDrop/DnDUtils';\r\nimport {multilineBoxWithDnD} from '../hoc/MultilineBoxWithDnD';\r\nimport {MultilineBox} from '../MultilineBox';\r\n\r\ndescribe('Multiline box with drag & drop', () => {\r\n    describe('<MultilineBoxWithDnD/>', () => {\r\n        const DefaultMultilineBoxWithDnD = _.compose(multilineBoxWithDnD())(MultilineBox);\r\n\r\n        const id = 'multiline-box';\r\n\r\n        beforeAll(() => {\r\n            RTestUtils.mockTagContext();\r\n        });\r\n\r\n        it('should mount without errors', () => {\r\n            expect(() => {\r\n                RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {\r\n                    id,\r\n                    data: [],\r\n                });\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should unmount without errors', () => {\r\n            const component = RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {\r\n                id,\r\n                data: [],\r\n            });\r\n\r\n            expect(() => {\r\n                component.wrapper.unmount();\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should not throw if the renderBody is not defined', () => {\r\n            expect(() => {\r\n                RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {\r\n                    id,\r\n                    data: [],\r\n                });\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should use the default renderBody if defined', () => {\r\n            const component = RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {\r\n                id,\r\n                data: [],\r\n                renderBody: () => <div className=\"pick-me\" />,\r\n            });\r\n\r\n            expect(component.wrapper.find('.pick-me').length).toBe(1);\r\n        });\r\n\r\n        describe('once rendered', () => {\r\n            it('should dispatch a reorder action on onReorder', () => {\r\n                const component: any = RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {\r\n                    id,\r\n                    data: [],\r\n                });\r\n\r\n                component.wrapper\r\n                    .find(MultilineBox)\r\n                    .props()\r\n                    .onReorder(['a']);\r\n\r\n                expect(component.store.getState().multilineIds[id].list).toEqual(['a']);\r\n            });\r\n\r\n            it('should call the DnDUtils move function on props move set on DnDContainer', () => {\r\n                const spy = spyOn(DnDUtils, 'move').and.returnValue([]);\r\n\r\n                const component: any = RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {\r\n                    id,\r\n                    data: [],\r\n                });\r\n\r\n                component.wrapper\r\n                    .find(DnDContainer)\r\n                    .props()\r\n                    .move();\r\n\r\n                expect(spy).toHaveBeenCalledTimes(1);\r\n            });\r\n        });\r\n\r\n        describe('with supplier', () => {\r\n            const CustomMultilineBoxWithDnD = _.compose(\r\n                multilineBoxWithDnD({\r\n                    DnDContainerProps: {\r\n                        draggableContainerProps: {\r\n                            className: 'select-me-plz',\r\n                        },\r\n                    },\r\n                })\r\n            )(MultilineBox);\r\n\r\n            it('should add props on DnDContainer if added in the supplier for the hoc', () => {\r\n                const component: any = RTestUtils.renderComponent(CustomMultilineBoxWithDnD, {\r\n                    id,\r\n                    data: [],\r\n                });\r\n\r\n                expect(component.wrapper.find('.select-me-plz').length).toBe(1);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=548.bundle.js.map