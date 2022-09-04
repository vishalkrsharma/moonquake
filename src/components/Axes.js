import React from 'react';
import { Canvas } from '@react-three/fiber';

function Axes() {
  return (
    <div className='axes'>
      <Canvas>
        <axesHelper args={[2, 50, 50]} position={[5, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default Axes;
