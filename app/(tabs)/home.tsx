import { Colors } from "@/src/color/Colors";
import Btn from "@/src/components/Btn";
import Modal from "@/src/components/Modal";
import ModalVendas from "@/src/components/ModalVendas";
import { useUser } from "@/src/contexts/userContext";
import { addBico } from "@/src/db/useDbBico";
import { addBomba } from "@/src/db/useDbBomba";
import { addTurno } from "@/src/db/useDbTurno";
import { Bico, Bomba, Turno, User, } from "@/src/types/Types";
import { Redirect, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet,} from "react-native";


async function hendleSave(bombas:Bomba[],turno:Turno,user:User|null){
  console.log('feito1')
  if(user){
    console.log('feito')
  if(bombas){
    try {
      const ids = await Promise.all( 
        bombas.map(async (bomba)=>{
        const idBico1 = await addBico({n:bomba.gasoleo.n,abertura:bomba.gasoleo.abertura,fecho:bomba.gasoleo.fecho})
        const idBico2 = await addBico({n:bomba.gasolina1.n,abertura:bomba.gasolina1.abertura,fecho:bomba.gasolina1.fecho})
        const idBico3 = await addBico({n:bomba.gasolina2.n,abertura:bomba.gasolina2.abertura,fecho:bomba.gasolina2.fecho})
        const idbomba = await addBomba({n:bomba.n,gasoleo:idBico1,gasolina1:idBico2,gasolina2:idBico3,id:0})

        return idbomba;
      })
    )  
    const idTurno = await addTurno({
      bombas:ids.toString(),
      usuario:turno.usuario,
      multicaixa:turno.multicaixa,
      codigoQR:turno.codigoQR,
      frota:turno.frota,
      totalSagriasPeriodica:turno.totalSagriasPeriodica,
      totalSagrias:turno.totalSagrias,
      data:turno.data})
      console.log(idTurno)
    } catch (error) {
        console.log("ocorreu um erro",error)
    }
    
  }
  }else{
    console.log('feit3')
    return (router.replace("/autenticacao/login"))
  }
 
}
function calcularValorEsperado(bombas:Bomba[]){
  let  result=0
  bombas.forEach((b,index) => {
    const bico1=(Number(b.gasoleo.fecho) - Number(b.gasoleo.abertura));
    const bico2=(Number(b.gasolina1.fecho) -  Number(b.gasolina1.abertura));
    const bico3= (Number(b.gasolina2.fecho) -  Number(b.gasolina2.abertura));
    const v1 = bico1*400;
    const v2 = bico2*300;
    const v3 = bico3*300;
    const r = v1+v2+v3; 
    result= r+result
  });
  return result;
}
function calcularValorApresentar(turno:Turno){
  return(
    Number(turno.multicaixa)+
    Number(turno.codigoQR)+
    Number(turno.frota)+
    Number(turno.totalSagriasPeriodica)
  )
}

  const calcularValoresDoTurno = (bombas:Bomba[],usuario:number, multicaixa:number, codigoQR:number, frota:number, totalSagriasPeriodica:number) => {
      const turno = {
      bombas: bombas, 
      usuario:usuario,
      multicaixa: multicaixa,
      codigoQR: codigoQR,
      frota: frota,
      totalSagriasPeriodica: totalSagriasPeriodica,
      totalSagrias: 0, // This can be calculated later
      data: new Date().toISOString(),
    };
    return turno;
  }

  function save(bico1:Bico ,bico2:Bico ,bico3:Bico ,nBomba1:number){
    
    if(bico1 && bico2 && bico3 && nBomba1){  
    const bomba:Bomba={
      n: nBomba1,
      gasoleo: {n:bico1.n,abertura:Number(bico1.abertura),fecho:Number(bico1.fecho)},
      gasolina1: {n:bico2.n,abertura:Number(bico2.abertura),fecho:Number(bico2.fecho)},
      gasolina2: {n:bico3.n,abertura:Number(bico3.abertura),fecho:Number(bico3.fecho)}      
    };
    return bomba;
    
  }else{
    Alert.alert("Erro ao salvar os dados da bomba. Verifique se todos os campos estão preenchidos corretamente.");
    return void 0;
  }
   }


