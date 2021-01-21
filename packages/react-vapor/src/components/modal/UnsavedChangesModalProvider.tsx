import * as React from 'react';

import {ConfirmationModalProvider, IConfirmationModalChildrenProps} from './ConfirmationModalProvider';

const defaultModalTitle = 'Unsaved Changes';
const defaultModalClasses = ['mod-prompt', 'mod-fade-in-scale'];
const defaultModalDescription =
    'Are you sure you want to leave this page without saving? All unsaved changes will be lost.';
const defaultConfirmButtonText = 'Exit without applying changes';

export interface IUnsavedChangesModalProviderProps {
    isDirty: boolean;
    modalTitle?: string;
    className?: string[];
    children: (props: IConfirmationModalChildrenProps) => React.ReactNode;
    unsavedChangesDescription?: string;
    confirmButtonText?: string;
}

export const UnsavedChangesModalProvider: React.FunctionComponent<IUnsavedChangesModalProviderProps> = ({
    isDirty,
    children,
    modalTitle = defaultModalTitle,
    className = defaultModalClasses,
    unsavedChangesDescription = defaultModalDescription,
    confirmButtonText = defaultConfirmButtonText,
}) => (
    <ConfirmationModalProvider
        className={className}
        shouldConfirm={isDirty}
        modalTitle={modalTitle}
        modalBodyChildren={<div>{unsavedChangesDescription}</div>}
        confirmButtonText={confirmButtonText}
    >
        {(options) => children(options)}
    </ConfirmationModalProvider>
);
