import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import BackGround from './BackGround';
import Moon from './Moon';
import Wireframe from './Wireframe';
import Info from './Info';
import Sun from './Sun';
import Wave from './Wave';
import AxesHelper from './AxesHelper';
import Lander from './Lander';

import '../styles/Space.scss';

function Space() {
  const [axes, setAxes] = useState(0);
  const [directionalLightIntensity, setDirectionalLightIntensity] = useState(50);
  const [ambientLightIntensity, setAmbientLightIntensity] = useState(5);
  const [wireframe, setWireframe] = useState(false);
  const [moon, setMoon] = useState(true);
  const [heightMap, setHeightMap] = useState(false);
  const [apolloLanders, setApolloLanders] = useState(true);
  const [quake, setQuake] = useState();

  const landerLocation = [
    [23, 1],
    [-23, -3],
    [-17, -3],
    [4, 26],
    [16, -9],
    [31, 20],
  ];

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
            {moon === true ? <Moon heightMap={heightMap} /> : <></>}
            {wireframe === true ? <Wireframe /> : <></>}
            <AxesHelper axes={axes} />
            <Sun />
            {apolloLanders &&
              landerLocation.map((lander, index) => {
                return <Lander key={index} long={lander[0]} lat={lander[1]} />;
              })}
            <Wave />
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
        heightMap={heightMap}
        setHeightMap={setHeightMap}
        apolloLanders={apolloLanders}
        setApolloLanders={setApolloLanders}
        quake={quake}
        setQuake={setQuake}
      />
    </>
  );
}

export default Space;
