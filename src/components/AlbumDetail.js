import React, { Component } from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import AlbumModal from './AlbumModal';

class AlbumDetail extends Component {
    state = {
        modalVisible: false,
        selectedAlbum: {}
    }

    setModalVisible() {
        this.setState(prevState => ({ modalVisible: !prevState.modalVisible }));
    }

    albumSelectedHandler = key => {
        this.setState(prevState => ({ modalVisible: !prevState.modalVisible, selectedAlbum: key }));
    }

    modalClosedHandler = () => {
        this.setState(prevState => ({ modalVisible: !prevState.modalVisible }));
    }

    render() {
        const { album: { title, artist, thumbnail_image, image, price } } = this.props;
        return (
            <Card>
                <AlbumModal
                    modalVisible={this.state.modalVisible}
                    cb={this}
                    onModalClosed={this.modalClosedHandler}
                />

                <CardSection>
                    <View style={styles.imageContainerStyle}>
                        <Image source={{ uri: thumbnail_image }} style={styles.thumbnailStyle} />
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.titleTextStyle}>Album: {title}</Text>
                        <Text>Artist: {artist}</Text>
                        <Text>Price: {price}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <View>
                        <Image source={{ uri: image }} style={styles.albumImage} />
                    </View>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.albumSelectedHandler({ title, artist, thumbnail_image, image, price })}>
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    titleTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumImage: {
        height: 300,
        width: 320,
        marginLeft: 10,
        marginRight: 10
    }
});

export default AlbumDetail;