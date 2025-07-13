import { Colors } from "@/src/color/Colors";
import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function cadastro(){
    return(
        <View style={styles.container}>
            <Text>Cadastro</Text>
        </View>
    );
}
const styles = StyleSheet.create({
container: {
    backgroundColor:Colors.background,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding: 5,
    paddingBottom: 100,
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
