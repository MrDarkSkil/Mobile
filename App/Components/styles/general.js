import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#7a43f2',
    },
    background: {
        resizeMode: 'cover',
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
        borderRadius: 4,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonRegister: {
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
    buttonScan: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 4,
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 20,
    },
    addMirrorContainer: {
        justifyContent: 'center',
        marginTop: 10,
        padding: 10,
    },
    addMirrorText: {
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 5,
    },
    addMirrorForm: {
        padding: 30,
        backgroundColor: 'white',
    },
    addMirrorTitle: {
        marginBottom: 13,
        borderWidth: 1,
        padding: 10,
        borderColor: 'grey',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    }
});