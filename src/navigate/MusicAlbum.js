import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumList from '../components/AlbumList';
import Header from '../components/Header';

class MusicAlbum extends Component {
  static navigationOptions = {
    header: null
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Music Albums'} />
        <AlbumList />
      </View>
    );
  }
}

export default MusicAlbum;