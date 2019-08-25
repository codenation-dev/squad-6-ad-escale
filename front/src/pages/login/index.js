import React, { Component } from 'react'
import { register, login, isLogged } from '../../services/loginService'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      islogged: isLogged()
    }
  }

  getRegisterUser = e => {
    e.preventDefault()
    const email = this.state.email
    const password = this.state.password

    try {
      register({ email, password })
      login({ email, password })
      // {this.props.history.push('/')}
    } catch (err) {
      alert(err)
    }
  }

  getLogin = e => {
    e.preventDefault()
    const email = this.state.email
    const password = this.state.password

    try {
      login({ email, password })
      // {this.props.history.push('/')}
    } catch (error) {
      alert(error)
    }
  }

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }

  render = () => (
    <section className="section pb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <img src={'images/auth/login.svg'} alt="Register user" className="img-fluid"/>
          </div>

          <div className="col-12 col-md-6">
            <div className="">
              <h1 className="h2">Login</h1>

              <form>
                <div className="form-group">
                  <label htmlFor="email">Seu email</label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    onChange={this.handleChange('email')}
                    value={this.state.email}
                    className="form-control"
                    placeholder="email"
                    required />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Sua senha</label>
                  <input
                    name="password"
                    id="password"
                    onChange={this.handleChange('password')}
                    value={this.state.password}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required />
                </div>

                <div className="mt-5">
                  <button className="login btn btn-lg btn-primary btn-block" onClick={this.getLogin} type="submit">Fazer Login</button>
                  <button className="btn btn-lg btn-outline-secondary btn-block" onClick={this.getRegisterUser} type="submit">Não tenho cadastro</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
