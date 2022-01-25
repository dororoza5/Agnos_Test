import logo from './logo.svg';
import './App.css';
import SearchBox from './component/SearchBox';
import SymptomsHeader from './component/SymptomsHeader';

function App() {
  return (
    <div className="App">
      <div >
        <h1>อาการอะไรที่คุณกังวลมากที่สุด</h1>
        <SearchBox />
      </div>
      <div>
        <SymptomsHeader />
      </div>
    </div>
    
  );
}

export default App;
