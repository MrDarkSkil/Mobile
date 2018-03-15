import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, AppRegistry, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles/general.js'

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Accueil',
        // gesturesEnabled: false,
        // headerLeft: null,
    };

    constructor(){
        super();
    }

    render() {
        return (
        <Text>You're logged in!</Text>
        )}
}