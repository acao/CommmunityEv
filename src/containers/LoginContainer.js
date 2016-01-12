import React, { Component, PropTypes } from 'react-native';
const { View, Text, StyleSheet } = React;
import { FBSDKLoginButton } from 'react-native-fbsdklogin';
import { readPermissions } from '../lib/fbsdk';
import { Actions as routerActions } from 'react-native-router-flux';
import * as accountActions from '../actions/accountActions';
import { connect } from 'react-redux/native';

class LoginContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentWillMount() {
    this.redirectToEvents(this.props.isLoggedIn);
  }
  componentWillReceiveProps(nextProps) {
    this.redirectToEvents(nextProps.isLoggedIn);
  }
  redirectToEvents(isLoggedIn) {
    if (isLoggedIn) routerActions.events();
  }
  handleLoginFinished(err, res) {
    this.props.dispatch(accountActions.accountLogin(err, res));
  }
  handleLogoutFinished() {
    this.props.dispatch(accountActions.accountLogout());
  }
  render() {
    return (
      <View style={styles.splashContainer}>
        <Login
          onLoginFinished={this.handleLoginFinished.bind(this)}
          onLogoutFinished={this.handleLogoutFinished.bind(this)}
         />
         <Text style={styles.splashText} onPress={this.continue.bind(this)}>Return To Events</Text>
      </View>
    );
  }
  continue() {
    routerActions.events();
  }
}
LoginContainer.propTypes = {
  isLoggedIn: PropTypes.bool,
  account: PropTypes.object,
};

var Login = React.createClass({
  render() {
    return (
        <View>
          <FBSDKLoginButton
            {...this.props}
            readPermissions={readPermissions}
          />
        </View>
    );
  },
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
});
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    account: state.account.account,
    isLoggedIn: state.account.isLoggedIn,
  };
}


export default connect(select)(LoginContainer);
