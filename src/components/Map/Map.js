import React, {Component} from 'react';
import {
    View,
    Alert, AsyncStorage, Text, KeyboardAvoidingView
} from 'react-native';
import Styles from './style';
import {Paragraph, Dialog, Portal, TextInput, RadioButton} from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Ux from "../../funcoes/UxProporcaoTela";
import Geolocation from '@react-native-community/geolocation';
import {Button} from "react-native-paper";
import api from "../../services/api";
// import Camera from "../Camera/index"

const ASPECT_RATIO = Ux.aspectRatio
const LATITUDE_DELTA = parseFloat(0.009)
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
        },
        visible: false,
        cad: null,
        errorMessage: '',
        obs: '',
        setores: {},
        checked: 'false',
        items: null,
        okcad: null
    }

    watchID: ? number = null

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
            error => Alert.alert('Error', 'Ligue O GPS, não foi possível obter localização - ' + JSON.stringify(error)),
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

        this.getSetores()
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
    }

    cadastrar = async () => {
        try {
            let idpessoa = JSON.parse(await AsyncStorage.getItem('@CodeApi:user'));
            const response = await api.post('/pedido', {
                id_pessoa: idpessoa.id_pessoa,
                id_setor: this.state.checked,
                latitude: this.state.markerPosition.latitude,
                longitude: this.state.markerPosition.longitude,
                obs: this.state.obs,
                tipo: 1,
            });
            this.setState({ okCad: 'Cadastrado Com Sucesso!'})
            Alert.alert('Cadastrado Com Sucesso!')
            this.props.navigation.navigate('app')
        } catch (err) {
            // Alert('Logado com sucesso!')
            this.setState({ errorMessage: 'Erro ao gravar dados!' })
        }
    };

    getSetores = async () => {
        try {
            const response = await api.get('/setores');

            this.setState({ setores: response.data})
        } catch (err) {
            // Alert('Logado com sucesso!')
            this.setState({ errorMessage: 'Sem Dados de Setores' })
        }
    };
    _showDialog = () => {
        this.setState({ visible: true })
        {this.state.setores && this.getSetores}
        this.state.items = this.state.setores.map(function (item) {
            return  ( <View key={item.id}>
                <Text>{item.nome}</Text>
                <RadioButton value={item.id} />
            </View>)
        })
    };

    _hideDialog = () => {
        this.setState({ visible: false })
        this.cadastrar()
    };

    render(){
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
                <View style={Styles.buttonContainer}>
                    <Button
                    color={"#7672d1"}
                    icon=""
                    mode="contained"
                    onPress={this._showDialog}
                    style={Styles.button}
                >
                    Cadastrar Ocorrência
                </Button>
                </View>

                <Portal>
                    <Dialog
                        visible={this.state.visible}
                        onDismiss={this._hideDialog}>
                        <Dialog.Title>Cadastrar Ocorrência</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>Informe alguma Observação</Paragraph>
                            <TextInput
                                label='Observação'
                                keyboardType={"email-address"}
                                returnKeyType={"next"}
                                mode={'outlined'}
                                value={this.state.obs}
                                onChangeText={obs => this.setState({ obs })}
                                autoCapitalize={"none"}
                                autoCorrect={false}
                            />
                            <RadioButton.Group
                                onValueChange={checked => this.setState({ checked })}
                                value={this.state.checked}
                            >
                                {this.state.items}
                            </RadioButton.Group>
                            <Button onPress={() => this.props.navigation.navigate('camera')}>Tirar uma foto</Button>

                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={this._hideDialog}>Cadastrar</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                
                {!!this.state.okcad && Alert.alert(this.state.okcad)}
                {!!this.state.errorMessage && Alert.alert(this.state.errorMessage)}
                {!!this.state.errorMessage && this.setState({errorMessage: false})}
            </View>
        );
    }


};




