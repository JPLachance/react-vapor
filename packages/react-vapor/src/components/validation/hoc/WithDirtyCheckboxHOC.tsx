import * as React from 'react';
import {connect} from 'react-redux';

import {IDispatch} from '../../../utils/ReduxUtils';
import {ICheckboxOwnProps} from '../../checkbox/Checkbox';
import {IInputOwnProps} from '../../input/Input';
import {ValidationActions} from '../ValidationActions';
import {ValidationTypes} from '../ValidationTypes';
import {InferableComponentEnhancer} from './connectHOC';

export interface IWithDirtyCheckboxOwnProps {
    resetDirtyOnUnmount?: boolean;
}

const mapDispatchToProps = (dispatch: IDispatch) => ({
    setIsDirty: (id: string, isDirty: boolean) =>
        dispatch(ValidationActions.setDirty(id, isDirty, ValidationTypes.wrongInitialValue)),
    clearIsDirty: (id: string) => dispatch(ValidationActions.clearDirty(id, ValidationTypes.wrongInitialValue)),
});

export const withDirtyCheckboxHOC = <T extends ICheckboxOwnProps & IInputOwnProps>(
    Component: React.ComponentType<T>
) => {
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrappedCheckbox: React.FunctionComponent<T & IWithDirtyCheckboxOwnProps & DispatchProps> = ({
        setIsDirty,
        clearIsDirty,
        handleOnClick,
        resetDirtyOnUnmount,
        ...props
    }) => {
        React.useEffect(
            () => () => {
                resetDirtyOnUnmount && clearIsDirty(props.id);
            },
            []
        );

        return (
            <Component
                {...(props as T)}
                handleOnClick={(wasChecked: boolean) => {
                    const isNowChecked = !wasChecked;
                    setIsDirty(props.id, isNowChecked !== !!props.defaultChecked);
                    handleOnClick?.(wasChecked);
                }}
            />
        );
    };

    const enhance = connect(null, mapDispatchToProps) as InferableComponentEnhancer<DispatchProps>;
    return enhance(WrappedCheckbox);
};
