import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Space from './components/Space';
import Home from './components/Home';
import About from './components/About';
import '@fontsource/roboto-mono';
import './App.scss';
import FirstPerson from './components/FirstPerson';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/model' element={<Space />} />
          <Route path='/about' element={<About />} />
          <Route path='/firstPerson' element={<FirstPerson />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
