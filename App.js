import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './App/Components/Login.js';
import RegisterScreen from './App/Components/Register.js';

const RootStack = StackNavigator(
    {
        Home: {
            screen: LoginScreen,
        },
        Register: {
            screen: RegisterScreen,
        },
    },
);

export default class App extends React.Component {
  render() {
      return <RootStack />;
  }
}

AppRegistry.registerComponent('RootStack', () => RootStack);