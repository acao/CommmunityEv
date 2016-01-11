import { createStore, applyMiddleware, compose } from 'redux';
// import { reduxReactRouter } from 'redux-router';
// // import DevTools from '../containers/DevTools';
// import createHistory from 'history/lib/createBrowserHistory';
// import routes from '../router';
import thunk from 'redux-thunk';
// import api from '../middleware/api';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  /* applyMiddleware(thunk, api), */
  applyMiddleware(thunk),
  // reduxReactRouter({ createHistory }),
  applyMiddleware(createLogger())
  /* DevTools.instrument() */
)(createStore);

export default function configureStore(initialState) {
  const final = finalCreateStore(rootReducer, initialState);
  console.log(final.getState());
  return final;
}
