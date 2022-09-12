import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Space from './components/Space';
import '@fontsource/roboto-mono';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Space />
    </div>
  );
}

export default App;
