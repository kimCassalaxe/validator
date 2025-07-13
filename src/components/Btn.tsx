import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../color/Colors";
import { MaterialIcons } from "@expo/vector-icons";

type prop = {
    text: string, 
    onPress: any,
    icon:any,
    styleText?: any
    styleBtn?:any,
}
export default function Index(props: prop) {
    return(
        <>
        <TouchableOpacity style={!props.styleBtn?styles.btn:props.styleBtn} onPress={props.onPress}>
            <Text style={!props.styleText?styles.btnText:props.styleText}>{props.text}</Text>
            <MaterialIcons name={props.icon} size={24} color={Colors.secondary} />
        </TouchableOpacity>
        </>
    );
}
const styles = StyleSheet.create({

  btn: {
    backgroundColor: Colors.btn,
    padding: 10,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    marginVertical: 0,
  },
  btnText: {
    color: Colors.text.color,
    fontSize: 16,
    fontWeight: "bold",
  },
});