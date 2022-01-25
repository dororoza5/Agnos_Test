import logo from './logo.svg';
import './App.css';
import SearchBox from './component/SearchBox';
import SymptomsHeader from './component/SymptomsHeader';
import SortTag from './component/SortTag';

function App() {

  return (
    <div className="App">
      <div>
        <h1>อาการอะไรที่คุณกังวลมากที่สุด</h1>
        <SearchBox />
      </div>
      <div>
        <SymptomsHeader />
      </div>
      <div>
        <SortTag title='ศีรษะ'/>
        <SortTag title='ตา'/>
        <SortTag title='ปากและลำคอ'/>
      </div>
    </div>
  );
}

export default App;
