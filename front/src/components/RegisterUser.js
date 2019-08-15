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
        <div className='container'>
            <div className="row">

                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Perfil</h4>
                    <form className="needs-validation" >

                        <div className="mb-3">
                            <label htmlFor="lastName">Nome</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
          </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Endereço</label>
                            <input type="text" className="form-control" id="address" placeholder="Rua/Avenida" required="" />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                         </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address2">Teleone</label>
                            <input type="text" className="form-control" id="address2" placeholder="(00) 0000-0000" />
                        </div>

                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country">Country</label>
                                <select className="custom-select d-block w-100" id="country" required="">
                                    <option value="">Choose...</option>
                                    <option>United States</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
            </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state">State</label>
                                <select className="custom-select d-block w-100" id="state" required="">
                                    <option value="">Choose...</option>
                                    <option>California</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
            </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip">Zip</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Zip code required.
            </div>
                            </div>
                        </div>

                        <button onClick={insertUserProfile} className="btn btn-primary btn-lg " type="submit">Atualizar cadastro</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User


