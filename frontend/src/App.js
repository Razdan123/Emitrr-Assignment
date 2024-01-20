import React, { useState } from 'react';
import Navbar from './components/navbar';
import Quiz from './components/quiz';
import Profile from './components/profile';
import LeaderBoard from './components/leaderboard';
import Register from './components/register';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('Register');

  const handleTabClick = (tab) => {
    if (activeComponent === 'Register') {
      // If the user is not registered, prevent switching tabs
      return;
    }
    setActiveComponent(tab);
  };

  const handleRegistration = async (userData) => {
    try {
      // Make the POST request to the registration API
      const response = await fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
      // Parse the response JSON
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

  return (
    <>
      <Navbar onTabClick={handleTabClick} />
      {activeComponent === 'Quiz' && <Quiz />}
      {activeComponent === 'Profile' && <Profile />}
      {activeComponent === 'LeaderBoard' && <LeaderBoard />}
      {activeComponent === 'Register' && <Register onRegistration={handleRegistration} />}
    </>
  );
}

export default App;
