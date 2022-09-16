import React, { useState, useEffect } from 'react';

import '../styles/Timeline.scss';
import { getData } from '../data/getData';

function Timeline(props) {
  const { quake, setQuake } = props;

  const [ind, setind] = useState();
  const [data, setData] = useState([]);

  console.log(quake);
  useEffect(() => {
    getData()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const years = [1971, 1972, 1973, 1974, 1975, 1976];

  const printData = () => {
    console.log(data);
  };

  return (
    <div className='timeline'>
      <button onClick={printData}>print data</button>
      <select>
        {years.map((item, index) => {
          return (
            <option
              key={index}
              value={item}
              onClick={(e) => {
                console.log(e.value);
                setQuake(e.value);
              }}
            >
              {item}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => {
          printData();
        }}
      >
        get
      </button>
    </div>
  );
}

export default Timeline;
