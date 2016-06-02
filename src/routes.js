import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Main from './containers/Main';
import Home from './containers/pages/Home';
import About from './containers/pages/About';


const routes = (
  <Route component={App}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Route> 
)


export default routes