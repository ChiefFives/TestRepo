import React from 'react';
import './App.css';
import Login from './Pages/LoginPage';
import Home from './Pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/submit" exact component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
