import * as React from 'react';
import styles from './BdTable.module.css';
import { useTable, useFilters, usePagination } from 'react-table';
import { Card } from '@mui/material';
import { SelectColumnFilter } from './Filters/SelectColumnFilter/SelectColumnFilter';
import {
  BdTableHeadItem,
  BdTableRow,
  FullWidthTableWrapper,
} from './Components';
import { BdTableHeader } from './Models/BdTableHeader';

interface IBdTableProps {
  tableData: any[];
  headers: BdTableHeader[];
}
export const BdTable = (props: IBdTableProps) => {
  const { tableData, headers } = props;

  // Create the data
  const data = React.useMemo(() => {
    return tableData;
  }, []);

  // Create the columns
  const columns = React.useMemo(() => {
    const constHeaders = [
      {
        Header: '',
        accessor: 'index',
      },
    ];
    return constHeaders.concat(
      headers.map((header) => {
        return {
          id: header.Key,
          Header: header.Text,
          accessor: header.Key,
          Filter: (data) => {
            return (
              <SelectColumnFilter column={data.column} label={header.Text} />
            );
          },
          filter: 'includes',
        };
      })
    );
  }, []);

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: () => {
        return <div />;
      },
    }),
    []
  );

  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      initialState: { pageIndex: 1, pageSize: 5 },
    },
    useFilters,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;
  return (
    <Card>
      <FullWidthTableWrapper>
        <table
          {...getTableProps()}
          style={{
            borderSpacing: 0,
            fontWeight: 400,
            fontSize: 14,
            fontFamily: 'Rubik, sans-serif',
            width: '100%',
          }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <BdTableHeadItem column={column} key={column.id} />
                ))}
              </tr>
            ))}
          </thead>
          {/* The table body */}
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return <BdTableRow row={row} index={index} key={row.id} />;
            })}
          </tbody>
        </table>
      </FullWidthTableWrapper>
    </Card>
  );
};
