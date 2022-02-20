import React, { useState } from 'react';
import { Checkbox } from '@components';
import './styles.scss';

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked((value) => !value);

  return (
    <div>
      <Checkbox checked={checked} handleClick={toggleChecked} />
    </div>
  );
};

export default App;
