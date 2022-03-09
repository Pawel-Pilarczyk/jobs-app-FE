import React from 'react';
import styles from './styles.module.scss';

type Props = {
  label: string;
  handleClick: () => void;
  icon?: JSX.Element;
};

const DropdownItem = ({ label, handleClick, icon }: Props): JSX.Element => {
  return (
    <div onClick={handleClick} className={styles.wrapper}>
      {icon && icon}
      <p>{label}</p>
    </div>
  );
};

export default DropdownItem;
