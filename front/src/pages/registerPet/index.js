import React, { Component } from 'react'
import { getAllAnimals, createAnimal } from '../../services/api'

export default class RegisterPet extends Component {
  state = {
    image: ''
  }

  componentDidMount () {
    this.loadPets()
  }

  loadPets = async () => {
    const response = await getAllAnimals()
    console.log(response)
  }

  createPet = async () => {
    const animal = {
      contact: 1,
      id: 2,
      name: 'Clecio Almeida',
      description: 'desc',
      image: 'https://desafio2019.herokuapp.com/media/imgs/animals/45423964_2072971839437183_7091218888070791168_n.jpg',
      age: 19,
      color: 'Marrom',
      gender: 'F',
      specie: 'cachorro',
      size: 'pequeno',
      category: 'achado',
      location: 'Zona Sul - SAO PAULO - SP',
      city: 'SAO PAULO',
      state: 'SP'
    }

    await createAnimal(animal)
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0])
      })
    }
  }

  render () {
    return (
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

            <div className="custom-file mb-3">
              <input type="file" onChange={this.onImageChange} className="custom-file-input" id="image" required />
              <label className="custom-file-label" htmlFor="image">Escolher foto do pet.</label>
              <div className="invalid-feedback">Example invalid custom file feedback</div>
            </div>

            <div className="form-group">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="M" />
                <label className="form-check-label" htmlFor="inlineRadio1">Macho</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="F" />
                <label className="form-check-label" htmlFor="inlineRadio2">Femea</label>
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
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="M" />
                <label className="form-check-label" htmlFor="inlineRadio1">Macho</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="F" />
                <label className="form-check-label" htmlFor="inlineRadio2">Femea</label>
              </div>
            </div>

          </div>

          <div className="col-6">
            <div className="w-100">
              <img id="target" className="img-fluid" src={this.state.image} alt="Animal"/>
            </div>

            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea className="form-control" id="description" rows="5"></textarea>
            </div>

            <button
              onClick={this.createPet}
              className="btn btn-primary">Cadastrar pet</button>
          </div>
        </div>
      </div>
    )
  }
}
