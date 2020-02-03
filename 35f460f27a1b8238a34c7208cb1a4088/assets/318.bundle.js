(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{1425:function(r,n,e){"use strict";e.r(n),n.default="import {shallow, ShallowWrapper} from 'enzyme';\r\nimport {shallowWithState} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {DomPositionCalculator, DropPodPosition} from '../DomPositionCalculator';\r\nimport {defaultDropPodPosition, DropPod, IDropPodProps} from '../DropPod';\r\n\r\ndescribe('DropPod', () => {\r\n    const defaultDrop: any = null;\r\n\r\n    describe('<DropPod />', () => {\r\n        const defaultParentOffset = {\r\n            bottom: 400,\r\n            top: 50,\r\n            right: 400,\r\n            left: 50,\r\n        };\r\n\r\n        let bottomPositionCalculatedSpy: jasmine.Spy;\r\n        let topPositionCalculatedSpy: jasmine.Spy;\r\n        const setupReference = (parentOffset = {}, dropOffset = {}, styleCalculated = {}, buttonOffset = {}) => {\r\n            parentOffset = {...defaultParentOffset, ...parentOffset};\r\n            const bottomStyle = _.isEmpty(styleCalculated)\r\n                ? {}\r\n                : {\r\n                      style: styleCalculated,\r\n                      lastPosition: {\r\n                          position: DropPodPosition.bottom,\r\n                          orientation: DropPodPosition.left,\r\n                      },\r\n                  };\r\n            bottomPositionCalculatedSpy = spyOn(DomPositionCalculator, 'bottom').and.returnValue(bottomStyle);\r\n            topPositionCalculatedSpy = spyOn(DomPositionCalculator, 'top').and.returnValue({});\r\n            spyOn(React, 'createRef').and.returnValue({\r\n                current: {\r\n                    getBoundingClientRect: () => dropOffset,\r\n                } as any,\r\n            });\r\n            spyOn(window, 'getComputedStyle').and.returnValue({paddingLeft: '10', paddingRight: '10'});\r\n\r\n            buttonRef = {\r\n                current: {\r\n                    closest: () => ({\r\n                        getBoundingClientRect: () => parentOffset,\r\n                    }),\r\n                    getBoundingClientRect: () => buttonOffset,\r\n                    offsetParent: {\r\n                        getBoundingClientRect: () => parentOffset,\r\n                    },\r\n                },\r\n            } as any;\r\n\r\n            spyOn(MutationObserver.prototype, 'observe');\r\n            spyOn(MutationObserver.prototype, 'disconnect');\r\n        };\r\n\r\n        let buttonRef: React.RefObject<HTMLElement>;\r\n        beforeEach(() => {\r\n            buttonRef = React.createRef();\r\n        });\r\n\r\n        it('should mount and unmount without errors', () => {\r\n            let wrapper: any;\r\n            expect(() => {\r\n                wrapper = shallow(<DropPod renderDrop={() => defaultDrop} ref={buttonRef} />, {}).dive();\r\n            }).not.toThrow('mount');\r\n\r\n            expect(() => {\r\n                wrapper.unmount();\r\n            }).not.toThrow('unmount');\r\n        });\r\n\r\n        describe('once mounted', () => {\r\n            let wrapper: any;\r\n            const shallowDropPod = (\r\n                props: IDropPodProps = {renderDrop: () => defaultDrop}\r\n            ): ShallowWrapper<IDropPodProps> =>\r\n                (wrapper = shallowWithState(<DropPod ref={buttonRef} {...props} />, {}));\r\n\r\n            afterEach(() => {\r\n                if (wrapper) {\r\n                    wrapper.unmount();\r\n                }\r\n            });\r\n\r\n            it('should be close by default', () => {\r\n                shallowDropPod();\r\n                expect(wrapper.props().isOpen).toBe(false);\r\n            });\r\n\r\n            it('should have the default position by default', () => {\r\n                shallowDropPod();\r\n                expect(wrapper.props().positions).toEqual(defaultDropPodPosition);\r\n            });\r\n\r\n            it('should have minWidth set to 0 by default', () => {\r\n                shallowDropPod();\r\n                expect(wrapper.props().minWidth).toBe(0);\r\n            });\r\n\r\n            it('should have minHeight set to 0 by default', () => {\r\n                shallowDropPod();\r\n                expect(wrapper.props().minHeight).toBe(0);\r\n            });\r\n\r\n            describe('renderDrop', () => {\r\n                let styleRendered: React.CSSProperties;\r\n\r\n                it('should set the position absolute on style object', () => {\r\n                    shallowDropPod({\r\n                        renderDrop: (style, dropRef) => (styleRendered = style),\r\n                    }).dive();\r\n\r\n                    expect(styleRendered.position).toBe('absolute');\r\n                });\r\n\r\n                it('should set the display inline-block on style object', () => {\r\n                    shallowDropPod({\r\n                        renderDrop: (style, dropRef) => (styleRendered = style),\r\n                    }).dive();\r\n\r\n                    expect(styleRendered.display).toBe('inline-block');\r\n                });\r\n\r\n                it('should set the visibility hidden if the drop cant be show', () => {\r\n                    shallowDropPod({\r\n                        renderDrop: (style, dropRef) => (styleRendered = style),\r\n                    }).dive();\r\n\r\n                    expect(styleRendered.visibility).toBe('hidden');\r\n                });\r\n\r\n                describe('calculate style position for the dropPod', () => {\r\n                    const shallowDropPodForStyle = (props: Partial<IDropPodProps> = {}) =>\r\n                        (wrapper = shallow(\r\n                            <DropPod\r\n                                ref={buttonRef}\r\n                                renderDrop={(style) => {\r\n                                    styleRendered = style;\r\n                                    return null;\r\n                                }}\r\n                                isOpen\r\n                                {...props}\r\n                            />,\r\n                            {}\r\n                        ).dive());\r\n\r\n                    it('should set the visibility visible if the drop can be show', () => {\r\n                        setupReference();\r\n                        shallowDropPodForStyle();\r\n\r\n                        expect(styleRendered.visibility).toBe('visible');\r\n                    });\r\n\r\n                    it('should set the visibility visible if the drop can be show', () => {\r\n                        setupReference();\r\n                        shallowDropPodForStyle();\r\n\r\n                        expect(styleRendered.visibility).toBe('visible');\r\n                    });\r\n\r\n                    it('should set position with bottom and orientation with left if the position sent is not available', () => {\r\n                        setupReference(\r\n                            {\r\n                                top: 100,\r\n                                bottom: 500,\r\n                            },\r\n                            {\r\n                                width: 50,\r\n                                height: 50,\r\n                            },\r\n                            {\r\n                                left: 100,\r\n                                top: 200,\r\n                            }\r\n                        );\r\n                        shallowDropPodForStyle({\r\n                            positions: ['universe'],\r\n                        });\r\n\r\n                        expect(styleRendered.top).toBe(200);\r\n                        expect(styleRendered.left).toBe(100);\r\n                    });\r\n\r\n                    it('should set style empty if no positions', () => {\r\n                        setupReference();\r\n                        shallowDropPodForStyle({\r\n                            positions: [],\r\n                        });\r\n\r\n                        expect(styleRendered.top).toBeUndefined();\r\n                        expect(styleRendered.left).toBeUndefined();\r\n                    });\r\n\r\n                    it('should call DomPositionCalculator for each position in the array and one more for the last position bottom', () => {\r\n                        setupReference(\r\n                            {\r\n                                top: 100,\r\n                                bottom: 500,\r\n                                left: 0,\r\n                                right: 500,\r\n                            },\r\n                            {\r\n                                width: 50,\r\n                                height: 50,\r\n                            }\r\n                        );\r\n                        shallowDropPodForStyle({\r\n                            positions: [DropPodPosition.bottom, DropPodPosition.top],\r\n                        });\r\n\r\n                        expect(bottomPositionCalculatedSpy).toHaveBeenCalledTimes(2);\r\n                        expect(topPositionCalculatedSpy).toHaveBeenCalledTimes(1);\r\n                    });\r\n\r\n                    it('should set top with the minY from the bounding limit if the dropOffset top is smaller than minY', () => {\r\n                        setupReference(\r\n                            {\r\n                                top: 100,\r\n                                bottom: 500,\r\n                            },\r\n                            {\r\n                                width: 50,\r\n                                height: 50,\r\n                            },\r\n                            {\r\n                                top: 20,\r\n                                left: 100,\r\n                            }\r\n                        );\r\n                        shallowDropPodForStyle({\r\n                            positions: [DropPodPosition.bottom],\r\n                        });\r\n\r\n                        expect(styleRendered.top).toBe(100);\r\n                    });\r\n\r\n                    it('should set top with the minY from the bounding limit if the dropOffset top calculated is equal than minY', () => {\r\n                        setupReference(\r\n                            {\r\n                                top: 100,\r\n                                bottom: 500,\r\n                            },\r\n                            {\r\n                                width: 50,\r\n                                height: 50,\r\n                            },\r\n                            {\r\n                                top: 100,\r\n                                left: 100,\r\n                            }\r\n                        );\r\n                        shallowDropPodForStyle({\r\n                            positions: [DropPodPosition.bottom],\r\n                        });\r\n\r\n                        expect(styleRendered.top).toBe(100);\r\n                    });\r\n\r\n                    it('should set top with max without drop height from the calculated bounding limit if the dropOffset is bigger than maxY', () => {\r\n                        setupReference(\r\n                            {\r\n                                top: 100,\r\n                                bottom: 500,\r\n                            },\r\n                            {\r\n                                width: 50,\r\n                                height: 50,\r\n                            },\r\n                            {\r\n                                top: 600,\r\n                                left: 100,\r\n                            }\r\n                        );\r\n                        shallowDropPodForStyle({\r\n                            positions: [DropPodPosition.bottom],\r\n                        });\r\n\r\n                        expect(styleRendered.top).toBe(450);\r\n                    });\r\n\r\n                    it('should set top with max without drop height from the calculated bounding limit if the dropOffset is equal than maxY', () => {\r\n                        setupReference(\r\n                            {\r\n                                top: 100,\r\n                                bottom: 500,\r\n                            },\r\n                            {\r\n                                width: 50,\r\n                                height: 50,\r\n                            },\r\n                            {\r\n                                top: 450,\r\n                                left: 100,\r\n                            }\r\n                        );\r\n                        shallowDropPodForStyle({\r\n                            positions: [DropPodPosition.bottom],\r\n                        });\r\n\r\n                        expect(styleRendered.top).toBe(450);\r\n                    });\r\n\r\n                    it('should set left with the minX from the bounding limit if the dropOffset is smaller than minX', () => {\r\n                        setupReference(\r\n                            {\r\n                                left: 50,\r\n                                right: 500,\r\n                            },\r\n                            {\r\n                                width: 50,\r\n                                height: 50,\r\n                            },\r\n                            {\r\n                                top: 100,\r\n                                left: 20,\r\n                            }\r\n                        );\r\n                        shallowDropPodForStyle({\r\n                            positions: [DropPodPosition.bottom],\r\n                        });\r\n\r\n                        expect(styleRendered.left).toBe(50);\r\n                    });\r\n\r\n                    it('should set left with the minX from the bounding limit if the dropOffset is equal than minX', () => {\r\n                        setupReference(\r\n                            {\r\n                                left: 50,\r\n                                right: 500,\r\n                            },\r\n                            {\r\n                                width: 50,\r\n                                height: 50,\r\n                            },\r\n                            {\r\n                                top: 100,\r\n                                left: 50,\r\n                            }\r\n                        );\r\n                        shallowDropPodForStyle({\r\n                            positions: [DropPodPosition.bottom],\r\n                        });\r\n\r\n                        expect(styleRendered.left).toBe(50);\r\n                    });\r\n\r\n                    it('should set right with the maxX without drop width from the bounding limit if the dropOffset is bigger than maxX', () => {\r\n                        setupReference(\r\n                            {\r\n                                left: 50,\r\n                                right: 500,\r\n                            },\r\n                            {\r\n                                width: 50,\r\n                                height: 50,\r\n                            },\r\n                            {\r\n                                top: 100,\r\n                                left: 550,\r\n                            }\r\n                        );\r\n                        shallowDropPodForStyle({\r\n                            positions: [DropPodPosition.bottom],\r\n                        });\r\n\r\n                        expect(styleRendered.left).toBe(450);\r\n                    });\r\n\r\n                    it('should set right with the maxX without drop width from the bounding limit if the dropOffset is equal than maxX', () => {\r\n                        setupReference(\r\n                            {\r\n                                left: 50,\r\n                                right: 500,\r\n                            },\r\n                            {\r\n                                width: 50,\r\n                                height: 50,\r\n                            },\r\n                            {\r\n                                top: 100,\r\n                                left: 450,\r\n                            }\r\n                        );\r\n                        shallowDropPodForStyle({\r\n                            positions: [DropPodPosition.bottom],\r\n                        });\r\n\r\n                        expect(styleRendered.left).toBe(450);\r\n                    });\r\n\r\n                    it('should return style with the width equal than the button width if the prop hasSameWidth is set to true', () => {\r\n                        setupReference(\r\n                            {\r\n                                left: 0,\r\n                                right: 1024,\r\n                                top: 0,\r\n                                bottom: 1024,\r\n                            },\r\n                            {\r\n                                width: 50,\r\n                                height: 50,\r\n                                toJSON: () => ({}),\r\n                            },\r\n                            {\r\n                                top: 100,\r\n                                left: 100,\r\n                            },\r\n                            {\r\n                                width: 100,\r\n                            }\r\n                        );\r\n                        shallowDropPodForStyle({\r\n                            positions: [DropPodPosition.bottom],\r\n                            hasSameWidth: true,\r\n                        });\r\n\r\n                        expect(styleRendered.width).toBe(100);\r\n                    });\r\n\r\n                    it('should set the maxWidth to the inner width of the closest relatively positionned parent', () => {\r\n                        setupReference({\r\n                            width: 1000,\r\n                        });\r\n                        shallowDropPodForStyle({\r\n                            positions: [DropPodPosition.bottom],\r\n                        });\r\n\r\n                        expect(styleRendered.maxWidth).toBe(980); // 1000px width - (10px padding left + 10px padding right)\r\n                    });\r\n\r\n                    describe('DomPositionCalculator', () => {\r\n                        it('should be call with the buttonOffset, dropOffsetPrime, boundingLimit and the last position calculated', () => {\r\n                            const parentOffset = {\r\n                                top: 10,\r\n                                bottom: 20,\r\n                                left: 10,\r\n                                right: 20,\r\n                            };\r\n                            const buttonOffset = {width: 50, height: 50};\r\n                            const dropOffset = {\r\n                                top: 10,\r\n                                bottom: 12,\r\n                                width: 2,\r\n                                height: 2,\r\n                            };\r\n\r\n                            setupReference(\r\n                                parentOffset,\r\n                                dropOffset,\r\n                                {\r\n                                    top: 100,\r\n                                    bottom: 100,\r\n                                },\r\n                                buttonOffset\r\n                            );\r\n                            shallowDropPodForStyle({\r\n                                positions: [DropPodPosition.bottom],\r\n                            });\r\n\r\n                            expect(bottomPositionCalculatedSpy).toHaveBeenCalledWith(\r\n                                buttonOffset,\r\n                                dropOffset,\r\n                                {\r\n                                    maxY: 20,\r\n                                    minY: 10,\r\n                                    maxX: 20,\r\n                                    minX: 10,\r\n                                },\r\n                                {}\r\n                            );\r\n                        });\r\n                    });\r\n                });\r\n\r\n                describe('events', () => {\r\n                    let RWrapper: ShallowWrapper;\r\n\r\n                    it('should add events if the dropPod is open', () => {\r\n                        const spy = spyOn(window, 'addEventListener');\r\n\r\n                        shallowWithState(<DropPod renderDrop={() => defaultDrop} isOpen={true} />, {}).dive();\r\n\r\n                        expect(spy).toHaveBeenCalledTimes(2);\r\n                    });\r\n\r\n                    it('should not add events if the dropPod is close', () => {\r\n                        const spy = spyOn(window, 'addEventListener');\r\n\r\n                        shallowWithState(<DropPod renderDrop={() => defaultDrop} isOpen={false} />, {}).dive();\r\n\r\n                        expect(spy).toHaveBeenCalledTimes(0);\r\n                    });\r\n\r\n                    it('should remove events on unmount', () => {\r\n                        const spy = spyOn(window, 'removeEventListener');\r\n\r\n                        RWrapper = shallowWithState(\r\n                            <DropPod renderDrop={() => defaultDrop} isOpen={false} />,\r\n                            {}\r\n                        ).dive();\r\n\r\n                        RWrapper.unmount();\r\n\r\n                        expect(spy).toHaveBeenCalledTimes(2);\r\n                    });\r\n\r\n                    it('should add events if the prop isOpen change to true on update', () => {\r\n                        const spy = spyOn(window, 'addEventListener');\r\n\r\n                        RWrapper = shallowWithState(\r\n                            <DropPod renderDrop={() => defaultDrop} isOpen={false} />,\r\n                            {}\r\n                        ).dive();\r\n\r\n                        RWrapper.setProps({isOpen: true});\r\n                        RWrapper.update();\r\n\r\n                        expect(spy).toHaveBeenCalledTimes(2);\r\n                    });\r\n\r\n                    it('should not add events if the prop isOpen do not change on update', () => {\r\n                        const spy = spyOn(window, 'addEventListener');\r\n\r\n                        RWrapper = shallowWithState(\r\n                            <DropPod renderDrop={() => defaultDrop} isOpen={false} />,\r\n                            {}\r\n                        ).dive();\r\n\r\n                        RWrapper.setProps({isOpen: false});\r\n                        RWrapper.update();\r\n\r\n                        expect(spy).toHaveBeenCalledTimes(0);\r\n                    });\r\n\r\n                    it('should remove events if the prop isOpen change to false on update', () => {\r\n                        const spy = spyOn(window, 'removeEventListener');\r\n\r\n                        RWrapper = shallowWithState(\r\n                            <DropPod renderDrop={() => defaultDrop} isOpen={true} />,\r\n                            {}\r\n                        ).dive();\r\n\r\n                        RWrapper.setProps({isOpen: false});\r\n                        RWrapper.update();\r\n\r\n                        expect(spy).toHaveBeenCalledTimes(2);\r\n                    });\r\n                });\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=318.bundle.js.map