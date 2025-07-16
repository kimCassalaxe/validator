import React from "react";
import {  Stack, Tabs, useRouter } from "expo-router";
import { Colors } from "@/src/color/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function layout() {
  const router = useRouter() 
  return (  
    <Stack
    screenOptions={
          {
            headerStyle:{backgroundColor:Colors.background,},
            headerTitleStyle: { color: Colors.text.color },
            headerTitleAlign:"center",
            headerBackButtonMenuEnabled:true,
            
          }} >
      <Stack.Screen name="login" options={{title:"Login"}} />
      <Stack.Screen name="cadastro" options={{title:"Cadastro"}} />
      <Stack.Screen name="recuperarSenha" options={{title:"Recuperar Senha"}} />
    </Stack>

  );

}
