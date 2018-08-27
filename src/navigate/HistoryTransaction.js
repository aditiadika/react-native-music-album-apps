import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import HistoryTransactionDetail from './HistoryTransactionDetail';
import { View } from 'native-base';

class HistoryTransaction extends Component {
    static navigationOptions = {
        header: null
    }

    state = { albums: [] }

    componentWillMount() {
        axios.get('http://192.168.0.8:8000/api/album/detail')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <HistoryTransactionDetail key={album.id} album={album} />
        );
    }

    render() {
        console.log("STATE = ", this.state.albums);
        return (
            <View>
                <Header headerText="History Transaction" />
                <ScrollView>
                    {this.renderAlbums()}
                </ScrollView>
            </View>
        );
    }
}

export default HistoryTransaction;