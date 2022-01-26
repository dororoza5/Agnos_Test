import React, { useState } from 'react';
import SearchBox from './SearchBox';
import Symptoms from './Symptoms';

const SymptomsHeader = (props) => {

    const [symp,setSymp] = useState([
        {id : 1, header : 'ศีรษะ', title : 'ไข้'},
        {id : 2, header : 'ศีรษะ', title : 'ผมร่วง'},
        {id : 3, header : 'ตา', title : 'ตาเหลือง'},
        {id : 4, header : 'ตา', title : 'ขี้ตาเยอะ'},
        {id : 5, header : 'ปาก และ ลำคอ', title : 'ฝ้าขาวที่ลิ้น'}
      ])

    const [inputText, setInputText] = useState('')

    const [sortInputSymp, setSortInputSymp] = useState([
        {id : 1, header : 'ศีรษะ', title : 'ไข้'},
        {id : 2, header : 'ศีรษะ', title : 'ผมร่วง'},
        {id : 3, header : 'ตา', title : 'ตาเหลือง'},
        {id : 4, header : 'ตา', title : 'ขี้ตาเยอะ'},
        {id : 5, header : 'ปาก และ ลำคอ', title : 'ฝ้าขาวที่ลิ้น'}
    ])

    const filterSort = (e) => {
        setInputText(e.target.value)
        const newSort = symp.filter((symp) => {
            if(inputText.length!==0){
              return symp.title.includes(e.target.value)
            }else{
              return symp
            }
        })
        setSortInputSymp(newSort)
    }

  return (
  <div>
      <SearchBox inputText={inputText} onChange={filterSort}/>

      {
        (sortInputSymp.filter(sortInputSymp => sortInputSymp.header === 'ศีรษะ')).length!==0 
        && props.head 
        && <h2>ศีรษะ</h2>
      }
      {props.head && <Symptoms symp={sortInputSymp.filter(sortInputSymp => sortInputSymp.header === 'ศีรษะ')}/>}

      {
        (sortInputSymp.filter(sortInputSymp => sortInputSymp.header === 'ตา')).length!==0
        && props.eye 
        && <h2>ตา</h2>
      }
      {props.eye && <Symptoms symp={sortInputSymp.filter(sortInputSymp => sortInputSymp.header === 'ตา')} />}

      {
        (sortInputSymp.filter(sortInputSymp => sortInputSymp.header === 'ปาก และ ลำคอ')).length!==0
        && props.mouse 
        && <h2>ปาก และ ลำคอ</h2>
      }
      {props.mouse && <Symptoms symp={sortInputSymp.filter(sortInputSymp => sortInputSymp.header === 'ปาก และ ลำคอ')} />}
  </div>
  );
};

export default SymptomsHeader;
