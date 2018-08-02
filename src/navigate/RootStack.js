import { createStackNavigator } from 'react-navigation';
import MusicAlbum from './MusicAlbum';
import LoginScreen from './LoginScreen';

const RootStack = createStackNavigator(
    {
        login: LoginScreen,
        albums: MusicAlbum,
    },
    {
        initialRouteName: 'login',
    }
);

export default RootStack;
