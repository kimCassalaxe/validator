import { Colors } from "@/src/color/Colors";
import Btn from "@/src/components/Btn";
import InputsValuers from "@/src/components/InputsValuers";
import Link from "@/src/components/Link";
import { useUser } from "@/src/contexts/userContext";
import { getLoginUser } from "@/src/db/useDbUser";
import { useRouter } from "expo-router";
import React, { useState } from "react"
import { Alert, Image, StyleSheet, View } from "react-native"

export default function login(){
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  const router = useRouter()
  const {setUser} = useUser();

  async function hendleLogin(){
    if(email.trim() && senha.trim()){
      try {
        const user = await getLoginUser({email:email,senha:senha})
        console.log(user)
        if(user){
          setUser(user)
          router.push('/(tabs)/home');
        }else{
          Alert.alert("email ou senha incorretos")
        }
      } catch (error) {
        console.log("erro",error)        
      }
     
    }else{
      Alert.alert('preenha os dados corretamente')
    }
  }
    return(
        <View style={styles.container}>
          <View style={styles.loginBox}>
            <InputsValuers  elements={styles.styleBox} value={email} placeholder="carlos@exemplo.com" onChangeText={setEmail} />
            <InputsValuers password={true} elements={styles.styleBox} value={senha} placeholder="*****" onChangeText={setSenha} />
          </View>
          <Btn styleText={styles.text} onPress={()=>{hendleLogin()}} text="Enter" />
          <View style={styles.linkBox}>
            <Link text="Ainda tenho uma conta" url={'/autenticacao/cadastro'}/>
            <Link text="Esqueci minha senha" url={'/'}/>
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
    },
});
