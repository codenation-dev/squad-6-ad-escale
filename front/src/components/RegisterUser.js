import React, { Fragment } from 'react'
import { logout } from '../services/loginService'
import userprofileService from '../services/userprofileService'

const User = ({ history }) => {
    const handleLogout = () => {
        logout()
        history.push('/')

    }

    const insertUserProfile = e => {
        e.preventDefault()
        userprofileService.insert("Nome",
            { comment: 'this.state.comment' })


    }

    return (
        <Fragment>
            <div className="h-100 mt-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <img src={'images/auth/login.svg'} alt="Register user" className="img-fluid" />
                        </div>

                        <div className="col-6">
                            <h1 className="h2">Criar usuario</h1>

                            <div class="form-group">
                                <label for="name">Seu nome</label>
                                <input type="text" value='' class="form-control" name="name" id="name" placeholder="Maria da Silva" />
                            </div>

                            <div class="form-group">
                                <label for="username">Username</label>
                                <input type="text" value='' class="form-control" name="username" id="username" placeholder="Maria123" />
                            </div>

                            <div class="form-group">
                                <label for="email">Seu email</label>
                                <input type="email" value='' class="form-control" name="email" id="email" placeholder="maria@gmail.com" />
                            </div>

                            <div class="form-group">
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
        </Fragment>
    )
}

export default User


