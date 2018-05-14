import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, AppRegistry, AsyncStorage, Alert, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';
import styles from './styles/general.js';

const Form = t.form.Form;

const User = t.struct({
    id: t.String,
});

const options = {
    fields: {
        id: {
            error: 'Vous devez entrer un ID valide',
            keyboardType: 'default',
        },
    },
};

export default class AddMirrorScreen extends React.Component {

    static navigationOptions = {
        title: 'Ajouter un miroir'
    };

    constructor() {
        super();
    }

    handleSubmit = () => {
        const value = this._form.getValue();
        AsyncStorage.getItem('access_token').then(data => {
            fetch('http://dev.elios-mirror.com/api/mirrors/' + value.id + '/link', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + data,
                },
            }).then((response) => {
                console.log(response);
                if (response.status !== 200){
                    return ('error');
                }
                return (response.json());
            })
                .then((responseJson) => {
                    if (responseJson != null && responseJson !== 'error') {
                        Alert.alert(
                            'Succès!',
                            'Le miroir à été associé à votre compte',
                            [
                                {text: 'Ok'},
                            ],
                            { cancelable: false }
                        )
                    }
                    else {
                        console.log('Add mirror error');
                        Alert.alert(
                            'Erreur',
                            'Le miroir n\'existe pas ou est déjà associé à votre compte',
                            [
                                {text: 'Ok'},
                            ],
                            { cancelable: false }
                        )
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        });

    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.addMirrorContainer}>
                    <TouchableHighlight style={styles.buttonScan} underlayColor='#99d9f4' onPress={() =>
                      navigate('AddMirrorQrCode')
                    }>
                        <Text style={styles.buttonText}>Scanner le QR Code</Text>
                    </TouchableHighlight>
                    <View style={styles.addMirrorForm}>
                        <Text style={styles.addMirrorTitle}>
                            Des problèmes ?
                        </Text>
                        <Text style={styles.addMirrorText}>
                            Si vous n'avez pas la possibilité de scanner le QR Code, entrez l'ID du miroir ci dessous
                        </Text>
                        <Form
                            ref={c => this._form = c} // assign a ref
                            type={User}
                            options={options}
                        />
                        <TouchableHighlight style={styles.buttonConfirm} onPress={this.handleSubmit} underlayColor='#FF7184'>
                            <Text style={styles.buttonText}>Valider</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        )}
}
