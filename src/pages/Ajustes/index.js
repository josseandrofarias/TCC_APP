import React, { Component } from "react";
import { Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";

import Styles from "./style";
import Menu from "../../components/Menu";

class Ajustes extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView>
            <Image
            style={Styles.img}
            source={require('../../imagens/user-default.png')}
            />
            <Menu/>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default Ajustes;
