import Card from "@/src/components/Card";
import Item from "@/src/components/Item";
import Search from "@/src/components/Search";
import { getBicoByID } from "@/src/db/useDbBico";
import { getBombasByID } from "@/src/db/useDbBomba";
import { getAllTurnos } from "@/src/db/useDbTurno";
import { sammaryTurno } from "@/src/logics/calculos";
import { Tema } from "@/src/tema/Colors";
import { Turno } from "@/src/types/Types";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";


export default function Dashbord() {
  const [search,setSearch]= useState('')
  const [dados,setDados] = useState<Turno[]|null>(null)

  const getlist = async()=>{
    const list = await getAllTurnos();
    return list;
  }
    const getbombas = async()=>{
    const listBombas = await getBombasByID(15);
    return listBombas;
  }
     const getbicos = async()=>{
    const listbicos = await getBicoByID(41);
    return listbicos;
  }
  useEffect( ()=>{
    (async ()=>{
      const bombas = await getbombas()
      const bicos = await getbicos()
      const lista = await getlist()
      setDados(lista)
    })();
      
  },[dados]);
  return (
    <View style={styles.container}>
      <Text style={styles.titles}>Vendas do Ultimo Turno</Text>
      <View style={styles.cardBox}>
        <Card title="Litros vendidos" text="1880"/>
      <Card title="Total em dinheiro" text="1880"/>
      </View>
      
      <Search valuer={search} setValuer={setSearch} placeholder="Search"/>
      <FlatList
        data={dados}
        renderItem={(item)=>(<Item data={item.item.data} text="29300Kz" onPress={()=>{sammaryTurno(item.item.id)}} />)}
        
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:Tema.colors.b,
    height:"100%",
    padding: 5,
  },titles:{
    fontSize:Tema.sizes.h1,
    fontWeight:"bold",
    marginBottom: 10,
    color: Tema.colors.text,
  },cardBox:{
    flexDirection:"row",
    gap:20,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20,
  }
})