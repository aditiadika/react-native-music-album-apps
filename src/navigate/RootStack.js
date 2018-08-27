import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
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

export default RootStack;
