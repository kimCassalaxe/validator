import {Tema } from "@/src/tema/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Prop = {
    numeracao:string,
    multicaixa:string,
    codigoQR:string,
    frota:string,
    sangriaPeriodicas:string,
    ultimaSangria:string,
    diferenca:string,
    apresentado:string,
}

export default function index(props:Prop){
    return(
    <View style={styles.result}>
         <View  style={styles.rItem}>
      <Text style={styles.tHItem}>total da numeracao</Text><Text style={styles.rItemV}>{props.numeracao}</Text>
         </View>
         <View  style={styles.rItem}>
      <Text style={styles.tHItem}>multicaixa </Text><Text style={styles.rItemV}>{props.multicaixa}</Text>
         </View>
         <View  style={styles.rItem}>
      <Text style={styles.tHItem}>codigoQR</Text><Text style={styles.rItemV}>{props.codigoQR}</Text>
         </View>
         <View  style={styles.rItem}>
      <Text style={styles.tHItem}>frota+ </Text><Text style={styles.rItemV}>{props.frota}</Text>
         </View>
         <View  style={styles.rItem}>
      <Text style={styles.tHItem}>sangria periodicas</Text><Text style={styles.rItemV}>{props.sangriaPeriodicas}</Text>
         </View>
         <View  style={styles.rItem}>
      <Text style={styles.tHItem}>ultima sangria</Text><Text style={styles.rItemV}>{props.ultimaSangria}</Text>
         </View>
         <View  style={styles.rItem}>
      <Text style={styles.tHItem}>total da Apresentado</Text><Text style={styles.rItemV}>{props.apresentado}</Text>
         </View>
         <View  style={styles.rItem}>
      <Text style={styles.tHItem}>diferenca N-A   </Text><Text style={styles.rItemV}>{props.diferenca}</Text>
         </View>
</View>
);
}

const styles = StyleSheet.create({
  tHItem:{
    color: Tema.colors.text,
    fontSize: 16,
  },result:{
    width: '100%',
    paddingVertical: 10,
  },rItem:{
   flexDirection:"row",
      justifyContent:"space-between",
    borderBottomWidth: 1,
    paddingVertical: 10,
    width: '100%',
  },rItemV:{
    fontWeight: 'bold',
  }
});

