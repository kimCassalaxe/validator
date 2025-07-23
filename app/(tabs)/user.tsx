import Btn from "@/src/components/Btn";
import { useUser } from "@/src/contexts/userContext";
import {Tema } from "@/src/tema/Colors";
import { Redirect, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";


export default function User() {
  const routes = useRouter()
  const {user,setUser} = useUser()
  const [visible,setVisibe] = useState(false)

  function hadleLogout(){
    setUser(null); //remove o usuario logado 
    routes.back()//redireciona para tela  home
  }
  useEffect(()=>{
   
  }
  ,[]);
//se tiver usuario logado a tela de usuario e renderizada
// se nao e redirecionado para tela de login
    if(user){
        return (
      <View style={styles.container}>
      <View style={styles.perfil}>
        <View style={styles.modure}>
        <Image 
          source={user.foto? require('@/assets/images/f1.jpg'):require('@/assets/images/f1.jpg')}
          style={styles.f} 
        />
        <Btn styleText={styles.btnText} styleBtn={styles.btnEdit} onPress={()=>{}} text="editar"/>
      </View>
      <Text style={styles.text}>{user.nome}</Text>
      <Text style={styles.text}>Numero Mecanografico: <Text style={styles.textValuer}>{user.mecanografico?user.mecanografico:"#####"}</Text></Text>
      <Text style={styles.text}>Email: <Text style={styles.textValuer}>{user.email}</Text></Text>
      <Text style={styles.text}>Posto: <Text style={styles.textValuer}>{user.posto}</Text></Text>
      </View>
      

      <Btn styleText={styles.btnText} styleBtn={styles.btn} icon={'calendar-month'} onPress={()=>{/*router.navigate('/autenticacao/login')*/}} text="Ver escala"/>
        <Btn styleText={styles.btnText} styleBtn={styles.btn} icon={'arrow-forward'} onPress={()=>{}} text="Ver Produtividade"/>
      <Btn styleBtn={styles.btnSession} icon={'close'} onPress={()=>{ hadleLogout()}} text="teminar Sessao"/>
    </View>)

    }else{
        return (
      <Redirect  href="/autenticacao/login" />
        );
    }

}
const styles = StyleSheet.create({
  container: {
    backgroundColor:Tema.colors.b,
    flex:1,
    rowGap:20,
    padding: 5,
  },perfil:{
    backgroundColor:Tema.colors.input,
    padding: 10,
    borderRadius: 15,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
  },textValuer:{
    color:Tema.colors.border
  },modure:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:"100%",
    borderStyle:'solid',
    borderColor:Tema.colors.border,
    borderWidth:Tema.sizes.border,
    width:150,
    height:150,
    marginVertical:20,
  },f:{
    backgroundColor:"red",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    width:"100%",
    height:"100%",
    marginVertical:20,
  },text:{
    color:Tema.colors.text
  },btnSession:{
    fontSize:Tema.sizes.btnText,
    width:"100%",
    backgroundColor:Tema.colors.erro,
    padding:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    gap:20,
    position:"relative",
    bottom:-90,
    left:0,
  },btn:{
    flexDirection:'row-reverse',
    backgroundColor:Tema.colors.input,
    justifyContent:"flex-end",
    alignItems:'center',
    borderRadius:10,
    gap:10
    
  },btnText:{
    color:Tema.colors.text,
    fontSize:11,
  },btnEdit:{
    width:'45%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:Tema.colors.border,
    padding:0,
    gap:5,
    borderRadius:20,
    opacity:.5,
    position:"absolute",
    bottom:5,
  }

})