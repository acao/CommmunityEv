import { createReducer } from '../reducers';


import {
  EVENTS_REQUESTED,
  EVENTS_SUCCESS,
  EVENTS_ERROR,
  BOOKMARK_EVENT,
  RSVP_EVENT,
  EVENT_LOAD,
} from '../actions/eventActions';

const moment = require('moment');

const initialState = [{
  events: [],
  eventsCount: 0,
  isFetchingEvents: false,
  selectedEvent: {},
}];
export const eventHandlers = createReducer([], {
  [EVENTS_REQUESTED]: (state) => {
    return Object.assign({}, state, {
      isFetchingEvents: true,
    });
  },
  [EVENT_LOAD]: (state, action) => {
    const { events } = state;
    // get event by id
    const selectedEvent = events.filter((event) => {
      return event.id === action.payload.eventId;
    })[0];
    return Object.assign({}, state, {
      selectedEvent,
    });
  },
  [EVENTS_ERROR]: (state) => {
    return Object.assign({}, state, {
      isFetchingEvents: false,
    });
  },
  [EVENTS_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      isFetchingEvents: false,
      events: action.payload.data,
      eventsCount: action.payload.data.length,
    });
  },
}, initialState);
