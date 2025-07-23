import { Tema } from "@/src/tema/Colors";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  return (  
    <>
    <Tabs  
    screenOptions={
      {
        headerShown: false ,
        headerStyle:{backgroundColor:Tema.colors.b,},
        headerTitleStyle: { color: Tema.colors.text },
        headerTitleAlign:"center",
        tabBarActiveTintColor:Tema.colors.btn,
        tabBarInactiveTintColor:Tema.colors.s,
        tabBarStyle:{backgroundColor:Tema.colors.b,position:'absolute',margin:10,bottom:1,borderRadius:Tema.sizes.radus}
      }} >
    <Tabs.Screen name="home" options={{title: 'Fazer conta',tabBarIcon:({color,focused,size})=>(<MaterialIcons name="home"  size={size} color={focused?Tema.colors.btn:Tema.colors.s} />)}} />
    <Tabs.Screen name="dashbord"  options={{
      headerShown: true ,
      title: 'Dashboard',
      tabBarIcon:({color,focused,size})=>(<Entypo name="bar-graph" size={size} color={focused?Tema.colors.btn:Tema.colors.s}  />)}} />
    <Tabs.Screen name="user" options={{headerShown: true ,title: 'User',tabBarIcon:({color,focused,size})=>(<MaterialIcons name="person" size={size} color={focused?Tema.colors.btn:Tema.colors.s}  />)}} />
    </Tabs>
  </>
  );

}
const styles = StyleSheet.create({
  header:{
  backgroundColor:Tema.colors.b, 
  alignItems:'center'
  }
})