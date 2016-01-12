
// var GOOGLE_MAPS_API_KEY = 'AIzaSyBDZOWrvmGMgmhimndfQa9TnFn21M_rTAQ';

import React, { Component, PropTypes, View, Text, StyleSheet, Platform, Image } from 'react-native';
// const RefreshableListView = require('react-native-refreshable-listview');
// const FBSDKLogin = require('react-native-fbsdklogin');
const debug = require('react-native-debug')('app:containers:EventsListItem');

import MDK from 'react-native-material-kit';
const {
  MKCardStyles,
  MKColor,
} = MDK;
import DateDisplay from './DateDisplay';

class EventsListItem extends Component {

  static propTypes = {
    event: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
  }

  viewEvent(id) {
    if (this.props.onViewEvent) {
        this.props.onViewEvent(id);
    }
  }

  render() {
    const { event } = this.props;

    return (
      <View style={MKCardStyles.card}>
      {(event.cover && event.cover.source) ? (
          <Image
            onPress={this.viewEvent.bind(this, event.id)}
            style={MKCardStyles.image}
            source={{uri: event.cover.source}}
          />
        ) : <Image style={MKCardStyles.image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>}

      <View>
          <Text
              style={[MKCardStyles.content, {backgroundColor: MKColor.Cyan, textAlign: 'center'}]}
          >
            <Text onPress={this.viewEvent.bind(this, event.id)} style={[styles.cardTitle, {color: 'white'}]}>{event.name}</Text>
          </Text>
          <DateDisplay startTime={event.startTime} endTime={event.endTime} />
          {event.description ?
            (<Text onPress={this.viewEvent.bind(this, event.id)} style={MKCardStyles.content}>{event.description.substring(0, 140)}</Text>)
          : null}
      </View>
        <View style={MKCardStyles.action}>
          <Text>My Action</Text>
        </View>
      </View>
    );
  }
}
/**
 *   {((event.cover && event.cover.source) ? (
     <Image
         source={{uri: event.cover.source}}
     />
   ) : null)}
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: MKColor.Silver,
  },
  area: {
    padding: 8,
    backgroundColor: MKColor.White,
  },
  cardTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
    flex: 1,

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
