import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    mot_de_passe: t.String,
});

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
            error: 'Vous devez entrer une adresse email valide'
        },
        mot_de_passe: {
            error: 'Vous devez entrer un mot de passe'
        },
    },
    stylesheet: formStyles,
};

export default class App extends React.Component {
    handleSubmit = () => {
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);
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
                    source={require('./assets/images/background.png') }
                />
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

                <TouchableHighlight style={styles.buttonRegister} onPress={this.handleSubmit} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>S'inscrire</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    background: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        alignItems: 'center',
        margin: 20,
        marginTop: 90,
    },
    form: {
        justifyContent: 'center',
        marginTop: 15,
        padding: 40,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonRegister: {
        height: 36,
        backgroundColor: '#ec3f59',
        borderColor: '#ec254a',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
    }
});