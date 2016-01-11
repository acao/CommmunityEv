import { ogFetch, eventFields } from '../lib/fbsdk';
import invariant from 'invariant';
export const EVENT_LOAD = 'EVENT_LOAD';
export const EVENTS_REQUESTED = 'EVENTS_REQUESTED';
export const EVENTS_ERROR = 'EVENTS_ERROR';
export const EVENTS_SUCCESS = 'EVENTS_SUCCESS';
export const BOOKMARK_EVENT = 'BOOKMARK_EVENT';
export const RSVP_EVENT = 'RSVP_EVENT';

export function loadMyEvents(...args) {
  return dispatch => {
    ogFetch('me/events')
          .then((response) => {
            console.log('oooh', response.data.length);
            dispatch({
              type: EVENTS_SUCCESS,
              payload: response,
            });
          })
          .catch(err => {
            dispatch({
              type: EVENTS_ERROR,
              payload: err,
            });
          });
  };
}

export function getEvent(opts) {
  invariant(opts.eventId, 'opts.eventId required');
  return (dispatch, store) => {
    dispatch({
      type: EVENT_LOAD,
      payload: opts,
    });
  };
}

export function getPlaceEvents(pageId, ...args) {
  return dispatch => {
    ogFetch(
        Number.parseInt(pageId),
        {"fields": `events:{${eventFields()}}`},
        ...args
      )
      .then((response) => {
        dispatch({
          type: EVENTS_SUCCESS,
          payload: response.data,
        })
      })
      .catch(err => {
        dispatch({
          type: EVENTS_ERROR,
          payload: err,
        })
      });
  }

}
