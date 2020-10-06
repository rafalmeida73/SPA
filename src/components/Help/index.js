import React from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { CollapsibleItem, Collapsible, Icon } from 'react-materialize';
import Email from '../../assets/img/mail.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Help() {

  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, []);

  return (
    <div data-aos='fade-right' className="helpBlock" id="contact">
      <h4>Precisa de ajuda?</h4>
      <div className="container">
        <a href="mailto:rafa.santa11@gmail.com">
          <div className="col s12 m12 l12 cardHelp">
            <img class="responsive-img" src={Email} alt="" />
            <h3 className="black-text">Envie um e-mail para a gente</h3>
            <p className="black-text">Normalmente respondemos dentro de 24 horas.</p>
          </div>
        </a>

        <div className="col s12 m6 l6">
          <Collapsible accordion popout>
            <CollapsibleItem
              expanded={false}
              header="O Broken Out é gratuito?"
              icon={<Icon>announcement</Icon>}
              node="div"
            >
              Better safe than sorry. That's my motto.
          </CollapsibleItem>
            <CollapsibleItem
              expanded={false}
              header="Com que frequência você lança atualizações?"
              icon={<Icon>announcement</Icon>}
              node="div"
            >
              Yeah, you do seem to have a little 'shit creek' action going.
          </CollapsibleItem>
            <CollapsibleItem
              expanded={false}
              header="Posso publicar qualquer jogo?"
              icon={<Icon>announcement</Icon>}
              node="div"
            >
              You know, FYI, you can buy a paddle. Did you not plan for this contingency?
          </CollapsibleItem>
          </Collapsible>
        </div>

      </div>
    </div>
  );
}

export default Help;