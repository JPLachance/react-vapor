import { ITableOwnProps } from '../Table';
import { TableConnected } from '../TableConnected';
import { defaultTableStateModifier, dispatchPreTableStateModification, dispatchPostTableStateModification } from '../TableDataModifier';
import * as loremIpsum from 'lorem-ipsum';
import * as React from 'react';
import * as _ from 'underscore';
import { ITableData, ITableState, ITablesState, ITableCompositeState } from '../TableReducers';
import { modifyState, setIsInError } from '../TableActions';
import { IDropdownOption } from '../../dropdownSearch/DropdownSearch';
import { IData, ITableRowData, ITableProps } from '../Table';
import { DEFAULT_TABLE_DATA, TABLE_PREDICATE_DEFAULT_VALUE } from '../TableConstants';
import * as $ from 'jquery';
import { IDispatch, IThunkAction } from '../../../utils/ReduxUtils';

const generateText = () => loremIpsum({ count: 1, sentenceUpperBound: 3 });

const simplestTableDataById = _.range(0, 5).reduce((obj, number) => ({
  ...obj,
  ['row' + number]: {
    id: 'row' + number,
    attribute1: generateText(),
    attribute2: generateText(),
    attribute3: generateText(),
    attribute4: generateText(),
  }
}), {} as ITableRowData);

const tableDataById = _.range(0, 100).reduce((obj, number) => ({
  ...obj,
  ['row' + number]: {
    id: 'row' + number,
    attribute1: generateText(),
    attribute2: generateText(),
    attribute3: generateText(),
    attribute4: generateText(),
  }
}), {} as ITableRowData);

const perPageNumbers = [5, 10, 20];

const predicateOptionsAttribute4 = [
  { value: TABLE_PREDICATE_DEFAULT_VALUE },
  ..._.keys(tableDataById).reduce((arr: IDropdownOption[], id: string) => [...arr, { value: tableDataById[id].attribute4 }], [])
].slice(0, 4);
const predicateOptionsAttribute3 = [
  { value: TABLE_PREDICATE_DEFAULT_VALUE },
  ..._.keys(tableDataById).reduce((arr: IDropdownOption[], id: string) => [...arr, { value: tableDataById[id].attribute3 }], []),
].slice(0, 4);

const simplestTableData: ITableData = {
  byId: simplestTableDataById,
  allIds: _.keys(simplestTableDataById),
  displayedIds: _.keys(simplestTableDataById),
  totalEntries: _.keys(simplestTableDataById).length,
  totalPages: Math.ceil(_.keys(simplestTableDataById).length / perPageNumbers[0]),
};

const tableData: ITableData = {
  byId: tableDataById,
  allIds: _.keys(tableDataById),
  displayedIds: _.keys(tableDataById).slice(0, perPageNumbers[0]),
  totalEntries: _.keys(tableDataById).length,
  totalPages: Math.ceil(_.keys(tableDataById).length / perPageNumbers[0]),
};

const buildNewTableStateManually = (data: any, currentState: ITableState, tableCompositeState: ITableCompositeState, tableOwnProps: ITableOwnProps): ITableState => {
  const totalEntries = JSON.parse(data).count;
  const totalPages = Math.ceil(totalEntries / perPageNumbers[0]);
  const newTableData = JSON.parse(data).entries.reduce((tableData: ITableData, entry: any, arr: any[]) => {
    return {
      byId: {
        ...(tableData.byId || {}),
        [entry.API]: {
          id: entry.API,
          attribute1: entry.API,
          attribute3: entry.Category,
          attribute4: entry.Description,
        }
      },
      allIds: [...tableData.allIds, entry.API],
      displayedIds: [...tableData.displayedIds, entry.API],
      totalEntries: totalEntries,
      totalPages: totalPages,
    };
  }, DEFAULT_TABLE_DATA);
  return defaultTableStateModifier(tableOwnProps, _.extend({}, tableCompositeState, { data: newTableData }))({ ...currentState, data: newTableData });
};

