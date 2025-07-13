import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../color/Colors";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
 
type prop = {
    text: string,
    data:string, 
    onPress: any,

}
export default function Index(props: prop) {
    return(
        <>
        <TouchableOpacity style={styles.btn} onPress={props.onPress}>
            <AntDesign style={styles.icon} name="check" size={24}color={Colors.text.color} />
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
    color: Colors.text.color,
    fontSize: 16,
    fontWeight: "bold",
  },
  data:{
    color: Colors.plasholdr,
    fontSize: 12,
  }
  ,icon:{
    backgroundColor:Colors.card,
    padding: 10,
    borderRadius: 50,
  },
});