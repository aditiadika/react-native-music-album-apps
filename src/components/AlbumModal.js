import React from 'react';
import { Modal, Text, Image, View, StyleSheet } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';
import Button from './Button';
import Header from './Header';

const AlbumModal = props => {
    const { cb: _this } = props;
    const { selectedAlbum } = _this.state;
    
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.modalVisible}
            onRequestClose={() => { console.log('test'); }}
        >
            <Card>
                <Header headerText={'Checkout Page'} />

                <CardSection>
                    <View style={styles.imageContainerStyle}>
                        <Image source={{ uri: selectedAlbum.thumbnail_image }} style={styles.thumbnailStyle} />
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.titleTextStyle}>{selectedAlbum.title}</Text>
                        <Text>{selectedAlbum.artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <View>
                        <Image source={{ uri: selectedAlbum.image }} style={styles.albumImage} />
                    </View>
                </CardSection>

                <CardSection>
                    <Button>Checkout</Button>
                    <Button onPress={props.onModalClosed}>Cancel</Button>
                </CardSection>
            </Card>
        </Modal>
    );
};

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

export default AlbumModal;