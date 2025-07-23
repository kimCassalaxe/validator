import { Tema } from "@/src/tema/Colors";
import { Stack, useRouter } from "expo-router";
import React from "react";

export default function layout() {
  const router = useRouter() 
  return (  
    <Stack
    screenOptions={
          {
            headerStyle:{backgroundColor:Tema.colors.b,},
            headerTitleStyle: { color: Tema.colors.text},
            headerTitleAlign:"center",
            headerBackButtonMenuEnabled:true,
            
          }} >
      <Stack.Screen name="login" options={{title:"Login"}} />
      <Stack.Screen name="cadastro" options={{title:"Cadastro"}} />
      <Stack.Screen name="recuperarSenha" options={{title:"Recuperar Senha"}} />
    </Stack>

  );

}
