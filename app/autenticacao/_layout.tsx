import React from "react";
import {  Stack, Tabs } from "expo-router";
import { Colors } from "@/src/color/Colors";

export default function layout() {
  return (  
    <Stack
    screenOptions={
          {
            headerStyle:{backgroundColor:Colors.background,},
            headerTitleStyle: { color: Colors.text.color },
            headerTitleAlign:"center"
          }} >
      <Stack.Screen name="login" options={{title:"Login"}} />
      <Stack.Screen name="cadastro" options={{title:"Cadastro"}} />
    </Stack>

  );

}
