import React from 'react';
import Header from '../../components/Header';
import Mockups from '../../components/Mockups';
import Reasons from '../../components/Reasons';
import Help from '../../components/Help';
import './styles.css';

function Home() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div>
        <Reasons />
      </div>

      <div className="line">
        <hr />
      </div>

      <div>
        <Mockups />
      </div>

      <div className="line">
        <hr />
      </div>

      <div>
        <Help />
      </div>

    </>
  );
}

export default Home;