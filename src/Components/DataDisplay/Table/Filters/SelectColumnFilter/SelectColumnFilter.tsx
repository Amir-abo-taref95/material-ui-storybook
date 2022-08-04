import React from 'react';
import { BdAutocomplete } from '../../../../Inputs/Autocomplete';

export const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
  ...rest
}) => {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  const { label } = rest;
  return (
    // <select
    //   value={filterValue}
    //   onChange={(e) => {
    //     setFilter(e.target.value || undefined);
    //   }}
    // >
    //   <option value=''>All</option>
    //   {options.map((option, i) => (
    //     <option key={i} value={option as any}>
    //       {option as any}
    //     </option>
    //   ))}
    // </select>
    <BdAutocomplete
      multiple
      label={label}
      disablePortal
      id='combo-box-demo'
      options={options}
    />
  );
};
