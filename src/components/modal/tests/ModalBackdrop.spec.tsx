import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {IModalBackdropProps, ModalBackdrop} from '../ModalBackdrop';

describe('ModalBackdrop', () => {

    describe('<ModalBackdrop />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <ModalBackdrop />,
                );
            }).not.toThrow();
        });
    });

    describe('<ModalBackdrop />', () => {
        let modalBackdrop: ReactWrapper<IModalBackdropProps, any>;

        beforeEach(() => {
            modalBackdrop = mount(
                <ModalBackdrop />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            modalBackdrop.unmount();
            modalBackdrop.detach();
        });

        it('should set "closed" class when display prop is false or not specified', () => {
            const container = modalBackdrop.find('div').first();
            expect(container.hasClass('closed')).toBe(true);

            modalBackdrop.setProps({display: false});
            modalBackdrop.mount();
            expect(container.hasClass('closed')).toBe(true);
        });

        it('should not set "closed" class when display prop is true', () => {
            const container = modalBackdrop.find('div').first();
            expect(container.hasClass('closed')).toBe(true);

            modalBackdrop.setProps({display: true});
            modalBackdrop.mount();
            expect(container.hasClass('closed')).toBe(false);
        });

        it('should set "prompt-backdrop" class when isPrompt prop is passed', () => {
            const container = modalBackdrop.find('div').first();
            expect(container.hasClass('prompt-backdrop')).toBe(false);

            modalBackdrop.setProps({isPrompt: true});
            modalBackdrop.mount();
            expect(container.hasClass('prompt-backdrop')).toBe(true);
        });

        it('should call onClick on click when onClick prop is set', () => {
            const clickSpy = jasmine.createSpy('onClick');

            modalBackdrop.simulate('click');
            expect(clickSpy).not.toHaveBeenCalled();

            modalBackdrop.setProps({onClick: clickSpy});
            modalBackdrop.mount();
            modalBackdrop.simulate('click');
            expect(clickSpy).toHaveBeenCalledTimes(1);
        });

        it('should call handleClick when user hits escape and the modal is the last one opened', () => {
            jasmine.clock().install();
            const handleClickSpy = spyOn<any>(modalBackdrop.instance(), 'handleClick');

            modalBackdrop.setProps({lastOpened: true});
            jasmine.clock().tick(5);

            const event = document.createEvent('Event');
            (event as any).key = 'Escape';
            event.initEvent('keydown', true, true);
            document.dispatchEvent(event);

            expect(handleClickSpy).toHaveBeenCalledTimes(1);
            jasmine.clock().uninstall();
        });

        it('should call not handleClick when user hits escape and the modal is not the last one opened', () => {
            const handleClickSpy = spyOn<any>(modalBackdrop.instance(), 'handleClick');

            const event = document.createEvent('Event');
            (event as any).key = 'Escape';
            event.initEvent('keydown', true, true);
            document.dispatchEvent(event);

            expect(handleClickSpy).toHaveBeenCalledTimes(0);
        });

        it('should not call handleClick when user hits another key', () => {
            const handleClickSpy = spyOn<any>(modalBackdrop.instance(), 'handleClick');

            const event = document.createEvent('Event');
            (event as any).key = 'j';
            event.initEvent('keydown', true, true);
            document.dispatchEvent(event);

            expect(handleClickSpy).not.toHaveBeenCalled();
        });
    });
});
