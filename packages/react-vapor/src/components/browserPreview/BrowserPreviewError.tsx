import classNames from 'classnames';
import * as React from 'react';

import {BrowserPreview} from './BrowserPreview';
import {Svg} from '../svg';

export interface BrowserPreviewErrorProps {
    onClick?: () => void;
    description?: string;
    errorMessage?: string;
}

export const BrowserPreviewError: React.FunctionComponent<BrowserPreviewErrorProps> = ({
    onClick,
    description,
    errorMessage,
}) => (
    <BrowserPreview>
        <div
            onClick={onClick}
            className={classNames('browser-preview__state flex flex-column center-align', {'cursor-pointer': onClick})}
        >
            {/* TODO: new svg WIP */}
            <Svg svgName="view" className="block" />
            <p className="medium-title-text center bolder">{description ?? 'Unable to show preview'}</p>
            {errorMessage ? <p className="center mt1 browser-preview__state--error">{errorMessage}</p> : null}
        </div>
    </BrowserPreview>
);
