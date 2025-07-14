import { TextInput ,Text,View,StyleSheet} from "react-native";
import { Colors } from "@/src/color/Colors";

type prop = {
    elements?:any,
    text?: string,
    placeholder: string,
    value: string, 
    onChangeText:(value:string) => void,
    keyboardType?: "numeric" | "default"
    password?:boolean,

}

export default function index(props: prop) {
  return (
    <View style={styles.container}>
      {props.elements?<></>:<Text style={styles.text}>{props.text}</Text>}
      <TextInput  
        style={props.elements?props.elements:styles.elements} 
        placeholder={props.placeholder} 
        value={props.value} 
        onChangeText={props.onChangeText} 
        keyboardType={props.keyboardType} 
        secureTextEntry={props.password}
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
    backgroundColor:Colors.input,
    width: "30%",
     padding:10,
    borderRadius:15,
    margin: 0,
  }
  ,
});
