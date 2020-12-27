import React from 'react';

import Main from 'routes/Main';
import About from 'routes/About';
import Reference from 'routes/Reference';
import Script from 'routes/Script';
import Contact from 'routes/Contact';
import Port from 'routes/Port';

import { HashRouter, Route } from 'react-router-dom';
import 'scss/App.scss';

function App() {
  return(
    <HashRouter>
      <Route path="/" exact={true} component={Main} /> 
      <Route path="/about" component={About} />
      <Route path="/Reference" component={Reference} />
      <Route path="/contact" component={Contact} />
      <Route path="/port" component={Port} />
      <Route path="/script" component={Script} />
    </HashRouter>
  )
}

export default App;
