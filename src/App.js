import React , { Component }from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Detail } from './pages/detail'
import { Home } from './pages/home'


class App extends Component {
  
  render() {
    const url = new URL(document.location)
    const Page = url.searchParams.has('id')?<Detail/>:<Home/>

    return (
      <div className="App">
        {Page}
      </div>
    );
  }
}

export default App;
