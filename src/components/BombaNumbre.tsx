import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import {Tema} from "../tema/Colors";
import Btn from "./Btn";
import { useState } from "react";

type prop = {
    value: string, 
    onChangeText: (text: string) => void
}
export default function Index(props: prop) {
  const [modalVisible,setModalVisible] = useState(false)
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
    fontSize: Tema.sizes.subTitle,
      fontWeight: "bold",
      marginBottom: 10,
      color: Tema.colors.text,
    },
  element: {
    borderRadius:Tema.sizes.radus,
    borderColor:Tema.colors.border,
    borderWidth:Tema.sizes.border,
    borderStyle:"solid",
    width: "25%",
    padding:10,
    backgroundColor:Tema.colors.input,
    color: Tema.colors.text,
  },
});