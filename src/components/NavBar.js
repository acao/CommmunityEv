import NavigationBar from 'react-native-navbar';
import React, { Component } from 'react-native';
import { Router, Route, Animations, Schema } from 'react-native-redux-router';
const { StyleSheet, View } = React;


class NavBarBase extends Component {
    onPrev(){
        var Actions = this.props.routes;
        if (this.props.onPrev){
            this.props.onPrev();
            return;
        }
        if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1){
            Actions.pop();
        }
    }
    render() {
      const Actions = this.props.routes;

      return (
        <NavigationBar style={styles.navBar}
          titleColor='white'
          buttonsColor='white'
          statusBar='lightContent'
          prevTitle={this.props.initial ? " " : null}
          onPrev={this.props.onPrev || Actions.pop}
          onNext={this.props.onNext || Actions.pop}
          {...this.props}
        />
      );
    }
}
class NavBar extends Component {
  render() {
    return <NavBarBase customNext={<View/>} {...this.props}/>
  }
}


class NavBarModal extends Component {
  render() {
    return (
        <NavBarBase customPrev={<View/>}
          nextTitle="Close"
          {...this.props}
        />
      );
  }
}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#0db0d9'
    },
});


module.exports = {NavBar, NavBarModal};
