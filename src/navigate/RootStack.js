import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import MusicAlbum from './MusicAlbum';
import LoginScreen from './LoginScreen';
import Logout from './Logout';

const RootStack = createStackNavigator(
    {
        login: { screen: LoginScreen, header: null },
        albums: MusicAlbum,
    },
    {
        initialRouteName: 'login',
    }
);

// const RootStack = createDrawerNavigator({
//     Home: MusicAlbum,
//     LogOut: Logout
// });

export default RootStack;
