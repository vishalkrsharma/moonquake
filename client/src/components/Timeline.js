import React, { useState, useEffect } from 'react';

import '../styles/Timeline.scss';
import { getData } from '../data/getData';

function Timeline(props) {
  const { quake, setQuake } = props;
  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  useEffect(() => {
    getData()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getQuake = () => {
    for (var i = 0; i < data.length; i++) {
      if (data[i]._id === id) {
        setQuake(data[i]);
      }
    }
  };

  const printData = () => {
    console.log(data);
  };

  return (
    <div className='timeline'>
      <button onClick={printData}>print fetched data data</button>
      <select
        name=''
        id=''
        onChange={(e) => {
          const ob = e.target.value;
          setId(e.target.value);
          getQuake();
        }}
      >
        {data.map((item, index) => {
          return (
            <option key={index} value={item._id}>
              {item._id}
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
