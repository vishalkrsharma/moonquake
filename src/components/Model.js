import React, { Suspense, useState ,useRef} from 'react';
import { Canvas,useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Moon from './Moon';
import Menu from './Menu';
import '../styles/Model.scss';

function Model() {
  const [axes, setAxes] = useState(10);
  
  return (
    <>
      <div className='model'>
        <Canvas className='canvas' camera={{ fov: 35, zoom: 1, near: 1, far: 1000 }}>
        <OrbitControls 
          enableRotate={true}
            enableZoom={false} />
            
          <Suspense>
            
            <ambientLight intensity={0.03} />
            <spotLight position={[10, 0, 10]} intensity={1} angle={0.5} />
            
            <Moon />
            <axesHelper args={[axes, 50, 50]} position={[0, 0, 0]} />
          </Suspense>
        </Canvas>
      </div>
      <Menu axes={axes} setAxes={setAxes} />
    </>
  );
}


export default Model;
