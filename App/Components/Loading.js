import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, AppRegistry, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';
import styles from './styles/general.js';

export default class LoadingScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.getUserData();
    }

    getUserData() {
        AsyncStorage.getItem('access_token').then(data => {
            fetch('http://dev.emodyz.eu/api/user', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + data,
                },
            }).then((response) => {
                if (response.status !== 200){
                    return ('error');
                }
                return (response.text());
            })
                .then((responseJson) => {
                    if (responseJson != null && responseJson !== 'error') {
                        console.log('Access Token is valid user data saved!');
                        console.log(responseJson);
                        AsyncStorage.setItem('user_data', responseJson);
                        const {navigate} = this.props.navigation;
                        return (navigate('Home'));
                    }
                    else {
                        const {navigate} = this.props.navigation;
                        return (navigate('Login'));
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image resizeMode='cover' source={require('../assets/images/background.png') }/>
            </ScrollView>
        )}
}