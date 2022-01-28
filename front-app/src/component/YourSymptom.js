import React, { useState } from 'react';

const YourSymptom = ({yourSympList, handleDeleteYourSymptom, searchPage}) => {

  return (
    <div className='yoursymptom'>
        {searchPage && <h3 className='text3'>อาการของคุณ</h3>}
        {searchPage && yourSympList.map( (symptom) => (
            <button className='searchpage-button' key={symptom} onClick={() => handleDeleteYourSymptom(symptom)}>{symptom} -</button>
        ))}
        <div className='yoursymtom-result'>
          {!searchPage && yourSympList.map( (symptom) => (
            <button className='resultpage-button' key={symptom} onClick={() => handleDeleteYourSymptom(symptom)}>{symptom}</button>
          ))}
        </div>
    </div>


  );
};

export default YourSymptom;
