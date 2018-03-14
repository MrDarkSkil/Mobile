import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class RegisterScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Register screen</Text>
            </View>
        );
    }
}