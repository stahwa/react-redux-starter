import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Route } from 'react-router-dom';
import { routerReducer, ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import homeExample from 'containers/Home/reducer';
import App from 'containers/App';

const history = createBrowserHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    homeExample,
    routing: routerReducer
  }),
  applyMiddleware(middleware)
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
