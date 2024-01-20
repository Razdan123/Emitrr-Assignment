import React, { useState } from 'react';
import Navbar from './components/navbar';
import Quiz from './components/quiz';
import Profile from './components/profile';
import LeaderBoard from './components/leaderboard';
import Register from './components/register';
import Login from './components/login';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('Register');

  const handleTabClick = (tab) => {
    if (activeComponent === 'Register') {
      return;
    }
    setActiveComponent(tab);
  };

  const handleRegistration = async (userData) => {
    try {
      const response = await fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem('jwtToken', data.token);
        setActiveComponent('Profile');
      } else {
        console.error('Registration failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleLogin = () => {
    setActiveComponent('Login');
  };

  return (
    <>
      <Navbar onTabClick={handleTabClick} />
      {activeComponent === 'Quiz' && <Quiz />}
      {activeComponent === 'Profile' && <Profile />}
      {activeComponent === 'LeaderBoard' && <LeaderBoard />}
      {activeComponent === 'Register' && <Register onRegistration={handleRegistration} onLogin={handleLogin} />}
      {activeComponent === 'Login' && <Login onLogin={() => setActiveComponent('Profile')} />}
    </>
  );
}

export default App;
