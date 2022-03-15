import React, { useState } from 'react';
import { ItemDropdown } from '@components';
import { TData } from '@components/Dropdown/ItemDropdown';
import './styles.scss';

const data: Array<TData> = [
  { label: '123', value: '123' },
  { label: '123', value: '123' },
];

const App: React.FC = () => {
  const [value, setValue] = useState<Array<string>>([]);
  const handleSetValue = (newValue: string) => {
    const v = [...value, newValue];
    setValue(v);
  };
  return (
    <div>
      <ItemDropdown data={data} value={value} setValue={handleSetValue} placeholder="Name" multipleItems />
    </div>
  );
};

export default App;
