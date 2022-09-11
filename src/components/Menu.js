import React, { useState } from 'react';

import '../styles/Menu.scss';

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
  } = props;

  const [axesStatus, setAxesStatus] = useState('Off');
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
              &emsp;x-axis : blue
              <br />
              &emsp;y-axis : orange
              <br />
              &emsp;z-axis : green
            </td>
            <td>
              <button
                className='btn'
                onClick={() => {
                  setAxes(axes === 0 ? 10 : 0);
                  setAxesStatus(axesStatus === 'Off' ? 'On' : 'Off');
                }}
              >
                {axesStatus}
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
                defaultValue={50}
                onChange={(e) => {
                  setDirectionalLightIntensity(e.target.value);
                }}
              />
            </td>
            {/* <td>
              <button
                className='btn'
                onClick={() => {
                  setDirectionalLightIntensity(50);
                }}
              >
                Reset
              </button>
            </td> */}
          </tr>
          <tr>
            <td className='td__info'>
              <div className='data'>
                ambientLightIntensity &emsp;
                <span>{ambientLightIntensity}</span>
              </div>
              <input
                type='range'
                min={0}
                max={100}
                defaultValue={50}
                onChange={(e) => {
                  setAmbientLightIntensity(e.target.value);
                }}
              />
            </td>
            {/* <td>
                <button
                  className='btn'
                  onClick={() => {
                    setAmbientLightIntensity(3);
                  }}
                >
                  Reset
                </button>
            </td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Menu;
