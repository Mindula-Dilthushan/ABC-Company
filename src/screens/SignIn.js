import React, {Component} from "react";
import {StyleSheet, KeyboardAvoidingView} from "react-native";

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgb(0,119,255)"
    }
});
