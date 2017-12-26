import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getStore } from './store';
import createBrowserHistory from 'history/createBrowserHistory';
import UniversalRouter from 'universal-router';
import queryString from 'query-string';
import routes from './routes';
import App from './App';

const
  history = createBrowserHistory(),
  router = new UniversalRouter(routes),
  store = getStore();

async function onLocationChange(location, action) {

  const route = await router.resolve({
    path: location.pathname,
    query: queryString.parse(location.search),
  });

  ReactDOM.render((
      <Provider store={store}>
        <App history={history}>
          {route.component}
        </App>
      </Provider>
    ),
    document.getElementById('root'));
}

history.listen(onLocationChange)
onLocationChange(history.location);
