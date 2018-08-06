import { createDrawerNavigator } from 'react-navigation';
import MusicAlbum from './MusicAlbum';
import Logout from './Logout';

const Drawer = createDrawerNavigator({
    home: Logout
});

export default Drawer;
