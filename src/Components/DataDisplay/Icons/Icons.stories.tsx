/* eslint-disable */
import styles from './Icons.stories.module.css';
import { BdFilterIcon } from './BdFilterIcon';
import { BdCaretIcon } from './BdCaretIcon';
import { BdAlertIcon } from './BdAlertIcon';
import { BdArrowIcon } from './BdArrowIcon';
import { BdCalendarIcon } from './BdCalendarIcon';
import { BdInProgressIcon } from './BdInProgressIcon';
import { BdSearchIcon } from './BdSearchIcon';
import { BdNotVisibleIcon } from './BdNotVisibleIcon';
import { BdVisibleIcon } from './BdVisibleIcon';
import { BdAbortIcon } from './BdAbortIcon';
import { BdDownloadIcon } from './BdDownloadIcon';
import { BdCompletedIcon } from './BdCompletedIcon';
import { BdOnGoingIcon } from './BdOnGoingIcon';
import { BdDotIcon } from './BdDotIcon';
import { BdPlusIcon } from './BdPlusIcon';
import { BdCloseIcon } from './BdCloseIcon';
import { BdWaitingIcon } from './BdWaitingIcon';

export default {
  title: 'Data Display/Icons',
};

export const Default = () => {
  return (
    <div className={styles.iconsRow}>
      <div className={styles.iconElement}>
        <BdArrowIcon className={styles.rotate90} />
      </div>
      <div className={styles.iconElement}>
        <BdArrowIcon className={styles.rotate270} />
      </div>
      <div className={styles.iconElement}>
        <BdArrowIcon className={styles.rotate180} />
      </div>
      <div className={styles.iconElement}>
        <BdArrowIcon />
      </div>
      <div className={styles.iconElement}>
        <BdCaretIcon />
      </div>
      <div className={styles.iconElement}>
        <BdCaretIcon className={styles.rotate180} />
      </div>
      <div className={styles.iconElement}>
        <BdDownloadIcon />
      </div>
      <div className={styles.iconElement}>
        <BdFilterIcon />
      </div>
      <div className={styles.iconElement}>
        <BdSearchIcon />
      </div>
      <div className={styles.iconElement}>
        <BdNotVisibleIcon />
      </div>
      <div className={styles.iconElement}>
        <BdVisibleIcon />
      </div>
      <div className={styles.iconElement}>
        <BdAlertIcon variant={'error'} />
      </div>
      <div className={styles.iconElement}>
        <BdAlertIcon />
      </div>
      <div className={styles.iconElement}>
        <BdCloseIcon />
      </div>
      <div className={styles.iconElement}>
        <BdCalendarIcon />
      </div>
      <div className={styles.iconElement}>
        <BdCompletedIcon variant='contained' />
      </div>
      <div className={styles.iconElement}>
        <BdAbortIcon variant='contained' />
      </div>
      <div className={styles.iconElement}>
        <BdWaitingIcon variant={'contained'} />
      </div>
      <div className={styles.iconElement}>
        <BdOnGoingIcon variant='contained' />
      </div>
      <div className={styles.iconElement}>
        <BdDotIcon />
      </div>
      <div className={styles.iconElement}>
        <BdPlusIcon />
      </div>
      <div className={styles.iconElement}>
        <BdCompletedIcon />
      </div>
      <div className={styles.iconElement}>
        <BdAbortIcon />
      </div>
      <div className={styles.iconElement}>
        <BdOnGoingIcon />
      </div>
      <div className={styles.iconElement}>
        <BdWaitingIcon />
      </div>
    </div>
  );
};

Default.story = {
  name: 'icons',
};
