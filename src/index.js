import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from 'containers/App/reducer';

import App from 'containers/App';
import Main from 'containers/Main';
import Home from 'containers/pages/Home';
import About from 'containers/pages/About';

import { Router, Route, browserHistory } from 'react-router-dom';
import { syncHistoryWithStore, routerReducer, ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'


const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    rootReducer,
    routing: routerReducer
  }),
  // applyMiddleware(middleware)
)

render (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)