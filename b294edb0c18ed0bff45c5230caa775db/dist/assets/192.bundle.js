(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1302:function(e,n,r){"use strict";r.r(n),n.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nexport interface ChartContainerProps {\r\n    renderChart: (width: number, height: number) => React.ReactNode;\r\n}\r\n\r\nexport interface ChartBaseProps {\r\n    width: number;\r\n    height: number;\r\n}\r\n\r\nexport const ChartContainer: React.FunctionComponent<ChartContainerProps> = (props) => {\r\n    const container = React.useRef<HTMLDivElement>(null);\r\n    useDebouncedWindowResize();\r\n\r\n    const toggleSvgs = (show: boolean) => {\r\n        if (container.current) {\r\n            const svgs = container.current.querySelectorAll('svg');\r\n            _.each(svgs, (svg: SVGElement) => (svg.style.display = show ? 'block' : 'none'));\r\n        }\r\n    };\r\n\r\n    toggleSvgs(false);\r\n    const {width, height} = container.current?.getBoundingClientRect() ?? {width: 0, height: 0};\r\n    toggleSvgs(true);\r\n\r\n    return (\r\n        <div className=\"full-content\" {..._.omit(props, 'renderChart')} ref={container}>\r\n            {width > 0 && height > 0 ? props.renderChart(width, height) : null}\r\n        </div>\r\n    );\r\n};\r\nChartContainer.displayName = 'ChartContainer';\r\n\r\nconst useForceUpdate = () => React.useState(undefined)[1];\r\nconst useDebouncedWindowResize = () => {\r\n    const forceUpdate = useForceUpdate();\r\n    React.useEffect(() => {\r\n        const debouncedResize = () => window.requestAnimationFrame(forceUpdate);\r\n\r\n        window.addEventListener('resize', debouncedResize);\r\n        forceUpdate(1);\r\n\r\n        return () => window.removeEventListener('resize', debouncedResize);\r\n    }, [forceUpdate]);\r\n};\r\n"}}]);
//# sourceMappingURL=192.bundle.js.map