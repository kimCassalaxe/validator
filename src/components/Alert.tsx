import { Modal, StyleSheet, Text, View } from "react-native";
import { Tema } from "../tema/Colors";
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
        <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:Tema.colors.success }}>
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
    backgroundColor: Tema.colors.btn,
    padding: 10,
    borderRadius: Tema.sizes.radus,
    flexDirection: "row",
    justifyContent: "center",
    gap: Tema.sizes.gap,
    alignItems: "center",
    marginVertical: 0,
  },
  btnText: {
    color: Tema.colors.text,
    fontSize: Tema.sizes.p,
    fontWeight: "bold",
  },
});