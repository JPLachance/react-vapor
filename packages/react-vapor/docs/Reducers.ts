import * as Redux from 'redux';

import {
    IListBoxExampleCompositeState,
    listBoxExampleReducer,
} from '../src/components/listBox/examples/ListBoxExampleReducer';
import {IReactVaporState} from '../src/ReactVapor';
import {ReactVaporReducers} from '../src/ReactVaporReducers';

export interface IReactVaporExampleState extends IReactVaporState {
    listBoxExampleState?: IListBoxExampleCompositeState;
}

export const ExamplesReducers: Redux.Reducer<IReactVaporExampleState> = Redux.combineReducers<IReactVaporExampleState>({
    ...ReactVaporReducers,
    listBoxExampleState: listBoxExampleReducer,
});
