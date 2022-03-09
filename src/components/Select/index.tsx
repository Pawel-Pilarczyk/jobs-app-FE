import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type TProps = {
  checked: boolean;
  handleClick: () => void;
  label?: string;
  disabled?: boolean;
};

const Select = ({ checked, handleClick, label, disabled }: TProps): JSX.Element => {
  const handleClickAction = () => {
    return !disabled && handleClick();
  };
  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.wrapperSelect, {
          [styles.wrapperSelectActive]: checked,
          [styles.wrapperSelectDisabled]: disabled,
        })}
        onClick={handleClickAction}
      >
        <div />
      </div>
      <p className="label">{label}</p>
    </div>
  );
};

export default Select;
