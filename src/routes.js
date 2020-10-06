import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Nav from './components/Nav'
import Footer from './components/Footer'

function Routes() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;