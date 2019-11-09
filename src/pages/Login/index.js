import React, {Component, Fragment} from 'react';

import {View, SafeAreaView, Image, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar, AsyncStorage, Alert} from "react-native";

import { Button, TextInput} from 'react-native-paper';

import Styles from'./style'
import Cadastro from "../Cadastro";
import App from '../../App'
import Navigator from "../../components/Navigator/Navigator";

import api from "../../services/api";

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

class Login extends Component {
    state = {
        login: 'farias.josseandro@gmail.com',
        senha: '258chinelo',
        cad: false,
        errorMessage: '',
        nomeUser: null,
        loggedInUser: null
    };

    login = async () => {
        console.log('teste')
        try {
            const response = await api.post('/login', {
                email: 'farias.josseandro@gmail.com',
                senha: '258chinelo',
            });

            const {id, nome, email, sobrenome, cpf, data_nascimento, token } = response.data;
            let id_pessoa = id
            await AsyncStorage.multiSet([
                ['@CodeApi:token', token],
                ['@CodeApi:user', JSON.stringify({id_pessoa, nome, sobrenome, email, cpf, data_nascimento})],
            ]);

            this.setState({ loggedInUser: {email, nome} })
            this.setState({ nomeUser: nome})
            // this.props.navigation.navigate('app')
            // Alert.alert('Logado com sucesso!')
            this.props.navigation.navigate('app')
        } catch (err) {
            // Alert('Logado com sucesso!')
            this.setState({ errorMessage: 'Usuário ou senha inválidos' })
        }
    };

    async componentDidMount() {
        await AsyncStorage.clear();

        const token = await AsyncStorage.getItem('@CodeApi:token');
        const user = JSON.parse(await AsyncStorage.getItem('@CodeApi:user')) || null;

        if (token && user){
            this.setState({ loggedInUser: user });
            this.props.navigation.navigate('app')
        }
    }

    render() {
        return (
            <View style={Styles.container}>

                <StatusBar
                    barStyle={"light-content"}
                />

                <SafeAreaView>
                    <KeyboardAvoidingView behavior='padding'>

                        <View style={Styles.logoContainer}>
                            <Image
                                style={Styles.logo}
                                source={require('../../imagens/logo2.png')}
                            />
                        </View>

                        <View style={Styles.inputContainer}>
                            <TextInput
                                label='Email'
                                keyboardType={"email-address"}
                                returnKeyType={"next"}
                                mode={'outlined'}
                                value={this.state.login}
                                onChangeText={login => this.setState({ login })}
                                onSubmitEditing={() => this.passwordInput.focus()}
                                autoCapitalize={"none"}
                                autoCorrect={false}
                                style={Styles.input}
                            />
                            <TextInput
                                label='Senha'
                                returnKeyType={"go"}
                                mode={'outlined'}
                                value={this.state.senha}
                                secureTextEntry={true}
                                onChangeText={senha => this.setState({ senha })}
                                style={Styles.input}
                                ref={(input) => this.passwordInput = input}
                            />
                        </View>

                        {!!this.state.errorMessage && <Text style={Styles.dadosInvalidos}>{this.state.errorMessage}</Text>}

                        <TouchableOpacity style={Styles.buttonEsqueciContainer}>
                            <Text style={Styles.buttonText}>
                                Esqueci minha senha
                            </Text>
                        </TouchableOpacity>

                        <View style={Styles.buttonContainer}>
                            <Button
                                color={"#7616d7"}
                                icon=""
                                mode="contained"
                                onPress={() => this.login()}
                                style={Styles.button}
                            >
                                Entrar
                            </Button>
                            <Button
                                color={"#a964ef"}
                                icon=""
                                mode="contained"
                                onPress={() => this.props.navigation.navigate('cadastro')}
                                style={Styles.button}
                            >
                                Criar uma Conta
                            </Button>

                            { this.state.cad && <Cadastro /> }
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </View>
        );
    }
}

const StackNavigation = createSwitchNavigator({
    login: Login,
    cadastro: Cadastro,
    app: Navigator,
});

export default createAppContainer(StackNavigation);