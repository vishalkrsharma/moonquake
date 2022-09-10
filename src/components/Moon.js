import React from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import moon from '../assets/moon.jpg';

function Moon() {
  const moonTexture = useLoader(THREE.TextureLoader, moon);

  return (
    <>
      <mesh rotation={[0, -Math.PI / 5, 0]}>
        <sphereGeometry attach='geometry' args={[2, 100, 100]} />
        <meshPhongMaterial color='black' />
        <meshStandardMaterial map={moonTexture} />
      </mesh>
    </>
  );
}

export default Moon;
