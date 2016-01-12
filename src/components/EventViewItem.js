
// var GOOGLE_MAPS_API_KEY = 'AIzaSyBDZOWrvmGMgmhimndfQa9TnFn21M_rTAQ';

import React, { Component, PropTypes, View, Text, StyleSheet, Platform, Image } from 'react-native';
// const RefreshableListView = require('react-native-refreshable-listview');
// const FBSDKLogin = require('react-native-fbsdklogin');
const debug = require('react-native-debug')('app:containers:EventsListItem');

// var {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
// } = React;

import {
  MKCard,
  MKCardTitle,
  MKCardImage,
  MKCardContent,
  MKCardMenu,
  MKCardStyles,
  MKCardAction,
  MKColor,
} from 'react-native-material-kit';

class EventsListItem extends Component {

  static propTypes = {
    event: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    const { event } = this.props;

    return (
      <View style={styles.container}>
        <View style={MKCardStyles.card}>
        {(event.cover && event.cover.source) ? (
            <Image
              style={MKCardStyles.image}
              source={{uri: event.cover.source}}
            />
          ) : null}
          <View style={styles.cardTitleArea}>
              <Text style={styles.cardTitle}>{event.name}</Text>
          </View>
          <Text style={MKCardStyles.content}>{event.description}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  cardTitleArea: {
    backgroundColor: MKColor.black,
    padding: 14,
  },
  cardTitle: {
    fontSize: 24,
    color: MKColor.white,
    fontWeight: '700',
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
  },
});
/**
 *     <MKCard>
       <MKCardTitle>{event.name}</MKCardTitle>
       <MKCardContent>{`${event.startTime} - ${event.endTime}`}</MKCardContent>
       <MKCardContent>{event.location}</MKCardContent>
     </MKCard>
 */

EventsListItem.displayName = 'EventsListItem';

export default EventsListItem;
