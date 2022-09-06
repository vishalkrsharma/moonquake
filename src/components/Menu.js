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
            <td>spotLight</td>
            <td>
              <button onClick={() => setSpotLightIntensity(spotLightIntensity - 5)}>-</button>
              <button onClick={() => setSpotLightIntensity(spotLightIntensity + 5)}>+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Menu;
