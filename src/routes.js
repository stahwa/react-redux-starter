import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Main from './containers/MainContainer'
import Home from './containers/HomeContainer'
import About from './containers/AboutContainer'


const routes = (
  <Route component={App}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Route> 
)


export default routes