import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg  main-nav " id="navbar">
        <div className="container">

          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span className="ti-align-justify"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            <ul className="navbar-nav ml-auto">

              <li className="nav-item  active"><a className="nav-link" href="/">Home</a></li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sobre</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                  <li><a className="dropdown-item" href="">About Me</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cadastrar</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                  <li><a className="dropdown-item" href="">Pet Perdido</a></li>
                  <li><a className="dropdown-item" href="">Pet para doação</a></li>
                </ul>
              </li>

              <li className="nav-item"><a className="nav-link" href="">Contato</a></li>
              <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
              <li className="nav-item"><a className="nav-link btn btn-main" href="/registeruser">Registre se</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

  )
}

export default Header
