
import { styled, TablePagination, TablePaginationBaseProps, TablePaginationProps } from '@mui/material';
import * as React from 'react';
import styles from './BdTablePagination.module.css';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import { BdSelect } from "../Inputs/Select";
import { BdArrowIcon } from "../DataDisplay/Icons/BdArrowIcon";



interface BdTablePaginationProps { //should recieve the total num of items and rows per page
  perPageOptions: { value: any, text: any }[],
  totalRows: number;
  from: number;
  to: number;
  onRowsCountChange: () => void;
  onPageChanged: (forward: boolean) => void;
}



export const BdTablePagination = (props: BdTablePaginationProps) => {
  const { perPageOptions, from, to, totalRows, onRowsCountChange, onPageChanged } = props;
  const [fromVal, setFromVal] = React.useState(from)
  const [toVal, setToVal] = React.useState(to)
  const [perPageOption, setPerPageOption] = React.useState(perPageOptions[0].value)

//const changeRowsCount=(event: any)=> setPerPageOption(event.value) ; 

  const changeVals = (forward: boolean) => {
    if (forward) {
      if(toVal+perPageOption<=totalRows){
        setFromVal(prev => prev + perPageOption)
        setToVal(prev => prev + perPageOption)
      }
   else if(totalRows-toVal>0){
    const leftover=totalRows-toVal
    setFromVal(prev =>prev+leftover)
    setToVal(totalRows)
   }
      return
    }
    if (fromVal > 10) {
      setFromVal(prev => prev - perPageOption)
      setToVal(prev => prev - perPageOption)
    }
  }
  return (
    <div className={styles.BdTablePagination_root}>
      <div className={styles.flex}>
        <div>כמות תוצאות בעמוד</div>
        <BdSelect items={perPageOptions} onChange={(event: any)=>{setPerPageOption(event.value)}} /> 
      </div>
      <div className={styles.flex}>
        <div>{`${fromVal}-${toVal} מתוך ${totalRows}`}</div>
        <BdArrowIcon onClick={() => changeVals(false)} />
        <BdArrowIcon className={styles.rotate180} onClick={() => changeVals(true)} />
      </div>
    </div>
  )
};
