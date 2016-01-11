let store = require('./configureStore.dev.js');

if (process.env.NODE_ENV === 'production') {
  store = require('./configureStore.prod.js');
}
console.log(store.default().getState(), 'cats');
export default store;
