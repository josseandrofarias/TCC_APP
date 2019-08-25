import React, { Component } from "react";
import { View } from "react-native";
import { List, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

import Styles from "./style";

class Menu extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <List.Item
          title="Josseandro Farias"
          description="Colaborador"
          left={props => <Avatar.Icon size={50} icon="people" />}
          style={Styles.listItem}
          right={props => <Icon name="chevron-right" size={40} />}
          onPress={() => alert("Info")}
        />
        <List.Item
          title="Ajustes"
          left={props => (
            <List.Icon size={30} icon="settings" style={Styles.iconListItem} />
          )}
          style={Styles.listItem}
          onPress={() => alert("Info")}
        />
        <List.Item
          title="Colaborações"
          left={props => (
            <List.Icon size={30} icon="whatshot" style={Styles.iconListItem} />
          )}
          style={Styles.listItem}
          onPress={() => alert("Info")}
        />
        <List.Item
          title="Compartilhar App"
          left={props => (
            <List.Icon size={30} icon="share" style={Styles.iconListItem} />
          )}
          style={Styles.listItem}
          onPress={() => alert("Info")}
        />
        <List.Item
          title="Sobre"
          left={props => (
            <List.Icon
              size={30}
              icon="remove-red-eye"
              style={Styles.iconListItem}
            />
          )}
          style={Styles.listItem}
          onPress={() => alert("Info")}
        />
      </View>
    );
  }
}

export default Menu;
