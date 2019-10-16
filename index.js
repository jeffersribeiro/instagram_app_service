import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigator from './src/router/index'

AppRegistry.registerComponent(appName, () => AppNavigator);