const manualModeThunk = (tableOwnProps: ITableOwnProps, shouldResetPage: boolean, tableCompositeState: ITableCompositeState): IThunkAction => {
  return (dispatch: IDispatch, getState: () => { [globalStateProp: string]: any; tables: ITablesState; }) => {
    const currentTableState = getState().tables[tableOwnProps.id];
    dispatchPreTableStateModification(tableOwnProps, dispatch);
    $.get('https://raw.githubusercontent.com/toddmotto/public-apis/master/json/entries.json')
      .done(data => {
        dispatch(
          modifyState(
            tableOwnProps.id,
            (tableState: ITableState) => buildNewTableStateManually(data, currentTableState, tableCompositeState, tableOwnProps),
            shouldResetPage,
          )
        );
      })
      .fail(error => {
        dispatch(setIsInError(tableOwnProps.id, true));
        dispatch(modifyState(
          tableOwnProps.id,
          (tableState: ITableState) => ({ ...tableState, data: DEFAULT_TABLE_DATA }),
          shouldResetPage,
        ));
      })
      .always(() => {
        dispatchPostTableStateModification(tableOwnProps, dispatch);
      });
  };
};

export class TableExamples extends React.Component<any, any> {
  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>
            Table in manual mode.
          </label>
          <TableConnected
            id={_.uniqueId('react-vapor-table')}
            manual={manualModeThunk}
            headingAttributes={[
              {
                attributeName: 'attribute1',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: _.identity,
              },
              {
                attributeName: 'attribute4',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: _.identity,
              },
              {
                attributeName: 'attribute3',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: _.identity,
              },
            ]}
            actionBar={{
              extraContainerClasses: ['mod-border-top'],
            }}
            filter={{}}
            blankSlateDefault={{ title: 'No results here!' }}
            navigation={{ perPageNumbers }}
          />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Simplest Table
          </label>
          <TableConnected
            id={_.uniqueId('react-vapor-table')}
            initialTableData={simplestTableData}
            headingAttributes={[
              {
                attributeName: 'attribute1',
                titleFormatter: _.identity,
              },
              {
                attributeName: 'attribute4',
                titleFormatter: _.identity,
              },
              {
                attributeName: 'attribute3',
                titleFormatter: _.identity,
              },
            ]}
            blankSlateDefault={{ title: 'No results!' }}
          />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Table with filter
          </label>
          <TableConnected
            id={_.uniqueId('react-vapor-table')}
            initialTableData={simplestTableData}
            headingAttributes={[
              {
                attributeName: 'attribute1',
                titleFormatter: _.identity,
              },
              {
                attributeName: 'attribute4',
                titleFormatter: _.identity,
              },
              {
                attributeName: 'attribute3',
                titleFormatter: _.identity,
              },
              {
                attributeName: 'attribute2',
                titleFormatter: _.identity,
              },
            ]}
            filter={{}}
            blankSlateDefault={{ title: 'Oh my oh my, nothing to see here :(!' }}
            actionBar={{ extraContainerClasses: ['mod-border-top'] }}
          />
        </div>

        <div className='form-group'>
          <label className='form-control-label'>Complex Table in default mode</label>
          <TableConnected
            id={_.uniqueId('react-vapor-table')}
            initialTableData={tableData}
            collapsibleFormatter={(rowData: IData, props?: ITableProps) => <div className='p2'>This is the collapsible row! And here's the value of attribute 3: {rowData.attribute3}</div>}
            getActions={(rowData: IData, tableProps: ITableProps) => ([
              {
                name: 'Link to Coveo',
                link: 'http://coveo.com',
                target: '_blank',
                icon: 'exit',
                primary: true,
                enabled: true
              }, {
                name: 'action1',
                trigger: () => alert('attribute 4 value of the selected row is: ' + rowData.attribute4),
                enabled: true,
                callOnDoubleClick: true,
              }, {
                separator: true,
                enabled: true
              }, {
                name: 'action2',
                trigger: () => alert('we are at page ' + (tableProps.tableCompositeState.page + 1)),
                enabled: true
              },
              {
                name: 'action3',
                trigger: () => alert('value in your filter box is: ' + (tableProps.tableCompositeState.filter || 'empty (add something and retry)')),
                enabled: true
              }])}
            headingAttributes={[
              {
                attributeName: 'attribute1',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: _.identity,
              },
              {
                attributeName: 'attribute4',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: _.identity,
              },
              {
                attributeName: 'attribute3',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: _.identity,
              },
            ]}
            actionBar={{
              extraContainerClasses: ['mod-border-top'],
            }}
            predicates={[
              { props: { defaultOptions: predicateOptionsAttribute4 }, attributeName: 'attribute4' },
              { props: { defaultOptions: predicateOptionsAttribute3 }, attributeName: 'attribute3' },
            ]}
            filter={{ containerClasses: ['ml1'] }}
            blankSlateDefault={{ title: 'Oh no! No results!' }}
            blankSlateNoResultsOnAction={{ title: 'Oh no, too much filtering!' }}
            navigation={{ perPageNumbers }}
          />
        </div>

      </div>
    );
  }
}
