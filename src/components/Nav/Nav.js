import React from "react"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top header-a">
            <div className="container nav-container">
                <a className="navbar-brand brand" href="#">Monaliza</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Minhas redes
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="https://www.linkedin.com/in/monaliza-pereira/" target="_blank">LinkedIn</a>
                                <a className="dropdown-item" href="https://github.com/Monalizaps" target="_blank">GitHub</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="https://codepen.io/monalizaps/" target="_blank">CodePen</a>
                            </div>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="#">Sobre mim <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Meus projetos</a>
                        </li>

                        <a className="btn btn-outline-dark start" href="https://api.whatsapp.com/send?phone=5521998631825" target="_blank">Contato</a>

                    </ul>


                </div>


            </div>
        </nav>
    );
}

export default Nav;