(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{1402:function(t,n,r){"use strict";r.r(n),n.default="import * as React from 'react';\r\nimport * as ReactDOM from 'react-dom';\r\nimport * as _ from 'underscore';\r\n\r\nimport {Defaults} from '../../Defaults';\r\nimport {\r\n    DomPositionCalculator,\r\n    DropPodPosition,\r\n    IBoundingLimit,\r\n    IDomPositionCalculatorReturn,\r\n    IDropUIPosition,\r\n    OrientationByPosition,\r\n} from './DomPositionCalculator';\r\n\r\nexport interface IDropPodProps {\r\n    renderDrop: (\r\n        style: React.CSSProperties,\r\n        dropRef: React.RefObject<HTMLElement>,\r\n        position: IDropUIPosition\r\n    ) => React.ReactNode;\r\n    isOpen?: boolean;\r\n    positions?: string[];\r\n    selector?: string;\r\n    parentSelector?: string;\r\n    minWidth?: number;\r\n    minHeight?: number;\r\n    hasSameWidth?: boolean;\r\n}\r\n\r\nexport interface IRDropPodProps extends IDropPodProps {\r\n    buttonRef?: React.RefObject<HTMLElement>;\r\n}\r\n\r\nexport interface IDropPodState {\r\n    offset: ClientRect | DOMRect;\r\n}\r\n\r\nexport const defaultDropPodPosition = [\r\n    DropPodPosition.right,\r\n    DropPodPosition.bottom,\r\n    DropPodPosition.top,\r\n    DropPodPosition.left,\r\n];\r\n\r\nclass RDropPod extends React.PureComponent<IRDropPodProps, IDropPodState> {\r\n    readonly dropRef: React.RefObject<HTMLElement>;\r\n\r\n    private lastPosition: IDropUIPosition;\r\n\r\n    static defaultProps: Partial<IDropPodProps> = {\r\n        isOpen: false,\r\n        positions: defaultDropPodPosition,\r\n        minWidth: 0,\r\n        minHeight: 0,\r\n        hasSameWidth: false,\r\n    };\r\n    private parentMutationObserver: MutationObserver;\r\n\r\n    constructor(props: IDropPodProps, state: IDropPodState) {\r\n        super(props, state);\r\n\r\n        this.dropRef = React.createRef();\r\n        this.state = {\r\n            offset: undefined,\r\n        };\r\n\r\n        this.updateOffset = this.updateOffset.bind(this);\r\n    }\r\n\r\n    componentWillMount() {\r\n        if (this.props.isOpen) {\r\n            this.setEventsOnDocument();\r\n        }\r\n\r\n        if (\r\n            this.props.positions &&\r\n            !!this.props.positions.length &&\r\n            _.contains(DropPodPosition, this.props.positions[0])\r\n        ) {\r\n            this.lastPosition = {\r\n                position: this.props.positions && this.props.positions[0],\r\n                orientation: OrientationByPosition[this.props.positions[0]][0],\r\n            };\r\n        } else {\r\n            this.lastPosition = {\r\n                position: DropPodPosition.bottom,\r\n                orientation: DropPodPosition.left,\r\n            };\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.removeEventsOnDocument();\r\n    }\r\n\r\n    componentDidUpdate(prevProps: Readonly<IRDropPodProps>) {\r\n        if (!prevProps.isOpen && this.props.isOpen) {\r\n            this.setEventsOnDocument();\r\n        } else if (prevProps.isOpen && !this.props.isOpen) {\r\n            this.removeEventsOnDocument();\r\n        }\r\n    }\r\n\r\n    private setEventsOnDocument() {\r\n        window.addEventListener('resize', this.updateOffset, true);\r\n        window.addEventListener('scroll', this.updateOffset, true);\r\n\r\n        if (this.dropRef && this.dropRef.current) {\r\n            const config = {attributes: false, childList: true, subtree: true};\r\n            this.parentMutationObserver = new MutationObserver(this.updateOffset);\r\n            this.parentMutationObserver.observe(this.dropRef.current, config);\r\n        }\r\n    }\r\n\r\n    private removeEventsOnDocument() {\r\n        window.removeEventListener('scroll', this.updateOffset, true);\r\n        window.removeEventListener('resize', this.updateOffset, true);\r\n\r\n        if (this.parentMutationObserver) {\r\n            this.parentMutationObserver.disconnect();\r\n        }\r\n    }\r\n\r\n    private updateOffset() {\r\n        if (this.props.buttonRef?.current) {\r\n            this.setState({\r\n                offset: this.props.buttonRef?.current?.getBoundingClientRect(),\r\n            });\r\n        }\r\n    }\r\n\r\n    private canRenderDrop() {\r\n        return this.dropRef.current && this.props.isOpen && !!this.props.positions.length;\r\n    }\r\n\r\n    private calculateStyleOffset(): React.CSSProperties {\r\n        let newDomPosition: IDomPositionCalculatorReturn = {};\r\n        if (this.canRenderDrop()) {\r\n            const buttonOffset: ClientRect | DOMRect =\r\n                (this.props.buttonRef.current && this.props.buttonRef.current.getBoundingClientRect()) ||\r\n                this.state.offset;\r\n            const dropOffset: ClientRect | DOMRect = this.dropRef.current.getBoundingClientRect();\r\n            const relativeParent =\r\n                this.props.buttonRef?.current.closest(this.props.parentSelector) ??\r\n                this.props.buttonRef?.current.parentElement;\r\n\r\n            const parentOffset = relativeParent.getBoundingClientRect();\r\n\r\n            const boundingLimit: IBoundingLimit = {\r\n                maxY: Math.min(parentOffset?.bottom, window.innerHeight),\r\n                minY: Math.max(parentOffset?.top, 0),\r\n                maxX: Math.min(parentOffset?.right, window.innerWidth),\r\n                minX: Math.max(parentOffset?.left, 0),\r\n            };\r\n\r\n            // Calculate the projection of the next drop position or the last one if no position available\r\n            let index = 0;\r\n            const dropOffsetPrime = {\r\n                ...dropOffset,\r\n                width: Math.max(dropOffset.width, this.props.minWidth),\r\n                height: Math.max(dropOffset.height, this.props.minHeight),\r\n            };\r\n\r\n            while (_.isEmpty(newDomPosition) && index < this.props.positions.length) {\r\n                const validator = DomPositionCalculator[this.props.positions[index]];\r\n                newDomPosition = (validator && validator(buttonOffset, dropOffsetPrime, boundingLimit, {})) || {};\r\n                index += 1;\r\n            }\r\n\r\n            if (_.isEmpty(newDomPosition)) {\r\n                newDomPosition = DomPositionCalculator[this.lastPosition.position](\r\n                    buttonOffset,\r\n                    dropOffsetPrime,\r\n                    boundingLimit,\r\n                    this.lastPosition\r\n                );\r\n            }\r\n\r\n            const {style} = newDomPosition;\r\n            if (style) {\r\n                if (style.top < boundingLimit.minY) {\r\n                    style.top = Math.max(boundingLimit.minY, style.top as number);\r\n                } else {\r\n                    style.top =\r\n                        Math.min(boundingLimit.maxY, (style.top as number) + dropOffset.height) - dropOffset.height;\r\n                }\r\n                if (style.left < boundingLimit.minX) {\r\n                    style.left = Math.max(boundingLimit.minX, style.left as number);\r\n                } else {\r\n                    style.left =\r\n                        Math.min(boundingLimit.maxX, (style.left as number) + dropOffset.width) - dropOffset.width;\r\n                }\r\n            }\r\n\r\n            // Set drop size same as the container\r\n            if (this.props.hasSameWidth) {\r\n                newDomPosition.style = {\r\n                    ...style,\r\n                    left: buttonOffset.left,\r\n                    width: buttonOffset.width,\r\n                };\r\n            }\r\n\r\n            // Restrict the max-width to the inner width of the closest relatively positioned ancestor\r\n            if (relativeParent) {\r\n                const {paddingLeft, paddingRight} = getComputedStyle(relativeParent) ?? {};\r\n                newDomPosition.style = {\r\n                    ...newDomPosition.style,\r\n                    maxWidth: parentOffset.width - (parseFloat(paddingLeft) + parseFloat(paddingRight)),\r\n                };\r\n\r\n                // Don't show if no space to render the drop target inside the window\r\n                if (dropOffset.height > window.innerHeight) {\r\n                    return {};\r\n                }\r\n\r\n                this.lastPosition = newDomPosition.lastPosition;\r\n                return newDomPosition.style;\r\n            }\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const selector: any = this.props.selector || Defaults.DROP_ROOT;\r\n        const drop: React.ReactNode = this.props.renderDrop(\r\n            {\r\n                position: 'absolute',\r\n                display: 'inline-block',\r\n                ...{\r\n                    ...this.calculateStyleOffset(),\r\n                    visibility: this.canRenderDrop() ? 'visible' : 'hidden',\r\n                },\r\n            },\r\n            this.dropRef,\r\n            this.lastPosition\r\n        );\r\n\r\n        return ReactDOM.createPortal(drop, document.querySelector(selector));\r\n    }\r\n}\r\n\r\nexport const DropPod: React.ForwardRefExoticComponent<IDropPodProps &\r\n    React.RefAttributes<HTMLElement>> = React.forwardRef((props: IDropPodProps, ref: React.RefObject<HTMLElement>) => (\r\n    <RDropPod {...props} buttonRef={ref} />\r\n));\r\n"}}]);
//# sourceMappingURL=308.bundle.js.map