import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';

function App() {
  const [search, setSearch] = useState({
    type: "",
    id: 0
  });
  const [result, setResult] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home 
            result={result} setResult={setResult} 
            search={search} setSearch={setSearch} 
            submitted = {submitted} setSubmitted = {setSubmitted}
            error = {error} setError = {setError}
            />
          </Route>
          <Route path="/:type/:id">
            <SearchResults 
            result={result} setResult={setResult} 
            search={search} setSearch={setSearch} 
            submitted={submitted} setSubmitted={setSubmitted} 
            error = {error} setError = {setError}
            />
          </Route>
          <Route render ={() => <h1>404 Page Not Found</h1> }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
