import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { withRouter } from 'react-router';

import Header from '../components/Header'
import Home from '../components/Home'
import PostDetails from '../components/PostDetails'
import Login from '../pages/login'
import RegisterUser from '../pages/registerUser'

const MyRouter = () => {

    const PostDetailsRoute = ({ match }) => (
        <PostDetails searchId={match.params.id} />
    )

    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/posts/:id' exact component={PostDetailsRoute} />
                <Route path='/registeruser' component={RegisterUser} />
            </Switch>
        </Fragment>
    )
}

export default withRouter(MyRouter)