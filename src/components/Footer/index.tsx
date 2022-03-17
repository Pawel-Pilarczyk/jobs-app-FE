import React from 'react';
import cn from 'classnames';
import { linksData } from './data';
import styles from './styles.module.scss';

type TProps = {
  style?: React.ClassAttributes<HTMLDivElement>;
};

const Footer = ({ style }: TProps): JSX.Element => {
  return (
    <footer className={cn(styles.wrapper, style)}>
      <p>© Copyright 2022. All Rights Reserved.</p>
      {linksData.map((item) => (
        <a key={item.label} className={styles.link}>
          {item.label}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
