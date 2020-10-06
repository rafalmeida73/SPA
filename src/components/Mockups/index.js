import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Row } from 'react-materialize';
import Notebook from '../../assets/img/notebook.png';
import Mobile from '../../assets/img/mobile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import './styles.css';

function Mockups() {

   useEffect(() => {
      AOS.init({
         duration: 3000
      })
   }, []);


   return (
      <div className="mockupsBlock" id="resources">

         <Row>
            <div data-aos='fade-right' className="mockup">
               <div className="col s12 m6 l6">
                  <p>
                     O Broken Out é um site responsivo e a parte que mais interessante é que o site possui Progressive web app (PWA), onde o usuario pode habilitar aceitando a instalação no seu dispositivo. O pwa transforma o site em uma aplicação mobile ou desktop. Tornando assim, a sua interação  melhor e uma aparência  muito agradável.<br />
                     O  site fica como o exemplo a seguir:
                  </p>
               </div>
               <div className="col s12 m6 l6">
                  <img className="responsive-img" src={Mobile} alt="" />
               </div>
            </div>

            <div data-aos='fade-right' className="mockup">
               <div className="col s12 m6 l6">
                  <img className="responsive-img" src={Notebook} alt="" />
               </div>
               <div className="col s12 m6 l6">
                  <p>
                     Nós disponibilizamos milhares de jogos. Em que você pode filtrar por categoria, onde cada cor significa uma determinada categoria; pesquisar o jogo desejado, comentar, adicionar nota, ver os jogadores ativos no momento e as estáticas do game. Caso, não encontrar o jogo desejado, você pode adicionar ele. Ajudando assim, outros usuários a encontrar o mesmo futuramente.
                  </p>
               </div>
            </div>
         </Row>
      </div>
   );
}

export default Mockups;