
// var GOOGLE_MAPS_API_KEY = 'AIzaSyBDZOWrvmGMgmhimndfQa9TnFn21M_rTAQ';

import React, { Component, PropTypes, View, Text, StyleSheet, Platform } from 'react-native';
// const RefreshableListView = require('react-native-refreshable-listview');
// const FBSDKLogin = require('react-native-fbsdklogin');
const debug = require('react-native-debug')('app:containers:EventsListItem');

import {
  MKCard,
  MKColor,
  MKCardTitle,
  MKCardImage,
  MKCardContent,
  MKCardMenu,
  MKCardStyles,
  MKCardAction
} from 'react-native-material-kit';

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
      <View>
        <View style={styles.area}>
              <Text onPress={this.viewEvent.bind(this, event.id)}
                    style={styles.areaTitle}
                >
                  {event.name}
                  </Text>
            <Text style={{fontStyle: 'italic'}}>{event.startTime} - {event.endTime}</Text>
            <Text>{event.description.substring(0, 140)}</Text>
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
  areaTitle: {
    fontSize: 16,
    color: '#444',
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
