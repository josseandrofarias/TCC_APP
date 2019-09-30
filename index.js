/**
 * @format
 */
import * as React from 'react'
import { Provider } from 'react-redux'
import {AppRegistry} from 'react-native'
import Login from "./src/pages/Login/index"
import { Provider as PaperProvider } from 'react-native-paper'
import {name as appName} from './app.json'
import { YellowBox } from 'react-native'
import Ajustes from './src/pages/Ajustes'
import App from './src/App'

import storeConfig from "./src/store/storeConfig"

const store = storeConfig()


YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Module RCTImageLoader requires',
]);

const Main = () => {
    return (
        <PaperProvider>
            <App />
        </PaperProvider>
    );
}

const Redux = () => (
    <Provider store={store}>
        <Main/>
    </Provider>
)
AppRegistry.registerComponent(appName, () => Redux);