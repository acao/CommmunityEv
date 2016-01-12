import { createStore, applyMiddleware, compose } from 'redux';
// const PouchDB = require('pouchdb');
// const db = new PouchDB('communityev');
import { persistentStore } from 'redux-pouchdb';
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
  applyMiddleware(createLogger()),
  // applyMiddleware(persistentStore(db)),
  /* DevTools.instrument() */
)(createStore);

export default function configureStore(initialState) {
  const final = finalCreateStore(rootReducer, initialState);
  return final;
}
