// import React from 'react';
// import { Modal, Text, Image, View, StyleSheet } from 'react-native';
// import CardSection from './CardSection';
// import Card from './Card';
// import Button from './Button';
// import Header from './Header';

// const AlbumModal = props => {
//     const { cb: _this } = props;
//     const { selectedAlbum } = _this.state;

//     checkOutHandler() {
        
//         var optionConect = {
//             clientKey: "VT-CLIENT-AAAAAAAAAAAAA",
//             urlMerchant : "http://example.com/payment"
//         }

//         var transRequest = {
//             transactionId : "001",
//             totalAmount : 6000
//         }

//         var itemDetails = [
//             {id:"001", price:1000, qty:4, name:"cimory"},
//             {id:"002", price:2000, qty:2, name:"cofimix"}
//         ];

//         var creditCardOptions = {
//             saveCard:false,
//             saveToken:false,
//             paymentMode:"Normal",
//             secure:false
//         };

//         var userDetail = {
//             fullName:"Ahmad", email:"ah@mad.com", 
//             phoneNumber:"0850000000", 
//             userId:"U01", 
//             address:"kudus", 
//             city:"kudus", 
//             country:"IDN", 
//             zipCode:"59382"
//         };

//         var optionColorTheme = {
//             primary:'#c51f1f',
//             primaryDark:'#1a4794',
//             secondary:'#1fce38'
//         }

//         var optionFont = {
//             defaultText:"open_sans_regular.ttf", semiBoldText:"open_sans_semibold.ttf",
//             boldText:"open_sans_bold.ttf"
//         }

//         var callback = (res)=>{console.log(res)};

//         PaymentMidtrans.checkOut(
//             optionConect,
//             transRequest,
//             itemDetails,
//             creditCardOptions,
//             userDetail,
//             optionColorTheme,
//             optionFont,
//             callback(res)
//         );
//     };

//     return (
//         <Modal
//             animationType="slide"
//             transparent={false}
//             visible={props.modalVisible}
//             onRequestClose={() => { console.log('test'); }}
//         >
//             <Card>
//                 <Header headerText={'Checkout Page'} />

//                 <CardSection>
//                     <View style={styles.imageContainerStyle}>
//                         <Image source={{ uri: selectedAlbum.thumbnail_image }} style={styles.thumbnailStyle} />
//                     </View>
//                     <View style={styles.headerContentStyle}>
//                         <Text style={styles.titleTextStyle}>{selectedAlbum.title}</Text>
//                         <Text>{selectedAlbum.artist}</Text>
//                     </View>
//                 </CardSection>

//                 <CardSection>
//                     <View>
//                         <Image source={{ uri: selectedAlbum.image }} style={styles.albumImage} />
//                     </View>
//                 </CardSection>

//                 <CardSection>
//                     <Button onPress={() => this.checkOutHandler()}>Checkout</Button>
//                     <Button onPress={props.onModalClosed}>Cancel</Button>
//                 </CardSection>
//             </Card>
//         </Modal>
//     );
// };

// const styles = StyleSheet.create({
//     headerContentStyle: {
//         flexDirection: 'column',
//         justifyContent: 'space-around'
//     },
//     titleTextStyle: {
//         fontSize: 18
//     },
//     thumbnailStyle: {
//         height: 50,
//         width: 50
//     },
//     imageContainerStyle: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginLeft: 10,
//         marginRight: 10
//     },
//     albumImage: {
//         height: 300,
//         width: 320,
//         marginLeft: 10,
//         marginRight: 10
//     }
// });

// export default AlbumModal;

import React, { Component } from 'react';
import { Modal, Text, Image, View, StyleSheet } from 'react-native';
import PaymentMidtrans from 'react-native-midtrans';
import CardSection from './CardSection';
import Card from './Card';
import Button from './Button';
import Header from './Header';

class AlbumModal extends Component {

    checkOutHandler() {
        const optionConect = {
            clientKey: 'SB-Mid-client-MG6GpVypt8HaxKDD',
            urlMerchant: 'http://www.musikalbum.com:3000/charge/'
        };

        const transRequest = {
            transactionId: '001',
            totalAmount: 6000
        };

        const itemDetails = [
            { id: '001', price: 1000, qty: 4, name: 'cimory' },
            { id: '002', price: 2000, qty: 2, name: 'cofimix' }
        ];

        const creditCardOptions = {
            saveCard: false,
            saveToken: false,
            paymentMode: 'Normal',
            secure: false
        };

        const userDetail = {
            fullName: 'Ahmad', 
            email: 'ah@mad.com', 
            phoneNumber: '0850000000', 
            userId: 'U01', 
            address: 'kudus', 
            city: 'kudus', 
            country: 'IDN', 
            zipCode: '59382'
        };

        const optionColorTheme = {
            primary: '#c51f1f',
            primaryDark: '#1a4794',
            secondary: '#1fce38'
        };

        const optionFont = {
            defaultText: 'open_sans_regular.ttf', 
            semiBoldText: 'open_sans_semibold.ttf',
            boldText: 'open_sans_bold.ttf'
        };

        const callback = res => { console.log('landing here', res); };

        PaymentMidtrans.checkOut(
            optionConect,
            transRequest,
            itemDetails,
            creditCardOptions,
            userDetail,
            optionColorTheme,
            optionFont,
            callback()
        );
    }

    render() {
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
                                source={{ uri: this.thumbnail_image }} 
                                style={styles.thumbnailStyle} 
                            />
                        </View>
                        <View style={styles.headerContentStyle}>
                            <Text style={styles.titleTextStyle}>{this.title}</Text>
                            <Text>{this.artist}</Text>
                        </View>
                    </CardSection>
    
                    <CardSection>
                        <View>
                            <Image source={{ uri: this.image }} style={styles.albumImage} />
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
