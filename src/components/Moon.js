import React from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import moon from '../assets/moon.jpg';

function Moon() {
  const moonTexture = useLoader(THREE.TextureLoader, moon);

  return (
    <>
      <mesh>
        <sphereGeometry attach='geometry' args={[2, 100, 100, -Math.PI / 2]} />
        <meshPhongMaterial color='black' />
        <meshStandardMaterial map={moonTexture} wireframe={false} />
      </mesh>
    </>
  );
}

export default Moon;
