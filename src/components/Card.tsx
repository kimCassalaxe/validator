import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../color/Colors";
import { MaterialIcons } from "@expo/vector-icons";

type prop = {
    text: string, 
    title:string,
}
export default function Index(props: prop) {
    return(
        <View style={styles.container}>
            <Text style={styles.titleCard}>{props.title}</Text>
            <Text style={styles.btnText}>{props.text}</Text>
        
        </View>
    );
}
const styles = StyleSheet.create({
  container:{
    width:'45%',
    backgroundColor:Colors.card,
    padding: 10,
    borderRadius: 15,
    gap: 10,
  },
  btnText: {
    color: Colors.text.color,
    fontWeight: "bold",
    fontSize:30,
  },
  titleCard: {
    color: Colors.plasholdr,
    fontSize: 16,
  }
});