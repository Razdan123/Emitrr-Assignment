import React, { useState } from 'react';
import Navbar from './components/navbar';
import Quiz from './components/quiz';
import Profile from './components/profile';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('Quiz');

  const handleTabClick = (tab) => {
    setActiveComponent(tab);
  };

  return (
    <>
      <Navbar onTabClick={handleTabClick} />
      {activeComponent === 'Quiz' && <Quiz />}
      {activeComponent === 'Profile' && <Profile />}
    </>
  );
}

export default App;
