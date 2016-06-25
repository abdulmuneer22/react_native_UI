/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './UIComponents/main'

class UI extends Component {
  render() {
    return (
      
      <Main /> // MainActivity UI
     
    );
  }
}




AppRegistry.registerComponent('UI', () => UI);
