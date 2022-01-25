import React, { useState } from 'react';

const Symptoms = ({symp}) => {

    const handleClick = (sid) => {
        console.log(sid)
    }

  return (
  <div>
      {symp.map(symp => (
          <div key={symp.id}>
              <button type='button' onClick={() => handleClick(symp.id)}>{symp.title}</button>
          </div>
      ))}
  </div>
  );
};

export default Symptoms;
