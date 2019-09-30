import React, {Fragment} from 'react';
import Navigator from "./components/Navigator/Navigator";
import Login from "./pages/Login/index";

import Reactotron, { overlay } from 'reactotron-react-native'

console.tron = Reactotron
 .configure()
 .useReactNative()
 .use(overlay())
 .connect()

const App = () => {
    return (
        <Login/>
    );
};
export default App;