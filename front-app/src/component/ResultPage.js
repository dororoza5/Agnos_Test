import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import YourSymptom from './YourSymptom';

const ResultPage = () => {

    const handleDeleteYourSymptom = (data) => {
    }
    const location = useLocation()
    const {yourSympList} = location.yourSympList


  return (
  <div>
      <h1>อาการของคุณมีดังนี้ใช่หรือไม่</h1>
      <YourSymptom yourSympList={yourSympList} handleDeleteYourSymptom={handleDeleteYourSymptom}/>
      <Link to='/'>ย้อนกลับ</Link>
      <Link to='/finish'>ใช่</Link>
  </div>
  );
};

export default ResultPage;
