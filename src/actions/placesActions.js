import * as types from './actionTypes';
import { fbsdk } from '../lib';


/**
 * Load all the places a user likes, and all the events at those places.
 */
export function loadMyPlaces() {
  fbsdk.FBfetch('me/likes', 'GET',
          {"fields": fbsdk.placeFields(true)},
        )
        .then((response) => {
          return {
            type: types.PLACES_LOAD_COMPLETED,
            payload: response.data
          }
        })
        .catch(err => {
          return {
            type: types.PLACES_LOAD_ERROR,
            payload: err,
          }
        })
}
