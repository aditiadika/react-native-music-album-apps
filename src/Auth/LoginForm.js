import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { text: '' }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                </CardSection>

                <CardSection />

                <CardSection>
                    <Button onPress={() => this.props.navigation.navigate('albums')} children="LogIn" />
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;