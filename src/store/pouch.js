// import * as eventTypes from '../actions/events';
// import pouchMiddleware from 'pouch-redux-middleware';
// import PouchDB from 'pouchdb';
// const eventsDb = new PouchDB('events');
//
// const pouchMiddleware = pouchMiddleware({
//   path: '/events',
//   eventsDb,
//   actions: {
//     remove: doc => store.dispatch({type: eventTypes.EVENTS_SUCCESS, id: doc._id}),
//     insert: doc => store.dispatch({type: eventTypes.EVENTS_SUCCESS.LO, events: doc}),
//     update: doc => store.dispatch({type: eventTypes.EVENTS_SUCCESS.UPDATE_TODO, todo: doc}),
//   }
// });
//
// export default pouchMiddleware;
