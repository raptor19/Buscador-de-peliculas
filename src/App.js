import React , { Component }from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Switch, Route } from 'react-router-dom'
import { Detail } from './pages/detail'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'


class App extends Component {
  render() {
    return (
      <div className="App container is-fullhd">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/detail/:id' component={Detail}/>
          <Route component={NotFound}/>
         </Switch>
      </div>
    );
  }
}

export default App;
