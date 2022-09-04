import React from 'react';
import { useLoader } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import moon from '../assets/moon.jpg';

function Moon() {
  const moonTexture = useLoader(THREE.TextureLoader, moon);

  return (
    <>
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
      <mesh rotation={[0, -Math.PI / 5, 0]}>
        <sphereGeometry attach='geometry' args={[1, 100, 100]} />
        <meshPhongMaterial color='black' />
        <meshStandardMaterial map={moonTexture} />
      </mesh>
    </>
  );
}

export default Moon;
