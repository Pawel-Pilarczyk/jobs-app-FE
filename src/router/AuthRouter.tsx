import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '@screens';

export const AuthRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};
