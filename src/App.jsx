import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import ContactMe from './sections/ContactMe'
import CustomCursor from './components/CustomCursor';
import { CursorContext } from './contexts/CursorContext';

function App() {
  const [cursorText, setCursorText] = useState(' SCROLL <>');

  const updateCursorText = (text) => {
    setCursorText(text);
  };

  return (
    <CursorContext.Provider value={{ cursorText, updateCursorText }}>
      <Router>
        <CustomCursor />
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Portfolio />
        <ContactMe />
      </Router>
    </CursorContext.Provider>
  );
}

export default App;
