import { StyleSheet } from 'react-native';
import Ux from "../../funcoes/UxProporcaoTela"
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
    img:{
        width: Ux.widthPercentageToDP(100),
        height: Ux.heightPercentageToDP(30),
    },
    buttonLogin:{
        backgroundColor: "#694fad"
    },
    input: {
        marginBottom: 2,
        paddingHorizontal: 2,
        // backgroundColor: "#694fad",
    },
    inputContainer: {
        padding: 20
    },
    button: {
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        padding: 20
    },
    buttonEsqueciContainer: {
        padding: 20
    },
    buttonText: {
        color: "rgba(123,86,208,0.99)"
    },
})

export default styles