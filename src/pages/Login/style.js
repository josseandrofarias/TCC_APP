import { StyleSheet } from 'react-native';
// "#694fad"
const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8cc0f",
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: '10%'
    },
    logo:{
        width: 132,
        height: 150,
        shadowOffset: {width: 1, height: 1},
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    buttonLogin:{
        backgroundColor: "#7616d7"
    },
    input: {
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    inputContainer: {
        padding: 20
    },
    button: {
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        padding: 40
    },
    buttonEsqueciContainer: {
        padding: 20
    },
    dadosInvalidos: {
        paddingLeft: 20,
        color: "red"
    },
    buttonText: {
        color: "#a964ef"
    },
})

export default styles