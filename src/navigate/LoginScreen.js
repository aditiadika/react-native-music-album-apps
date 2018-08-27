import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import RNAccountKit from 'react-native-facebook-account-kit';
// import image from '../../asset/add.png';
import image from '../../asset/wallpaper.png';
import logoImg from '../../asset/logo.png';

class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    login() {
        RNAccountKit.loginWithPhone()
            .then((token) => {
                if (!token) {
                    console.log('Login cancelled');
                } else {
                    const { navigate } = this.props.navigation;
                    navigate('AlbumTabNavigations');
            }
        })
        .catch(() => console.log('erorr here'));
    }

    render() {
        return (
            <ImageBackground style={styles.picture} source={image}>
                <View style={styles.container}>
                    <Image source={logoImg} style={styles.image} />
                    <Text style={styles.text}>React Native Music Album Apps</Text>
                </View>
                <View style={styles.containerLogin}>
                    <TouchableOpacity style={styles.button} onPress={() => this.login()}>
                        <Text style={styles.textLogin}>LogIn</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const MARGIN = 40;
const styles = StyleSheet.create({
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },

    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
        text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    },

    containerLogin: {
        flex: 1,
        top: -95,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
    backgroundColor: '#F035E0',
        marginRight: 8,
        borderRadius: 20,
        width: '50%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        height: MARGIN,
        width: MARGIN,
        marginTop: -MARGIN,
        borderWidth: 1,
        borderColor: '#F035E0',
        borderRadius: 100,
        alignSelf: 'center',
        zIndex: 99,
        backgroundColor: '#F035E0',
    },
    textLogin: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: '600',
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default LoginScreen;