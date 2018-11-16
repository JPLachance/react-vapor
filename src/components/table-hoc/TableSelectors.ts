import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {ITableWithSortState} from './reducers/TableWithSortReducers';

export interface TableSelectorsProps {
    id: string;
    data: any[];
    isServer?: boolean;
}

const getIsEmpty = (state: IReactVaporState, props: TableSelectorsProps): boolean => {
    return props.data !== null && (!props.data || props.data.length === 0);
};

const getDataCount = (state: IReactVaporState, props: TableSelectorsProps): number => {
    const tablePaginationState = _.findWhere(state.tableHOCPagination, {id: props.id});
    return props.isServer
        ? tablePaginationState && tablePaginationState.count || 0
        : props.data && props.data.length || 0;
};

const getSort = (state: IReactVaporState, props: TableSelectorsProps): ITableWithSortState => {
    return _.find(state.tableHOCHeader, (v: ITableWithSortState) => v.tableId === props.id && _.isBoolean(v.isAsc));
};

export const TableSelectors = {
    getIsEmpty,
    getDataCount,
    getSort,
};
