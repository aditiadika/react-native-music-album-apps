import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

// in on button press -> 
// if user fail login firebase automaticaly make record for user, if succes navigate to music album

// in login prosses store data and hide spinner and error massage 
// email, password, spinner, and error 

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false }

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailed.bind(this));
            });
    }

    onLoginFailed() {
        this.setState({ error: 'Authenticated Failed!', loading: false });
    }

    onLoginSuccess() {
        const { navigate } = this.props.navigation;
        navigate('albums');
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeHolder="admin@example.com"
                        label="Email :"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                    
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password :"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        color: 'red',
        fontSize: 15,
        alignSelf: 'center'
    },
});

export default LoginForm;

// <Button onPress={() => this.props.navigation.navigate('albums')} children="LogIn" />
