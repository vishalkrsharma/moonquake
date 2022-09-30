import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';

import BackGround from './BackGround';
import Moon from './Moon';
import Wireframe from './Wireframe';
import Sun from './Sun';
import Wave from './Wave';
import AxesHelper from './AxesHelper';
import Lander from './Lander';
import Menu from './Menu';
import QuakeInfo from './QuakeInfo';
import loader from '../assets/loader.gif';
import Legend from './Legend';

import '../styles/Space.scss';

function Space() {
  const [axes, setAxes] = useState(0);
  const [directionalLightIntensity, setDirectionalLightIntensity] = useState(50);
  const [ambientLightIntensity, setAmbientLightIntensity] = useState(3);
  const [wireframe, setWireframe] = useState(false);
  const [moon, setMoon] = useState(true);
  const [heightMap, setHeightMap] = useState(false);
  const [apolloLanders, setApolloLanders] = useState(true);
  const [quake, setQuake] = useState([]);

  const landerLocation = [
    [1, 23, 11],
    [-3, -23, 12],
    [-3, -17, 14],
    [26, 4, 15],
    [-9, 16, 16],
    [20, 31, 17],
  ];

  return (
    <>
      <Link className='back' to='/'>
        &lt;Back to Home
      </Link>
      <div className='space'>
        <Suspense
          fallback={
            <div className='loader'>
              <img className='loader__img' src={loader} alt='loader' />
            </div>
          }
        >
          <Canvas className='canvas' camera={{ fov: 35, zoom: 0.5, near: 1, far: 1000 }}>
            <OrbitControls enableZoom={true} minDistance={3.2} maxDistance={6} enablePan={true} autoRotate={false} />
            <ambientLight intensity={ambientLightIntensity / 100} />
            <spotLight position={[0, 0, 0]} intensity={2} angle={Math.PI} />
            <directionalLight position={[0, 0, 100]} intensity={directionalLightIntensity / 100} angle={-0.3} />
            <BackGround />
            {moon === true ? <Moon heightMap={heightMap} /> : <></>}
            {wireframe && <Wireframe />}
            <AxesHelper axes={axes} />
            <Sun />
            {apolloLanders &&
              landerLocation.map((lander, index) => {
                return <Lander key={index} lat={lander[0]} long={lander[1]} num={lander[2]} />;
              })}
            <Wave quake={quake} />
          </Canvas>
        </Suspense>
      </div>
      <Menu
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
      <QuakeInfo quake={quake} />
      {heightMap && <Legend />}
    </>
  );
}

export default Space;
