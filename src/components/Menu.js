import React, { useState } from 'react';

import '../styles/Menu.scss';

function Menu({ axes, setAxes, setSpotLightIntensity, spotLightIntensity, ambientLightIntensity, setAmbientLightIntensity }) {
  const [axesStatus, setAxesStatus] = useState('Off');
  return (
    <div className='menu'>
      <table>
        <tbody>
          <tr>
            <td>axesHelper</td>
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
            <td>
              <div className='data'>
                spotLightIntensity
                <span>{spotLightIntensity}</span>
              </div>
            </td>
            <td>
              <button className='btn--half btn' onClick={() => setSpotLightIntensity(spotLightIntensity - 5)} disabled={spotLightIntensity === 0}>
                -
              </button>
              <button className='btn--half btn' onClick={() => setSpotLightIntensity(spotLightIntensity + 5)} disabled={spotLightIntensity === 100}>
                +
              </button>
              <button
                className='btn'
                onClick={() => {
                  setSpotLightIntensity(50);
                }}
              >
                Reset
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div className='data'>
                ambientLightIntensity &emsp;
                <span>{ambientLightIntensity}</span>
              </div>
            </td>
            <td>
              <button className='btn--half btn' onClick={() => setAmbientLightIntensity(ambientLightIntensity - 1)} disabled={ambientLightIntensity === 3}>
                -
              </button>
              <button className='btn--half btn' onClick={() => setAmbientLightIntensity(ambientLightIntensity + 1)} disabled={ambientLightIntensity === 8}>
                +
              </button>
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
    </div>
  );
}

export default Menu;
