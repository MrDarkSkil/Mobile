import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';
import styles from './styles/general.js'

var _ = require('lodash');

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    mot_de_passe: t.String,
    mot_de_passe_confirmation: t.String,
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
    }
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
        mot_de_passe_confirmation: {
            error: 'Vous devez entre le meme mot de passe',
            password: true,
            secureTextEntry: true,
            stylesheet: stylesheet
        }
    },
    stylesheet: formStyles,
};

export default class RegisterScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    handleSubmit = () => {
        var value = this._form.getValue();
        if (value) {
            console.log(value);
        }
    };

    render() {
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
                    <Image resizeMode='cover' style={styles.background}
                           source={require('../assets/images/background.png') }
                    />
                </View>
                <View style={styles.title}>
                    <Text style={{color: 'white', fontSize: 40}}>
                        Créer un compte
                    </Text>
                </View>
                <View style={styles.form}>
                    <Form
                        ref={c => this._form = c} // assign a ref
                        type={User}
                        options={options}
                    />
                    <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Créer</Text>
                    </TouchableHighlight>

                </View>
            </ScrollView>
        );
    }
}