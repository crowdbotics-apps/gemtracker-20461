import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList104310Navigator from '../features/ArticleList104310/navigator';
import ArticleList104309Navigator from '../features/ArticleList104309/navigator';
import UserProfile104299Navigator from '../features/UserProfile104299/navigator';
import Tutorial104298Navigator from '../features/Tutorial104298/navigator';
import NotificationList104270Navigator from '../features/NotificationList104270/navigator';
import Settings104269Navigator from '../features/Settings104269/navigator';
import Settings104261Navigator from '../features/Settings104261/navigator';
import UserProfile104259Navigator from '../features/UserProfile104259/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList104310: { screen: ArticleList104310Navigator },
ArticleList104309: { screen: ArticleList104309Navigator },
UserProfile104299: { screen: UserProfile104299Navigator },
Tutorial104298: { screen: Tutorial104298Navigator },
NotificationList104270: { screen: NotificationList104270Navigator },
Settings104269: { screen: Settings104269Navigator },
Settings104261: { screen: Settings104261Navigator },
UserProfile104259: { screen: UserProfile104259Navigator },

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
