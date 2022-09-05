import React from 'react';

import '../styles/Menu.scss';

function Menu({ axes, setAxes }) {
  return (
    <div className='menu'>
      <button
        onClick={() => {
          setAxes(axes === 0 ? 10 : 0);
        }}
      >
        Toggle Axes
      </button>
    </div>
  );
}

export default Menu;
