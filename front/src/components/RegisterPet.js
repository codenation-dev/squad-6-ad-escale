import React, { Fragment } from 'react'

const RegisterPet = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h1 className="w0199">Cadastrar pet</h1>
                    </div>

                    <div className="col-6">

                        <div className="mb-3">
                            <label htmlFor="name">Nome do pet</label>
                            <input type="text" className="form-control" id="name" placeholder="Marley" required />
                        </div>

                        <div class="custom-file mb-3">
                            <input type="file" onChange={this.onImageChange} class="custom-file-input" id="image" required />
                            <label class="custom-file-label" for="image">Escolher foto do pet.</label>
                            <div class="invalid-feedback">Example invalid custom file feedback</div>
                        </div>

                        <div className="form-group">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="M" />
                                <label class="form-check-label" for="inlineRadio1">Macho</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="F" />
                                <label class="form-check-label" for="inlineRadio2">Femea</label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="age">Idade do pet</label>
                            <input type="text" className="form-control" id="age" placeholder="20" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="color">Cor do pet</label>
                            <input type="text" className="form-control" id="color" placeholder="Marrom" required />
                        </div>

                        <div className="form-group">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="M" />
                                <label class="form-check-label" for="inlineRadio1">Macho</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="F" />
                                <label class="form-check-label" for="inlineRadio2">Femea</label>
                            </div>
                        </div>

                    </div>

                    <div className="col-6">
                        <div className="w-100">
                            <img id="target" className="img-fluid" src={this.state.image} />
                        </div>

                        <div class="form-group">
                            <label for="description">Descrição</label>
                            <textarea class="form-control" id="description" rows="5"></textarea>
                        </div>

                        <button
                            onClick={this.createPet}
                            className="btn btn-primary">Cadastrar pet</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default RegisterPet