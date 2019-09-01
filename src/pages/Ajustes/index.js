import React, { Component } from "react";
import { Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Styles from "./style";
import Menu from "../../components/Menu";

import DadosUser from "../../components/MenuDadosUser/index"
import Sobre from "../../components/Sobre/index"

const AjustesRouters = {
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null,
    },
  },
  DadosUser: {
    screen: DadosUser,
    navigationOptions: {
      headerTitle: 'Meus Dados',
      headerBackTitle: null,
    },
  },
  Sobre: {
    screen: Sobre,
    navigationOptions: {
      headerTitle: 'Sobre',
      headerBackTitle: null,
    },
  },
}

const RoutesConfig = {
  headerMode: 'float',
  mode: 'card',
  headerBackTitleVisible: true
}

const MainStack = createStackNavigator(AjustesRouters, RoutesConfig);
 
 const App = createAppContainer(MainStack);

export default App;