import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' }

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

                <CardSection>
                    <Button onPress={() => this.props.navigation.navigate('albums')} children="LogIn" />
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;