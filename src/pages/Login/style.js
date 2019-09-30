import { StyleSheet } from 'react-native';
// "#694fad"
const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#03a18d",
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: '10%'
    },
    logo:{
        width: 150,
        height: 150,
    },
    buttonLogin:{
        backgroundColor: "#694fad"
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
        color: "rgba(123,86,208,0.99)"
    },
})

export default styles