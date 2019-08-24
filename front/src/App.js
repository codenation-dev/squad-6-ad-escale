import React, { Fragment } from 'react'
import Header from './components/Header'

const App = () => {
  return (
    <Fragment>
      <div>
        <Header />
        {this.props.children}
      </div>
    </Fragment>
  )
}

export default App
