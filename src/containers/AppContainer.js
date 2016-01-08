'use strict';

var GOOGLE_MAPS_API_KEY = 'AIzaSyBDZOWrvmGMgmhimndfQa9TnFn21M_rTAQ';

var React = require('react-native');

import React, { Component, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import {
  actions as routerActions,
  NavBar,
  Route,
  Router,
  Schema,
  TabBar,
  TabRoute
} from 'react-native-router-redux';

import {
  LoginContainer,
  EventsContainer
} from '../containers';

const debug = require('debug')('app:containers:AppContainer');
debug.enable('*');


const mapStateToProps = state => ({
  router: state.router,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...routerActions,
  }, dispatch),
  dispatch,
});

const defaultSchema = {
  navBar: NavBar,
  navLeftColor: '#FFFFFF',
  navTint: '#224655',
  navTitleColor: '#FFFFFF',
  navTitleStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
  },
  statusStyle: 'light-content',
  tabBar: TabBar,
};

class Application extends Component {
  render() {
    return (
      <Router {...this.props} assets={assets} initial="logIn">
        <Schema name="default" {...defaultSchema} />
        <Route name="logIn" component={LoginContainer} type="reset" hideNavBar={true} />
        <Route name="events" component={EventsContainer} />
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
