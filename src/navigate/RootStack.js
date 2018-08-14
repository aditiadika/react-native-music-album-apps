import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import MusicAlbum from './MusicAlbum';
import LoginScreen from './LoginScreen';
import Logout from './Logout';
import AlbumTabNavigation from './AlbumTabNavigation';

const RootStack = createStackNavigator(
    {
        login: { screen: LoginScreen, header: null },
        AlbumTabNavigations: AlbumTabNavigation,
    },
    {
        initialRouteName: 'login',
        navigationOptions: {
            header: null
        }
    }
);

// const RootStack = createDrawerNavigator({
//     Home: MusicAlbum,
//     LogOut: Logout
// });

export default RootStack;
