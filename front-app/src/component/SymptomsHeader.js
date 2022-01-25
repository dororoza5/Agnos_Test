import React, { useState } from 'react';
import Symptoms from './Symptoms';

const SymptomsHeader = (props) => {

    const [symp,setSymp] = useState([
        {id : 1, header : 'ศีรษะ', title : 'ไข้ +'},
        {id : 2, header : 'ศีรษะ', title : 'ผมร่วง +'},
        {id : 3, header : 'ตา', title : 'ตาเหลือง +'},
        {id : 4, header : 'ตา', title : 'ขี้ตาเยอะ +'},
        {id : 5, header : 'ปาก และ ลำคอ', title : 'ฝ้าขาวที่ลิ้น +'}
    ])

  return (
  <div>

      {props.head && <h2>ศีรษะ</h2>}
      {props.head && <Symptoms symp={symp.filter(symp => symp.header === 'ศีรษะ')} />}

      {props.eye && <h2>ตา</h2>}
      {props.eye && <Symptoms symp={symp.filter(symp => symp.header === 'ตา')} />}

      {props.mouse && <h2>ปาก และ ลำคอ</h2>}
      {props.mouse && <Symptoms symp={symp.filter(symp => symp.header === 'ปาก และ ลำคอ')} />}
  </div>
  );
};

export default SymptomsHeader;
