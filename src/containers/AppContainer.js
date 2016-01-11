
import React,
{
  Text,
  Component,
  View,
} from 'react-native';

import { Provider } from 'react-redux/native';
import store from '../store';
import Routes from '../routes';

const debug = require('react-native-debug')('app:containers:AppContainer');

class AppContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    console.log(store.default().getState())
    return (
      <Provider store={store.default()} >
          {() => <Routes />}
      </Provider>
    );
  }
}
// <Provider store={store} >
//     {() => <Routes />}
// </Provider>
export default AppContainer;
