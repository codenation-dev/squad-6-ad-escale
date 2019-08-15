import React, { Component } from 'react'
import { register, login, isLogged } from '../services/loginService'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            islogged: isLogged()

        }

    }

    getRegisterUser = e => {
        e.preventDefault()
        const username = this.state.username
        const password = this.state.password
        try {
            register({ username, password })
            login({ username, password })
            // {this.props.history.push('/')}
        } catch (err) {
            alert(err)
        }

    }

    getLogin = e => {
        e.preventDefault()
        const username = this.state.username
        const password = this.state.password
        try {
            login({ username, password })
            //{this.props.history.push('/')}
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
        <section className="page-title section pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h1 className="text-capitalize mb-0 text-lg">PetsCode - Login</h1>
                            <br />
                            <form className="form-signin">
                                <div className="form-label-group">
                                    <input
                                        name="username"
                                        onChange={this.handleChange('username')}
                                        value={this.state.username}
                                        className="form-control"
                                        placeholder="Username"
                                        required
                                    />
                                </div>

                                <div className="form-label-group mt-2">
                                    <input
                                        name="password"
                                        onChange={this.handleChange('password')}
                                        value={this.state.password}
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        required
                                    />
                                </div>

                                <div className="mt-5">
                                    <button className="login btn btn-lg btn-primary btn-block" onClick={this.getLogin} type="submit">Login</button>
                                    <button className="register btn btn-lg btn-secondary btn-block" onClick={this.getRegisterUser} type="submit">Register</button>
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