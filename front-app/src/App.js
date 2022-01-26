import logo from './logo.svg';
import './App.css';
import SearchBox from './component/SearchBox';
import SymptomsHeader from './component/SymptomsHeader';
import SortTag from './component/SortTag';
import { useState } from 'react';

function App() {

  const [head, setHead] = useState(true)
  const [eye, setEye] = useState(true)
  const [mouse, setMouse] = useState(true)
  
  return (
    <div className="App">
      <div>
        <h1>อาการอะไรที่คุณกังวลมากที่สุด</h1>
      </div>
      <div>
        <SymptomsHeader head={head} eye={eye} mouse={mouse}/>
      </div>
      <div>
        <SortTag title='ศีรษะ' status = {head} changeStatus = {setHead}/>
        <SortTag title='ตา' status = {eye} changeStatus = {setEye}/>
        <SortTag title='ปากและลำคอ' status = {mouse} changeStatus = {setMouse}/>
      </div>
    </div>
  );
}

export default App;
