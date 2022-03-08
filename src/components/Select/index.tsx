import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type Props = { checked: boolean; handleClick: () => void };

const Select = ({ checked, handleClick }: Props) => {
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.wrapperActive]: checked,
      })}
      onClick={handleClick}
    >
      <div />
    </div>
  );
};

export default Select;
