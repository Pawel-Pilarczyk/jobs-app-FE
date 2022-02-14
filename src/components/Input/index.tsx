import React, { RefObject, useState } from 'react';
// import cn from 'classnames';
import { EyeClosed, EyeOpen } from '@assets/svg';

type Props = {
  type: 'text' | 'password';
  //size: 'large' | 'medium' | 'small';
  value: string;
  onChange: () => void;
  ref?: RefObject<HTMLInputElement>;
  error?: string;
};

const Input = ({ onChange, type, value, error, ref }: Props): JSX.Element => {
  const [showPass, setShowPass] = useState(false);
  const toggleSetShowPassword = () => setShowPass((v) => !v);
  return (
    <div>
      <input type="text" ref={ref} value={value} onChange={onChange} />
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
