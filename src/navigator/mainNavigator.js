import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps209751Navigator from '../features/Maps209751/navigator';
import Additem209750Navigator from '../features/Additem209750/navigator';
import Maps209746Navigator from '../features/Maps209746/navigator';
import UserProfile209742Navigator from '../features/UserProfile209742/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps209751: { screen: Maps209751Navigator },
Additem209750: { screen: Additem209750Navigator },
Maps209746: { screen: Maps209746Navigator },
UserProfile209742: { screen: UserProfile209742Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
