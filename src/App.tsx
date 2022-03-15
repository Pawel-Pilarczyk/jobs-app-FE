import React from 'react';
import { Tooltip } from '@components';
import './styles.scss';

const App: React.FC = () => {
  return (
    <div style={{ height: '1000px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Tooltip message="123" />
    </div>
  );
};

export default App;
