import * as React from 'react';
import * as _ from 'underscore';
import {ExamplesStore} from '../../../../docs/ReactVaporStore';
import {LoadingActions, turnOffLoading} from '../../loading/LoadingActions';
import {INavigationOwnProps} from '../Navigation';
import {NavigationConnected} from '../NavigationConnected';

const navigationConnectedExampleId = 'navigation-connected';
const navigationConnectedExampleLoadingIds = ['loading-' + navigationConnectedExampleId];

export class NavigationConnectedExamples extends React.Component<any, any> {
    // Remove loading after a few seconds
    componentWillMount() {
        ExamplesStore.subscribe(() => {
            if (_.contains([LoadingActions.turnOn, LoadingActions.add], ExamplesStore.getState().lastAction.type)) {
                setTimeout(() => {
                    ExamplesStore.dispatch(turnOffLoading(navigationConnectedExampleLoadingIds));
                }, 2000);
            }
        });
    }

    render() {
        const navigationProps: INavigationOwnProps = {
            id: navigationConnectedExampleId,
            totalPages: 10,
            totalEntries: 50,
            loadingIds: navigationConnectedExampleLoadingIds,
        };
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Navigation with Redux state and loading</label>
                    <NavigationConnected {...navigationProps} />
                </div>
            </div>
        );
    }
}
