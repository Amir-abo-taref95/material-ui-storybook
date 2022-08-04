import React from 'react';
import { BdTableCell } from '../Cell';

interface BdTableRowProps {
  row: any;
  index: number;
}
export const BdTableRow = (props: BdTableRowProps) => {
  const { row, index } = props;
  return (
    <tr {...row.getRowProps()}>
      {row.cells.map((cell, cellIndex) => {
        return (
          <BdTableCell
            cell={cell}
            index={cellIndex}
            rowIndex={index}
            key={`${index}_${cellIndex}`}
          />
        );
      })}
    </tr>
  );
};
