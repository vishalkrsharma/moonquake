import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, useSphere } from '@react-three/cannon';

import texture from '../assets/moon.jpg';

import '../styles/Model.scss';
import { TextureLoader } from 'three';

function Shape() {
  const moonTexture = useLoader(TextureLoader, texture);

  return (
    <mesh rotation={[0, -Math.PI / 5, 0]}>
      <sphereGeometry attach='geometry' />
      <meshStandardMaterial map={moonTexture} />
    </mesh>
  );
}

function Model() {
  return (
    <div className='model'>
      <Canvas className='canvas' camera={{ fov: 35, zoom: 1.0, near: 1, far: 1000 }}>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.03} />
        <spotLight position={[90, 0, 90]} intensity={1} angle={0.5} />
        <Shape />
      </Canvas>
    </div>
  );
}

export default Model;
