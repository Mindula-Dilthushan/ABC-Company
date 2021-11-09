import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, TouchableOpacity, View, Image, Text} from 'react-native';
import {Title} from 'react-native-paper';

export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.menuBar}>
                    <Image source={require('../assets/menu.png')} resizeMode="contain" style={styles.menuLogo}/>
                    <Title style={styles.lblMenu}> ABC Company </Title>
                    <Text style={styles.txtCartTot}> Rs. 00 </Text>
                    <Image source={require('../assets/cart.png')} resizeMode="contain" style={styles.cartImg}/>
                </View>
                <View
                    style={styles.mainContent}>
                    <Image source={require('../assets/product.png')} resizeMode="contain" style={styles.mainImg}/>
                </View>

                <TouchableOpacity style={styles.menuContent}>
                    <Image source={require('../assets/air.png')} resizeMode="contain" style={styles.airImg}/>
                    <Text style={styles.txtMenu1}> Air Conditioners </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuContent2}
                                  onPress={() => {
                                      this.props.navigation.navigate('Beds');
                                  }}>
                    <Image source={require('../assets/beds.png')} resizeMode="contain" style={styles.bedsImg}/>
                    <Text style={styles.txtMenu2}> Beds </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuContent3}>
                    <Image source={require('../assets/bedroom.png')} resizeMode="contain" style={styles.airImg}/>
                    <Text style={styles.txtMenu3}> Bedroom Sets </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuContent4}>
                    <Image source={require('../assets/blenders.png')} resizeMode="contain" style={styles.airImg}/>
                    <Text style={styles.txtMenu4}> Blenders </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuContent5}>
                    <Image source={require('../assets/car.png')} resizeMode="contain" style={styles.carAudioImg}/>
                    <Text style={styles.txtMenu5}> Car Audio </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuContent6}>
                    <Image source={require('../assets/side.png')} resizeMode="contain" style={styles.airImg}/>
                    <Text style={styles.txtMenu6}> Coffee & Side Table </Text>
                </TouchableOpacity>

                <View style={styles.bottomSection}>

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
    menuBar: {
        width: 395,
        height: 80,
        backgroundColor: '#007ac7',
        elevation: 8,
        marginTop: 0,
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
    mainContent: {
        width: 350,
        height: 150,
        borderRadius: 10,
        marginTop: 18,
        backgroundColor: '#FFFFFF',
        elevation: 8,
    },
    mainImg: {
        width: 340,
        marginLeft: 5,
        marginTop: -375,
    },
    menuContent: {
        width: 100,
        height: 100,
        borderRadius: 15,
        elevation: 8,
        backgroundColor: 'rgb(255,255,255)',
        marginTop: 25,
        marginRight: 240,
    },
    menuContent2: {
        width: 100,
        height: 100,
        borderRadius: 15,
        elevation: 8,
        backgroundColor: 'rgb(255,255,255)',
        marginTop: -100,
    },
    menuContent3: {
        width: 100,
        height: 100,
        borderRadius: 15,
        elevation: 8,
        backgroundColor: 'rgb(255,255,255)',
        marginTop: -100,
        marginLeft: 240,
    },
    menuContent4: {
        width: 100,
        height: 100,
        borderRadius: 15,
        elevation: 8,
        backgroundColor: 'rgb(255,255,255)',
        marginTop: 25,
        marginLeft: -240,
    },
    menuContent5: {
        width: 100,
        height: 100,
        borderRadius: 15,
        elevation: 8,
        backgroundColor: 'rgb(255,255,255)',
        marginTop: -100,
        marginLeft: 0,
    },
    menuContent6: {
        width: 100,
        height: 100,
        borderRadius: 15,
        elevation: 8,
        backgroundColor: 'rgb(255,255,255)',
        marginTop: -100,
        marginLeft: 240,
    },

    airImg: {
        width: 60,
        display: 'flex',
        position: 'absolute',
        marginTop: -215,
        marginLeft: 20,
    },
    carAudioImg: {
        width: 60,
        display: 'flex',
        position: 'absolute',
        marginTop: -170,
        marginLeft: 20,
    },
    bedsImg: {
        width: 60,
        display: 'flex',
        position: 'absolute',
        marginTop: -75,
        marginLeft: 20,
    },
    txtMenu1: {
        color: '#000000',
        fontSize: 15,
        marginTop: 55,
        textAlign: 'center',
    },
    txtMenu2: {
        color: '#000000',
        fontSize: 15,
        marginTop: 65,
        textAlign: 'center',
    },
    txtMenu3: {
        color: '#000000',
        fontSize: 15,
        marginTop: 72,
        textAlign: 'center',
    },
    txtMenu4: {
        color: '#000000',
        fontSize: 15,
        marginTop: 72,
        textAlign: 'center',
    },
    txtMenu5: {
        color: '#000000',
        fontSize: 15,
        marginTop: 70,
        textAlign: 'center',
    },
    txtMenu6: {
        color: '#000000',
        fontSize: 15,
        marginTop: 60,
        textAlign: 'center',
    },
    bottomSection: {
        width: 350,
        height: 100,
        marginTop: 20,
        elevation: 8,
        borderRadius: 20,
        backgroundColor: '#ffffff',
    },
    footerContent: {
        width: 395,
        height: 70,
        backgroundColor: '#007ac7',
        marginTop: 31,
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
});
