import React, {Component, Fragment} from 'react';
import Colaborar from "../../components/Colaborar/index";
import Styles from "../../components/Colaborar/style";
import {AsyncStorage, SafeAreaView, ScrollView} from "react-native";

export default class Colaboracoes extends Component {

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Colaborar/>
                </ScrollView>
            </SafeAreaView>
        );
    }

};




