import React, { useState } from 'react';
import { Button, Input } from '@components';
import './styles.scss';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const handleSetText = (e: React.ChangeEvent) => setText(e?.currentTarget?.nodeValue as string);

  return (
    <div>
      <Button size="large" type="primary" disabled>
        Hello
      </Button>
      <Input onChange={handleSetText} type="textArea" value={text} size="large" error="123" />
    </div>
  );
};

export default App;
