const FBSDKCore = require('react-native-fbsdkcore');
const { FBSDKGraphRequest } = FBSDKCore;
import { camelizeKeys } from 'humps';
const debug = require('react-native-debug')('app:lib:fbsdk');

const defaultOpts = {
  graphPath: 'me/events',
};

/**
 * Return a preconfigued promise
 */
export function ogFetch(...opts) {
  return new Promise((resolve, reject) => {
    const request = new FBSDKGraphRequest((error, result) => {
      if (error) {
        debug('GraphRequest Error:', error);
      } else {
         resolve(camelizeKeys(result));
      }
    }, ...defaultOpts, ...opts);
    request.start();
  });
}


export function getReadPermissions() {
  return [
    'user_likes', 'rsvp_event',
    'public_profile', 'user_location',
    'user_events', 'email',
    'user_tagged_places', 'user_likes',
  ];
}

export function eventFields() {
  return ['id', 'description', 'cover']
  //return 'id,description,cover,,name,interested_count,attending_count,maybe_count,category,type,start_time,end_time,picture{url,width,height,is_silhouette}';
}
export function placeFields(withEvents = false) {
  let events = '';
  if (withEvents) {
    events = `,events:{${eventFields()}}`;
  }

  return 'id,about,global_brand_page_name,hours,location,locations,attire,cover,awards,band_interests,description,description_html,parking,food_styles, store_location_descriptor,website,emails,place_type,phone,payment_options,current_location}';
}
