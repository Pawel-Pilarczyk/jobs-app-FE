import React, { LegacyRef, RefObject, useState } from 'react';
import cn from 'classnames';
import { EyeClosed, EyeOpen } from '@assets/svg';
import styles from './styles.module.scss';

type Props = {
  type: 'text' | 'password' | 'textArea';
  size?: 'small' | 'medium' | 'large';
  maxLength?: number;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent) => void;
  ref?: RefObject<HTMLInputElement>;
  refTexArea?: LegacyRef<HTMLTextAreaElement>;
  error?: string;
};

const Input = ({
  onChange,
  type,
  value,
  error,
  ref,
  maxLength,
  size = 'medium',
  placeholder,
  refTexArea,
}: Props): JSX.Element => {
  const [passVisible, setPassVisible] = useState(false);
  const toggleSetPassVisible = () => setPassVisible((v) => !v);

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.wrapperSmall]: size === 'small',
        [styles.wrapperMedium]: size === 'medium',
        [styles.wrapperLarge]: size === 'large',
        [styles.error]: !!error,
        [styles.input]: type === 'text' || type == 'password',
        [styles.textArea]: type === 'textArea',
      })}
    >
      {type == 'textArea' ? (
        <textarea ref={refTexArea} value={value} onChange={onChange} maxLength={maxLength} placeholder={placeholder} />
      ) : (
        <input
          type={passVisible ? 'text' : 'password'}
          ref={ref}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
        />
      )}

      {type === 'password' &&
        (passVisible ? <EyeOpen onClick={toggleSetPassVisible} /> : <EyeClosed onClick={toggleSetPassVisible} />)}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default React.forwardRef(Input);
