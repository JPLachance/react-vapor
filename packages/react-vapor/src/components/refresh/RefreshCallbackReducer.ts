import {IReactVaporExampleState} from '../../../docs/Reducers';
import {IReduxAction} from '../../utils/ReduxUtils';
import {IRefreshCallbackPayload, RefreshCallbackActionType} from './RefeshCallbackActions';

export enum RefreshStatus {
    start = 'start',
    stop = 'stop',
    inProgress = 'inProgress',
}

export interface IRefreshCallbackReducerState {
    [id: string]: RefreshStatus;
}

export const refreshCallbackInitialState: IRefreshCallbackReducerState = {};

export const refreshCallBackReducer = (
    state: IRefreshCallbackReducerState = refreshCallbackInitialState,
    action: IReduxAction<IRefreshCallbackPayload>
): IRefreshCallbackReducerState => {
    switch (action.type) {
        case RefreshCallbackActionType.start:
            return {
                ...state,
                [action.payload.id]: RefreshStatus.start,
            };
        case RefreshCallbackActionType.stop:
            return {
                ...state,
                [action.payload.id]: RefreshStatus.stop,
            };
        case RefreshCallbackActionType.inProgress:
            return {
                ...state,
                [action.payload.id]: RefreshStatus.inProgress,
            };
        default:
            return state;
    }
};

const getRefreshStatus = (state: IReactVaporExampleState, {id}: {id: string}) =>
    (state.refreshCallback && state.refreshCallback[id]) || undefined;

export const RefreshStatusSelectors = {
    getRefreshStatus,
};