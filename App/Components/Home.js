import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, AppRegistry, AsyncStorage, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/general.js'

export default class HomeScreen extends React.Component {

    constructor(props){
        super(props);
    }

    logout() {
        console.log('done');
    }

    static navigationOptions = ({ navigation }) =>  {
        return {
            title: 'Accueil',
            gesturesEnabled: false,
            headerLeft: null,
            headerRight: (
                <Button
                    title="+"
                    onPress={() => console.log('done')}
                />
            ),
            headerLeft: (
                <Icon.Button name="power-off" backgroundColor="transparent" color="#4F8EF7" underlayColor='transparent'
                             onPress={() => Alert.alert(
                                 'Se déconnecter',
                                 'Etes vous sur de vouloir vous déconnecter ?',
                                 [
                                     {text: 'Annuler'},
                                     {text: 'Déconnexion', onPress: () => navigation.navigate('Logout')},
                                 ],
                                 { cancelable: false }
                             )}/>
            ),
            headerStyle: {paddingRight: 10, paddingLeft: 10},
        }
    };

    render() {
        return (
            <View>
                <Button
                    title="Delete Record"
                    onPress={() => Alert.alert(
                        'Alert Title',
                        'alertMessage',
                        [
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                            {text: 'OK', onPress: this.logout},
                        ],
                        { cancelable: false }
                    )}
                />
            </View>
        )}
}