import React, {Component, Fragment} from 'react';
import Map from "../../components/Map/Map";
import Camera from "../../components/Camera"
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
class Mapa extends Component {
    render() {
        return (
                <Map />
        );
    }

};

const StackNavigation = createSwitchNavigator({
    mapa: Mapa,
    camera: Camera,
});

export default createAppContainer(StackNavigation);


