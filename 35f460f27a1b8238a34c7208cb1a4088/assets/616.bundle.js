(window.webpackJsonp=window.webpackJsonp||[]).push([[616],{1721:function(n,t,o){"use strict";o.r(t),t.default='import * as React from \'react\';\r\n\r\nimport {ExampleComponent} from \'../../../../docs/src/components/ComponentsInterface\';\r\nimport {Section} from \'../../section/Section\';\r\nimport {OptionsCycleConnected} from \'../OptionsCycleConnected\';\r\n\r\nexport const OptionsCycleExamples: ExampleComponent = () => <OptionsCycles />;\r\n\r\nconst OPTIONS = [\'Option 1\', \'Option 2\', \'Option 3\', \'Option 4\'];\r\n\r\nconst OptionsCycles: React.FunctionComponent = () => (\r\n    <Section>\r\n        <Section level={2} title="Option cycle">\r\n            <OptionsCycleConnected id="Cycle-1" options={OPTIONS} />\r\n        </Section>\r\n\r\n        <Section level={2} title="Options Cycle starting at 2 with no wrap around">\r\n            <OptionsCycleConnected id="Cycle-2" options={OPTIONS} startAt={1} />\r\n        </Section>\r\n\r\n        <Section level={2} title="Option cycle with custom styles">\r\n            <OptionsCycleConnected\r\n                id="Cycle-3"\r\n                options={OPTIONS}\r\n                previousClassName="btn mod-border w4"\r\n                buttonClassName="btn ml1"\r\n                nextClassName="btn mod-border ml1 w4"\r\n            />\r\n        </Section>\r\n    </Section>\r\n);\r\n'}}]);
//# sourceMappingURL=616.bundle.js.map