import React from 'react';
import cn from 'classnames';
import { ArrowRight, ArrowLeft, Confirm, Warning } from '@assets/svg';
import styles from './styles.module.scss';

const icons = {
  arrowRight: <ArrowRight />,
  arrowLeft: <ArrowLeft />,
  confirm: <Confirm />,
  warning: <Warning />,
};

type TIcon = keyof typeof icons;

export type Props = {
  children: string;
  type: 'primary' | 'outline' | 'text';
  size: 'large' | 'medium';
  iconLeft?: TIcon;
  iconRight?: TIcon;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.ClassAttributes<HTMLDivElement>;
};

const Button = ({
  children,
  disabled,
  size = 'large',
  type,
  iconLeft,
  iconRight,
  onClick,
  style,
}: Props): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className={cn(styles.wrapper, style, {
        [styles.wrapperLarge]: size === 'large',
        [styles.wrapperMedium]: size === 'medium',
        [styles.primary]: type === 'primary',
        [styles.primaryDisabled]: disabled && type === 'primary',
        [styles.outline]: type === 'outline',
        [styles.outlineDisabled]: disabled && type === 'outline',
        [styles.text]: type === 'text',
        [styles.textDisabled]: disabled && type === 'text',
      })}
    >
      {iconLeft && size === 'large' && icons[iconLeft]}
      <h3>{children.toUpperCase()}</h3>
      {iconRight && size === 'large' && icons[iconRight]}
    </div>
  );
};

export default Button;
