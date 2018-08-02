import React, { Component } from 'react';
import { View } from 'react-native';
import { HeaderLogIn } from '../Auth/common';
import LoginForm from '../Auth/LoginForm';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
  console.log(this.props);
    return (
      <View>
        <HeaderLogIn headerText={'Authentication'} />
        <LoginForm navigation={this.props.navigation} />
      </View>
    );
  }
}

export default LoginScreen;

