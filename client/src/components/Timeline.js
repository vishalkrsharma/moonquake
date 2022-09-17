import React, { useState, useEffect } from 'react';

import '../styles/Timeline.scss';
import { getData } from '../data/getData';

function Timeline(props) {
  const { quake, setQuake } = props;
  const [data, setData] = useState([]);
  // const [id, setId] = useState('');
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
        onChange={(e) => {
          // setId();
          getQuake(e.target.value);
        }}
      >
        {data.map((item, index) => {
          return (
            <option key={index} value={item._id}>
              {`${item.latitude}, ${item.longitude}`}
            </option>
          );
        })}
      </select>
      <button onClick={printData}>print fetched data data</button>
    </div>
  );
}

export default Timeline;
