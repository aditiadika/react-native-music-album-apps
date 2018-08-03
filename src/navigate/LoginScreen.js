import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { HeaderLogIn } from '../Auth/common';
import LoginForm from '../Auth/LoginForm';

// in authStateChanged user value is true, is not user value is "undefined"

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = { loggedIn: false }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBp47moMbBGiUNkAlkbE9T3UseDYxAi8qg',
      authDomain: 'auth-bf648.firebaseapp.com',
      databaseURL: 'https://auth-bf648.firebaseio.com',
      projectId: 'auth-bf648',
      storageBucket: 'auth-bf648.appspot.com',
      messagingSenderId: '965015435284'
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  
  render() {
    return (
      <View>
        <HeaderLogIn headerText={'Authentication'} />
        <LoginForm navigation={this.props.navigation} />
      </View>
    );
  }
}

export default LoginScreen;

