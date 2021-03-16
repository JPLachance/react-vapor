import {screen, waitForElementToBeRemoved} from '@testing-library/dom';
import userEvent, {specialChars} from '@testing-library/user-event';
import * as React from 'react';
import {renderModal} from 'react-vapor-test-utils';

import {ModalWizard} from '../ModalWizard';

describe('ModalWizard', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it('closes the modal when clicking on "cancel"', async () => {
        renderModal(
            <div>
                <ModalWizard id="🧙‍♂️">
                    <div>Step 1</div>
                    <div>Step 2</div>
                    <div>Step 3</div>
                </ModalWizard>
            </div>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}}
        );

        expect(screen.getByRole('dialog')).toBeInTheDocument();

        userEvent.click(screen.getByRole('button', {name: 'Cancel'}));

        await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('navigates properly through the steps when clicking on "next" and "previous" buttons', () => {
        const FunctionComponentStep = () => <div>Step 2: FunctionComponent</div>;
        class ClassComponentStep extends React.PureComponent {
            render() {
                return <div>Step 3: ClassComponent</div>;
            }
        }

        renderModal(
            <ModalWizard id="🧙‍♂️">
                <div>Step 1: ReactElement</div>
                <FunctionComponentStep />
                <ClassComponentStep />
            </ModalWizard>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}}
        );

        expect(screen.getByText(/Step 1/)).toBeVisible();
        expect(screen.getByText(/Step 2/)).not.toBeVisible();
        expect(screen.getByText(/Step 3/)).not.toBeVisible();

        userEvent.click(screen.getByRole('button', {name: 'Next'}));

        expect(screen.getByText(/Step 1/)).not.toBeVisible();
        expect(screen.getByText(/Step 2/)).toBeVisible();
        expect(screen.getByText(/Step 3/)).not.toBeVisible();

        userEvent.click(screen.getByRole('button', {name: 'Next'}));

        expect(screen.getByText(/Step 1/)).not.toBeVisible();
        expect(screen.getByText(/Step 2/)).not.toBeVisible();
        expect(screen.getByText(/Step 3/)).toBeVisible();

        userEvent.click(screen.getByRole('button', {name: 'Previous'}));

        expect(screen.getByText(/Step 1/)).not.toBeVisible();
        expect(screen.getByText(/Step 2/)).toBeVisible();
        expect(screen.getByText(/Step 3/)).not.toBeVisible();
    });

    it('calls the "onFinish" prop and close the modal when clicking on the "finish" button', async () => {
        const finishSpy = jest.fn();

        renderModal(
            <ModalWizard id="🧙‍♂️" onFinish={finishSpy}>
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizard>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}}
        );

        userEvent.click(screen.getByRole('button', {name: 'Next'}));
        userEvent.click(screen.getByRole('button', {name: 'Finish'}));

        expect(finishSpy).toHaveBeenCalledTimes(1);
        await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('calls the "onFinishAsync" prop and close the modal when clicking on the "finish" button', async () => {
        const finishSpy = jest.fn().mockResolvedValue('success!');

        renderModal(
            <ModalWizard id="🧙‍♂️" onFinishAsync={finishSpy}>
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizard>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}}
        );

        userEvent.click(screen.getByRole('button', {name: 'Next'}));
        userEvent.click(screen.getByRole('button', {name: 'Finish'}));

        expect(finishSpy).toHaveBeenCalledTimes(1);
        await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('does not call "onFinishAsync" function when onFinish is provided', async () => {
        const onFinishSpy = jest.fn();
        const onFinishAsyncSpy = jest.fn();

        renderModal(
            <ModalWizard id="🧙‍♂️" onFinish={onFinishSpy} onFinishAsync={onFinishAsyncSpy}>
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizard>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}}
        );

        userEvent.click(screen.getByRole('button', {name: 'Next'}));
        userEvent.click(screen.getByRole('button', {name: 'Finish'}));

        expect(onFinishAsyncSpy).toHaveBeenCalledTimes(0);
        await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));
    });

    it('disables the next button if the current step is invalid', () => {
        renderModal(
            <ModalWizard id="🧙‍♂️" validateStep={() => ({isValid: false})}>
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizard>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}}
        );

        expect(screen.getByRole('button', {name: 'Next'})).toBeDisabled();
    });

    it('prevents from closing the modal accidently if it has pending changes', () => {
        renderModal(
            <ModalWizard id="🧙‍♂️" isDirty>
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizard>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}}
        );

        expect(screen.queryByText('Unsaved Changes')).not.toBeInTheDocument();

        userEvent.type(screen.getByRole('dialog'), specialChars.escape);

        expect(screen.getByText('Unsaved Changes')).toBeVisible();
        expect(screen.getByText('Step 1')).toBeVisible();
    });

    it('does not prevent from closing the modal accidently if it has no pending changes', async () => {
        renderModal(
            <ModalWizard id="🧙‍♂️" isDirty={false}>
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizard>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}}
        );

        userEvent.type(screen.getByRole('dialog'), specialChars.escape);

        await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
});
