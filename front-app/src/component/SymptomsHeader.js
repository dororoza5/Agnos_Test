import React, { useState } from 'react';
import Symptoms from './Symptoms';

const SymptomsHeader = () => {

    const [symp,setSymp] = useState([
        {id : 1, header : 'ศีรษะ', title : 'ไข้ +'},
        {id : 2, header : 'ศีรษะ', title : 'ผมร่วง +'},
        {id : 3, header : 'ตา', title : 'ตาเหลือง +'},
        {id : 4, header : 'ตา', title : 'ขี้ตาเยอะ +'},
        {id : 5, header : 'ปาก และ ลำคอ', title : 'ฝ้าขาวที่ลิ้น +'}
    ])

  return (
  <div>
      <h2>ศีรษะ</h2>
      <Symptoms symp={symp.filter(symp => symp.header === 'ศีรษะ')} />

      <h2>ตา</h2>
      <Symptoms symp={symp.filter(symp => symp.header === 'ตา')} />

      <h2>ปาก และ ลำคอ</h2>
      <Symptoms symp={symp.filter(symp => symp.header === 'ปาก และ ลำคอ')} />
  </div>
  );
};

export default SymptomsHeader;
