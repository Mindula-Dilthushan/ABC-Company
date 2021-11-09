import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, TouchableOpacity,TextInput, Text, Image} from 'react-native';
import {Title} from 'react-native-paper';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: ' ',
            email: ' ',
            password: ' ',
            forPassword: ' ',
        };
    }

    saveLogin = async (data) => {
        await fetch("http://localhost:3000/login/add",{
            method:"POST",
            headers: {
                accept:"application/json",
                "Content-type" : "application/json"
            },
            body:JSON.stringify(data)
        }).then(res => {
            res.json()
        }).then(data => {
            alert("Success !!!")
        }).catch(err => {
            alert("no")
            if (err) console.log(err);
        })
    }

    stateUserName = (e) => {
        this.setState({
            userName: e
        })
    }
    stateEmail = (e) => {
        this.setState({
            email: e
        })
    }
    statePassword= (e) => {
        this.setState({
            password: e
        })
    }
    stateForPassword = (e) => {
        this.setState({
            forPassword: e
        })
    }

    btnSaveLogin = () => {
        const data = {
            "userName": this.state.userName,
            "email": this.state.email,
            "password": this.state.password,
            "forPassword": this.state.forPassword
        }
        this.saveLogin(data)
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>

                {/*--------------- Logo -----------------*/}
                <Image source={require("../assets/ABC-LOGO.png")} resizeMode="contain" style={styles.abcLogo}/>

                {/*----------------User Name--------------*/}
                <Title style={styles.lblUserName}> User Name </Title>
                <TextInput
                    style={styles.txtUserName}
                    onChangeText={(e) => {
                        this.stateUserName(e)
                    }}
                    value={this.state.userName}
                >
                </TextInput>

                <Title style={styles.lblEmail}> Email </Title>
                <TextInput style={styles.txtEmail}
                           onChangeText={(e) => {
                               this.stateEmail(e)
                           }}
                           value={this.state.email}
                >
                </TextInput>

                {/*---------------- Password --------------*/}
                <Title style={styles.lblPassword}> Password </Title>
                <TextInput style={styles.txtPassword}
                           onChangeText={(e) => {
                               this.statePassword(e)
                           }}
                           value={this.state.password}
                >
                </TextInput>

                <Title style={styles.lblForgotPassword}> Confirm Password </Title>
                <TextInput style={styles.txtForgotPassword}
                           onChangeText={(e) => {
                               this.stateForPassword(e)
                           }}
                           value={this.state.forPassword}
                >
                </TextInput>


                {/*----------------Button ------------------*/}
                <TouchableOpacity onPress={() => {
                    this.btnSaveLogin()
                    this.props.navigation.navigate('DashBoard');
                }} style={styles.btnSignIn}>
                    <Text style={styles.btnSignInTxt}>{'Sign Up'}</Text>
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
        marginTop:-80
    },
    lblUserName: {
        fontSize: 20,
        marginRight: 190,
        marginTop:-40
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
    lblEmail: {
        fontSize: 20,
        marginRight: 190,
        marginTop:15,
        marginLeft:-50
    },
    txtEmail: {
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
    lblForgotPassword: {
        fontSize: 20,
        marginRight: 135,
        marginTop:20
    },
    txtForgotPassword: {
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
