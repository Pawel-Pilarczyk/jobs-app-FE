import React, { useState } from 'react';
import cn from 'classnames';
import DropdownItem from '../DropdownItem';
import { File, VectorDown } from '@assets/svg';
import styles from './styles.module.scss';

export type TData = {
  label: string;
  value: any;
  icon?: JSX.Element;
};

type Props = {
  value: string;
  placeholder?: string;
  data?: Array<TData>;
  icon?: boolean;
  setValue: (label: string) => void;
};

const SingleItemDropdown = ({ setValue, data, value, icon, placeholder }: Props): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen((value: boolean) => !value);
  };

  const handleClickEvent = (value: string) => () => {
    setValue(value);
    handleToggleOpen();
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
          {value ? <p>{value}</p> : <p className={styles.placeholder}> {placeholder}</p>}
        </section>
        <VectorDown onClick={handleToggleOpen} />
      </div>
      {data?.length ? (
        <div
          className={cn(styles.content, {
            [styles.contentActive]: open,
          })}
        >
          {data?.map(({ label, icon }) => (
            <DropdownItem label={label} handleClick={handleClickEvent(label)} key={label} icon={icon} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SingleItemDropdown;
