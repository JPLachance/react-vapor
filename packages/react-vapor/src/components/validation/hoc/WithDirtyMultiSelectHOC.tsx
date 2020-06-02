import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';
import {IDispatch} from '../../../utils/ReduxUtils';
import {IMultiSelectOwnProps} from '../../select/MultiSelectConnected';
import {SelectSelector} from '../../select/SelectSelector';
import {ValidationActions} from '../ValidationActions';
import {InferableComponentEnhancer} from './connectHOC';

const mapStateToProps = createStructuredSelector({
    selectedValues: SelectSelector.getMultiSelectSelectedValues,
});

const mapDispatchToProps = (dispatch: IDispatch, {id}: IMultiSelectOwnProps) => ({
    toggleIsDirty: (isDirty: boolean) => dispatch(ValidationActions.setDirty(id, isDirty)),
});

export type IMultiSelectWithDirtyOwnProps = {
    initialValues: string[];
};

export const withDirtyMultiSelectHOC = <T extends IMultiSelectOwnProps>(Component: React.ComponentType<T>) => {
    type StateProps = ReturnType<typeof mapStateToProps>;
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrappedMultiSelect: React.FunctionComponent<T &
        IMultiSelectWithDirtyOwnProps &
        StateProps &
        DispatchProps> = ({initialValues = [], selectedValues, toggleIsDirty, ...props}) => {
        const hasDifferentValuesSelected =
            _.difference(initialValues, selectedValues).length > 0 ||
            _.difference(selectedValues, initialValues).length > 0;

        React.useEffect(() => {
            toggleIsDirty(hasDifferentValuesSelected);
        }, [hasDifferentValuesSelected]);

        return <Component {...(props as T)} />;
    };

    const enhance = connect(mapStateToProps, mapDispatchToProps) as InferableComponentEnhancer<
        StateProps & DispatchProps
    >;
    return enhance(WrappedMultiSelect);
};
