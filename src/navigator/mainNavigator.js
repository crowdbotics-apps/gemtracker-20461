import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard25104332Navigator from '../features/Dashboard25104332/navigator';
import BlankScreen93104331Navigator from '../features/BlankScreen93104331/navigator';
import BlankScreen92104330Navigator from '../features/BlankScreen92104330/navigator';
import BlankScreen91104329Navigator from '../features/BlankScreen91104329/navigator';
import BlankScreen90104328Navigator from '../features/BlankScreen90104328/navigator';
import ArticleList104311Navigator from '../features/ArticleList104311/navigator';
import ArticleList104310Navigator from '../features/ArticleList104310/navigator';
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
Dashboard25104332: { screen: Dashboard25104332Navigator },
BlankScreen93104331: { screen: BlankScreen93104331Navigator },
BlankScreen92104330: { screen: BlankScreen92104330Navigator },
BlankScreen91104329: { screen: BlankScreen91104329Navigator },
BlankScreen90104328: { screen: BlankScreen90104328Navigator },
ArticleList104311: { screen: ArticleList104311Navigator },
ArticleList104310: { screen: ArticleList104310Navigator },
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
