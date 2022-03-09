import React, { useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import DropdownItem from '../DropdownItem';
import { File, VectorDown } from '@assets/svg';

type Props = {
  label: string;
  data?: Array<any>;
  icon?: boolean;
};

const SingleItemDropdown = ({ label, icon }: Props): JSX.Element => {
  const [open, setOpen] = useState(true);

  const handleToggleOpen = () => {
    setOpen((value: boolean) => !value);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.header, {
          [styles.headerActive]: open,
        })}
      >
        <section>
          {icon && <File />}
          <p>{label}</p>
        </section>
        <VectorDown onClick={handleToggleOpen} />
      </div>
      <div
        className={cn(styles.content, {
          [styles.contentActive]: open,
        })}
      >
        <DropdownItem label="test" onClick={() => []} />
        <DropdownItem label="test" onClick={() => []} />
        <DropdownItem label="test" onClick={() => []} />
        <DropdownItem label="test" onClick={() => []} />
      </div>
    </div>
  );
};

export default SingleItemDropdown;
