import React, { Component, Fragment } from 'react'
import Header from './components/Header'




class App extends Component {
  state = {
    isLogged: true
  }

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
