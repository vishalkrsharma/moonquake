import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import BackGround from './BackGround';
import { OrbitControls } from '@react-three/drei';
import { Link } from 'react-router-dom';

import '../styles/FirstPerson.scss';
import Surface from './Surface';
import { axesHelper } from 'three';

function FirstPerson() {
  const [directionalLightIntensity, setDirectionalLightIntensity] = useState(50);
  const [ambientLightIntensity, setAmbientLightIntensity] = useState(3);

  return (
    <div className='firstPerson'>
      <Canvas className='canvas' camera={{ fov: 35, zoom: 0.5, near: 1, far: 1000 }}>
        <OrbitControls enableZoom={true} enablePan={true} autoRotate={false} />
        {/* <ambientLight intensity={ambientLightIntensity / 100} /> */}
        {/* <spotLight position={[0, 0, 0]} intensity={2} angle={Math.PI} /> */}
        <directionalLight position={[0, 10, 0]} intensity={2} angle={-0.3} />
        <axesHelper args={[10, 50, 50]} />
        <BackGround />
        <Surface />
      </Canvas>
    </div>
  );
}

export default FirstPerson;
