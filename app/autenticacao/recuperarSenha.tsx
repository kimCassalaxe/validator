import Btn from "@/src/components/Btn";
import InputsValuers from "@/src/components/InputsValuers";
import Link from "@/src/components/Link";
import { passwordUpdateUser } from "@/src/db/useDbUser";
import { baseAutentication } from "@/src/styles/Base";
import { passwordUpdate } from "@/src/types/Types";
import React, { useState } from "react";
import { Alert, View } from "react-native";

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
        <View style={baseAutentication.container}>
          <View style={baseAutentication.loginBox}>
            <InputsValuers  elements={baseAutentication.styleBox} value={velhaSenha} placeholder="Digite a senha antiga" onChangeText={setVelhaSenha} />
            <InputsValuers  elements={baseAutentication.styleBox} value={novaSenha} placeholder="Digite a senha nova" onChangeText={setNovaSenha} />
            <InputsValuers password={true} elements={baseAutentication.styleBox} value={confirmarSenha} placeholder="Confirma a senha" onChangeText={setConfirmarSenha} />
          </View>
          <Btn styleText={baseAutentication.text} icon={"lock-reset"} onPress={()=>{hendleCadastrar()}} text="Enter" />
            <View style={baseAutentication.linkBox}>
                <Link text="Ainda tenho uma conta" url={'/autenticacao/cadastro'}/>
                <Link text="Ja tenho conta" url={"/autenticacao/login"} />
          </View>
        </View>
    );
}
