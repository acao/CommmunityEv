import React, { Component, PropTypes } from 'react-native';
const { View, Text, StatusBarIOS } = React;
import { FBSDKLoginButton } from 'react-native-fbsdklogin';
import { readPermissions } from '../lib/fbsdk';
import { EventsContainer } from '../containers';

export default class LoginContainer extends Component {

  static defaultProps = {
    ...Component.defaultProps,
    navigator: PropTypes.navigator,
  }

  constructor(props, context){
    super(props, context);
  }

  render() {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText} onPress={this.continue}>Events</Text>
        <Login />
      </View>
    );
  }
  continue() {
    StatusBarIOS.setStyle('default', true);
    props.router.pushState(null, 'events')
  }
};


var Login = React.createClass({
  render: function() {
    return (
      <View>
        <FBSDKLoginButton
          onLoginFinished={(err, res)=> actions.accountLogin(err, res)}
          onLogoutFinished={()=> actions.accountLogout()}
          readPermissions={readPermissions}
          />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  splashContainer: {
    alignItems: 'center',
    backgroundColor: '#212342',
    flex: 1,
    justifyContent: 'center',
  },
  splashImage: {
    height: 120,
    width: 260,
    marginBottom: 50,
    marginTop: 50,
  },
  splashText : {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
})

export default LoginContainer;
