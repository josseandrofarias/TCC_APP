import React from 'react';
import { View, Text } from 'react-native';

const Ajustes = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ajustes</Text>
    </View>
);

Ajustes.navigationOptions = {
    title: 'Ajustes',
}

export default Ajustes;