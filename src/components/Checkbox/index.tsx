import React, { RefObject, forwardRef } from 'react';
import cn from 'classnames';
import { Checked } from '@assets/svg';
import styles from './styles.module.scss';

type TProps = {
  checked: boolean;
  disabled?: boolean;
  handleClick: () => void;
  label?: string | JSX.Element;
  ref?: RefObject<HTMLDivElement>;
};

const Checkbox = ({ checked, handleClick, disabled, label, ref }: TProps): JSX.Element => {
  const handleCheck = () => {
    !disabled && handleClick();
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <div
        className={cn(styles.checkboxWrapper, {
          [styles.checked]: checked,
          [styles.checkboxWrapperrDisabled]: disabled,
          [styles.checkedDisabled]: checked && disabled,
        })}
        onClick={handleCheck}
      >
        {checked && <Checked />}
      </div>
      {label && <p>{label}</p>}
    </div>
  );
};

export default forwardRef(Checkbox);
