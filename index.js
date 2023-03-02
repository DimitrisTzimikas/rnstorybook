/**
 * @format
 */

import {AppRegistry} from 'react-native';
import config from 'react-native-ultimate-config';

import {name as appName} from './app.json';

if (config.STORYBOOK === 'true') {
  const StorybookUIRoot = require('./storybook/Storybook').default;
  AppRegistry.registerComponent(appName, () => StorybookUIRoot);
} else {
  const App = require('./App').default;
  AppRegistry.registerComponent(appName, () => App);
}
