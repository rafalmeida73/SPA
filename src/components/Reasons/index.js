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
      <h3>Essa são as razões para usar o Broken Out</h3>
      <Row className="container">
        <div className="col s12 m6 l6 reason">
          <div className="col s3 m2 l2 imgReason">
            <img class="responsive-img" src={Unlimited} alt="" />
          </div>
          <div className="col s9 m9 l9">
            <h4>Sla</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
        </div>

        <div className="col s12 m6 l6 reason">
          <div className="col s3 m2 l2 imgReason">
            <img class="responsive-img" src={Responsive} alt="" />
          </div>
          <div className="col s9 m9 l9">
            <h4>Sla</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
        </div>

        <div className="col s12 m6 l6 reason">
          <div className="col s3 m2 l2 imgReason">
            <img class="responsive-img" src={Chat} alt="" />
          </div>
          <div className="col s9 m9 l9">
            <h4>Sla</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
        </div>

        <div className="col s12 m6 l6 reason">
          <div className="col s3 m2 l2 imgReason">
            <img class="responsive-img" src={Support} alt="" />
          </div>
          <div className="col s9 m9 l9">
            <h4>Sla</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
        </div>
      </Row>
      <div className="col s12 m12 l12">
        <center>
          <h4>Tem perguntas?</h4>
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