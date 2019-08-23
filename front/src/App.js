import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './pages/home'
import Login from './pages/login'
import RegisterUser from './pages/registerUser'
import RegisterPet from './pages/registerPet'
import PostDetail from './components/PostDetail'


class App extends Component {
  state = {
    isLogged: true
  }

  render() {
    return (
      <Fragment>
        {this.state.isLogged ? <Header /> : null}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/registeruser' component={RegisterUser} />
          <Route path='/registerpet' component={RegisterPet} />
          <Route path='/postdetail' component={PostDetail} />
        </Switch>
      </Fragment>
    )
  }
}

export default App;
