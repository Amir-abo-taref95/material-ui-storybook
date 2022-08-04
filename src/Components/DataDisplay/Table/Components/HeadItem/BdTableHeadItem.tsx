import React from 'react';

interface BdTableHeaderProps {
  column: any;
}

export const BdTableHeadItem = (props: BdTableHeaderProps) => {
  const { column } = props;
  return (
    <th
      {...column.getHeaderProps()}
      style={{
        color: 'black',
        fontWeight: 500,
        fontSize: 14,
        padding: '10px 0 10px 20px',
        textAlign: 'start',
      }}
    >
      {column.render('Header')}
      <div style={{ marginTop: 10 }}>
        {column.canFilter ? column.render('Filter') : null}
      </div>
    </th>
  );
};
