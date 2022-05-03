import React from 'react';
import { AuthRoutes } from './AuthRouter';
import AppRouter from './AppRouter';

const loggedIn = false;

const Router = (): JSX.Element => {
  return loggedIn ? <AppRouter /> : <AuthRoutes />;
};

export default Router;
