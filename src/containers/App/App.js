import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import { Home } from 'containers/Home';
import About from 'containers/About';

const App = () => {
  return (
    <div className="site-wrap">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default App;
