import React from 'react';

function FirstPerson(props) {
  const { magnitude } = props.location.state;
  console.log(magnitude);
  return <div className='firstPerson'></div>;
}

export default FirstPerson;
