import * as React from 'react';
import * as classNames from 'classnames';
import { ITableProps, IData, ITableHeadingAttribute } from '../Table';
import { getTableChildComponentId } from '../TableUtils';
import { TableChildComponent, TOGGLE_ARROW_CELL_COUNT } from '../TableConstants';
import { TableCollapsibleRowConnected } from '../TableCollapsibleRowConnected';
import { TableRowWrapper } from '../TableRowWrapper';
import { TableHeadingRowConnected } from '../TableHeadingRowConnected';
import { convertUndefinedAndNullToEmptyString } from '../../../utils/FalsyValuesUtils';
import { JSXRenderable } from '../../../utils/JSXUtils';

export const TableChildBody = (props: ITableProps): JSX.Element[] => {
  const tableData = props.tableCompositeState.data || props.initialTableData;
  return tableData.displayedIds.map((id: string, yPosition: number): JSX.Element => {
    const rowData: IData = tableData.byId[id];
    const rowWrapperId = `${getTableChildComponentId(props.id, TableChildComponent.TABLE_ROW_WRAPPER)}${rowData.id}`;
    const headingAndCollapsibleId = `${getTableChildComponentId(props.id, TableChildComponent.TABLE_HEADING_ROW)}${rowData.id}`;

    const tableHeadingRowContent = props.headingAttributes.map((headingAttribute: ITableHeadingAttribute, xPosition: number) => {
      const { attributeName, attributeFormatter } = headingAttribute;
      const tableCoordinate = `${xPosition}${yPosition}`;
      const headingRowContent: JSXRenderable = attributeFormatter
        ? attributeFormatter(rowData[attributeName], attributeName)
        : convertUndefinedAndNullToEmptyString(rowData[attributeName]);

      return <td key={tableCoordinate}>{headingRowContent}</td>;
    });

    const collapsibleRowKey = `${getTableChildComponentId(props.id, TableChildComponent.TABLE_COLLAPSIBLE_ROW)}${rowData.id}`;
    const collapsibleData = props.collapsibleFormatter && props.collapsibleFormatter(rowData, props);
    const collapsibleRow = collapsibleData
      ? (
        <TableCollapsibleRowConnected
          id={headingAndCollapsibleId}
          key={collapsibleRowKey}
          nbColumns={props.headingAttributes.length + TOGGLE_ARROW_CELL_COUNT}>
          {collapsibleData}
        </TableCollapsibleRowConnected>
      )
      : null;

    const tableRowWrapperClasses = classNames({ 'table-body-loading': !!props.tableCompositeState.isLoading });

    return (
      <TableRowWrapper key={rowWrapperId} className={tableRowWrapperClasses}>
        <TableHeadingRowConnected
          id={headingAndCollapsibleId}
          key={headingAndCollapsibleId}
          tableId={props.id}
          isCollapsible={!!collapsibleData}
          onClickCallback={(e: React.MouseEvent<HTMLTableRowElement>) => {
            if (props.onRowClick) {
              props.onRowClick(props.getActions && props.getActions(rowData, props));
            }
          }}
          onDoubleClick={() => {
            const actions = props.getActions
              ? props.getActions(rowData, props)
              : [];
            actions
              .filter(action => action.callOnDoubleClick)
              .forEach(action => action.trigger());
          }}>
          {tableHeadingRowContent}
        </TableHeadingRowConnected>
        {collapsibleRow}
      </TableRowWrapper>
    );
  });
};
