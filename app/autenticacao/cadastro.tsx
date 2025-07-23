import Btn from "@/src/components/Btn";
import InputsValuers from "@/src/components/InputsValuers";
import Link from "@/src/components/Link";
import { addUsuario } from "@/src/db/useDbUser";
import { baseAutentication } from "@/src/styles/Base";
import { User } from "@/src/types/Types";
import React, { useState } from "react";
import { Alert, View } from "react-native";

export default function cadastro(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');

  async function hendleCadastrar(){
    if(name.trim() && email.trim() &&senha.trim()){
      try {
        
        const user :User = {id:1,email:email,foto:'',nome:name,posto:'',senha:senha}
        const result = await addUsuario(user);
        console.log(user)
        Alert.alert('sucesso',result.toString())
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
            <InputsValuers  elements={baseAutentication.styleBox} value={name} placeholder="carlos duart" onChangeText={setName} />
            <InputsValuers  elements={baseAutentication.styleBox} value={email} placeholder="carlos@exemplo.com" onChangeText={setEmail} />
            <InputsValuers password={true} elements={baseAutentication.styleBox} value={senha} placeholder="carlos@exemplo.com" onChangeText={setSenha} />
          </View>
          <Btn styleText={baseAutentication.text} icon={'arrow-forward'} onPress={()=>{hendleCadastrar()}} text="Enter" />
            <View style={baseAutentication.linkBox}>
              <Link text="Ja tenho conta" url={"/autenticacao/login"} />
          </View>
        </View>
    );
}


