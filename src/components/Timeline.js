import React, { useState } from 'react';

import '../styles/Timeline.scss';

function Timeline() {
  const [yearList, setYearList] = useState([1, 2]);
  const [displayList, setDisplayList] = useState(false);
  return (
    <div className='timeline'>
      <div
        className='timeline__year'
        onClick={() => {
          setDisplayList(!displayList);
        }}
      >
        Year
      </div>
      {displayList && (
        <div className='timeline__year-list'>
          <ul>
            {yearList.map((year, index) => {
              return <li key={index}>{year}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Timeline;
