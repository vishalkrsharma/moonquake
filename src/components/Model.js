import React, { Suspense } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
// import { Physics, useSphere } from '@react-three/cannon';

import moon from '../assets/moon.jpg';
import stars from '../assets/stars.jpg';

import '../styles/Model.scss';

function Shape() {
  const moonTexture = useLoader(THREE.TextureLoader, moon);

  return (
    <mesh rotation={[0, -Math.PI / 5, 0]}>
      <sphereGeometry attach='geometry' />
      <meshStandardMaterial map={moonTexture} />
    </mesh>
  );
}

function Space() {
  const { scene } = useThree();

  const starsTexture = useLoader(THREE.TextureLoader, stars);

  THREE.Texture.mapping = THREE.EquirectangularRefractionMapping;

  scene.background = starsTexture;
  return null;
}

function Model() {
  return (
    <div className='model'>
      <Canvas className='canvas' camera={{ fov: 35, zoom: 1.0, near: 1, far: 1000 }}>
        <OrbitControls enableZoom={true} enablePan={true} />
        <Suspense>
          <ambientLight intensity={0.03} />
          <spotLight position={[90, 0, 90]} intensity={1} angle={0.5} />
          <Space />
          <Shape />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Model;
