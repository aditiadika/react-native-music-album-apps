import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from '../components/Header' 

class HistoryTransaction extends Component {
    static navigationOptions = {
        header: null
    }
    
    render() {
        return (
            <View>
                <Header headerText={'History Transaction'} />
                <Text> History Transaction</Text>
            </View>
        );
    }
}

export default HistoryTransaction;