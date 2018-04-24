import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {Checkbox} from '../Checkbox';
import {GroupableCheckboxConnected, IGroupableCheckboxOwnProps} from '../GroupableCheckboxConnected';

describe('GroupableCheckbox', () => {
  describe('<GroupableCheckboxConnected />', () => {
    let groupableCheckbox: ReactWrapper<IGroupableCheckboxOwnProps, any>;
    let wrapper: ReactWrapper<any, any>;
    let store: Store<IReactVaporState>;
    const parentId = 'checkboxParent1';

    const renderChildCheckbox = (props: IGroupableCheckboxOwnProps) => {
      wrapper = mount(
        <Provider store={store}>
          <GroupableCheckboxConnected
            id={parentId + '1'}
            parentId={parentId}
            isParent={false}
          />
        </Provider>,
        { attachTo: document.getElementById('App') },
      );
      groupableCheckbox = wrapper.find(Checkbox).first();
    };

    const renderParentCheckbox = (props: IGroupableCheckboxOwnProps) => {
      wrapper = mount(
        <Provider store={store}>
          <GroupableCheckboxConnected
            id={parentId}
            isParent={true}
          />
        </Provider>,
        { attachTo: document.getElementById('App') },
      );
      groupableCheckbox = wrapper.find(Checkbox).first();
    };

    beforeEach(() => {
      store = TestUtils.buildStore();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    
  });
});
