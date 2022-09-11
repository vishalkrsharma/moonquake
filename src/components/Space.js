import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import BackGround from './BackGround';
import Sphere from './Sphere';
import Moon from './Moon';
import Wireframe from './Wireframe';
import Info from './Info';
import Sun from './Sun';

import '../styles/Space.scss';

function Space() {
  const [axes, setAxes] = useState(0);
  const [directionalLightIntensity, setDirectionalLightIntensity] = useState(25);
  const [ambientLightIntensity, setAmbientLightIntensity] = useState(3);
  const [wireframe, setWireframe] = useState(false);
  const [moon, setMoon] = useState(true);

  return (
    <>
      <div className='space'>
        <Canvas className='canvas' camera={{ fov: 35, zoom: 0.5, near: 1, far: 1000 }}>
          <OrbitControls enableZoom={true} minDistance={3.2} maxDistance={6} enablePan={true} autoRotate={false} />
          <Suspense>
            <ambientLight intensity={ambientLightIntensity / 100} />
            <spotLight position={[0, 0, 0]} intensity={2} angle={Math.PI} />
            <directionalLight position={[0, 0, 100]} intensity={directionalLightIntensity / 100} angle={-0.3} />
            <BackGround />
            {moon === true ? <Moon /> : <></>}
            <Sphere />
            {wireframe === true ? <Wireframe /> : <></>}
            <axesHelper args={[axes, 50, 50]} position={[0, 0, 0]} />
            <Sun />
          </Suspense>
        </Canvas>
      </div>
      <Info
        moon={moon}
        setMoon={setMoon}
        axes={axes}
        setAxes={setAxes}
        directionalLightIntensity={directionalLightIntensity}
        setDirectionalLightIntensity={setDirectionalLightIntensity}
        ambientLightIntensity={ambientLightIntensity}
        setAmbientLightIntensity={setAmbientLightIntensity}
        wireframe={wireframe}
        setWireframe={setWireframe}
      />
    </>
  );
}

export default Space;
