import * as React from 'react';
import { ITableProps } from '../Table';
import { getTableChildComponentId } from '../TableUtils';
import { TableChildComponent } from '../TableConstants';
import { NavigationConnected } from '../../navigation/NavigationConnected';


export const TableChildNavigation = (props: ITableProps): JSX.Element => {
    const tableData = props.tableCompositeState.data || props.initialTableData;

    return !!props.navigation ? (
        <NavigationConnected
            {...props.navigation}
            totalEntries={tableData.totalEntries}
            totalPages={tableData.totalPages}
            id={getTableChildComponentId(props.id, TableChildComponent.NAVIGATION)}
            loadingIds={[getTableChildComponentId(props.id, TableChildComponent.LOADING_NAVIGATION)]}
        />
    ) : null;
};
