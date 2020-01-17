(window.webpackJsonp=window.webpackJsonp||[]).push([[897],{1981:function(e,n,t){"use strict";t.r(n),n.default='import * as React from \'react\';\r\n\r\nimport {ExampleComponent} from \'../../../../docs/src/components/ComponentsInterface\';\r\nimport {Button} from \'../../button/Button\';\r\nimport {Section} from \'../../section/Section\';\r\nimport {SyncFeedback, SyncFeedbackState} from \'../../syncFeedback/SyncFeedback\';\r\nimport {UserFeedback} from \'../UserFeedback\';\r\n\r\nexport const FeedBackExamples: ExampleComponent = () => (\r\n    <Section title="FeedBack Examples">\r\n        <UserFeedBackExamples />\r\n        <SyncFeedBackExamples />\r\n    </Section>\r\n);\r\n\r\n// start-print\r\n\r\nconst UserFeedBackExamples: React.FunctionComponent = () => (\r\n    <Section\r\n        level={2}\r\n        title="UserFeedBacks"\r\n        description="UserFeedBacks will render with these state but won\'t render while in \'VALID\' state."\r\n    >\r\n        <Section level={3}>\r\n            <Button name="Warning Feedback" enabled className="btn" />\r\n            <UserFeedback\r\n                extraClasses={[\'mt1\']}\r\n                state="WARNING"\r\n                displayOnShow="block"\r\n                feedbackText="UserFeedback on state WARNING"\r\n            />\r\n        </Section>\r\n        <Section level={3}>\r\n            <Button name="Error FeedBack" enabled className="btn" />\r\n            <UserFeedback\r\n                extraClasses={[\'mt1\']}\r\n                state="ERROR"\r\n                displayOnShow="block"\r\n                feedbackText="UserFeedback on state ERROR"\r\n            />\r\n        </Section>\r\n        <Section level={3}>\r\n            <Button name="Side FeedBack" enabled className="btn" />\r\n            <UserFeedback\r\n                extraClasses={[\'ml1\']}\r\n                state="WARNING"\r\n                displayOnShow="inline-block"\r\n                feedbackText="UserFeedback placed beside its related element"\r\n            />\r\n        </Section>\r\n        <Section level={3}>\r\n            <Button name="styled FeedBack" enabled className="btn" />\r\n            <UserFeedback\r\n                extraClasses={[\'ml2\', \'bold\', \'italic\']}\r\n                state="WARNING"\r\n                displayOnShow="inline-block"\r\n                feedbackText="extra classes for styling can be passed to the extraClasses prop"\r\n            />\r\n        </Section>\r\n    </Section>\r\n);\r\n\r\nconst SyncFeedBackExamples: React.FunctionComponent = () => (\r\n    <Section\r\n        level={2}\r\n        title="SyncFeedBacks"\r\n        description="SyncFeedBack will render with these states but won\'t render while in \'NONE\' state."\r\n    >\r\n        <Section level={3} title="An invisible feedback" className={\'mb3\'}>\r\n            <SyncFeedback state={SyncFeedbackState.NONE} />\r\n        </Section>\r\n\r\n        <Section level={3} title="SyncFeedBacks with their default messages">\r\n            <SyncFeedback state={SyncFeedbackState.SYNCING} />\r\n            <SyncFeedback state={SyncFeedbackState.SUCCESS} />\r\n            <SyncFeedback state={SyncFeedbackState.ERROR} />\r\n        </Section>\r\n\r\n        <Section level={3} title="SyncFeedBack with custom messages">\r\n            <SyncFeedback\r\n                state={SyncFeedbackState.SYNCING}\r\n                feedback="This message is a SyncFeedback component on state SYNCING"\r\n            />\r\n            <SyncFeedback\r\n                state={SyncFeedbackState.SUCCESS}\r\n                feedback="This message is a SyncFeedback component on state SUCCESS"\r\n            />\r\n            <SyncFeedback\r\n                state={SyncFeedbackState.ERROR}\r\n                feedback="This message is a SyncFeedback component on state ERROR"\r\n            />\r\n        </Section>\r\n    </Section>\r\n);\r\n'}}]);
//# sourceMappingURL=897.bundle.js.map