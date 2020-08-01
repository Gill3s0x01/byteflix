import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
import PageErro from './pages/erro404';


import {BrowserRouter, Switch, Route} from 'react-router-dom';
 
ReactDOM.render(
  <BrowserRouter> 
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path= "/" component={Home} exact />
      <Route path="" component={PageErro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
