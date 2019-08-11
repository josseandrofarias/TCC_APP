import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';

import Ajustes from '../src/pages/Ajustes/index';
import Colaborar from '../src/pages/Colaborar/index';
// import {SafeAreaView, Text, View} from "react-native";
// Icon.loadFont();
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';


const mainNavigation = () => {
    return (
        <SafeAreaView>
            <View >
                <Text>Engine:</Text>
            </View>
        </SafeAreaView>
    );
};

export default mainNavigation;
//
//
// const mainNavigation = createMaterialBottomTabNavigator(
//     {
//         Colaborar: {
//             screen: Colaborar,
//             navigationOptions: () => ({
//                 tabBarIcon: ({ focused }) => (
//                     <Icon name="lock" size={20} color={focused ? '#fff' : '#ddd'} />
//                 ),
//             }),
//         },
//         Ajustes: {
//             screen: Ajustes,
//             navigationOptions: () => ({
//                 tabBarIcon: ({ focused }) => (
//                     <Icon name="lock" size={20} color={focused ? '#fff' : '#ddd'} />
//                 ),
//             }),
//         },
//     },
//     {
//         barStyle: {
//             backgroundColor: '#7159c1',
//         },
//     },
// );
//
// export default createAppContainer(mainNavigation);