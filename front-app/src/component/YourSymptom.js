import React from 'react';

const YourSymptom = ({yourSympList, handleDeleteYourSymptom, searchPage}) => {

    // const newList = yourSympList.map( (symptom) => (
    //     <button key={symptom} handleDeleteYourSymptom={() => handleDeleteYourSymptom(symptom)}>{symptom}</button>
    // ))

  return (
    <div className='yoursymptom'>
        {searchPage && <h3 className='text3'>อาการของคุณ</h3>}
        {yourSympList.map( (symptom) => (
            <button className='searchpage-button' key={symptom} onClick={() => handleDeleteYourSymptom(symptom)}>{symptom} -</button>
        ))}
    </div>
  );
};

export default YourSymptom;
