import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';
//import styles from './styles/general.js';

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

export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Vous pouvez entrer manuelement l'identifiants de votre mirroir ci-dessous:
        </Text>
        <View style={styles.addMirrorForm}>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  buttonConfirm: {
      height: 36,
      backgroundColor: '#ec3f59',
      borderColor: '#ec254a',
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center',
  },
  buttonConfirm: {
      height: 36,
      backgroundColor: '#ec3f59',
      borderColor: '#ec254a',
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center',
  },
  buttonText: {
      width: 200,
      textAlign: 'center',
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
  },
});
