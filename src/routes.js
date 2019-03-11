
import React from 'react';
import { Route, Switch } from 'react-router';
import Header from 'components/Header';
import Home from 'containers/Home';
import About from 'containers/About';

const routes = (
  <div className="site-wrap">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);

export default routes;
