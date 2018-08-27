import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] }

    componentWillMount() {
        axios.get('http://192.168.0.8:8000/api/album')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        const { navigation } = this.props;
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} navigation={navigation} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;