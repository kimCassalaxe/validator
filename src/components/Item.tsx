import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Tema } from "../tema/Colors";
 
type prop = {
    text: string,
    data:string, 
    onPress: any,

}
export default function Index(props: prop) {
    return(
        <>
        <TouchableOpacity style={styles.btn} onPress={props.onPress}>
            <AntDesign style={styles.icon} name="check" size={24}color={Tema.colors.text} />
            <View>
            <Text style={styles.btnText}>{props.text}</Text>
            <Text style={styles.data}>{props.data}</Text>
            </View>
        </TouchableOpacity>
        </>
    );
}
const styles = StyleSheet.create({

  btn: {
    borderRadius: 50,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  btnText: {
    color: Tema.colors.text,
    fontSize: Tema.sizes.p,
    fontWeight: "bold",
  },
  data:{
    color: Tema.colors.border,
    fontSize: 12,
  }
  ,icon:{
    backgroundColor:Tema.colors.input,
    padding: 10  
  },
});