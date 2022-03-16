import React from 'react';
import { Button } from '@components';
import styles from './styles.module.scss';

const index = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>JA</h1>
        <div>
          <Button size="large" type="primary">
            Sign In
          </Button>
          <Button size="large" type="outline">
            Sign Up
          </Button>
        </div>
      </header>
    </div>
  );
};

export default index;
