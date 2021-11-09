import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Title} from 'react-native-paper';

export default class Beds extends Component{
    constructor(props) {
        super(props);
        this.state = {
            itemName: ' ',
            itemDescription: ' ',
            itemQty: ' ',
            itemUnitPrice: ' ',
        };
    }

    saveItem = async (data) => {
        await fetch("http://localhost:3000/item/add",{
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

    stateItemName = (e) => {
        this.setState({
            itemName: e
        })
    }
    stateItemDescription = (e) => {
        this.setState({
            itemDescription: e
        })
    }
    stateItemQty = (e) => {
        this.setState({
            itemQty: e
        })
    }
    stateItemUnitPrice = (e) => {
        this.setState({
            itemUnitPrice: e
        })
    }

    btnSave = () => {

        const data = {
            "itemName": this.state.itemName,
            "itemDescription": this.state.itemDescription,
            "itemQty": this.state.itemQty,
            "itemUnitPrice": this.state.itemUnitPrice
        }
        this.saveItem(data)
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.menuBar}>
                    <Image source={require('../assets/menu.png')} resizeMode="contain" style={styles.menuLogo}/>
                    <Title style={styles.lblMenu}> ABC Company </Title>
                    <Text style={styles.txtCartTot}> Rs. 00 </Text>
                    <Image source={require('../assets/cart.png')} resizeMode="contain" style={styles.cartImg}/>
                </View>

                <View style={styles.mainBody}>
                    <Text style={styles.lblName}> Item Name </Text>
                    <TextInput
                        style={styles.txtItemName}
                        onChangeText={(e) => {
                            this.stateItemName(e)
                        }}
                        value={this.state.itemName}
                    >
                    </TextInput>
                    <Text style={styles.lblDescription}> Item Description </Text>
                    <TextInput
                        style={styles.txtDescription}
                        onChangeText={(e) => {
                            this.stateItemDescription(e)
                        }}
                        value={this.state.itemDescription}
                    >
                    </TextInput>
                    <Text style={styles.lblQty}> Item QTY </Text>
                    <TextInput
                        style={styles.txtItemName}
                        onChangeText={(e) => {
                            this.stateItemQty(e)
                        }}
                        value={this.state.itemQty}
                    >
                    </TextInput>
                    <Text style={styles.lblUnitPrice}> Item Unit Price </Text>
                    <TextInput
                        style={styles.txtItemName}
                        onChangeText={(e) => {
                            this.stateItemUnitPrice(e)
                        }}
                        value={this.state.itemUnitPrice}
                    >
                    </TextInput>

                    <TouchableOpacity
                        onPress={() => {
                            this.btnSave()
                        }}
                     style={styles.btnSave}>
                        <Text style={styles.btnSaveText}>{'Save'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footerContent}>
                    <TouchableOpacity style={styles.footer1}>
                        <Image source={require('../assets/home.png')} resizeMode="contain" style={styles.homeImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footer2}>
                        <Image source={require('../assets/order.png')} resizeMode="contain" style={styles.orderImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footer3}>
                        <Image source={require('../assets/notification.png')} resizeMode="contain"
                               style={styles.notificationImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footer4}>
                        <Image source={require('../assets/settings.png')} resizeMode="contain"
                               style={styles.settingsImg}/>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    btnSave: {
        width: 200,
        height: 50,
        elevation: 8,
        backgroundColor: "#007ac7",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop:50,
        marginLeft:150
    },
    btnSaveText: {
        top: 5,
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    txtDescription:{
        width: 200,
        height: 35,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        elevation: 8,
        color: 'rgb(0,0,0)',
        backgroundColor: 'rgb(255,255,255)',
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 15,
        marginLeft:150,
        marginTop:-25
    },
    txtItemName:{
        width: 200,
        height: 35,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        elevation: 8,
        color: 'rgb(0,0,0)',
        backgroundColor: 'rgb(255,255,255)',
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 15,
        marginLeft:150,
        marginTop:-25
    },
    lblName:{
        fontSize:17,
        color:"#000000",
        marginTop:50,
        marginLeft:10
    },
    lblDescription:{
        fontSize:17,
        color:"#000000",
        marginTop:30,
        marginLeft:10
    },
    lblQty:{
        fontSize:17,
        color:"#000000",
        marginTop:30,
        marginLeft:10
    },
    lblUnitPrice:{
        fontSize:17,
        color:"#000000",
        marginTop:30,
        marginLeft:10
    },
    mainBody:{
        width:395,
        height:500,
        marginTop:0,
        backgroundColor:"#ffffff"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255,255,255)',
    },
    menuBar: {
        width: 395,
        height: 80,
        backgroundColor: '#007ac7',
        elevation: 8,
        marginTop:0,
        justifyContent: 'center',
        display: 'flex',
    },
    menuLogo: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    txtCartTot: {
        color: '#FFFFFF',
        marginLeft: 280,
        fontSize: 18,
        marginTop: -25,
    },
    cartImg: {
        width: 30,
        height: 30,
        marginLeft: 345,
        marginTop: -28,
    },
    lblMenu: {
        marginTop: -30,
        marginLeft: 50,
        color: '#FFFFFF',
    },
    footerContent: {
        width: 395,
        height: 70,
        backgroundColor: '#007ac7',
        marginTop: 70,
    },
    footer1: {
        width: 50,
        height: 50,
        marginTop: 12,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 40,
        elevation: 5,
    },
    homeImg: {
        width: 40,
    },
    footer2: {
        width: 50,
        height: 50,
        marginTop: -50,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 130,
        elevation: 5,
    },
    orderImg: {
        width: 40,
    },
    footer3: {
        width: 50,
        height: 50,
        marginTop: -50,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 220,
        elevation: 5,
    },
    notificationImg: {
        width: 40,
    },
    footer4: {
        width: 50,
        height: 50,
        marginTop: -50,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 310,
        elevation: 5,
    },
    settingsImg: {
        width: 40,
    },
})
