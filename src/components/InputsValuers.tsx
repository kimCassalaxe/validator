import { TextInput ,Text,View} from "react-native";
import { stylesValue } from "../styles/Inputs";

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
    <View style={stylesValue.container}>
      {props.elements?<></>:<Text style={stylesValue.text}>{props.text}</Text>}
      <TextInput  
        style={[stylesValue.elements,props.elements]} 
        placeholder={props.placeholder} 
        value={props.value} 
        onChangeText={props.onChangeText} 
        keyboardType={props.keyboardType} 
        secureTextEntry={props.password}
      />  
    </View>
  );
}

