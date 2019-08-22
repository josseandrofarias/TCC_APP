import React, {Component, Fragment} from 'react';

import {View, SafeAreaView, Image, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar} from "react-native";

import { Button, TextInput} from 'react-native-paper';

import Styles from'./style'

export default class Login extends Component {
    state = {
        login: '',
        senha: ''
    };

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
                                source={require('../../imagens/logo.png')}
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

                        <TouchableOpacity style={Styles.buttonEsqueciContainer}>
                            <Text style={Styles.buttonText}>
                                Esqueci minha senha
                            </Text>
                        </TouchableOpacity>

                        <View style={Styles.buttonContainer}>
                            <Button
                                color={"#694fad"}
                                icon=""
                                mode="contained"
                                onPress={() => console.log('Pressed')}
                                style={Styles.button}
                            >
                                Entrar
                            </Button>
                            <Button
                                color={"#7672d1"}
                                icon=""
                                mode="contained"
                                onPress={() => console.log('Pressed')}
                                style={Styles.button}
                            >
                                Criar uma Conta
                            </Button>
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </View>
        );
    }
}
