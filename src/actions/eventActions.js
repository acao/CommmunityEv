import * as types from './actionTypes';
import { fbsdk } from '../lib';

export function loadMyEvents(..args) {
  fbsdk.FBfetch('me/events', 'GET',
                  {"fields":fbsdk.eventFields()},
                  ...args
                )
        .then((response) => {
          return {
            type: types.EVENTS_LOAD_COMPLETED,
            payload: response.data
          }
        })
        .catch(err => {
          return {
            type: types.EVENTS_LOAD_ERROR,
            payload: err,
          }
        })
}

export function getPlaceEvents(pageId, ...args) {
      fbsdk.FBfetch(
          Number.parseInt(pageId),
          {"fields": `events:{${fbsdk.eventFields()}}`,
          ..args
        )
        .then((response) => {
          return {
            type: types.EVENTS_LOAD_COMPLETED,
            payload: response.data
          }
        })
        .catch(err => {
          return {
            type: types.EVENTS_LOAD_ERROR,
            payload: err,
          }
        })
}
