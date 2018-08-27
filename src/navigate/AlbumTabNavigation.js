import React from 'react';
import { Text } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
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
                        <Text style={{ color: 'white' }}>Transaction</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
});

const DrawerWithLogoutButton = (props) => (
    props.navigation.navigate('login')
);

const TransactionButton = (props) => (
    props.navigation.navigate('HistoryTransaction')
);

const Drawer = DrawerNavigator({
    Home: {
      screen: AlbumTabNavigation,
    },
    Transaction: {
        screen: TransactionButton
    },
    Logout: {
        screen: DrawerWithLogoutButton
    },

});

export default Drawer;