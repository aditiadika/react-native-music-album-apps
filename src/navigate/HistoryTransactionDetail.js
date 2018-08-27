import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';

class HistoryTransactionDetail extends Component {
   render() {
    const { title, artist, thumbnail_image, price, status } = this.props.album;
       return (
        <Card>
            <CardSection>
                <View style={styles.imageContainerStyle}>
                    <Image source={{ uri: thumbnail_image }} style={styles.thumbnailStyle} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.titleTextStyle}>Album: {title}</Text>
                    <Text>Artist: {artist}</Text>
                    <Text>Price: {price}</Text>
                    <Text style={styles.color}>Status: {status}</Text>
                </View>
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
    },
    status: {
        color: 'blue'
    }
});

export default HistoryTransactionDetail;