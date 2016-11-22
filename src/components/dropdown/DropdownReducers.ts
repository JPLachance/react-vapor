import { IReduxAction } from '../../utils/ReduxUtils';
import { DropdownActions } from './DropdownActions';
import { IReduxActionPayload } from '../../ReactVapor';
import * as _ from 'underscore';

export interface IDropdownState {
  id: string;
  opened: boolean;
}

export const dropdownInitialState: IDropdownState = { id: undefined, opened: false };
export const dropdownsInitialState: IDropdownState[] = [];

export const dropdownReducer = (state: IDropdownState = dropdownInitialState,
  action: (IReduxAction<IReduxActionPayload>)): IDropdownState => {
  switch (action.type) {
    case DropdownActions.toggle:
      if (state.id !== action.payload.id) {
        return state;
      }

      return {
        id: state.id,
        opened: !state.opened,
      };
    case DropdownActions.close:
      if (state.id !== action.payload.id) {
        return state;
      }

      return {
        id: state.id,
        opened: false
      };
    case DropdownActions.add:
      return {
        id: action.payload.id,
        opened: false
      };
    default:
      return state;
  }
};

export const dropdownsReducer = (state: IDropdownState[] = dropdownsInitialState,
  action: IReduxAction<IReduxActionPayload>): IDropdownState[] => {
  switch (action.type) {
    case DropdownActions.toggle:
    case DropdownActions.close:
      return state.map(dropdown => dropdownReducer(dropdown, action));
    case DropdownActions.add:
      return [
        ...state,
        dropdownReducer(undefined, action)
      ];
    case DropdownActions.remove:
      return _.reject(state, (dropdown) => {
        return action.payload.id === dropdown.id;
      });
    default:
      return state;
  }
};
