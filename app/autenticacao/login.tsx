import Btn from "@/src/components/Btn";
import InputsValuers from "@/src/components/InputsValuers";
import Link from "@/src/components/Link";
import { useUser } from "@/src/contexts/userContext";
import { getLoginUser } from "@/src/db/useDbUser";
import { baseAutentication } from "@/src/styles/Base";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, View } from "react-native";

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
        <View style={baseAutentication.container}>
          <View style={baseAutentication.loginBox}>
            <InputsValuers  elements={baseAutentication.styleBox} value={email} placeholder="carlos@exemplo.com" onChangeText={setEmail} />
            <InputsValuers password={true} elements={baseAutentication.styleBox} value={senha} placeholder="*****" onChangeText={setSenha} />
          </View>
          <Btn styleText={baseAutentication.text} icon={'arrow-forward'} onPress={()=>{hendleLogin()}} text="Enter" />
          <View style={baseAutentication.linkBox}>
            <Link text="Ainda tenho uma conta" url={'/autenticacao/cadastro'}/>
            <Link text="Esqueci minha senha" url={'/autenticacao/recuperarSenha'}/>
          </View>
        </View>
    );
}
