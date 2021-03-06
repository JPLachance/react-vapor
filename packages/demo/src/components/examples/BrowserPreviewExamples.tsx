import * as React from 'react';
import {BrowserPreview, BrowserPreviewEmpty, BrowserPreviewError, Section, SplitLayout, Svg} from 'react-vapor';

export const BrowserPreviewExamples: React.FunctionComponent = () => (
    <Section>
        <Section level={2} title="Browser Preview container">
            <SplitLayout
                leftChildren={<div />}
                rightChildren={
                    <div className="p3">
                        <BrowserPreview />
                    </div>
                }
            />
        </Section>
        <Section level={2} title="Browser Preview with custom title">
            <SplitLayout
                leftChildren={<div />}
                rightChildren={
                    <div className="p3">
                        <BrowserPreview title={'Custom title! Custom title!'} />
                    </div>
                }
            />
        </Section>
        <Section level={2} title="Browser Preview with custom content">
            <SplitLayout
                leftChildren={<div />}
                rightChildren={
                    <div className="p3">
                        <BrowserPreview>
                            <h1>Hello World</h1>
                            <p>Here's the description</p>
                        </BrowserPreview>
                    </div>
                }
            />
        </Section>
        <Section level={2} title="Browser Preview with error message">
            <SplitLayout
                leftChildren={<div />}
                rightChildren={
                    <div className="p3">
                        <BrowserPreview>
                            <BrowserPreviewError errorMessage="The Query expression within the Reference Cases field is not valid." />
                        </BrowserPreview>
                    </div>
                }
            />
        </Section>
        <Section level={2} title="Browser Preview with empty state">
            <SplitLayout
                leftChildren={<div />}
                rightChildren={
                    <div className="p3">
                        <BrowserPreview>
                            <BrowserPreviewEmpty onClick={() => alert('Clicked!')}>
                                <span>
                                    Select a <span className="bolder">Query Pipeline</span>
                                </span>
                                <span>to see the preview</span>
                            </BrowserPreviewEmpty>
                        </BrowserPreview>
                    </div>
                }
            />
        </Section>
        <Section level={2} title="Browser Preview with empty state and custom image">
            <SplitLayout
                leftChildren={<div />}
                rightChildren={
                    <div className="p3">
                        <BrowserPreview>
                            <BrowserPreviewEmpty
                                onClick={() => alert('Wow!')}
                                image={<Svg svgName="arrow-top-slim" className="block" />}
                            >
                                <span>Look at this browser-like header!</span>
                            </BrowserPreviewEmpty>
                        </BrowserPreview>
                    </div>
                }
            />
        </Section>
    </Section>
);
