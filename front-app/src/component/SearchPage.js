import React, { useState } from 'react';
import SearchBox from './SearchBox';
import Symptoms from './Symptoms';
import SortTag from './SortTag';
import YourSymptom from './YourSymptom';
import {Link} from 'react-router-dom'

const SearchPage = () => {

    const [head, setHead] = useState(true)
    const [eye, setEye] = useState(true)
    const [mouse, setMouse] = useState(true)

    const [yourSympList, setYourSympList] = useState([])

    //full data
    const [symp,setSymp] = useState([
        {id : 1, header : 'ศีรษะ', title : 'ไข้'},
        {id : 2, header : 'ศีรษะ', title : 'ผมร่วง'},
        {id : 3, header : 'ตา', title : 'ตาเหลือง'},
        {id : 4, header : 'ตา', title : 'ขี้ตาเยอะ'},
        {id : 5, header : 'ปาก และ ลำคอ', title : 'ฝ้าขาวที่ลิ้น'}
      ])

    const [inputText, setInputText] = useState('')

    //partial list(this have to be filtered)
    const [sortInputSymp, setSortInputSymp] = useState([
        {id : 1, header : 'ศีรษะ', title : 'ไข้'},
        {id : 2, header : 'ศีรษะ', title : 'ผมร่วง'},
        {id : 3, header : 'ตา', title : 'ตาเหลือง'},
        {id : 4, header : 'ตา', title : 'ขี้ตาเยอะ'},
        {id : 5, header : 'ปาก และ ลำคอ', title : 'ฝ้าขาวที่ลิ้น'}
    ])

    //full list of symptom that has not been add to yoursymptom yet
    const [deleteSortInputSymp, setDeleteSortInputSymp] = useState([
      {id : 1, header : 'ศีรษะ', title : 'ไข้'},
      {id : 2, header : 'ศีรษะ', title : 'ผมร่วง'},
      {id : 3, header : 'ตา', title : 'ตาเหลือง'},
      {id : 4, header : 'ตา', title : 'ขี้ตาเยอะ'},
      {id : 5, header : 'ปาก และ ลำคอ', title : 'ฝ้าขาวที่ลิ้น'}
    ])

    const filterSort = (e) => {
        setInputText(e.target.value)
        const newSort = deleteSortInputSymp.filter((deleteSortInputSymp) => {
            if(e.target.value.length!==0){
              return deleteSortInputSymp.title.includes(e.target.value)
            }else{
              return deleteSortInputSymp
            }
        })
        setSortInputSymp(newSort)
    }

    const handleAddYourSymp = (title) => {
      setYourSympList(yourSympList => [...yourSympList,title])
      setSortInputSymp(sortInputSymp.filter(sortInputSymp => sortInputSymp.title !== title))
      setDeleteSortInputSymp(deleteSortInputSymp.filter(deleteSortInputSymp => deleteSortInputSymp.title !== title))
    }

    const handleDeleteYourSymptom = (title) => {
      setYourSympList(yourSympList.filter(yourSympList => yourSympList !== title))
      setSortInputSymp(sortInputSymp => [...sortInputSymp,symp.filter( symp => symp.title === title)[0]])
      setDeleteSortInputSymp(deleteSortInputSymp => [...deleteSortInputSymp,symp.filter( symp => symp.title === title)[0]])
    }

    // const handleTest = () => {
    //   console.log(yourSympList)
    // }

  return (
  <div>
      <div className='header'>
        <h1 className='text'>อาการอะไร<br/>ที่คุณกังวลมากที่สุด</h1>

        <SearchBox inputText={inputText} onChange={filterSort} />

          
        <YourSymptom yourSympList={yourSympList} handleDeleteYourSymptom={handleDeleteYourSymptom}/>
      </div>
      
      <div className='after-header'>
        {
          (sortInputSymp.filter(sortInputSymp => sortInputSymp.header === 'ศีรษะ')).length!==0 
          && head 
          && <h2>ศีรษะ</h2>
        }
      </div>
      
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

      <Link to={{
        pathname : '/result', 
        yourSympList : {yourSympList}}}
      >ต่อไป</Link>
  </div>
  );
};

export default SearchPage;
