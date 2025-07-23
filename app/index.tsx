import Btn from "@/src/components/Btn";
import { initDb, limparTabela } from "@/src/db/dbInit";
import { getAllUsers } from "@/src/db/useDbUser";
import {Tema } from "@/src/tema/Colors";
import { User } from "@/src/types/Types";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";



export default function index(){
  const [users,setUsers] = useState<User[]|null>(null)
  
  
useEffect(() => {
    (async () => {
      await initDb();
      //limparTabela();
      const userList = await getAllUsers();
      setUsers(userList);
      console.log('Usuários buscados do banco:', userList);
    })();
  }, []);
  
  // Se quiser monitorar as mudanças na variável users:
  useEffect(() => {
    console.log('Users atualizados no state:', users);
  }, [users]);
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Validator</Text>
      <Text style={styles.p}>O sistema integrado que permite fazer uma gestao mais eficiente do seu dia-a dia na bomba</Text>
      <View style={styles.btnBox}>
      <Btn text="Fazer contas" icon={'local-gas-station'} onPress={()=>(router.push("/(tabs)/home"))}/>
      <Btn text="Criar um perfil" icon={"person"} onPress={()=>(router.push("/autenticacao/login"))}/>
      </View>
    </View>

      // />
  );

}
const styles = StyleSheet.create({
  container: {
    backgroundColor:Tema.colors.b,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding: Tema.sizes.padd,
  },h1:{
    color:Tema.colors.h1,
    fontSize:Tema.sizes.h1,
    fontWeight:'900',
  },p: {
    textAlign:"center",
    color: Tema.colors.text,
    fontSize: Tema.sizes.h6,  
    },
    btnBox:{
      width:"100%",
      marginTop:70,
      gap:Tema.sizes.gap,
    },
});