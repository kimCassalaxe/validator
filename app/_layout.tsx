import { UserProvider } from "@/src/contexts/userContext";
import { Tema } from "@/src/tema/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
;

export default function BaseLayout() {
  return (  
    <>
    <UserProvider> 
      <StatusBar backgroundColor={Tema.colors.h1} />
      <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index"/>
      </Stack>
    </UserProvider>
  </>
  );

}
