import React from 'react';
import { View, Text } from 'react-native';

const Colaborar = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Colaborações</Text>
    </View>
);

Colaborar.navigationOptions = {
    title: 'Colaborar',
}

export default Colaborar;