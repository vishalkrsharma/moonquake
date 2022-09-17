import React, { useState, useEffect } from 'react';

import '../styles/Timeline.scss';
import { getData } from '../data/getData';

function Timeline(props) {
  const { setQuake } = props;
  const [data, setData] = useState([]);
  const [year, setYear] = useState([]);

  const years = [1971, 1972, 1973, 1974, 1975, 1976];

  useEffect(() => {
    getData()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getQuake = (id) => {
    data.forEach((item) => {
      if (item._id === id) {
        setQuake(item);
        console.log(item);
        console.log(id);
      }
    });
  };

  const printData = () => {
    console.log(data);
  };

  return (
    <div className='timeline'>
      <select
        className='timeline__label'
        onChange={(e) => {
          setYear(e.target.value);
          console.log(e.target.value);
        }}
      >
        <option className='timeline__list' value='none' disabled hidden selected>
          Year
        </option>
        {years.map((year, index) => {
          return (
            <option key={index} value={year}>
              {year}
            </option>
          );
        })}
      </select>
      <select
        className='timeline__label'
        onChange={(e) => {
          getQuake(e.target.value);
        }}
      >
        <option className='timeline__list' value='none' disabled hidden selected>
          Day
        </option>
        {data.map((item, index) => {
          return (
            item.year === year && (
              <option className='timeline__list' key={index} value={item._id}>
                {item.day}
              </option>
            )
          );
        })}
      </select>
      <button onClick={printData}>data</button>
    </div>
  );
}

export default Timeline;
