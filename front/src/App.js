import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home'
import PostDetails from './components/PostDetails'
import Login from './components/Login'
import RegisterUser from './components/RegisterUser'
import RegisterPet from './components/RegisterPet'

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
          <Route path='/postitem' component={PostDetails} />
          <Route path='/registeruser' component={RegisterUser} />
          <Route path='/Registerpet' component={RegisterPet} />
        </Switch>
      </Fragment>
    )
  }
}

export default App;
