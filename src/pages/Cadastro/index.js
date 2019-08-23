import React, {Component, Fragment} from 'react';

import {View, SafeAreaView, Image, ScrollView, KeyboardAvoidingView, StatusBar} from "react-native";

import { Button, TextInput} from 'react-native-paper';
import Login from '../Login/index'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Styles from './style'

class Cadastro extends Component {
    state = {
        nome: '',
        sobrenome: '',
        cpf: '',
        datanasc: '',
        email: '',
        telefone: '',
        senha: '',
    };

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={Styles.container}>

                <StatusBar
                    barStyle={"light-content"}
                />

                <SafeAreaView>
                    <ScrollView >

                        <View style={Styles.logoContainer}>
                            <Image
                                style={Styles.logo}
                                source={require('../../imagens/logo.png')}
                            />
                        </View>

                        <View style={Styles.inputContainer}>
                            <TextInput
                                label='Nome'
                                keyboardType={"default"}
                                returnKeyType={"next"}
                                mode={'outlined'}
                                value={this.state.nome}
                                onChangeText={nome => this.setState({ nome })}
                                onSubmitEditing={() => this.inputSobrenome.focus()}
                                autoCapitalize={"none"}
                                autoCorrect={false}
                                style={Styles.input}
                            />
                            <TextInput
                                label='Sobrenome'
                                returnKeyType={"next"}
                                keyboardType={"default"}
                                mode={'outlined'}
                                value={this.state.sobrenome}
                                onChangeText={sobrenome => this.setState({ sobrenome })}
                                style={Styles.input}
                                onSubmitEditing={() => this.inputCPF.focus()}
                                ref={(input) => this.inputSobrenome = input}
                            />
                            <TextInput
                                label='CPF'
                                returnKeyType={"next"}
                                keyboardType={"phone-pad"}
                                mode={'outlined'}
                                value={this.state.cpf}cpf
                                onChangeText={cpf => this.setState({ cpf })}
                                style={Styles.input}
                                // onSubmitEditing={() => this.inputDataNascimento.focus()}
                                ref={(input) => this.inputCPF = input}
                            />
                            <TextInput
                                label='Data Nascimento'
                                returnKeyType={"next"}
                                mode={'outlined'}
                                value={this.state.datanasc}
                                onChangeText={datanasc => this.setState({ datanasc })}
                                style={Styles.input}
                                onSubmitEditing={() => this.inputEmail.focus()}
                                ref={(input) => this.inputDataNascimento = input}
                            />
                            <TextInput
                                label='Email'
                                keyboardType={"email-address"}
                                returnKeyType={"next"}
                                mode={'outlined'}
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                                style={Styles.input}
                                onSubmitEditing={() => this.inputTelefone.focus()}
                                ref={(input) => this.inputEmail = input}
                            />
                            <TextInput
                                label='Telefone'
                                keyboardType={"phone-pad"}
                                returnKeyType={"next"}
                                mode={'outlined'}
                                value={this.state.telefone}
                                onChangeText={telefone => this.setState({ telefone })}
                                style={Styles.input}
                                onSubmitEditing={() => this.inputSenha.focus()}
                                ref={(input) => this.inputTelefone = input}
                            />
                            <TextInput
                                label='Senha'
                                returnKeyType={"go"}
                                mode={'outlined'}
                                value={this.state.senha}
                                secureTextEntry={true}
                                onChangeText={senha => this.setState({ senha })}
                                style={Styles.input}
                                ref={(input) => this.inputSenha = input}
                            />
                        </View>

                        <View style={Styles.buttonContainer}>
                            <Button
                                color={"#694fad"}
                                icon=""
                                mode="contained"
                                onPress={() => console.log('Pressed')}
                                style={Styles.button}
                            >
                                Criar Conta
                            </Button>
                            <Button
                                color={"#7672d1"}
                                icon=""
                                mode="contained"
                                onPress={() => this.props.navigation.navigate('login')}
                                style={Styles.button}
                            >
                                Fazer Login
                            </Button>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}

export default Cadastro;