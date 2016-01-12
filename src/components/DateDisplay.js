import React, { Component, PropTypes, Text, View, StyleSheet} from 'react-native';
import MDL from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

class DateDisplay extends Component {
  constructor(p, c) {
    super(p, c);
  }
  render() {
    let startTime = startDate = endTime = null;

    if (this.props.startTime) {
      startDate = moment(this.props.startTime).format('dddd, MMMM Do YYYY')
      startTime = moment(this.props.startTime).format('h:mm:ss a');
    }
    if (this.props.endTime) {
      endTime = moment(this.props.endTime).format('h:mm:ss a');
    }
    return (
      <View style={MDL.MKCardStyles.content}>
        <Text style={{fontWeight: 'bold', color: MDL.MKColor.Cyan}}>{startDate}</Text>
        <Text>{startTime}{(endTime) ? ` - ${endTime}`: null}</Text>
      </View>
    );
  }
}
DateDisplay.displayName = 'DateDisplay';
DateDisplay.defaultProps = {
  startTime: '',
  endTime: '',
  format: 'dddd, MMMM Do YYYY',
};
DateDisplay.propTypes = {
  startTime: PropTypes.string.required,
  endTime: PropTypes.string,
  format: PropTypes.string,
};
export default DateDisplay;
