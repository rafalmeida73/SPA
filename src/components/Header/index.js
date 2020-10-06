import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Row } from 'react-materialize';
import Lottie from 'react-lottie';
import Robo from '../../lotties/robo.json';
import './styles.css';
import { HashLink as Link } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: Robo,
   rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
   }
};

function Header() {

   useEffect(() => {
      AOS.init({
         duration: 3000
      })
   }, []);

   return (
      <div data-aos='fade-right'>
         <header className="headerBlock">
            <Row>
               <div className="col s12 m12 l6 robotBlock">
                  <Lottie className='robo'
                     options={defaultOptions}
                  />
               </div>

               <div className="col s12 m12 l6">
                  <p>
                     O Broken Out é um site que visa facilitar o acesso a informações de jogos, seja do celular, console ou desktop.
                     Disponibilizamos uma imensa variedade de jogos cadastrados. Contudo, você pode adicionar qualquer jogo que não esteja cadastrado. Ajudando assim, outros usuários a encontrar o jogo desejado no site.
                  </p>

                  <Link smooth to='#resources' className="waves-effect waves-light btn">
                     Saiba mais
                  </Link>
               </div>
            </Row>
         </header>
      </div>
   );
}

export default Header;