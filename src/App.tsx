import React, { useState } from 'react';
import { SingleItemDropdown } from '@components';
import './styles.scss';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const handleSetValue = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <div>
      <SingleItemDropdown data={[]} value={value} icon setValue={handleSetValue} placeholder="Name" />
    </div>
  );
};

export default App;
