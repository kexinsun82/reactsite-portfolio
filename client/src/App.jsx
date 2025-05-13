import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import ProjectDetail from './Components/Projects/ProjectDetail';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    document.body.classList.toggle('light-theme', !isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
          <Route path="/projects/:projectName" element={<ProjectDetail isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;