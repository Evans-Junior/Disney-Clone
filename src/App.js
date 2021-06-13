import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Detail from './components/Detail';
import Login from './components/Login';


function App() {
  return(
    <Router>
    <div className="App">
    
        <Header/>
        <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route exact path='/'>
            <Home/>
            </Route>
            <Route path='/detail'>
             <Detail/>
            </Route>

        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
