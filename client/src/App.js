import React, { Component, Fragment, Router, Route } from 'react';
import logo from './logo.svg';
import LoginPage from './components/Login/LoginPage';
import './App.css';
import MainPage from './components/Main/MainPage';

class App extends Component {
  render() {
    return (
      // <Router history={browserHistory}>
      //   <Route path='/' component={MasterPage}></Route>
      // </Router>
      <div className="App">
        {/* <LoginPage /> */}
        <MainPage />
      </div>
    );
  }
}

export default App;
