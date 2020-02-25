import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import {Helmet} from "react-helmet";
import { Switch, Route } from 'react-router-dom'
import { Detail } from './pages/detail'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'


class App extends Component {
  render() {
    return (
      <div className="App container is-fullhd">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Buscador de Peliculas</title>
          <script src="https://kit.fontawesome.com/a3f87311c4.js"></script>
        </Helmet>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:id' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
