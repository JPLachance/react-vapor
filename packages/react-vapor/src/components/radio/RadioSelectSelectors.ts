import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IRadioSelectState, radioSelectInitialState} from './RadioSelectReducers';

const get = (state: IReactVaporState, {id}: {id: string}): IRadioSelectState => {
    return _.findWhere(state.radioSelects, {id}) || radioSelectInitialState;
};

const getRadioSelect = createSelector(
    get,
    (radioSelect: IRadioSelectState) => radioSelect && radioSelect
);

const getValue = createSelector(
    get,
    (radioSelect: IRadioSelectState) => radioSelect && radioSelect.value
);

export const RadioSelectSelectors = {
    get,
    getValue,
    getRadioSelect,
};
