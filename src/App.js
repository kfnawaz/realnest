import React from 'react';
import './App.css';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/realnest' component={Home} exact />
        <Route path='/realnest/signin' component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
