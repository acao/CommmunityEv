import { combineReducers } from 'redux';
import { eventHandlers } from './events';
import { accountHandlers } from './account';
//
// const {
//   eventsLoad,
//   selectEvent,
//   rsvpEvent,
// } = reducers;

const rootReducer = combineReducers({
  account: accountHandlers,
  events: eventHandlers,
});
export default rootReducer;

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    let result = state;
    if (handlers.hasOwnProperty(action.type)) {
      result = handlers[action.type](state, action);
    }
    return result;
  };
}
