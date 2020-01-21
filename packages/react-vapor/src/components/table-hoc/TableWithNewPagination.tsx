import * as React from 'react';
import {connect} from 'react-redux';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils';
import {IReduxAction} from '../../utils/ReduxUtils';
import {FlatSelectSelectors} from '../flatSelect/FlatSelectSelectors';
import {INavigationChildrenProps, INavigationOwnProps} from '../navigation/Navigation';
import {NavigationSelectors} from '../navigation/NavigationSelectors';
import {PER_PAGE_NUMBERS} from '../navigation/perPage/NavigationPerPage';
import {PaginationUtils} from '../pagination/PaginationUtils';
import {TablePagination} from '../pagination/TablePagination';
import {TableWithPaginationActions} from './actions/TableWithPaginationActions';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';
import {TableHOCUtils} from './utils/TableHOCUtils';

export interface ITableWithPaginationConfig
    extends WithServerSideProcessingProps,
        Partial<INavigationOwnProps>,
        Partial<INavigationChildrenProps> {}

export interface ITableWithPaginationStateProps {
    totalEntries: number;
    totalPages: number;
    pageNb: number;
    perPage: number;
}

export interface ITableWithPaginationDispatchProps {
    onMount: () => void;
    onUnmount: () => void;
}

export interface ITableWithPaginationProps
    extends Partial<ITableWithPaginationStateProps>,
        Partial<ITableWithPaginationDispatchProps>,
        ITableHOCOwnProps,
        WithServerSideProcessingProps {}

const TableWithPaginationProps = keys<ITableWithPaginationStateProps>();

const sliceData = (data: any[], startingIndex: number, endingIndex: number) => data.slice(startingIndex, endingIndex);

export const tableWithNewPagination = (
    supplier: ConfigSupplier<ITableWithPaginationConfig> = {perPageNumbers: PER_PAGE_NUMBERS}
) => (
    Component: React.ComponentType<ITableWithPaginationProps>
): React.ComponentClass<ITableWithPaginationProps & React.HTMLAttributes<HTMLTableElement>> => {
    const config = HocUtils.supplyConfig(supplier);
    const mapStateToProps = (
        state: IReactVaporState,
        ownProps: ITableWithPaginationProps
    ): ITableWithPaginationStateProps | ITableHOCOwnProps => {
        const pageNb = NavigationSelectors.getPaginationPage(state, {id: TableHOCUtils.getPaginationId(ownProps.id)});

        const perPage =
            parseInt(
                FlatSelectSelectors.getSelectedOptionId(state, {
                    id: PaginationUtils.getPaginationPerPageId(ownProps.id),
                }),
                10
            ) || PER_PAGE_NUMBERS[1];

        const isServer = ownProps.isServer || config.isServer;
        const length = TableSelectors.getDataCount(state, {
            id: ownProps.id,
            data: ownProps.data,
            isServer,
        });

        const startingIndex = pageNb * perPage;
        const endingIndex = startingIndex + perPage;

        return {
            pageNb,
            perPage,
            totalEntries: length,
            totalPages: Math.max(Math.ceil(length / perPage), 1),
            data: isServer ? ownProps.data : ownProps.data && sliceData(ownProps.data, startingIndex, endingIndex),
        };
    };

    const mapDispatchToProps = (
        dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
        ownProps: ITableHOCOwnProps
    ): ITableWithPaginationDispatchProps => ({
        onMount: () => dispatch(TableWithPaginationActions.add(ownProps.id)),
        onUnmount: () => dispatch(TableWithPaginationActions.remove(ownProps.id)),
    });

    class TableWithNewPaginationDisconnected extends React.Component<ITableHOCOwnProps & ITableWithPaginationProps> {
        componentDidMount() {
            this.props.onMount();
        }

        componentWillUnmount() {
            this.props.onUnmount();
        }

        componentDidUpdate(prevProps: ITableWithPaginationProps) {
            if (prevProps.pageNb !== this.props.pageNb || prevProps.perPage !== this.props.perPage) {
                this.props.onUpdate?.();
            }
        }

        render() {
            const newProps = _.omit(this.props, [...TableWithPaginationProps]);
            return (
                <Component {...newProps}>
                    <TablePagination
                        id={this.props.id}
                        disabled={this.props.isLoading}
                        totalPages={this.props.totalPages}
                        defaultPerPageSelected={
                            config?.perPageNumbers?.length > 1
                                ? config?.perPageNumbers[1]
                                : config?.perPageNumbers[0] ?? PER_PAGE_NUMBERS[1]
                        }
                        totalEntries={this.props.totalEntries}
                        perPageNumbers={config.perPageNumbers}
                    />
                </Component>
            );
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(TableWithNewPaginationDisconnected);
};
