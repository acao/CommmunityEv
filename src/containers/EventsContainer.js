
// var GOOGLE_MAPS_API_KEY = 'AIzaSyBDZOWrvmGMgmhimndfQa9TnFn21M_rTAQ';

import React, { Component, PropTypes } from 'react-native';
// const RefreshableListView = require('react-native-refreshable-listview');
// const FBSDKLogin = require('react-native-fbsdklogin');

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import * as eventActions from '../actions/eventActions';
import EventsListItem from '../components/EventsListItem';
const debug = require('react-native-debug')('app:containers:EventsContainer');
import { Actions as routerActions } from 'react-native-router-flux';
var {  StyleSheet, Text, View, Image, ListView, ScrollView } = React;


class EventsContainer extends Component {

  constructor(props, context) {
    super(props, context);
    this.reloadEvents = this.reloadEvents.bind(this);
    // this.getInitState = this.getInitState.bind(this);
    // // this.state = this.getInitState();
  }

  static propTypes = {
    dispatch: PropTypes.func,
    events: PropTypes.array,
    eventSearch: PropTypes.object,
  };
  componentWillMount() {
    this.reloadEvents();
    // this.shouldRedirectToLogin(this.props.isLoggedIn);
  }
  componentWillReceiveProps(nextProps){
    const justLoggedIn = (nextProps.isLoggedIn && !this.props.isLoggedIn);
    if (justLoggedIn) {
      console.log('just logged in');
      this.reloadEvents();
    }
  }
  shouldRedirectToLogin(isLoggedIn) {
    if (!isLoggedIn) routerActions.login();
  }
  // componentWillUpdate() {
  //
  //   // this.setState(this.getInitState());
  // }

  getInitState() {
    return {};
    // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    // return {
    //   dataSource: ds.cloneWithRows(( this.props.events || [] )),
    // };
  }

  viewEvent(id){
    routerActions.viewevent({eventId: id});
  }

  reloadEvents() {
    console.log('this happened');
    this.props.dispatch(eventActions.loadMyEvents());
  }

  // renderEvent(event) {
  //   return <EventsListItem event={event} />;
  // }

  render() {
    const { events, isLoggedIn } = this.props;
    const hasEvents = (events.length > 0);
    const eventsList = hasEvents ? events.map((event, key) => {
      return (
        <EventsListItem
            key={key}
            event={event}
            onViewEvent={this.viewEvent.bind(this)}
        />
        );
    }) : (<Text>You need to be signed in to view events!</Text>);
    return (
      <ScrollView style={styles.container}>
        <View>{eventsList}</View>
      </ScrollView>
    );
    // return (
    //     <RefreshableListView
    //       dataSource={this.state.dataSource}
    //       renderRow={this.renderEvent}
    //       loadData={this.reloadEvents}
    //       refreshDescription="Refreshing Events"
    //     />
    //   );
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.

EventsContainer.displayName = 'EventsContainer';
EventsContainer.defaultProps = {
  events: [],
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
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
    events: state.events.events,
    eventsCount: state.events.eventCount,
    isLoggedIn: state.account.isLoggedIn,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(EventsContainer);
