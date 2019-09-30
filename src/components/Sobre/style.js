import { StyleSheet } from 'react-native';
import Ux from "../../funcoes/UxProporcaoTela"
const styles =  StyleSheet.create({
    container: {
        padding: 15
        // backgroundColor: "#03a18d",
    },
    img:{
        width: Ux.widthPercentageToDP(100),
        height: Ux.heightPercentageToDP(30),
    },
    titulo:{
        paddingBottom: 15
    }
})

export default styles