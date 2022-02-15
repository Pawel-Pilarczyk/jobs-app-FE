import React, { RefObject, useState } from 'react';
import cn from 'classnames';
import { EyeClosed, EyeOpen } from '@assets/svg';
import styles from './styles.module.scss';

type Props = {
  type: 'text' | 'password';
  size?: 'small' | 'medium' | 'large';
  maxLength?: number;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: RefObject<HTMLInputElement>;
  error?: string;
};

const Input = ({ onChange, type, value, error, ref, maxLength, size = 'medium', placeholder }: Props): JSX.Element => {
  const [showPass, setShowPass] = useState(false);
  const toggleSetShowPassword = () => setShowPass((v) => !v);

  const inputValue = type === 'password' && showPass ? value : value.replace(/[a-z1-9.]/gi, '*');
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.wrapperSmall]: size === 'small',
        [styles.wrapperMedium]: size === 'medium',
        [styles.wrapperLarge]: size === 'large',
      })}
    >
      <input
        type="text"
        ref={ref}
        value={inputValue}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {type === 'password' && showPass ? (
        <EyeOpen onClick={toggleSetShowPassword} />
      ) : (
        <EyeClosed onClick={toggleSetShowPassword} />
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
