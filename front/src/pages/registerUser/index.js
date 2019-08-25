import React, { Component } from 'react'
// import api from '../../services/api'

export default class RegisterUser extends Component {
  constructor (props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeUserName = this.onChangeUserName.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)

    this.state = {
      name: '',
      username: '',
      email: ''
    }
  }

  onChangeName = event => {
    this.setState({
      name: event.target.value
    })
  }

  onChangeUserName = event => {
    this.setState({
      username: event.target.value
    })
  }

  onChangeEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  onSubmit = async event => {
    event.preventDefault()

    const { name, username, email } = this.state

    const user = {
      name,
      username,
      email
    }

    console.log(user)
    // await api.post('/animals', user)
    //   .then(resp => {
    //     alert('Usuario criado com sucesso', resp)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

  render () {
    return (
      <div className="h-100 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <img src={'images/auth/login.svg'} alt="Register user" className="img-fluid"/>
            </div>

            <div className="col-6">
              <h1 className="h2">Criar usuario</h1>

              <div className="form-group">
                <label htmlFor="name">Seu nome</label>
                <input type="text" onChange={this.onChangeName} value={this.state.name} className="form-control" name="name" id="name" placeholder="Maria da Silva" />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text"onChange={this.onChangeUserName} value={this.state.username} className="form-control" name="username" id="username" placeholder="Maria123" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Seu email</label>
                <input type="email"onChange={this.onChangeEmail} value={this.state.email} className="form-control" name="email" id="email" placeholder="maria@gmail.com" />
              </div>

              <div className="form-group">
                <button
                  onClick={this.onSubmit}
                  className="btn btn-block btn-primary">Criar usuario</button>

                <a href="/login" className="btn btn-block btn-outline-primary">
                  Já tenho cadastro
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
