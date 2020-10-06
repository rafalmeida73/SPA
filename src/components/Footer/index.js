import React, { useState } from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { HashLink as Link } from 'react-router-hash-link';
import Up from '../../assets/img/up.png'

function Footer() {
  const [is_visible] = useState(true);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div>
      <footer className="page-footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">BROKEN OUT</h5>
            </div>
            <div className="col l4 offset-l2 s12">
              <ul>
                <li>
                  <Link smooth to="#home" className="white-text text-lighten-3">
                    Início
                  </Link>
                </li>
                <li>
                  <Link smooth to="#reasons" className="white-text text-lighten-3">
                    Benefícios
                  </Link>
                </li>
                <li>
                  <Link smooth to="#resources" className="white-text text-lighten-3">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link smooth to="#contact" className="white-text text-lighten-3">
                    Contato
                  </Link>
                </li>



              </ul>
            </div>
            <div className="col l1 s4 right">
              {is_visible && (
                <div onClick={() => scrollToTop()}>
                  <img src={Up} alt="Voltar ao topo" width='150' />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container white-text">
            © 2020 Broken Out Copyright
            <a className="white-text text-lighten-4 right" href="https://logomakr.com"
              target="_blank" rel="noopener noreferrer">Created my free logo at
                LogoMakr.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer