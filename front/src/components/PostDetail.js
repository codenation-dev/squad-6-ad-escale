import React, { Component } from 'react';
import api from '../services/api'

export default class PostDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pet: {} 
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params

    const response = await api.get(`/pets/${id}`)

    this.setState({ pet: response.data })
  }
  


  render() {
    return (
      <div className="h-100 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <img src="https://pet-uploads.adoptapet.com/a/8/2/363003064.jpg" className="img-fluid" />
            </div>

            <div className="col-12 col-md-6">                
              <div>
                <h3>Localização</h3>
                <p>São Paulo - SP</p>
              </div>

              <div className="row">
                <div className="col-4">
                  <strong>Idade</strong>
                  <p>21</p>
                </div>

                <div className="col-4">
                  <strong>Cor</strong>
                  <p>Preto</p>
                </div>

                <div className="col-4">
                  <strong>Genero</strong>
                  <p>Macho</p>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <strong>Tamanho</strong>
                  <p>Grande</p>
                </div>
              </div>

              <div className="row my-3">
                <div className="col-12">
                  <h4 className="h3">Contatos</h4>
                </div>

                <div className="col-4">
                  <strong>Celular</strong>
                  <p>(11) 99688-3262</p>
                </div>

                <div className="col-4">
                  <strong>Telefone</strong>
                  <p>(11) 2516-2653</p>
                </div>
              </div>

              <h4>Sobre o pet</h4>
              <p>
                Woof woof! Hi there, I'm a super cute and cuddly doggie. I'm an energetic girl who enjoys the little things in life like long walks on the beach and snacks galore. I'm very friendly with everyone I meet and I look forward to playing all day long with other puppies. I'm very outgoing and social, so come on down to meet me today. My adoption fee covers my spay, up-to-date vaccines and microchipping.
              </p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
