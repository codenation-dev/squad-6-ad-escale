import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../services/loginService'
import userprofileService from '../services/userprofileService'

const User = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogout = () => {
        logout()
        history.push('/')
    }

    const insertUserProfile = e => {
        console.log(name, email, password)
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
                                <input type="text" value={name} class="form-control" name="name" id="name" placeholder="Maria da Silva" onChange={e => setName(e.target.value)}/>
                            </div>

                            <div class="form-group">
                                <label for="email">Seu email</label>
                                <input type="email" value={email} class="form-control" name="email" id="email" placeholder="maria@gmail.com" onChange={e => setEmail(e.target.value)}/>
                            </div>

                            <div class="form-group">
                                <label for="username">Senha</label>
                                <input type="password" value={password} class="form-control" name="password" id="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
                            </div>

                            <div class="form-group">
                                <button
                                    onClick={insertUserProfile}
                                    className="btn btn-block btn-primary">Criar usuario
                                </button>

                                <Link to="/login" className="btn btn-block btn-outline-primary">
                                    Já tenho cadastro
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default User


