import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Card, CardSection } from '../Auth/common';

class Logout extends Component {
  static navigationOptions = {
    drawerLabel: 'Logout',
    header: null
  }
  
  render() {
    return (
        <Card>
            <CardSection>
                <View style={styles.container}>
                    <Card title='John Doe' >
                        <View
                                style={{
                                backgroundColor: '#bcbec1',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 80,
                                height: 80,
                                borderRadius: 40,
                                alignSelf: 'center',
                                marginBottom: 20
                                }} >
                            <Text style={{ color: 'white', fontSize: 28 }}>JD</Text>
                        </View>
                    </Card>
                </View>
            </CardSection>
            <CardSection>
                <Button children='SIGN OUT' />
            </CardSection>
        </Card>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Logout;