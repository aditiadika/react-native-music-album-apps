import React from 'react';
import { View } from 'react-native';
import AlbumList from '../components/AlbumList';
import Header from '../components/Header';

const MusicAlbum = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Music Albums'} />
      <AlbumList />
    </View>
);

export default MusicAlbum;