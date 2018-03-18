import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, AppRegistry, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './App/Components/Login.js';
import RegisterScreen from './App/Components/Register.js';
import HomeScreen from './App/Components/Home.js';
import LoadingScreen from './App/Components/Loading.js';
import Logout from './App/Components/Logout.js';
import AddMirrorScreen from './App/Components/AddMirror.js';
import AddMirrorQrCode from './App/Components/AddMirrorQRCode.js';

const RootStack = StackNavigator(
    {
        Loading: {
            screen: LoadingScreen,
        },
        Login: {
            screen: LoginScreen,
        },
        Register: {
            screen: RegisterScreen,
        },
        Logout: {
            screen: Logout,
        },
        Home: {
            screen: HomeScreen,
        },
        AddMirror: {
            screen: AddMirrorScreen,
        },
        AddMirrorQrCode: {
            screen: AddMirrorQrCode
        }
    },
);

export default class App extends React.Component {


  render() {
      return <RootStack />;
  }
}

AppRegistry.registerComponent('RootStack', () => RootStack);
