import React, { useState } from 'react';
import { Button, Input } from '@components';
import './styles.scss';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const handleSetText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  return (
    <div>
      <Button size="large" type="primary" disabled>
        Hello
      </Button>
      <Input onChange={handleSetText} type="password" value={text} error="123" size="small" />
    </div>
  );
};

export default App;
