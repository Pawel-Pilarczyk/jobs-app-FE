import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Dashboard = () => <h1>DASHBOARD</h1>;
const SignIn = () => <h1>SignIn</h1>;

function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default AppRouter;
