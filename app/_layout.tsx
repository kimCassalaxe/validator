import { Colors } from "@/src/color/Colors";
import {  Stack} from "expo-router";;
import { StatusBar } from "react-native";

export default function BaseLayout() {
  return (  
    <>
    <StatusBar backgroundColor={Colors.background} />
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index"/>
    </Stack>
  </>
  );

}
