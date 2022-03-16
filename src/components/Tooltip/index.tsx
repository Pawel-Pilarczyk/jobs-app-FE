import React from 'react';
import cn from 'classnames';
import { ToolTipIcon } from '@assets/svg';
import styles from './styles.module.scss';

type TProps = {
  message: string;
  position?: 'top' | 'bottom';
};

const index = ({ message, position = 'top' }: TProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <ToolTipIcon />
      <div
        className={cn(styles.messageWrapper, {
          [styles.top]: position === 'top',
          [styles.bottom]: position === 'bottom',
        })}
      >
        <p>{message}</p>
        <div />
      </div>
    </div>
  );
};

export default index;
