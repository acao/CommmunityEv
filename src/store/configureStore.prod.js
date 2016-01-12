import { createStore, applyMiddleware, compose } from 'redux';
// const PouchDB = require('pouchdb');
// import { persistentStore } from 'redux-pouchdb';

const db = new PouchDB('communityev');
// // import { reduxReactRouter } from 'redux-router'
// import createHistory from 'history/lib/createBrowserHistory'
// import routes from '../routes'
import thunk from 'redux-thunk';
// import api from '../middleware/api'
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  //applyMiddleware(persistentStore(db)),
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
