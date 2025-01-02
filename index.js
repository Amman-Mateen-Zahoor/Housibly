/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CustomButton from './src/components/CustomButton';
import Login from './src/screens/Login';
import CustomTextInput from './src/components/CustomTextInput';
import TestScreen from './src/components/BannerPractice';
import VerificationScreen from './src/screens/VerificationScreen';
import Property from './src/components/Property';

AppRegistry.registerComponent(appName, () => App);
