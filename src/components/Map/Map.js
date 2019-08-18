import React, {Component} from 'react';
import {
    View,
    Alert
} from 'react-native';
import Styles from './style';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Ux from "../../funcoes/UxProporcaoTela";
import Geolocation from '@react-native-community/geolocation';

const ASPECT_RATIO = Ux.aspectRatio
const LATITUDE_DELTA = parseFloat(0.0952)
const LONGITUTE_DELTA = parseFloat(LATITUDE_DELTA + ASPECT_RATIO)

export default class Map extends Component {

    state = {
        initialPosition: {
            latitude: 0,
            longitude: 0,
            latidudeDekta: 0,
            longitudeDelta: 0
        },
        markerPosition: {
            latitude: 0,
            longitude: 0
        }
    }

    watchID: ?number = null

    async componentDidMount() {
        Geolocation.getCurrentPosition(
            async({coords: {latitude, longitude}}) => {
                var initialRegion = {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUTE_DELTA
                }

                this.setState({initialPosition: initialRegion})
                this.setState({markerPosition: initialRegion})

            },
            error => Alert.alert('Error', JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
        this.watchID = Geolocation.watchPosition((position) => {
            // const lastPosition = JSON.stringify(position);
            // this.setState({lastPosition});
            let lat = parseFloat(position.coords.latitude)
            let long = parseFloat(position.coords.longitude)

            let lastRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUTE_DELTA
            }

            this.setState({initialPosition: lastRegion})
            this.setState({markerPosition: lastRegion})
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style={Styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={Styles.mapView}
                    region={this.state.initialPosition}
                    showsUserLocation
                    loadingEnabled
                    // showsUserLocation = {false}
                    // followUserLocation = {false}
                    // zoomEnabled = {true}
                >
                </MapView>
            </View>
        );
    }

};




