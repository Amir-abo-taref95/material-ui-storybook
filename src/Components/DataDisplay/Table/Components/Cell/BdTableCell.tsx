import React from 'react';
import { BdVisibleIcon } from '../../../Icons/BdVisibleIcon';
import { BdNotVisibleIcon } from '../../../Icons/BdNotVisibleIcon';

interface BdTableCellProps {
  cell: any;
  index: number;
  rowIndex: number;
}

export const BdTableCell = (props: BdTableCellProps) => {
  const { cell, index, rowIndex } = props;
  const value = cell.render('Cell');
  const properties = { ...cell.getCellProps() };
  console.log(cell.value);
  return (
    <td
      {...cell.getCellProps()}
      style={{
        padding: '30px 0',
        background: rowIndex % 2 !== 0 ? '#FFFFFF' : '#F6F6F8',
      }}
    >
      {cell.value === true ? (
        <BdVisibleIcon />
      ) : cell.value === false ? (
        <BdNotVisibleIcon />
      ) : (
        value
      )}
      {index === 0 && (
        <div
          style={{
            width: 1,
            height: 16,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: cell.row.original.Color,
            background: cell.row.original.Color,
            margin: 'auto',
            borderRadius: 4,
          }}
        />
      )}
    </td>
  );
};
