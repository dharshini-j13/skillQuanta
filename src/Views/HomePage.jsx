import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [isBlue, setIsBlue] = useState(false);

  const toggleColor = () => {
    setIsBlue(!isBlue);
  };

  return (
    <div className="skillforge-homepage">
      <h1>Welcome to SkillForge 🔥</h1>
      <p>The ultimate platform to exchange, learn, and teach skills with AI support.</p>
      <div className={`color-box ${isBlue ? 'blue-box' : 'red-box'}`}></div>
      <button className="color-toggle-btn" onClick={toggleColor}>
        Switch Theme
      </button>
    </div>
  );
};

export default HomePage;
