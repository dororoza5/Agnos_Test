import './App.css';
import SearchPage from './component/SearchPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ResultPage from './component/ResultPage';
import FinishPage from './component/FinishPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <SearchPage />
          </Route>
          <Route exact path='/result'>
            <ResultPage />
          </Route>
          <Route exact path='/finish'>
            <FinishPage />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
