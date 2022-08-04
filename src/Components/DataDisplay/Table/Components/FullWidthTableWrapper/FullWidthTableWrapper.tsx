import React from 'react';
import styles from './FullWidthTableWrapper.module.css';

export const FullWidthTableWrapper = (props: any) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>{props.children}</div>
    </div>
  );
};
