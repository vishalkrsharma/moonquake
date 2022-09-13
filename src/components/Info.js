import React from 'react';

import Menu from './Menu';
import '../styles/Info.scss';
import Timeline from './Timeline';

function Info(props) {
  const {
    moon,
    setMoon,
    axes,
    setAxes,
    directionalLightIntensity,
    setDirectionalLightIntensity,
    ambientLightIntensity,
    setAmbientLightIntensity,
    wireframe,
    setWireframe,
    heightMap,
    setHeightMap,
  } = props;

  return (
    <div className='info'>
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
      />
      <Timeline />
    </div>
  );
}

export default Info;
