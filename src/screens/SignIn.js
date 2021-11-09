import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, TouchableOpacity,TextInput, Text, Image} from 'react-native';
import {Title} from 'react-native-paper';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>

                {/*--------------- Logo -----------------*/}
                <Image source={require("../assets/ABC-LOGO.png")} resizeMode="contain" style={styles.abcLogo}/>

                {/*----------------User Name--------------*/}
                <Title style={styles.lblUserName}> User Name </Title>
                <TextInput style={styles.txtUserName}> </TextInput>

                {/*---------------- Password --------------*/}
                <Title style={styles.lblPassword}> Password </Title>
                <TextInput style={styles.txtPassword}> </TextInput>

                {/*--------------- Forgot Password ---------*/}
                <TouchableOpacity style={styles.btnForgot}>
                    <Text style={styles.btnForgotTxt}>{'Forgot Password ?'}</Text>
                </TouchableOpacity>

                {/*----------------Button ------------------*/}
                <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('SignUp');
                }} style={styles.btnSignIn}>
                    <Text style={styles.btnSignInTxt}>{'Sign In'}</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255,255,255)',
    },
    abcLogo:{
        width: 250,
        height: 250,
        marginTop:-160
    },
    lblUserName: {
        fontSize: 20,
        marginRight: 190,
        marginTop:-10
    },
    txtUserName: {
        width: 300,
        height: 45,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 8,
        color: 'rgb(0,0,0)',
        backgroundColor: 'rgb(255,255,255)',
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 18,
    },
    lblPassword: {
        fontSize: 20,
        marginRight: 200,
        marginTop:20
    },
    txtPassword: {
        width: 300,
        height: 45,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 8,
        color: 'rgb(0,0,0)',
        backgroundColor: 'rgb(255,255,255)',
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 18,
    },
    btnForgot:{

    },
    btnForgotTxt:{
        marginTop:10,
        marginLeft:140,
        fontSize:17,
        color:"#000000"
    },
    btnSignIn: {
        width: 300,
        height: 50,
        elevation: 8,
        backgroundColor: "#007ac7",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop:50
    },
    btnSignInTxt: {
        top: 5,
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
});
