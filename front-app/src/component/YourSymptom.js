import React from 'react';

const YourSymptom = ({yourSympList, handleDeleteYourSymptom}) => {

    // const newList = yourSympList.map( (symptom) => (
    //     <button key={symptom} handleDeleteYourSymptom={() => handleDeleteYourSymptom(symptom)}>{symptom}</button>
    // ))

  return (
    <div>
        {yourSympList.map( (symptom) => (
            <button key={symptom} onClick={() => handleDeleteYourSymptom(symptom)}>{symptom}</button>
        ))}
    </div>
  );
};

export default YourSymptom;
