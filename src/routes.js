import React,
{
  Navigator,
  Component,
  StatusBarIOS,
} from 'react-native';

import {
  LoginContainer,
  EventsContainer,
  EventViewContainer,
}
from './containers';

import { Router, Route, Schema } from 'react-native-router-flux';

class TabIcon extends Component {
  static displayName = 'TabIcon';
  render() {
    return (
        <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
    );
  }
}

export default class Routes extends Component {
  componentWillMount() {
    StatusBarIOS.setStyle('light-content');
  }
  render() {
    return (
        <Router hideNavBar={false} initialRoutes={['login']}>
            <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
            <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight} />
            <Schema name="withoutAnimation" />
            <Schema name="tab"
              icon={TabIcon}
              type="switch"
            />
            <Route name="events" title="Events" component={EventsContainer} />
            <Route name="viewevent"  title="View Event" component={EventViewContainer} />
            <Route name="login" title="Login" schema="modal" component={LoginContainer}/>

        </Router>
    );
  }
}
