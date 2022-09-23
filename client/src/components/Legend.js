import React from 'react'

import '../styles/Legend.scss';
import legend from '../assets/legend.png'


function Legend() {
  return (
    <div className="legend">
      <div className="legend__title">Height Map</div>
        <div className="legend__top">+1000km</div>
        <div className="legend__bottom">-1000km</div>
        <img src={legend} alt="" className="legend__img" />
      </div>
  )
}

export default Legend