export default function Home() {
  const [nBomba1, setNBomba1] = useState(0);
  const [abertuda1, setAbertura1] = useState('');
  const [fecho1, setFecho1] = useState('');
  const [abertuda2, setAbertura2] = useState('');
  const [fecho2, setFecho2] = useState('');
  const [abertuda3, setAbertura3] = useState('');
  const [fecho3, setFecho3] = useState('');
 
  const [nBomba2, setNBomba2] = useState(0);
  const [sAbertuda1, setSAbertura1] = useState('');
  const [sFecho1, setSFecho1] = useState('');
  const [sAbertuda2, setSAbertura2] = useState('');
  const [sFecho2, setSFecho2] = useState('');
  const [sAbertuda3, setSAbertura3] = useState('');
  const [sFecho3, setSFecho3] = useState('');

  const [multicaixa, setMulticaixa] = useState(0);
  const [codigoQR, setCodigoQR] = useState(0);
  const [frota, setFrota] = useState(0);
  const [totalSagrias, setTotalSagrias] = useState(0);
  const [totalSagriasPeriodica, setTotalSagriasPeriodica] = useState(0);
  
 
  const [visible, setVisible] = useState(false);
  const [visibleSave, setVisibleSave] = useState(false);
  const [bombas,setBombas] =useState<Bomba[]>([]);
  const [turno, setTurno] = useState<Turno|null>(null);
  const [totalEsperado, setTotalEsperado] = useState<number>(0);
  const [totalApresentado,setTotalApresentado] = useState(0);

  const {user} = useUser()

//cacula o valor esperodo para o turno

useEffect(()=>{
  setTotalEsperado(calcularValorEsperado(bombas));
  if(turno)setTotalApresentado(calcularValorApresentar(turno))
}, [bombas,turno])

  return (
    <ScrollView style={styles.container}>
     
      <Modal
        visible={true}
        nBomba={nBomba1} 
        setNBomba={setNBomba1}
        abertuda1={abertuda1}
        setAbertura1={setAbertura1}
        fecho1={fecho1}
        setFecho1={setFecho1}
        abertuda2={abertuda2}
        setAbertura2={setAbertura2}
        fecho2={fecho2}
        setFecho2={setFecho2}
        abertuda3={abertuda3}
        setAbertura3={setAbertura3}
        fecho3={fecho3}
        setFecho3={ setFecho3}
        save={()=>{
          setBombas((prev)=>{
            const novaBomba = save(
              {n:1,abertura:Number(abertuda1),fecho:Number(fecho1)},
              {n:2,abertura:Number(abertuda2),fecho:Number(fecho2)},
              {n:3,abertura:Number(abertuda3),fecho:Number(fecho3)},
              nBomba1
          );
        if(!novaBomba) return prev;
          const novoArray = [...prev];
          novoArray[0] =novaBomba;
          return novoArray;

        });
      }} // metodo que salva os ddos da primeira bomba
      />

      <Modal
        visible={visible} // Set to true to show the modal
        nBomba={nBomba2} 
        setNBomba={setNBomba2}
        abertuda1={sAbertuda1}
        setAbertura1={setSAbertura1}
        fecho1={sFecho1}
        setFecho1={setSFecho1}
        abertuda2={sAbertuda2}
        setAbertura2={setSAbertura2}
        fecho2={sFecho2}
        setFecho2={setSFecho2}
        abertuda3={sAbertuda3}
        setAbertura3={setSAbertura3}
        fecho3={sFecho3}
        setFecho3={setSFecho3}
        save={()=>{
          setBombas((prev)=>{
            const novaBomba = save(
              {n:1,abertura:Number(sAbertuda1),fecho:Number(sFecho1)},
              {n:2,abertura:Number(sAbertuda2),fecho:Number(sFecho2)},
              {n:3,abertura:Number(sAbertuda3),fecho:Number(sFecho3)},
              nBomba2
          );
        if(!novaBomba) return prev;
          const novoArray = [...prev];
          novoArray[1] =novaBomba;
          return novoArray;

        });
      }}// metodo que salva os ddos da segunda bomba
      />
      
      
      {bombas[0]?
        (<Btn icon={visible ? "close" : "add"} 
          text={visible ? "Fechar esta Bomba" : "Abrir outra Bomba"} 
          onPress={() => {setVisible(visible? false : true)}}/>):
        <></>
      }
      
      <ModalVendas 
      multicaixa={multicaixa} 
      setMulticaixa={setMulticaixa} 
      codigoQR={codigoQR} 
      setCodigoQR={setCodigoQR} 
      frota={frota} 
      setFrota={setFrota} 
      totalSagriasPeriodica={totalSagriasPeriodica} 
      setTotalSagriasPeriodica={setTotalSagriasPeriodica} 
      totalSagrias={totalSagrias} 
      setTotalSagrias={setTotalSagrias} 
      valordoEsperado={bombas ? totalEsperado : 0}
      valordoApresentado={turno?totalApresentado:0}
      calc={()=>{setTurno(calcularValoresDoTurno(bombas,
        multicaixa,
        user?user.id:0,
        codigoQR,
        frota,
        totalSagriasPeriodica))
        setVisibleSave(true)
      }}
      visibleSave={visibleSave}
      save={()=>{
        if(turno)hendleSave(bombas,turno, user)}}
      />
    
    </ScrollView>
      

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingTop: 50,
    padding: 5,
    paddingBottom: 100,
  },  
  btn:{
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    marginHorizontal: 20,

  },
  btnErrer:{
    backgroundColor: Colors.erro,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    marginHorizontal: 20,
  },
  btnText:{
    color: Colors.text.color,
    fontSize: 16,
    fontWeight: "bold",
  },
});