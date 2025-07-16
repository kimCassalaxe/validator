import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../color/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import Btn from "./Btn";

type prop = {
    title:string,
    text: string, 
    no: any,
    ok:any,
    visible:boolean,
 
}
export default function Index(props: prop) {
    return(
        <>
        <Modal transparent visible={props.visible}>
        <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:Colors.card }}>
          <View style={{ backgroundColor:'#fff', padding:20, borderRadius:10, width:250 }}>
            <Text>{props.title}</Text>
            <Text>{props.text}</Text>
            <View>
              <Btn text="Nao" onPress={props.no}/>
              <Btn  text="Sim" onPress={props.ok}/>
            </View>
           
          </View>
        </View>
      </Modal>
        </>
    );
}
const styles = StyleSheet.create({

  btn: {
    width:"100%",
    backgroundColor: Colors.btn,
    padding: 10,
    borderRadius: 5,
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