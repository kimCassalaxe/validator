import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../color/Colors";

type prop = {
    value: string, 
    onChangeText: (text: string) => void
}
export default function Index(props: prop) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Numero da Bomba</Text>
            <TextInput  style={styles.element} placeholder='XX' value={props.value} onChangeText={props.onChangeText} keyboardType='numeric' /> 
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginVertical: 10,

    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {    
    fontSize: Colors.text.title.size,
      fontWeight: "bold",
      marginBottom: 10,
      color: Colors.text.color,
    },
  element: {
    width: "25%",
    borderRadius:15,
    padding:10,
    fontWeight:'bold',
    backgroundColor:Colors.input
  },
});