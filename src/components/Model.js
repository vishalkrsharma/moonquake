import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Points from "./Point";
import Moon from "./Moon";
import Menu from "./Menu";

import "../styles/Model.scss";

function Model() {
  const [axes, setAxes] = useState(0);
  const [spotLightIntensity, setSpotLightIntensity] = useState(50);
  console.log(spotLightIntensity);

  return (
    <>
      <div className="model">
        <Canvas
          className="canvas"
          camera={{ fov: 35, zoom: 1, near: 1, far: 1000 }}
        >
          <OrbitControls enableZoom={true} />
          <Suspense>
            <ambientLight intensity={0.03} />
            <spotLight
              position={[10, 0, 10]}
              intensity={spotLightIntensity / 100}
              angle={0.5}
            />
            <Moon />

            <axesHelper args={[axes, 50, 50]} position={[0, 0, 0]} />
          </Suspense>
        </Canvas>
        <Canvas>
          <Points />
        </Canvas>
      </div>
      <Menu
        spotLightIntensity={spotLightIntensity}
        setSpotLightIntensity={setSpotLightIntensity}
        axes={axes}
        setAxes={setAxes}
      />
    </>
  );
}

export default Model;
