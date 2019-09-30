import { StyleSheet } from "react-native";
import Ux from "../../funcoes/UxProporcaoTela" 
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    // position: "absolute",
    // left: 0,/
    // right: 0,
    // top: 350,

  },
  img: {
    width: Ux.widthPercentageToDP(100),
    height: Ux.heightPercentageToDP(30),
    
  },
  listItem: {
    // flex: 1, 
    alignItems: "center",
  },
  iconListItem :{
    alignItems: "baseline",
  },
});

export default styles;
