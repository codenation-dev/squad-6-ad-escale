import React, { Fragment } from 'react'
import Header from './components/Header'

const App = () => {
  render() {
    return (
      <Fragment>
        <div>
          <Header />
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}

export default App
