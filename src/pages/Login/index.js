import React from 'react';
import { View, Text } from 'react-native';

const Login = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login</Text>
    </View>
);

Login.navigationOptions = {
    title: 'Login',
}

export default Login;