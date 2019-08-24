import React, { Fragment } from 'react'



import Banner from './Banner'
import Posts from './Posts'

const Home = props => {
    return (
        <Fragment>
            <Banner />
            <Posts />
        </Fragment>
    )
}

export default Home