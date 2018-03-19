import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, AppRegistry, AsyncStorage, Button, Alert, ActivityIndicator } from 'react-native';
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
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Image resizeMode='cover' source={require('../assets/images/background.png') }/>
                </View>
                <ActivityIndicator size="large" color="white" />
            </View>
        )
    }
}