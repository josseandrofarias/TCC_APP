import React from "react";
import {Text} from "react-native";
import {createAppContainer} from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";

import Icon from "react-native-vector-icons/MaterialIcons";

import Mapa from "../../pages/Mapa";
import Colaboracoes from "../../pages/Colaborar";
import Ajustes from "../../pages/Ajustes";

const MenuRoutes = {
    Mapa: {
        name: 'Mapa',
        screen: Mapa,
        navigationOptions: {
            // title: 'Mapa',
            tabBarLabel: <Text style={{color: "white"}}>Mapa</Text>,
            barStyle: {backgroundColor: "#f8cc0f"},
            tabBarIcon: ({focused}) =>
                <Icon name="place" size={25} color={focused ? '#fff' : '#ddd'}/>
        },
    },
    Colaboracoes: {
        name: 'Colaborações',
        screen: Colaboracoes,
        navigationOptions: {
            // title: 'Colaborações',
            tabBarLabel: <Text style={{color: "white"}}>Colaborações</Text>,
            barStyle: {backgroundColor: "#7616d7"},
            tabBarIcon: ({tintColor}) =>
                <Icon name={'whatshot'} size={25} color={tintColor}/>
        },
    },
    Ajustes: {
        name: 'Ajustes',
        screen: Ajustes,
        navigationOptions: {
            // title: 'Ajustes',
            tabBarLabel: <Text style={{color: "white"}}>Ajustes</Text>,
            barStyle: {backgroundColor: "#524365"},
            tabBarIcon: ({tintColor}) =>
                <Icon name={'menu'} size={25} color={tintColor}/>
        },
    }
}

const MenuConfig = {
    // initialRouteName: 'Feed',
    // tabBarOptions: {
    //     showLabel: false
    // }
    initialRouteName: 'Ajustes',
    activeColor: '#f0edf6', //cor texto
    inactiveColor: '#3e2465',
    barStyle: {backgroundColor: '#694fad'},
    shifting: true, //ocultar texto
    labeled: true, //mostrar texto quando clicado
    lazy: true, // todas as guias render
    tabBarColor: true,

}

const MenuNavigator = createMaterialBottomTabNavigator(MenuRoutes, MenuConfig)
export default createAppContainer(MenuNavigator)