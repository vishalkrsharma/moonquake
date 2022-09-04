import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import '../styles/Model.scss';

import Moon from './Moon';

function Model() {
  return (
    <div className='model'>
      <Canvas className='canvas' camera={{ fov: 35, zoom: 1, near: 1, far: 1000 }}>
        <OrbitControls enableZoom={true} />
        <Suspense>
          <ambientLight intensity={0.03} />
          <spotLight position={[10, 0, 10]} intensity={1} angle={0.5} />
          <Moon />
        </Suspense>
        <axesHelper args={[2, 50, 50]} position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default Model;
