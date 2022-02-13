import React from 'react';
import { Button } from '@components';

const App: React.FC = () => {
  return (
    <div>
      <Button size="large" type="primary" disabled>
        Hello
      </Button>
      <Button size="large" type="outline" iconLeft="warning" iconRight="warning" disabled>
        Hello
      </Button>
      <Button size="large" type="text" iconLeft="arrowRight" iconRight="arrowRight">
        Hello
      </Button>
    </div>
  );
};

export default App;
