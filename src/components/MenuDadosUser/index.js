import React, { Component, Fragment } from "react";

import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  StatusBar,
  Alert, AsyncStorage
} from "react-native";

import { Button, TextInput } from "react-native-paper";

import Styles from "./style";
import api from "../../services/api";

class DadosUser extends Component {
  state = {
    id_pessoa: "",
    nome: "Nome",
    sobrenome: "Sobreome",
    cpf: "00000000000",
    data_nascimento: "00/00/0000",
    email: "email@email.com",
    telefone: "(67) 9 0000-0000",
    senha: "",
    editar: true,
    buttonText: "teste"
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem('@CodeApi:token');
    const user = JSON.parse(await AsyncStorage.getItem('@CodeApi:user')) || null;

    if (token && user){
      this.setState({ ...user});
      // this.props.navigation.navigate('app')
    }
  }

  atualiza = async () => {
    try {
      const response = await api.post('/atualizaCadastro', {
        id: this.state.id_pessoa,
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        email: this.state.email,
        cpf: this.state.cpf,
        data_nascimento: this.state.data_nascimento,
        senha: this.state.senha,
      });
      this.setState({ ok: 'Usuário Alterado Com Sucesso!'})
    } catch (err) {
      // Alert('Logado com sucesso!')
      this.setState({ ok: 'Dados Inválidos!' })
    }
  };

  alterar = () => {
    this.setState({ editar: !this.state.editar })
    !this.state.editar ? this.atualiza() : ""
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={Styles.container}>
        <StatusBar barStyle={"dark-content"} />

        <SafeAreaView>
          <ScrollView>
            <TouchableOpacity onPress={() => alert("Info")}>
              <Image
                style={Styles.img}
                source={require("../../imagens/user-default.png")}
                onPress={() => alert("Info")}
              />
            </TouchableOpacity>
            <View style={Styles.inputContainer}>
              <TextInput
                label="Nome"
                disabled={this.state.editar}
                keyboardType={"default"}
                returnKeyType={"next"}
                mode={"outlined"}
                value={this.state.nome}
                onChangeText={nome => this.setState({ nome })}
                onSubmitEditing={() => this.inputSobrenome.focus()}
                autoCapitalize={"none"}
                autoCorrect={false}
                style={Styles.input}
              />
              <TextInput
                label="Sobrenome"
                disabled={this.state.editar}
                returnKeyType={"next"}
                keyboardType={"default"}
                mode={"outlined"}
                value={this.state.sobrenome}
                onChangeText={sobrenome => this.setState({ sobrenome })}
                style={Styles.input}
                onSubmitEditing={() => this.inputCPF.focus()}
                ref={input => (this.inputSobrenome = input)}
              />
              <TextInput
                label="CPF"
                disabled={this.state.editar}
                returnKeyType={"next"}
                keyboardType={"phone-pad"}
                mode={"outlined"}
                value={this.state.cpf}
                cpf
                onChangeText={cpf => this.setState({ cpf })}
                style={Styles.input}
                // onSubmitEditing={() => this.inputDataNascimento.focus()}
                ref={input => (this.inputCPF = input)}
              />

              <TextInput
                // onTouchStart={() => alert("Info")}
                label="Data Nascimento"
                disabled={this.state.editar}
                returnKeyType={"next"}
                mode={"outlined"}
                value={this.state.data_nascimento}
                onChangeText={datanasc => this.setState({ datanasc })}
                style={Styles.input}
                onSubmitEditing={() => this.inputEmail.focus()}
                ref={input => (this.inputDataNascimento = input)}
              />
              <TextInput
                label="Email"
                keyboardType={"email-address"}
                disabled={this.state.editar}
                returnKeyType={"next"}
                mode={"outlined"}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                style={Styles.input}
                onSubmitEditing={() => this.inputTelefone.focus()}
                ref={input => (this.inputEmail = input)}
              />
              <TextInput
                label="Telefone"
                disabled={this.state.editar}
                keyboardType={"phone-pad"}
                returnKeyType={"next"}
                mode={"outlined"}
                value={this.state.telefone}
                onChangeText={telefone => this.setState({ telefone })}
                style={Styles.input}
                onSubmitEditing={() => this.inputSenha.focus()}
                ref={input => (this.inputTelefone = input)}
              />
              <TextInput
                label="Senha"
                disabled={this.state.editar}
                returnKeyType={"go"}
                mode={"outlined"}
                value={this.state.senha}
                secureTextEntry={true}
                onChangeText={senha => this.setState({ senha })}
                style={Styles.input}
                ref={input => (this.inputSenha = input)}
              />
            </View>

            <View style={Styles.buttonContainer}>
              <Button
                color={"#7672d1"}
                icon=""
                mode="contained"
                onPress={() => this.alterar()}
                style={Styles.button}
              >
                {this.state.editar ? "Alterar" : "Salvar"}
              </Button>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default DadosUser;
