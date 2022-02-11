import React from 'react';

type Props = {
  text: string;
};

const Button = ({ text }: Props): JSX.Element => {
  return <div>{text}</div>;
};

export default Button;
