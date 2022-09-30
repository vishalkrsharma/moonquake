import React from 'react';

import '../styles/Menu.scss';
import Timeline from './Timeline';

function Menu(props) {
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
    apolloLanders,
    setApolloLanders,
    quake,
    setQuake,
    places,
    setPlaces,
  } = props;

  return (
    <div className='menu'>
      <table className='table table__1'>
        <tbody>
          <tr>
            <td className='td__info'>moon</td>
            <td>
              <button
                className='btn'
                onClick={() => {
                  setMoon(!moon);
                }}
              >
                {moon === true ? 'On' : 'Off'}
              </button>
            </td>
          </tr>
          <tr>
            <td className='td__info'>
              axesHelper
              <br />
              &emsp;x-axis : <span className='orange'>orange</span>
              <br />
              &emsp;y-axis : <span className='green'>green</span>
              <br />
              &emsp;z-axis : <span className='blue'>blue</span>
            </td>
            <td>
              <button
                className='btn'
                onClick={() => {
                  setAxes(axes === 0 ? 10 : 0);
                }}
              >
                {axes === 0 ? 'Off' : 'On'}
              </button>
            </td>
          </tr>
          <tr>
            <td className='td__info'>wireframe</td>
            <td>
              <button
                className='btn'
                onClick={() => {
                  setWireframe(!wireframe);
                }}
              >
                {wireframe === true ? 'On' : 'Off'}
              </button>
            </td>
          </tr>
          <tr>
            <td className='td__info'>heightMap</td>
            <td>
              <button
                className='btn'
                onClick={() => {
                  setHeightMap(!heightMap);
                }}
              >
                {heightMap === true ? 'On' : 'Off'}
              </button>
            </td>
          </tr>
          <tr>
            <td className='td__info'>apolloLanders</td>
            <td>
              <button
                className='btn'
                onClick={() => {
                  setApolloLanders(!apolloLanders);
                }}
              >
                {apolloLanders === true ? 'On' : 'Off'}
              </button>
            </td>
          </tr>
          <tr>
            <td className='td__info'>places</td>
            <td>
              <button
                className='btn'
                onClick={() => {
                  setPlaces(!places);
                }}
              >
                {places === true ? 'On' : 'Off'}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className='table table__2'>
        <tbody>
          <tr>
            <td className='td__info'>
              <div className='data'>
                directionalLightIntensity
                <span>{directionalLightIntensity}</span>
              </div>
              <input
                type='range'
                min={0}
                max={100}
                value={directionalLightIntensity}
                onChange={(e) => {
                  setDirectionalLightIntensity(e.target.value);
                }}
              />
            </td>
            <td>
              <button
                className='btn'
                onClick={() => {
                  setDirectionalLightIntensity(50);
                }}
              >
                Reset
              </button>
            </td>
          </tr>
          <tr>
            <td className='td__info'>
              <div className='data'>
                ambientLightIntensity &emsp;
                <span>{ambientLightIntensity}</span>
              </div>
              <input
                type='range'
                min={1}
                max={5}
                value={ambientLightIntensity}
                onChange={(e) => {
                  setAmbientLightIntensity(e.target.value);
                }}
              />
            </td>
            <td>
              <button
                className='btn'
                onClick={() => {
                  setAmbientLightIntensity(3);
                }}
              >
                Reset
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Timeline quake={quake} setQuake={setQuake} />
    </div>
  );
}

export default Menu;
