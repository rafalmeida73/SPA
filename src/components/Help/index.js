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
            <img className="responsive-img" src={Email} alt="Envie um e-mail para a gente" />
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
              Sim, o Broken Out é totalmente gratuito!
          </CollapsibleItem>
            <CollapsibleItem
              expanded={false}
              header="Com que frequência você lança novos jogos no sistemas?"
              icon={<Icon>announcement</Icon>}
              node="div"
            >
              Nossa equipe sempre está cadastrando novos jogos no sistema. Contudo, você mesmo pode adicionar o jogo que desejar.
          </CollapsibleItem>
            <CollapsibleItem
              expanded={false}
              header="Posso publicar qualquer jogo?"
              icon={<Icon>announcement</Icon>}
              node="div"
            >
              Sim, qualquer jogo pode ser publicado e de qualquer plataforma.
          </CollapsibleItem>
            <CollapsibleItem
              expanded={false}
              header="Preciso fazer login?"
              icon={<Icon>announcement</Icon>}
              node="div"
            >
              Não, se o seu intuito for apenas ver os jogos, não necessita fazer o login. Contudo, se quiser adicionar um novo jogo ou comentar é necessário fazer o login.
          </CollapsibleItem>
          </Collapsible>
        </div>

      </div>
    </div>
  );
}

export default Help;