import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"
import { Colors } from "@/src/color/Colors";


type prop = {
  title:string,
  abertuda: string, 
  fecho: string,  
  setAbertura: (value: string) => void,
  setFecho: (value: string) => void
}
export default function Index(props: prop) {
    return(
        <View >
            <Text style={styles.subTitle}>{props.title}</Text>
            <View style={styles.inputBox}>
            <TextInput style={styles.elements} placeholder="Abertura" onChangeText={props.setAbertura} value={props.abertuda} keyboardType="numeric" />
            <TextInput style={styles.elements} placeholder="Fecho" onChangeText={props.setFecho} value={props.fecho} keyboardType="numeric" />
        </View>
          </View>
    );
}
const styles = StyleSheet.create({
    subTitle:{
    color:Colors.text.color,
    marginBottom:5,
  },
  inputBox:{
flexDirection: "row",
    width: "100%",
    gap: 10,
    justifyContent: "space-between",  
    alignItems: "center",

  },
  elements: {
    padding:10,
    borderRadius:15,
    color:Colors.text.color,
    backgroundColor:Colors.intup,
    width: "45%",
    borderBottomColor: Colors.border,
  },
});