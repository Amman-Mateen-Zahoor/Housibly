/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CustomButton from './src/components/CustomButton';
import Login from './src/screens/Login';

AppRegistry.registerComponent(appName, () => Login);
