import React, { useState } from 'react';
import cn from 'classnames';
import DropdownItem from '../DropdownItem';
import SelectItemPill from '../SelectedItemPill';
import { File, VectorDown } from '@assets/svg';
import styles from './styles.module.scss';

export type TData = {
  label: string;
  value: any;
  icon?: JSX.Element;
};

type Props = {
  value: string | Array<string>;
  placeholder?: string;
  setValue: (label: string) => void;
  removeValue?: (label: string) => void;
  data?: Array<TData>;
  icon?: boolean;
  multipleItems?: boolean;
};

const SingleItemDropdown = ({
  setValue,
  removeValue,
  data,
  value,
  icon,
  placeholder,
  multipleItems,
}: Props): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen((value: boolean) => !value);
  };

  const handleClickEvent = (value: string) => () => {
    setValue(value);
    setOpen(false);
  };

  const handleRemoveValue = (value: string) => () => {
    removeValue?.(value);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.header, {
          [styles.headerActive]: open,
        })}
      >
        <section>
          {icon && !multipleItems && <File />}
          {multipleItems ? (
            value.length ? (
              typeof value === 'object' &&
              value?.map(
                (item, index) =>
                  index < 3 && <SelectItemPill handleClick={handleRemoveValue(item)} label={item} key={item} />,
              )
            ) : (
              <p className={styles.placeholder}> {placeholder}</p>
            )
          ) : value ? (
            <p>{value}</p>
          ) : (
            <p className={styles.placeholder}> {placeholder}</p>
          )}
          {multipleItems && value.length && value.length > 3 ? <SelectItemPill label={'...'} /> : null}
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
