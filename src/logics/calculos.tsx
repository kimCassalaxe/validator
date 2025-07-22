import { router } from "expo-router"
import { addBico, getBicoByID } from "../db/useDbBico"
import { addBomba, getBombasByID } from "../db/useDbBomba"
import { addTurno, getAllTurnos, getTurnoById } from "../db/useDbTurno"
import { Bico, Bomba, BombaDB, Bombas, Turno, TurnoStorge, User } from "../types/Types"
import { Alert } from "react-native"
import { getUserById } from "../db/useDbUser"

//funcao que preciste os dados do turno no banco
export async function hendleSave(bombas:Bomba[],turno:Turno,user:User|null){
  if(user){
  if(bombas){
    try {
      const ids = await Promise.all(bombas.map(async (bomba)=>{
        const bico1:Bico = {n:bomba.gasoleo.n,abertura:bomba.gasoleo.abertura,fecho:bomba.gasoleo.fecho};
        const bico2:Bico = {n:bomba.gasolina1.n,abertura:bomba.gasolina1.abertura,fecho:bomba.gasolina1.fecho};
        const bico3:Bico = {n:bomba.gasolina2.n,abertura:bomba.gasolina2.abertura,fecho:bomba.gasolina2.fecho};
        const idBico1 = await addBico(bico1)
        const idBico2 = await addBico(bico2)
        const idBico3 = await addBico(bico3)
        console.log(`dados dos Bocos => ${idBico1}, ${idBico2}, ${idBico3} `)
        const bombaStorge:BombaDB = {n:bomba.n,gasoleo:idBico1,gasolina1:idBico2,gasolina2:idBico3}
        const idbomba = await addBomba(bombaStorge)
        console.log('id bomba ',idbomba)
        return idbomba;
      }))
      console.log('ids=====',ids.toString())
      const turnoStorge:TurnoStorge = {
        id:turno.id,
        bombas:ids.toString(), 
        usuario:user.id,
        multicaixa:turno.multicaixa,
        codigoQR:turno.codigoQR,
        frota:turno.frota,
        totalSagrias:turno.totalSagrias,
        totalSagriasPeriodica:turno.totalSagriasPeriodica,
        data:turno.data
      };
      const idTurno = await addTurno(turnoStorge)
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
//funcao que calcula os valores que a numeracao do bicos da
export function calcularValorEsperado(bombas:Bomba[]){
  let  result=0
  bombas.forEach((b) => {
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
//funcao que calcula os valores vendidos apresentados pelo funcionario
export function calcularValorApresentar(turno:Turno){
  return(
    Number(turno.multicaixa)+
    Number(turno.codigoQR)+
    Number(turno.frota)+
    Number(turno.totalSagriasPeriodica)+
    Number(turno.totalSagrias)
  )
}

export const calcularValoresDoTurno = (turno:Turno) => {
  const novoTurno:Turno = {
      id:0,
      bombas: turno.bombas, 
      usuario:turno.usuario,
      multicaixa: turno.multicaixa,
      codigoQR: turno.codigoQR,
      frota: turno.frota,
      totalSagriasPeriodica: turno.totalSagriasPeriodica,
      totalSagrias: 0, // This can be calculated later
      data:turno.data,
    };
    return novoTurno;
  }

export function save(bico1:Bico ,bico2:Bico ,bico3:Bico ,nBomba1:number){
    
  if(bico1 && bico2 && bico3 && nBomba1){  
    const bomba:Bomba = {
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
export async function sammaryTurno(id:number){
  let dados = {user:{},bombas:{},vendas:{}}
  const resultTorno = await getTurnoById(id);
  if(resultTorno){
    const user =await getUserById(Number(resultTorno.usuario))
      if(user)dados.user = user;
    dados.vendas ={
      multicaixa: resultTorno.multicaixa,
      codigoQR: resultTorno.codigoQR,
      frota: resultTorno.frota,
      totalSagriasPeriodica: resultTorno.totalSagriasPeriodica,
      totalSagrias: resultTorno.totalSagrias,
      data: resultTorno.data}
    const ids = resultTorno.bombas.split(',')
    const bombas = await Promise.all(ids.map(async (id)=>{
    const bomba =  await getBombasByID(Number(id))
      if(bomba)return bomba;
    }));
 
    if(bombas){
      const bicos =await Promise.all(
        bombas.map(
          async (value)=>{
            return { 
              numero: value?.n,
              GO: await getBicoByID(Number(value?.gasoleo)), 
              GA1: await getBicoByID(Number(value?.gasolina1)), 
              GA2:await getBicoByID(Number(value?.gasolina2))}
      }))
        //const bico = getBicoByID(Number(value?.gasoleo)) 
        dados.bombas = bicos
       console.log("====================================")
      console.log(dados)
        console.log("====================================")

    }    
  }

}
