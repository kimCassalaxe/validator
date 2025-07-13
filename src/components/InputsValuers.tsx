import { TextInput ,Text,View,StyleSheet} from "react-native";
import { Colors } from "@/src/color/Colors";

type prop = {
    text: string,
    placeholder: string,
    value: string, 
    onChangeText:(value:string) => void,
    keyboardType?: "numeric" | "default"

}

export default function index(props: prop) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <TextInput  
        style={styles.elements} 
        placeholder={props.placeholder} 
        value={props.value} 
        onChangeText={props.onChangeText} 
        keyboardType={props.keyboardType} 
      />  
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
   
  },
  text: {
        color: Colors.text.color,
        fontSize: 16,  
    },
  elements: {
    backgroundColor:Colors.intup,
    width: "30%",
     padding:10,
    borderRadius:15,
    margin: 0,
  }
  ,
});
