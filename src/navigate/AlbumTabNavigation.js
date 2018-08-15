import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import MusicAlbum from './MusicAlbum';
import HistoryTransaction from './HistoryTransaction';

const AlbumTabNavigation = TabNavigator({
    MusicAlbum: { screen: MusicAlbum, header: null },
    HistoryTransaction: { screen: HistoryTransaction, header: null }
}, {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
        return (
            <Footer>
                <FooterTab>
                    <Button 
                    vertical
                    active={props.navigationState.index === 0}
                    onPress={() => props.navigation.navigate('MusicAlbum')}
                    >
                        <Icon name='home' />
                        <Text style={{ color: 'white' }}>Home</Text>
                    </Button>

                    <Button 
                    vertical
                    active={props.navigationState.index === 1}
                    onPress={() => props.navigation.navigate('HistoryTransaction')}
                    >
                        <Icon name='card' />
                        <Text style={{ color: 'white' }}>History Transaction</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
});

export default AlbumTabNavigation;