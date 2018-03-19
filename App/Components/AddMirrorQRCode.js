import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, AsyncStorage } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

let canRescan = true;

export default class AddMirrorQRCodeScreen extends React.Component {
  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    if (canRescan == false) {
      return
    }
    canRescan = false;
    AsyncStorage.getItem('access_token').then(access_token => {
        fetch('http://dev.emodyz.eu/api/mirrors/' + data.data + '/link', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + access_token,
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
                            {text: 'Ok', onPress: () => canRescan = true},
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
                            {text: 'Ok', onPress: () => canRescan = true},
                        ],
                        { cancelable: false }
                    )
                }
            })
            .catch((error) => {
                canRescan = true;
                console.log(error);
            });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Scanner le QRCode qui se trouve sur votre mirroir.
        </Text>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 200, width: 200 }}
            />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
