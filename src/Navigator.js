import React from "react";
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import App from "./App";

const MenuRoutes = createBottomTabNavigator({
    Feed: {
        name: 'Mapa',
        screen: App,
        navigationOptions: {
            title: 'Mapa',
            tabBarIcon: ({tintColor}) =>
                <Icon name={'home'} size={30} color={tintColor}/>
        }
    },
    Add: {
        name: 'Colaboracoes',
        screen: App,
        navigationOptions: {
            title: 'Colaborações',
            tabBarIcon: ({tintColor}) =>
                <Icon name={'camera'} size={30} color={tintColor}/>
        }
    },
    Profile: {
        name: 'Ajustes',
        screen: App,
        navigationOptions: {
            title: 'Ajustes',
            tabBarIcon: ({tintColor}) =>
                <Icon name={'user'} size={30} color={tintColor}/>
        }
    }
})

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false
    }
}

const MenuNavigator = createAppContainer(MenuRoutes, MenuConfig)
export default MenuNavigator