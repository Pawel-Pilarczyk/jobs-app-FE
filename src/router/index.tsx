import React from 'react';
import AuthRouter from './AuthRouter';
import AppRouter from './AppRouter';

const loggedIn = false;

const Router = (): JSX.Element => {
  return loggedIn ? <AppRouter /> : <AuthRouter />;
};

export default Router;
