import React from 'react';

const YourSymptom = ({yourSympList, handleDeleteYourSymptom}) => {

    // const newList = yourSympList.map( (symptom) => (
    //     <button key={symptom} handleDeleteYourSymptom={() => handleDeleteYourSymptom(symptom)}>{symptom}</button>
    // ))

  return (
    <div className='yoursymptom'>
        <h3 className='text'>อาการของคุณ</h3>
        {yourSympList.map( (symptom) => (
            <button className='searchpage-button' key={symptom} onClick={() => handleDeleteYourSymptom(symptom)}>{symptom} -</button>
        ))}
    </div>
  );
};

export default YourSymptom;
