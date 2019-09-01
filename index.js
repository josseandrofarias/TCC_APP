/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import Login from "./src/pages/Login/index"
import { Provider as PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';
import { YellowBox } from 'react-native';
import Ajustes from './src/pages/Ajustes';
import App from './src/App';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Module RCTImageLoader requires',
]);

export default function Main() {
    return (
        <PaperProvider>
            <App />
        </PaperProvider>
    );
}
AppRegistry.registerComponent(appName, () => Main);