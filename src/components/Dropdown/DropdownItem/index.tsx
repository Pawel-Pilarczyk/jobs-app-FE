import React from 'react';
import styles from './styles.module.scss';

type Props = {
  label: string;
  onClick: () => void;
  icon?: JSX.Element;
};

const DropdownItem = ({ label, onClick, icon }: Props): JSX.Element => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      {icon && icon}
      <p>{label}</p>
    </div>
  );
};

export default DropdownItem;
