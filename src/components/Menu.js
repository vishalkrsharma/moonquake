import React, { useState } from 'react';

import '../styles/Menu.scss';

function Menu({ axes, setAxes, setSpotLightIntensity, spotLightIntensity }) {
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
            <td>spotLightIntensity {spotLightIntensity}</td>
            <td>
              <button className='btn--half btn' onClick={() => setSpotLightIntensity(spotLightIntensity - 5)} disabled={spotLightIntensity === 0}>
                -
              </button>
              <button className='btn--half btn' onClick={() => setSpotLightIntensity(spotLightIntensity + 5)} disabled={spotLightIntensity === 100}>
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Menu;
