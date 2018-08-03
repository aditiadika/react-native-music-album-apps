import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { HeaderLogIn } from '../Auth/common';
import LoginForm from '../Auth/LoginForm';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }

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

