import { Colors } from "@/src/color/Colors";
import Btn from "@/src/components/Btn";
import InputsValuers from "@/src/components/InputsValuers";
import Link from "@/src/components/Link";
import {  passwordUpdateUser } from "@/src/db/useDbUser";
import { passwordUpdate, User } from "@/src/types/Types";
import React, { useState } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"

export default function recuperarSenha(){
  const [velhaSenha,setVelhaSenha] = useState('');
  const [novaSenha,setNovaSenha] = useState('');
  const [confirmarSenha,setConfirmarSenha] = useState('');

  async function hendleCadastrar(){
    if(velhaSenha.trim() && novaSenha.trim() && confirmarSenha.trim()){
      try {
        
        const senhas :passwordUpdate = {velhaSenha:velhaSenha,confirmarSenha:confirmarSenha,novaSenha:velhaSenha}
        const result = await passwordUpdateUser(senhas);
        Alert.alert('sucesso')
      } catch (error) {
        console.log('algo deu errado',error)
      }
      
    }else{
      Alert.alert('preecha os dados corretament')
    }

  }
    return(
        <View style={styles.container}>
          <View style={styles.loginBox}>
            <InputsValuers  elements={styles.styleBox} value={velhaSenha} placeholder="Digite a senha antiga" onChangeText={setVelhaSenha} />
            <InputsValuers  elements={styles.styleBox} value={novaSenha} placeholder="Digite a senha nova" onChangeText={setNovaSenha} />
            <InputsValuers password={true} elements={styles.styleBox} value={confirmarSenha} placeholder="Confirma a senha" onChangeText={setConfirmarSenha} />
          </View>
          <Btn styleText={styles.text} onPress={()=>{hendleCadastrar()}} text="Enter" />
            <View style={styles.linkBox}>
                <Link text="Ainda tenho uma conta" url={'/autenticacao/cadastro'}/>
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
    gap:30,
    borderRadius:5,

  },styleBox:{
     width:"100%",
    backgroundColor:Colors.input,
    borderRadius:5,
    padding:10,
    fontSize:18,
    color: Colors.text.color,
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
