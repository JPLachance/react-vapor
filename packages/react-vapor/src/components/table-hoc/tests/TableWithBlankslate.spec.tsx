import {shallow} from 'enzyme';
import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';

import {BlankSlateWithTable} from '../../blankSlate';
import {ITableHOCProps, TableHOC} from '../TableHOC';
import {TableSelectors} from '../TableSelectors';
import {tableWithBlankSlate} from '../TableWithBlankSlate';

describe('TableWithBlankSlate', () => {
    const TableWithBlankSlate: ReturnType<ReturnType<typeof tableWithBlankSlate>> = _.compose(tableWithBlankSlate())(
        TableHOC
    );

    const basicProps: ITableHOCProps = {
        id: 'a',
        data: [],
        renderBody: _.identity,
    };

    it('should not throw', () => {
        expect(() => {
            shallowWithState(<TableWithBlankSlate {...basicProps} />, {});
            shallowWithState(<TableWithBlankSlate {...basicProps} data={[{value: 'a'}]} />, {});
        }).not.toThrow();
    });

    it('should render a TableHOC', () => {
        const wrapper = shallowWithState(<TableWithBlankSlate {...basicProps} />, {}).dive();

        expect(wrapper.find(TableHOC).exists()).toBe(true);
    });

    it('should override the TableHOC renderBody method when the data is empty and "renderBlankSlateOnly" is false', () => {
        const renderSpy = jest.fn();
        const wrapper = shallowWithState(<TableWithBlankSlate {...basicProps} renderBody={renderSpy} />, {}).dive();
        const tableRenderBody = wrapper.find(TableHOC).prop('renderBody') as () => any;
        tableRenderBody();

        expect(renderSpy).not.toHaveBeenCalled();
    });

    it('should render a BlankSlateWithTable when the data is empty', () => {
        const renderedBody = shallow(
            <div>
                {shallowWithState(<TableWithBlankSlate {...basicProps} />, {})
                    .dive()
                    .prop<() => React.ReactNode>('renderBody')()}
            </div>
        ).children();

        expect(renderedBody.type()).toBe(BlankSlateWithTable);
    });

    it('should render the custom blankslate provided in the "renderBlankslate" prop if it exists and the data is empty', () => {
        const MyCustomBlankslate = () => <div>I prefer this blankslate over the default one.</div>;
        const renderedBody = shallow(
            <div>
                {shallowWithState(<TableWithBlankSlate {...basicProps} renderBlankSlate={<MyCustomBlankslate />} />, {})
                    .dive()
                    .prop<() => React.ReactNode>('renderBody')()}
            </div>
        ).children();

        expect(renderedBody.type()).toBe(MyCustomBlankslate);
    });

    it('should not override the TableHOC renderBody method when there is data', () => {
        const renderSpy = jest.fn();
        const wrapper = shallowWithState(
            <TableWithBlankSlate {...basicProps} data={[{value: 'a'}]} renderBody={renderSpy} />,
            {}
        ).dive();
        const tableRenderBody = wrapper.find(TableHOC).prop('renderBody') as () => any;
        tableRenderBody();

        expect(renderSpy).toHaveBeenCalledTimes(1);
    });

    it('should update the renderBody when the data is empty', () => {
        const renderSpy = jest.fn();
        shallowWithState(<TableWithBlankSlate {...basicProps} renderBody={renderSpy} />, {}).dive();

        expect(renderSpy).toHaveBeenCalledTimes(0);
    });

    it('should not render a BlankSlate when the data is null', () => {
        const renderSpy = jest.fn();
        shallowWithState(<TableWithBlankSlate {...basicProps} data={null} renderBody={renderSpy} />, {})
            .dive()
            .dive();

        expect(renderSpy).toHaveBeenCalledTimes(1);
    });

    it('should render the first BlankSlate when the data is empty', () => {
        const expectedTitle = 'First';
        const TableWithDoubleBlankSlate = _.compose(
            tableWithBlankSlate({title: expectedTitle}),
            tableWithBlankSlate({title: 'Second'})
        )(TableHOC);

        const wrapper = shallowWithState(<TableWithDoubleBlankSlate {...basicProps} />, {}).dive();

        expect(wrapper.prop<() => JSX.Element>('renderBody')().props.title).toBe(expectedTitle);
    });

    describe('when "renderBlankSlateOnly" prop is set to true', () => {
        let getIsEmptySelectorSpy: jest.SpyInstance;

        beforeAll(() => {
            getIsEmptySelectorSpy = jest.spyOn(TableSelectors, 'getIsTruelyEmpty');
        });

        it('should not render anything else than the blankslate if the table is truely empty', () => {
            getIsEmptySelectorSpy.mockReturnValue(true);
            const wrapper = shallowWithState(<TableWithBlankSlate {...basicProps} renderBlankSlateOnly />, {}).dive();

            expect(wrapper.type()).toBe(BlankSlateWithTable);
        });

        it('should render the blank slate in the table body if the table is not truely empty', () => {
            getIsEmptySelectorSpy.mockReturnValue(false);
            const wrapper = shallowWithState(<TableWithBlankSlate {...basicProps} renderBlankSlateOnly />, {}).dive();

            expect(wrapper.type()).toBe(BlankSlateWithTable);
        });

        it('does not render the blank slate in the table body when the table is loading', () => {
            getIsEmptySelectorSpy.mockReturnValue(false);
            const wrapper = shallowWithState(
                <TableWithBlankSlate {...basicProps} renderBlankSlateOnly isLoading />,
                {}
            ).dive();

            expect(wrapper.type()).toBe(TableHOC);
        });
    });
});
