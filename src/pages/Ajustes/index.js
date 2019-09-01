import React, { Component } from "react";
import { Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Styles from "./style";
import Menu from "../../components/Menu";

import DadosUser from "../../components/MenuDadosUser/index"

const AjustesRouters = {
  Menu: Menu,
  DadosUser: {
    screen: DadosUser,
    navigationOptions: {
      headerTitle: 'Meus Dados',
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: `to A`,
    },
  },
}

const RoutesConfig = {
  headerMode: 'screen',
  mode: 'card',
  defaultNavigationOptions: {
    gesturesEnabled: true,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const height = layout.initHeight;
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateY }] };
    },
  }),
}

const MainStack = createStackNavigator(AjustesRouters, RoutesConfig);
 
 const App = createAppContainer(MainStack);

export default App;