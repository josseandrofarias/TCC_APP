import { StyleSheet } from 'react-native';
// "#694fad"
const styles =  StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#03a18d",
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: '1%'
    },
    logo:{
        width: 100,
        height: 100,
    },
    buttonLogin:{
        backgroundColor: "#694fad"
    },
    input: {
        marginBottom: 2,
        paddingHorizontal: 8,
        // backgroundColor: "#694fad",
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
    buttonText: {
        color: "rgba(123,86,208,0.99)"
    },
})

export default styles