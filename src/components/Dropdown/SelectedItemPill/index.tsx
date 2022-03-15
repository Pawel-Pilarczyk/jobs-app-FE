import React from 'react';
import { Close } from '@assets/svg';
import styles from './styles.module.scss';

type TProps = {
  label: string;
  handleClick?: () => void;
};

const index = ({ label, handleClick }: TProps): JSX.Element => {
  return (
    <div onClick={handleClick} className={styles.wrapper}>
      <p>{label}</p>
      <Close />
    </div>
  );
};

export default index;
