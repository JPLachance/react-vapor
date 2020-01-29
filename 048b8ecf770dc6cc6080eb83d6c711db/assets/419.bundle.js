(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{1525:function(r,e,n){"use strict";n.r(e),e.default='import * as React from \'react\';\r\nimport {ExampleComponent} from \'../../../../docs/src/components/ComponentsInterface\';\r\nimport {Button} from \'../../button/Button\';\r\nimport {Section} from \'../../section/Section\';\r\nimport {Svg} from \'../../svg/Svg\';\r\nimport {BasicHeader} from \'../BasicHeader\';\r\nimport {BreadcrumbHeader} from \'../BreadcrumbHeader\';\r\nimport {actions, defaultBreadcrumb, defaultTabs, defaultTitle, link1, link2} from \'./ExamplesUtils\';\r\n\r\nexport const HeaderExamples: ExampleComponent = () => (\r\n    <Section>\r\n        <SimpleHeader />\r\n        <BreadcrumbHeaders />\r\n    </Section>\r\n);\r\n\r\n// start-print\r\n\r\nconst SimpleHeader: React.FunctionComponent = () => (\r\n    <Section level={2} title="Simple Header">\r\n        <Section level={3} title="Basic header with actions and tabs">\r\n            <BasicHeader\r\n                title={defaultTitle}\r\n                description="Simple description for the title"\r\n                actions={actions}\r\n                tabs={defaultTabs}\r\n            />\r\n        </Section>\r\n    </Section>\r\n);\r\n\r\nconst BreadcrumbHeaders: React.FunctionComponent = () => (\r\n    <Section level={2} title="Breadcrumb headers">\r\n        <Section level={3} title="Breadcrumb with a node as action and tabs">\r\n            <BreadcrumbHeader\r\n                breadcrumb={defaultBreadcrumb}\r\n                description="Simple description for the title"\r\n                tabs={defaultTabs}\r\n                actions={[\r\n                    {\r\n                        content: (\r\n                            <Button>\r\n                                <Svg svgName={\'add\'} className="icon mod-lg mod-align-with-text" />\r\n                            </Button>\r\n                        ),\r\n                    },\r\n                ]}\r\n            />\r\n        </Section>\r\n        <Section level={3} title="Breadcrumb header without border bottom">\r\n            <BreadcrumbHeader\r\n                breadcrumb={defaultBreadcrumb}\r\n                description="Simple description for the title"\r\n                hasBorderBottom={false}\r\n            />\r\n        </Section>\r\n        <Section level={3} title="Breadcrumb header with a section without link">\r\n            <BreadcrumbHeader\r\n                breadcrumb={{...defaultBreadcrumb, links: [link1, {name: \'not a link\'}, link2]}}\r\n                description="Simple description for the title"\r\n                hasBorderBottom={false}\r\n            />\r\n        </Section>\r\n    </Section>\r\n);\r\n'}}]);
//# sourceMappingURL=419.bundle.js.map