import React from "react";
import { Text, TextInput, View } from "react-native";
import { stylesBico } from "../styles/Inputs";


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
            <Text style={stylesBico.subTitle}>{props.title}</Text>
            <View style={stylesBico.inputBox}>
            <TextInput style={stylesBico.elements} placeholder="Abertura" onChangeText={props.setAbertura} value={props.abertuda} keyboardType="numeric" />
            <TextInput style={stylesBico.elements} placeholder="Fecho" onChangeText={props.setFecho} value={props.fecho} keyboardType="numeric" />
        </View>
          </View>
    );
}