import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '@screens';

function AuthRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default AuthRoutes;
