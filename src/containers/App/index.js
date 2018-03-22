import React, { Component } from 'react';
import styles from './styles';
import Header from 'components/Header';
import Home from 'containers/pages/Home';
import About from 'containers/pages/About';

import { Switch, Route } from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <div className="site-wrap">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    )
  }
}


export default App