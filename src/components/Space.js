import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Moon from './Moon';
import Menu from './Menu';
import Cube from './Cube';
import BackGround from './BackGround';

import '../styles/Space.scss';

function Space() {
  const [axes, setAxes] = useState(0);
  const [spotLightIntensity, setSpotLightIntensity] = useState(50);
  const [ambientLightIntensity, setAmbientLightIntensity] = useState(3);

  return (
    <>
      <div className='space'>
        <Canvas className='canvas' camera={{ fov: 35, zoom: 0.5, near: 1, far: 1000 }}>
          <OrbitControls enableZoom={true} minDistance={3} maxDistance={6} />
          <Suspense>
            <ambientLight intensity={ambientLightIntensity / 100} />
            <spotLight position={[10, 0, 10]} intensity={spotLightIntensity / 100} angle={0.5} />
            <BackGround />
            <Moon />
            <Cube />
            <axesHelper args={[axes, 50, 50]} position={[0, 0, 0]} />
          </Suspense>
        </Canvas>
      </div>
      <Menu
        axes={axes}
        setAxes={setAxes}
        spotLightIntensity={spotLightIntensity}
        setSpotLightIntensity={setSpotLightIntensity}
        ambientLightIntensity={ambientLightIntensity}
        setAmbientLightIntensity={setAmbientLightIntensity}
      />
    </>
  );
}

export default Space;
