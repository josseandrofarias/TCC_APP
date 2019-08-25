/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import { Provider as PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';
import { YellowBox } from 'react-native';

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
