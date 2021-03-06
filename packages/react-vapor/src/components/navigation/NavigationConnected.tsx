import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVaporState';
import {ReduxUtils} from '../../utils/ReduxUtils';
import {ILoadingState} from '../loading/LoadingReducers';
import {INavigationOwnProps, INavigationStateProps, Navigation} from './Navigation';

const mapStateToProps = (state: IReactVaporState, ownProps: INavigationOwnProps): INavigationStateProps => {
    const item: ILoadingState = _.findWhere(state.loadings, {id: 'loading-' + ownProps.id});

    return {
        isLoading: (item && item.isOn) || false,
        withReduxState: true,
    };
};

export const NavigationConnected = connect(mapStateToProps, undefined, ReduxUtils.mergeProps)(Navigation);
