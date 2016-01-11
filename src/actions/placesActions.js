import * as types from './actionTypes';
import { fbsdk } from '../lib';

export const PLACES_REQUESTED = 'PLACES_REQUESTED';
export const PLACES_ERROR = 'PLACES_ERROR';
export const PLACES_COMPLETED = 'PLACES_SUCCESS';

/**
 * Load all the places a user likes, and all the events at those places.
 */
export function loadMyPlaces() {
  fbsdk.fBfetch('me/likes', {
    'fields': fbsdk.placeFields(true),
  })
    .then((response) => {
      return {
        type: types.PLACES_LOAD_COMPLETED,
        payload: response.data,
      };
    })
    .catch((err) => {
      return {
        type: types.PLACES_LOAD_ERROR,
        payload: err,
      };
    });
}
