import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import '../styles/Model.scss';

function Shape() {
  return (
    <mesh>
      <sphereGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='hotpink' />
    </mesh>
  );
}

function Model() {
  return (
    <div className='model'>
      <Canvas className='canvas'>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Shape />
      </Canvas>
    </div>
  );
}

export default Model;
