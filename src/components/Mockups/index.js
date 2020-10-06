import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Row } from 'react-materialize';
import Desktop from '../../assets/img/desktop.png';
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
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
               <div className="col s12 m6 l6">
                  <img class="responsive-img" src={Mobile} alt="" />
               </div>
            </div>

            <div data-aos='fade-right' className="mockup">
               <div className="col s12 m6 l6">
                  <img class="responsive-img" src={Desktop} alt="" />
               </div>
               <div className="col s12 m6 l6">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
            </div>
         </Row>
      </div>
   );
}

export default Mockups;