import Btn from "@/src/components/Btn";
import Modal from "@/src/components/Modal";
import ModalVendas from "@/src/components/ModalVendas";
import { useUser } from "@/src/contexts/userContext";
import { calcularValorApresentar, calcularValoresDoTurno, calcularValorEsperado, hendleSave, save } from "@/src/logics/calculos";
import { base } from "@/src/styles/Base";
import { Tema} from "@/src/tema/Colors";
import { Bomba, Turno, } from "@/src/types/Types";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, } from "react-native";


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
  const [turnoStorge, setTurnoStorge] = useState<Turno|null>(null);
  const [turno, setTurno] = useState<Turno|null>(null);
  const [totalEsperado, setTotalEsperado] = useState<number>(0);
  const [totalApresentado,setTotalApresentado] = useState(0);
  const dataTurno = new Date().toLocaleString('pt-PT');
  const {user} = useUser()

//cacula o valor esperodo para o turno

useEffect(()=>{
  setTotalEsperado(calcularValorEsperado(bombas));
  if(turno)setTotalApresentado(calcularValorApresentar(turno))
}, [bombas,turno,totalSagrias])
useEffect(()=>{
  if(turno)setTotalApresentado(calcularValorApresentar(turno))
}, [totalSagrias])

  return (
    <ScrollView style={base.container}>
     
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
      calc={()=>{
        const turno:Turno = {id:0,bombas:bombas,multicaixa:multicaixa,codigoQR:codigoQR,frota:frota,totalSagriasPeriodica:totalSagriasPeriodica,totalSagrias:totalSagrias,usuario:user?user.id:0,data:dataTurno}
        setTurno(calcularValoresDoTurno(turno))
        setTurnoStorge(turno)
        setVisibleSave(true)
      }}
      visibleSave={visibleSave}
      save={()=>{if(turnoStorge)hendleSave(bombas,turnoStorge, user)}}
      />
    
    </ScrollView>
      

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Tema.colors.b,
    paddingTop: 50,
    padding: 5,
    paddingBottom: 100,
  },  
  btn:{
    backgroundColor: Tema.colors.btn,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    marginHorizontal: 20,

  },
  btnErrer:{
    backgroundColor: Tema.colors.erro,
    padding: 10,
    borderRadius:Tema.sizes.radus,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    marginHorizontal: 20,
  },
  btnText:{
    color: Tema.colors.text,
    fontSize: Tema.sizes.btnText,
    fontWeight: "bold",
  },
});