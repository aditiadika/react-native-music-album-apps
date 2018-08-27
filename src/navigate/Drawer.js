import { DrawerNavigator } from 'react-navigation';
import MusicAlbum from './MusicAlbum';

const Drawer = DrawerNavigator({
    Home: {
      screen: MusicAlbum,
    },
});

export default Drawer;
