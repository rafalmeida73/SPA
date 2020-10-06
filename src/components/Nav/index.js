import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Navbar, Icon } from 'react-materialize';
import Logo from '../../assets/img/logo.svg';
import './styles.css';
import { HashLink as Link } from 'react-router-hash-link';


function Nav() {
  return (
    <div id="home">
      <Navbar
        alignLinks="right"
        brand={<Link to="/#" className="brand-logo"><img className="responsive-img" src={Logo} alt="Broken Out" /></Link>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <Link smooth to="#home">
          Início
        </Link>

        <Link smooth to="#reasons">
          Benefícios
            </Link>

        <Link smooth to="#resources">
          Recursos
        </Link>

        <Link smooth to="#contact">
          Contato
        </Link>


      </Navbar>
    </div>
  )
}

export default Nav;
