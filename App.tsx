
import React, { useState, useCallback } from 'react';
import LoginPage from './components/LoginPage';
import MainLayout from './components/MainLayout';
import type { User } from './types';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = useCallback((user: User) => {
    setCurrentUser(user);
  }, []);

  const handleLogout = useCallback(() => {
    setCurrentUser(null);
  }, []);

  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <MainLayout user={currentUser} onLogout={handleLogout} />;
};

export default App;
