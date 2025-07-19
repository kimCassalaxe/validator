import { Colors } from "@/src/color/Colors";
import Card from "@/src/components/Card";
import Item from "@/src/components/Item";
import Search from "@/src/components/Search";
import { getAllBico } from "@/src/db/useDbBico";
import { getAllBombas } from "@/src/db/useDbBomba";
import { getAllTurnos } from "@/src/db/useDbTurno";
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
    const listBombas = await getAllBombas();
    return listBombas;
  }
     const getbicos = async()=>{
    const listBombas = await getAllBico();
    return listBombas;
  }
  useEffect( ()=>{
    (async ()=>{
      const bicos = await getbicos()
      const lista = await getlist()
      const bom = await getbombas()
  
      
      setDados(lista)
      console.log('======================================')
      console.log('bicos',bicos)
      console.log('Bomba',bom)
      console.log('Turno',dados)
      console.log('======================================')
    })();
      
  },[]);
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
        renderItem={(item)=>(<Item data="domingo 12/07/2025" text="29300Kz" onPress={()=>{}} />)}
        
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.background,
    height:"100%",
    padding: 5,
  },titles:{
    fontSize:Colors.text.title.size,
    fontWeight:"bold",
    marginBottom: 10,
    color: Colors.text.color,
  },cardBox:{
    flexDirection:"row",
    gap:20,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20,
  }
})