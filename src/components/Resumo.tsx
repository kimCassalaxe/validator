import Btn from "@/src/components/Btn";
import ResultBox from "@/src/components/ResultBox";
import TBody from "@/src/components/TBody";
import {Tema } from "@/src/tema/Colors";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Turno } from "../types/Types";

type Props = {turno:Turno};

export default function index(pro: Props){

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Conta do Turno</Text>

      <Text style={styles.data}>12/09/3453 23:45:34</Text>
       <View style={styles.tHeader}>
      <Text style={styles.tHItem}>produto</Text>
      <Text style={styles.tHItem}>aberura</Text>
      <Text style={styles.tHItem}>fecho</Text>
      <Text style={styles.tHItem}>litro</Text>
      <Text style={styles.tHItem}>valor</Text>
       </View>
       
       {Array.isArray(pro.turno.bombas)?pro.turno.bombas.map((b,index)=>(
          <React.Fragment key={index}>
    <TBody
      product="Gasoleo"
      opening={b.gasoleo.abertura.toString()}
      closing={b.gasoleo.fecho.toString()}
      liters={(b.gasoleo.fecho - b.gasoleo.abertura).toString()}
      value={((b.gasoleo.fecho - b.gasoleo.abertura) * 400).toString()}
    />
    <TBody
      product="Gasolina"
      opening={b.gasolina1.abertura.toString()}
      closing={b.gasolina1.fecho.toString()}
      liters={(b.gasolina1.fecho - b.gasolina1.abertura).toString()}
      value={((b.gasolina1.fecho - b.gasolina1.abertura) * 300).toString()}
    />
    <TBody
      product="Gasolina"
      opening={b.gasolina2.abertura.toString()}
      closing={b.gasolina2.fecho.toString()}
      liters={(b.gasolina2.fecho - b.gasolina2.abertura).toString()}
      value={((b.gasolina2.fecho - b.gasolina2.abertura) * 300).toString()}
    />
  </React.Fragment>
         )):<></>}
      <ResultBox apresentado="2332" multicaixa="4234" codigoQR="4556" numeracao="4569" diferenca="7867" frota="5653" sangriaPeriodicas="9723" ultimaSangria="074876"/>
      <View >
        <Btn text="Guardar os dados" icon={"person"} onPress={()=>(router.push("/autenticacao/login"))}/>
      </View>
      </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor:Tema.colors.b,
    flex:1,
    padding: Tema.sizes.padd,
  },h1:{
    width: '100%',
    color:Tema.colors.h1,
    fontSize:Tema.sizes.h1,
    fontWeight:'900',
  },data: {
    width: '100%',
    textAlign:"left",
    color: Tema.colors.border,
    fontSize: 20,  
    paddingVertical: 10,
    },
    tHeader:{
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomColor: Tema.colors.border,
      borderBottomWidth: 1,
      paddingVertical: 10,
      backgroundColor: Tema.colors.s,
      width: '100%',
    },
tHItem:{
  color: Tema.colors.text,
  fontSize: 16,
  fontWeight: 'bold',
  width: 'auto',
  textAlign: 'center',
}
});