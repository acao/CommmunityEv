
// var GOOGLE_MAPS_API_KEY = 'AIzaSyBDZOWrvmGMgmhimndfQa9TnFn21M_rTAQ';

import React, {Component} from 'react-native';
const RefreshableListView = require('react-native-refreshable-listview');
const FBSDKLogin = require('react-native-fbsdklogin');

import { bindActionCreators } from 'redux';
import { connect, dispatch } from 'react-redux/native';
import { loadMyEvents } from '../actions/eventActions';

const debug = require('debug')('app:containers:EventsContainer');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} = React;


class EventsContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  reloadEvents(){
    loadMyEvents()
  }

  render() {
    return (
      <RefreshableListView
        dataSource={this.state.events}
        renderRow={this.renderArticle}
        loadData={this.reloadEvents}
        refreshDescription="Refreshing articles"
      />
    );
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    eventSearch: state.eventSearch,
    events: state.events,
    display: state.eventsDisplay,
    visibilityFilter: state.visibilityFilter,
  };
}


// Wrap the component to inject dispatch and state into it
export default connect(select)(EventsContainer);
