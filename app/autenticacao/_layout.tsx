import React from "react";
import {  Stack, Tabs } from "expo-router";

export default function layout() {
  return (  
    <Stack>
      <Stack.Screen name="login" options={{title:"Lgin"}} />
      <Stack.Screen name="cadastro" options={{title:"Cadastro"}} />
    </Stack>

  );

}
