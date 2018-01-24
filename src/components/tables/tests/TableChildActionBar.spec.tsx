import * as React from 'react';
import * as _ from 'underscore';
import { tablePropsMock } from './TableTestCommon';
import { TableChildActionBar } from '../table-children/TableChildActionBar';
import { mount } from 'enzyme';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Store, Provider } from 'react-redux';
import { ITableProps } from '../Table';
import { ActionBarConnected } from '../../actions/ActionBarConnected';
import { FilterBoxConnected } from '../../filterBox/FilterBoxConnected';
import { DropdownSearchConnected } from '../../dropdownSearch/DropdownSearchConnected';

describe('<TableChildActionBar />', () => {
  let store: Store<IReactVaporState>;

  beforeEach(() => {
    store = TestUtils.buildStore();
  });

  afterEach(() => {
    store.dispatch(clearState());
  });

  describe('render', () => {
    const mountComponentWithProps = (props: ITableProps) => {
      return mount(
        <Provider store={store}>
          <TableChildActionBar {...props} />
        </Provider>,
        { attachTo: document.getElementById('App') },
      );
    };

    describe('render without error', () => {
      it('should render without error if basic props are passed', () => {
        expect(() => {
          mountComponentWithProps(tablePropsMock);
        }).not.toThrow();
      });

      it('should render without error if an actionBar prop is passed', () => {
        expect(() => {
          mountComponentWithProps({ ...tablePropsMock, actionBar: true });
        }).not.toThrow();
      });

      it('should render without error if an actionBar prop and a filter prop are passed', () => {
        expect(() => {
          mountComponentWithProps({ ...tablePropsMock, actionBar: true, filter: true });
        }).not.toThrow();
      });

      it('should render without error if an actionBar prop, a filter prop, and one predicate are passed', () => {
        expect(() => {
          mountComponentWithProps({
            ...tablePropsMock,
            actionBar: true,
            filter: true,
            predicates: [
              { attributeName: 'email', attributeNameFormatter: _.identity, props: {} },
            ],
          });
        }).not.toThrow();
      });

      it('should render without error if an actionBar prop, a filter prop, and two predicate are passed', () => {
        expect(() => {
          mountComponentWithProps({
            ...tablePropsMock,
            actionBar: true,
            filter: true,
            predicates: [
              { attributeName: 'email', attributeNameFormatter: _.identity, props: {} },
              { attributeName: 'userName', attributeNameFormatter: _.identity, props: {} },
            ],
          });
        }).not.toThrow();
      });
    });

    describe('render content', () => {
      it('should render with null if no action bar is passed as prop', () => {
        expect(mountComponentWithProps(tablePropsMock).html()).toBeNull();
      });

      it('should render with an action bar if there is an actionBar prop', () => {
        expect(mountComponentWithProps({ ...tablePropsMock, actionBar: true }).find(ActionBarConnected).length).toBe(1);
      });

      it('should render with an action bar and a filter inside it if there is an actionBar prop and a filter prop', () => {
        const tableActionBar = mountComponentWithProps({ ...tablePropsMock, actionBar: true, filter: true });
        expect(tableActionBar.find(ActionBarConnected).length).toBe(1);
        expect(tableActionBar.find(ActionBarConnected).find(FilterBoxConnected).length).toBe(1);
      });

      it('should render with an action bar and a predicate inside it if there is an actionBar prop and one predicate', () => {
        const tableActionBar = mountComponentWithProps({
          ...tablePropsMock,
          actionBar: true,
          predicates: [
            { attributeName: 'email', attributeNameFormatter: _.identity, props: {} },
          ],
        });
        expect(tableActionBar.find(ActionBarConnected).length).toBe(1);
        expect(tableActionBar.find(ActionBarConnected).find(DropdownSearchConnected).length).toBe(1);
      });

      it('should render with an action bar and two predicates inside it if there is an actionBar prop and two predicates', () => {
        const tableActionBar = mountComponentWithProps({
          ...tablePropsMock,
          actionBar: true,
          predicates: [
            { attributeName: 'email', attributeNameFormatter: _.identity, props: {} },
            { attributeName: 'userName', attributeNameFormatter: _.identity, props: {} },
          ],
        });
        expect(tableActionBar.find(ActionBarConnected).length).toBe(1);
        expect(tableActionBar.find(ActionBarConnected).find(DropdownSearchConnected).length).toBe(2);
      });

      it('should call onPredicateOptionClick if onOptionClickCallback of a dropdownSearch connected is called', () => {
        const onPredicateOptionClickSpy = jasmine.createSpy('onPredicateOptionClickSpy');
        const tableActionBar = mountComponentWithProps({
          ...tablePropsMock,
          onPredicateOptionClick: onPredicateOptionClickSpy,
          actionBar: true,
          predicates: [
            { attributeName: 'email', attributeNameFormatter: _.identity, props: {} },
          ],
        });
        tableActionBar.find(ActionBarConnected)
          .find(DropdownSearchConnected).first().props().onOptionClickCallBack({ value: 'test' });

        expect(onPredicateOptionClickSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
