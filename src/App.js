import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Home from './components/Home';
import Login from './components/Login';
import Categories from './components/Categories';
import Tests from './components/Tests';
import Test from './components/Test';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{minHeight: "100vh", overflowX: "hidden", overflowY: "auto"}}>
          <Navbar />
          <br /><br />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/categories" exact component={Categories} />
            <Route path="/tests/:category_id" exact component={Tests} />
            <Route path="/search/:text_query" exact component={Search} />
            <Route path="/test/:test_id" exact component={Test} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
