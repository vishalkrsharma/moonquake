import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import texture from '../assets/moon.jpg';

import '../styles/Model.scss';
import { TextureLoader } from 'three';

function Shape() {
  const moonTexture = useLoader(TextureLoader, texture);

  return (
    <mesh>
      <sphereGeometry attach='geometry' />
      <meshStandardMaterial map={moonTexture} />
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
