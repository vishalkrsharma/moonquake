import React from 'react';
import '@fontsource/roboto-mono';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import Model from './components/Model';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Model />
    </div>
  );
}

export default App;
