import React from 'react';
import { Button } from '@components';

const App: React.FC = () => {
  return (
    <div>
      <Button size="large" type="primary" iconRight="confirm">
        Hello
      </Button>
      <Button size="large" type="outline" disabled iconLeft="warning" iconRight="warning">
        Hello
      </Button>
      <Button size="large" type="text" iconLeft="arrowRight" iconRight="arrowRight">
        Hello
      </Button>
    </div>
  );
};

export default App;
