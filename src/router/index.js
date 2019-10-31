import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';

import LoginScreen from '../screens/login';
import Home from '../screens/home';
import MyApp from '../screens/profile';
import Find from '../screens/find';
import Camera from '../screens/camera';

const TabNavigator = createBottomTabNavigator(
  {
    Home,
    Find,
    Camera,
    MyApp,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `${focused ? 'md-home' : 'md-home'}`;
        } else if (routeName === 'MyApp') {
          iconName = `${focused ? 'md-contact' : 'md-contact'}`;
        } else if (routeName === 'Find') {
          iconName = `${focused ? 'md-add-circle-outline' : 'md-add-circle'}`;
        } else if (routeName === 'Camera') {
          iconName = `${focused ? 'md-camera' : 'md-camera'}`;
        }
        return <IconComponent name={iconName} size={30} color={'black'} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: TabNavigator,
    },
  }
);

export default createAppContainer(AppNavigator);
