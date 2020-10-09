import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {IActionOptions} from '../Action';
import {IPrimaryActionProps, PrimaryAction} from '../PrimaryAction';

describe('Actions', () => {
    let actions: IActionOptions[];

    beforeAll(() => {
        actions = [
            {
                name: 'action',
                link: 'http://google.com',
                target: '_blank',
                enabled: true,
            },
            {
                name: 'action2',
                trigger: jest.fn(),
                enabled: true,
            },
        ];
    });

    it('should render without errors', () => {
        expect(() => {
            shallow(<PrimaryAction action={actions[0]} />);
        }).not.toThrow();
    });

    describe('<PrimaryAction />', () => {
        let primaryAction: ReactWrapper<IPrimaryActionProps, any>;

        beforeEach(() => {
            primaryAction = mount(<PrimaryAction action={actions[0]} />);
        });

        afterEach(() => {
            if (primaryAction.exists()) {
                primaryAction.unmount(); // <-- new
            }
        });

        it('should get an action as a prop', () => {
            const actionProp = primaryAction.props().action;

            expect(actionProp).toBeDefined();
            expect(actionProp).toEqual(expect.objectContaining(actions[0]));
        });

        it('should display a <LinkAction /> component if the action is a link action', () => {
            expect(primaryAction.find('LinkAction')).toHaveLength(1);
            expect(primaryAction.find('TriggerAction')).toHaveLength(0);
        });

        it('should display a <TriggerAction /> component if the action is a trigger action', () => {
            primaryAction.setProps({action: actions[1]});

            expect(primaryAction.find('TriggerAction')).toHaveLength(1);
            expect(primaryAction.find('LinkAction')).toHaveLength(0);
        });
    });
});
