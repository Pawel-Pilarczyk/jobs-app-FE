import React from 'react';
import { SingleItemDropdown } from '@components';
import './styles.scss';

const App: React.FC = () => {
  return (
    <div>
      <SingleItemDropdown data={[]} label="Hello" icon />
    </div>
  );
};

export default App;
