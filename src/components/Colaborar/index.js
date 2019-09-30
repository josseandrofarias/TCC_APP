import React, { Component } from "react";
import {View, Image, SafeAreaView, StatusBar, AsyncStorage, Text} from "react-native";
import {Paragraph, Dialog, Portal, TextInput, RadioButton, List, Button} from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialIcons";

import Styles from "./style";
import api from "../../services/api";

class Colaborar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pedidos: [],
            items: [],
            errorMessage: '',
            visible: false
        }
    }

    async componentWillMount() {
        try {
            let user = JSON.parse(await AsyncStorage.getItem('@CodeApi:user'));
            const response = await api.get('/pedidos/' + user.id_pessoa)
            const pedidos =  response.data
            this.setState({ pedidos})
        } catch (err) {
            // Alert('Logado com sucesso!')
            this.setState({ errorMessage: 'Sem Dados de pedidos' })
        }
    }

    _showDialog = () => {
        this.setState({ visible: true })
        // {this.state.setores && this.getSetores}
        // this.state.items = this.state.setores.map(function (item) {
        //     return  ( <View key={item.id}>
        //         <Text>{item.nome}</Text>
        //         <RadioButton value={item.id} />
        //     </View>)
        // })
    };

    _hideDialog = () => {
        this.setState({ visible: false })
    };

    render() {
        return (
                <View
                      style={Styles.container}>
                    {this.state.pedidos.map(item => (
                        <List.Item key={item.data_hora}
                           title={item.nome}
                           right={props => (
                               <View style={Styles.iconListItem}>

                                   <List.Icon
                                       size={10}
                                       icon="search"
                                   />

                                   <Text>{item.status == 1 ? "Em Analise" : "Concluído"}</Text>
                               </View>

                           )}
                           style={Styles.listItem}
                           description={item.obs}
                           onPress={this._showDialog}
                        />
                    ))}

                    <Portal>
                        <Dialog
                            visible={this.state.visible}
                            onDismiss={this._hideDialog}>
                                <Dialog.Title>Alert</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>Dados Da Ocorrência</Paragraph>

                            </Dialog.Content>
                            <Dialog.Actions>
                            <Button onPress={this._hideDialog}>Fechar</Button>
                        </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
        );
    }
}

export default Colaborar;
