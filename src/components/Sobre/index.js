import React, { Component, Fragment } from "react";

import { View, SafeAreaView, Image, ScrollView, Text } from "react-native";

import Styles from "./style";
import { Headline, Subheading, Paragraph } from "react-native-paper";

class Sobre extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={Styles.container}>
          <Image
            style={Styles.img}
            source={require("../../imagens/logo.png")}
          />
          <Headline style={Styles.titulo}>HelpCidadão</Headline>
          <Subheading>Informações</Subheading>
          <Paragraph>
            HelpCidão é um aplicativo colaborativo com a prefeitura e órgãos
            terceirizados para gerenciar os problemas de sua cidade. Seu foco é
            deixar a sua cidade melhor!
          </Paragraph>
        </View>
      </SafeAreaView>
    );
  }
}

export default Sobre;
