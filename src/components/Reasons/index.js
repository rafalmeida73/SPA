import React from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Row, Button, Icon } from 'react-materialize';
import Chat from '../../assets/img/chat.svg';
import Responsive from '../../assets/img/responsive.svg';
import Support from '../../assets/img/support.svg';
import Unlimited from '../../assets/img/unlimited.svg';
import { HashLink as Link } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Reasons() {

  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, []);

  return (
    <div data-aos='fade-right' className="reasonsBlock" id="reasons">
      <h4 className="reasonsTitle">Essas são as razões para usar o Broken Out</h4>
      <Row className="container">

        <div className="col s12 m6 l6 reason">
          <div className="col s3 m3 l2 imgReason">
            <img className="responsive-img" src={Unlimited} alt="Jogos Ilimitados" />
          </div>
          <div className="col s9 m9 l9">
            <h4>Jogos Ilimitados</h4>
            <p>
            Nós disponibilizamos diversos jogos com as notícias do momento, estatística, melhores lugares para a compra e mais!
            </p>
          </div>
        </div>

        <div className="col s12 m6 l6 reason">
          <div className="col s3 m3 l2 imgReason">
            <img className="responsive-img" src={Responsive} alt="Site responsivo" />
          </div>
          <div className="col s9 m9 l9">
            <h4>Site responsivo</h4>
            <p>
              Você pode acessar o site por qualquer plataforma como Android, Ios, Tablet, Desktop, entre outros.
            </p>
          </div>
        </div>

        <div className="col s12 m6 l6 reason">
          <div className="col s3 m3 l2 imgReason">
            <img className="responsive-img" src={Chat} alt="Dê a sua opinião" />
          </div>
          <div className="col s9 m9 l9">
            <h4>Dê a sua opinião</h4>
            <p>
              Você pode dar o seu feedback sobre o jogo com uma determinada nota. Ajudando assim, outros usuários. 
            </p>
          </div>
        </div>

        <div className="col s12 m6 l6 reason">
          <div className="col s3 m3 l2 imgReason">
            <img className="responsive-img" src={Support} alt="Suporte" />
          </div>
          <div className="col s9 m9 l9">
            <h4>Suporte</h4>
            <p>
              Nossa equipe de moderadores está disponível para responder mensagens via e-mail e resolver o problema mais rápido possível. 
            </p>
          </div>
        </div>
      </Row>
      <div className="col s12 m12 l12">
        <center>
          <h4>Alguma pergunta?</h4>
          <Link smooth to="#contact">
            <Button
              waves="light"
            >
              Entre em contato!
         <Icon right>
                drafts
         </Icon>
            </Button>
          </Link>
        </center>
      </div>
    </div>
  );
}

export default Reasons;