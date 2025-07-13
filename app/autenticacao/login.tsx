import { Colors } from "@/src/color/Colors";
import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

export default function login(){
    return(
        <View style={styles.container}>
          <Image 
                    source={require('@/assets/images/f1.jpg')}
                    style={styles.f} 
                  />
            <Text>Login</Text>
        </View>
    );
}
const styles = StyleSheet.create({
container: {
    backgroundColor:Colors.background,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding: 5,
    paddingBottom: 100,
  },
  text: {
        color: Colors.text.color,
        fontSize: 16,  
    },
  elements: {
    backgroundColor:Colors.intup,
    width: "30%",
     padding:10,
    borderRadius:15,
    margin: 0,
  },f:{
    backgroundColor:"red",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    width:"100%",
    height:"100%",
    marginVertical:20,
  }
});
