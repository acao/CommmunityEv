import React, { Component, PropTypes } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import MDL from 'react-native-material-kit';

class ActionIconButton extends Component {
  constructor(p, c) {
    super(p, c);
  }
  handleOnPress() {
    this.props.handleOnPress();
  }
  handleButtonToggle() {
    this.props.handleOnToggle();
  }

  render() {
    const { name, size, color } = this.props;
    const ActionIcon = (<Icon name={name} size={size} color={color} />);
    const Button = MDL.MKButton.flatButton()
          .withText(this.props.text)
          .withOnPress(this.handleOnPress.bind(this));
      if (this.props.handleButtonToggle) {
        Button.withOnPress(this.handleButtonToggle.bind(this));
      } else {
        Button.withOnPress(this.handleButtonPress.bind(this));
      }
    return (
      <Button><ActionIcon/></Button>
    );
  }
}
ActionIconButton.displayName = 'ActionIconButton';
ActionIconButton.defaultProps = {
  text: 'Button',
};
ActionIconButton.propTypes = {
  text: PropTypes.string,
  handleOnPress: PropTypes.func,
  handleOnToggle: PropTypes.func,
};
export default ActionIconButton;
