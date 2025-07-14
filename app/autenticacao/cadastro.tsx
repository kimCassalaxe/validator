import { Colors } from "@/src/color/Colors";
import Btn from "@/src/components/Btn";
import InputsValuers from "@/src/components/InputsValuers";
import Link from "@/src/components/Link";
import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"

export default function cadastro(){
  const [name,setName] = useState('');
  const [login,setLogin] = useState('');
  const [senha,setSenha] = useState('');
    return(
        <View style={styles.container}>
          <View style={styles.loginBox}>
            <InputsValuers  elements={styles.styleBox} value={name} placeholder="carlos duart" onChangeText={setName} />
            <InputsValuers  elements={styles.styleBox} value={login} placeholder="carlos@exemplo.com" onChangeText={setLogin} />
            <InputsValuers password={true} elements={styles.styleBox} value={senha} placeholder="carlos@exemplo.com" onChangeText={setSenha} />
          </View>
          <Btn styleText={styles.text} onPress={()=>{}} text="Enter" />
            <View style={styles.linkBox}>
              <Link text="Ja tenho conta" url={"/autenticacao/login"} />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    backgroundColor:Colors.background,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding: 15,
    paddingBottom: 100,
  },loginBox:{
    marginBottom:30,
    width:"100%",
    backgroundColor:Colors.card,
    gap:30,
    borderRadius:5,

  },styleBox:{
     width:"100%",
    backgroundColor:Colors.input,
    borderRadius:5,
    padding:10,
    fontSize:18,

  },
  text: {
   
    width:"100%",
      textAlign:"center",
    color: Colors.text.color,
        fontSize: 16,  
    },
    linkBox:{
      marginTop:10,
      flexDirection:"row",
      width:"100%",
      justifyContent:"space-between",
      color:Colors.text.color,
    },textLink:{
      color:Colors.plasholdr,
    }
});
