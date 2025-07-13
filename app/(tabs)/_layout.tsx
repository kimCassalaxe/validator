import { Colors } from "@/src/color/Colors";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import {  Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  return (  
    <>
    <Tabs  
    screenOptions={
      {
        headerShown: false ,
        headerStyle:{backgroundColor:Colors.background,},
        headerTitleStyle: { color: Colors.text.color },
        headerTitleAlign:"center",
        tabBarActiveTintColor:Colors.text.color,
        tabBarInactiveTintColor:Colors.plasholdr,
        tabBarStyle:{backgroundColor:Colors.tabBar}
      }} >
    <Tabs.Screen name="home" options={{title: 'home',tabBarIcon:({color,focused,size})=>(<MaterialIcons name="home"  size={size} color={focused?Colors.text.color:Colors.plasholdr} />)}} />
    <Tabs.Screen name="dashbord"  options={{
      headerShown: true ,
      title: 'Dashboard',
      tabBarIcon:({color,focused,size})=>(<Entypo name="bar-graph" size={size} color={focused?Colors.text.color:Colors.plasholdr}  />)}} />
    <Tabs.Screen name="user" options={{headerShown: true ,title: 'User',tabBarIcon:({color,focused,size})=>(<MaterialIcons name="person" size={size} color={focused?Colors.text.color:Colors.plasholdr}  />)}} />
    </Tabs>
  </>
  );

}
const styles = StyleSheet.create({
  header:{
  backgroundColor:Colors.background, 
  alignItems:'center'
  }
})