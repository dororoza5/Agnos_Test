import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import YourSymptom from './YourSymptom';

const ResultPage = () => {

    const handleDeleteYourSymptom = (data) => {
    }
    const location = useLocation()
    const {yourSympList} = location.yourSympList


  return (
  <div className='result-background'>
      {/* <div className='result-background'/> */}
      <h1 className='result-text1'>อาการของคุณมีดังนี้ใช่หรือไม่</h1>
      <YourSymptom yourSympList={yourSympList} handleDeleteYourSymptom={handleDeleteYourSymptom}/>
      <div className='resultpage-link-list'>
        <Link className='go-homepage' to='/'>ย้อนกลับ</Link>
        <Link className='go-finishpage' to='/finish'>ใช่</Link>
      </div>
  </div>
  );
};

export default ResultPage;
