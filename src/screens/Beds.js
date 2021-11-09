import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';

export default class Beds extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <KeyboardAvoidingView style={styles.container}>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255,255,255)',
    },
})
