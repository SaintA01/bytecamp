import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './AuthPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<AuthPage mode="login" />} />
        <Route path="/auth/signup" element={<AuthPage mode="signup" />} />
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
