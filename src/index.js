import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
import Home from './pages/home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ Home } exact />
      <Route path="/cadastro/video" component={ CadastroVideo } />
      <Route path="/cadastro/categoria" component={ CadastroCategoria } />
      <Route component={ Home } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);