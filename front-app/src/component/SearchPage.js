import React, { useState } from 'react';
import SearchBox from './SearchBox';
import Symptoms from './Symptoms';
import SortTag from './SortTag';
import YourSymptom from './YourSymptom';

const SearchPage = () => {

    const [head, setHead] = useState(true)
    const [eye, setEye] = useState(true)
    const [mouse, setMouse] = useState(true)

    const [yourSympList, setYourSympList] = useState([])

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
            if(e.target.value.length!==0){
              return symp.title.includes(e.target.value)
            }else{
              return symp
            }
        })
        setSortInputSymp(newSort)
    }

    const handleAddYourSymp = (title) => {
      setYourSympList(yourSympList => [...yourSympList,title])
      setSortInputSymp(sortInputSymp.filter(sortInputSymp => sortInputSymp.title !== title))
    }

    const handleDeleteYourSymptom = (title) => {
      setYourSympList(yourSympList.filter(yourSympList => yourSympList !== title))
      setSortInputSymp(sortInputSymp => [...sortInputSymp,symp.filter( symp => symp.title === title)[0]])
      console.log(symp.filter( symp => symp.title === title))
    }

    // const handleTest = () => {
    //   console.log(yourSympList)
    // }

  return (
  <div>
      <h1>อาการอะไรที่คุณกังวลมากที่สุด</h1>

      <SearchBox inputText={inputText} onChange={filterSort}/>

      <h3>อาการของคุณ</h3>

      <YourSymptom yourSympList={yourSympList} handleDeleteYourSymptom={handleDeleteYourSymptom}/>

      {
        (sortInputSymp.filter(sortInputSymp => sortInputSymp.header === 'ศีรษะ')).length!==0 
        && head 
        && <h2>ศีรษะ</h2>
      }
      {head && <Symptoms 
                  symp={sortInputSymp.filter(sortInputSymp => sortInputSymp.header === 'ศีรษะ')} 
                  handleAddYourSymp={handleAddYourSymp}
                />
      }

      {
        (sortInputSymp.filter(sortInputSymp => sortInputSymp.header === 'ตา')).length!==0
        && eye 
        && <h2>ตา</h2>
      }
      {eye && <Symptoms symp={sortInputSymp.filter(sortInputSymp => sortInputSymp.header === 'ตา')} handleAddYourSymp={handleAddYourSymp}/>}

      {
        (sortInputSymp.filter(sortInputSymp => sortInputSymp.header === 'ปาก และ ลำคอ')).length!==0
        && mouse 
        && <h2>ปาก และ ลำคอ</h2>
      }
      {mouse && <Symptoms symp={sortInputSymp.filter(sortInputSymp => sortInputSymp.header === 'ปาก และ ลำคอ')} handleAddYourSymp={handleAddYourSymp}/>}

      <div>
        <SortTag title='ศีรษะ' status = {head} changeStatus = {setHead}/>
        <SortTag title='ตา' status = {eye} changeStatus = {setEye}/>
        <SortTag title='ปากและลำคอ' status = {mouse} changeStatus = {setMouse}/>
      </div>

      <button>ต่อไป</button>
  </div>
  );
};

export default SearchPage;
