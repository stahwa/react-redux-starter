import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import rootReducer from 'containers/App/reducer';

import { Router, hashHistory, useRouterHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import createHashHistory from 'react-router/node_modules/history/lib/createHashHistory';
import routes from './routes';



const store = createStore(
  combineReducers({
    rootReducer,
    routing: routerReducer
  })
)

// History with key in url e.g.: ?_k=umhx1s -----
// const history = syncHistoryWithStore(hashHistory, store)

// History with no key in url -----
const history = syncHistoryWithStore(useRouterHistory(createHashHistory)({ queryKey: false }), store)

render (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)