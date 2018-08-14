import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import RNAccountKit from 'react-native-facebook-account-kit';
import image from '../../asset/add.png';

class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    login() {
        // RNAccountKit.loginWithPhone()
        //     .then((token) => {
        //         if (!token) {
        //             console.log('Login cancelled');
        //         } else {
                    const { navigate } = this.props.navigation;
                    navigate('AlbumTabNavigations');
            //     }
            // })
            // .catch(() => console.log('erorr here'));
    }

    render() {
        return (
            <View style={styles.mainContainerView}>
                <View style={styles.titleView}>
                    <Text style={styles.textView}> Album Music Apps </Text>
                </View>

                <View style={styles.subTitleView}>
                    <Text style={styles.textSubtitle}> The Music Market Place </Text>
                </View>

                <View style={styles.imageView}>
                    <Image style={styles.image} source={image} />
                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.signInButton} onPress={() => this.login()}>
                        <Text style={styles.textLogin}> Login </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    mainContainerView: {
        width,
        height,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 80
    },

    titleView: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },

    textView: {
        color: 'white',
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold'
    },

    subTitleView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textSubtitle: {
        color: 'white',
        fontSize: 15,
    },

    imageView: {
        backgroundColor: 'white',
        width,
        height: width * (9 / 12),
    },

    image: {
        width: '100%',
        height: '100%'
    },

    buttonView: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    signInButton: {
        backgroundColor: 'white',
        marginRight: 8,
        borderRadius: 2,
        width: '40%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textLogin: {
        color: 'black',
    },

    registerButton: {
        backgroundColor: 'white',
        justifyContent: 'center',
        marginLeft: 8,
        borderRadius: 2,
        alignItems: 'center',
        width: '40%',
        height: '20%',
    }
});

export default LoginScreen;