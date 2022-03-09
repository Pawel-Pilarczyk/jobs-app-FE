import React, { useState } from 'react';
import { Select } from '@components';
import './styles.scss';

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked((value) => !value);

  return (
    <div>
      <Select checked={checked} handleClick={toggleChecked} label="Test testś" />
    </div>
  );
};

export default App;
