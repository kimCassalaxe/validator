import { Colors } from "@/src/color/Colors";
import Alert from "@/src/components/Alert";
import Btn from "@/src/components/Btn";
import { useUser } from "@/src/contexts/userContext";
import { Redirect, useRouter } from "expo-router";
import {useEffect, useState } from "react";
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
        <Btn styleText={styles.btnText} styleBtn={styles.btnEdit} icon={'calendar-month'} onPress={()=>{}} text="editar"/>
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
    backgroundColor:Colors.background,
    flex:1,
    rowGap:20,
    padding: 5,
    paddingBottom: 100,
  },perfil:{
    backgroundColor:Colors.card,
    padding: 10,
    borderRadius: 15,
    justifyContent:'center',
    alignItems:'center',

    marginVertical:20,
  },textValuer:{
    color:Colors.plasholdr
  },modure:{
    backgroundColor:"#ccc",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:"100%",
    borderStyle:'solid',
    borderColor:Colors.plasholdr,
    borderWidth:5,
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
    color:Colors.text.color
  },btnSession:{
    width:"100%",
    backgroundColor:Colors.erro,
    flexDirection:'row',
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    gap:20,
    position:"absolute",
    bottom:20,
    left:5,
  },btn:{
    flexDirection:'row',

    alignItems:'center',
    borderRadius:10,
    gap:20
    
  },btnText:{
    color:Colors.text.color
  },btnEdit:{
    flexDirection:'row',
     alignItems:'center',
    backgroundColor:Colors.plasholdr,
    padding:2,
    gap:5,
    borderRadius:20,
    opacity:.5,
    position:"absolute",
    bottom:5,
  }

})