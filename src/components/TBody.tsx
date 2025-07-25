import Btn from "@/src/components/Btn";
import { initDb, limparTabela } from "@/src/db/dbInit";
import { getAllUsers } from "@/src/db/useDbUser";
import {Tema } from "@/src/tema/Colors";
import { User } from "@/src/types/Types";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";


type Prop = {
  product: string;
  opening: string;
  closing: string;
  liters: string;
  value: string;
}
export default function index(props:Prop){
  return (  
    <View style={styles.tBody}>
        <Text style={styles.tBItem}>{props.product}</Text>
        <Text style={styles.tBItem}>{props.opening}</Text>
        <Text style={styles.tBItem}>{props.closing}</Text>
        <Text style={styles.tBItem}>{props.liters}</Text>
        <Text style={styles.tBItem}>{props.value}</Text>
    </View>
 
  );

}

const styles = StyleSheet.create({
    tBody:{
      flexDirection: "row", 
      justifyContent: "space-between",
      paddingVertical: 5,
      width: '100%',
    },
    tBItem:{
        color: Tema.colors.text,
        fontSize: 16,
        width: 'auto',
        textAlign: 'left',
    },
});