import { combineReducers } from 'redux'
import {
  EVENTS_LOAD_REQUESTED,
  EVENTS_LOAD_COMPLETED,
  EVENTS_LOAD_ERROR,
  BOOKMARK_EVENT,
  RSVP_EVENT,
} from '../actions'

function selectEvent(state = 'reactjs', action) {
  switch (action.type) {
    case BOOKMARK_EVENT:
      return action.reddit
    default:
      return state
  }
}

function rsvpEvent(state = 'reactjs', action) {
  switch (action.type) {
    case RSVP_EVENT:
      return action.payload
    default:
      return state
  }
}

function events(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case EVENTS_LOAD_REQUESTED:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case EVENTS_LOAD_COMPLETED:
      return Object.assign({}, state, {
        isFetching: false,
        events: action.payload,
      })
    default:
      return state
  }
}

function eventsLoad(state = {}, action) {
  switch (action.type) {
    case EVENTS_LOAD_COMPLETED:
      return Object.assign({}, state, {
        [action.id]: events(state[action.reddit], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  eventsLoad,
  selectEvent,
  rsvpEvent,
})

export default rootReducer
