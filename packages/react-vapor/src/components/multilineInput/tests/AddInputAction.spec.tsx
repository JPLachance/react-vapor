import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {AddInputAction, IAddInputActionProps} from '../AddInputAction';

describe('AddInputAction', () => {
    it('should render without errors', () => {
        expect(() => {
            shallow(<AddInputAction />);
        }).not.toThrow();
    });

    describe('<AddInputAction />', () => {
        let addInput: ReactWrapper<IAddInputActionProps, any>;

        beforeEach(() => {
            addInput = mount(<AddInputAction />);
        });

        afterEach(() => {
            addInput.unmount(); // <-- new
        });

        it('should render title prop if prop is set', () => {
            const title = 'a title';

            expect(addInput.find(`[title="${title}"]`)).toHaveLength(0);

            addInput.setProps({title}).mount().update();

            expect(addInput.find(`[title="${title}"]`).length).toBeGreaterThanOrEqual(1);
        });

        it('should call onClick props on button click if prop is set', () => {
            const clickSpy = jest.fn();

            const innerAction = addInput.find('.input-actions');
            innerAction.simulate('click');

            expect(clickSpy.mock.calls).toHaveLength(0);

            addInput.setProps({onClick: clickSpy}).mount();
            innerAction.simulate('click');

            expect(clickSpy.mock.calls).toHaveLength(1);
        });
    });
});
