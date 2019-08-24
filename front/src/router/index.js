import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { withRouter } from 'react-router';

import Header from '../components/Header'
import Home from '../components/Home'
import PetDetail from '../pages/pet/detail'
import Login from '../pages/login'
import RegisterUser from '../pages/registerUser'

import RegisterPet from '../pages/registerUser'

const MyRouter = () => {

    const PetDetailRoute = ({ match }) => (
        <PetDetail searchId={match.params.id} />
    )

    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/posts/:id' exact component={PetDetailRoute} />
                <Route path='/registeruser' component={RegisterUser} />
                <Route path='/registerpet' component={RegisterPet} />
            </Switch>
        </Fragment>
    )
}

export default withRouter(MyRouter)