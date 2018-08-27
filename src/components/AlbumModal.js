import React, { Component } from 'react';
import { Modal, Text, Image, View, StyleSheet, Alert } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import PaymentMidtrans from 'react-native-midtrans';
import CardSection from './CardSection';
import Card from './Card';
import Button from './Button';
import Header from './Header';
import axios from 'axios';
import qs from 'querystring';

class AlbumModal extends Component {

    // checkOutHandler() {
    //     const optionConect = {
    //         clientKey: 'SB-Mid-client-MG6GpVypt8HaxKDD',
    //         urlMerchant: 'http://10.0.3.2/'
    //     };

    //     // const transRequest = {
    //     //     transactionId: '001',
    //     //     totalAmount: 6000
    //     // };
    //     const transRequest = {
    //         transactionId: '001',
    //         totalAmount: 6000
    //     };

    //     // const itemDetails = [
    //     //     { id: '001', price: 1000, qty: 4, name: 'cimory' },
    //     //     { id: '002', price: 2000, qty: 2, name: 'cofimix' }
    //     // ];
    //     const itemDetails = [
    //         {
    //             id: 'A01',
    //             price: 280000,
    //             qty: 1,
    //             name: 'Mie Ayam Komplit'
    //         }
    //     ];

    //     const creditCardOptions = {
    //         saveCard: false,
    //         saveToken: false,
    //         paymentMode: 'Normal',
    //         secure: false
    //     };

    //     // const userDetail = {
    //     //     fullName: 'Ahmad', 
    //     //     email: 'ah@mad.com', 
    //     //     phoneNumber: '0850000000', 
    //     //     userId: 'U01', 
    //     //     address: 'kudus', 
    //     //     city: 'kudus', 
    //     //     country: 'IDN', 
    //     //     zipCode: '59382'
    //     // };
    //     const customer_details = {
    //         fullName: 'Ahmad',
    //         email: 'tester@example.com', 
    //         first_name: 'Budi', 
    //         last_name: 'Khannedy', 
    //         phoneNumber: '628112341234',
    //         userId: 'U01',
    //         address: 'kudus',
    //         city: 'kudus',
    //         country: 'IDN',
    //         zipCode: '59382'
    //     };

    //     const optionColorTheme = {
    //         primary: '#c51f1f',
    //         primaryDark: '#1a4794',
    //         secondary: '#1fce38'
    //     };

    //     const optionFont = {
    //         defaultText: 'open_sans_regular.ttf', 
    //         semiBoldText: 'open_sans_semibold.ttf',
    //         boldText: 'open_sans_bold.ttf'
    //     };

    //     const callback = res => { console.log('landing here', res); };

    //     const tes = {
    //         optionConect,
    //         transRequest,
    //         itemDetails,
    //         creditCardOptions,
    //         customer_details,
    //         optionColorTheme,
    //         optionFont,
    //     };

    //     console.log('check here', tes);

    //     PaymentMidtrans.checkOut(
    //         optionConect,
    //         transRequest,
    //         itemDetails,
    //         creditCardOptions,
    //         customer_details,
    //         optionColorTheme,
    //         optionFont,
    //         callback(res)
    //     );
    // }

    resetScreen = () => {
        const { cb: _this } = this.props;
        const reset = StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: 'AlbumTabNavigations' })]
        });
        // console.log("HEREE = ", _this.props.navigation);
        _this.props.navigation.dispatch(reset);
    }

    checkOutHandler = () => {
        const { cb: _this } = this.props;
        const { selectedAlbum } = _this.state;

        const query = 'http://192.168.0.8:8000/api/album/store';

        const payload = {
            title: selectedAlbum.title,
            artist: selectedAlbum.artist,
            thumbnail_image: selectedAlbum.thumbnail_image,
            price: selectedAlbum.price
        };

        axios.post(query, qs.stringify(payload), {
            Headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((response) => {
                console.log(response);
                Alert.alert(
                    'Confirm Your Album Purchase',
                    'Do you want to buy this album?',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'Ok', onPress: () => this.resetScreen() },
                    ],
                    { cancelable: false }
                );
            })
            .catch(error => {
                console.log('HERE = ', error);
            });
    }

    render() {
        const { cb: _this } = this.props;
        const { selectedAlbum } = _this.state;
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.modalVisible}
                onRequestClose={() => { console.log('test'); }}
            >
                <Card>
                    <Header headerText={'Checkout Page'} />

                    <CardSection>
                        <View style={styles.imageContainerStyle}>
                            <Image
                                source={{ uri: selectedAlbum.thumbnail_image }}
                                style={styles.thumbnailStyle}
                            />
                        </View>
                        <View style={styles.headerContentStyle}>
                            <Text style={styles.titleTextStyle}>Album: {selectedAlbum.title}</Text>
                            <Text>Artist: {selectedAlbum.artist}</Text>
                            <Text>Price: {selectedAlbum.price}</Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <View>
                            <Image
                                source={{ uri: selectedAlbum.image }}
                                style={styles.albumImage}
                            />
                        </View>
                    </CardSection>

                    <CardSection>
                        <Button onPress={() => this.checkOutHandler()}>Checkout</Button>
                        <Button onPress={this.props.onModalClosed}>Cancel</Button>
                    </CardSection>
                </Card>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    titleTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumImage: {
        height: 300,
        width: 320,
        marginLeft: 10,
        marginRight: 10
    }
});

export default AlbumModal;
