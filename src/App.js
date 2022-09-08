import React from 'react';
import '@fontsource/roboto-mono';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import Space from './components/Space';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Space />
    </div>
  );
}

export default App;
