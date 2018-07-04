import React, { Component } from 'react';
import './App.css';
import MainPage from './components/Main/MainPage';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';

const PrivateRoute = ({ component : Component, ...rest }) => {
  return <Route {...rest} render={
    (props) => (
      localStorage.getItem('isLoggedIn') ? <Component {...props} />
      : <Redirect to='/login' />
    )
  } />
}
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <PrivateRoute path='/' component={MainPage} exact />
          <Route path='/login' component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
