
// var GOOGLE_MAPS_API_KEY = 'AIzaSyBDZOWrvmGMgmhimndfQa9TnFn21M_rTAQ';

import React, { Component, PropTypes, ScrollView } from 'react-native';
// const RefreshableListView = require('react-native-refreshable-listview');
// const FBSDKLogin = require('react-native-fbsdklogin');

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import * as eventActions from '../actions/eventActions';
import EventViewItem from '../components/EventViewItem';
const debug = require('react-native-debug')('app:containers:EventViewContainer');

var {  StyleSheet, Text, View, Image, ListView } = React;


class EventViewContainer extends Component {

  constructor(props, context) {
    super(props, context);
    this.reloadEvent = this.reloadEvent.bind(this);
  }

  static propTypes = {
    dispatch: PropTypes.func,
    event: PropTypes.object,
    eventId: PropTypes.string,
  };
  componentWillMount() {
    this.reloadEvent();
  }

  reloadEvent() {
    this.props.dispatch(eventActions.getEvent({ eventId: this.props.eventId }));
  }
  render() {
    return (
      <ScrollView>
        <EventViewItem event={this.props.event}  />
      </ScrollView>
    );
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.

EventViewContainer.displayName = 'EventViewContainer';
EventViewContainer.defaultProps = {
  event: {},
};

var styles = StyleSheet.create({
  eventsContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  eventsText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
  },
});

function select(state) {
  return {
    event: state.events.selectedEvent,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(EventViewContainer);
