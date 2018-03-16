import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, AppRegistry, AsyncStorage, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles/general.js'

export default class Logout extends React.Component {

    static navigationOptions = {
        header: null,
        gesturesEnabled: false,
        headerLeft: null,
    };

    constructor(props){
        super(props);
        AsyncStorage.removeItem('user_data');
        AsyncStorage.removeItem('access_token');
        const { navigate } = this.props.navigation;
        navigate('Login');
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image resizeMode='cover' source={require('../assets/images/background.png') }/>
                <Text>Good bye!</Text>
            </ScrollView>
        )
    }
}