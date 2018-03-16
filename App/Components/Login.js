import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, AppRegistry, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';
import styles from './styles/general.js';

var _ = require('lodash');

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    mot_de_passe: t.String,
});

// clone the default stylesheet
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

// overriding the text color
stylesheet.textbox.normal.color = 'white';
stylesheet.controlLabel.normal.color = 'white';

const formStyles = {
    ...Form.stylesheet,
    controlLabel: {
        normal: {
            color: 'white',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        },
        error: {
            color: 'white',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        }
    },
};

const options = {
    fields: {
        email: {
            error: 'Vous devez entrer une adresse email valide',
            keyboardType: 'email-address',
            stylesheet: stylesheet
        },
        mot_de_passe: {
            error: 'Vous devez entrer un mot de passe',
            password: true,
            secureTextEntry: true,
            stylesheet: stylesheet
        },
    },
    stylesheet: formStyles,
};

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    getUserData() {
        AsyncStorage.getItem('access_token').then(data => {
            fetch('http://dev.emodyz.eu/api/user', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + data,
                },
            }).then((response) => response.text())
                .then((responseJson) => {
                    if (responseJson != null) {
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

    handleSubmit = () => {
        const value = this._form.getValue();
        if (value) {
            fetch('http://dev.emodyz.eu/oauth/token', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    grant_type: 'password',
                    client_id: '1',
                    client_secret: 'Rp52CEoYWjiIA0kRTTGspdbjee3tQxSaNCVn7J87',
                    username: value.email,
                    password: value.mot_de_passe
                }),
            }).then((response) => response.json())
                .then((responseJson) => {
                    try {
                        AsyncStorage.setItem('access_token', responseJson.access_token);
                        this.getUserData();
                    } catch (error) {
                        console.log('Error while saving login key');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
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
                <View style={styles.title}>
                    <Text style={{color: 'white', fontSize: 40}}>
                        Elios
                    </Text>
                </View>
                <View style={styles.form}>
                    <Form
                        ref={c => this._form = c} // assign a ref
                        type={User}
                        options={options}
                    />
                    <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Se connecter</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonRegister} onPress={() => navigate('Register')} underlayColor='#FF7184'>
                        <Text style={styles.buttonText}>Créer un compte</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        );
    }
}