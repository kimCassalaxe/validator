import { Colors } from "@/src/color/Colors";
import { UserProvider } from "@/src/contexts/userContext";
import {  Stack} from "expo-router";;
import { StatusBar } from "react-native";

export default function BaseLayout() {
  return (  
    <>
    <UserProvider> 
      <StatusBar backgroundColor={Colors.background} />
      <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index"/>
      </Stack>
    </UserProvider>
  </>
  );

}
